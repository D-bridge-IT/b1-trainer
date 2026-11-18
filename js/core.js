'use strict';
/* ===== Утилиты ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const paras = s => esc(s).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
const LET = 'abcdefghijklmnopqrstuvwxyz';
const fmtTime = s => { s = Math.max(0, Math.round(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
const fmtPts = n => (Math.round(n * 10) / 10).toString().replace('.', ',');
const words = t => (String(t || '').trim().match(/[\p{L}\d][\p{L}\d'’-]*/gu) || []).length;

const store = {
  get(k, d) { try { const v = localStorage.getItem('b1t:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('b1t:' + k, JSON.stringify(v)); } catch (e) { /* приватный режим */ } },
  del(k) { try { localStorage.removeItem('b1t:' + k); } catch (e) { /* */ } },
  clear() { try { Object.keys(localStorage).filter(k => k.startsWith('b1t:')).forEach(k => localStorage.removeItem(k)); } catch (e) { /* */ } }
};

let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2600);
}

/* ===== Озвучка: немецкий синтез речи браузера ===== */
const TTS = {
  syn: window.speechSynthesis || null, f: null, m: null, hasDe: null, keep: [], token: 0, playingId: null,
  rate: store.get('rate', 0.9),
  init() {
    if (!this.syn) return;
    const load = () => {
      const all = this.syn.getVoices() || [];
      if (!all.length) return;
      const de = all.filter(v => /^de([-_]|$)/i.test(v.lang));
      this.hasDe = de.length > 0;
      const fem = /anna|katja|hedda|petra|marlene|vicki|helena|amala|seraphina|sabina|steffi|louisa|lena|female|weiblich|shelley|sandy|flo\b/i;
      const mal = /stefan|conrad|markus|yannick|hans|martin|killian|florian|daniel|viktor|eddy|reed|rocko|grandpa|\bmale|männlich/i;
      const score = v => (/natural|neural|online|premium|enhanced|siri/i.test(v.name) ? 4 : 0) + (/google/i.test(v.name) ? 2 : 0) + (v.lang.replace('_', '-') === 'de-DE' ? 2 : 0) + (v.localService ? 1 : 0);
      const best = l => l.slice().sort((a, b) => score(b) - score(a))[0] || null;
      const isF = v => fem.test(v.name), isM = v => !isF(v) && mal.test(v.name);
      this.f = best(de.filter(isF)) || best(de.filter(v => !isM(v))) || best(de);
      this.m = best(de.filter(isM)) || best(de.filter(v => v !== this.f && !isF(v))) || null;
    };
    load();
    try { this.syn.onvoiceschanged = load; } catch (e) { /* */ }
    [300, 1000, 2500].forEach(ms => setTimeout(load, ms));
  },
  split(t) {
    // делим на предложения, но не после цифр («am 3. Mai») — длинные фразы Chrome обрывает
    const out = []; let last = 0; const re = /([.!?…][“"»)]?)\s+(?=[A-ZÄÖÜ„"«])/g; let m;
    while ((m = re.exec(t))) {
      if (/\d/.test(t[m.index - 1] || '')) continue;
      const end = m.index + m[1].length; out.push(t.slice(last, end)); last = end;
    }
    out.push(t.slice(last));
    return out.map(s => s.trim()).filter(Boolean);
  },
  speak(segs, onend) {
    if (!this.syn) { toast('Этот браузер не поддерживает озвучку'); onend && onend(false); return; }
    this.stop();
    const my = ++this.token, parts = [];
    (Array.isArray(segs) ? segs : [{ v: 'f', t: segs }]).forEach(s => this.split(s.t).forEach(t => parts.push({ v: s.v, t })));
    const done = ok => { if (my !== this.token) return; this.token++; this.playingId = null; onend && onend(ok); };
    this.keep = parts.map((p, i) => {
      const u = new SpeechSynthesisUtterance(p.t), male = p.v === 'm';
      u.lang = 'de-DE';
      const voice = male ? (this.m || this.f) : this.f;
      if (voice) u.voice = voice;
      u.rate = this.rate;
      u.pitch = male ? (this.m ? 1 : 0.55) : (this.m ? 1 : 1.15);
      if (i === parts.length - 1) u.onend = () => done(true);
      u.onerror = e => { if (e.error !== 'canceled' && e.error !== 'interrupted') done(false); };
      return u;
    });
    this.keep.forEach(u => this.syn.speak(u));
  },
  stop() { this.token++; this.playingId = null; if (this.syn) try { this.syn.cancel(); } catch (e) { /* */ } }
};
TTS.init();

/* ===== Запись голоса ===== */
const Rec = {
  supported: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder),
  mr: null, stream: null, chunks: [], since: 0,
  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mr = new MediaRecorder(this.stream); this.chunks = [];
    this.mr.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
    this.mr.start(); this.since = Date.now();
  },
  stop() {
    return new Promise(res => {
      if (!this.mr) return res(null);
      const mr = this.mr;
      mr.onstop = () => {
        this.stream.getTracks().forEach(t => t.stop());
        const url = URL.createObjectURL(new Blob(this.chunks, { type: mr.mimeType || 'audio/webm' }));
        this.mr = null; res({ url, sec: Math.round((Date.now() - this.since) / 1000) });
      };
      mr.stop();
    });
  },
  cancel() { if (this.mr) { try { this.mr.onstop = null; this.mr.stop(); this.stream.getTracks().forEach(t => t.stop()); } catch (e) { /* */ } this.mr = null; } }
};

/* ===== Данные ===== */
const TELC = window.TELC || {};
const EXAMS = (TELC.exams || []).slice().sort((a, b) => a.id.localeCompare(b.id));
const TR = Object.assign({ grammar: [], vocab: [], phrases: [] }, TELC.training || {});
const getExam = id => EXAMS.find(e => e.id === id) || EXAMS[0];
