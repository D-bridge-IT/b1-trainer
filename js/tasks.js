'use strict';
/* ===== Структура экзамена telc Deutsch B1 ===== */
const PARTS = [
  { id: 'l1', mod: 'lesen', sec: 'lesen', name: 'Leseverstehen · Teil 1', short: 'Lesen 1', from: 1, n: 5, pts: 5, ref: 'Überschriften',
    instr: 'Lesen Sie zuerst die zehn Überschriften. Lesen Sie dann die fünf Texte und entscheiden Sie, welche Überschrift (a–j) am besten zu welchem Text (1–5) passt.',
    ru: 'Глобальное понимание: к каждому из 5 текстов подберите один из 10 заголовков. 5 заголовков лишние.' },
  { id: 'l2', mod: 'lesen', sec: 'lesen', name: 'Leseverstehen · Teil 2', short: 'Lesen 2', from: 6, n: 5, pts: 5, ref: 'Text',
    instr: 'Lesen Sie den Text und die Aufgaben 6–10. Welche Lösung (a, b oder c) ist jeweils richtig?',
    ru: 'Детальное понимание: один длинный текст и 5 вопросов с выбором a/b/c. Вопросы идут в порядке текста.' },
  { id: 'l3', mod: 'lesen', sec: 'lesen', name: 'Leseverstehen · Teil 3', short: 'Lesen 3', from: 11, n: 10, pts: 2.5, ref: 'Anzeigen',
    instr: 'Lesen Sie die Situationen 11–20 und die Anzeigen a–l. Finden Sie für jede Situation die passende Anzeige. Sie können jede Anzeige nur einmal verwenden. Wenn Sie zu einer Situation keine Anzeige finden, wählen Sie x.',
    ru: 'Выборочное понимание: 10 ситуаций и 12 объявлений. Каждое объявление используется один раз; если подходящего нет — отметьте x.' },
  { id: 's1', mod: 'sprachbausteine', sec: 'sb', name: 'Sprachbausteine · Teil 1', short: 'Sprachb. 1', from: 21, n: 10, pts: 1.5,
    instr: 'Lesen Sie den Text und entscheiden Sie, welches Wort (a, b oder c) in die Lücken 21–30 passt.',
    ru: 'Грамматика: письмо с 10 пропусками, для каждого выберите один из трёх вариантов.' },
  { id: 's2', mod: 'sprachbausteine', sec: 'sb', name: 'Sprachbausteine · Teil 2', short: 'Sprachb. 2', from: 31, n: 10, pts: 1.5, ref: 'Wörter',
    instr: 'Lesen Sie den Text und entscheiden Sie, welches Wort aus dem Kasten (a–o) in die Lücken 31–40 passt. Sie können jedes Wort nur einmal verwenden. Nicht alle Wörter passen in den Text.',
    ru: 'Лексика и грамматика: 10 пропусков и 15 слов. Каждое слово — один раз, 5 слов лишние.' },
  { id: 'h1', mod: 'hoeren', sec: 'hoeren', name: 'Hörverstehen · Teil 1', short: 'Hören 1', from: 41, n: 5, pts: 5, plays: 1,
    instr: 'Sie hören fünf kurze Texte. Sie hören jeden Text nur einmal. Entscheiden Sie, ob die Aussagen 41–45 richtig oder falsch sind.',
    ru: 'Глобальное понимание: 5 коротких высказываний на одну тему. Каждое звучит только ОДИН раз.' },
  { id: 'h2', mod: 'hoeren', sec: 'hoeren', name: 'Hörverstehen · Teil 2', short: 'Hören 2', from: 46, n: 10, pts: 2.5, plays: 2,
    instr: 'Sie hören ein Gespräch. Sie hören das Gespräch zweimal. Entscheiden Sie, ob die Aussagen 46–55 richtig oder falsch sind. Lesen Sie zuerst die Aussagen.',
    ru: 'Детальное понимание: интервью звучит ДВА раза, 10 утверждений richtig/falsch. Сначала прочитайте утверждения.' },
  { id: 'h3', mod: 'hoeren', sec: 'hoeren', name: 'Hörverstehen · Teil 3', short: 'Hören 3', from: 56, n: 5, pts: 5, plays: 2,
    instr: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Entscheiden Sie, ob die Aussagen 56–60 richtig oder falsch sind.',
    ru: 'Выборочное понимание: 5 объявлений и сообщений, каждое звучит ДВА раза.' }
];
const PART = Object.fromEntries(PARTS.map(p => [p.id, p]));
const MODS = {
  lesen: { name: 'Leseverstehen', ru: 'Чтение', icon: '📖', max: 75, desc: '3 части · 20 заданий · 75 баллов' },
  sprachbausteine: { name: 'Sprachbausteine', ru: 'Грамматика и лексика', icon: '🧩', max: 30, desc: '2 части · 20 пропусков · 30 баллов' },
  hoeren: { name: 'Hörverstehen', ru: 'Аудирование', icon: '🎧', max: 75, desc: '3 части · 20 заданий · 75 баллов' },
  schreiben: { name: 'Schriftlicher Ausdruck', ru: 'Письмо', icon: '✍️', max: 45, desc: 'Письмо по 4 пунктам · 30 минут · 45 баллов' },
  sprechen: { name: 'Mündliche Prüfung', ru: 'Устная часть', icon: '🗣️', max: 75, desc: '3 части · около 15 минут · 75 баллов' }
};

