'use strict';
/* ===== Статистика посещений: Google Analytics 4 =====
   Счётчик подключается только после согласия посетителя (требование DSGVO/TTDSG).
   Отчёты видит только владелец аккаунта на analytics.google.com. ID — в строке ниже; пустой ID = статистика выключена. */
const STATS = (() => {
  const ID = 'G-LRQ5VB31RB';
  const TXT = {
    ru: ['Разрешить учёт посещений через Google Analytics (использует cookie)? Это помогает развивать тренажёр.', 'Разрешить', 'Нет, спасибо'],
    uk: ['Дозволити облік відвідувань через Google Analytics (використовує cookie)? Це допомагає розвивати тренажер.', 'Дозволити', 'Ні, дякую'],
    en: ['Allow visit statistics via Google Analytics (uses cookies)? It helps us improve the trainer.', 'Allow', 'No, thanks'],
    pl: ['Zezwolić na statystyki odwiedzin przez Google Analytics (używa plików cookie)? To pomaga rozwijać trenażer.', 'Zezwól', 'Nie, dziękuję'],
    tr: ['Google Analytics ile ziyaret istatistiklerine izin veriyor musunuz (çerez kullanır)? Bu, uygulamayı geliştirmemize yardımcı olur.', 'İzin ver', 'Hayır, teşekkürler'],
    es: ['¿Permitir estadísticas de visitas con Google Analytics (usa cookies)? Nos ayuda a mejorar el entrenador.', 'Permitir', 'No, gracias'],
    fr: ['Autoriser les statistiques de visite via Google Analytics (utilise des cookies) ? Cela nous aide à améliorer l’application.', 'Autoriser', 'Non, merci'],
    it: ['Consentire le statistiche delle visite tramite Google Analytics (usa cookie)? Ci aiuta a migliorare l’applicazione.', 'Consenti', 'No, grazie'],
    ro: ['Permiteți statistica vizitelor prin Google Analytics (folosește cookie-uri)? Ne ajută să îmbunătățim aplicația.', 'Permit', 'Nu, mulțumesc'],
    ar: ['هل تسمح بإحصاءات الزيارات عبر Google Analytics (يستخدم ملفات تعريف الارتباط)؟ هذا يساعدنا على تطوير التطبيق.', 'أسمح', 'لا، شكرًا'],
    fa: ['آیا اجازه می‌دهید بازدیدها با Google Analytics شمرده شود (از کوکی استفاده می‌کند)؟ این به بهبود برنامه کمک می‌کند.', 'اجازه می‌دهم', 'نه، ممنون'],
    az: ['Google Analytics vasitəsilə ziyarət statistikasına icazə verirsiniz (cookie istifadə edir)? Bu, trenajoru inkişaf etdirməyə kömək edir.', 'İcazə ver', 'Xeyr, təşəkkür']
  };
  let on = false;
  function page() {
    if (!on) return;
    const path = location.pathname + (location.hash.replace(/^#/, '') || '/');
    window.gtag('event', 'page_view', { page_path: path, page_location: location.origin + path, page_title: document.title });
  }
  function start() {
    if (on || !ID) return; on = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ID, { send_page_view: false });
    const s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID; document.head.appendChild(s);
    page(); window.addEventListener('hashchange', page);
  }
  function ask() {
    if (document.getElementById('consent')) return;
    const t = TXT[I18N.lang] || TXT.ru, el = document.createElement('div');
    el.id = 'consent'; el.className = 'consent'; el.setAttribute('role', 'dialog');
    const p = document.createElement('p'); p.textContent = t[0];
    const yes = document.createElement('button'); yes.className = 'btn primary sm'; yes.textContent = t[1];
    const no = document.createElement('button'); no.className = 'btn sm'; no.textContent = t[2];
    const row = document.createElement('div'); row.append(no, yes); el.append(p, row);
    yes.onclick = () => { store.set('consent', 'yes'); el.remove(); start(); };
    no.onclick = () => { const was = store.get('consent', null); store.set('consent', 'no'); el.remove(); if (was === 'yes') location.reload(); };
    document.body.appendChild(el);
  }
  function init() {
    const link = document.getElementById('ckset');
    if (!ID) { if (link) link.hidden = true; return; }
    if (link) link.onclick = e => { e.preventDefault(); ask(); };
    const c = store.get('consent', null);
    if (c === 'yes') start(); else if (c !== 'no') ask();
  }
  return { init, ask };
})();
STATS.init();
