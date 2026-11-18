'use strict';
/* ===== Каркас ===== */
const A = {};            // действия текущего экрана (data-act)
let tickT = null, Motion = null;
try { import('https://cdn.jsdelivr.net/npm/motion@11.11.17/+esm').then(m => { Motion = m; }).catch(() => {}); } catch (e) { /* без анимаций */ }

function setView(html, keep) {
  const app = $('#app'), y = window.scrollY;
  app.innerHTML = html;
  if (keep) { window.scrollTo(0, y); return; }
  window.scrollTo(0, 0);
  const kids = [...app.children].slice(0, 14);
  if (document.hidden) return;
  if (Motion && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    try { Motion.animate(kids, { opacity: [0, 1], y: [14, 0] }, { duration: 0.38, delay: Motion.stagger(0.045), easing: [0.22, 1, 0.36, 1] }); } catch (e) { /* */ }
  } else app.classList.remove('fade'), void app.offsetWidth, app.classList.add('fade');
}
const crumbs = (...items) => `<nav class="crumbs">${items.map(([t, h]) => h ? `<a href="${h}">${t}</a>` : `<span>${t}</span>`).join('<i>›</i>')}</nav>`;
function voiceNote() {
  if (AFILES.size) return '';
  if (!TTS.syn) return '<div class="note warn">Этот браузер не умеет озвучивать текст. Откройте тренажёр в Chrome, Safari или Edge.</div>';
  if (TTS.hasDe === false) return '<div class="note warn">На устройстве не найден немецкий голос. Установите его: Android — «Настройки → Синтез речи → Google → Установить голосовые данные → Deutsch»; Windows — «Параметры → Время и язык → Речь → Добавить голоса → Немецкий»; iPhone — «Настройки → Универсальный доступ → Устный контент → Голоса → Немецкий».</div>';
  return '';
}

/* прогресс */
const bests = () => store.get('best', {});
function saveBest(exId, key, val) { const b = bests(), k = exId + ':' + key; if (!(b[k] >= val)) { b[k] = val; store.set('best', b); } const st = store.get('stats', { tasks: 0 }); st.tasks++; store.set('stats', st); }
const modKeys = mod => mod === 'schreiben' ? ['w'] : mod === 'sprechen' ? ['sp'] : PARTS.filter(p => p.mod === mod).map(p => p.id);
function modProgress(mod) { const b = bests(), keys = modKeys(mod); let s = 0, n = 0; EXAMS.forEach(e => keys.forEach(k => { s += b[e.id + ':' + k] || 0; n++; })); return n ? s / n : 0; }
const readiness = () => { const m = Object.keys(MODS); return m.reduce((s, k) => s + modProgress(k), 0) / m.length; };
const badge = v => v == null ? '<span class="bdg">новое</span>' : `<span class="bdg ${v >= 0.6 ? 'good' : 'bad'}">${Math.round(v * 100)}%</span>`;
const ring = (v, label) => `<div class="ring" style="--v:${Math.round(v * 100)}"><div><b>${Math.round(v * 100)}%</b><small>${label}</small></div></div>`;
const bar = (v, cls) => `<div class="bar ${cls || ''}"><i style="width:${Math.min(100, Math.round(v * 100))}%"></i></div>`;
const fmtDate = t => new Date(t).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });

/* ===== Главная ===== */
function viewHome() {
  const S = store.get('session'), hist = store.get('history', []), st = store.get('stats', { tasks: 0 });
  const gq = TR.grammar.reduce((a, t) => a + t.questions.length, 0), vw = TR.vocab.reduce((a, t) => a + t.words.length, 0);
  setView(`
  <section class="hero">
    <div><span class="eyebrow">Zertifikat Deutsch · уровень B1</span>
      <h1>Подготовка к экзамену telc Deutsch B1</h1>
      <p>Полная симуляция экзамена с таймером и подсчётом баллов, тренировка каждого модуля, грамматика, словарь и готовые фразы — всё в одном месте, бесплатно и без регистрации.</p>
      <div class="row"><a class="btn primary lg" href="#/exam">${S ? 'Продолжить экзамен' : 'Пройти экзамен'}</a><a class="btn lg" href="#/train">Тренировать по модулям</a></div>
    </div>
    ${ring(readiness(), 'готовность')}
  </section>
  <div class="stats"><div><b>${EXAMS.length}</b><span>полных варианта экзамена</span></div><div><b>${EXAMS.length * 60}</b><span>экзаменационных заданий</span></div><div><b>${gq}</b><span>вопросов по грамматике</span></div><div><b>${vw}</b><span>слов уровня B1</span></div></div>
  <h2>Модули экзамена</h2>
  <div class="grid">${Object.entries(MODS).map(([k, m]) => `<a class="card mod" href="#/train/${k}"><span class="ico">${m.icon}</span><h3>${m.name}</h3><p class="muted">${m.ru} · ${m.desc}</p>${bar(modProgress(k))}</a>`).join('')}</div>
  <h2>База знаний</h2>
  <div class="grid">
    <a class="card mod" href="#/grammar"><span class="ico">🧠</span><h3>Грамматика</h3><p class="muted">${TR.grammar.length} тем с правилами и тестами — всё, что проверяют Sprachbausteine</p></a>
    <a class="card mod" href="#/vocab"><span class="ico">🗂️</span><h3>Словарь</h3><p class="muted">${TR.vocab.length} тем: карточки с озвучкой и тесты</p></a>
    <a class="card mod" href="#/phrases"><span class="ico">💬</span><h3>Redemittel</h3><p class="muted">Готовые фразы для письма и устной части</p></a>
    <a class="card mod" href="#/info"><span class="ico">ℹ️</span><h3>Об экзамене</h3><p class="muted">Структура, баллы, проходной порог, советы и настройки</p></a>
  </div>
  ${hist.length ? `<h2>Мои результаты</h2><div class="list">${hist.slice(0, 5).map(r => `<a class="card rowlink" href="#/result/${r.id}"><div><b>${esc(getExam(r.examId).title)}</b><span class="muted">${fmtDate(r.id)}</span></div><div class="rr"><b>${fmtPts(r.written)} / 225</b><span class="bdg ${r.wPass ? 'good' : 'bad'}">${r.wPass ? 'сдано' : 'не сдано'}</span></div></a>`).join('')}</div>` : ''}
  <div class="card author"><div><b>Тренажёр создан в D-Bridge e.V.</b><p>Автор и разработчик — Александр Ковальчук. Есть вопросы, идеи или нашли ошибку? Напишите или позвоните.</p></div><div class="author-links"><a href="https://d-bridge.eu" target="_blank" rel="noopener">d-bridge.eu</a><a href="mailto:info@d-bridge.eu">info@d-bridge.eu</a><a href="tel:+4917684918760">+49 176 84918760</a></div></div>
  <p class="foot muted">Выполнено заданий: ${st.tasks}. Прогресс хранится только в этом браузере. Неофициальный учебный тренажёр: не связан с telc gGmbH, все тексты и задания авторские, составлены по открытому формату экзамена.</p>`);
}