/* ===== Ключи ===== */
function itemOf(ex, n) {
  if (n <= 5) return ex.lesen.teil1.texts[n - 1];
  if (n <= 10) return ex.lesen.teil2.items[n - 6];
  if (n <= 20) return ex.lesen.teil3.situations[n - 11];
  if (n <= 30) return ex.sprachbausteine.teil1.items[n - 21];
  if (n <= 40) return { answer: ex.sprachbausteine.teil2.answers[n - 31], explain: (ex.sprachbausteine.teil2.explains || [])[n - 31] };
  if (n <= 45) return ex.hoeren.teil1.texts[n - 41];
  if (n <= 55) return ex.hoeren.teil2.items[n - 46];
  return ex.hoeren.teil3.texts[n - 56];
}
function keyOf(ex, n) { const a = itemOf(ex, n).answer; return typeof a === 'boolean' ? (a ? 'r' : 'f') : String(a); }
function scorePart(ex, pid, ans) {
  const p = PART[pid]; let c = 0;
  for (let n = p.from; n < p.from + p.n; n++) if (ans[n] != null && ans[n] === keyOf(ex, n)) c++;
  return { correct: c, total: p.n, pts: c * p.pts, max: p.n * p.pts };
}
const answered = (pid, ans) => { const p = PART[pid]; let c = 0; for (let n = p.from; n < p.from + p.n; n++) if (ans[n] != null && ans[n] !== '') c++; return c; };

/* ===== Контекст текущего задания ===== */
let ctx = null;
function newCtx(o) { ctx = Object.assign({ ans: {}, rv: false, exam: false, audio: {}, plays: {}, onChange() {}, save() {} }, o); return ctx; }

