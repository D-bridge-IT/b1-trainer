'use strict';
/* ===== Языки интерфейса =====
   Исходный язык — русский. Перевод накладывается на готовую страницу: словарь i18n/<код>.js
   сопоставляет русскую строку (или HTML небольшого блока) с переводом. Немецкие задания не трогаются. */
const LANGS = { ru: 'Русский', uk: 'Українська', en: 'English', pl: 'Polski', tr: 'Türkçe', es: 'Español', fr: 'Français', it: 'Italiano', ro: 'Română', ar: 'العربية', fa: 'فارسی', az: 'Azərbaycanca' };
const RTL = { ar: 1, fa: 1 };
const I18N = (() => {
  const CYR = /[А-Яа-яЁёІіЇїЄєҐґ]/, NUM = /\d+(?:[.,]\d+)?/g;
  const INL = { B: 1, I: 1, EM: 1, STRONG: 1, SMALL: 1, S: 1, SUP: 1, U: 1, BR: 1, SPAN: 1 };
  const SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, AUDIO: 1, NOSCRIPT: 1 };
  let lang = store.get('lang', null);
  if (!LANGS[lang]) { const n = (navigator.language || 'ru').slice(0, 2).toLowerCase(); lang = LANGS[n] ? n : 'ru'; }
  const dict = (window.TELC && window.TELC.i18n && window.TELC.i18n[lang]) || null, pat = {};
  const collected = new Set(), dataSeen = new Set();
  const norm = s => String(s).replace(/\s+/g, ' ').trim();
  if (dict) Object.keys(dict).forEach(k => {           // шаблоны с числами: «Отвечено: 3 из 5» → «Отвечено: {0} из {1}»
    const src = k.match(NUM); if (!src) return;
    const used = src.map(() => false); let ok = true;
    const t = dict[k].replace(NUM, m => { const i = src.findIndex((v, j) => v === m && !used[j]); if (i < 0) { ok = false; return m; } used[i] = true; return '{' + i + '}'; });
    if (!ok || used.includes(false)) return;
    let n = 0; pat[k.replace(NUM, () => '{' + (n++) + '}')] = t;
  });
  function lookup(key) {
    if (!dict) return null;
    if (dict[key] != null) return dict[key];
    const nums = [], k = key.replace(NUM, m => { nums.push(m); return '{' + (nums.length - 1) + '}'; });
    return nums.length && pat[k] != null ? pat[k].replace(/\{(\d+)\}/g, (m, i) => nums[i]) : null;
  }
  function inlineOnly(el, depth) {
    for (const c of el.childNodes) {
      if (c.nodeType === 3) continue;
      if (c.nodeType !== 1 || !INL[c.tagName] || depth > 2) return false;
      const a = c.attributes;
      if (a.length > 1 || (a.length === 1 && !(a[0].name === 'class' && c.tagName === 'SPAN' && a[0].value === 'muted'))) return false;
      if (!inlineOnly(c, depth + 1)) return false;
    }
    return true;
  }
  function tr(node) {
    if (node.nodeType === 3) {
      const raw = node.nodeValue, key = norm(raw); if (!key || !CYR.test(key)) return;
      const t = lookup(key);
      if (t != null) node.nodeValue = raw.replace(/^(\s*)[\s\S]*?(\s*)$/, (m, a, b) => a + t + b); else if (API.collect) collected.add(key);
      return;
    }
    if (node.nodeType !== 1 || SKIP[node.tagName] || node.id === 'lang') return;   // названия языков — всегда на своём языке
    for (const at of ['placeholder', 'title', 'aria-label']) { const v = node.getAttribute(at); if (v && CYR.test(v)) { const t = lookup(norm(v)); if (t != null) node.setAttribute(at, t); else if (API.collect) collected.add(norm(v)); } }
    if (!CYR.test(node.textContent)) return;
    if (node.hasAttribute('data-t')) { const key = norm(node.textContent), t = lookup(key); if (t != null) node.textContent = t; else if (API.collect) dataSeen.add(key); return; }
    if (inlineOnly(node, 0)) {
      const key = norm(node.innerHTML), t = lookup(key);
      if (t != null) { node.innerHTML = t; return; }
      if (API.collect) { collected.add(key); return; }
    }
    for (const c of [...node.childNodes]) tr(c);
  }
  const API = {
    lang, names: LANGS, collect: false, collected, dataSeen, norm,
    t: s => { const r = lookup(norm(s)); if (r == null && API.collect) collected.add(norm(s)); return r == null ? s : r; },
    apply(root) { if (dict || API.collect) tr(root || document.body); },
    set(l) { if (!LANGS[l] || l === lang) return; store.set('lang', l); location.reload(); },
    init() {
      const html = document.documentElement; html.lang = lang; html.dir = RTL[lang] ? 'rtl' : 'ltr';
      const sel = document.getElementById('lang');
      if (sel) { sel.innerHTML = Object.keys(LANGS).map(k => `<option value="${k}"${k === lang ? ' selected' : ''}>${LANGS[k]}</option>`).join(''); sel.onchange = () => API.set(sel.value); }
      if (!dict) return;
      document.title = API.t(document.title);
      const cf = window.confirm; window.confirm = m => cf.call(window, API.t(m));
      tr(document.body);
      let busy = false;
      const mo = new MutationObserver(list => {
        if (busy) return; busy = true;
        const todo = new Set();
        for (const m of list) {
          if (m.type === 'characterData') { if (m.target.parentNode) todo.add(m.target.parentNode); }
          else m.addedNodes.forEach(n => todo.add(n.nodeType === 3 ? n.parentNode : n));
        }
        todo.forEach(n => { if (n && n.isConnected) tr(n); });
        mo.takeRecords(); busy = false;
      });
      mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  };
  return API;
})();