/* ===== Модули ===== */
function viewTrain() {
  setView(`<h1>Тренировка по модулям</h1><p class="lead">Выберите часть экзамена. В режиме тренировки нет ограничения по времени, аудио можно слушать сколько угодно, а после проверки вы увидите разбор каждого ответа.</p>
  <div class="grid">${Object.entries(MODS).map(([k, m]) => `<a class="card mod" href="#/train/${k}"><span class="ico">${m.icon}</span><h3>${m.name}</h3><p class="muted">${m.ru} · ${m.desc}</p>${bar(modProgress(k))}</a>`).join('')}</div>`);
}
function viewModule(mod) {
  const m = MODS[mod]; if (!m) return viewTrain();
  const b = bests(); let body;
  if (mod === 'schreiben' || mod === 'sprechen') {
    const k = mod === 'schreiben' ? 'w' : 'sp', r = mod === 'schreiben' ? 'w' : 's';
    body = `<div class="list">${EXAMS.map(e => `<a class="card rowlink" href="#/${r}/${e.id}"><div><b>${esc(e.title)}</b><span class="muted">${esc(mod === 'schreiben' ? e.schreiben.points.join(' · ') : e.sprechen.teil2.topic + ' · ' + e.sprechen.teil3.points.length + ' пунктов для планирования')}</span></div>${badge(b[e.id + ':' + k])}</a>`).join('')}</div>`;
  } else {
    body = EXAMS.map(e => `<div class="card"><h3>${esc(e.title)}</h3><div class="partrow">${PARTS.filter(p => p.mod === mod).map(p => `<a class="partbtn" href="#/p/${e.id}/${p.id}"><b>${p.name.split(' · ')[1]}</b><span class="muted">${p.n} заданий</span>${badge(b[e.id + ':' + p.id])}</a>`).join('')}</div></div>`).join('');
  }
  const tips = {
    lesen: 'Teil 1: сначала заголовки, потом тексты — ищите главную мысль, а не совпадение слов. Teil 2: ответы идут по порядку текста. Teil 3: подчёркивайте ключевые условия (день, цена, возраст) — объявление должно подходить по всем.',
    sprachbausteine: 'Смотрите на слова вокруг пропуска: какой падеж требует предлог, где стоит глагол (придаточное?), какое окончание у прилагательного. На оба текста на экзамене стоит тратить не больше 15–20 минут.',
    hoeren: 'До прослушивания прочитайте утверждения и отметьте ключевые слова. В Teil 1 запись звучит один раз — отвечайте сразу. Ловушки: в утверждении те же слова, что и в записи, но с отрицанием или другой деталью.',
    schreiben: 'Обязательно: дата, обращение, вступление, все 4 пункта (по 2–3 предложения), заключение, прощание. Выберите логичный порядок пунктов. Оставьте 5 минут на проверку окончаний и порядка слов.',
    sprechen: 'На экзамене вы говорите с другим кандидатом, а не с экзаменатором. Здесь партнёра заменяет немецкий голос: слушайте реплику и отвечайте вслух. Записывайте себя и сравнивайте с образцом.'
  };
  setView(`${crumbs(['Модули', '#/train'], [m.name])}<h1>${m.icon} ${m.name}</h1><p class="lead">${m.ru} · ${m.desc}</p><div class="note">💡 ${tips[mod]}</div>${body}`);
}

/* ===== Тренировка одной части ===== */
function viewPart(exId, pid) {
  const ex = getExam(exId), p = PART[pid]; if (!p) return viewTrain();
  newCtx({ ex });
  const order = []; EXAMS.forEach(e => PARTS.filter(x => x.mod === p.mod).forEach(x => order.push([e.id, x.id])));
  const nx = order[order.findIndex(o => o[0] === ex.id && o[1] === pid) + 1];
  const draw = keep => {
    const s = ctx.rv ? scorePart(ex, pid, ctx.ans) : null;
    setView(`${crumbs(['Модули', '#/train'], [MODS[p.mod].name, '#/train/' + p.mod], [ex.title])}
      <div class="parthead"><h1>${p.name}</h1><p class="de-instr">${p.instr}</p><p class="hint">${p.ru}</p></div>
      ${p.mod === 'hoeren' ? voiceNote() + (ctx.rv ? '' : `<div class="note">Тренировка: слушайте сколько нужно. На экзамене — ${p.plays === 1 ? 'только один раз' : 'два раза'}.</div>`) : ''}
      ${s ? `<div class="card result-inline ${s.correct / s.total >= 0.6 ? 'good' : 'bad'}"><b>${s.correct} из ${s.total}</b><span>${fmtPts(s.pts)} из ${fmtPts(s.max)} баллов · ${pct(s.correct, s.total)}%</span></div>` : ''}
      ${renderPart(ex, pid)}
      <div class="actionbar stick">${ctx.rv ? `<button class="btn" data-act="retry">↺ Ещё раз</button>${nx ? `<a class="btn primary" href="#/p/${nx[0]}/${nx[1]}">Следующее задание →</a>` : `<a class="btn primary" href="#/train">К модулям</a>`}` : `<span class="muted" id="cnt"></span><button class="btn primary" data-act="check">Проверить ответы</button>`}</div>`, keep);
    afterRender(); upd();
  };
  const upd = () => { const c = $('#cnt'); if (c) c.textContent = `Отвечено: ${answered(pid, ctx.ans)} из ${p.n}`; };
  ctx.onChange = upd;
  A.check = () => { TTS.stop(); ctx.rv = true; const s = scorePart(ex, pid, ctx.ans); saveBest(ex.id, pid, s.correct / s.total); draw(); };
  A.retry = () => { TTS.stop(); ctx.ans = {}; ctx.rv = false; draw(); };
  draw();
}

