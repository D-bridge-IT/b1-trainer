window.TELC = window.TELC || {};
window.TELC.training = {
  grammar: [
    {
      id: 'praep-kasus',
      title: 'Präpositionen und Kasus',
      titleRu: 'Предлоги и падежи',
      rule: 'Каждый немецкий предлог требует определённого падежа. Всегда с Dativ: aus, bei, mit, nach, seit, von, zu (mit dem Bus, seit einem Jahr). Всегда с Akkusativ: durch, für, gegen, ohne, um (für meinen Bruder, ohne dich). С Genitiv: wegen, trotz, während (wegen des Wetters).\nПредлоги двойного управления (Wechselpräpositionen): in, an, auf, über, unter, vor, hinter, neben, zwischen. На вопрос «Wohin?» (движение к цели) — Akkusativ: Ich hänge das Bild an die Wand. На вопрос «Wo?» (место) — Dativ: Das Bild hängt an der Wand.\nВременные предлоги: um 8 Uhr, am Montag, im Juli, seit drei Jahren (до сих пор), vor drei Jahren (назад), nach dem Essen, bis morgen.\nСтраны и города без артикля — nach (nach Italien), страны с артиклем — in + Akkusativ (in die Schweiz, in die Türkei). К людям — zu (движение) и bei (нахождение): Ich gehe zum Arzt. Ich bin beim Arzt.',
      questions: [
        { q: 'Ich hänge das Bild ___ die Wand.', options: ['an', 'auf', 'in'], answer: 0, explain: 'Вертикальная поверхность — an. Вопрос «Wohin?», поэтому Akkusativ: an die Wand.' },
        { q: 'Die Schlüssel liegen auf ___ Tisch in der Küche.', options: ['den', 'dem', 'der'], answer: 1, explain: 'liegen отвечает на вопрос «Wo?», поэтому после auf стоит Dativ: der Tisch → auf dem Tisch.' },
        { q: 'Wir fahren im Sommer ___ die Schweiz.', options: ['nach', 'zu', 'in'], answer: 2, explain: 'Страны с артиклем (die Schweiz, die Türkei, die USA) употребляются с in + Akkusativ: in die Schweiz.' },
        { q: '___ dem Essen wasche ich mir immer die Hände.', options: ['Bevor', 'Vor', 'Früher'], answer: 1, explain: 'Перед существительным нужен предлог vor + Dativ. Bevor — союз, он вводит придаточное предложение с глаголом.' },
        { q: 'Ich wohne ___ drei Jahren in Hamburg.', options: ['vor', 'für', 'seit'], answer: 2, explain: 'seit + Dativ — действие началось в прошлом и продолжается сейчас (глагол в Präsens). vor drei Jahren значит «три года назад».' },
        { q: 'Wegen ___ schlechten Wetters bleiben wir zu Hause.', options: ['des', 'dem', 'den'], answer: 0, explain: 'wegen требует Genitiv: das Wetter → wegen des Wetters (окончание -s у существительного).' },
        { q: 'Der Zug kommt ___ 14:30 Uhr an.', options: ['am', 'um', 'im'], answer: 1, explain: 'Точное время по часам — um: um 14:30 Uhr. am — дни и части суток, im — месяцы и времена года.' },
        { q: 'Stell bitte die Flaschen ___ den Kühlschrank!', options: ['in', 'im', 'bei'], answer: 0, explain: 'stellen — «Wohin?», значит in + Akkusativ: in den Kühlschrank. im = in dem (Dativ) отвечает на вопрос «Wo?».' },
        { q: 'Meine Tochter ist ___ ihrer Freundin und kommt erst am Abend zurück.', options: ['zu', 'nach', 'bei'], answer: 2, explain: 'Нахождение у человека — bei + Dativ: bei ihrer Freundin. zu используется при движении: Sie geht zu ihrer Freundin.' },
        { q: 'Das Geschenk ist ___ meinen Bruder.', options: ['mit', 'für', 'von'], answer: 1, explain: 'für требует Akkusativ: für meinen Bruder. После mit и von был бы Dativ: meinem Bruder.' }
      ]
    },
    {
      id: 'verben-praep',
      title: 'Verben mit festen Präpositionen',
      titleRu: 'Глаголы с устойчивыми предлогами',
      rule: 'Многие немецкие глаголы употребляются с определённым предлогом, который нужно учить вместе с глаголом и падежом. Предлог часто не совпадает с русским: warten auf + Akk. (ждать), sich interessieren für + Akk. (интересоваться), teilnehmen an + Dat. (участвовать в).\nЧастые сочетания с Akkusativ: denken an, sich erinnern an, sich freuen auf (предвкушать) / über (радоваться уже случившемуся), sich kümmern um, sich bewerben um, bitten um, sich beschweren über, sich ärgern über, sich verlieben in.\nЧастые сочетания с Dativ: sprechen mit, abhängen von, träumen von, sich bedanken bei (кого) für (за что), leiden unter, Angst haben vor, gehören zu, einladen zu.\nТе же предлоги сохраняются у существительных и прилагательных: die Angst vor, das Interesse an, zufrieden mit, stolz auf.',
      questions: [
        { q: 'Ich interessiere mich sehr ___ deutsche Geschichte.', options: ['für', 'an', 'über'], answer: 0, explain: 'sich interessieren für + Akkusativ — «интересоваться чем-либо».' },
        { q: 'Wir freuen uns schon ___ den Urlaub im August.', options: ['an', 'für', 'auf'], answer: 2, explain: 'sich freuen auf + Akkusativ — радоваться тому, что ещё предстоит.' },
        { q: 'Kannst du dich noch ___ unseren ersten Lehrer erinnern?', options: ['auf', 'an', 'über'], answer: 1, explain: 'sich erinnern an + Akkusativ — «помнить, вспоминать о ком-то/чём-то».' },
        { q: 'Ich habe mich ___ die Stelle als Verkäufer beworben.', options: ['um', 'an', 'über'], answer: 0, explain: 'sich bewerben um + Akkusativ — «подавать заявление на (должность, место)».' },
        { q: 'Er hat sich ___ den Lärm der Nachbarn beschwert.', options: ['für', 'auf', 'über'], answer: 2, explain: 'sich beschweren über + Akkusativ — «жаловаться на что-либо».' },
        { q: 'Hast du schon einmal ___ einer Deutschprüfung teilgenommen?', options: ['in', 'an', 'bei'], answer: 1, explain: 'teilnehmen an + Dativ — «принимать участие в чём-либо».' },
        { q: 'Ob wir grillen können, hängt ___ Wetter ab.', options: ['vom', 'am', 'zum'], answer: 0, explain: 'abhängen von + Dativ — «зависеть от»: von dem = vom Wetter.' },
        { q: 'Ich möchte mich ___ Ihnen für die schnelle Hilfe bedanken.', options: ['an', 'zu', 'bei'], answer: 2, explain: 'sich bedanken bei + Dativ (кого благодарят) für + Akkusativ (за что).' },
        { q: 'Kümmerst du dich bitte ___ die Getränke für die Party?', options: ['für', 'um', 'über'], answer: 1, explain: 'sich kümmern um + Akkusativ — «заботиться о чём-то, заниматься чем-то».' },
        { q: 'Viele Menschen leiden ___ Stress bei der Arbeit.', options: ['unter', 'von', 'über'], answer: 0, explain: 'leiden unter + Dativ — «страдать от (стресса, шума, жары)».' }
      ]
    },
    {
      id: 'konnektoren-1',
      title: 'Konnektoren I: weil, da, denn, deshalb, trotzdem, obwohl',
      titleRu: 'Союзы I: причина, следствие, уступка',
      rule: 'Важно не только значение союза, но и порядок слов после него.\nweil и da (потому что, так как) вводят придаточное: глагол стоит в конце. Ich bleibe zu Hause, weil ich krank bin. Da часто стоит в начале: Da ich krank bin, bleibe ich zu Hause.\ndenn (так как) соединяет два главных предложения и не влияет на порядок слов: Ich bleibe zu Hause, denn ich bin krank.\ndeshalb / deswegen / darum (поэтому) — наречия, они занимают первое место, сразу за ними идёт глагол: Ich bin krank, deshalb bleibe ich zu Hause.\nobwohl (хотя) — придаточное, глагол в конце: Obwohl es regnet, gehen wir spazieren. trotzdem (несмотря на это, всё равно) — наречие, после него сразу глагол: Es regnet, trotzdem gehen wir spazieren.',
      questions: [
        { q: 'Ich bleibe heute zu Hause, ___ ich krank bin.', options: ['weil', 'denn', 'deshalb'], answer: 0, explain: 'Глагол bin стоит в конце — это придаточное, значит нужен weil. После denn порядок слов был бы прямой: denn ich bin krank.' },
        { q: 'Ich bleibe heute zu Hause, ___ ich bin krank.', options: ['weil', 'obwohl', 'denn'], answer: 2, explain: 'После пропуска прямой порядок слов (ich bin krank), поэтому подходит только denn.' },
        { q: 'Er hat sehr wenig gelernt, ___ hat er die Prüfung bestanden.', options: ['deshalb', 'trotzdem', 'weil'], answer: 1, explain: 'Результат противоречит ожиданию — trotzdem («всё равно»). После него сразу идёт глагол hat.' },
        { q: '___ er sehr müde war, konnte er nicht einschlafen.', options: ['Obwohl', 'Trotzdem', 'Denn'], answer: 0, explain: 'Придаточное уступки с глаголом в конце (war) вводит obwohl — «хотя».' },
        { q: 'Der Bus hatte Verspätung, ___ bin ich zu spät zur Arbeit gekommen.', options: ['weil', 'denn', 'deshalb'], answer: 2, explain: 'Следствие + глагол сразу после пропуска (bin ich) — deshalb. После weil глагол стоял бы в конце, после denn — подлежащее.' },
        { q: '___ ich kein Auto habe, fahre ich mit dem Fahrrad zur Arbeit.', options: ['Denn', 'Da', 'Deshalb'], answer: 1, explain: 'da = weil, вводит придаточное причины (глагол habe в конце). Denn не может вводить придаточное.' },
        { q: 'Sie spricht schon gut Deutsch, ___ sie erst seit einem Jahr hier lebt.', options: ['obwohl', 'trotzdem', 'deshalb'], answer: 0, explain: 'Глагол lebt в конце — придаточное с obwohl. После trotzdem и deshalb глагол стоял бы на втором месте.' },
        { q: 'Ich habe meinen Schlüssel vergessen. ___ konnte ich die Tür nicht öffnen.', options: ['Weil', 'Denn', 'Deswegen'], answer: 2, explain: 'deswegen = deshalb («поэтому»), стоит на первом месте, за ним глагол konnte.' },
        { q: 'Warum lernst du Deutsch? – ___ ich in Deutschland arbeiten möchte.', options: ['Denn', 'Weil', 'Deshalb'], answer: 1, explain: 'На вопрос «Warum?» отвечают придаточным с weil: глагол möchte стоит в конце.' },
        { q: 'Das Restaurant ist ziemlich teuer. ___ ist es jeden Abend voll.', options: ['Trotzdem', 'Obwohl', 'Weil'], answer: 0, explain: 'После пропуска сразу глагол ist — значит, нужно наречие trotzdem. Obwohl и weil требуют глагола в конце.' }
      ]
    },
    {
      id: 'konnektoren-2',
      title: 'Konnektoren II: dass, ob, wenn, als, während, bevor, nachdem, damit, um … zu',
      titleRu: 'Союзы II: придаточные предложения',
      rule: 'Все эти союзы вводят придаточные: спрягаемый глагол стоит в конце.\ndass (что) — после глаголов мнения, знания, чувства: Ich glaube, dass er recht hat. ob (ли) — косвенный вопрос без вопросительного слова: Ich weiß nicht, ob er kommt.\nals — однократное событие в прошлом: Als ich Kind war, … wenn — условие (если), настоящее и будущее (когда), а также повторяющееся действие в прошлом: Immer wenn ich ihn besuchte, …\nwährend (в то время как), bevor (прежде чем), nachdem (после того как; обычно с Plusquamperfekt или Perfekt: Nachdem wir gegessen hatten, gingen wir spazieren).\nЦель: um … zu + Infinitiv, если подлежащее одно и то же (Ich lerne Deutsch, um in Deutschland zu arbeiten); damit, если подлежащие разные (Ich spreche langsam, damit du mich verstehst).',
      questions: [
        { q: 'Ich weiß nicht, ___ er heute noch kommt.', options: ['dass', 'ob', 'wenn'], answer: 1, explain: 'Косвенный вопрос без вопросительного слова («придёт ли он») вводится союзом ob.' },
        { q: '___ ich ein Kind war, habe ich in einem kleinen Dorf gewohnt.', options: ['Als', 'Wenn', 'Wann'], answer: 0, explain: 'Однократное событие или период в прошлом — als. Wann используется только в вопросах.' },
        { q: 'Immer ___ ich meine Großeltern besuchte, gab es Kuchen.', options: ['als', 'wann', 'wenn'], answer: 2, explain: 'Повторяющееся действие в прошлом (immer, jedes Mal) — wenn, а не als.' },
        { q: 'Ich lerne Deutsch, ___ in Deutschland zu studieren.', options: ['um', 'damit', 'dass'], answer: 0, explain: 'Цель при одинаковом подлежащем: um … zu + Infinitiv. После damit нужно полное предложение с подлежащим.' },
        { q: 'Ich spreche langsam, ___ mich alle verstehen.', options: ['um', 'ob', 'damit'], answer: 2, explain: 'Подлежащие разные (ich — alle), поэтому цель выражается союзом damit.' },
        { q: '___ du ins Bett gehst, musst du dir die Zähne putzen.', options: ['Vorher', 'Bevor', 'Vor'], answer: 1, explain: 'Придаточное с глаголом в конце вводит союз bevor. Vor — предлог (vor dem Schlafen), vorher — наречие.' },
        { q: '___ wir gegessen hatten, gingen wir spazieren.', options: ['Nachdem', 'Danach', 'Nach'], answer: 0, explain: 'nachdem — союз «после того как», вводит придаточное (часто в Plusquamperfekt). Nach — предлог, danach — наречие.' },
        { q: '___ ich koche, hört mein Mann Radio.', options: ['Dabei', 'Wegen', 'Während'], answer: 2, explain: 'während — «в то время как, пока»: два действия происходят одновременно.' },
        { q: 'Es freut mich, ___ du die Prüfung bestanden hast.', options: ['ob', 'dass', 'damit'], answer: 1, explain: 'После выражений чувств (es freut mich, ich bin froh) употребляется dass — «что».' },
        { q: '___ es morgen regnet, bleiben wir zu Hause.', options: ['Wenn', 'Als', 'Ob'], answer: 0, explain: 'Условие в настоящем или будущем — wenn («если»). Als относится только к прошлому.' }
      ]
    },
    {
      id: 'adjektivdeklination',
      title: 'Adjektivdeklination',
      titleRu: 'Склонение прилагательных',
      rule: 'Перед существительным прилагательное всегда получает окончание. Оно зависит от артикля, рода, числа и падежа.\nПосле определённого артикля (der, die, das, dieser): в Nominativ единственного числа и в Akkusativ женского и среднего рода — -e (der neue Film, die neue Wohnung, das neue Auto), во всех остальных случаях — -en (den neuen Film, mit dem neuen Auto, die neuen Filme).\nПосле неопределённого артикля, kein и притяжательных местоимений прилагательное в Nominativ показывает род: ein neuer Film, ein neues Auto, eine neue Wohnung; Akkusativ: einen neuen Film. В Dativ и Genitiv, а также во множественном числе после kein/mein — всегда -en: mit einem neuen Auto, meine neuen Freunde.\nБез артикля прилагательное берёт на себя окончание определённого артикля: starker Kaffee, kaltes Wasser, frische Milch, mit guten Freunden.',
      questions: [
        { q: 'Ich habe einen ___ Mantel gekauft.', options: ['neuer', 'neuen', 'neues'], answer: 1, explain: 'Akkusativ мужского рода: einen neuen Mantel — окончание -en.' },
        { q: 'Das ist ein sehr ___ Buch.', options: ['interessantes', 'interessante', 'interessanten'], answer: 0, explain: 'Nominativ среднего рода после ein: прилагательное показывает род — ein interessantes Buch.' },
        { q: 'Wir wohnen in einer ___ Wohnung im Zentrum.', options: ['kleine', 'kleiner', 'kleinen'], answer: 2, explain: 'Dativ (wo? — in einer Wohnung): после артикля в Dativ всегда -en.' },
        { q: 'Der ___ Film gestern hat mir gut gefallen.', options: ['spannende', 'spannender', 'spannenden'], answer: 0, explain: 'Nominativ мужского рода после определённого артикля: der spannende Film — окончание -e.' },
        { q: 'Mit ___ Freunden macht alles mehr Spaß.', options: ['gute', 'guter', 'guten'], answer: 2, explain: 'Dativ множественного числа без артикля: mit guten Freunden — окончание -en.' },
        { q: 'Ich trinke morgens gern ___ Kaffee.', options: ['starker', 'starken', 'starke'], answer: 1, explain: 'Akkusativ мужского рода без артикля: прилагательное получает окончание артикля den → starken Kaffee.' },
        { q: 'Die ___ Kinder spielen im Garten.', options: ['kleinen', 'kleine', 'kleiner'], answer: 0, explain: 'Множественное число после определённого артикля: die kleinen Kinder — всегда -en.' },
        { q: 'Meine Schwester sucht eine ___ Arbeit.', options: ['neuen', 'neue', 'neuer'], answer: 1, explain: 'Akkusativ женского рода: eine neue Arbeit — окончание -e.' },
        { q: '___ Frau Schmidt, vielen Dank für Ihre E-Mail.', options: ['Lieber', 'Liebes', 'Liebe'], answer: 2, explain: 'Обращение к женщине: Liebe Frau Schmidt (женский род, Nominativ без артикля). К мужчине — Lieber Herr Schmidt.' },
        { q: 'Er kam trotz des ___ Wetters pünktlich.', options: ['schlechten', 'schlechtes', 'schlechte'], answer: 0, explain: 'Genitiv после артикля des: всегда -en — trotz des schlechten Wetters.' }
      ]
    },
    {
      id: 'relativsaetze',
      title: 'Relativsätze',
      titleRu: 'Относительные придаточные',
      rule: 'Относительное придаточное описывает существительное из главного предложения. Глагол стоит в конце, придаточное отделяется запятыми.\nРод и число относительного местоимения зависят от слова, к которому оно относится, а падеж — от его роли в придаточном: Der Mann, der dort steht (Nom.) / den ich kenne (Akk.) / dem ich helfe (Dat.).\nФормы совпадают с определённым артиклем, кроме Dativ множественного числа (denen) и Genitiv (dessen — мужской и средний род, deren — женский род и множественное число): Die Kinder, denen ich helfe … Der Nachbar, dessen Hund bellt …\nПредлог ставится перед местоимением: Der Kollege, mit dem ich arbeite … Die Stadt, in der ich wohne …\nПосле alles, etwas, nichts, das употребляется was: Das ist alles, was ich weiß.',
      questions: [
        { q: 'Das ist der Mann, ___ mir geholfen hat.', options: ['der', 'den', 'dem'], answer: 0, explain: 'Местоимение — подлежащее придаточного (кто помог?), мужской род, Nominativ: der.' },
        { q: 'Die Frau, ___ ich gestern getroffen habe, ist meine Nachbarin.', options: ['der', 'die', 'deren'], answer: 1, explain: 'treffen + Akkusativ, женский род: die.' },
        { q: 'Das ist der Kollege, mit ___ ich das Büro teile.', options: ['den', 'der', 'dem'], answer: 2, explain: 'mit требует Dativ; мужской род в Dativ — dem.' },
        { q: 'Die Kinder, ___ ich bei den Hausaufgaben helfe, wohnen nebenan.', options: ['die', 'denen', 'den'], answer: 1, explain: 'helfen + Dativ; во множественном числе относительное местоимение в Dativ — denen (не den).' },
        { q: 'Das Buch, ___ du mir geliehen hast, war sehr spannend.', options: ['das', 'den', 'dem'], answer: 0, explain: 'leihen + Akkusativ (что?), средний род: das.' },
        { q: 'Der Film, ___ wir gestern gesehen haben, war langweilig.', options: ['der', 'dem', 'den'], answer: 2, explain: 'sehen + Akkusativ, мужской род: den.' },
        { q: 'Das ist die Freundin, ___ Bruder in Berlin studiert.', options: ['deren', 'dessen', 'der'], answer: 0, explain: 'Принадлежность («брат которой»): для женского рода — deren.' },
        { q: 'Die Stadt, in ___ ich geboren bin, liegt am Meer.', options: ['die', 'der', 'dem'], answer: 1, explain: 'Wo? — in + Dativ; женский род в Dativ — der: in der ich geboren bin.' },
        { q: 'Der Nachbar, ___ Hund immer bellt, ist umgezogen.', options: ['deren', 'dem', 'dessen'], answer: 2, explain: 'Принадлежность («собака которого»): для мужского рода — dessen.' },
        { q: 'Das ist alles, ___ ich darüber weiß.', options: ['was', 'das', 'wo'], answer: 0, explain: 'После alles, etwas, nichts относительное придаточное вводится словом was.' }
      ]
    },
    {
      id: 'perfekt-praeteritum',
      title: 'Perfekt und Präteritum',
      titleRu: 'Прошедшее время: Perfekt и Präteritum',
      rule: 'Perfekt — основное прошедшее время в разговорной речи и личных письмах: haben/sein + Partizip II в конце предложения (Ich habe gestern lange gearbeitet).\nС sein образуют Perfekt глаголы движения и изменения состояния (gehen, fahren, kommen, aufstehen, einschlafen), а также sein, bleiben, werden, passieren: Ich bin früh aufgestanden. Остальные — с haben.\nPartizip II: правильные глаголы ge-…-t (gemacht), неправильные ge-…-en (geschrieben). У отделяемых приставок ge- стоит в середине (aufgemacht, angekommen). Без ge- — глаголы с неотделяемыми приставками be-, ver-, er-, ent-, ge-, zer- и на -ieren (besucht, vergessen, studiert).\nPräteritum используется в письменных рассказах и новостях, а в разговорной речи — у sein, haben, es gibt и модальных глаголов: war, hatte, gab, konnte, musste, wollte, durfte, mochte.',
      questions: [
        { q: 'Wir ___ gestern ins Kino gegangen.', options: ['haben', 'sind', 'werden'], answer: 1, explain: 'gehen — глагол движения, Perfekt образуется с sein: wir sind gegangen.' },
        { q: 'Hast du schon die E-Mail an den Vermieter ___?', options: ['geschrieben', 'geschreibt', 'schreiben'], answer: 0, explain: 'schreiben — неправильный глагол: schrieb, hat geschrieben.' },
        { q: 'Als Kind ___ ich überhaupt kein Gemüse.', options: ['möchte', 'gemocht', 'mochte'], answer: 2, explain: 'Präteritum от mögen — mochte. Möchte — это форма вежливого желания в настоящем.' },
        { q: 'Der Zug ist pünktlich in München ___.', options: ['angekommt', 'angekommen', 'ankommen'], answer: 1, explain: 'ankommen — отделяемая приставка, неправильный глагол: ist angekommen.' },
        { q: 'Ich ___ den ganzen Tag im Büro gearbeitet.', options: ['habe', 'bin', 'wurde'], answer: 0, explain: 'arbeiten не обозначает движения или изменения состояния — Perfekt с haben.' },
        { q: 'Gestern ___ wir leider keine Zeit für einen Besuch.', options: ['haben', 'gehabt', 'hatten'], answer: 2, explain: 'Gestern указывает на прошлое; у haben обычно используют Präteritum: wir hatten.' },
        { q: 'Es war sehr warm, deshalb hat sie das Fenster ___.', options: ['aufgemacht', 'aufmachen', 'geaufmacht'], answer: 0, explain: 'У глаголов с отделяемой приставкой ge- стоит между приставкой и корнем: auf-ge-macht.' },
        { q: 'Er ___ heute schon um fünf Uhr aufgestanden.', options: ['hat', 'ist', 'wird'], answer: 1, explain: 'aufstehen — изменение состояния, Perfekt с sein: er ist aufgestanden.' },
        { q: 'Am Wochenende habe ich meine Großmutter ___.', options: ['gebesucht', 'besuchen', 'besucht'], answer: 2, explain: 'Приставка be- неотделяемая, поэтому Partizip II образуется без ge-: besucht.' },
        { q: 'Früher ___ es in unserem Dorf noch keinen Supermarkt.', options: ['gab', 'gibt', 'gegeben'], answer: 0, explain: 'Präteritum от es gibt — es gab («было, имелось»). Früher указывает на прошлое.' }
      ]
    },
    {
      id: 'konjunktiv-2',
      title: 'Konjunktiv II',
      titleRu: 'Konjunktiv II: вежливость, желания, советы',
      rule: 'Konjunktiv II выражает вежливую просьбу, желание, совет и нереальное условие.\nУ большинства глаголов используется würde + Infinitiv: Ich würde gern mitkommen. У sein, haben и модальных глаголов есть собственные формы: wäre, hätte, könnte, müsste, dürfte, sollte, wüsste.\nВежливые просьбы: Könnten Sie mir bitte helfen? Würden Sie bitte das Fenster schließen? Ich hätte gern einen Kaffee. Dürfte ich Sie etwas fragen?\nСоветы: Du solltest mehr schlafen. An deiner Stelle würde ich zum Arzt gehen.\nНереальное условие и желание: Wenn ich mehr Zeit hätte, würde ich öfter Sport machen. Wenn ich doch nur reich wäre!',
      questions: [
        { q: '___ Sie mir bitte helfen? Ich finde den Ausgang nicht.', options: ['Könnten', 'Hätten', 'Wären'], answer: 0, explain: 'Вежливая просьба с инфинитивом (helfen): Könnten Sie …? Hätten и wären с инфинитивом не сочетаются.' },
        { q: 'Ich ___ gern einen Tisch für zwei Personen reservieren.', options: ['wäre', 'würde', 'hätte'], answer: 1, explain: 'würde + Infinitiv (reservieren). «Ich hätte gern» употребляется с существительным: Ich hätte gern einen Tisch.' },
        { q: 'Wenn ich mehr Zeit ___, würde ich öfter Sport machen.', options: ['wäre', 'würde', 'hätte'], answer: 2, explain: 'Zeit haben → Konjunktiv II: hätte. Нереальное условие в настоящем.' },
        { q: 'An deiner Stelle ___ ich sofort zum Arzt gehen.', options: ['würde', 'hätte', 'wäre'], answer: 0, explain: 'Совет: An deiner Stelle würde ich + Infinitiv — «на твоём месте я бы …».' },
        { q: 'Du hustest schon seit Tagen. Du ___ weniger rauchen.', options: ['hättest', 'solltest', 'wärst'], answer: 1, explain: 'Совет выражается формой sollte: Du solltest … — «тебе следовало бы».' },
        { q: 'Wenn ich reich ___, würde ich eine Weltreise machen.', options: ['hätte', 'würde', 'wäre'], answer: 2, explain: 'reich sein → Konjunktiv II: wäre.' },
        { q: 'Ich ___ gern eine Tasse Kaffee und ein Stück Kuchen, bitte.', options: ['hätte', 'wäre', 'würde'], answer: 0, explain: 'Вежливый заказ: Ich hätte gern + Akkusativ. Würde требует инфинитива в конце.' },
        { q: '___ es möglich, den Termin auf Freitag zu verschieben?', options: ['Hätte', 'Wäre', 'Würde'], answer: 1, explain: 'möglich sein → Wäre es möglich …? — вежливый вопрос «возможно ли было бы …?».' },
        { q: 'Wenn ich doch nur besser Deutsch sprechen ___!', options: ['hätte', 'wäre', 'könnte'], answer: 2, explain: 'Нереальное желание с модальным глаголом: sprechen könnte — «если бы я только мог(ла)».' },
        { q: '___ ich Sie kurz etwas fragen?', options: ['Dürfte', 'Wäre', 'Hätte'], answer: 0, explain: 'Dürfte ich …? — очень вежливая форма просьбы о разрешении.' }
      ]
    },
    {
      id: 'passiv',
      title: 'Passiv',
      titleRu: 'Страдательный залог',
      rule: 'Passiv используют, когда важно действие, а не тот, кто его выполняет. Образуется с помощью werden + Partizip II.\nPräsens: Das Auto wird repariert. Präteritum: Das Auto wurde repariert. Perfekt: Das Auto ist repariert worden (worden без ge-!).\nС модальным глаголом: модальный глагол + Partizip II + werden: Die Rechnung muss bezahlt werden. Hier darf nicht geraucht werden.\nДействующее лицо вводится предлогом von + Dativ: Der Patient wird vom Arzt untersucht.\nГлагол werden согласуется с подлежащим пассивного предложения: Der Brief wird geschickt. Die Briefe werden geschickt.',
      questions: [
        { q: 'Mein Auto ist in der Werkstatt. Es ___ gerade repariert.', options: ['hat', 'wird', 'wurden'], answer: 1, explain: 'Passiv Präsens: wird + Partizip II. Подлежащее es — единственное число.' },
        { q: 'Die Briefe ___ gestern abgeschickt.', options: ['wurden', 'wurde', 'werden'], answer: 0, explain: 'gestern — прошедшее время, подлежащее во множественном числе: wurden abgeschickt.' },
        { q: 'In diesem Gebäude darf nicht geraucht ___.', options: ['worden', 'wird', 'werden'], answer: 2, explain: 'Passiv с модальным глаголом: darf + Partizip II + werden (инфинитив).' },
        { q: 'Unser Haus ist im Jahr 1900 gebaut ___.', options: ['worden', 'geworden', 'werden'], answer: 0, explain: 'Passiv Perfekt: ist + Partizip II + worden. Geworden — это Partizip II от werden в значении «стать».' },
        { q: 'Der Patient wurde ___ Arzt gründlich untersucht.', options: ['mit', 'vom', 'durch'], answer: 1, explain: 'Действующее лицо в Passiv вводится предлогом von + Dativ: von dem = vom Arzt.' },
        { q: 'In Deutschland ___ sehr viel Brot gegessen.', options: ['werden', 'ist', 'wird'], answer: 2, explain: 'Подлежащее viel Brot — единственное число: wird gegessen.' },
        { q: 'Die Fenster müssen noch ___ werden.', options: ['geputzt', 'putzen', 'geputzen'], answer: 0, explain: 'В Passiv нужен Partizip II: putzen — правильный глагол, geputzt.' },
        { q: 'Wann ___ die Prüfungsergebnisse bekannt gegeben?', options: ['wird', 'werden', 'worden'], answer: 1, explain: 'Подлежащее die Prüfungsergebnisse — множественное число: werden bekannt gegeben.' },
        { q: 'Der Dieb ___ gestern von der Polizei gefasst worden.', options: ['hat', 'wird', 'ist'], answer: 2, explain: 'Passiv Perfekt образуется со вспомогательным глаголом sein: ist gefasst worden.' },
        { q: 'Ich ___ letzte Woche zu einer Hochzeit eingeladen.', options: ['wurde', 'wurden', 'werde'], answer: 0, explain: 'letzte Woche — прошлое, подлежащее ich: wurde eingeladen.' }
      ]
    },
    {
      id: 'modalverben',
      title: 'Modalverben',
      titleRu: 'Модальные глаголы',
      rule: 'Модальный глагол стоит на втором месте, смысловой глагол — в инфинитиве в конце: Ich muss heute lange arbeiten.\nkönnen — возможность, умение; müssen — необходимость; dürfen — разрешение, nicht dürfen — запрет; sollen — чужое поручение или совет (Der Arzt sagt, ich soll viel trinken); wollen — твёрдое намерение; möchten — вежливое желание; mögen — нравиться (Ich mag keinen Fisch).\nВ единственном числе меняется корневая гласная, а формы ich и er/sie/es совпадают и не имеют окончания: ich kann, du kannst, er kann; ich muss, ich darf, ich will, ich soll, ich mag.\nВ прошедшем времени используют Präteritum без умлаута: konnte, musste, durfte, wollte, sollte, mochte. Формы с умлаутом (könnte, müsste, dürfte) — это Konjunktiv II.',
      questions: [
        { q: 'Hier ___ man nicht parken. Das ist verboten.', options: ['darf', 'muss', 'möchte'], answer: 0, explain: 'Запрет выражается через nicht dürfen. «Muss nicht» означало бы «не обязан».' },
        { q: 'Ich ___ morgen früh aufstehen, weil mein Zug um sechs Uhr fährt.', options: ['darf', 'mag', 'muss'], answer: 2, explain: 'Необходимость — müssen: ich muss.' },
        { q: 'Der Arzt hat gesagt, ich ___ mehr Wasser trinken.', options: ['will', 'soll', 'mag'], answer: 1, explain: 'Совет или поручение другого человека передаётся глаголом sollen.' },
        { q: 'Meine Tochter ___ schon sehr gut schwimmen, sie hat es im Kurs gelernt.', options: ['kann', 'soll', 'darf'], answer: 0, explain: 'Умение, приобретённый навык — können.' },
        { q: 'Als Kind ___ ich nie lange fernsehen, meine Eltern waren sehr streng.', options: ['dürfte', 'durfte', 'darf'], answer: 1, explain: 'Прошедшее время (als Kind): Präteritum durfte — без умлаута. Dürfte — это Konjunktiv II.' },
        { q: 'Ich ___ keinen Fisch. Er schmeckt mir einfach nicht.', options: ['kann', 'soll', 'mag'], answer: 2, explain: 'mögen + Akkusativ — «любить, нравиться»: Ich mag keinen Fisch.' },
        { q: 'Guten Tag, ich ___ gern einen Termin bei Frau Dr. Klein vereinbaren.', options: ['möchte', 'mag', 'darf'], answer: 0, explain: 'Вежливое желание: ich möchte gern + Infinitiv.' },
        { q: 'Kinder, ihr ___ die Hausaufgaben bis morgen machen.', options: ['musst', 'müsst', 'müssen'], answer: 1, explain: 'Форма для ihr: ihr müsst. Musst — это du, müssen — wir/sie/Sie.' },
        { q: 'Er ___ gestern nicht zum Kurs kommen, weil er krank war.', options: ['könnte', 'kann', 'konnte'], answer: 2, explain: 'gestern — прошедшее время: Präteritum konnte (без умлаута).' },
        { q: 'Sie ___ unbedingt Ärztin werden, das ist ihr großer Traum.', options: ['will', 'soll', 'darf'], answer: 0, explain: 'Твёрдое желание, намерение — wollen: sie will.' }
      ]
    },
    {
      id: 'pronomen',
      title: 'Pronomen',
      titleRu: 'Местоимения',
      rule: 'Личные местоимения склоняются: ich – mich – mir, du – dich – dir, er – ihn – ihm, sie – sie – ihr, es – es – ihm, wir – uns – uns, ihr – euch – euch, sie/Sie – sie/Sie – ihnen/Ihnen. Падеж зависит от глагола: Ich sehe ihn (Akk.). Ich helfe ihm (Dat.).\nВозвратные местоимения совпадают с личными, кроме 3-го лица и Sie — там всегда sich: Er freut sich. Если в предложении уже есть прямое дополнение, возвратное местоимение стоит в Dativ: Ich wasche mich. → Ich wasche mir die Hände.\nПритяжательные местоимения зависят от владельца: er/es → sein, sie (она) → ihr, sie (они) → ihr, Sie → Ihr; окончание — как у ein/kein: ihr Mann, ihre Tochter.\nНеопределённые местоимения: man (обобщённое «люди», глагол в 3-м лице ед. числа), jemand – niemand, etwas – nichts, alle, einer/eine/eins (один из): Ich brauche einen Stift. Hast du einen?',
      questions: [
        { q: 'Kannst du ___ bitte das Salz geben?', options: ['mich', 'mir', 'mein'], answer: 1, explain: 'geben + Dativ (кому?): mir.' },
        { q: 'Ich habe ___ gestern im Supermarkt gesehen, aber er hat mich nicht bemerkt.', options: ['ihn', 'ihm', 'er'], answer: 0, explain: 'sehen + Akkusativ: er → ihn.' },
        { q: 'Wir treffen ___ um acht Uhr vor dem Kino.', options: ['euch', 'sich', 'uns'], answer: 2, explain: 'sich treffen — возвратный глагол; для wir возвратное местоимение — uns.' },
        { q: 'Vor dem Essen wasche ich ___ die Hände.', options: ['mir', 'mich', 'sich'], answer: 0, explain: 'Есть прямое дополнение (die Hände), поэтому возвратное местоимение стоит в Dativ: mir.' },
        { q: 'Das ist Frau Becker und das ist ___ Mann.', options: ['sein', 'ihr', 'ihre'], answer: 1, explain: 'Владелец — женщина (sie → ihr); der Mann мужского рода, Nominativ — без окончания: ihr Mann.' },
        { q: 'Hat ___ meinen Schlüssel gesehen? Ich finde ihn nicht.', options: ['niemanden', 'etwas', 'jemand'], answer: 2, explain: 'jemand — «кто-нибудь», подлежащее в Nominativ.' },
        { q: 'Ich brauche einen Stift. Hast du ___?', options: ['einen', 'eins', 'ein'], answer: 0, explain: 'Местоимение заменяет einen Stift (мужской род, Akkusativ): einen.' },
        { q: 'In Deutschland isst ___ viel Brot.', options: ['Mann', 'man', 'alle'], answer: 1, explain: 'man — неопределённо-личное местоимение («люди вообще»), глагол в 3-м лице ед. числа. Пишется с маленькой буквы и одной n.' },
        { q: 'Gefällt ___ die neue Wohnung, Herr Weber?', options: ['Sie', 'Ihr', 'Ihnen'], answer: 2, explain: 'gefallen + Dativ; вежливая форма в Dativ — Ihnen.' },
        { q: 'Er hat ___ sehr über das Geschenk gefreut.', options: ['sich', 'ihn', 'ihm'], answer: 0, explain: 'sich freuen — возвратный глагол; в 3-м лице возвратное местоимение — sich.' }
      ]
    },
    {
      id: 'komparativ-superlativ',
      title: 'Komparativ und Superlativ',
      titleRu: 'Степени сравнения',
      rule: 'Komparativ образуется с помощью -er, сравнение — со словом als: Mein Bruder ist älter als ich. Равенство выражается через (genau)so … wie: Er ist so groß wie ich.\nSuperlativ: am …-sten после глагола (Sie läuft am schnellsten) или der/die/das …-ste перед существительным (der schnellste Läufer).\nКороткие прилагательные с a, o, u часто получают умлаут: alt – älter – am ältesten, groß – größer – am größten, jung – jünger, warm – wärmer, kurz – kürzer.\nОсобые формы: gut – besser – am besten, viel – mehr – am meisten, gern – lieber – am liebsten, hoch – höher – am höchsten, nah – näher – am nächsten, teuer – teurer, dunkel – dunkler.\nПеред существительным Komparativ и Superlativ склоняются как обычные прилагательные: eine größere Wohnung, der höchste Berg. Конструкция je … desto: Je mehr ich lerne, desto besser verstehe ich.',
      questions: [
        { q: 'Mein Bruder ist drei Jahre ___ als ich.', options: ['alt', 'älter', 'am ältesten'], answer: 1, explain: 'Сравнение с als требует Komparativ: alt → älter (с умлаутом).' },
        { q: 'Die Zugspitze ist der ___ Berg Deutschlands.', options: ['höchste', 'höher', 'hoch'], answer: 0, explain: 'Superlativ перед существительным: hoch → der höchste Berg.' },
        { q: 'Ich trinke ___ Tee als Kaffee.', options: ['gerner', 'am liebsten', 'lieber'], answer: 2, explain: 'Komparativ от gern — lieber (форма «gerner» не существует).' },
        { q: 'Sie ist genauso groß ___ ihre Mutter.', options: ['wie', 'als', 'so'], answer: 0, explain: 'При равенстве: (genau)so + прилагательное + wie. Als употребляется только после Komparativ.' },
        { q: 'Von allen Schülern in der Klasse lernt Anna ___.', options: ['fleißiger', 'am fleißigsten', 'die fleißigste'], answer: 1, explain: 'Superlativ после глагола (как?): am fleißigsten.' },
        { q: 'Heute ist es viel ___ als gestern.', options: ['warmer', 'am wärmsten', 'wärmer'], answer: 2, explain: 'Komparativ от warm — wärmer (с умлаутом).' },
        { q: 'Er spricht ___ Deutsch als sein Bruder.', options: ['besser', 'guter', 'am besten'], answer: 0, explain: 'Komparativ от gut — besser.' },
        { q: 'Was isst du am ___: Fisch, Fleisch oder Gemüse?', options: ['lieber', 'liebsten', 'gern'], answer: 1, explain: 'Superlativ от gern: am liebsten — «больше всего».' },
        { q: 'Wir brauchen eine ___ Wohnung, denn wir bekommen ein Kind.', options: ['größer', 'am größten', 'größere'], answer: 2, explain: 'Komparativ перед существительным склоняется: eine größere Wohnung (Akkusativ, женский род).' },
        { q: 'Je mehr ich lerne, ___ besser verstehe ich die Grammatik.', options: ['desto', 'als', 'so'], answer: 0, explain: 'Конструкция je + Komparativ …, desto + Komparativ … — «чем …, тем …».' }
      ]
    },
    {
      id: 'infinitiv-wortstellung',
      title: 'Infinitiv mit zu und Wortstellung im Nebensatz',
      titleRu: 'Инфинитив с zu и порядок слов в придаточном',
      rule: 'Инфинитив с zu употребляется после многих глаголов и выражений: versuchen, vergessen, anfangen, aufhören, versprechen, hoffen, vorhaben, Lust/Zeit/Angst haben, es ist wichtig/schön/schwer, es macht Spaß. Ich habe vergessen, das Fenster zu schließen.\nУ глаголов с отделяемой приставкой zu стоит между приставкой и корнем: anzurufen, einzukaufen, kennenzulernen.\nБез zu: после модальных глаголов, а также после lassen, sehen, hören, gehen, bleiben и werden: Ich muss arbeiten. Lass uns gehen!\nКонструкции um … zu (чтобы), ohne … zu (не делая), (an)statt … zu (вместо того чтобы): Er ging, ohne etwas zu sagen.\nВ придаточном предложении (dass, weil, wenn, ob, вопросительное слово) спрягаемый глагол стоит в самом конце: …, weil ich morgen arbeiten muss; …, dass sie lange gearbeitet hat; Können Sie mir sagen, wo der Bahnhof ist?',
      questions: [
        { q: 'Entschuldige, ich habe vergessen, dich ___.', options: ['anrufen', 'anzurufen', 'zu anrufen'], answer: 1, explain: 'После vergessen — инфинитив с zu; у отделяемых глаголов zu стоит внутри слова: anzurufen.' },
        { q: 'Wir müssen heute noch für das Wochenende ___.', options: ['einkaufen', 'einzukaufen', 'zu einkaufen'], answer: 0, explain: 'После модальных глаголов инфинитив употребляется без zu.' },
        { q: 'Es macht mir Spaß, neue Leute ___.', options: ['kennenlernen', 'zu kennenlernen', 'kennenzulernen'], answer: 2, explain: 'После «es macht Spaß» — инфинитив с zu; глагол отделяемый: kennenzulernen.' },
        { q: 'Ich habe keine Lust, heute Abend ___.', options: ['zu kochen', 'kochen', 'gekocht'], answer: 0, explain: 'После «(keine) Lust haben» — инфинитив с zu.' },
        { q: 'Ich weiß, dass er morgen nicht ___.', options: ['kann kommen', 'kommen kann', 'kommen können'], answer: 1, explain: 'В придаточном спрягаемый глагол (kann) стоит в самом конце, после инфинитива.' },
        { q: 'Sie sagt, dass sie gestern sehr lange ___.', options: ['hat gearbeitet', 'arbeiten hat', 'gearbeitet hat'], answer: 2, explain: 'В придаточном в Perfekt вспомогательный глагол стоит после Partizip II: gearbeitet hat.' },
        { q: 'Lass uns morgen zusammen ins Kino ___!', options: ['gehen', 'zu gehen', 'gegangen'], answer: 0, explain: 'После lassen инфинитив употребляется без zu.' },
        { q: 'Er hat versprochen, morgen pünktlich ___.', options: ['sein', 'zu sein', 'ist'], answer: 1, explain: 'После versprechen — инфинитив с zu: pünktlich zu sein.' },
        { q: 'Können Sie mir bitte sagen, wo ___?', options: ['ist der Bahnhof', 'der Bahnhof sein', 'der Bahnhof ist'], answer: 2, explain: 'Косвенный вопрос — это придаточное: глагол ist стоит в конце.' },
        { q: 'Er verließ die Party, ohne sich ___.', options: ['zu verabschieden', 'verabschieden', 'verabschiedet'], answer: 0, explain: 'Конструкция ohne … zu + Infinitiv — «не сделав чего-то».' }
      ]
    },
    {
      id: 'zweiteilige-konnektoren',
      title: 'Zweiteilige Konnektoren und Präpositionaladverbien',
      titleRu: 'Двойные союзы и местоименные наречия',
      rule: 'Двойные союзы состоят из двух частей: entweder … oder (или … или), sowohl … als auch (как …, так и), nicht nur … sondern auch (не только …, но и), weder … noch (ни … ни; второе отрицание не нужно), zwar … aber (правда …, но), je … desto (чем … тем).\nМестоименные наречия заменяют «предлог + местоимение», когда речь идёт о предметах и ситуациях: da(r) + предлог — darauf, daran, dafür, damit, darüber; в вопросе wo(r) + предлог — worauf, woran, wofür, womit, worüber. Буква r вставляется перед гласной.\nWorauf wartest du? – Auf den Bus. Ich warte auch darauf.\nЕсли речь идёт о человеке, используют предлог + местоимение: Auf wen wartest du? – Auf meinen Bruder. Ich warte auch auf ihn.\ndarauf, daran и т. п. могут также указывать на следующее придаточное: Ich freue mich darauf, dich zu sehen.',
      questions: [
        { q: 'Ich spreche ___ Englisch als auch Spanisch.', options: ['sowohl', 'entweder', 'weder'], answer: 0, explain: 'sowohl … als auch — «как …, так и».' },
        { q: 'Im Sommer fahren wir entweder ans Meer ___ in die Berge.', options: ['noch', 'aber', 'oder'], answer: 2, explain: 'entweder … oder — «или … или».' },
        { q: 'Er hat heute weder Zeit ___ Lust, ins Kino zu gehen.', options: ['oder', 'noch', 'als'], answer: 1, explain: 'weder … noch — «ни … ни».' },
        { q: 'Sie ist nicht nur intelligent, ___ auch sehr fleißig.', options: ['sondern', 'aber', 'als'], answer: 0, explain: 'nicht nur … sondern auch — «не только …, но и».' },
        { q: 'Die Wohnung ist zwar klein, ___ sehr gemütlich.', options: ['sondern', 'oder', 'aber'], answer: 2, explain: 'zwar … aber — «правда …, но».' },
        { q: '___ wartest du? – Auf den Bus.', options: ['Wofür', 'Worauf', 'Auf wen'], answer: 1, explain: 'warten auf; вопрос о предмете — wo(r) + auf = worauf. Auf wen спрашивает о человеке.' },
        { q: 'Morgen beginnt mein Urlaub. Ich freue mich schon sehr ___.', options: ['darauf', 'dafür', 'daran'], answer: 0, explain: 'sich freuen auf → darauf (о предстоящем событии).' },
        { q: '___ denkst du gerade? – An meine Freundin.', options: ['Woran', 'Wen', 'An wen'], answer: 2, explain: 'denken an; в ответе назван человек, поэтому вопрос — предлог + wen: An wen?' },
        { q: 'Interessierst du dich für Politik? – Nein, ___ interessiere ich mich überhaupt nicht.', options: ['darauf', 'dafür', 'damit'], answer: 1, explain: 'sich interessieren für → dafür.' },
        { q: '___ ärgerst du dich so? – Über den Lärm im Haus.', options: ['Worüber', 'Wovon', 'Über wen'], answer: 0, explain: 'sich ärgern über; вопрос о предмете — worüber.' }
      ]
    }
  ],
  vocab: [
    {
      id: 'wohnen', title: 'Wohnen', titleRu: 'Жильё',
      words: [
        { de: 'die Miete, -n', ru: 'арендная плата', ex: 'Die Miete für unsere Wohnung ist in diesem Jahr wieder gestiegen.' },
        { de: 'der Vermieter, - / die Vermieterin, -nen', ru: 'арендодатель, хозяин квартиры', ex: 'Unser Vermieter wohnt im selben Haus und ist sehr freundlich.' },
        { de: 'der Mieter, - / die Mieterin, -nen', ru: 'квартиросъёмщик, жилец', ex: 'Die Mieter müssen das Treppenhaus selbst sauber halten.' },
        { de: 'die Nebenkosten (Pl.)', ru: 'коммунальные расходы (сверх аренды)', ex: 'Die Wohnung kostet 600 Euro plus 150 Euro Nebenkosten.' },
        { de: 'die Kaution, -en', ru: 'залог, депозит', ex: 'Beim Einzug mussten wir drei Monatsmieten Kaution bezahlen.' },
        { de: 'der Mietvertrag, ¨-e', ru: 'договор аренды', ex: 'Lies den Mietvertrag genau durch, bevor du ihn unterschreibst.' },
        { de: 'die Heizung, -en', ru: 'отопление', ex: 'Die Heizung funktioniert seit gestern nicht mehr, und es ist kalt in der Wohnung.' },
        { de: 'das Stockwerk, -e', ru: 'этаж', ex: 'Das Haus hat fünf Stockwerke, aber leider keinen Aufzug.' },
        { de: 'das Erdgeschoss, -e', ru: 'первый (нижний) этаж', ex: 'Die Wohnung liegt im Erdgeschoss und hat einen kleinen Garten.' },
        { de: 'der Aufzug, ¨-e', ru: 'лифт', ex: 'Der Aufzug ist schon wieder kaputt, wir müssen die Treppe nehmen.' },
        { de: 'umziehen (zog um, ist umgezogen)', ru: 'переезжать', ex: 'Wir sind letzten Monat von Köln nach Leipzig umgezogen.' },
        { de: 'einziehen (zog ein, ist eingezogen)', ru: 'въезжать, вселяться', ex: 'Die neuen Nachbarn sind am Wochenende eingezogen.' },
        { de: 'ausziehen (zog aus, ist ausgezogen)', ru: 'съезжать, выезжать', ex: 'Mit 19 Jahren ist meine Tochter von zu Hause ausgezogen.' },
        { de: 'vermieten', ru: 'сдавать в аренду', ex: 'Frau Kraus vermietet ein Zimmer an Studenten.' },
        { de: 'kündigen', ru: 'расторгать договор; увольнять(ся)', ex: 'Wenn Sie ausziehen möchten, müssen Sie drei Monate vorher kündigen.' },
        { de: 'renovieren', ru: 'ремонтировать, делать ремонт', ex: 'Bevor wir einziehen, möchten wir die Küche und das Bad renovieren.' },
        { de: 'die Besichtigung, -en', ru: 'осмотр, просмотр (квартиры)', ex: 'Die Besichtigung der Wohnung ist am Samstag um zehn Uhr.' },
        { de: 'der Hausmeister, - / die Hausmeisterin, -nen', ru: 'управляющий домом, завхоз', ex: 'Ruf bitte den Hausmeister an, das Licht im Keller ist kaputt.' },
        { de: 'die Lage, -n', ru: 'расположение, местоположение', ex: 'Die Wohnung hat eine ruhige Lage in der Nähe vom Park.' },
        { de: 'möbliert', ru: 'меблированный', ex: 'Ich suche ein möbliertes Zimmer für sechs Monate.' },
        { de: 'der Keller, -', ru: 'подвал', ex: 'Unsere Fahrräder stehen im Keller.' },
        { de: 'die Einrichtung, -en', ru: 'обстановка, интерьер', ex: 'Die Einrichtung des Wohnzimmers ist modern und sehr gemütlich.' },
        { de: 'der Strom (nur Sg.)', ru: 'электричество', ex: 'Strom und Gas sind in den letzten Jahren viel teurer geworden.' },
        { de: 'die Wohngemeinschaft, -en (die WG, -s)', ru: 'совместное проживание в одной квартире', ex: 'Als Studentin habe ich in einer Wohngemeinschaft mit drei Freunden gelebt.' },
        { de: 'gemütlich', ru: 'уютный', ex: 'Mit den neuen Vorhängen sieht das Zimmer viel gemütlicher aus.' }
      ]
    },
    {
      id: 'arbeit', title: 'Arbeit und Beruf', titleRu: 'Работа и профессия',
      words: [
        { de: 'die Bewerbung, -en', ru: 'заявление о приёме на работу, отклик', ex: 'Ich habe schon zwanzig Bewerbungen geschrieben, aber noch keine Antwort bekommen.' },
        { de: 'sich bewerben (bewarb sich, hat sich beworben) um + Akk.', ru: 'подавать заявление на (место)', ex: 'Er hat sich um eine Stelle als Elektriker beworben.' },
        { de: 'der Lebenslauf, ¨-e', ru: 'резюме, автобиография', ex: 'Bitte schicken Sie uns Ihren Lebenslauf und Ihre Zeugnisse.' },
        { de: 'das Vorstellungsgespräch, -e', ru: 'собеседование', ex: 'Morgen habe ich ein Vorstellungsgespräch bei einer großen Firma.' },
        { de: 'die Stelle, -n', ru: 'место работы, должность', ex: 'In unserer Abteilung ist eine Stelle frei geworden.' },
        { de: 'die Stellenanzeige, -n', ru: 'объявление о вакансии', ex: 'Ich habe Ihre Stellenanzeige im Internet gelesen.' },
        { de: 'der Arbeitgeber, - / die Arbeitgeberin, -nen', ru: 'работодатель', ex: 'Mein Arbeitgeber bezahlt mir die Fahrkarte für den Bus.' },
        { de: 'der Arbeitnehmer, - / die Arbeitnehmerin, -nen', ru: 'наёмный работник', ex: 'Jeder Arbeitnehmer hat das Recht auf Urlaub.' },
        { de: 'das Gehalt, ¨-er', ru: 'зарплата, оклад', ex: 'Nach der Probezeit bekommt sie ein höheres Gehalt.' },
        { de: 'verdienen', ru: 'зарабатывать', ex: 'In seinem neuen Job verdient er besser als früher.' },
        { de: 'die Überstunde, -n', ru: 'сверхурочный час', ex: 'Diese Woche musste ich viele Überstunden machen.' },
        { de: 'die Teilzeit (nur Sg.)', ru: 'неполный рабочий день', ex: 'Seit der Geburt ihres Sohnes arbeitet sie in Teilzeit.' },
        { de: 'die Schicht, -en', ru: 'смена', ex: 'Im Krankenhaus arbeitet man in Schichten, auch nachts.' },
        { de: 'der Betrieb, -e', ru: 'предприятие', ex: 'In unserem Betrieb arbeiten ungefähr zweihundert Menschen.' },
        { de: 'die Abteilung, -en', ru: 'отдел', ex: 'Herr Lang leitet die Abteilung für Kundenservice.' },
        { de: 'die Erfahrung, -en', ru: 'опыт', ex: 'Für diese Stelle braucht man mindestens zwei Jahre Erfahrung.' },
        { de: 'entlassen (entließ, hat entlassen)', ru: 'увольнять', ex: 'Die Firma hatte Probleme und musste zehn Mitarbeiter entlassen.' },
        { de: 'einstellen', ru: 'принимать на работу', ex: 'Das Restaurant stellt im Sommer zwei neue Kellner ein.' },
        { de: 'arbeitslos', ru: 'безработный', ex: 'Nach dem Umzug war mein Mann ein halbes Jahr arbeitslos.' },
        { de: 'die Besprechung, -en', ru: 'совещание, обсуждение', ex: 'Frau Meier ist gerade in einer Besprechung, kann sie Sie zurückrufen?' },
        { de: 'der Feierabend, -e', ru: 'конец рабочего дня', ex: 'Nach Feierabend gehe ich oft noch ins Fitnessstudio.' },
        { de: 'selbstständig', ru: 'самостоятельный; работающий на себя', ex: 'Mein Bruder ist selbstständig und hat ein kleines Geschäft.' },
        { de: 'die Kündigung, -en', ru: 'увольнение; расторжение договора', ex: 'Gestern hat er seine Kündigung beim Chef abgegeben.' },
        { de: 'die Probezeit, -en', ru: 'испытательный срок', ex: 'Die Probezeit dauert normalerweise sechs Monate.' },
        { de: 'die Verantwortung (nur Sg.)', ru: 'ответственность', ex: 'Als Teamleiterin hat sie viel Verantwortung.' }
      ]
    },
    {
      id: 'gesundheit', title: 'Gesundheit und Körper', titleRu: 'Здоровье и тело',
      words: [
        { de: 'die Krankenkasse, -n', ru: 'больничная касса (медицинская страховая)', ex: 'Die Krankenkasse bezahlt die Kosten für die Behandlung.' },
        { de: 'die Versichertenkarte, -n', ru: 'карточка медицинского страхования', ex: 'Bitte bringen Sie zum Termin Ihre Versichertenkarte mit.' },
        { de: 'das Rezept, -e', ru: 'рецепт', ex: 'Dieses Medikament bekommen Sie nur mit einem Rezept vom Arzt.' },
        { de: 'die Sprechstunde, -n', ru: 'приёмные часы', ex: 'Die Sprechstunde ist montags bis freitags von acht bis zwölf Uhr.' },
        { de: 'die Praxis, Praxen', ru: 'врачебный кабинет, практика', ex: 'Die Praxis von Dr. Sommer ist im August geschlossen.' },
        { de: 'die Untersuchung, -en', ru: 'обследование, осмотр', ex: 'Nach der Untersuchung hat mir die Ärztin alles genau erklärt.' },
        { de: 'untersuchen', ru: 'обследовать, осматривать', ex: 'Der Arzt hat mich gründlich untersucht, aber nichts gefunden.' },
        { de: 'verschreiben (verschrieb, hat verschrieben)', ru: 'прописывать (лекарство)', ex: 'Die Ärztin hat mir Tabletten gegen die Schmerzen verschrieben.' },
        { de: 'das Medikament, -e', ru: 'лекарство', ex: 'Nehmen Sie das Medikament dreimal täglich nach dem Essen.' },
        { de: 'die Salbe, -n', ru: 'мазь', ex: 'Diese Salbe hilft gut gegen trockene Haut.' },
        { de: 'der Schmerz, -en', ru: 'боль', ex: 'Seit dem Wochenende habe ich starke Schmerzen im Rücken.' },
        { de: 'das Fieber (nur Sg.)', ru: 'температура, жар', ex: 'Das Kind hat hohes Fieber und muss im Bett bleiben.' },
        { de: 'der Husten (nur Sg.)', ru: 'кашель', ex: 'Gegen den Husten trinke ich heißen Tee mit Honig.' },
        { de: 'die Erkältung, -en', ru: 'простуда', ex: 'Ich habe eine starke Erkältung und kann heute nicht zur Arbeit kommen.' },
        { de: 'sich erkälten', ru: 'простудиться', ex: 'Zieh eine Jacke an, sonst erkältest du dich!' },
        { de: 'die Grippe (nur Sg.)', ru: 'грипп', ex: 'Im Winter haben viele Menschen Grippe.' },
        { de: 'die Verletzung, -en', ru: 'травма, ранение', ex: 'Wegen seiner Verletzung am Knie darf er vier Wochen keinen Sport machen.' },
        { de: 'sich verletzen', ru: 'пораниться, получить травму', ex: 'Sie hat sich beim Kochen an der Hand verletzt.' },
        { de: 'krankschreiben (schrieb krank, hat krankgeschrieben)', ru: 'выписать больничный', ex: 'Der Arzt hat mich für eine Woche krankgeschrieben.' },
        { de: 'der Notfall, ¨-e', ru: 'экстренный случай', ex: 'Im Notfall rufen Sie bitte sofort die Nummer 112 an.' },
        { de: 'der Krankenwagen, -', ru: 'машина скорой помощи', ex: 'Nach dem Unfall kam der Krankenwagen schon nach fünf Minuten.' },
        { de: 'die Impfung, -en', ru: 'прививка', ex: 'Für die Reise nach Afrika brauchst du einige Impfungen.' },
        { de: 'die Allergie, -n', ru: 'аллергия', ex: 'Mein Sohn hat eine Allergie gegen Nüsse.' },
        { de: 'die Operation, -en', ru: 'операция', ex: 'Nach der Operation musste sie noch fünf Tage im Krankenhaus bleiben.' },
        { de: 'sich erholen', ru: 'отдыхать, восстанавливаться', ex: 'Im Urlaub an der Ostsee habe ich mich sehr gut erholt.' }
      ]
    },
    {
      id: 'reisen', title: 'Reisen und Verkehr', titleRu: 'Путешествия и транспорт',
      words: [
        { de: 'die Fahrkarte, -n', ru: 'проездной билет', ex: 'Die Fahrkarte können Sie am Automaten oder im Internet kaufen.' },
        { de: 'der Fahrplan, ¨-e', ru: 'расписание (транспорта)', ex: 'Ab Dezember gilt ein neuer Fahrplan für alle Busse.' },
        { de: 'der Bahnsteig, -e', ru: 'перрон, платформа', ex: 'Auf dem Bahnsteig warteten schon viele Leute auf den Zug.' },
        { de: 'das Gleis, -e', ru: 'путь (на вокзале)', ex: 'Der Zug nach Hamburg fährt heute von Gleis 7 ab.' },
        { de: 'die Verspätung, -en', ru: 'опоздание, задержка', ex: 'Der ICE aus Berlin hat ungefähr zwanzig Minuten Verspätung.' },
        { de: 'umsteigen (stieg um, ist umgestiegen)', ru: 'пересаживаться', ex: 'Sie müssen in Frankfurt umsteigen.' },
        { de: 'einsteigen (stieg ein, ist eingestiegen)', ru: 'садиться (в транспорт)', ex: 'Bitte steigen Sie schnell ein, der Zug fährt gleich ab.' },
        { de: 'aussteigen (stieg aus, ist ausgestiegen)', ru: 'выходить (из транспорта)', ex: 'An der nächsten Haltestelle müssen wir aussteigen.' },
        { de: 'die Abfahrt, -en', ru: 'отправление, отъезд', ex: 'Die Abfahrt ist um 9:15 Uhr, bitte seien Sie pünktlich.' },
        { de: 'die Ankunft, ¨-e', ru: 'прибытие', ex: 'Nach unserer Ankunft im Hotel sind wir sofort zum Strand gegangen.' },
        { de: 'der Anschluss, ¨-e', ru: 'пересадка, стыковка', ex: 'Wegen der Verspätung habe ich meinen Anschluss nach Wien nicht mehr bekommen.' },
        { de: 'verpassen', ru: 'опоздать на, пропустить', ex: 'Ich habe den Bus verpasst und musste zwanzig Minuten warten.' },
        { de: 'die Unterkunft, ¨-e', ru: 'жильё (в поездке), место проживания', ex: 'Wir suchen eine günstige Unterkunft in der Nähe vom Bahnhof.' },
        { de: 'die Übernachtung, -en', ru: 'ночёвка', ex: 'Eine Übernachtung mit Frühstück kostet 75 Euro.' },
        { de: 'buchen', ru: 'бронировать', ex: 'Wir haben den Flug schon im Januar gebucht.' },
        { de: 'das Gepäck (nur Sg.)', ru: 'багаж', ex: 'Sie dürfen 23 Kilo Gepäck mitnehmen.' },
        { de: 'der Stau, -s', ru: 'пробка, затор', ex: 'Auf der Autobahn A8 gibt es zehn Kilometer Stau.' },
        { de: 'die Haltestelle, -n', ru: 'остановка', ex: 'Die Haltestelle ist direkt vor unserem Haus.' },
        { de: 'die Kreuzung, -en', ru: 'перекрёсток', ex: 'An der nächsten Kreuzung müssen Sie links abbiegen.' },
        { de: 'der Führerschein, -e', ru: 'водительские права', ex: 'Mit 18 Jahren hat sie den Führerschein gemacht.' },
        { de: 'die Umleitung, -en', ru: 'объезд', ex: 'Wegen der Baustelle gibt es eine Umleitung über die Schillerstraße.' },
        { de: 'der Flug, ¨-e', ru: 'рейс, перелёт', ex: 'Der Flug von München nach Lissabon dauert etwa drei Stunden.' },
        { de: 'abholen', ru: 'забирать, встречать', ex: 'Kannst du mich morgen um fünf Uhr vom Flughafen abholen?' },
        { de: 'die Sehenswürdigkeit, -en', ru: 'достопримечательность', ex: 'In Dresden gibt es viele interessante Sehenswürdigkeiten.' },
        { de: 'der Reisepass, ¨-e', ru: 'загранпаспорт', ex: 'Für die Reise in die USA brauchst du einen gültigen Reisepass.' }
      ]
    },
    {
      id: 'einkaufen', title: 'Einkaufen und Dienstleistungen', titleRu: 'Покупки и услуги',
      words: [
        { de: 'das Sonderangebot, -e', ru: 'специальное предложение, акция', ex: 'Diese Woche sind Äpfel im Sonderangebot.' },
        { de: 'der Rabatt, -e', ru: 'скидка', ex: 'Studenten bekommen bei uns zehn Prozent Rabatt.' },
        { de: 'die Quittung, -en', ru: 'квитанция, чек', ex: 'Ohne Quittung können Sie die Ware leider nicht umtauschen.' },
        { de: 'umtauschen', ru: 'обменивать (товар)', ex: 'Die Hose ist zu klein, ich möchte sie gern umtauschen.' },
        { de: 'zurückgeben (gab zurück, hat zurückgegeben)', ru: 'возвращать', ex: 'Sie können das Gerät innerhalb von 14 Tagen zurückgeben.' },
        { de: 'die Garantie, -n', ru: 'гарантия', ex: 'Auf den Fernseher haben Sie zwei Jahre Garantie.' },
        { de: 'die Reklamation, -en', ru: 'рекламация, претензия', ex: 'Für Reklamationen wenden Sie sich bitte an unseren Kundenservice.' },
        { de: 'die Größe, -n', ru: 'размер', ex: 'Haben Sie diese Jacke auch in Größe 40?' },
        { de: 'anprobieren', ru: 'примерять', ex: 'Kann ich das Kleid kurz anprobieren?' },
        { de: 'passen', ru: 'подходить (по размеру, по времени)', ex: 'Die Schuhe passen mir leider nicht, sie sind zu eng.' },
        { de: 'die Umkleidekabine, -n', ru: 'примерочная', ex: 'Die Umkleidekabinen sind hinten rechts neben der Kasse.' },
        { de: 'bar', ru: 'наличными', ex: 'Möchten Sie bar oder mit Karte bezahlen?' },
        { de: 'die Lieferung, -en', ru: 'доставка, поставка', ex: 'Die Lieferung des Sofas dauert ungefähr drei Wochen.' },
        { de: 'bestellen', ru: 'заказывать', ex: 'Ich habe die Schuhe im Internet bestellt, aber sie sind noch nicht angekommen.' },
        { de: 'der Kunde, -n / die Kundin, -nen', ru: 'клиент, покупатель', ex: 'Die Verkäuferin hat gerade keine Zeit, sie berät einen Kunden.' },
        { de: 'günstig', ru: 'недорогой, выгодный', ex: 'Auf dem Markt ist Gemüse oft günstiger als im Supermarkt.' },
        { de: 'die Rechnung, -en', ru: 'счёт', ex: 'Bitte überweisen Sie die Rechnung innerhalb von zehn Tagen.' },
        { de: 'die Reparatur, -en', ru: 'ремонт, починка', ex: 'Die Reparatur der Waschmaschine war teurer als gedacht.' },
        { de: 'die Reinigung, -en', ru: 'химчистка; уборка', ex: 'Ich muss meinen Mantel noch in die Reinigung bringen.' },
        { de: 'der Handwerker, - / die Handwerkerin, -nen', ru: 'мастер, ремесленник', ex: 'Morgen früh kommt der Handwerker und repariert die Dusche.' },
        { de: 'kostenlos', ru: 'бесплатный', ex: 'Ab einem Einkauf von 50 Euro ist der Versand kostenlos.' },
        { de: 'die Ware, -n', ru: 'товар', ex: 'Die bestellte Ware war beschädigt, deshalb habe ich sie zurückgeschickt.' },
        { de: 'die Qualität, -en', ru: 'качество', ex: 'Ich gebe lieber etwas mehr Geld aus und kaufe gute Qualität.' },
        { de: 'ausverkauft', ru: 'распроданный', ex: 'Das Modell in Blau ist leider schon ausverkauft.' },
        { de: 'die Öffnungszeiten (Pl.)', ru: 'часы работы', ex: 'Die Öffnungszeiten stehen an der Tür und auf unserer Internetseite.' }
      ]
    },
    {
      id: 'essen', title: 'Essen und Trinken', titleRu: 'Еда и напитки',
      words: [
        { de: 'das Gericht, -e', ru: 'блюдо', ex: 'Mein Lieblingsgericht ist Kartoffelsuppe mit Würstchen.' },
        { de: 'die Speisekarte, -n', ru: 'меню', ex: 'Entschuldigung, könnten wir bitte die Speisekarte haben?' },
        { de: 'die Vorspeise, -n', ru: 'закуска', ex: 'Als Vorspeise nehme ich einen kleinen Salat.' },
        { de: 'das Hauptgericht, -e', ru: 'основное блюдо', ex: 'Als Hauptgericht empfehle ich Ihnen heute den Fisch.' },
        { de: 'der Nachtisch, -e', ru: 'десерт', ex: 'Zum Nachtisch gibt es Eis mit heißen Kirschen.' },
        { de: 'die Beilage, -n', ru: 'гарнир', ex: 'Welche Beilage möchten Sie: Reis, Nudeln oder Kartoffeln?' },
        { de: 'die Zutat, -en', ru: 'ингредиент', ex: 'Für diesen Kuchen brauchst du nur fünf Zutaten.' },
        { de: 'die Bedienung, -en', ru: 'обслуживание; официант(ка)', ex: 'Das Essen war lecker, aber die Bedienung war ziemlich langsam.' },
        { de: 'das Trinkgeld, -er', ru: 'чаевые', ex: 'In Deutschland gibt man im Restaurant meistens fünf bis zehn Prozent Trinkgeld.' },
        { de: 'reservieren', ru: 'резервировать, бронировать', ex: 'Ich möchte für Samstagabend einen Tisch für vier Personen reservieren.' },
        { de: 'vegetarisch', ru: 'вегетарианский', ex: 'Gibt es bei Ihnen auch vegetarische Gerichte?' },
        { de: 'scharf', ru: 'острый', ex: 'Das Curry ist mir zu scharf, ich brauche ein Glas Wasser.' },
        { de: 'roh', ru: 'сырой', ex: 'Karotten kann man gekocht oder roh essen.' },
        { de: 'braten (briet, hat gebraten)', ru: 'жарить', ex: 'Zuerst brät man die Zwiebeln in etwas Öl.' },
        { de: 'backen (backte, hat gebacken)', ru: 'печь', ex: 'Zum Geburtstag meiner Mutter habe ich einen Apfelkuchen gebacken.' },
        { de: 'schneiden (schnitt, hat geschnitten)', ru: 'резать', ex: 'Schneiden Sie das Gemüse in kleine Stücke.' },
        { de: 'probieren', ru: 'пробовать', ex: 'Möchtest du die Suppe probieren? Vielleicht fehlt noch Salz.' },
        { de: 'schmecken', ru: 'быть вкусным, нравиться на вкус', ex: 'Der Kuchen schmeckt wirklich ausgezeichnet!' },
        { de: 'das Lebensmittel, -', ru: 'продукт питания', ex: 'Frische Lebensmittel kaufe ich am liebsten auf dem Markt.' },
        { de: 'die Mahlzeit, -en', ru: 'приём пищи, трапеза', ex: 'Das Frühstück ist für mich die wichtigste Mahlzeit des Tages.' },
        { de: 'die Portion, -en', ru: 'порция', ex: 'Die Portionen in diesem Restaurant sind riesig.' },
        { de: 'das Gewürz, -e', ru: 'специя, приправа', ex: 'In der indischen Küche verwendet man sehr viele Gewürze.' },
        { de: 'satt', ru: 'сытый', ex: 'Nein danke, ich möchte nichts mehr, ich bin schon satt.' },
        { de: 'die Ernährung (nur Sg.)', ru: 'питание', ex: 'Eine gesunde Ernährung ist wichtig für Kinder und Erwachsene.' },
        { de: 'die Pfanne, -n', ru: 'сковорода', ex: 'Gib etwas Butter in die Pfanne und brate die Eier darin.' }
      ]
    },
    {
      id: 'freizeit', title: 'Freizeit und Kultur', titleRu: 'Досуг и культура',
      words: [
        { de: 'die Veranstaltung, -en', ru: 'мероприятие', ex: 'Im Sommer gibt es in unserer Stadt viele Veranstaltungen im Freien.' },
        { de: 'die Ausstellung, -en', ru: 'выставка', ex: 'Im Stadtmuseum läuft gerade eine Ausstellung über moderne Fotografie.' },
        { de: 'die Eintrittskarte, -n', ru: 'входной билет', ex: 'Die Eintrittskarten für das Konzert waren schnell ausverkauft.' },
        { de: 'der Eintritt (nur Sg.)', ru: 'вход, плата за вход', ex: 'Für Kinder unter sechs Jahren ist der Eintritt frei.' },
        { de: 'die Aufführung, -en', ru: 'спектакль, представление', ex: 'Die Aufführung der Theatergruppe hat dem Publikum sehr gut gefallen.' },
        { de: 'die Bühne, -n', ru: 'сцена', ex: 'Am Ende kamen alle Schauspieler noch einmal auf die Bühne.' },
        { de: 'der Zuschauer, - / die Zuschauerin, -nen', ru: 'зритель', ex: 'Mehr als 50 000 Zuschauer haben das Spiel im Stadion gesehen.' },
        { de: 'der Verein, -e', ru: 'клуб, общество, объединение', ex: 'Mein Sohn spielt seit zwei Jahren Fußball im Verein.' },
        { de: 'das Mitglied, -er', ru: 'член (клуба, организации)', ex: 'Unser Sportverein hat mehr als dreihundert Mitglieder.' },
        { de: 'der Ausflug, ¨-e', ru: 'экскурсия, вылазка, поездка', ex: 'Am Sonntag machen wir einen Ausflug an den Bodensee.' },
        { de: 'die Wanderung, -en', ru: 'поход, пешая прогулка', ex: 'Die Wanderung durch den Wald hat ungefähr vier Stunden gedauert.' },
        { de: 'sich entspannen', ru: 'расслабляться', ex: 'Nach der Arbeit entspanne ich mich am besten bei Musik.' },
        { de: 'sich verabreden', ru: 'договариваться о встрече', ex: 'Ich habe mich für heute Abend mit einer Kollegin verabredet.' },
        { de: 'unternehmen (unternahm, hat unternommen)', ru: 'предпринимать, заниматься чем-то (в свободное время)', ex: 'Was möchtest du am Wochenende unternehmen?' },
        { de: 'teilnehmen (nahm teil, hat teilgenommen) an + Dat.', ru: 'принимать участие в', ex: 'An dem Kochkurs haben zwölf Personen teilgenommen.' },
        { de: 'die Mannschaft, -en', ru: 'команда', ex: 'Unsere Mannschaft hat das Spiel mit 3:1 gewonnen.' },
        { de: 'trainieren', ru: 'тренироваться', ex: 'Sie trainiert dreimal pro Woche im Schwimmverein.' },
        { de: 'das Instrument, -e', ru: 'инструмент', ex: 'Spielst du ein Instrument? – Ja, ich spiele Gitarre.' },
        { de: 'die Vorstellung, -en', ru: 'сеанс, представление', ex: 'Die Vorstellung im Kino beginnt um 20 Uhr.' },
        { de: 'die Führung, -en', ru: 'экскурсия с гидом', ex: 'Die Führung durch das Schloss dauert etwa eine Stunde.' },
        { de: 'das Fest, -e', ru: 'праздник', ex: 'Jedes Jahr im Juni feiern wir in unserer Straße ein großes Fest.' },
        { de: 'spannend', ru: 'захватывающий, увлекательный', ex: 'Der Krimi war so spannend, dass ich nicht aufhören konnte zu lesen.' },
        { de: 'sammeln', ru: 'собирать, коллекционировать', ex: 'Mein Großvater sammelt alte Briefmarken und Münzen.' },
        { de: 'der Wettkampf, ¨-e', ru: 'соревнование', ex: 'Nächsten Samstag hat meine Tochter einen wichtigen Wettkampf.' },
        { de: 'der Spaziergang, ¨-e', ru: 'прогулка', ex: 'Nach dem Mittagessen machen wir gern einen Spaziergang im Park.' }
      ]
    },
    {
      id: 'schule', title: 'Schule und Ausbildung', titleRu: 'Школа и образование',
      words: [
        { de: 'die Ausbildung, -en', ru: 'профессиональное обучение', ex: 'Nach der Schule möchte er eine Ausbildung als Koch machen.' },
        { de: 'der/die Auszubildende, -n (der/die Azubi, -s)', ru: 'ученик на производстве, стажёр', ex: 'Unsere Firma sucht ab September zwei neue Auszubildende.' },
        { de: 'das Praktikum, Praktika', ru: 'практика, стажировка', ex: 'In den Ferien macht sie ein Praktikum in einem Krankenhaus.' },
        { de: 'das Zeugnis, -se', ru: 'аттестат, табель, свидетельство', ex: 'Am letzten Schultag bekommen die Kinder ihre Zeugnisse.' },
        { de: 'die Note, -n', ru: 'оценка', ex: 'In Mathematik hat er dieses Jahr eine bessere Note bekommen.' },
        { de: 'bestehen (bestand, hat bestanden)', ru: 'сдать (экзамен)', ex: 'Sie hat die Prüfung beim ersten Mal bestanden.' },
        { de: 'durchfallen (fiel durch, ist durchgefallen)', ru: 'провалиться (на экзамене)', ex: 'Er ist leider in der Führerscheinprüfung durchgefallen.' },
        { de: 'der Abschluss, ¨-e', ru: 'окончание (учёбы), диплом', ex: 'Ohne Abschluss ist es schwer, eine gute Stelle zu finden.' },
        { de: 'das Abitur (nur Sg.)', ru: 'аттестат зрелости (экзамены после гимназии)', ex: 'Nächstes Jahr macht meine Tochter das Abitur.' },
        { de: 'die Grundschule, -n', ru: 'начальная школа', ex: 'In Deutschland gehen die Kinder meistens vier Jahre in die Grundschule.' },
        { de: 'das Gymnasium, Gymnasien', ru: 'гимназия', ex: 'Nach der Grundschule ist unser Sohn auf das Gymnasium gewechselt.' },
        { de: 'die Berufsschule, -n', ru: 'профессиональное училище', ex: 'Während der Ausbildung geht man ein oder zwei Tage pro Woche in die Berufsschule.' },
        { de: 'das Fach, ¨-er', ru: 'учебный предмет', ex: 'Mein Lieblingsfach in der Schule war Geschichte.' },
        { de: 'der Unterricht (nur Sg.)', ru: 'занятия, урок', ex: 'Der Unterricht beginnt um acht Uhr und endet um halb zwei.' },
        { de: 'die Weiterbildung, -en', ru: 'повышение квалификации', ex: 'Meine Firma bezahlt mir eine Weiterbildung im Bereich Computer.' },
        { de: 'sich anmelden', ru: 'записываться, регистрироваться', ex: 'Ich möchte mich für den Deutschkurs am Abend anmelden.' },
        { de: 'das Studium, Studien', ru: 'учёба в вузе', ex: 'Nach dem Studium hat sie sofort eine Stelle gefunden.' },
        { de: 'das Stipendium, Stipendien', ru: 'стипендия', ex: 'Er hat ein Stipendium für ein Jahr an einer Universität in Kanada bekommen.' },
        { de: 'die Kenntnisse (Pl.)', ru: 'знания', ex: 'Für diese Arbeit braucht man gute Kenntnisse in Englisch.' },
        { de: 'die Fremdsprache, -n', ru: 'иностранный язык', ex: 'Wie viele Fremdsprachen sprechen Sie?' },
        { de: 'wiederholen', ru: 'повторять', ex: 'Vor der Prüfung wiederhole ich noch einmal die ganze Grammatik.' },
        { de: 'die Klassenarbeit, -en', ru: 'контрольная работа', ex: 'Morgen schreiben wir eine Klassenarbeit in Englisch.' },
        { de: 'der Stundenplan, ¨-e', ru: 'расписание уроков', ex: 'Laut Stundenplan haben wir montags zwei Stunden Sport.' },
        { de: 'die Nachhilfe (nur Sg.)', ru: 'репетиторство, дополнительные занятия', ex: 'Weil er Probleme in Mathe hat, bekommt er einmal pro Woche Nachhilfe.' },
        { de: 'sich vorbereiten auf + Akk.', ru: 'готовиться к', ex: 'Ich bereite mich seit drei Monaten auf die B1-Prüfung vor.' }
      ]
    },
    {
      id: 'familie', title: 'Familie und Beziehungen', titleRu: 'Семья и отношения',
      words: [
        { de: 'die Beziehung, -en', ru: 'отношения', ex: 'Ich habe eine sehr gute Beziehung zu meinen Geschwistern.' },
        { de: 'die Ehe, -n', ru: 'брак, супружество', ex: 'Meine Großeltern führen seit fünfzig Jahren eine glückliche Ehe.' },
        { de: 'das Ehepaar, -e', ru: 'супружеская пара', ex: 'In der Wohnung über uns wohnt ein älteres Ehepaar.' },
        { de: 'heiraten', ru: 'жениться, выходить замуж', ex: 'Meine Schwester heiratet im Mai ihren langjährigen Freund.' },
        { de: 'die Hochzeit, -en', ru: 'свадьба', ex: 'Zur Hochzeit haben sie mehr als hundert Gäste eingeladen.' },
        { de: 'sich scheiden lassen (ließ sich scheiden, hat sich scheiden lassen)', ru: 'разводиться', ex: 'Nach zehn Jahren Ehe haben sich meine Eltern scheiden lassen.' },
        { de: 'ledig', ru: 'холостой, незамужняя', ex: 'Im Formular müssen Sie ankreuzen, ob Sie ledig oder verheiratet sind.' },
        { de: 'alleinerziehend', ru: 'воспитывающий ребёнка в одиночку', ex: 'Als alleinerziehende Mutter hat sie nur wenig Zeit für sich selbst.' },
        { de: 'der/die Verwandte, -n', ru: 'родственник, родственница', ex: 'An Weihnachten besuchen wir unsere Verwandten in Polen.' },
        { de: 'die Schwiegereltern (Pl.)', ru: 'родители мужа или жены', ex: 'Am Wochenende sind wir bei meinen Schwiegereltern zum Essen eingeladen.' },
        { de: 'der Neffe, -n', ru: 'племянник', ex: 'Mein Neffe ist der Sohn meiner älteren Schwester.' },
        { de: 'die Nichte, -n', ru: 'племянница', ex: 'Zum Geburtstag habe ich meiner Nichte ein Buch geschenkt.' },
        { de: 'der Enkel, - / die Enkelin, -nen', ru: 'внук, внучка', ex: 'Meine Eltern passen oft auf ihre Enkel auf.' },
        { de: 'erziehen (erzog, hat erzogen)', ru: 'воспитывать', ex: 'Es ist nicht leicht, drei Kinder allein zu erziehen.' },
        { de: 'sich streiten (stritt sich, hat sich gestritten)', ru: 'ссориться', ex: 'Die Kinder streiten sich oft um das Spielzeug.' },
        { de: 'sich trennen', ru: 'расставаться', ex: 'Nach fünf Jahren hat sie sich von ihrem Freund getrennt.' },
        { de: 'sich verlieben in + Akk.', ru: 'влюбиться в', ex: 'Im Urlaub hat er sich in eine Italienerin verliebt.' },
        { de: 'schwanger', ru: 'беременная', ex: 'Meine Kollegin ist schwanger und bekommt im Herbst ihr Baby.' },
        { de: 'die Geburt, -en', ru: 'рождение, роды', ex: 'Nach der Geburt des Kindes ist die Familie in ein größeres Haus gezogen.' },
        { de: 'aufwachsen (wuchs auf, ist aufgewachsen)', ru: 'вырасти (где-то)', ex: 'Ich bin in einem kleinen Dorf in der Nähe von Kiew aufgewachsen.' },
        { de: 'sich kümmern um + Akk.', ru: 'заботиться о', ex: 'Seit dem Tod meines Vaters kümmere ich mich um meine Mutter.' },
        { de: 'vertrauen + Dat.', ru: 'доверять', ex: 'Meiner besten Freundin kann ich immer vertrauen.' },
        { de: 'die Generation, -en', ru: 'поколение', ex: 'In diesem Haus leben drei Generationen unter einem Dach.' },
        { de: 'die Kindheit (nur Sg.)', ru: 'детство', ex: 'In meiner Kindheit habe ich jeden Sommer bei meiner Oma verbracht.' },
        { de: 'sich verstehen (verstand sich, hat sich verstanden)', ru: 'ладить друг с другом', ex: 'Mit meinem Schwager verstehe ich mich sehr gut.' }
      ]
    },
    {
      id: 'aemter', title: 'Ämter, Post und Bank', titleRu: 'Ведомства, почта и банк',
      words: [
        { de: 'die Behörde, -n', ru: 'ведомство, государственное учреждение', ex: 'Bei den Behörden muss man oft lange auf einen Termin warten.' },
        { de: 'der Antrag, ¨-e', ru: 'заявление, ходатайство', ex: 'Den Antrag auf Kindergeld können Sie auch online stellen.' },
        { de: 'beantragen', ru: 'подавать заявление на что-либо', ex: 'Ich muss nächste Woche einen neuen Pass beantragen.' },
        { de: 'das Formular, -e', ru: 'бланк, формуляр', ex: 'Das Formular bekommen Sie am Schalter oder im Internet.' },
        { de: 'ausfüllen', ru: 'заполнять', ex: 'Bitte füllen Sie das Formular in Druckbuchstaben aus.' },
        { de: 'die Unterschrift, -en', ru: 'подпись', ex: 'Hier unten fehlt noch Ihre Unterschrift.' },
        { de: 'unterschreiben (unterschrieb, hat unterschrieben)', ru: 'подписывать', ex: 'Bitte unterschreiben Sie den Vertrag auf der letzten Seite.' },
        { de: 'der Ausweis, -e', ru: 'удостоверение личности', ex: 'Können Sie mir bitte Ihren Ausweis zeigen?' },
        { de: 'die Aufenthaltserlaubnis, -se', ru: 'вид на жительство', ex: 'Meine Aufenthaltserlaubnis ist noch bis Ende des Jahres gültig.' },
        { de: 'die Anmeldung, -en', ru: 'регистрация (по месту жительства); запись', ex: 'Nach dem Umzug haben Sie zwei Wochen Zeit für die Anmeldung beim Bürgeramt.' },
        { de: 'die Bescheinigung, -en', ru: 'справка, подтверждение', ex: 'Für das Amt brauche ich eine Bescheinigung von meinem Arbeitgeber.' },
        { de: 'die Gebühr, -en', ru: 'сбор, пошлина', ex: 'Für den neuen Ausweis müssen Sie eine Gebühr von 37 Euro bezahlen.' },
        { de: 'die Frist, -en', ru: 'срок', ex: 'Die Frist für den Antrag endet am 31. März.' },
        { de: 'verlängern', ru: 'продлевать', ex: 'Ich muss mein Visum rechtzeitig verlängern.' },
        { de: 'gültig', ru: 'действительный', ex: 'Ihr Pass ist nur noch drei Monate gültig.' },
        { de: 'die Unterlagen (Pl.)', ru: 'документы', ex: 'Bringen Sie bitte alle Unterlagen zum Termin mit.' },
        { de: 'zuständig', ru: 'ответственный, компетентный', ex: 'Für diese Frage ist leider eine andere Abteilung zuständig.' },
        { de: 'das Konto, Konten', ru: 'банковский счёт', ex: 'Ich möchte bei Ihrer Bank ein Konto eröffnen.' },
        { de: 'überweisen (überwies, hat überwiesen)', ru: 'переводить (деньги)', ex: 'Bitte überweisen Sie die Miete bis zum dritten Tag des Monats.' },
        { de: 'abheben (hob ab, hat abgehoben)', ru: 'снимать (деньги со счёта)', ex: 'Ich muss noch schnell Geld abheben, bevor wir einkaufen gehen.' },
        { de: 'der Geldautomat, -en', ru: 'банкомат', ex: 'Der nächste Geldautomat ist gleich um die Ecke.' },
        { de: 'das Bargeld (nur Sg.)', ru: 'наличные деньги', ex: 'In diesem Café kann man nur mit Bargeld bezahlen.' },
        { de: 'das Einschreiben, -', ru: 'заказное письмо', ex: 'Wichtige Dokumente schicke ich immer per Einschreiben.' },
        { de: 'der Absender, - / die Absenderin, -nen', ru: 'отправитель', ex: 'Der Brief kam zurück, weil der Absender die falsche Adresse geschrieben hatte.' },
        { de: 'der Empfänger, - / die Empfängerin, -nen', ru: 'получатель', ex: 'Der Empfänger war nicht zu Hause, deshalb liegt das Paket jetzt bei der Post.' }
      ]
    },
    {
      id: 'medien', title: 'Medien und Kommunikation', titleRu: 'СМИ и коммуникация',
      words: [
        { de: 'die Nachricht, -en', ru: 'сообщение; (мн. ч.) новости', ex: 'Hast du meine Nachricht auf dem Handy nicht gelesen?' },
        { de: 'die Sendung, -en', ru: 'передача (по ТВ, радио)', ex: 'Diese Sendung über Tiere läuft jeden Sonntag im Fernsehen.' },
        { de: 'der Sender, -', ru: 'телеканал, радиостанция', ex: 'Auf welchem Sender kommt heute Abend das Fußballspiel?' },
        { de: 'die Zeitschrift, -en', ru: 'журнал', ex: 'Im Wartezimmer liegen immer viele Zeitschriften.' },
        { de: 'der Artikel, -', ru: 'статья', ex: 'Ich habe einen interessanten Artikel über gesunde Ernährung gelesen.' },
        { de: 'die Werbung, -en', ru: 'реклама', ex: 'Im Fernsehen gibt es mir zu viel Werbung.' },
        { de: 'die Anzeige, -n', ru: 'объявление', ex: 'Wir haben unsere Wohnung über eine Anzeige in der Zeitung gefunden.' },
        { de: 'herunterladen (lud herunter, hat heruntergeladen)', ru: 'скачивать', ex: 'Die App kann man kostenlos herunterladen.' },
        { de: 'speichern', ru: 'сохранять', ex: 'Vergiss nicht, den Text zu speichern, bevor du den Computer ausschaltest.' },
        { de: 'löschen', ru: 'удалять', ex: 'Ich habe die E-Mail leider aus Versehen gelöscht.' },
        { de: 'der Bildschirm, -e', ru: 'экран, монитор', ex: 'Ich sitze bei der Arbeit acht Stunden am Tag vor dem Bildschirm.' },
        { de: 'die Tastatur, -en', ru: 'клавиатура', ex: 'Auf der deutschen Tastatur gibt es die Buchstaben ä, ö und ü.' },
        { de: 'das Passwort, ¨-er', ru: 'пароль', ex: 'Ich habe mein Passwort vergessen und kann mich nicht einloggen.' },
        { de: 'der Anrufbeantworter, -', ru: 'автоответчик', ex: 'Sie war nicht zu Hause, deshalb habe ich auf den Anrufbeantworter gesprochen.' },
        { de: 'zurückrufen (rief zurück, hat zurückgerufen)', ru: 'перезванивать', ex: 'Herr Braun ist gerade nicht da, er ruft Sie später zurück.' },
        { de: 'die Verbindung, -en', ru: 'соединение, связь', ex: 'Die Verbindung ist sehr schlecht, ich kann dich kaum verstehen.' },
        { de: 'erreichen', ru: 'дозвониться, застать; достичь', ex: 'Sie können mich am besten vormittags unter dieser Nummer erreichen.' },
        { de: 'die Datei, -en', ru: 'файл', ex: 'Die Datei ist zu groß, ich kann sie nicht per E-Mail schicken.' },
        { de: 'der Anhang, ¨-e', ru: 'вложение, приложение (к письму)', ex: 'Im Anhang finden Sie meinen Lebenslauf und meine Zeugnisse.' },
        { de: 'weiterleiten', ru: 'пересылать', ex: 'Kannst du mir die E-Mail von Frau Sommer bitte weiterleiten?' },
        { de: 'die Umfrage, -n', ru: 'опрос', ex: 'Nach einer Umfrage lesen junge Leute Nachrichten fast nur noch im Internet.' },
        { de: 'berichten über + Akk.', ru: 'сообщать, рассказывать о', ex: 'Alle Zeitungen haben über das Unwetter im Süden berichtet.' },
        { de: 'das Netzwerk, -e', ru: 'сеть', ex: 'Viele Jugendliche verbringen täglich mehrere Stunden in sozialen Netzwerken.' },
        { de: 'das Ladegerät, -e', ru: 'зарядное устройство', ex: 'Mein Akku ist fast leer, hast du vielleicht ein Ladegerät dabei?' },
        { de: 'ausschalten', ru: 'выключать', ex: 'Bitte schalten Sie während der Prüfung Ihre Handys aus.' }
      ]
    },
    {
      id: 'umwelt', title: 'Umwelt und Wetter', titleRu: 'Окружающая среда и погода',
      words: [
        { de: 'die Umwelt (nur Sg.)', ru: 'окружающая среда', ex: 'Plastik ist ein großes Problem für die Umwelt.' },
        { de: 'der Umweltschutz (nur Sg.)', ru: 'охрана окружающей среды', ex: 'Viele junge Menschen interessieren sich für den Umweltschutz.' },
        { de: 'schützen', ru: 'защищать, охранять', ex: 'Wir müssen die Natur besser schützen.' },
        { de: 'die Umweltverschmutzung (nur Sg.)', ru: 'загрязнение окружающей среды', ex: 'Die Umweltverschmutzung in den großen Städten nimmt immer mehr zu.' },
        { de: 'der Müll (nur Sg.)', ru: 'мусор', ex: 'Der Müll wird bei uns jeden Dienstag abgeholt.' },
        { de: 'trennen', ru: 'разделять, сортировать', ex: 'In Deutschland trennt man Papier, Glas, Plastik und Biomüll.' },
        { de: 'der Abfall, ¨-e', ru: 'отходы', ex: 'Bitte werfen Sie Ihre Abfälle nicht auf die Straße.' },
        { de: 'die Energie, -n', ru: 'энергия', ex: 'Moderne Geräte brauchen viel weniger Energie als alte.' },
        { de: 'sparen', ru: 'экономить', ex: 'Wer kürzer duscht, spart Wasser und Geld.' },
        { de: 'verbrauchen', ru: 'расходовать, потреблять', ex: 'Unser altes Auto verbraucht zu viel Benzin.' },
        { de: 'der Klimawandel (nur Sg.)', ru: 'изменение климата', ex: 'Wegen des Klimawandels werden die Sommer immer heißer.' },
        { de: 'die Abgase (Pl.)', ru: 'выхлопные газы', ex: 'Die Abgase der Autos machen die Luft in der Innenstadt schlecht.' },
        { de: 'die Temperatur, -en', ru: 'температура', ex: 'Am Wochenende steigen die Temperaturen auf über 30 Grad.' },
        { de: 'der Grad, -e', ru: 'градус', ex: 'Heute Morgen waren es nur zwei Grad über null.' },
        { de: 'die Wettervorhersage, -n', ru: 'прогноз погоды', ex: 'Laut Wettervorhersage soll es morgen den ganzen Tag regnen.' },
        { de: 'das Gewitter, -', ru: 'гроза', ex: 'Am Abend gab es ein starkes Gewitter mit Blitz und Donner.' },
        { de: 'der Sturm, ¨-e', ru: 'буря, шторм', ex: 'Der Sturm hat in der Nacht mehrere Bäume umgeworfen.' },
        { de: 'der Nebel (nur Sg.)', ru: 'туман', ex: 'Wegen des dichten Nebels konnten viele Flugzeuge nicht starten.' },
        { de: 'der Schauer, -', ru: 'кратковременный дождь', ex: 'Am Nachmittag gibt es im Norden einzelne Schauer.' },
        { de: 'die Hitze (nur Sg.)', ru: 'жара', ex: 'Bei dieser Hitze sollte man viel Wasser trinken.' },
        { de: 'bewölkt', ru: 'облачный, пасмурный', ex: 'Morgen bleibt es bewölkt, aber es regnet nicht.' },
        { de: 'feucht', ru: 'влажный, сырой', ex: 'Im Herbst ist das Wetter hier oft kühl und feucht.' },
        { de: 'frieren (fror, hat gefroren)', ru: 'мёрзнуть; замерзать', ex: 'Mach bitte das Fenster zu, ich friere!' },
        { de: 'das Hochwasser, -', ru: 'паводок, наводнение', ex: 'Nach dem starken Regen gab es in vielen Dörfern Hochwasser.' },
        { de: 'die Pflanze, -n', ru: 'растение', ex: 'Auf unserem Balkon wachsen viele Pflanzen und Kräuter.' }
      ]
    }
  ],
  phrases: [
    {
      id: 'brief', title: 'Schreiben: Brief und E-Mail', titleRu: 'Письмо',
      groups: [
        { title: 'Anrede', items: [
          { de: 'Sehr geehrte Frau Müller,', ru: 'Уважаемая госпожа Мюллер, (официально)' },
          { de: 'Sehr geehrter Herr Schmidt,', ru: 'Уважаемый господин Шмидт, (официально)' },
          { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа, (официально, если имя неизвестно)' },
          { de: 'Liebe Frau Weber,', ru: 'Дорогая госпожа Вебер, (полуофициально, знакомому человеку на «Вы»)' },
          { de: 'Lieber Thomas,', ru: 'Дорогой Томас, (неофициально, мужчине)' },
          { de: 'Liebe Anna,', ru: 'Дорогая Анна, (неофициально, женщине)' },
          { de: 'Hallo Maria,', ru: 'Привет, Мария! (дружеское письмо)' }
        ] },
        { title: 'Einleitung', items: [
          { de: 'vielen Dank für deine E-Mail.', ru: 'большое спасибо за твоё письмо.' },
          { de: 'ich habe mich sehr über deinen Brief gefreut.', ru: 'я очень обрадовался(-лась) твоему письму.' },
          { de: 'wie geht es dir? Mir geht es gut.', ru: 'как у тебя дела? У меня всё хорошо.' },
          { de: 'entschuldige, dass ich erst jetzt antworte.', ru: 'извини, что отвечаю только сейчас.' },
          { de: 'ich schreibe Ihnen, weil ich eine Frage zu Ihrem Angebot habe.', ru: 'я пишу Вам, потому что у меня есть вопрос по Вашему предложению.' },
          { de: 'ich habe Ihre Anzeige im Internet gelesen und interessiere mich für die Wohnung.', ru: 'я прочитал(а) Ваше объявление в интернете и интересуюсь квартирой.' },
          { de: 'vielen Dank für Ihr Schreiben vom 12. Mai.', ru: 'большое спасибо за Ваше письмо от 12 мая.' },
          { de: 'ich wende mich an Sie, weil ich ein Problem mit meiner Bestellung habe.', ru: 'я обращаюсь к Вам, потому что у меня проблема с заказом.' }
        ] },
        { title: 'Sich bedanken', items: [
          { de: 'Vielen Dank für die Einladung!', ru: 'Большое спасибо за приглашение!' },
          { de: 'Herzlichen Dank für deine Hilfe beim Umzug.', ru: 'Сердечное спасибо за твою помощь при переезде.' },
          { de: 'Ich möchte mich herzlich für das schöne Geschenk bedanken.', ru: 'Я хочу сердечно поблагодарить за прекрасный подарок.' },
          { de: 'Das war wirklich sehr nett von dir.', ru: 'Это было действительно очень мило с твоей стороны.' },
          { de: 'Ich danke Ihnen für Ihre schnelle Antwort.', ru: 'Благодарю Вас за быстрый ответ.' },
          { de: 'Vielen Dank im Voraus für Ihre Mühe.', ru: 'Заранее большое спасибо за Ваши старания.' },
          { de: 'Ohne dich hätte ich das nicht geschafft.', ru: 'Без тебя я бы с этим не справился(-лась).' }
        ] },
        { title: 'Sich entschuldigen', items: [
          { de: 'Es tut mir sehr leid, dass ich nicht kommen kann.', ru: 'Мне очень жаль, что я не смогу прийти.' },
          { de: 'Leider muss ich unseren Termin absagen.', ru: 'К сожалению, мне придётся отменить нашу встречу.' },
          { de: 'Entschuldigen Sie bitte die Verspätung.', ru: 'Извините, пожалуйста, за опоздание.' },
          { de: 'Ich möchte mich dafür entschuldigen, dass ich mich so lange nicht gemeldet habe.', ru: 'Я хочу извиниться за то, что так долго не давал(а) о себе знать.' },
          { de: 'Leider war ich krank und konnte deshalb nicht am Kurs teilnehmen.', ru: 'К сожалению, я болел(а) и поэтому не смог(ла) быть на занятии.' },
          { de: 'Ich hoffe, du bist mir nicht böse.', ru: 'Надеюсь, ты на меня не сердишься.' },
          { de: 'Ich bitte um Ihr Verständnis.', ru: 'Прошу Вас отнестись с пониманием.' }
        ] },
        { title: 'Um etwas bitten / nachfragen', items: [
          { de: 'Könnten Sie mir bitte weitere Informationen schicken?', ru: 'Не могли бы Вы прислать мне дополнительную информацию?' },
          { de: 'Ich hätte noch eine Frage: Wie hoch sind die Nebenkosten?', ru: 'У меня есть ещё один вопрос: сколько составляют коммунальные расходы?' },
          { de: 'Könnten Sie mir bitte mitteilen, wann der Kurs beginnt?', ru: 'Не могли бы Вы сообщить мне, когда начинается курс?' },
          { de: 'Ich würde gern wissen, ob das Zimmer noch frei ist.', ru: 'Я хотел(а) бы узнать, свободна ли ещё комната.' },
          { de: 'Wäre es möglich, den Termin auf nächste Woche zu verschieben?', ru: 'Возможно ли перенести встречу на следующую неделю?' },
          { de: 'Kannst du mir bitte einen Gefallen tun?', ru: 'Можешь оказать мне услугу?' },
          { de: 'Könntest du mir vielleicht dein Auto leihen?', ru: 'Не мог(ла) бы ты одолжить мне свою машину?' },
          { de: 'Bitte geben Sie mir Bescheid, ob das möglich ist.', ru: 'Пожалуйста, дайте мне знать, возможно ли это.' }
        ] },
        { title: 'Vorschläge machen und einladen', items: [
          { de: 'Ich möchte dich herzlich zu meiner Geburtstagsfeier einladen.', ru: 'Я хочу сердечно пригласить тебя на мой день рождения.' },
          { de: 'Hast du Lust, am Samstag vorbeizukommen?', ru: 'Хочешь зайти в субботу?' },
          { de: 'Wie wäre es, wenn wir uns nächste Woche treffen?', ru: 'Как насчёт того, чтобы встретиться на следующей неделе?' },
          { de: 'Ich schlage vor, dass wir uns am Freitag um 18 Uhr treffen.', ru: 'Я предлагаю встретиться в пятницу в 18 часов.' },
          { de: 'Wir könnten zusammen essen gehen.', ru: 'Мы могли бы вместе сходить поесть.' },
          { de: 'Passt es dir am Sonntagnachmittag?', ru: 'Тебе удобно в воскресенье после обеда?' },
          { de: 'Sag mir bitte bis Mittwoch Bescheid, ob du kommen kannst.', ru: 'Сообщи мне, пожалуйста, до среды, сможешь ли ты прийти.' },
          { de: 'Du kannst gern bei mir übernachten.', ru: 'Ты можешь спокойно переночевать у меня.' }
        ] },
        { title: 'Schluss', items: [
          { de: 'Ich freue mich auf deine Antwort.', ru: 'С радостью жду твоего ответа.' },
          { de: 'Ich freue mich schon darauf, dich bald wiederzusehen.', ru: 'Я уже радуюсь тому, что скоро снова тебя увижу.' },
          { de: 'Schreib mir bald!', ru: 'Напиши мне поскорее!' },
          { de: 'Melde dich doch mal wieder!', ru: 'Дай о себе знать!' },
          { de: 'Grüß bitte deine Familie von mir.', ru: 'Передай, пожалуйста, привет своей семье.' },
          { de: 'Über eine baldige Antwort würde ich mich sehr freuen.', ru: 'Я был(а) бы очень рад(а) скорому ответу.' },
          { de: 'Für Rückfragen stehe ich Ihnen gern zur Verfügung.', ru: 'Если возникнут вопросы, я охотно на них отвечу.' },
          { de: 'Vielen Dank im Voraus für Ihre Antwort.', ru: 'Заранее благодарю за Ваш ответ.' }
        ] },
        { title: 'Grußformel', items: [
          { de: 'Mit freundlichen Grüßen', ru: 'С уважением (официально, без запятой в конце)' },
          { de: 'Freundliche Grüße', ru: 'С уважением (официально, чуть менее формально)' },
          { de: 'Viele Grüße', ru: 'С наилучшими пожеланиями (нейтрально)' },
          { de: 'Liebe Grüße', ru: 'С тёплым приветом (неофициально)' },
          { de: 'Herzliche Grüße', ru: 'Сердечный привет (неофициально)' },
          { de: 'Bis bald!', ru: 'До скорого! (друзьям)' },
          { de: 'Dein Alex / Deine Olga', ru: 'Твой Алекс / Твоя Ольга (подпись в личном письме)' }
        ] }
      ]
    },
    {
      id: 'sprechen1', title: 'Sprechen Teil 1: Kontaktaufnahme', titleRu: 'Устная часть 1: знакомство',
      groups: [
        { title: 'Sich vorstellen', items: [
          { de: 'Ich heiße Olena Kovalenko und komme aus der Ukraine.', ru: 'Меня зовут Олена Коваленко, я из Украины.' },
          { de: 'Ich bin 34 Jahre alt und lebe seit zwei Jahren in Deutschland.', ru: 'Мне 34 года, я живу в Германии два года.' },
          { de: 'Ich wohne mit meiner Familie in einer Dreizimmerwohnung in Köln.', ru: 'Я живу с семьёй в трёхкомнатной квартире в Кёльне.' },
          { de: 'Ich bin verheiratet und habe zwei Kinder.', ru: 'Я женат (замужем), у меня двое детей.' },
          { de: 'Von Beruf bin ich Buchhalterin, aber im Moment besuche ich einen Deutschkurs.', ru: 'По профессии я бухгалтер, но сейчас хожу на курсы немецкого.' },
          { de: 'In meiner Heimat habe ich als Ingenieur gearbeitet.', ru: 'На родине я работал инженером.' },
          { de: 'Ich lerne Deutsch, weil ich hier eine Ausbildung machen möchte.', ru: 'Я учу немецкий, потому что хочу получить здесь профессию.' },
          { de: 'In meiner Freizeit koche ich gern und treffe mich mit Freunden.', ru: 'В свободное время я люблю готовить и встречаться с друзьями.' },
          { de: 'Außer Deutsch spreche ich Russisch, Ukrainisch und ein bisschen Englisch.', ru: 'Кроме немецкого, я говорю по-русски, по-украински и немного по-английски.' }
        ] },
        { title: 'Fragen stellen', items: [
          { de: 'Und wie heißen Sie? Woher kommen Sie?', ru: 'А как Вас зовут? Откуда Вы?' },
          { de: 'Wie lange leben Sie schon in Deutschland?', ru: 'Как давно Вы живёте в Германии?' },
          { de: 'Wo und wie wohnen Sie?', ru: 'Где и как Вы живёте?' },
          { de: 'Haben Sie Familie? Haben Sie Kinder?', ru: 'У Вас есть семья? У Вас есть дети?' },
          { de: 'Was sind Sie von Beruf?', ru: 'Кто Вы по профессии?' },
          { de: 'Was machen Sie gern in Ihrer Freizeit?', ru: 'Чем Вы любите заниматься в свободное время?' },
          { de: 'Welche Sprachen sprechen Sie?', ru: 'На каких языках Вы говорите?' },
          { de: 'Warum lernen Sie Deutsch?', ru: 'Почему Вы учите немецкий?' },
          { de: 'Waren Sie schon einmal in einem anderen Land?', ru: 'Вы уже бывали в другой стране?' }
        ] },
        { title: 'Nachfragen, wenn man nicht versteht', items: [
          { de: 'Entschuldigung, ich habe Sie nicht verstanden.', ru: 'Извините, я Вас не понял(а).' },
          { de: 'Könnten Sie das bitte wiederholen?', ru: 'Не могли бы Вы это повторить?' },
          { de: 'Könnten Sie bitte etwas langsamer sprechen?', ru: 'Не могли бы Вы говорить немного медленнее?' },
          { de: 'Wie bitte? Was haben Sie gesagt?', ru: 'Простите? Что Вы сказали?' },
          { de: 'Was bedeutet das Wort „Schichtarbeit“?', ru: 'Что означает слово «Schichtarbeit»?' },
          { de: 'Meinen Sie, dass …?', ru: 'Вы имеете в виду, что …?' },
          { de: 'Habe ich Sie richtig verstanden? Sie arbeiten also in einem Krankenhaus?', ru: 'Я правильно Вас понял(а)? Вы, значит, работаете в больнице?' },
          { de: 'Können Sie mir das bitte noch einmal erklären?', ru: 'Можете, пожалуйста, объяснить мне это ещё раз?' }
        ] }
      ]
    },
    {
      id: 'sprechen2', title: 'Sprechen Teil 2: Über ein Thema sprechen', titleRu: 'Устная часть 2: разговор на тему',
      groups: [
        { title: 'Den Text vorstellen', items: [
          { de: 'In meinem Text geht es um das Thema „Fernsehen und Kinder“.', ru: 'В моём тексте речь идёт о теме «Телевидение и дети».' },
          { de: 'Auf dem Foto sieht man eine junge Frau. Sie heißt Karin Lange und ist 28 Jahre alt.', ru: 'На фото изображена молодая женщина. Её зовут Карин Ланге, ей 28 лет.' },
          { de: 'Sie sagt, dass sie fast nie fernsieht.', ru: 'Она говорит, что почти никогда не смотрит телевизор.' },
          { de: 'Er findet, dass Kinder zu viel Zeit vor dem Bildschirm verbringen.', ru: 'Он считает, что дети проводят слишком много времени перед экраном.' },
          { de: 'Sie ist der Meinung, dass man Kindern das Fernsehen nicht verbieten sollte.', ru: 'Она придерживается мнения, что детям не следует запрещать телевизор.' },
          { de: 'Die Person in meinem Text erzählt von ihren eigenen Erfahrungen.', ru: 'Человек в моём тексте рассказывает о собственном опыте.' },
          { de: 'Als Grund nennt er, dass er wenig Freizeit hat.', ru: 'В качестве причины он называет то, что у него мало свободного времени.' },
          { de: 'Am Ende sagt sie, dass jede Familie selbst entscheiden muss.', ru: 'В конце она говорит, что каждая семья должна решать сама.' }
        ] },
        { title: 'Die eigene Meinung sagen', items: [
          { de: 'Ich finde, dass das ein sehr wichtiges Thema ist.', ru: 'Я считаю, что это очень важная тема.' },
          { de: 'Meiner Meinung nach sollten Kinder mehr draußen spielen.', ru: 'По моему мнению, детям следует больше играть на улице.' },
          { de: 'Ich bin der Meinung, dass das jeder selbst entscheiden sollte.', ru: 'Я придерживаюсь мнения, что это каждый должен решать сам.' },
          { de: 'Ich glaube, dass das von der Situation abhängt.', ru: 'Я думаю, что это зависит от ситуации.' },
          { de: 'Für mich ist es wichtig, dass die Familie Zeit zusammen verbringt.', ru: 'Для меня важно, чтобы семья проводила время вместе.' },
          { de: 'Einerseits ist das praktisch, andererseits kostet es viel Geld.', ru: 'С одной стороны, это удобно, с другой — стоит больших денег.' },
          { de: 'Ein Vorteil ist, dass man Zeit spart.', ru: 'Преимущество в том, что экономится время.' },
          { de: 'Ein Nachteil ist, dass man weniger Kontakt zu anderen Menschen hat.', ru: 'Недостаток в том, что меньше общаешься с другими людьми.' }
        ] },
        { title: 'Zustimmen', items: [
          { de: 'Da haben Sie recht.', ru: 'Тут Вы правы.' },
          { de: 'Das sehe ich genauso.', ru: 'Я смотрю на это точно так же.' },
          { de: 'Ich bin ganz Ihrer Meinung.', ru: 'Я полностью разделяю Ваше мнение.' },
          { de: 'Das stimmt.', ru: 'Это верно.' },
          { de: 'Das finde ich auch.', ru: 'Я тоже так считаю.' },
          { de: 'Genau, das denke ich auch.', ru: 'Именно, я тоже так думаю.' },
          { de: 'Da stimme ich Ihnen zu.', ru: 'В этом я с Вами согласен (согласна).' }
        ] },
        { title: 'Widersprechen', items: [
          { de: 'Das sehe ich anders.', ru: 'Я смотрю на это иначе.' },
          { de: 'Da bin ich anderer Meinung.', ru: 'Тут я другого мнения.' },
          { de: 'Das stimmt meiner Meinung nach nicht ganz.', ru: 'По-моему, это не совсем так.' },
          { de: 'Da muss ich Ihnen leider widersprechen.', ru: 'Тут я, к сожалению, должен (должна) Вам возразить.' },
          { de: 'Ich verstehe Ihre Meinung, aber ich finde, dass …', ru: 'Я понимаю Ваше мнение, но считаю, что …' },
          { de: 'Das kann sein, aber man darf nicht vergessen, dass …', ru: 'Возможно, но нельзя забывать, что …' },
          { de: 'Ich bin nicht sicher, ob das wirklich so ist.', ru: 'Я не уверен(а), что это действительно так.' }
        ] },
        { title: 'Über eigene Erfahrungen / das Heimatland sprechen', items: [
          { de: 'Ich habe selbst die Erfahrung gemacht, dass …', ru: 'Я сам(а) убедился(-лась) на опыте, что …' },
          { de: 'Bei mir ist das so: Ich fahre jeden Tag mit dem Bus zur Arbeit.', ru: 'У меня это так: я каждый день езжу на работу на автобусе.' },
          { de: 'Als ich ein Kind war, gab es bei uns noch kein Internet.', ru: 'Когда я был(а) ребёнком, у нас ещё не было интернета.' },
          { de: 'In meiner Heimat ist das ganz anders als in Deutschland.', ru: 'У меня на родине это совсем иначе, чем в Германии.' },
          { de: 'Bei uns in der Ukraine ist es üblich, dass die Großeltern bei der Familie wohnen.', ru: 'У нас в Украине принято, что бабушка и дедушка живут вместе с семьёй.' },
          { de: 'In meinem Land feiert man dieses Fest mit der ganzen Familie.', ru: 'В моей стране этот праздник отмечают всей семьёй.' },
          { de: 'Im Vergleich zu Deutschland ist das Leben bei uns billiger.', ru: 'По сравнению с Германией жизнь у нас дешевле.' },
          { de: 'Ich kenne das Problem aus meiner eigenen Familie.', ru: 'Мне эта проблема знакома по собственной семье.' }
        ] },
        { title: 'Den Partner fragen', items: [
          { de: 'Und wie ist das bei Ihnen?', ru: 'А как с этим у Вас?' },
          { de: 'Was denken Sie darüber?', ru: 'Что Вы об этом думаете?' },
          { de: 'Wie ist Ihre Meinung zu diesem Thema?', ru: 'Каково Ваше мнение по этой теме?' },
          { de: 'Wie ist das in Ihrem Heimatland?', ru: 'А как это у Вас на родине?' },
          { de: 'Haben Sie ähnliche Erfahrungen gemacht?', ru: 'У Вас был похожий опыт?' },
          { de: 'Sehen Sie das auch so?', ru: 'Вы тоже так считаете?' },
          { de: 'Worum geht es in Ihrem Text?', ru: 'О чём идёт речь в Вашем тексте?' }
        ] }
      ]
    },
    {
      id: 'sprechen3', title: 'Sprechen Teil 3: Gemeinsam etwas planen', titleRu: 'Устная часть 3: совместное планирование',
      groups: [
        { title: 'Vorschläge machen', items: [
          { de: 'Ich schlage vor, dass wir zuerst einen Termin festlegen.', ru: 'Я предлагаю сначала определиться с датой.' },
          { de: 'Wir könnten die Feier im Kursraum machen.', ru: 'Мы могли бы устроить праздник в учебном классе.' },
          { de: 'Wie wäre es, wenn wir am Samstag fahren?', ru: 'Как насчёт того, чтобы поехать в субботу?' },
          { de: 'Was halten Sie davon, wenn wir alle zusammen etwas kochen?', ru: 'Как Вы смотрите на то, чтобы всем вместе что-нибудь приготовить?' },
          { de: 'Ich habe eine Idee: Wir kaufen ihr einen Gutschein.', ru: 'У меня есть идея: давайте купим ей подарочный сертификат.' },
          { de: 'Am besten treffen wir uns um zehn Uhr am Bahnhof.', ru: 'Лучше всего встретиться в десять часов на вокзале.' },
          { de: 'Vielleicht sollten wir auch an Getränke denken.', ru: 'Возможно, нам стоит подумать и о напитках.' },
          { de: 'Wollen wir nicht lieber mit dem Zug fahren?', ru: 'Может, лучше поедем на поезде?' }
        ] },
        { title: 'Zustimmen', items: [
          { de: 'Das ist eine gute Idee!', ru: 'Это хорошая идея!' },
          { de: 'Einverstanden, so machen wir das.', ru: 'Согласен (согласна), так и сделаем.' },
          { de: 'Ja, das finde ich gut.', ru: 'Да, по-моему, это хорошо.' },
          { de: 'Das passt mir sehr gut.', ru: 'Мне это очень подходит.' },
          { de: 'Daran habe ich gar nicht gedacht. Sehr gut!', ru: 'Об этом я совсем не подумал(а). Отлично!' },
          { de: 'Ja, das ist viel praktischer.', ru: 'Да, так гораздо удобнее.' },
          { de: 'Gut, dann sind wir uns einig.', ru: 'Хорошо, значит, мы договорились.' }
        ] },
        { title: 'Ablehnen und Gegenvorschlag', items: [
          { de: 'Das finde ich nicht so gut, weil es zu teuer ist.', ru: 'Мне это не очень нравится, потому что слишком дорого.' },
          { de: 'Am Freitag kann ich leider nicht. Geht es auch am Samstag?', ru: 'В пятницу я, к сожалению, не могу. А в субботу получится?' },
          { de: 'Ich bin nicht sicher, ob das eine gute Idee ist.', ru: 'Я не уверен(а), что это хорошая идея.' },
          { de: 'Das ist keine schlechte Idee, aber ich habe einen anderen Vorschlag.', ru: 'Идея неплохая, но у меня есть другое предложение.' },
          { de: 'Wäre es nicht besser, wenn wir ein Restaurant reservieren?', ru: 'Не лучше ли было бы забронировать ресторан?' },
          { de: 'Ich würde lieber etwas Persönliches schenken.', ru: 'Я бы предпочёл (предпочла) подарить что-то личное.' },
          { de: 'Das dauert zu lange. Fahren wir doch lieber mit dem Auto.', ru: 'Это слишком долго. Давайте лучше поедем на машине.' },
          { de: 'Das geht leider nicht, denn der Raum ist am Abend geschlossen.', ru: 'Так, к сожалению, не получится: вечером помещение закрыто.' }
        ] },
        { title: 'Aufgaben verteilen', items: [
          { de: 'Wer kümmert sich um das Essen?', ru: 'Кто займётся едой?' },
          { de: 'Ich kann die Getränke besorgen.', ru: 'Я могу купить напитки.' },
          { de: 'Könnten Sie die Fahrkarten kaufen?', ru: 'Не могли бы Вы купить билеты?' },
          { de: 'Ich übernehme die Einladungen, und Sie organisieren die Musik.', ru: 'Я беру на себя приглашения, а Вы организуете музыку.' },
          { de: 'Soll ich einen Kuchen backen?', ru: 'Мне испечь пирог?' },
          { de: 'Ich rufe morgen im Restaurant an und reserviere einen Tisch.', ru: 'Я завтра позвоню в ресторан и забронирую столик.' },
          { de: 'Wer sagt den anderen Kursteilnehmern Bescheid?', ru: 'Кто сообщит остальным участникам курса?' },
          { de: 'Das Geld für das Geschenk sammle ich ein.', ru: 'Деньги на подарок соберу я.' }
        ] },
        { title: 'Zusammenfassen und abschließen', items: [
          { de: 'Also, fassen wir noch einmal zusammen.', ru: 'Итак, давайте ещё раз подведём итог.' },
          { de: 'Wir treffen uns also am Samstag um zehn Uhr vor der Schule.', ru: 'Значит, мы встречаемся в субботу в десять часов перед школой.' },
          { de: 'Sie besorgen das Geschenk und ich kümmere mich um die Karte.', ru: 'Вы покупаете подарок, а я займусь открыткой.' },
          { de: 'Haben wir noch etwas vergessen?', ru: 'Мы ничего не забыли?' },
          { de: 'Dann ist ja alles klar.', ru: 'Тогда всё ясно.' },
          { de: 'Gut, dann machen wir es so.', ru: 'Хорошо, тогда так и сделаем.' },
          { de: 'Wenn es noch Fragen gibt, telefonieren wir.', ru: 'Если ещё появятся вопросы, созвонимся.' },
          { de: 'Ich freue mich schon auf den Ausflug!', ru: 'Я уже с нетерпением жду поездки!' }
        ] }
      ]
    }
  ]
};