/* ===== Элементы заданий ===== */
function choice(n, values, labels, cls) {
  const key = ctx.rv ? keyOf(ctx.ex, n) : null;
  return `<div class="${cls}" data-q="${n}">` + values.map((v, i) => {
    let c = cls === 'opts' ? 'opt' : 'chip';
    if (ctx.ans[n] === v) c += ' on';
    if (ctx.rv) { if (v === key) c += ' good'; else if (ctx.ans[n] === v) c += ' bad'; }
    return `<button type="button" class="${c}" data-v="${v}"${ctx.rv ? ' disabled' : ''}>${labels[i]}</button>`;
  }).join('') + '</div>';
}
function qstate(n) { if (!ctx.rv) return ''; return ctx.ans[n] === keyOf(ctx.ex, n) ? ' is-good' : ' is-bad'; }
function mark(n) { if (!ctx.rv) return ''; return ctx.ans[n] === keyOf(ctx.ex, n) ? '<span class="mk good">✓</span>' : `<span class="mk bad">${ctx.ans[n] == null ? '—' : '✗'}</span>`; }
function expl(n, extra) {
  if (!ctx.rv) return '';
  const e = itemOf(ctx.ex, n).explain;
  return (e || extra) ? `<div class="expl">${extra ? `<b>${extra}</b> ` : ''}<span data-t>${esc(e || '')}</span></div>` : '';
}
function split(ref, work, label) {
  return `<div class="split"><aside class="refwrap" id="ref">${ref}</aside><div class="work">${work}</div></div>` +
    (label ? `<button type="button" class="fab" data-act="sheetOpen">📋 ${label}</button>` : '');
}
function gapText(text, fn) {
  return esc(text).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, '<br>').replace(/\{(\d+)\}/g, (m, n) => fn(+n))}</p>`).join('');
}
function segsOf(x) { return Array.isArray(x.script) ? x.script : [{ v: x.v || 'f', t: x.script }]; }
function player(id, segs, max, label) {
  ctx.audio[id] = { segs, max: ctx.exam ? max : Infinity };
  return `<div class="player" data-audio="${id}"><button type="button" class="btn play" data-act="play" data-id="${id}"></button><span class="plays"></span>${label ? `<span class="plabel">${esc(label)}</span>` : ''}</div>`;
}
function refreshPlayers() {
  $$('.player').forEach(el => {
    const id = el.dataset.audio, a = ctx.audio[id]; if (!a) return;
    const b = $('.play', el), used = ctx.plays[id] || 0, playing = TTS.playingId === id;
    el.classList.toggle('playing', playing);
    if (playing) { b.innerHTML = ctx.exam ? '🔊 Идёт запись…' : '⏹ Стоп'; b.disabled = !!ctx.exam; }
    else if (ctx.exam) {
      const left = a.max - used;
      b.innerHTML = left > 0 ? '▶ Слушать' : '✓ Прослушано'; b.disabled = left <= 0 || !!TTS.playingId;
      $('.plays', el).textContent = left > 0 ? `осталось: ${left} из ${a.max}` : '';
    } else { b.innerHTML = '▶ Слушать'; b.disabled = false; }
  });
}
function playAudio(id) {
  const a = ctx.audio[id]; if (!a) return;
  if (TTS.playingId === id) { if (!ctx.exam) { TTS.stop(); refreshPlayers(); } return; }
  if (ctx.exam) {
    if (TTS.playingId) return;
    const used = ctx.plays[id] || 0; if (used >= a.max) return;
    ctx.plays[id] = used + 1; ctx.save();
  }
  TTS.playingId = id;
  TTS.speak(a.segs, () => { refreshPlayers(); }, ctx.ex.id + '/' + id);
  refreshPlayers();
}
function transcript(segs) {
  if (!ctx.rv) return '';
  return `<details class="script"><summary>Транскрипт</summary>${segs.map(s => `<p${segs.length > 1 ? ` class="turn ${s.v}"` : ''}>${esc(s.t)}</p>`).join('')}</details>`;
}
const RF = [['r', 'f'], ['Richtig', 'Falsch']];

/* ===== Рендер частей ===== */
const R = {
  l1(ex) {
    const t = ex.lesen.teil1;
    const ref = `<div class="card refcard"><h4>Überschriften a–j</h4><ol class="letters">${t.headlines.map((h, i) => `<li><b>${LET[i]}</b><span>${esc(h)}</span></li>`).join('')}</ol></div>`;
    const work = t.texts.map((x, i) => { const n = i + 1; return `<div class="card q${qstate(n)}"><div class="qhead"><span class="qn">${n}</span>${mark(n)}</div><div class="prose">${paras(x.text)}</div>${choice(n, LET.slice(0, 10).split(''), LET.slice(0, 10).split(''), 'chips')}${expl(n, ctx.rv ? `${x.answer}) ${esc(t.headlines[LET.indexOf(x.answer)])}` : '')}</div>`; }).join('');
    return split(ref, work, 'Überschriften');
  },
  l2(ex) {
    const t = ex.lesen.teil2;
    const ref = `<div class="card refcard article"><h3>${esc(t.title)}</h3><div class="prose">${paras(t.text)}</div></div>`;
    const work = t.items.map((it, i) => { const n = i + 6; return `<div class="card q${qstate(n)}"><div class="qhead"><span class="qn">${n}</span><span class="qt">${esc(it.q)}</span>${mark(n)}</div>${choice(n, ['0', '1', '2'], it.options.map((o, j) => `<b>${LET[j]}</b><span>${esc(o)}</span>`), 'opts')}${expl(n)}</div>`; }).join('');
    return split(ref, work, 'Text');
  },
  l3(ex) {
    const t = ex.lesen.teil3, vals = [...LET.slice(0, 12).split(''), 'x'];
    const ref = `<div class="ads">${t.ads.map((a, i) => `<div class="card ad"><b class="adl">${LET[i]}</b><h4>${esc(a.title)}</h4><p>${esc(a.text)}</p></div>`).join('')}</div>`;
    const work = t.situations.map((s, i) => { const n = i + 11; return `<div class="card q${qstate(n)}"><div class="qhead"><span class="qn">${n}</span><span class="qt">${esc(s.text)}</span>${mark(n)}</div>${choice(n, vals, vals, 'chips')}${expl(n, ctx.rv ? (s.answer === 'x' ? 'x — подходящего объявления нет.' : `${s.answer}) ${esc(t.ads[LET.indexOf(s.answer)].title)}.`) : '')}</div>`; }).join('');
    return split(ref, work, 'Anzeigen');
  },
  s1(ex) {
    const t = ex.sprachbausteine.teil1;
    const body = gapText(t.text, n => {
      const it = t.items[n - 21]; if (!it) return '';
      if (!ctx.rv) return `<select class="gap" data-q="${n}"><option value="">${n} ▾</option>${it.options.map((o, j) => `<option value="${j}"${ctx.ans[n] === String(j) ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
      const ok = ctx.ans[n] === String(it.answer), mine = ctx.ans[n] != null && ctx.ans[n] !== '' ? it.options[+ctx.ans[n]] : '—';
      return `<span class="gapr ${ok ? 'good' : 'bad'}"><sup>${n}</sup>${ok ? '' : `<s>${esc(mine)}</s> `}<b>${esc(it.options[it.answer])}</b></span>`;
    });
    const list = ctx.rv ? `<div class="card"><h4>Разбор</h4>${t.items.map((it, i) => `<div class="exrow${qstate(i + 21)}"><span class="qn sm">${i + 21}</span><div><b>${esc(it.options[it.answer])}</b> <span class="muted">(${it.options.map(esc).join(' / ')})</span><br><span data-t>${esc(it.explain || '')}</span></div></div>`).join('')}</div>` : '';
    return `<div class="card letter prose">${body}</div>${list}`;
  },
  s2(ex) {
    const t = ex.sprachbausteine.teil2;
    const ref = `<div class="card refcard"><h4>Wörter a–o</h4><ul class="wordbox">${t.words.map((w, i) => `<li data-w="${LET[i]}"><b>${LET[i]}</b> ${esc(w)}</li>`).join('')}</ul></div>`;
    const body = gapText(t.text, n => {
      const key = t.answers[n - 31]; if (!key) return '';
      if (!ctx.rv) return `<select class="gap" data-q="${n}"><option value="">${n} ▾</option>${t.words.map((w, j) => `<option value="${LET[j]}"${ctx.ans[n] === LET[j] ? ' selected' : ''}>${LET[j]}) ${esc(w)}</option>`).join('')}</select>`;
      const ok = ctx.ans[n] === key, mine = ctx.ans[n] ? t.words[LET.indexOf(ctx.ans[n])] : '—';
      return `<span class="gapr ${ok ? 'good' : 'bad'}"><sup>${n}</sup>${ok ? '' : `<s>${esc(mine)}</s> `}<b>${esc(t.words[LET.indexOf(key)])}</b></span>`;
    });
    const list = ctx.rv ? `<div class="card"><h4>Разбор</h4>${t.answers.map((a, i) => `<div class="exrow${qstate(i + 31)}"><span class="qn sm">${i + 31}</span><div><b>${a}) ${esc(t.words[LET.indexOf(a)])}</b><br><span data-t>${esc((t.explains || [])[i] || '')}</span></div></div>`).join('')}</div>` : '';
    return split(ref, `<div class="card letter prose">${body}</div>${list}`, 'Wörter');
  },
  h1(ex) {
    const t = ex.hoeren.teil1;
    return `<div class="card topic"><span class="muted">Thema:</span> <b>${esc(t.topic)}</b></div>` + t.texts.map((x, i) => { const n = i + 41, segs = segsOf(x); return `<div class="card q${qstate(n)}"><div class="qhead"><span class="qn">${n}</span><span class="qt">${esc(x.statement)}</span>${mark(n)}</div>${player('h1-' + i, segs, 1, x.name)}${choice(n, RF[0], RF[1], 'chips rf')}${expl(n)}${transcript(segs)}</div>`; }).join('');
  },
  h2(ex) {
    const t = ex.hoeren.teil2, segs = t.script;
    return `<div class="card sticky-audio"><p class="mb8">${esc(t.intro)}</p>${player('h2', segs, 2)}${transcript(segs)}</div>` + t.items.map((x, i) => { const n = i + 46; return `<div class="card q slim${qstate(n)}"><div class="qhead"><span class="qn">${n}</span><span class="qt">${esc(x.statement)}</span>${mark(n)}</div>${choice(n, RF[0], RF[1], 'chips rf')}${expl(n)}</div>`; }).join('');
  },
  h3(ex) {
    const t = ex.hoeren.teil3;
    return t.texts.map((x, i) => { const n = i + 56, segs = segsOf(x); return `<div class="card q${qstate(n)}"><div class="qhead"><span class="qn">${n}</span><span class="qt">${esc(x.statement)}</span>${mark(n)}</div>${player('h3-' + i, segs, 2, x.context)}${choice(n, RF[0], RF[1], 'chips rf')}${expl(n)}${transcript(segs)}</div>`; }).join('');
  }
};
function renderPart(ex, pid) { ctx.ex = ex; ctx.audio = {}; return `<div class="part part-${pid}">${R[pid](ex)}</div>`; }
function afterRender() { refreshPlayers(); markUsedWords(); }
function markUsedWords() {
  const box = $$('.wordbox li'); if (!box.length || !ctx) return;
  const used = new Set(); for (let n = 31; n <= 40; n++) if (ctx.ans[n]) used.add(ctx.ans[n]);
  box.forEach(li => li.classList.toggle('used', used.has(li.dataset.w)));
  $$('.sheet .wordbox li').forEach(li => li.classList.toggle('used', used.has(li.dataset.w)));
}

/* ===== Schreiben ===== */
const W_CRIT = [
  { id: 'I', name: 'Inhalt', ru: 'Содержание: раскрыты ли все 4 пункта (Leitpunkte)',
    lv: ['Все 4 пункта раскрыты понятно и по существу', '3 пункта раскрыты хорошо (или 4, но кратко)', 'Раскрыты только 2 пункта', 'Раскрыт 1 пункт или текст не по теме'] },
  { id: 'II', name: 'Kommunikative Gestaltung', ru: 'Оформление: обращение, вступление, связность, заключение, подходящий тон (du / Sie)',
    lv: ['Письмо связное, есть всё: дата, обращение, вступление, заключение, прощание; тон выдержан', 'В целом связно, чего-то одного не хватает', 'Мало связок, структура письма соблюдена слабо', 'Набор отдельных предложений, не похоже на письмо'] },
  { id: 'III', name: 'Formale Richtigkeit', ru: 'Грамотность: грамматика, порядок слов, орфография',
    lv: ['Ошибок нет или они единичные', 'Есть ошибки, но текст понятен с первого чтения', 'Ошибки заметно мешают, приходится перечитывать', 'Из-за ошибок текст почти непонятен'] }
];
const LV = ['A', 'B', 'C', 'D'], LV_PTS = { A: 5, B: 3, C: 1, D: 0 };
function writeScore(rate) {
  if (!rate || W_CRIT.some(c => !rate[c.id])) return null;
  if (rate.I === 'D' || rate.III === 'D') return 0;
  return W_CRIT.reduce((s, c) => s + LV_PTS[rate[c.id]], 0) * 3;
}
function writeTaskHTML(ex) {
  const w = ex.schreiben;
  return `<div class="card"><p>${esc(w.situation)}</p><div class="mail prose">${paras(w.letter)}</div><p class="mt12">${esc(w.task)}</p><ul class="points">${w.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>`;
}
function writeChecks(text) {
  const t = text || '', n = words(t), head = t.slice(0, 200), tail = t.slice(-220);
  return [
    [n >= 90, `Объём: ${n} слов`, n >= 90 ? 'достаточно' : 'ориентир — около 100–120 слов'],
    [/\d{1,2}\.\s?(\d{1,2}\.|(Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember))/i.test(head), 'Место и дата', 'например: Köln, 18.11.2026'],
    [/(Liebe[rs]?|Hallo|Hi|Sehr geehrte[rs]?|Guten Tag)\s/i.test(head), 'Обращение (Anrede)', 'Liebe … / Lieber … / Sehr geehrte Frau …'],
    [/(Grüße|Gruß|Grüßen|Bis bald|Dein[e]?\s|Ihr[e]?\s)/.test(tail), 'Прощание и подпись', 'Viele Grüße / Mit freundlichen Grüßen'],
    [/\b(weil|dass|wenn|deshalb|obwohl|trotzdem|außerdem|denn|damit|aber)\b/i.test(t), 'Связки между предложениями', 'weil, dass, deshalb, außerdem, trotzdem …']
  ];
}
function ratingHTML(crits, rate, group) {
  return crits.map(c => `<div class="crit"><div class="crit-h"><b>${c.id ? c.id + '. ' : ''}${c.name}</b><span class="muted">${c.ru}</span></div><div class="lvls" data-rate="${group}" data-crit="${c.key || c.id}">${LV.map((l, i) => `<button type="button" class="lvl${rate[c.key || c.id] === l ? ' on' : ''}" data-v="${l}"><b>${l}</b><span>${c.lv[i]}</span></button>`).join('')}</div></div>`).join('');
}
function writeEvalHTML(ex, text, rate) {
  const checks = writeChecks(text), sc = writeScore(rate);
  return `<div class="card"><h3>Ваш текст</h3><div class="mytext prose">${text && text.trim() ? paras(text) : '<p class="muted">Текст не написан.</p>'}</div>
    <ul class="checks">${checks.map(c => `<li class="${c[0] ? 'ok' : 'no'}"><b>${c[0] ? '✓' : '!'}</b> ${c[1]} <span class="muted">— ${c[2]}</span></li>`).join('')}</ul>
    <button type="button" class="btn ghost sm" data-act="copyAI">📋 Скопировать запрос для проверки в ИИ-чате</button></div>
  <details class="card model" open><summary><b>Образец ответа (Musterlösung)</b></summary><div class="prose mail">${paras(ex.schreiben.model)}</div></details>
  <div class="card"><h3>Оцените письмо по критериям telc</h3><p class="muted">Экзаменаторы ставят A–D по трём критериям (A = 5, B = 3, C = 1, D = 0 баллов), сумма умножается на 3. Сравните свой текст с образцом и оцените честно. Если критерий I или III оценён на D, всё письмо получает 0.</p>
    ${ratingHTML(W_CRIT, rate, 'w')}
    <div class="scoreline" id="wScore">${sc == null ? 'Отметьте все три критерия' : `Schreiben: <b>${sc} / 45</b>`}</div></div>`;
}
function aiPrompt(ex, text) {
  const w = ex.schreiben;
  return `Du bist telc-Prüfer für Deutsch B1. Bewerte meinen Brief nach den telc-Kriterien I Inhalt, II Kommunikative Gestaltung, III Formale Richtigkeit (jeweils A, B, C oder D), nenne die Punktzahl von 45, korrigiere alle Fehler und erkläre sie kurz auf Russisch.\n\nAufgabe: ${w.situation}\n${w.letter}\n\n${w.task}\nLeitpunkte: ${w.points.join('; ')}\n\nMein Brief:\n${text}`;
}

/* ===== Sprechen ===== */
const P_CRIT = [
  { key: 'a', name: 'Ausdrucksfähigkeit', ru: 'Словарный запас, умение выразить мысль', lv: ['Говорю свободно, слов хватает', 'Иногда не хватает слов, но выкручиваюсь', 'Часто ищу слова, много пауз', 'Не могу выразить мысль'] },
  { key: 'b', name: 'Aufgabenbewältigung', ru: 'Выполнение задачи: участие в разговоре, реакция на партнёра', lv: ['Задача полностью выполнена, активно веду разговор', 'Задача выполнена, но реагирую не всегда', 'Задача выполнена частично', 'Задача не выполнена'] },
  { key: 'c', name: 'Formale Richtigkeit', ru: 'Грамматика', lv: ['Ошибок мало', 'Ошибки есть, но понимание не страдает', 'Ошибки мешают пониманию', 'Почти непонятно'] },
  { key: 'd', name: 'Aussprache und Intonation', ru: 'Произношение и интонация', lv: ['Произношение чёткое', 'Заметный акцент, но всё понятно', 'Местами трудно понять', 'Понять очень трудно'] }
];
function speakScore(rate) {
  if (!rate || P_CRIT.some(c => !rate[c.key])) return null;
  const f = { A: 1, B: 0.7, C: 0.4, D: 0 };
  return Math.round(P_CRIT.reduce((s, c) => s + f[rate[c.key]], 0) / 4 * 75 * 2) / 2;
}
function sayBtn(id, segs, label) {
  ctx.audio[id] = { segs, max: Infinity };
  return `<div class="say"><div class="player mini" data-audio="${id}"><button type="button" class="btn play" data-act="play" data-id="${id}"></button></div><details><summary>${label}</summary><p>${segs.map(s => esc(s.t)).join(' ')}</p></details></div>`;
}
function recorderHTML(key) {
  return `<div class="recorder" data-rec="${key}"><button type="button" class="btn rec" data-act="rec" data-key="${key}">● Записать свой ответ</button><span class="rectime"></span><div class="recs"></div></div>`;
}
function speakHTML(ex, only) {
  const p = ex.sprechen, saveExam = ctx.exam; ctx.exam = false; ctx.audio = {};
  const show = k => !only || only === k;
  let h = '';
  if (show('t1')) h += `<section class="card sp"><h3>Teil 1 · Kontaktaufnahme <span class="tag">≈ 3 Min · 15 баллов</span></h3>
    <p class="de-instr">Sie möchten Ihre Gesprächspartnerin / Ihren Gesprächspartner kennenlernen. Unterhalten Sie sich: Name, Herkunft, Wohnort, Familie, Beruf, Sprachen, Freizeit.</p>
    <p class="hint">Партнёр задаёт вопросы — нажмите ▶, выслушайте и ответьте вслух 2–3 предложениями. Потом задайте встречный вопрос («Und Sie?»).</p>
    ${p.teil1.questions.map((q, i) => sayBtn('p1-' + i, [{ v: 'f', t: q }], `Вопрос ${i + 1} — показать текст`)).join('')}
    ${recorderHTML('t1')}
    <details class="model"><summary>Образец рассказа о себе</summary><div class="prose">${paras(p.teil1.model)}</div></details></section>`;
  if (show('t2')) h += `<section class="card sp"><h3>Teil 2 · Gespräch über ein Thema <span class="tag">≈ 6 Min · 30 баллов</span></h3>
    <p class="de-instr">Thema: <b>${esc(p.teil2.topic)}</b>. Berichten Sie Ihrer Partnerin / Ihrem Partner kurz, welche Meinung die Person in Ihrem Text hat. Danach berichtet Ihr Partner über seinen Text. Unterhalten Sie sich dann über das Thema: Welche Meinung haben Sie? Welche Erfahrungen haben Sie gemacht?</p>
    <div class="handout"><span class="muted">Ваш текст</span><b>${esc(p.teil2.myText.who)}</b><div class="prose">${paras(p.teil2.myText.text)}</div></div>
    <p class="hint"><b>Шаг 1.</b> Перескажите свой текст своими словами (не читайте!) — около 1 минуты.</p>
    ${recorderHTML('t2a')}
    <p class="hint"><b>Шаг 2.</b> Выслушайте, что рассказывает партнёр о своём тексте.</p>
    ${sayBtn('p2-text', [{ v: p.teil2.partnerText.v || 'm', t: `In meinem Text geht es um ${p.teil2.partnerText.who.split(',')[0]}. ` + p.teil2.partnerText.text }], `Текст партнёра (${esc(p.teil2.partnerText.who)}) — показать`)}
    <p class="hint"><b>Шаг 3.</b> Обсуждение: партнёр задаёт вопросы, отвечайте развёрнуто и обосновывайте мнение.</p>
    ${p.teil2.questions.map((q, i) => sayBtn('p2-' + i, [{ v: p.teil2.partnerText.v || 'm', t: q }], `Вопрос ${i + 1} — показать текст`)).join('')}
    ${recorderHTML('t2b')}
    <details class="model"><summary>Образец ответа</summary><div class="prose">${paras(p.teil2.model)}</div></details></section>`;
  if (show('t3')) h += `<section class="card sp"><h3>Teil 3 · Gemeinsam eine Aufgabe lösen <span class="tag">≈ 6 Min · 30 баллов</span></h3>
    <p class="de-instr">${esc(p.teil3.situation)}</p>
    <div class="handout"><span class="muted">Überlegen Sie:</span><ul class="points">${p.teil3.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
    <p class="hint">Планируйте вместе с партнёром: слушайте его реплики по порядку и отвечайте — соглашайтесь, возражайте, предлагайте своё. В конце подведите итог.</p>
    ${p.teil3.partnerLines.map((l, i) => sayBtn('p3-' + i, [l], `Реплика партнёра ${i + 1} — показать текст`)).join('')}
    ${recorderHTML('t3')}
    <details class="model"><summary>Образец диалога</summary><div class="prose">${paras(p.teil3.model)}</div></details></section>`;
  ctx.exam = saveExam;
  return h;
}
async function toggleRec(btn) {
  const wrap = btn.closest('.recorder');
  if (!Rec.supported) return toast('Запись не поддерживается этим браузером');
  if (Rec.mr) {
    if (Rec.btn !== btn) return toast('Сначала остановите текущую запись');
    clearInterval(Rec.timer); const r = await Rec.stop();
    btn.classList.remove('live'); btn.textContent = '● Записать ещё раз'; $('.rectime', wrap).textContent = '';
    if (r) $('.recs', wrap).insertAdjacentHTML('afterbegin', `<div class="recitem"><audio controls src="${r.url}"></audio><span class="muted">${fmtTime(r.sec)}</span></div>`);
    return;
  }
  try { TTS.stop(); refreshPlayers(); await Rec.start(); }
  catch (e) { return toast(location.protocol === 'file:' ? 'Микрофон работает только при открытии по ссылке (https)' : 'Нет доступа к микрофону — разрешите его в браузере'); }
  Rec.btn = btn; btn.classList.add('live'); btn.textContent = '■ Остановить запись';
  const t = $('.rectime', wrap); t.textContent = '0:00';
  Rec.timer = setInterval(() => { t.textContent = fmtTime((Date.now() - Rec.since) / 1000); }, 500);
}