/* ===== Schreiben (тренировка) ===== */
function viewWrite(exId) {
  const ex = getExam(exId); let phase = 'write', text = store.get('draft:' + ex.id, ''), deadline = null;
  newCtx({ ex, rates: { w: {} } });
  ctx.onText = v => { text = v; store.set('draft:' + ex.id, v); const c = $('#wc'); if (c) c.textContent = words(v) + ' слов'; };
  ctx.onRate = () => { const sc = writeScore(ctx.rates.w); $('#wScore').innerHTML = sc == null ? 'Отметьте все три критерия' : `Schreiben: <b>${sc} / 45</b> · ${sc >= 27 ? 'проходной уровень ✓' : 'ниже 60 %'}`; if (sc != null) saveBest(ex.id, 'w', sc / 45); };
  ctx.aiText = () => aiPrompt(ex, text);
  const draw = () => {
    const head = `${crumbs(['Модули', '#/train'], ['Schriftlicher Ausdruck', '#/train/schreiben'], [ex.title])}<h1>✍️ Schriftlicher Ausdruck</h1>`;
    if (phase === 'write') setView(`${head}<p class="hint">На экзамене на письмо даётся 30 минут. Пишите без словаря и переводчика — проверка будет честнее.</p>${writeTaskHTML(ex)}
      <div class="card"><div class="wbar"><span id="wc" class="muted">${words(text)} слов</span><span class="timer sm" id="timer" hidden></span><button class="btn sm" data-act="wTimer">⏱ Таймер 30 мин</button></div><textarea id="wtext" class="wtext" spellcheck="false" autocapitalize="sentences" placeholder="Ort, Datum&#10;&#10;Liebe … / Sehr geehrte …,&#10;&#10;…">${esc(text)}</textarea></div>
      <div class="actionbar stick"><a class="btn ghost" href="#/phrases">Фразы для письма</a><button class="btn primary" data-act="wDone">Готово — проверить</button></div>`);
    else setView(`${head}${writeEvalHTML(ex, text, ctx.rates.w)}<div class="actionbar"><button class="btn" data-act="wBack">← Доработать текст</button><a class="btn primary" href="#/train/schreiben">К списку заданий</a></div>`);
  };
  A.wTimer = el => { deadline = Date.now() + 30 * 60000; el.hidden = true; const t = $('#timer'); t.hidden = false; clearInterval(tickT); const f = () => { const left = (deadline - Date.now()) / 1000; const x = $('#timer'); if (!x) return; x.textContent = fmtTime(left); x.classList.toggle('low', left < 300); if (left <= 0) { clearInterval(tickT); toast('30 минут истекли — на экзамене работу уже забрали бы'); } }; f(); tickT = setInterval(f, 1000); };
  A.wDone = () => { if (words(text) < 20 && !confirm('Текст очень короткий. Всё равно перейти к проверке?')) return; clearInterval(tickT); phase = 'eval'; draw(); };
  A.wBack = () => { phase = 'write'; draw(); };
  draw();
}

/* ===== Sprechen (тренировка) ===== */
function viewSpeak(exId) {
  const ex = getExam(exId);
  newCtx({ ex, rates: { p: {} } });
  ctx.onRate = () => { const sc = speakScore(ctx.rates.p); $('#pScore').innerHTML = sc == null ? 'Отметьте все четыре критерия' : `Mündliche Prüfung: <b>≈ ${fmtPts(sc)} / 75</b> · ${sc >= 45 ? 'проходной уровень ✓' : 'ниже 60 %'}`; if (sc != null) saveBest(ex.id, 'sp', sc / 75); };
  setView(`${crumbs(['Модули', '#/train'], ['Mündliche Prüfung', '#/train/sprechen'], [ex.title])}<h1>🗣️ Mündliche Prüfung</h1>
    <p class="lead">Устный экзамен проходит в паре с другим кандидатом и длится около 15 минут; перед ним даётся 20 минут на подготовку (можно делать заметки, но читать с листа нельзя).</p>${voiceNote()}
    ${Rec.supported ? '' : '<div class="note warn">Запись голоса в этом браузере недоступна — отвечайте вслух без записи.</div>'}
    ${speakHTML(ex)}
    <div class="card"><h3>Самооценка</h3><p class="muted">Прослушайте свои записи, сравните с образцами и оцените себя по четырём критериям telc. Оценка приблизительная.</p>${ratingHTML(P_CRIT, ctx.rates.p, 'p')}<div class="scoreline" id="pScore">Отметьте все четыре критерия</div></div>
    <div class="actionbar"><a class="btn ghost" href="#/phrases">Фразы для устной части</a><a class="btn primary" href="#/train/sprechen">К списку заданий</a></div>`);
  afterRender();
}

/* ===== Симуляция экзамена ===== */
const STEPS = {
  lesen: { title: 'Leseverstehen und Sprachbausteine', min: 90, parts: ['l1', 'l2', 'l3', 's1', 's2'], next: 'hoeren', n: 1,
    ru: 'Чтение (3 части) и грамматика (2 части) — общий блок на 90 минут. Между частями можно свободно переходить. Совет: на Sprachbausteine оставьте не больше 20 минут.' },
  hoeren: { title: 'Hörverstehen', min: 30, parts: ['h1', 'h2', 'h3'], next: 'schreiben', n: 2,
    ru: 'Аудирование, около 30 минут. Как на экзамене: в Teil 1 каждая запись звучит один раз, в Teil 2 и 3 — два раза. Остановить или перемотать запись нельзя. Проверьте звук и наденьте наушники.' },
  schreiben: { title: 'Schriftlicher Ausdruck', min: 30, next: 'oral', n: 3,
    ru: 'Письмо: 30 минут на ответ по четырём пунктам. Словарём пользоваться нельзя.' }
};
let S = null;
const saveS = () => store.set('session', S);
function viewExam() { S = store.get('session'); if (!S || !EXAMS.find(e => e.id === S.examId)) { S = null; return examChooser(); } drawExam(); }
function examChooser() {
  const hist = store.get('history', []);
  A.start = el => { S = { examId: el.dataset.id, step: 'lesen', phase: 'intro', part: 'l1', ans: {}, plays: {}, text: '', notes: '', oral: null, started: Date.now() }; saveS(); drawExam(); };
  setView(`<h1>🎓 Симуляция экзамена</h1><p class="lead">Полный экзамен telc Deutsch B1 в реальном формате и с реальными ограничениями по времени. Результат считается по официальной шкале: 300 баллов, для сдачи нужно 60 % и в письменной, и в устной части.</p>
  <div class="timeline"><div><b>90 мин</b><span>Leseverstehen + Sprachbausteine</span></div><div><b>≈ 30 мин</b><span>Hörverstehen</span></div><div><b>30 мин</b><span>Schriftlicher Ausdruck</span></div><div><b>20 + 15 мин</b><span>Mündliche Prüfung (можно пропустить)</span></div></div>
  <div class="note">Понадобится около 2,5 часов, тихое место и наушники. Экзамен можно закрыть и продолжить позже, но таймер текущего раздела продолжает идти — как в настоящем зале.</div>
  <div class="list">${EXAMS.map(e => { const last = hist.find(h => h.examId === e.id); return `<div class="card rowlink"><div><b>${esc(e.title)}</b><span class="muted">${last ? `последняя попытка: ${fmtPts(last.written)} / 225 (${fmtDate(last.id)})` : 'ещё не проходили'}</span></div><button class="btn primary" data-act="start" data-id="${e.id}">Начать</button></div>`; }).join('')}</div>`);
}
function examBar(title, sub) {
  return `<div class="exambar"><div class="eb-t"><b>${title}</b><small>${sub}</small></div><div class="timer" id="timer"></div><button class="btn sm danger-ghost" data-act="abort" title="Прервать экзамен">✕</button></div>`;
}
function startTick(onEnd) {
  clearInterval(tickT);
  const f = () => { const t = $('#timer'); if (!S || !S.deadline) return; const left = (S.deadline - Date.now()) / 1000; if (t) { t.textContent = '⏱ ' + fmtTime(left); t.classList.toggle('low', left < 300); } if (left <= 0) { clearInterval(tickT); toast('Время раздела истекло'); onEnd(); } };
  f(); tickT = setInterval(f, 1000);
}
function nextStep() { TTS.stop(); Rec.cancel(); clearInterval(tickT); const st = STEPS[S.step]; S.step = st ? st.next : S.step; S.phase = 'intro'; S.deadline = null; saveS(); drawExam(); }
function drawExam(keep) {
  const ex = getExam(S.examId), st = STEPS[S.step];
  A.abort = () => { if (confirm('Прервать экзамен? Ответы этой попытки будут удалены.')) { TTS.stop(); clearInterval(tickT); store.del('session'); S = null; location.hash = '#/'; } };
  A.finishStep = () => { if (confirm('Завершить этот раздел? Вернуться к нему будет нельзя.')) nextStep(); };
  if (st && S.phase === 'intro') {
    clearInterval(tickT);
    A.begin = () => { S.phase = 'run'; S.deadline = Date.now() + st.min * 60000; if (st.parts) S.part = st.parts[0]; saveS(); drawExam(); };
    return setView(`<div class="card stepintro"><span class="eyebrow">${esc(ex.title)} · раздел ${st.n} из 3</span><h1>${st.title}</h1><p class="bigtime">${st.min} минут</p><p>${st.ru}</p>${S.step === 'hoeren' ? voiceNote() + '<p><button class="btn sm" data-act="testVoice">🔊 Проверить звук</button></p>' : ''}<div class="row"><button class="btn primary lg" data-act="begin">Начать раздел — таймер пойдёт</button><button class="btn ghost" data-act="abort">Прервать экзамен</button></div></div>`);
  }
  if (st && st.parts) {                                   // Lesen / Hören
    const p = PART[S.part], i = st.parts.indexOf(S.part);
    newCtx({ ex, ans: S.ans, exam: true, plays: S.plays, save: saveS });
    const tabs = () => st.parts.map(id => `<button class="tab${id === S.part ? ' on' : ''}" data-act="tab" data-p="${id}">${PART[id].short}<small>${answered(id, S.ans)}/${PART[id].n}</small></button>`).join('');
    ctx.onChange = () => { saveS(); $('#tabs').innerHTML = tabs(); };
    A.tab = el => { if (TTS.playingId && !confirm('Идёт запись. Если уйти, это прослушивание сгорит. Перейти?')) return; TTS.stop(); S.part = el.dataset.p; saveS(); drawExam(); };
    setView(`${examBar(st.title, ex.title)}<div class="tabs" id="tabs">${tabs()}</div>
      <div class="parthead"><h2>${p.name}</h2><p class="de-instr">${p.instr}</p></div>
      ${renderPart(ex, S.part)}
      <div class="actionbar stick">${i > 0 ? `<button class="btn" data-act="tab" data-p="${st.parts[i - 1]}">← ${PART[st.parts[i - 1]].short}</button>` : '<span></span>'}${i < st.parts.length - 1 ? `<button class="btn primary" data-act="tab" data-p="${st.parts[i + 1]}">${PART[st.parts[i + 1]].short} →</button>` : `<button class="btn primary" data-act="finishStep">Сдать раздел ✓</button>`}</div>`, keep);
    afterRender(); return startTick(nextStep);
  }
  if (S.step === 'schreiben') {
    newCtx({ ex, exam: true });
    ctx.onText = v => { S.text = v; saveS(); $('#wc').textContent = words(v) + ' слов'; };
    setView(`${examBar(st.title, ex.title)}${writeTaskHTML(ex)}<div class="card"><div class="wbar"><span id="wc" class="muted">${words(S.text)} слов</span></div><textarea id="wtext" class="wtext" spellcheck="false" placeholder="Ort, Datum&#10;&#10;…">${esc(S.text)}</textarea></div><div class="actionbar stick"><span></span><button class="btn primary" data-act="finishStep">Сдать работу ✓</button></div>`);
    return startTick(nextStep);
  }
  if (S.step === 'oral') {
    clearInterval(tickT);
    A.oralGo = () => { S.oral = true; S.step = 'prep'; S.deadline = Date.now() + 20 * 60000; saveS(); drawExam(); };
    A.oralSkip = () => { S.oral = false; S.step = 'rate'; saveS(); drawExam(); };
    return setView(`<div class="card stepintro"><span class="eyebrow">${esc(ex.title)}</span><h1>Письменная часть завершена 🎉</h1><p>Осталась устная часть — Mündliche Prüfung: 20 минут подготовки и около 15 минут разговора. На настоящем экзамене она часто проходит в тот же день после перерыва.</p><p class="muted">Партнёра заменят записанные немецкие дикторы, ваши ответы можно записать и прослушать. Баллы за устную часть — по самооценке.</p><div class="row"><button class="btn primary lg" data-act="oralGo">Перейти к устной части</button><button class="btn" data-act="oralSkip">Пропустить и показать результат</button></div></div>`);
  }
  if (S.step === 'prep') {
    const p = ex.sprechen; newCtx({ ex });
    ctx.onText = v => { S.notes = v; saveS(); };
    A.prepDone = () => { clearInterval(tickT); S.step = 'sprechen'; S.deadline = null; saveS(); drawExam(); };
    setView(`${examBar('Vorbereitung · Mündliche Prüfung', ex.title)}<div class="note">20 минут на подготовку. Прочитайте задания, продумайте, что скажете, сделайте короткие заметки (ключевые слова, не целые фразы).</div>
      <div class="card"><h3>Teil 2 · Thema: ${esc(p.teil2.topic)}</h3><div class="handout"><b>${esc(p.teil2.myText.who)}</b><div class="prose">${paras(p.teil2.myText.text)}</div></div></div>
      <div class="card"><h3>Teil 3 · Gemeinsam eine Aufgabe lösen</h3><p class="de-instr">${esc(p.teil3.situation)}</p><ul class="points">${p.teil3.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="card"><h3>Мои заметки</h3><textarea id="wtext" class="wtext short" placeholder="Stichpunkte …">${esc(S.notes)}</textarea></div>
      <div class="actionbar"><span></span><button class="btn primary" data-act="prepDone">Я готов(а) — начать устный экзамен</button></div>`);
    return startTick(A.prepDone);
  }
  if (S.step === 'sprechen') {
    newCtx({ ex });
    A.spDone = () => { TTS.stop(); Rec.cancel(); S.step = 'rate'; saveS(); drawExam(); };
    setView(`<div class="exambar"><div class="eb-t"><b>Mündliche Prüfung</b><small>${esc(ex.title)}</small></div><button class="btn sm danger-ghost" data-act="abort">✕</button></div>${voiceNote()}${S.notes ? `<details class="card"><summary>Мои заметки</summary><div class="prose">${paras(S.notes)}</div></details>` : ''}${speakHTML(ex)}<div class="actionbar"><span></span><button class="btn primary" data-act="spDone">Завершить устную часть ✓</button></div>`);
    return afterRender();
  }
  if (S.step === 'rate') {
    S.wRate = S.wRate || {}; S.pRate = S.pRate || {};
    newCtx({ ex, rates: { w: S.wRate, p: S.pRate } });
    ctx.aiText = () => aiPrompt(ex, S.text);
    const ready = () => writeScore(S.wRate) != null && (!S.oral || speakScore(S.pRate) != null);
    ctx.onRate = () => { saveS(); const w = writeScore(S.wRate); $('#wScore').innerHTML = w == null ? 'Отметьте все три критерия' : `Schreiben: <b>${w} / 45</b>`; const ps = $('#pScore'); if (ps) { const sc = speakScore(S.pRate); ps.innerHTML = sc == null ? 'Отметьте все четыре критерия' : `Mündliche Prüfung: <b>≈ ${fmtPts(sc)} / 75</b>`; } $('#fin').disabled = !ready(); };
    A.finish = () => { const r = computeResult(S); const h = store.get('history', []); h.unshift(r); store.set('history', h.slice(0, 30)); store.del('session'); S = null; location.hash = '#/result/' + r.id; };
    setView(`<h1>Оценка письма${S.oral ? ' и устной части' : ''}</h1><p class="lead">Чтение, грамматика и аудирование проверены автоматически. Письмо${S.oral ? ' и устную часть' : ''} на экзамене оценивают люди — оцените себя по тем же критериям, сверяясь с образцом.</p>
      ${writeEvalHTML(ex, S.text, S.wRate)}
      ${S.oral ? `<div class="card"><h3>Устная часть — самооценка</h3>${ratingHTML(P_CRIT, S.pRate, 'p')}<div class="scoreline" id="pScore">Отметьте все четыре критерия</div></div>` : ''}
      <div class="actionbar"><span></span><button class="btn primary lg" id="fin" data-act="finish"${ready() ? '' : ' disabled'}>Показать результат экзамена</button></div>`);
  }
}
function computeResult(s) {
  const ex = getExam(s.examId), sec = { lesen: 0, sb: 0, hoeren: 0 }, parts = {};
  PARTS.forEach(p => { const r = scorePart(ex, p.id, s.ans); sec[p.sec] += r.pts; parts[p.id] = r.correct / r.total; saveBest(ex.id, p.id, r.correct / r.total); });
  const w = writeScore(s.wRate) || 0, oral = s.oral ? speakScore(s.pRate) : null, written = sec.lesen + sec.sb + sec.hoeren + w;
  saveBest(ex.id, 'w', w / 45); if (oral != null) saveBest(ex.id, 'sp', oral / 75);
  return { id: Date.now(), examId: ex.id, sec, parts, w, oral, written, wPass: written >= 135, oPass: oral == null ? null : oral >= 45, ans: s.ans, text: s.text, wRate: s.wRate };
}
function grade(total) { return total >= 270 ? ['sehr gut', 'отлично'] : total >= 240 ? ['gut', 'хорошо'] : total >= 210 ? ['befriedigend', 'удовлетворительно'] : ['ausreichend', 'достаточно']; }
function viewResult(id) {
  const r = store.get('history', []).find(h => String(h.id) === String(id)); if (!r) return viewHome();
  const ex = getExam(r.examId); let tab = 'l1';
  const passed = r.oral == null ? null : r.wPass && r.oPass, total = r.written + (r.oral || 0);
  const row = (name, v, max, need) => `<div class="srow"><div class="sname"><b>${name}</b><span>${fmtPts(v)} / ${max}${need ? ` · нужно ${need}` : ''}</span></div>${bar(v / max, v / max >= 0.6 ? 'good' : 'bad')}</div>`;
  const weak = PARTS.filter(p => r.parts[p.id] < 0.6);
  const draw = keep => {
    newCtx({ ex, ans: r.ans, rv: true });
    setView(`${crumbs(['Главная', '#/'], ['Результат'])}
    <section class="verdict ${passed === false || !r.wPass ? 'bad' : 'good'}"><div><span class="eyebrow">${esc(ex.title)} · ${fmtDate(r.id)}</span>
      <h1>${passed == null ? (r.wPass ? 'Письменная часть сдана ✓' : 'Письменная часть не сдана') : passed ? 'Bestanden — экзамен сдан ✓' : 'Nicht bestanden — пока не сдан'}</h1>
      <p>${passed ? `Итог: ${fmtPts(total)} из 300 баллов, оценка «${grade(total)[0]}» (${grade(total)[1]}).` : passed == null ? `Письменная часть: ${fmtPts(r.written)} из 225 (${pct(r.written, 225)} %). Устная часть пропущена — для сертификата нужно набрать 60 % в обеих частях.` : `Для сдачи нужно минимум 135 из 225 в письменной и 45 из 75 в устной части.`}</p></div>
      ${ring(r.written / 225, 'письменная')}</section>
    <div class="card">${row('Leseverstehen', r.sec.lesen, 75)}${row('Sprachbausteine', r.sec.sb, 30)}${row('Hörverstehen', r.sec.hoeren, 75)}${row('Schriftlicher Ausdruck <small>(самооценка)</small>', r.w, 45)}<hr>${row('Schriftliche Prüfung — всего', r.written, 225, 135)}${r.oral != null ? row('Mündliche Prüfung <small>(самооценка)</small>', r.oral, 75, 45) : ''}</div>
    ${weak.length ? `<div class="note">📌 Слабые места (меньше 60 %): ${weak.map(p => `<a href="#/train/${p.mod}">${p.name}</a>`).join(', ')}. Потренируйте эти части на других вариантах.</div>` : '<div class="note">Все части с автоматической проверкой выполнены выше проходного порога — отличная работа!</div>'}
    <h2>Разбор ответов</h2><div class="tabs">${PARTS.map(p => `<button class="tab${p.id === tab ? ' on' : ''}" data-act="rtab" data-p="${p.id}">${p.short}<small>${Math.round(r.parts[p.id] * p.n)}/${p.n}</small></button>`).join('')}<button class="tab${tab === 'w' ? ' on' : ''}" data-act="rtab" data-p="w">Schreiben<small>${r.w}/45</small></button></div>
    ${tab === 'w' ? `<div class="card"><h3>Ваш текст</h3><div class="mytext prose">${r.text ? paras(r.text) : '<p class="muted">Текст не написан.</p>'}</div></div><div class="card"><h3>Образец</h3><div class="prose mail">${paras(ex.schreiben.model)}</div></div>` : renderPart(ex, tab)}
    <div class="actionbar"><a class="btn" href="#/">На главную</a><a class="btn primary" href="#/exam">Другой вариант</a></div>`, keep);
    afterRender();
  };
  A.rtab = el => { TTS.stop(); tab = el.dataset.p; draw(true); };
  draw();
}

/* ===== Универсальный тест ===== */
function runQuiz({ head, qs, onDone, backHref, backLabel }) {
  let i = 0, right = 0, picked = null; const wrong = [];
  const draw = () => {
    if (i >= qs.length) {
      onDone && onDone(right, qs.length);
      return setView(`${head}<div class="card quizend"><div class="bigscore ${right / qs.length >= 0.6 ? 'good' : 'bad'}">${right} / ${qs.length}</div><p>${right / qs.length >= 0.8 ? 'Отлично! Тема усвоена.' : right / qs.length >= 0.6 ? 'Неплохо, но есть что повторить.' : 'Перечитайте правило и попробуйте ещё раз.'}</p>
        ${wrong.length ? `<div class="wronglist"><h4>Ошибки</h4>${wrong.map(q => `<div class="exrow is-bad"><div>${esc(q.q).replace('___', `<b class="blank">${esc(q.options[q.answer])}</b>`)}${q.q.includes('___') ? '' : ` — <b>${esc(q.options[q.answer])}</b>`}<br><span class="muted">${esc(q.explain || '')}</span></div></div>`).join('')}</div>` : ''}
        <div class="row center"><button class="btn" data-act="again">↺ Ещё раз</button><a class="btn primary" href="${backHref}">${backLabel}</a></div></div>`);
    }
    const q = qs[i], done = picked != null;
    setView(`${head}<div class="card quiz"><div class="bar"><i style="width:${i / qs.length * 100}%"></i></div><div class="muted qcount">Вопрос ${i + 1} из ${qs.length}</div>
      <h2 class="qq">${esc(q.q).replace('___', `<span class="blank${done ? ' filled' : ''}">${done ? esc(q.options[q.answer]) : '&nbsp;'}</span>`)}</h2>
      <div class="opts">${q.options.map((o, j) => `<button class="opt${done && j === q.answer ? ' good' : ''}${done && j === picked && j !== q.answer ? ' bad' : ''}" data-act="pick" data-i="${j}"${done ? ' disabled' : ''}><b>${LET[j]}</b><span>${esc(o)}</span></button>`).join('')}</div>
      ${done ? `<div class="expl ${picked === q.answer ? 'ok' : ''}">${picked === q.answer ? '✓ Верно. ' : '✗ Неверно. '}${esc(q.explain || '')}</div><div class="row end"><button class="btn primary" data-act="next">${i === qs.length - 1 ? 'Результат' : 'Дальше →'}</button></div>` : ''}</div>`, i > 0 || done);
  };
  A.pick = el => { if (picked != null) return; picked = +el.dataset.i; if (picked === qs[i].answer) right++; else wrong.push(qs[i]); draw(); };
  A.next = () => { i++; picked = null; draw(); };
  A.again = () => route();
  draw();
}

/* ===== Грамматика ===== */
function viewGrammar() {
  const g = store.get('gram', {});
  setView(`<h1>🧠 Грамматика B1</h1><p class="lead">Темы, которые чаще всего проверяются в Sprachbausteine и нужны для письма. В каждой — краткое правило и тест с объяснениями.</p>
    <div class="list"><a class="card rowlink accent" href="#/grammar/mix"><div><b>🎲 Микс: 15 случайных вопросов</b><span class="muted">Из всех тем — как в настоящих Sprachbausteine</span></div>${badge(g.mix)}</a>
    ${TR.grammar.map(t => `<a class="card rowlink" href="#/grammar/${t.id}"><div><b>${esc(t.title)}</b><span class="muted">${esc(t.titleRu)} · ${t.questions.length} вопросов</span></div>${badge(g[t.id])}</a>`).join('')}</div>`);
}
function viewGrammarTopic(id) {
  const mix = id === 'mix', t = mix ? { id: 'mix', title: 'Микс', titleRu: '15 случайных вопросов' } : TR.grammar.find(x => x.id === id);
  if (!t) return viewGrammar();
  const head = `${crumbs(['Грамматика', '#/grammar'], [t.title])}`;
  const start = () => runQuiz({
    head: head + `<h1>${esc(t.title)}</h1>`, backHref: '#/grammar', backLabel: 'К темам',
    qs: mix ? shuffle(TR.grammar.flatMap(x => x.questions)).slice(0, 15) : shuffle(t.questions),
    onDone: (r, n) => { const g = store.get('gram', {}); if (!(g[t.id] >= r / n)) { g[t.id] = r / n; store.set('gram', g); } }
  });
  if (mix) return start();
  A.gStart = start;
  setView(`${head}<h1>${esc(t.title)}</h1><p class="lead">${esc(t.titleRu)}</p><div class="card rule prose">${paras(t.rule)}</div><div class="actionbar"><a class="btn" href="#/grammar">← К темам</a><button class="btn primary" data-act="gStart">Начать тест (${t.questions.length} вопросов)</button></div>`);
}

/* ===== Словарь ===== */
const vknown = () => store.get('vk', {});
function viewVocab() {
  const k = vknown();
  setView(`<h1>🗂️ Словарь B1</h1><p class="lead">Слова по темам экзамена. Учите карточками (нажмите на карточку, чтобы перевернуть) и проверяйте себя тестом.</p>
    <div class="grid">${TR.vocab.map(t => { const n = Object.keys(k[t.id] || {}).length; return `<a class="card mod" href="#/vocab/${t.id}"><h3>${esc(t.title)}</h3><p class="muted">${esc(t.titleRu)} · выучено ${n} из ${t.words.length}</p>${bar(n / t.words.length)}</a>`; }).join('')}</div>`);
}
function viewVocabTopic(id, mode) {
  const t = TR.vocab.find(x => x.id === id); if (!t) return viewVocab();
  const head = crumbs(['Словарь', '#/vocab'], mode ? [t.title, '#/vocab/' + t.id] : [t.title], ...(mode ? [[mode === 'cards' ? 'Карточки' : 'Тест']] : []));
  A.sayWord = el => TTS.say(el.dataset.t.split('|'));
  if (mode === 'test') {
    const qs = shuffle(t.words).slice(0, 12).map(w => { const opts = shuffle([w, ...shuffle(t.words.filter(x => x !== w)).slice(0, 3)]); return { q: w.de, options: opts.map(o => o.ru), answer: opts.indexOf(w), explain: w.ex }; });
    return runQuiz({ head: head + `<h1>${esc(t.title)} — тест</h1>`, qs, backHref: '#/vocab/' + t.id, backLabel: 'К теме' });
  }
  if (mode === 'cards') {
    const k = vknown(); k[t.id] = k[t.id] || {};
    let queue = shuffle(t.words.map((w, i) => i)).sort((a, b) => (k[t.id][a] ? 1 : 0) - (k[t.id][b] ? 1 : 0)), pos = 0, flip = false;
    const draw = () => {
      if (pos >= queue.length) return setView(`${head}<div class="card quizend"><div class="bigscore good">${Object.keys(k[t.id]).length} / ${t.words.length}</div><p>слов отмечено как выученные</p><div class="row center"><button class="btn" data-act="cAgain">↺ Ещё круг</button><a class="btn primary" href="#/vocab/${t.id}/test">Пройти тест</a></div></div>`);
      const w = t.words[queue[pos]];
      setView(`${head}<div class="bar"><i style="width:${pos / queue.length * 100}%"></i></div><div class="muted qcount">${pos + 1} / ${queue.length}</div>
        <div class="flash${flip ? ' flipped' : ''}" data-act="flip"><div class="fl-de">${esc(w.de)}</div>${flip ? `<div class="fl-ru">${esc(w.ru)}</div><div class="fl-ex">${esc(w.ex)}</div>` : '<div class="muted">нажмите, чтобы увидеть перевод</div>'}</div>
        <div class="row center"><button class="btn" data-act="sayWord" data-t="${esc(flip ? w.de.replace(/[,(].*$/, '') + '|' + w.ex : w.de.replace(/[,(].*$/, ''))}">🔊 Слушать</button>${flip ? '<button class="btn bad" data-act="cNo">Не знаю</button><button class="btn good" data-act="cYes">Знаю ✓</button>' : '<button class="btn primary" data-act="flip">Показать перевод</button>'}</div>`, true);
    };
    A.flip = () => { flip = !flip; draw(); };
    const mv = yes => { const i = queue[pos]; if (yes) k[t.id][i] = 1; else { delete k[t.id][i]; queue.push(i); } store.set('vk', k); pos++; flip = false; draw(); };
    A.cYes = () => mv(true); A.cNo = () => mv(false); A.cAgain = () => route();
    return draw();
  }
  const k = vknown()[t.id] || {};
  setView(`${head}<h1>${esc(t.title)}</h1><p class="lead">${esc(t.titleRu)} · ${t.words.length} слов</p><div class="row"><a class="btn primary" href="#/vocab/${t.id}/cards">Карточки</a><a class="btn" href="#/vocab/${t.id}/test">Тест</a></div>
    <div class="card wordlist">${t.words.map((w, i) => `<div class="wrow${k[i] ? ' known' : ''}"><button class="sayb" data-act="sayWord" data-t="${esc(w.de.replace(/[,(].*$/, ''))}" aria-label="Слушать">🔊</button><div><b>${esc(w.de)}</b> — ${esc(w.ru)}<br><span class="muted">${esc(w.ex)}</span></div></div>`).join('')}</div>`);
}

/* ===== Redemittel ===== */
function viewPhrases() {
  A.sayWord = el => TTS.say(el.dataset.t.split('|'));
  setView(`<h1>💬 Redemittel</h1><p class="lead">Готовые фразы-клише. Выучите по 3–4 из каждой группы — и письмо, и разговор будут звучать увереннее. Нажмите 🔊, чтобы услышать произношение.</p>
    ${TR.phrases.map((s, i) => `<details class="card acc"${i === 0 ? ' open' : ''}><summary><b>${esc(s.title)}</b><span class="muted">${esc(s.titleRu)}</span></summary>${s.groups.map(g => `<h4>${esc(g.title)}</h4>${g.items.map(x => `<div class="wrow"><button class="sayb" data-act="sayWord" data-t="${esc(x.de)}" aria-label="Слушать">🔊</button><div><b>${esc(x.de)}</b><br><span class="muted">${esc(x.ru)}</span></div></div>`).join('')}`).join('')}</details>`).join('')}`);
}

/* ===== Об экзамене и настройки ===== */
function viewInfo() {
  A.rate = el => { TTS.rate = +el.value; store.set('rate', TTS.rate); };
  A.testVoice = testVoice;
  A.reset = () => { if (confirm('Удалить весь прогресс и результаты на этом устройстве?')) { store.clear(); toast('Прогресс удалён'); route(); } };
  setView(`<h1>ℹ️ Экзамен telc Deutsch B1</h1><p class="lead">telc Deutsch B1 (Zertifikat Deutsch) подтверждает самостоятельное владение немецким языком на уровне B1. Сертификат принимают, в частности, при оформлении гражданства и вида на жительство в Германии.</p>
  <div class="card tablewrap"><table class="tbl"><thead><tr><th>Часть</th><th>Что нужно сделать</th><th>Время</th><th>Баллы</th></tr></thead><tbody>
    <tr><td><b>Leseverstehen</b></td><td>Teil 1: 5 текстов — 10 заголовков (5×5)<br>Teil 2: текст и 5 вопросов a/b/c (5×5)<br>Teil 3: 10 ситуаций — 12 объявлений (10×2,5)</td><td rowspan="2">90 мин</td><td>75</td></tr>
    <tr><td><b>Sprachbausteine</b></td><td>Teil 1: 10 пропусков, выбор из трёх (10×1,5)<br>Teil 2: 10 пропусков, 15 слов (10×1,5)</td><td>30</td></tr>
    <tr><td><b>Hörverstehen</b></td><td>Teil 1: 5 высказываний, 1 раз (5×5)<br>Teil 2: интервью, 2 раза (10×2,5)<br>Teil 3: 5 объявлений, 2 раза (5×5)</td><td>≈ 30 мин</td><td>75</td></tr>
    <tr><td><b>Schriftlicher Ausdruck</b></td><td>Письмо / e-mail по 4 пунктам</td><td>30 мин</td><td>45</td></tr>
    <tr class="sum"><td colspan="2"><b>Письменный экзамен</b> — для сдачи нужно 135</td><td>≈ 150 мин</td><td>225</td></tr>
    <tr><td><b>Mündliche Prüfung</b></td><td>Teil 1: знакомство (15)<br>Teil 2: разговор на тему (30)<br>Teil 3: совместное планирование (30)</td><td>20 мин подготовка + ≈ 15 мин</td><td>75</td></tr>
    <tr class="sum"><td colspan="2"><b>Устный экзамен</b> — для сдачи нужно 45</td><td></td><td>75</td></tr>
    <tr class="sum"><td colspan="3"><b>Всего</b></td><td>300</td></tr></tbody></table></div>
  <div class="grid two">
    <div class="card"><h3>Как сдать</h3><p>Нужно набрать <b>60 %</b> отдельно в письменной (135 из 225) и в устной части (45 из 75). Если одна из частей не сдана, её можно пересдать отдельно до конца следующего календарного года.</p><p><b>Оценки:</b> 270–300 sehr gut · 240–269,5 gut · 210–239,5 befriedigend · 180–209,5 ausreichend.</p></div>
    <div class="card"><h3>Важно на экзамене</h3><ul class="ul"><li>Ответы переносятся в бланк (Antwortbogen) — оставьте на это 5 минут.</li><li>Словари, телефоны и переводчики запрещены.</li><li>За неверный ответ баллы не снимают — не оставляйте пустых полей.</li><li>В устной части важнее живой диалог, чем идеальная грамматика.</li></ul></div>
    <div class="card"><h3>План подготовки</h3><ul class="ul"><li><b>Каждый день 20–30 минут:</b> одна тема грамматики + 25 слов.</li><li><b>3 раза в неделю:</b> одна часть Lesen и одна Hören.</li><li><b>Раз в неделю:</b> письмо на время (30 минут) и устная часть с записью.</li><li><b>За 2 недели до экзамена:</b> полная симуляция каждого варианта.</li></ul></div>
    <div class="card"><h3>Настройки звука</h3><p><label>Скорость речи: <select data-act="rate" class="sel"><option value="0.8"${TTS.rate === 0.8 ? ' selected' : ''}>медленнее</option><option value="0.9"${TTS.rate === 0.9 ? ' selected' : ''}>экзаменационная</option><option value="1"${TTS.rate === 1 ? ' selected' : ''}>быстрее</option></select></label></p><p><button class="btn sm" data-act="testVoice">🔊 Проверить звук</button></p><p class="muted">Все тексты для аудирования, реплики партнёра, слова и фразы записаны заранее шестью разными немецкими дикторами (нейронные голоса) и звучат одинаково на любом устройстве.</p>${voiceNote()}</div>
  </div>
  <div class="card author"><div><b>Тренажёр создан в D-Bridge e.V.</b><p>Автор и разработчик — Александр Ковальчук. Есть вопросы, идеи или нашли ошибку? Напишите или позвоните.</p></div><div class="author-links"><a href="https://d-bridge.eu" target="_blank" rel="noopener">d-bridge.eu</a><a href="mailto:info@d-bridge.eu">info@d-bridge.eu</a><a href="tel:+4917684918760">+49 176 84918760</a></div></div>
  <div class="card"><h3>Данные</h3><p class="muted">Прогресс хранится только в этом браузере, никуда не отправляется. Записи голоса не сохраняются.</p><button class="btn sm danger-ghost" data-act="reset">Сбросить весь прогресс</button></div>
  <p class="foot muted">Неофициальный учебный тренажёр, разработан D-Bridge e.V. (Александр Ковальчук). telc — зарегистрированный товарный знак telc gGmbH; сайт с ней не связан. Все тексты и задания авторские и составлены по общедоступному описанию формата. Актуальные правила и даты экзаменов уточняйте в своём экзаменационном центре.</p>`);
}
function testVoice() { TTS.speak([{ v: 'f', t: 'Guten Tag! Das ist ein Test. Können Sie mich gut verstehen?' }, { v: 'm', t: 'Ja, ich höre Sie sehr gut. Viel Erfolg bei der Prüfung!' }], null, 'ui/test'); }

/* ===== Глобальные действия и события ===== */
const BASE = {
  play: el => playAudio(el.dataset.id),
  rec: el => toggleRec(el),
  testVoice,
  sheetOpen() { const r = $('#ref'); if (!r) return; $('#sheetBody').innerHTML = r.innerHTML; $('#sheet').hidden = false; document.body.classList.add('noscroll'); markUsedWords(); },
  sheetClose() { $('#sheet').hidden = true; document.body.classList.remove('noscroll'); },
  async copyAI() { try { await navigator.clipboard.writeText(ctx.aiText()); toast('Скопировано — вставьте в ChatGPT или Claude'); } catch (e) { toast('Не удалось скопировать'); } }
};
document.addEventListener('click', ev => {
  const t = ev.target;
  if (t.id === 'sheet') return BASE.sheetClose();
  const v = t.closest('[data-v]');
  if (v && !v.disabled && ctx) {
    const q = v.closest('[data-q]'), rt = v.closest('[data-rate]');
    if (q && !ctx.rv) {
      const n = q.dataset.q, val = v.dataset.v;
      if (ctx.ans[n] === val) delete ctx.ans[n]; else ctx.ans[n] = val;
      $$('[data-v]', q).forEach(b => b.classList.toggle('on', ctx.ans[n] === b.dataset.v));
      return ctx.onChange();
    }
    if (rt && ctx.rates) {
      ctx.rates[rt.dataset.rate][rt.dataset.crit] = v.dataset.v;
      $$('.lvl', rt).forEach(b => b.classList.toggle('on', b === v));
      return ctx.onRate && ctx.onRate();
    }
  }
  const a = t.closest('[data-act]');
  if (a && a.tagName !== 'SELECT') { const fn = A[a.dataset.act] || BASE[a.dataset.act]; if (fn) { ev.preventDefault(); fn(a, ev); } }
});
document.addEventListener('change', ev => {
  const t = ev.target;
  if (t.matches('select.gap') && ctx) { if (t.value === '') delete ctx.ans[t.dataset.q]; else ctx.ans[t.dataset.q] = t.value; t.classList.toggle('set', t.value !== ''); markUsedWords(); ctx.onChange(); }
  else if (t.matches('select[data-act]')) { const fn = A[t.dataset.act]; fn && fn(t); }
});
document.addEventListener('input', ev => { if (ev.target.id === 'wtext' && ctx && ctx.onText) ctx.onText(ev.target.value); });
document.addEventListener('keydown', ev => { if (ev.key === 'Escape') BASE.sheetClose(); });

/* ===== Роутер ===== */
const ROUTES = [
  [/^$/, viewHome, 'home'], [/^exam$/, viewExam, 'exam'], [/^result\/(\d+)$/, viewResult, 'exam'],
  [/^train$/, viewTrain, 'train'], [/^train\/(\w+)$/, viewModule, 'train'], [/^p\/(\w+)\/(\w+)$/, viewPart, 'train'],
  [/^w\/(\w+)$/, viewWrite, 'train'], [/^s\/(\w+)$/, viewSpeak, 'train'],
  [/^grammar$/, viewGrammar, 'grammar'], [/^grammar\/([\w-]+)$/, viewGrammarTopic, 'grammar'],
  [/^vocab$/, viewVocab, 'vocab'], [/^vocab\/([\w-]+)(?:\/(\w+))?$/, viewVocabTopic, 'vocab'],
  [/^phrases$/, viewPhrases, 'phrases'], [/^info$/, viewInfo, 'info']
];
function route() {
  TTS.stop(); Rec.cancel(); clearInterval(tickT); BASE.sheetClose();
  Object.keys(A).forEach(k => delete A[k]); ctx = null;
  const path = location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
  if (!EXAMS.length) return setView('<div class="note warn">Не удалось загрузить данные экзамена. Обновите страницу.</div>');
  const hit = ROUTES.find(r => r[0].test(path)) || ROUTES[0], m = path.match(hit[0]) || [];
  $$('#nav a').forEach(a => a.classList.toggle('on', a.dataset.nav === hit[2]));
  hit[1](...m.slice(1));
}
window.addEventListener('hashchange', route);
window.addEventListener('beforeunload', () => TTS.stop());
route();
