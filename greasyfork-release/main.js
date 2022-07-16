// ==UserScript==
// @name         FB - Clean my feeds
// @description  Hide Sponsored and Suggested posts in FB's News Feed, Groups Feed, Watch Videos Feed and Marketplace Feed
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-clean-my-feeds/issues
// @version      3.24
// @author       zbluebugz (https://github.com/zbluebugz/)
// @require      https://unpkg.com/idb-keyval@6.0.3/dist/umd.js
// @match        https://*.facebook.com/*
// @grant        none
// @license      MIT; https://opensource.org/licenses/MIT
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAanSURBVHic5ZtpjBVFEMd/u8vthsCi3OcGxQWBKJdEDEbuDypqNoGgxGgkWY8YDaIYFQ9MRCOJJ0Y80JhgVESiRpCVIAYIIAQPCEoQZCOIyuIB667IPj/8qzPzhveANzPvvX3LP5nMVHdPT1V3VVd1zQwUNroDK4A/gB3A1Pyyk1sUA18DCeBPoBH4FxiRT6ZyiXFI+C+AFsAdRj+TSSfF8fOVM0y281LgP+BwHnnJC75FM15u9BtGV+aNoxyiG7L5H3xlNUgTyjLpqFBNYDJQBKw0ejDQE9gC1GbSUaEOwCQ7r0pDN2sUA78CDUCpla1G9j86X0zlEqOQsJ8b3RaoQ6pfkmlnhWgCQXW/Ag1CNXAi086awwCcVfbfATgOHEReAGAXMone+WIql7geCbvE6F5G7wjbYaGZQFDdpwToZo99aKHrbPQypAGT0t3QnFCBhN1idAlyff8A7cJ2WkgmEFT/S4GOwDoUB4RCIQ3ARDt/ZudL7LwyRdtmhzbAMZT5aWll5wGzgfb5YiqXmIDsf3ncHReKCQTtfwDwGtA1P+zkHi7708/o142ekvaOZoQeKPvzva8sVPYnFQrBBCahuN+pf+jsTyoUygDAWbr7KwF+J4vZnxZxdJICFYQLTxvQzi5h9HCgE7AGOGp9jgGOAJujs5kd3IAECHvc7+vrYSubY/QUo9+Ni9lsrAG97LwN+NiuDwPvAVuN/s7oA0avBjbatdvpQYHa/1w0S1Xo7W0CT7hZRj9o9IdGX4yX7FhodTnJ/jRlLzAerVGrkNC9UAS4A9gf10Oa8gDkJPvTlAdgIooAXf4/K/YflxssBc5HA9rdynoDQ+z6HGAYnu12N7qD0RUo5AXoAlxtbb9Cb4FaAFeidFid3XschccNMckQGpXIR0dxfemO+faMy9LUH0RvikIjqga0QdvS1sBHQH3E/hzGo3RX0P1twlsAy9BXIq8AQ2N6bsa4CM1EnHaZKvuzyZ4zMNB2P1onWhISURdBp0Fx2uHlKORdg+y8E7L5GmBnoG09ihFCyxHVBH6280jgRsKbwGbgJ7sOrvbj0aaohuTPXzoCfYHfyPNC+CrRF7tdvv7SZX/SHfdEYb7o9E3OqI9K9JHidBTnf5JhH+vsXAE8DexGUV8Rmvmu6PO3BNK07sCzaK9RHY39+DAUMZip8AB3kzyrK5Dwg43e4Gu7By18baIwmw2UIWa/yfC+3iiOqAfeRsGO20AttutHrG2RtTsUnd3s4ChnlqfrjFT5MWA9EvIJqxuFIkC/Royzui5Gb6WJwm1XS9PUlyFbriNZwEa8V18gt1aF8ggJ5G3KUYYogbbRTRLViMGKFHW98AboLxTBzQJewhuEJWiWHc7Fyxk8ihbaBPBCVriPAe5z1QmB8g7Aj1a3DAnm0Bt98Oy04QhwJ/L9RXgmMsPKE8B9WZMgIh5HDN4cKH8e792e+5StL/IY6fz7duApu95m9y3AG4xYEHdWuMbOPX1lA4Bb0QJ5O1rlxyIfXorc2jIkJGjnNw251aHoDdBtdp/LN7rnNDm4rO1io8fiqb6L2AaiPzwSSGNap+hnttXvRKGww5dWXp7inryhGH28vAjvD46jaKFz6vwmnrY5tZ+Xoq9StBdwqv9+oH4vWixTDVpeMA5vZQ8etSjEnYYXco+wut0km18nZN/HAn34w9xi9EvML9kRJXPMRbORANYCM4E+QKs07VuhAUkAN/nKL0T7eqc5y/G8yQe+dt2sbAtNAC52/5tT/6FRhgSsxEtqbMWb/XKU80ugMNjFADM42d+PxPMkecUwpIp1nJyPKwKuRTPnojj/sZHkNz/uReeLJO9MX7bymb6y66zsuZjkCI2VxkhVoHwQml0nbB3a269GMzmVZCHddz970dfeDm1RMOQixlo73Ppwb6zSZIh+xsQekhexCXgMrgeu4tQr9RiU0U1YWz/m4Q1gre9osPLpUYWIgipj4klf2RDEbCPwAMn5ueHI17+FNKEaeQCnJQtJxnD05Wc9cEGg7lO7Z0wMcoSGy8q4ha8EL4U1x9duLMoLpHKPjSheCIazg9A+P4EW2SC2W13f6GKEh0tQuK2rW63X4tn3Ajz3uAFtYEYD/dGq77d3kMbcgvdyZVGaZx9C4XDoFHgcuAsxudQYcWrpdn/zjT4MXHOavvqj312dBp1AW95UecqWVn8gRV0kZJoUbY9Uuw+KAdohM9hHcia3FsX7qdAK+fvgTNaTXsBipPqbifgqLA70AN5B+fhTpavjPhqBh+IW5n827DI9G+eQwwAAAABJRU5ErkJggg==
// @run-at       document-start
// ==/UserScript==
/*
    v3.24 :: July 2022
        Updated detection code for: Sponsored posts in News Feed
    v3.23 :: July 2022
        Updated detection code for: Sponsored posts in News Feed
    v3.22 :: July 2022
        Updated detection code for: Sponsored posts in Marketplace Feed
    v3.21 :: July 2022
        Updated detection code for: Sponsored posts in News Feed
    v3.20 :: June 2022
        Updated detection code for: Sponsored posts in News Feed (FB changed it)
        Updated detection code for: Sponsored posts in Marketplace posts (via Groups Feed)
        Updated languages
        Added option to hide Meta Privacy Policy and Terms of Service message (top of News Feed)
    v3.19 :: June 2022
        Added Latviešu
        Added Polski
        Added Nederlands
        Minor code tweaks
    v3.18 :: May 2022
        Bug fix for Sponsored post detection code (non Flex branch)
        Added Italino (incomplete)
        Other language updates
        News Feed - third column - option to hide: "Groups / Suggested for you" box
        News Feed - option to hide "Recommended post"
        Search Feed - All & Posts: hide Sponsored posts
        Minor code & UI tweaks
    v3.17 :: May 2022
        Updated detection code for: Sponsored posts in Marketplace & Videos; (FB changed it)
        Updated detection code for: Create Room, Sponsored block (news feed, third column), Stories (FB changed it)
        Revised sponsored detection code
        Added "LIVE" filter for watch/video feed
        Added option relocate CMF's button and panel + change CMF's border colour
        Added light/dark mode theme
        Added Vietnamese (incomplete)
    v3.16 :: May 2022
        Added Sponsored * Paid for ___ detection code
    v3.15 :: May 2022
        Updated Sponsored detection code (Chrome)
    v3.14 :: May 2022:
        Updated Sponsored detection code (FB changed it)
    v3.13 :: April 2022:
        Updated Sponsored detection code (FB changed it)
        Added "Reels and short videos" to News feed block list
        Tweaked some minor bits
    v3.12 :: January 2022:
        Added a dialog box for users to toggle options
        Added option to hide News and Groups posts based on text (partial match)
        Added option to save/export options
        Added Espanol and Čeština(Czech) (incomplete)
        Added option to hide "Take a survey" and "FB 2 Meta" info boxes.
    v3.11 :: 20/11/2021:
        Rewrite
        Changed timings to MutationsObserver.
        Adjusted sponsored word detection block
        Adjusted suggestions text detection block
        Added extra Suggestions keywords
        Added detection for Groups Feed, Videos Feed (Watch), MarketPlace Feed
        Added option to hide Information Boxes (e.g. Covid Information, Global Climate Info)
        Added right rail(column) hide sponsored block
        Added German and French (incomplete)
        Added option to display 'post is hidden' text
        Added option to hide videos based on text (partial match)


    Attribution: Mop & bucket icon:
    - made by Freepik (https://www.freepik.com) @ flaticon (https://www.flaticon.com/)
    - page: https://www.flaticon.com/premium-icon/mop_2383747

    To do :::
    - complete language translation (based on FB's wording/spelling)
    - investigate Private/Icognito/InPrivate Mode (idb doesn't work)

    Instructions on how to use:
    - In FB, top right corner or bottom left corner, click on the "Clean my feeds" icon (mop + bucket)
    - Toggle the various options
    - Click Save then Close.
    - It is recommended that you Export your settings every now and then. (When your browser flushes the cache, your settings are deleted).


    \\\ --- No need to amend any of the code below --- ///
*/

(async function () {

    'use strict';

    // - console log "label" - used for filtering console logs.
    const log = '-- fbm :: ';

    // - idb-keyval - indexedDB wrapper
    // -- needs the "@require https://unpkg.com/idb-keyval@6.0.3/dist/umd.js" entry.
    // -- which functions do we want to use from the idb-keyval?
    const { get, set, createStore } = idbKeyval;
    // - override idb-keyval's default db and store names.
    let DBVARS = {
        DBName: 'dbCMF',
        DBStore: 'Mopping',
        DBKey: 'Options',
        optionsReady: false,
        ostore: null,
    }
    // - make sure the db's store exists ...
    DBVARS.ostore = createStore(DBVARS.DBName, DBVARS.DBStore);

    // - post attribute (used for detecting changes within a post)
    const postAtt = 'msz';
    const postAttIB = 'msz-ib';

    // *** *** Language components *** ***
    const KeyWords = {
        // Keywords - use FB's wording.
        // - if unknown, use EN's words and add "// --- needs translation"

        // *** Which languages have been setup:
        // - 'en' is default.
        LANGUAGES: ['en', 'pt', 'de', 'fr', 'es', 'cs', 'vi', 'it', 'lv', 'pl', 'nl', 'he'],

        SPONSORED: {
            // English
            'en': 'Sponsored',
            // Português (Portugal)
            'pt': 'Patrocinado',
            // Deutsch (Germany)
            'de': 'Gesponsert',
            // Français (France)
            'fr': 'Sponsorisé',
            // Espanol (Spain)
            'es': 'Publicidad',
            // Čeština (Czechia)
            'cs': 'Sponzorováno',
            // Tiếng Việt (Vietnam)
            'vi': 'Được tài trợ',
            // Italino (Italy)
            'it': 'Sponsorizzato',
            // Latviešu (Latvia)
            'lv': 'Apmaksāta reklāma',
            // Polski (Poland)
            'pl': 'Sponsorowane',
            // Nederlands (Netherlands)
            'nl': 'Gesponsord',
             // Hebrew
            'he': 'ממומן',
        },
        // marketplace 'sponsored' word ... somtimes fb has a different spelling
        MP_SPONSORED: {
            'en': 'Sponsored',
            'pt': 'Patrocinado',
            'de': 'Gesponsert',
            'fr': 'Sponsorisée',
            'es': 'Publicidad',
            'cs': 'Sponzorováno',
            'vi': 'Được tài trợ',
            'it': 'Sponsorizzata',
            'lv': 'Apmaksāta reklāma',
            'pl': 'Sponsorowane',
            'nl': 'Gesponsord',
            'he': 'ממומן',
        },
        // *** Verbosity:
        VERBOSITY: {
            'en': ['1 post hidden. Rule: ', ' posts hidden'],
            'pt': ['1 postagem oculta. Regra: ', ' postagens ocultas'],
            'de': ['1 Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt'],
            'fr': ['1 poste caché. Règle: ', ' posts cachés'],
            'es': ['1 publicación oculta. Regla: ', ' publicaciones ocultas'],
            'cs': ['1 příspěvek byl skryt. Pravidlo: ', ' příspěvků skrytých'],
            'vi': ['1 bài bị ẩn. Quy tắc: ', ' bài viết ẩn'],
            'it': ['1 post nascosto Regola: ', ' post nascosti'],
            'lv': ['1 ziņa ir paslēpta. Noteikums: ', ' ziņas ir paslēptas'],
            'pl': ['Ukryto 1 post. Reguła: ', ' posty ukryte'],
            'nl': ['1 post verborgen. Regel: ', ' posts verborgen'],
            'he': ['פוסט 1 נמחק חוק: ', ' פוסטים נמחקו'],
        },


        // *** News Feed ::
        // - Stories
        NF_STORIES: {
            'en': 'Stories',
            'pt': 'Histórias',
            'de': 'Stories',
            'fr': 'Stories',
            'es': 'Historias',
            'cs': 'Příběhy',
            'vi': 'Những câu chuyện',
            'it': 'Storia',
            'lv': 'Stāsti',
            'pl': 'Historie',
            'nl': 'Verhalen',
            'he': 'Stories',
            'isSuggestion': false,
            'defaultEnabled': false,
        },
        // - create room
        NF_CREATE_ROOM: {
            'en': 'Create room',
            'pt': 'Criar sala',
            'de': 'Room erstellen',
            'fr': 'Créer un salon',
            'es': 'Crear sala',
            'cs': 'Vytvořit místnost',
            'vi': 'Tạo phòng họp mặt',
            'it': 'Crea stanza',
            'lv': 'Izveidot istabu',
            'pl': 'Utwórz pokój',
            'nl': 'Ruimte maken',
            'he': 'צור חדר',
            'isSuggestion': false,
            'defaultEnabled': false,
        },
        // - People you may know
        NF_PEOPLE_YOU_MAY_KNOW: {
            'en': 'People you may know',
            'pt': 'Pessoas que talvez conheças',
            'de': 'Personen, die du kennen könntest',
            'fr': 'Connaissez-vous...',
            'es': 'Personas que quizá conozcas',
            'cs': 'Koho možná znáte',
            'vi': 'Những người bạn có thể biết',
            'it': 'Persone che potresti conoscere',
            'lv': 'Cilvēki, kurus tu varētu pazīt',
            'pl': 'Osoby, które możesz znać',
            'nl': 'Mensen die je misschien kent',
            'he': 'אנשים שאולי אתה מכיר',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Paid partnership
        // -- page you follow is "sponsoring" another page's post (e.g. job)
        NF_PAID_PARTNERSHIP: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft',
            'fr': 'Partenariat rémunéré',
            'es': 'Colaboración pagada',
            'cs': 'Placené partnerství',
            'vi': 'Mối quan hệ tài trợ',
            'it': 'Partnership pubblicizzata',
            'lv': 'Apmaksāta sadarbība',
            'pl': 'Post sponsorowany',
            'nl': 'Betaald partnerschap',
            'he': 'שותפות בתשלום',
            'isSuggestion': true,
            'defaultEnabled': true,
        },
        // Sponsored · Paid for by ______  (paid advertising)
        NF_SPONSORED_PAID: {
            'en': 'Sponsored · Paid for by ______',
            'pt': 'Patrocinado · Financiado por ______',
            'de': 'Gesponsert · Finanziert von ______',
            'fr': 'Sponsorisé · Financé par ______',
            'es': 'Publicidad · Pagado por ______',
            'cs': 'Sponzorováno · Platí za to ______',
            'vi': 'Được tài trợ · Tài trợ bởi ______',
            'it': 'Sponsorizzato · Finanziato da ______',
            'lv': 'Apmaksāta reklāma · Apmaksā ______',
            'pl': 'Sponsorowane · Opłacona przez ______',
            'nl': 'Gesponsord · Betaald door ______',
            'he': '______ ממומן - על ידי',
            'isSuggestion': false,
            'defaultEnabled': true
        },
        // - Suggested for you
        NF_SUGGESTED_FOR_YOU: {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich',
            'fr': 'Suggestions pour vous',
            'es': 'Sugerencias para ti',
            'cs': 'Návrhy pro vás',
            'vi': 'Gợi ý cho bạn',
            'it': 'Suggeriti per te', // --- correct translation?
            'lv': 'Ieteikts tev',
            'pl': 'Propozycje dla Ciebie', // 'Proponowane dla Ciebie', ?
            'nl': 'Suggested for you', // --- needs translation
            'he': 'מומלץ בשבילך',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Recommended post (usually appears on fresh accounts)
        NF_RECOMMENDED_POST: {
            'en': 'Recommended post',
            'pt': 'Publicação recomendada',
            'de': 'Empfohlener Beitrag',
            'fr': 'Publication recommandée',
            'es': 'Publicación recomendada',
            'cs': 'Doporučený příspěvek',
            'vi': 'Bài viết đề xuất',
            'it': 'Post suggerito',
            'lv': 'Ieteikts ieraksts',
            'pl': 'Polecany post',
            'nl': 'Aanbevolen bericht',
            'he': 'מומלץ בשבילך',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested pages
        NF_SUGGESTED_PAGES: {
            'en': 'Suggested Pages',
            'pt': 'Páginas sugeridas',
            'de': 'Vorgeschlagene Seiten',
            'fr': 'Pages suggérées',
            'es': 'Páginas sugeridas',
            'cs': 'Navrhované stránky',
            'vi': 'Suggested Pages', // --- needs translation
            'it': 'Contenuto suggerito per te', // suggested content for you
            'lv': 'Suggested Pages', // --- needs translation
            'pl': 'Suggested Pages', // --- needs translation
            'nl': 'Suggested Pages', // --- needs translation
            'he': 'Suggested Pages', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested events
        NF_SUGGESTED_EVENTS: {
            'en': 'Suggested Events',
            'pt': 'Eventos Sugeridos',
            'de': 'Vorgeschlagene Veranstaltungen',
            'fr': 'Évènements suggérés',
            'es': 'Suggested Events', // --- needs translation
            'cs': 'Suggested Events', // --- needs translation
            'vi': 'Suggested Events', // --- needs translation
            'it': 'Suggested Events', // --- needs translation
            'lv': 'Suggested Events', // --- needs translation
            'pl': 'Proponowane wydarzenia',
            'nl': 'Voorgestelde evenementen',
            'he': 'Suggested Events', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Events you may like
        NF_EVENTS_YOU_MAY_LIKE: {
            'en': 'Events you may like',
            'pt': 'Events you may like', // --- needs translation
            'de': 'Events you may like', // --- needs translation
            'fr': 'Évènements qui pourraient vous intéresser', // (Events that may/might interest you )
            'es': ['Eventos que te pueden gustar', 'Eventos que quizá te gusten'], // Events that you may|might like
            'cs': 'Events you may like', // --- needs translation
            'vi': 'Events you may like', // --- needs translation
            'it': 'Events you may like', // --- needs translation
            'lv': 'Events you may like', // --- needs translation
            'pl': 'Events you may like', // --- needs translation
            'nl': 'Events you may like', // --- needs translation
            'he': 'Events you may like', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - June 2022: removed News Feed's "Videos just for you" & "Page you could subscribe to"

        // - Reels and short videos
        NF_REELS_SHORT_VIDEOS: {
            'en': 'Reels and short videos',
            //'pt': 'Vídeos do Reels e vídeos curtos',
            'pt': 'Vídeos do Reels e vídeos de curta duração',
            'de': 'Reels und Kurzvideos',
            'fr': 'Reels et vidéos courtes',
            'es': 'Reels y vídeos cortos',
            'cs': 'Sekvence a krátká videa',
            'vi': 'Reels và video ngắn',
            'it': 'Reel e video brevi',
            'lv': 'Reels un īsi videoklipi',
            'pl': 'Rolki i krótkie filmy',
            'nl': 'Reels en korte video\'s',
            'he': 'סרטוני Reels וקטעי וידאו קצרים',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Sponsored box in right-hand column
        NF_THIRD_COLUMN_SPONSORED: {
            'en': 'Sponsored box (right-hand column)',
            'pt': 'Caixa patrocinada (coluna da direita)',
            'de': 'Gesponserte Box (rechte Spalte)',
            'fr': 'Encadré sponsorisé (colonne de droite)',
            'es': 'Cuadro patrocinado (columna de la derecha)',
            'cs': 'Sponzorovaný box (pravý sloupec)',
            'vi': 'Hộp tài trợ (cột bên phải))',
            'it': 'Casella sponsorizzato (colonna di destra)',
            'lv': 'Sponsorētā kaste (labā kolonna)',
            'pl': 'Boks sponsorowany (prawa kolumna)',
            'nl': 'Gesponsorde doos (rechterkolom)',
            'he': 'Sponsored box (right-hand column)', // --- needs translation
            'defaultEnabled': true,
        },
        // - Suggested for you
        NF_THIRD_COLUMN_SUGGESTED_FOR_YOU: {
            'en': 'Suggested for you (right-hand column)',
            'pt': 'Sugestões para ti (coluna da direita)',
            'de': 'Vorschläge für dich (rechte Spalte)',
            'fr': 'Suggestions pour vous (colonne de droite)',
            'es': 'Sugerencias para ti (columna de la derecha)',
            'cs': 'Návrhy pro vás (pravý sloupec)',
            'vi': 'Gợi ý cho bạn (cột bên phải))',
            'it': 'Suggeriti per te (colonna di destra)',
            'lv': 'Ieteikts tev (labā kolonna)',
            'pl': 'Propozycje dla Ciebie (prawa kolumna)',
            'nl': 'Voorgesteld voor jou (rechterkolom)',
            'he': 'Suggested for you (right-hand column)', // --- needs translation
            'defaultEnabled': false,
        },

        // *** Groups Feed ::
        // -- nb: some of these rules overlap each other
        // -- "Join" and "Join Group" are listed in most non-subscribed group posts,
        //    if both of these keywords are enabled, then the other keywords are "redundant"
        // - New for you
        // -- usually shows up at top of feed.
        GF_NEW_FOR_YOU: {
            'en': 'New for you',
            'pt': 'Novidades para ti',
            'de': 'Neu für dich',
            'fr': 'Nouveautés',
            'es': 'Novedades para ti',
            'cs': 'Novinky pro vás',
            'vi': 'New for you', // --- needs translation
            'it': 'New for you', // --- needs translation
            'lv': 'New for you', // --- needs translation
            'pl': 'New for you', // --- needs translation
            'nl': 'New for you', // --- needs translation
            'he': 'New for you', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested for you / Groups you might be interested in.
        GF_SUGGESTED_FOR_YOU_GROUPS: {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich',
            'fr': ['Suggestions pour vous', 'Groupes qui pourraient vous intéresser.'],
            'es': 'Sugerencias para ti',
            'cs': 'Návrhy pro vás',
            'vi': 'Gợi ý cho bạn',
            'it': 'Suggeriti per te', // ??
            'lv': 'Iesakām',
            'pl': 'Proponowane dla Ciebie',
            'nl': 'Voorgesteld voor jou',
            'he': 'Suggested for you', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Paid partnership
        // -- a page you follow is "sponsoring" another page's post (e.g. job)
        GF_PAID_PARTNERSHIP: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft', // (Paid advertising partnership)
            'fr': 'Partenariat rémunéré',
            'es': 'Colaboración pagada', // (Paid collaboration)
            'cs': 'Placené partnerství',
            'vi': 'Mối quan hệ tài trợ',
            'it': 'Partnership pubblicizzata',
            'lv': 'Apmaksāta sadarbība', // (Paid cooperation)
            'pl': 'Post sponsorowany', // (Sponsored post)
            'nl': 'Betaald partnerschap',
            'he': 'Paid partnership', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': true,
        },
        // - Suggested groups
        // -- box of groups - may need to use the view/see more keyword
        GF_SUGGESTED_GROUPS: {
            'en': 'Suggested groups',
            'pt': 'Grupos sugeridos',
            'de': 'Vorgeschlagene Gruppen',
            'fr': 'Groupes suggérés',
            'es': 'Grupos sugeridos',
            'cs': 'Navrhované skupiny',
            'vi': 'Nhóm gợi ý',
            'it': 'Gruppi suggeriti',
            'lv': 'Ieteiktās grupas',
            'pl': 'Proponowane grupy',
            'nl': 'Voorgestelde groepen',
            'he': 'Suggested groups', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - See More Groups - from post's heading "More like XYZ" / "Others similar to XYZ" (where XYZ is a group you've joined)
        // -- nb: some non-subscribed group posts also have this keyword.
        GF_SEE_MORE_GROUPS: {
            'en': 'See More Groups',
            'pt': 'Ver mais grupos',
            'de': 'Weitere Gruppen ansehen',
            'fr': 'Voir plus de groupes',
            'es': 'Ver más grupos',
            'cs': 'Zobrazit další skupiny',
            'vi': 'Xem thêm nhóm',
            'it': 'Vedi altri gruppi',
            'lv': 'Skatīt vairāk grupu',
            'pl': 'Wyświetl więcej grup',
            'nl': 'Meer groepen bekijken',
            'he': 'See More Groups', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested post from a public group
        // -- lots of posts from groups not subscribed too
        GF_SUGGESTED_POST_PUBLIC_GROUP: {
            'en': ['Suggested post from a public group', 'Post from public group'],
            'pt': ['Publicação sugerida de um grupo público', 'Postagem de grupo público'],
            'de': 'Vorgeschlagener Beitrag aus einer öffentlichen Gruppe',
            'fr': 'Publication suggérée d’un groupe public',
            'es': 'Publicación sugerida de un grupo público',
            'cs': 'Navrhovaný příspěvek z veřejné skupiny', // proposed contribution from public group
            'vi': 'Bài viết gợi ý từ nhóm công khai',
            'it': 'Post suggerito di un gruppo pubblico',
            'lv': 'Ieteikts ieraksts no publiskas grupas',
            'pl': 'Proponowany post z grupy publicznej',
            'nl': 'Voorgesteld bericht van een openbare groep',
            'he': ['Suggested post from a public group', 'Post from public group'], // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Because you viewed a similar post (but not from a subscribed group)
        GF_BECAUSE_YOU_VIEWED_A_SIMILAR_POST: {
            'en': 'Because you viewed a similar post',
            'pt': 'Porque viste uma publicação semelhante',
            'de': 'Weil du dir einen ähnlichen Beitrag angesehen hast',
            'fr': 'Parce que vous avez consulté une publication similaire',
            'es': 'Porque has visto una publicación similar',
            'cs': 'Protože jste se díval na podobný příspěvek',
            'vi': ['Xem thêm bài viết tương tự', 'Vì bạn đã xem một bài viết tương tự'],
            'it': 'Perché hai visualizzato un post simile',
            'lv': 'Jo tu skatīji līdzīgu ierakstu',
            'pl': 'Ponieważ wyświetliłaś podobny post',
            'nl': 'Because you viewed a similar post', // --- needs translation
            'he': 'Because you viewed a similar post', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Because you viewed a similar group
        GF_BECAUSE_YOU_VIEWED_A_SIMILAR_GROUP: {
            'en': 'Because you viewed a similar group',
            'pt': 'Porque viste um grupo semelhante',
            'de': 'Weil du dir eine ähnliche Gruppe angesehen hast',
            'fr': 'Parce que vous avez consulté un groupe similaire',
            'es': 'Porque has visto un grupo similar',
            'cs': 'Protože jste zobrazil podobnou skupinu',
            'vi': 'Vì bạn đã xem một nhóm tương tự',
            'it': 'Perché hai visualizzato un gruppo simile',
            'lv': 'Jo tu apskatīji līdzīgu grupu',
            'pl': ['Ponieważ wyświetliłaś podobną grupę', 'Ponieważ wyświetliłeś podobną grupę'],
            'nl': 'Omdat je een vergelijkbare groep hebt bekeken',
            'he': 'Because you viewed a similar group', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Based on your recent activity
        GF_YOUR_RECENT_ACTIVITY: {
            'en': 'Based on your recent activity',
            'pt': 'Com base na tua atividade recente',
            'de': 'Basierend auf deinen neuesten Aktivitäten',
            'fr': 'D’après votre activité récente',
            'es': 'Según tu actividad reciente',
            'cs': 'Na základě vaší nedávné aktivity',
            'vi': 'Dựa trên hoạt động gần đây của bạn',
            'it': 'In base alla tua attività recente',
            'lv': 'Pamatojoties uz tavām nesenajām darbībām',
            'pl': 'Na podstawie Twojej ostatniej aktywności',
            'nl': 'Gebaseerd op je recente activiteit',
            'he': 'Based on your recent activity', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - From a group that your friend is in
        GF_FROM_A_GROUP_YOUR_FRIEND_IS_IN: {
            'en': 'From a group that your friend is in',
            'pt': 'De um grupo em que o teu amigo/a é membro',
            'de': 'Aus einer Gruppe, in der dein/e Freund/in ist',
            'fr': 'D’un groupe dont votre ami(e) est membre',
            'es': 'De un grupo al que tu amigo pertenece',
            'cs': 'Ze skupiny, kde je váš přítel',
            'vi': 'From a group that your friend is in', // --- needs translation
            'it': 'From a group that your friend is in', // --- needs translation
            'lv': 'From a group that your friend is in', // --- needs translation
            'pl': 'From a group that your friend is in', // --- needs translation
            'nl': 'From a group that your friend is in', // --- needs translation
            'he': 'From a group that your friend is in', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Friends' groups
        // -- usually shows up at top of feed.
        GF_FRIENDS_GROUPS: {
            'en': 'Friends\' groups',
            'pt': 'Grupos dos amigos',
            'de': 'Gruppen von Freunden',
            'fr': 'Friends\' groups', // --- needs translation
            'es': 'Friends\' groups', // --- needs translation
            'cs': 'Friends\' groups', // --- needs translation
            'vi': 'Friends\' groups', // --- needs translation
            'it': 'Friends\' groups', // --- needs translation
            'lv': 'Friends\' groups', // --- needs translation
            'pl': 'Friends\' groups', // --- needs translation
            'nl': 'Friends\' groups', // --- needs translation
            'he': 'Friends\' groups', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Popular near you / in your area
        GF_POPULAR_NEAR_YOU: {
            'en': 'Popular near you',
            'pt': 'Populares perto de ti',
            'de': 'Beliebt in deiner Nähe',
            'fr': 'Popular near you', // --- needs translation
            'es': 'Popular near you', // --- needs translation
            'cs': 'Popular near you', // --- needs translation
            'vi': 'Popular near you', // --- needs translation
            'it': 'Popular near you', // --- needs translation
            'lv': 'Popular near you', // --- needs translation
            'pl': 'Popular near you', // --- needs translation
            'nl': 'Popular near you', // --- needs translation
            'he': 'Popular near you', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Join Group
        // -- two options for joining a group (includes sign up, subscribe)
        // -- (bit like a catch-all rule - placed these to rules @ end of list.)
        GF_JOIN_GROUP: {
            'en': ['Join Group', 'Join'],
            'pt': ['Aderir ao grupo', 'Aderir'],
            'de': ['Gruppe beitreten', 'Beitreten'],
            'fr': ['Rejoindre le groupe', 'Rejoindre'],
            'es': ['Unirte al grupo', 'Unirte', 'Unirse al grupo'],
            'cs': ['Přidat se ke skupině', 'Přidat se'],
            'vi': ['Tham gia nhóm', 'Tham gia'],
            'it': ['Iscriviti al gruppo', 'Iscriviti'],
            'lv': ['Pievienoties grupai', 'Pievienoties'],
            'pl': ['Dołącz do grupy', 'Dołącz'],
            'nl': 'Lid worden',
            'he': ['Join Group', 'Join'], // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },

        // *** Watch Videos Feed
        // - Paid partnership
        //   -- page you follow is "sponsoring" another page's video post (e.g. job)
        VF_PAID_PARTNERSHIP_VIDEOS: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft', // (Paid advertising partnership)
            'fr': 'Partenariat rémunéré',
            'es': 'Colaboración pagada', // (Paid collaboration)
            'cs': 'Placené partnerství',
            'vi': 'Mối quan hệ tài trợ',
            'it': 'Partnership pubblicizzata',
            'lv': 'Apmaksāta sadarbība', // (Paid cooperation)
            'pl': 'Post sponsorowany', // (Sponsored post)
            'nl': 'Betaald partnerschap',
            'he': 'שותפות בתשלום',
            'isSuggestion': true,
            'defaultEnabled': true,
        },
        VF_NEW_FOR_YOU_VIDEOS: {
            'en': 'New for you',
            'pt': 'Novidades para ti',
            'de': 'Neu für dich',
            'fr': 'Nouveautés',
            'es': 'Novedades para ti',
            'cs': 'Novinky pro vás',
            'vi': 'Video mới dành cho bạn',
            'it': 'New for you', // --- needs translation
            'lv': 'New Videos for You',
            'pl': 'New for you', // --- needs translation
            'nl': 'Nieuwe video\'s voor jou',
            'he': 'New for you', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        VF_LIVE: {
            'en': 'LIVE',
            'pt': 'DIRETO',
            'de': 'LIVE',
            'fr': 'EN DIRECT',
            'es': 'ESTRENO',
            'cs': 'ŽIVĚ',
            'vi': 'TRỰC TIẾP',
            'it': 'IN DIRETTA',
            'lv': 'TIEŠRAIDE',
            'pl': 'NA ŻYWO',
            'nl': 'LIVE',
            'he': 'LIVE', // --- needs translation
            'isSuggestion': false,
            'defaultEnabled': false,
        },

        // *** Miscellaneous/Other items
        // -- info box - coronavirus
        OTHER_INFO_BOX_CORONAVIRUS: {
            'en': 'Coronavirus (information box)',
            'pt': 'Coronavírus (caixa de informações)',
            'de': 'Coronavirus (Infobox)',
            'fr': 'Coronavirus (encadré d\'information)',
            'es': 'Coronavirus (cuadro de información)',
            'cs': 'Coronavirus (informační box)',
            'vi': 'Virus corona (hộp thông tin)',
            'it': 'Coronavirus (casella informativa)',
            'lv': 'Koronavīruss (informācijas lodziņš)',
            'pl': 'Koronawirus (skrzynka informacyjna)',
            'nl': 'Coronavirus (informatiebox)',
            'he': 'Coronavirus (information box)', // --- needs translation
            'isInfoBox': true,
            'defaultEnabled': false,
            'pathMatch': '/coronavirus_info/', // -- the partial path name to match.
        },
        // -- info box - climate science
        OTHER_INFO_BOX_CLIMATE_SCIENCE: {
            'en': 'Climate Science (information box)',
            'pt': 'Ciência do Clima (caixa de informações)',
            'de': 'Klimawissenschaft (Infobox)',
            'fr': 'Science du climat (encadré d\'information)',
            'es': 'Ciencia del clima (cuadro de información)',
            'cs': 'Klimatická věda (informační box)',
            'vi': 'Khoa học khí hậu (hộp thông tin)',
            'it': 'Scienza del clima (casella informativa)',
            'lv': 'Klimata zinātne (informācijas lodziņš)',
            'pl': 'Nauka o klimacie (skrzynka informacyjna)',
            'nl': 'Klimaatwetenschap (informatiebox)',
            'he': 'Climate Science (information box)', // --- needs translation
            'isInfoBox': true,
            'defaultEnabled': false,
            'pathMatch': '/climatescienceinfo/',
        },
        // -- info box - subscribe
        OTHER_INFO_BOX_SUBSCRIBE: {
            'en': 'Subscribe (information box)',
            'pt': 'Assine (caixa de informações)',
            'de': 'Abonnieren (Infobox)',
            'fr': 'S’abonner (encadré d\'information)',
            'es': 'Suscribir  (cuadro de información)',
            'cs': 'Odebírat (informační box)',
            'vi': 'Đăng kí (hộp thông tin)',
            'it': 'Iscriviti (casella informativa)',
            'lv': 'Abonēt (informācijas lodziņš)',
            'pl': 'Subskrybuj (pole informacyjne)',
            'nl': 'Abonneren (informatievak)',
            'he': 'Subscribe (information box)', // --- needs translation
            'isInfoBox': true,
            'defaultEnabled': false,
            'pathMatch': '/support/',
        },
        // -- nf - top of feed - "invitation to a survey"
        OTHER_SURVEY: {
            'en': 'See Survey Details',
            'pt': 'Veja os detalhes da pesquisa',
            'de': 'Siehe Umfragedetails ',
            'fr': 'Voir les détails de l\'enquête',
            'es': 'Consulte los detalles de la encuesta',
            'cs': 'Viz Podrobnosti průzkumu',
            'vi': 'Xem chi tiết khảo sát',
            'it': 'Vedi i dettagli del sondaggio',
            'lv': 'Skatiet aptaujas detaļas',
            'pl': 'Zobacz szczegóły ankiety',
            'nl': 'Bekijk de details van het onderzoek',
            'he': 'See Survey Details', // --- needs translation
            'pathMatch': '/survey/',
            'isTopOfNFFeed': true,
            'defaultEnabled': false,
        },
        // -- nf - top of feed - "fb 2 m"
        OTHER_FB_RENAMED: {
            'en': 'The Facebook company is now called Meta',
            'pt': 'A empresa do Facebook agora se chama Meta',
            'de': 'Das Facebook-Unternehmen heißt jetzt Meta',
            'fr': 'La société Facebook s\'appelle désormais Meta',
            'es': 'La compañía de Facebook ahora se llama Meta',
            'cs': 'Facebooková společnost se nyní jmenuje Meta',
            'vi': 'Công ty Facebook bây giờ được gọi là Meta',
            'it': 'La società di Facebook si chiama ora Meta',
            'lv': 'Facebook uzņēmumu tagad sauc par Meta',
            'pl': 'Firma Facebook nazywa się teraz Meta',
            'nl': 'Het Facebook-bedrijf heet nu Meta',
            'he': 'The Facebook company is now called Meta', // --- needs translation
            //'urlMatch': 'about.facebook.com/meta/',
            'urlMatch': 'facebook.com/meta/',
            'isTopOfNFFeed': true,
            'defaultEnabled': false,
        },
        // -- nf - top of feed - "fb/meta updated privacy & terms" - won't shut up.
        OTHER_FB_PRIVACY_TERMS: {
            'en': 'We\'ve updated the Meta Privacy Policy and Terms of Service',
            'pt': 'Atualizámos a Política de Privacidade e os Termos de Serviço da Meta',
            'de': 'Wir haben die Meta-Datenrichtlinie und die Meta-Nutzungsbedingungen aktualisiert',
            'fr': 'Nous avons mis à jour la Politique de confidentialité et les Conditions de service de Meta',
            'es': 'Hemos actualizado la Política de privacidad y las Condiciones del servicio de Meta',
            'cs': 'Aktualizovali jsme Zásady ochrany osobních údajů a Smluvní podmínky společnosti Meta',
            'vi': 'Chúng tôi đã cập nhật Chính sách quyền riêng tư và Điều khoản dịch vụ của Meta',
            'it': 'Abbiamo aggiornato l\'Informativa sulla privacy e i Termini di servizio di Meta',
            'lv': 'Esam atjauninājuši Meta konfidencialitātes politiku un pakalpojumu sniegšanas noteikumus',
            'pl': 'Zaktualizowaliśmy Politykę prywatności Meta i Warunki korzystania z usługi Meta',
            'nl': 'We hebben het Meta Privacybeleid en de Servicevoorwaarden bijgewerkt',
            'he': 'We\'ve updated the Meta Privacy Policy and Terms of Service', // --- needs translation
            'pathMatch': '/privacy_policy_notice/',
            'isTopOfNFFeed': true,
            'defaultEnabled': false,
        },

        // *** Dialog box
        // - Title
        DLG_TITLE: {
            'en': 'Clean my feeds',
            'pt': 'Limpe meus feeds',
            'de': 'Bereinige meine Feeds',
            'fr': 'Nettoyer mes flux',
            'es': 'Limpia mis feeds',
            'cs': 'Vyčistěte mé kanály',
            'vi': 'Làm sạch nguồn cấp dữ liệu của tôi',
            'it': 'Pulisci i miei feed',
            'lv': 'Tīrīt manas plūsmas',
            'pl': 'Wyczyść moje kanały',
            'nl': 'Schoon mijn feeds',
            'he': 'Clean my feeds', // --- needs translation
        },
        DLG_NF: {
            'en': 'News Feed',
            'pt': 'Feed de notícias',
            'de': 'Newsfeed',
            'fr': 'Fil de nouvelles',
            'es': 'Feed de noticias',
            'cs': 'Informační kanál',
            'vi': 'Nguồn cấp tin tức',
            'it': 'Feed di notizie', // news section
            'lv': 'Ziņu plūsma',
            'pl': 'Kanał aktualności',
            'nl': 'Nieuwsfeed',
            'he': 'News Feed', // --- needs translation
        },
        DLG_GF: {
            'en': 'Groups Feed',
            'pt': 'Feed de grupos',
            'de': 'Gruppen-Feed',
            'fr': 'Flux de groupes',
            'es': 'Feed de grupos',
            'cs': 'Skupinový kanál',
            'vi': 'Nguồn cấp dữ liệu Nhóm',
            'it': 'Feed di gruppo',
            'lv': 'Grupu plūsma',
            'pl': 'Kanał grup',
            'nl': 'Groepsfeed',
            'he': 'Groups Feed', // --- needs translation
        },
        DLG_VF: {
            'en': 'Videos Feed',
            'pt': 'Feed de vídeos',
            'de': 'Video-Feed',
            'fr': 'Flux de vidéos',
            'es': 'Feed de vídeos',
            'cs': 'Video kanál',
            'vi': 'Nguồn cấp dữ liệu video',
            'it': 'Feed di video',
            'lv': 'Video plūsma',
            'pl': 'Kanał wideo',
            'nl': 'Videofeed',
            'he': 'Videos Feed', // --- needs translation
        },
        DLG_MP: {
            'en': 'Marketplace Feed',
            'pt': 'Feed de mercado',
            'de': 'Marktplatz-Feed',
            'fr': 'Flux de la place de marché',
            'es': 'Feed de Marketplace',
            'cs': 'Marketplace kanál',
            'vi': 'Nguồn cấp dữ liệu Marketplace',
            'it': 'Feed id Marketplace',
            'lv': 'Marketplace',
            'pl': 'Kanał Marketplace',
            'nl': 'Marktplaatsfeed',
            'he': 'Marketplace Feed', // --- needs translation
        },
        DLG_OTHER: {
            'en': 'Miscellaneous items',
            'pt': 'Itens miscelâneos',
            'de': 'Sonstige Gegenstände',
            'fr': 'Articles divers',
            'es': 'Artículos diversos',
            'cs': 'Různé položky',
            'vi': 'Những thứ linh tinh',
            'it': 'Articoli vari',
            'lv': 'Dažādas vienumus',
            'pl': 'Różne pozycje',
            'nl': 'Diversen',
            'he': 'Miscellaneous items', // --- needs translation
        },
        DLG_NF_BLOCK: {
            'en': 'News Feed - text filter',
            'pt': 'Feed de notícias - filtro de texto',
            'de': 'Newsfeed - Textfilter',
            'fr': 'Fil de nouvelles - filtre de texte',
            'es': 'Feed de noticias: filtro de texto',
            'cs': 'Informační kanál - textový filtr',
            'vi': 'Nguồn cấp tin tức - bộ lọc văn bản',
            'it': 'Feed di notizie - filtro di testo',
            'lv': 'Ziņu plūsma - teksta filtrs',
            'pl': 'Kanał aktualności - filtr tekstu',
            'nl': 'Nieuwsfeed - tekstfilter',
            'he': 'News Feed - text filter', // --- needs translation
        },
        DLG_GF_BLOCK: {
            'en': 'Groups Feed - text filter',
            'pt': 'Feed de grupos - filtro de texto',
            'de': 'Gruppen-Feed - Textfilter',
            'fr': 'Flux de groupes - filtre de texte',
            'es': 'Feed de grupos: filtro de texto',
            'cs': 'Skupinový kanál - textový filtr',
            'vi': 'Nguồn cấp dữ liệu Nhóm - bộ lọc văn bản',
            'it': 'Feed di gruppo - filtro di testo',
            'lv': 'Grupu plūsma - teksta filtrs',
            'pl': 'Kanał grup - filtr tekstu',
            'nl': 'Groepsfeed - tekstfilter',
            'he': 'Groups Feed - text filter', // --- needs translation
        },
        DLG_VF_BLOCK: {
            'en': 'Videos Feed - text filter',
            'pt': 'Feed de vídeos - filtro de texto',
            'de': 'Video-Feed - Textfilter',
            'fr': 'Flux de vidéos - filtre de texte',
            'es': 'Feed de videos - filtro de texto',
            'cs': 'Video kanál - textový filtr',
            'vi': 'Nguồn cấp dữ liệu video - bộ lọc văn bản',
            'it': 'Feed di video - filtro di testo',
            'lv': 'Video plūsma - teksta filtrs',
            'pl': 'Kanał wideo - filtr tekstu',
            'nl': 'Videofeed - tekstfilter',
            'he': 'Videos Feed - text filter', // --- needs translation
        },
        DLG_BLOCK_NEW_LINE: {
            'en': '(separate words or phrases with a line break)',
            'pt': '(separe palavras ou frases com quebras de linha)',
            'de': '(trennen Sie Wörter oder Sätze mit Zeilenumbrüchen)',
            'fr': '(mots ou phrases séparés avec des sauts de ligne)',
            'es': '(palabras o frases separadas con saltos de línea)',
            'cs': '(oddělte slova nebo fráze na nový řádek)',
            'vi': '(tách các từ hoặc cụm từ bằng dấu ngắt dòng)',
            'it': '(separare parole o frasi con un\'interruzione di riga)',
            'lv': '(atdaliet vārdus vai frāzes ar rindas pārtraukumu)',
            'pl': '(oddziel słowa lub wyrażenia z podziałem wiersza)',
            'nl': '(scheid woorden of woordgroepen met een regeleinde)',
            'he': '(separate words or phrases with a line break)', // --- needs translation
        },
        NF_BLOCKED_ENABLED: {
            'en': 'Enabled',
            'pt': 'Habilidoso',
            'de': 'Ermöglichte',
            'fr': 'Activé',
            'es': 'Habilitadas',
            'cs': 'Zapnuto',
            'vi': 'Đã kích hoạt',
            'it': 'Abilita opzione',
            'lv': 'Iespējots',
            'pl': 'Włączone',
            'he': 'Enabled', // --- needs translation
        },
        GF_BLOCKED_ENABLED: {
            'en': 'Enabled',
            'pt': 'Habilidoso',
            'de': 'Ermöglichte',
            'fr': 'Activé',
            'es': 'Habilitadas',
            'cs': 'Zapnuto',
            'vi': 'Đã kích hoạt',
            'it': 'Abilita opzione',
            'lv': 'Iespējots',
            'pl': 'Włączone',
            'nl': 'Ingeschakeld',
            'he': 'Enabled', // --- needs translation
        },
        VF_BLOCKED_ENABLED: {
            'en': 'Enabled',
            'pt': 'Habilidoso',
            'de': 'Ermöglichte',
            'fr': 'Activé',
            'es': 'Habilitadas',
            'cs': 'Zapnuto',
            'vi': 'Đã kích hoạt',
            'it': 'Abilita opzione',
            'lv': 'Iespējots',
            'pl': 'Włączone',
            'nl': 'Ingeschakeld',
            'he': 'Enabled', // --- needs translation
        },
        DLG_VERBOSITY: {
            'en': 'Verbosity',
            'pt': 'Verbosidade',
            'de': 'Ausführlichkeit',
            'fr': 'Verbosité',
            'es': 'Verbosidad',
            'cs': 'Výřečnost',
            'vi': 'Tính dài dòng',
            'it': 'Verbosità',
            'lv': 'Runīgums',
            'pl': 'Włączone',
            'nl': 'Ingeschakeld',
            'he': 'Verbosity', // --- needs translation
        },
        DLG_VERBOSITY_MESSAGE: {
            'en': 'Display a message if a post is hidden',
            'pt': 'Exibir uma mensagem se uma postagem estiver oculta',
            'de': 'Nachricht anzeigen, wenn ein Beitrag ausgeblendet ist',
            'fr': 'Afficher un message si une publication est masquée',
            'es': 'Mostrar un mensaje si una publicación está oculta',
            'cs': 'Zobrazit zprávu, pokud je příspěvek skrytý',
            'vi': 'Hiển thị một tin nhắn nếu một bài đăng bị ẩn',
            'it': 'Visualizza un messaggio se un post è nascosto',
            'lv': 'Parādīt ziņojumu, ja raksts ir paslēpts',
            'pl': 'Wyświetlaj wiadomość, jeśli wpis jest ukryty',
            'nl': 'Een bericht weergeven als een artikel verborgen is',
            'he': 'Display a message if a post is hidden', // --- needs translation
        },
        VERBOSITY_NO_MESSAGE: {
            'en': 'no message',
            'pt': 'nenhuma mensagem',
            'de': 'keine Nachricht',
            'fr': 'pas de message',
            'es': 'Sin mensaje',
            'cs': 'žádná zpráva',
            'vi': 'không có tin nhắn',
            'it': 'Nessun messaggio',
            'lv': 'Nekādu ziņojumu',
            'pl': 'nie ma wiadomości',
            'nl': 'geen bericht',
            'he': 'no message', // --- needs translation
        },
        VERBOSITY_COLOUR: {
            'en': 'Text colour',
            'pt': 'Cor do texto',
            'de': 'Textfarbe',
            'fr': 'Couleur du texte',
            'es': 'Color del texto',
            'cs': 'Barva textu',
            'vi': 'Màu văn bản',
            'it': 'Colore del testo',
            'lv': 'Teksta krāsa',
            'pl': 'Kolor tekstu',
            'nl': 'Tekstkleur',
            'he': 'Text colour', // --- needs translation
        },
        VERBOSITY_BG_COLOUR: {
            'en': 'Background colour',
            'pt': 'Cor de fundo',
            'de': 'Hintergrundfarbe',
            'fr': 'Couleur de fond',
            'es': 'Color de fondo',
            'cs': 'Barva pozadí',
            'vi': 'Màu nền',
            'it': 'Colore di sfondo',
            'lv': 'Fona krāsa',
            'pl': 'Kolor tła',
            'nl': 'Achtergrondkleur',
            'he': 'Background colour', // --- needs translation
        },
        VERBOSITY_DEBUG: {
            'en': 'Highlight "hidden" posts',
            'pt': 'Destacar postagens "ocultas"',
            'de': 'Markieren Sie "versteckte" Beiträge',
            'fr': 'Mettez en surbrillance les messages « cachés »',
            'es': 'Destacar publicaciones "ocultas"',
            'cs': 'Zvýrazněte „skryté“ příspěvky',
            'vi': 'Đánh dấu các bài đăng "ẩn"',
            'it': 'Evidenzia i post "nascosti"',
            'lv': 'Izceliet "slēptos" rakstus',
            'pl': 'Wyróżnij „ukryte” posty',
            'nl': 'Highlight "verborgen" artikelen',
            'he': 'Highlight "hidden" posts', // --- needs translation
        },
        // CMF's customisations
        CMF_CUSTOMISATIONS: {
            'en': 'Customisations',
            'pt': 'Personalizações',
            'de': 'Anpassungen',
            'fr': 'Personnalisations',
            'es': 'Personalizaciones',
            'cs': 'Přizpůsobení',
            'vi': 'Các tùy chỉnh',
            'it': 'Personalizzazioni',
            'lv': 'Personalizēšana',
            'pl': 'Personalizacja',
            'nl': 'Personalisaties',
            'he': 'Customisations', // --- needs translation
        },
        CMF_BTN_LOCATION: {
            'en': 'Location of Clean my feeds\' button',
            'pt': 'Localização do botão Limpe meus feeds',
            'de': 'Position der Schaltfläche "Bereinige meine Feeds"',
            'fr': 'Emplacement du bouton Nettoyer mes flux',
            'es': 'Ubicación del botón Limpia mis feeds',
            'cs': 'Umístění tlačítka Vyčistěte mé kanály',
            'vi': 'Vị trí của nút Làm sạch nguồn cấp dữ liệu của tôi',
            'it': 'Posizione del pulsante Pulisci i miei feed',
            'lv': 'Pogas Tīrīt manas plūsmas atrašanās vieta',
            'pl': 'Lokalizacja przycisku Wyczyść moje kanały',
            'nl': 'Locatie van de knop Mijn feeds opschonen',
            'he': 'Location of Clean my feeds\' button', // --- needs translation
        },
        CMF_BTN_OPTION: {
            'en': ['bottom left', 'top right'],
            'pt': ['inferior esquerdo', 'superior direito'],
            'de': ['unten links', 'oben rechts'],
            'fr': ['en bas à gauche', 'en haut à droite'],
            'es': ['abajo a la izquierda', 'arriba a la derecha'],
            'cs': ['vlevo dole', 'vpravo nahoře'],
            'vi': ['dưới cùng bên trái', 'trên cùng bên phải'],
            'it': ['in basso a sinistra', 'in alto a destra'],
            'lv': ['apakšējā kreisajā stūrī', 'augšējā labajā stūrī'],
            'pl': ['lewy dolny róg', 'prawy górny róg'],
            'nl': ['linksonder', 'rechtsboven'],
            'he': ['שמאל למטה', 'ימינה למעלה'],
            'defaultValue': 0,
        },
        CMF_DIALOG_LOCATION: {
            'en': 'Location of Clean my feeds\' dialog box',
            'pt': 'Localização da caixa de diálogo Limpe meus feeds',
            'de': 'Position des Dialogfelds "Bereinige meine Feeds"',
            'fr': 'Emplacement de la boîte de dialogue Nettoyer mes flux',
            'es': 'Ubicación del cuadro de diálogo Limpia mis feeds',
            'cs': 'Umístění dialogového okna Vyčistěte mé kanály',
            'vi': 'Vị trí của hộp thoại Làm sạch nguồn cấp dữ liệu của tôi',
            'it': 'Posizione della finestra di dialogo Pulisci i miei feed',
            'lv': 'Dialoglodziņa Tīrīt manas plūsmas atrašanās vieta',
            'pl': 'Lokalizacja okna dialogowego Wyczyść moje kanały',
            'nl': 'Locatie van het dialoogvenster Mijn feeds opschonen',
            'he': 'Location of Clean my feeds\' dialog box', // --- needs translation
        },
        CMF_DIALOG_OPTION: {
            'en': ['left side', 'right side'],
            'pt': ['lado esquerdo', 'lado direito'],
            'de': ['linke Seite', 'rechte Seite'],
            'fr': ['côté gauche', 'côté droit'],
            'es': ['lado izquierdo', 'lado derecho'],
            'cs': ['levá strana', 'pravá strana'],
            'vi': ['bên trái', 'bên phải'],
            'it': ['lato sinistro', 'lato destro'],
            'lv': ['kreisā puse', 'labā puse'],
            'pl': ['lewa strona', 'prawa strona'],
            'nl': ['linkerkant', 'rechterkant'],
            'he': ['צד שמאל', 'צד ימין'],
            'defaultValue': 0,
        },
        CMF_BORDER_COLOUR: {
            'en': 'Border colour',
            'pt': 'Cor da borda',
            'de': 'Farbe der Umrandung',
            'fr': 'Couleur de bordure',
            'es': 'Color de borde',
            'cs': 'Barva ohraničení',
            'vi': 'Màu viền',
            'it': 'Colore del bordo',
            'lv': 'Apmales krāsa',
            'pl': 'Kolor obramowania',
            'nl': 'Randkleur',
            'he': 'צבע גבול',
        },
        CMF_BORDER_OPTION: {
            'defaultValue': 'orangered',
        },
        DLG_TIPS: {
            'en': 'Tips',
            'pt': 'Pontas',
            'de': 'Tipps',
            'fr': 'Des astuces',
            'es': 'Consejos',
            'cs': 'Tipy',
            'vi': 'Thủ thuật',
            'it': 'Suggerimenti',
            'lv': 'Padomi',
            'pl': 'Sugestia',
            'nl': 'Tips',
            'he': 'טיפים',
        },
        DLG_TIPS_CONTENT: {
            'en': 'Clearing your browser\'s cache will reset your settings to their default values.\n\nUse the "Export" and "Import" buttons to backup and restore your customised settings.',
            'pt': 'Limpar o cache do navegador redefinirá suas configurações para os valores padrão.\n\nUse os botões "Exportar" e "Importar" para fazer backup e restaurar suas configurações personalizadas.',
            'de': 'Wenn Sie den Cache Ihres Browsers leeren, werden Ihre Einstellungen auf die Standardwerte zurückgesetzt.\n\nVerwenden Sie die Schaltflächen "Exportieren" und "Importieren", um Ihre benutzerdefinierten Einstellungen zu sichern und wiederherzustellen.',
            'fr': 'Vider le cache de votre navigateur réinitialisera vos paramètres à leurs valeurs par défaut.\n\nUtilisez les boutons "Exporter" et "Importer" pour sauvegarder et restaurer vos paramètres personnalisés.',
            'es': 'Limpiar la memoria caché de su navegador restablecerá la configuración a sus valores predeterminados.\n\nUtilice los botones "Exportar" e "Importar" para hacer una copia de seguridad y restaurar su configuración personalizada.',
            'cs': 'Vymazáním mezipaměti prohlížeče obnovíte výchozí hodnoty nastavení.\n\nPomocí tlačítek "Export" a "Import" zálohujte a obnovte svá přizpůsobená nastavení.',
            'vi': 'Xóa bộ nhớ cache của trình duyệt sẽ đặt lại cài đặt của bạn về các giá trị mặc định của chúng. Sử dụng các nút "Xuất" và "Nhập" để sao lưu và khôi phục cài đặt tùy chỉnh của bạn.',
            'it': 'La cancellazione della cache del browser ripristinerà le impostazioni ai valori predefiniti.\n\nUtilizza i pulsanti "Esporta" e "Importa" per eseguire il backup e ripristinare le impostazioni personalizzate.',
            'lv': 'Iztīrot pārlūkprogrammas kešatmiņu, iestatījumi tiks atiestatīti uz noklusējuma vērtībām.\n\nIzmantojiet pogas "Eksportēt" un "Importēt", lai dublētu un atjaunotu pielāgotos iestatījumus.',
            'pl': 'Wyczyszczenie pamięci podręcznej przeglądarki spowoduje zresetowanie ustawień do wartości domyślnych.\n\nUżyj przycisków „Eksportuj” i „Importuj”, aby wykonać kopię zapasową i przywrócić niestandardowe ustawienia.',
            'nl': 'Als u de cache van uw browser wist, worden uw instellingen teruggezet naar hun standaardwaarden.\n\nGebruik de knoppen "Exporteren" en "Importeren" om een back-up te maken van uw aangepaste instellingen en deze te herstellen.',
            'he': 'מחיקת ההיסטורה בדפדפן תנקה את ההגדרות ותחזיר אותם לברירת המחדל.\n\nהשתמש ב"ייצא" ו"ייבא" כדי לגבות ולהחזיר את ההגדרות שלך',
        },
        DLG_BUTTONS: {
            'en': ['Save', 'Close', 'Export', 'Import'],
            'pt': ['Salvar', 'Fechar', 'Exportar', 'Importar'],
            'de': ['Speichern', 'Schließen', 'Exportieren', 'Importieren'],
            'fr': ['Sauvegarder', 'Fermer', 'Exporter', 'Importer'],
            'es': ['Guardar', 'Cerrar', 'Exportar', 'Importar'],
            'cs': ['Zachránit', 'Zavřít', 'Export', 'Import'],
            'vi': ['Lưu', 'Đóng', 'Xuất', 'Nhập'],
            'it': ['Salva', 'Chiudi', 'Esportare', 'Importare'],
            'lv': ['Saglabājiet', 'Aizveriet', 'Eksportēt', 'Importēt'],
            'pl': ['Zapisz', 'Zamknij', 'Eksport', 'Import'],
            'nl': ['Opslaan', 'Sluiten', 'Exporteren', 'Importeren'],
            'he': ['שמור', 'סגור', 'ייצא', 'ייבא'],
        },
    };
    // *** *** end of language components *** ***

    // - Feed Details variables
    // -- nb: setFeedSettings() adjusts some of these settings.
    const VARS = {
        // - langauge (default to EN)
        language: '',
        // - user options
        Options: {},
        // - blocked text
        Filters: {},
        // - Sponsored word
        sponsoredWord: [],
        sponsoredWordMP: [],
        sponsoredPaidForWords: [],
        // - Suggestions
        // -- "current" feed
        suggestions: [],
        // - block text - partial matches (heading block, content block)
        // -- "current" feed. lc = lower case.
        blockText: false,
        blockTextMatch: [],
        blockTextMatchLC: [],
        // -- news feed suggestions
        nfSuggestions: [],
        // -- groups feed suggestions
        gfSuggestions: [],
        // -- videos feed suggestions
        vfSuggestions: [],

        // - URLs for Info boxes - Information boxes that appear between the post and comments
        // -- e.g. coronavirus, climate science.
        // -- hide the info box, not the post.
        // -- paths' values must be in lowercase. code does partial match.
        // -- set pathMatch on the relevant Keywords entry.
        infoBoxes: false,
        infoBoxesPaths: [],

        // - Query String selectors for getting a collection of Feed posts / elements
        QS: '',
        newsFeedQS: 'div[role="feed"] > div',
        groupsFeedQS: 'div[role="feed"] > div',
        // - News and Groups feeds post's blocks (posts have 1-4 blocks)
        // -- used by the fn extractTextContent() and fn doMoppingInfoBox()
        postBlocksQS: ':scope > div > div > div > div > div > div > div > div > div > div > div > div > div',
        // - groups feed intro posts - exclude procseed post(s)
        // --- two variations in stucture
        groupsNonFeedsQS: `div[role="main"] > div > div > div > div:nth-of-type(2) > div:not([${postAtt}]) ,
                          div[role="main"] div[role="main"] > div > div > div > div:first-of-type > div > div:first-of-type > div:not([${postAtt}])`,
        // - non regular feed post blocks
        nonRegularPostBlocksQS: ':scope > div > div > div > div > div > div > div:first-of-type',
        // - videos feed
        videosFeedQS: 'div#watch_feed > div > div > div > div > div > div[class], #watch_feed div[data-pagelet="MainFeed"] > div > div > div > div',
        videosFeedQS2: 'div[id="watch_feed"] > div:not([class]) > div[class]:nth-of-type(2) > div > div > div:not([class]) > div[class] > div[class] > div:not([class]) > div[class]',
        // - video feed post's blocks
        videoBlockQS: ':scope > div > div > div > div > div:nth-of-type(2) > div',
        // - video "new video for you" (post above feed)
        videoNonFeedQS: `[id="watch_feed"] > div > div:first-of-type:not([data-pagelet]):not([${postAtt}-rule])`,
        videNonFeedPostBlock: ':scope > div > div:first-of-type',
        // - marketplace - exclude boxes already processed (pre May 2022)
        marketplaceQS1: `div[data-pagelet="MainFeed"] div[data-pagelet^="BrowseFeedUpsell"]:not([${postAtt}])`,
        // - marketplace - exclude boxes already processed (May 2022 ->).
        marketplaceQS2: `div[role="main"] a[href^="/ads/"]:not([${postAtt}])`,
        // - marketplace - category pages and item
        marketplaceQS3: `a[href*="/ads/"]:not([${postAtt}])`,
        // - marketplace - commerce listing pages
        marketplaceQS4: `h2 > span > span > div > a[href*="/ads/"]:not([${postAtt}])`,
        // - third column - sponsored box - set by addCSS()
        thirdColQS1: '',
        // - third column - groups suggested for you - set by addCSS() (May 2022 ->)
        thirdColQS2: '',
        // - create room (pre May 2022)
        createRoomQS1: `div[data-pagelet="VideoChatHomeUnit"]:not([${postAtt}]) , div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([${postAtt}])`,
        // - create room (May 2022 ->)
        createRoomQS2: `div:not([${postAtt}]) > div > div > div > div[data-visualcompletion="ignore-dynamic"][class=""] i[data-visualcompletion="css-img"]`,
        // - stories - (May 2022 ->)
        // storiesQS1: '[id="ssrb_stories_start"]',
        // - stories - (May 2022 ->) - becareful, may hide main feed if stories slow to show (hence [aria-label] attribute) ...
        storiesQS2: `div[role="main"] > div > div > div > div:nth-of-type(2):not([${postAtt}]) > div[aria-label]`,
        // - sponsored - paid for
        sponsoredPaidForQS: '[role="button"]',

        // - search page, "all" (top)
        searchTopQS: 'div[role="feed"] > div',

        // - Feed toggles
        isNF: false,
        isGF: false,
        isVF: false,
        isMP: false,
        isAF: false,
        isSF: false,

        // marketplace feed type (std | category)
        mpType: '',
        // marketplace - viewing an item
        mpItem: false,

        // remember current URL - used for page change detection
        prevURL: '',
        prevPathname: '',

        // number of posts to check/inspect
        // - need to re-process existing posts as sometimes fb is slow/late to populate/update them
        // - nb: fb has 2-3 "dummies" at the bottom of the feed.
        inspectPostCount: 16,
        // element containing echo message about post(s) being hidden
        echoEl: null,
        // how many consecutive posts are hidden
        echoCount: 0,
        // count of checks made for non-feed posts
        nfpLoopCount: 0,
        // max checks for non-feed posts
        nfpLoopCountLimit: 128,

        // indicate if stories was found and stop looking for it
        storiesFound: false,
        // indicate if create-room was found and stop looking for it
        crFound: false,
        // indicate if right-rail was found and stop looking for it
        // (code will set to true to stop hunting for third column)
        tcFound: false,
        // indicate if fb-meta was found and stop looking for it
        f2mFound: false,
        // indicate if survey was found and stop looking for it
        surveyFound: false,
        otherLoopCount: 0,
        otherLoopCountLimit: 32,

        // StyleSheet Id
        cssID: '',
        // CSS class names
        cssHide: '',
        cssHideEl: '',
        cssEcho: '',
        // toggle dialog button (visible if is a Feed page)
        btnToggleEl: null,
        // - script's logo
        logoHTML: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><g id="Layer" fill="currentColor">' +
            '<path id="Layer" fill-rule="evenodd" class="s0" d="m51 3.2c0.7 1.1 0.7 1-1.6 9.2-1.4 5-2.1 7.4-2.3 7.6-0.1 0.1-0.3 0.2-0.6 0.2-0.4 0-0.9-0.4-0.9-0.7 0-0.1 1-3.5 2-7.4 1.2-4 2-7.3 2-7.5 0-0.4-0.6-1-0.9-1-0.2 0-0.5 0.2-0.7 0.3-0.3 0.3-0.7 1.8-5.5 19.2l-5.3 18.9 0.9 0.5c0.5 0.3 0.9 0.5 0.9 0.5 0 0 1.3-4.4 2.8-9.8 1.5-5.3 2.8-10 2.8-10.3 0.2-0.5 0.3-0.7 0.6-0.9 0.3-0.1 0.4-0.1 0.8 0 0.2 0.2 0.4 0.3 0.4 0.5 0.1 0.2-0.4 2.2-1.5 6.1-0.9 3.2-1.6 5.8-1.6 5.9 0 0 0.5 0.1 1.3 0.1 1.9 0 2.7 0.4 3.2 1.5 0.3 0.6 0.3 2.7 0 3.4-0.3 0.9-1.2 1.4-2 1.4-0.3 0-0.5 0.1-0.5 0.1 0 0.2-2.3 20.2-2.3 20.4-0.2 0.8 0.7 0.7-14.1 0.7-15.3 0-14.3 0.1-15.3-1-0.8-0.8-1.1-1.5-1-2.9 0.2-3.6 2.7-6.7 6.3-7.8 0.4-0.2 0.9-0.3 1-0.3 0.6 0 0.6 0.1 0.1-4.5-0.3-2.4-0.5-4.4-0.5-4.5-0.1-0.1-0.3-0.1-0.7-0.2-0.6 0-1.1-0.3-1.6-1-0.3-0.4-0.3-0.5-0.4-1.8 0-1.7 0.1-2.1 0.6-2.7 0.7-0.6 1-0.7 2.5-0.8h1.3v-2.9c0-3.1 0-3.4 0.6-3.6 0.2-0.1 2.4-0.1 7.1-0.1 6.5 0.1 6.9 0.1 7.1 0.3 0.2 0.2 0.2 0.3 0.2 3.3v3h0.6l0.6-0.1 4.3-15.3c2.4-8.5 4.4-15.6 4.5-15.9 0.4-0.6 0.9-1 1.5-1.3 1.2-0.4 2.6 0.1 3.3 1.2zm-26.6 26.6h-0.7c-0.3 0-0.6 0-0.7 0 0 0.1-0.1 1.2-0.1 2.5v2.3h1.5zm3.4 0h-0.7c-0.5 0-0.9 0-0.9 0.1 0 0-0.1 1.1-0.1 2.4v2.3h1.8v-2.4zm3.4 0h-1.6v4.8h1.6zm3.2 0h-1.3v4.8h1.3zm-6.4 6.6c-7.9 0-9 0-9.2 0.2-0.3 0.2-0.3 0.3-0.3 1.3 0 0.7 0.1 1.1 0.2 1.2 0.1 0.1 2.3 0.1 7.3 0.1 6.9 0.1 7.2 0.1 7.5 0.3 0.3 0.3 0.3 1 0 1.3-0.2 0.2-0.8 0.2-6.3 0.2h-6l0.1 0.5c0 0.3 0.2 2.3 0.5 4.5l0.4 4h0.4c0.6 0 1.5-0.3 2-0.7 0.3-0.3 0.7-0.8 0.9-1.3 0.6-1.1 1.3-2 2.1-2.7 1.1-0.9 2.8-1.5 4-1.5h0.6l0.7-1.1c0.6-1 0.8-1.2 1.3-1.5 0.4-0.2 0.6-0.2 0.9-0.2 0.4 0.1 0.5 0.1 0.5-0.1 0.1-0.1 0.3-1.1 0.6-2.1 0.3-1.1 0.6-2.1 0.6-2.2 0.1-0.2-0.4-0.2-8.8-0.2zm16.' +
            '2 0h-1.5l-0.4 1.3c-0.2 0.8-0.4 1.4-0.4 1.5 0 0 0.9 0 2 0 2.3 0 2.3 0.1 2.3-1.4 0-0.9-0.1-1-0.3-1.2-0.2-0.2-0.6-0.2-1.7-0.2zm-2.8 4.7c0 0.1-0.2 0.8-0.5 1.6-0.2 1-0.3 1.4-0.2 1.5 0 0 0.3 0.2 0.6 0.4 0.4 0.4 0.4 0.5 0.5 1.2 0 0.6 0 0.7-0.8 2-0.7 1.1-0.8 1.3-1.3 1.6l-0.5 0.2v1.8c0 1.3-0.1 2-0.2 2.5-0.1 0.4-0.2 0.8-0.2 0.8 0 0 0.7 0.1 1.5 0.1 1.2 0 1.6-0.1 1.6-0.2 0-0.1 0.4-3.1 0.8-6.8 0.4-3.6 0.7-6.7 0.7-6.7-0.1-0.2-1.9-0.1-2 0zm-6.3 1.8c-0.2-0.1-0.3 0-0.9 1-0.2 0.4-0.4 0.8-0.3 0.8 0 0.1 1.1 0.7 2.3 1.5 1.3 0.7 2.4 1.4 2.5 1.5 0.3 0.1 0.3 0.1 0.8-0.8 0.3-0.6 0.6-1 0.5-1 0 0-1.1-0.7-2.4-1.5-1.3-0.8-2.4-1.4-2.5-1.5zm-4.5 2.8c-1.6 0.5-2.7 1.5-3.5 3.1-0.6 1.2-1.3 2-2.4 2.5-0.9 0.4-0.9 0.4-2.9 0.5-2.8 0.1-3.9 0.6-5.4 2.1-0.8 0.8-1 1.1-1.4 1.9-1 2.2-0.9 4 0.2 4.4 0.7 0.3 0.8 0.3 1-0.5 0.8-2.4 2.7-4.5 5.1-5.5 1.1-0.4 1.6-0.5 3.2-0.6 2-0.2 2.8-0.7 3.4-2.2 0.3-0.5 0.6-1.2 0.8-1.6 0.8-1.3 2.4-2.5 3.8-2.9 0.4-0.1 0.8-0.2 0.8-0.2q0.2-0.1-0.3-0.4c-0.3-0.2-0.6-0.4-0.6-0.5-0.1-0.3-1.1-0.3-1.8-0.1zm3.2 2.7c-0.9 0.2-2 0.8-2.8 1.5-0.7 0.6-0.8 0.9-1.6 2.6-0.7 1.5-2.2 2.5-3.9 2.7-3.4 0.4-4.3 0.8-5.8 2.2-0.7 0.8-1 1.2-1.4 1.9l-0.5 1 0.9 0.1c0.9 0 0.9 0 1.2-0.4q2.7-3.2 7.3-3.2c2.2 0 2.9-0.5 3.9-2.3 0.3-0.5 0.7-1.2 0.9-1.5 1-1.2 3-2.3 4.6-2.4l0.8-0.1-0.1-0.5c-0.1-0.8-0.3-1.2-0.9-1.4-0.7-0.2-1.9-0.3-2.6-0.2zm3.6 3.9h-0.4c-0.5 0-1.6 0.3-2.3 0.7-0.7 0.5-1.6 1.5-2.2 2.6-1.1 2.1-2.5 2.9-5.2 2.9-0.6 0-1.6 0.1-2 0.2-1 0.2-2.3 0.8-2.9 1.3l-0.4 0.4h4.1c4.6-0.1 4.7-0.1 6.5-1 0.9-0.5 1.3-0.7 2.2-1.6 1.4-1.4 2.2-3 2.5-4.9zm4.3 4.2h-1.9-1.8l-0.5 0.8c-0.6 0.9-1.5 1.9-2.4 2.6l-0.6 0.5h3.4c2.6 0 3.4 0 3.4-0.1 0-0.1 0.1-1 0.2-2z"/>' +
            '</g></svg>'
    };

    // -- which language is the FB page in?
    function setLanguageAndOptions() {
        // - run this function when HEAD is available.
        // - language (default to EN)
        // - also run getUserOptions().
        if (document.head) {
            let lang = document.head.parentNode.lang || 'en';
            VARS.language = (KeyWords.LANGUAGES.indexOf(lang) >= 0) ? lang : 'en';
            // - sponsored word
            VARS.sponsoredWord = KeyWords.SPONSORED[VARS.language];
            VARS.sponsoredWordMP = KeyWords.MP_SPONSORED[VARS.language];
            // - sponsored paid for - remove the "_____" from the keywords
            VARS.sponsoredPaidForWords = KeyWords.NF_SPONSORED_PAID[VARS.language].replaceAll('_', '').trim();
            // ...
            let result = getUserOptions()
                .then(() => {
                    return true;
                });
        }
        else {
            setTimeout(setLanguageAndOptions, 5);
        }
    }

    // -- posts CSS
    function addCSS() {
        // - CSS styles for hiding or highlighting the selected posts / element

        function generateRandomName() {
            // - generate random names (first letter must be an alphabet)
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let str = chars.charAt(Math.floor(Math.random() * (chars.length - 10)));
            for (let i = 0; i < 12; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return str;
        }
        let isNewCSS, head, styleEl, css;

        isNewCSS = true;
        if (VARS.cssID !== '') {
            // Grab the existing Stylesheet
            styleEl = document.getElementById(VARS.cssID);
            if (styleEl) {
                // -- zap out the "old" styles.
                styleEl.replaceChildren();
                isNewCSS = false;
            }
        }
        if (isNewCSS) {
            // Create the new Stylesheet
            VARS.cssID = generateRandomName().toUpperCase();
            head = document.getElementsByTagName('head')[0];
            styleEl = document.createElement('style');
            styleEl.setAttribute('type', 'text/css');
            styleEl.setAttribute('id', VARS.cssID);

            // - remember class names (for other functions to use)
            VARS.cssHide = generateRandomName(); // - the parent element - hide it's child element
            VARS.cssHideEl = generateRandomName(); // - the elment to hide (mainly for marketplace)
            VARS.cssEcho = generateRandomName();
        }

        // - insert Styles (as classes)
        // - NF/GF/VF
        // -- remove margins
        if (VARS.Options.VERBOSITY_DEBUG === false) {
            // -- not debugging, remove margins
            styleEl.appendChild(document.createTextNode(`.${VARS.cssHide}, .${VARS.cssHideEl} {margin:0 !important;}`));
        }
        // -- post wrapper's first child div (mainly for news, groups and video feeds posts)
        styleEl.appendChild(document.createTextNode(`.${VARS.cssHide} > div:first-of-type, `));
        // -- post wrapper's element (mainly for marketplace posts)
        styleEl.appendChild(document.createTextNode(`.${VARS.cssHideEl}, `));
        // -- news, groups & video posts' info boxes
        styleEl.appendChild(document.createTextNode(`.${VARS.cssHide} [${postAttIB}] `));
        // -- which styles to apply?
        if (VARS.Options.VERBOSITY_DEBUG === true) {
            styleEl.appendChild(document.createTextNode(' {border:5px dotted orange !important; width:66%;}'));
        }
        else {
            styleEl.appendChild(document.createTextNode(' {display:none !important;}'));
        }

        // - echo msg
        let colourMsg = (VARS.Options.VERBOSITY_COLOUR === '') ? '' : `color: ${VARS.Options.VERBOSITY_COLOUR}; `;
        colourMsg += (VARS.Options.VERBOSITY_BG_COLOUR === '') ? '' : `background-color: ${VARS.Options.VERBOSITY_BG_COLOUR}; `;
        css = `margin:1.25rem 0 1.5rem 0 !important; padding:0.75rem 1rem; border-radius:0.55rem; font-style:italic; ${colourMsg}`;
        styleEl.appendChild(document.createTextNode(`.${VARS.cssHide} > p {${css}}`));

        // - dailog box CSS
        // --- dialog box
        // -- position + flex
        let bcolour = (VARS.Options.CMF_BORDER_COLOUR === '') ? KeyWords.CMF_BORDER_OPTION.defaultValue : VARS.Options.CMF_BORDER_COLOUR;
        // - left / right done in fn addExtraCSS().
        css = `position:fixed; top:0.15rem; bottom:0.15rem; display:flex; flex-direction:column; width:30rem; padding:0 1rem; z-index:5; color: var(--primary-text); border:2px solid ${bcolour}; border-radius:1rem; opacity:0;`;
        styleEl.appendChild(document.createTextNode(`.fb-cmf {${css}}`));
        styleEl.appendChild(document.createTextNode('.__fb-light-mode .fb-cmf {background-color: #fefefa !important;}'));
        styleEl.appendChild(document.createTextNode('.__fb-dark-mode .fb-cmf {background-color:var(--web-wash) !important;}'));

        // -- header
        css = 'display:flex; justify-content: space-between;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header {${css}}`));

        css = 'flex-grow:0; align-self:auto; width:75px; text-align:left;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-icon {${css}}`));
        css = 'width:64px; height:64px; margin:2px 0;'
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-icon svg {${css}}`));

        css = 'flex-grow:2; align-self:auto;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-title {${css}}`));
        css = 'padding-top:1.25rem;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-lang-1 {${css}}`));
        css = 'padding-top:0.75rem;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-lang-2 {${css}}`));

        css = 'font-size:1.35rem; font-weight: 700; text-align:center;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-title > div {${css}}`));
        css = 'display:block; font-size:0.8rem; text-align:center;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-title > small {${css}}`));

        css = 'flex-grow:0; align-self:auto; width:75px; text-align:right; padding: 1.5rem 0 0 0;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-close {${css}}`));
        css = 'width:1.75rem; height:1.5rem; font-family: monospace;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf header .fb-cmf-close button {${css}}`));

        // -- content
        css = `flex:1; overflow:auto; border:2px double ${bcolour}; border-radius:0.5rem; color: var(--primary-text);`;
        styleEl.appendChild(document.createTextNode(`.fb-cmf div.content {${css}}`));
        css = 'padding:1rem; text-align:center;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf footer.buttons {${css}}`));
        css = 'margin:0.5rem; border-color:lightgrey;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf fieldset {${css}}`));
        css = 'font-weight:700;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf fieldset legend {${css}}`));
        css = 'display:inline-block; padding:0.125rem 0; width:95%; color: var(--primary-text); font-weight: normal;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf fieldset label {${css}}`));
        css = 'margin: 0 0.5rem 0 0; vertical-align:baseline;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf fieldset label input {${css}}`));
        css = 'color:darkgrey;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf fieldset label[disabled] {${css}}`));
        css = 'width:100%; height:12rem;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf fieldset textarea {${css}}`));
        css = 'background-color: lightgrey;';
        styleEl.appendChild(document.createTextNode(`.__fb-dark-mode .fb-cmf fieldset textarea, .__fb-dark-mode .fb-cmf fieldset input[type="input"] {${css}}`));
        // -- footer - buttons
        css = 'margin-left: 1rem; margin-right:1rem;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf .buttons button {${css}}`));
        // -- footer - file input
        styleEl.appendChild(document.createTextNode('.fb-cmf .fileInput {display:none;}'));
        // -- footer - import results
        css = 'font-style:italic; margin-top: 1rem;';
        styleEl.appendChild(document.createTextNode(`.fb-cmf .fileResults {${css}}`));
        // -- show dialog box (default is not to show)
        css = 'opacity:1; transform:scale(1);';
        styleEl.appendChild(document.createTextNode(`.fb-cmf.show {${css}}`));
        // - add above styles to HEAD.
        if (isNewCSS) {
            head.appendChild(styleEl);
        }

        // - set the right-rail query selector - excludes the hide class.
        // -- first rule is May 2022 ->, second is pre May 2022.
        VARS.thirdColQS1 = `div[role="complementary"] > div:first-of-type:not(.${VARS.cssHide}) > div > div > div > div > span, div[data-pagelet="RightRail"] > div:first-of-type:not(.${VARS.cssHide}) > span`;
        // -- groups - suggested for you, May 2022 ->
        VARS.thirdColQS2 = `div[role="complementary"] > div:first-of-type:not(.${VARS.cssHide}) > div > div > div > div > div`;
    }
    function addExtraCSS() {
        // - extra CSS styles
        // - fb can sometimes be a bit slow in loading certain parts of the site ...
        // - ... this function is called several ms later ...
        // - ... and when saving the options (via save button)
        let cmfBtnLocation = KeyWords.CMF_BTN_OPTION.defaultValue;
        let cmfDlgLocation = KeyWords.CMF_DIALOG_OPTION.defaultValue
        if (VARS.Options.hasOwnProperty('CMF_BTN_LOCATION')) {
            if (VARS.Options.CMF_BTN_LOCATION.toString() !== '') {
                cmfBtnLocation = VARS.Options.CMF_BTN_LOCATION;
            }
            if (VARS.Options.CMF_DIALOG_LOCATION.toString() !== '') {
                cmfDlgLocation = VARS.Options.CMF_DIALOG_LOCATION;
            }
        }
        cmfBtnLocation = cmfBtnLocation.toString();
        cmfDlgLocation = cmfDlgLocation.toString();

        let styleEl, css;

        // Grab the existing Stylesheet and amend it
        styleEl = document.getElementById(VARS.cssID);

        // - button's location.
        if (cmfBtnLocation === '1') {
            // - top right - has the buttons running across the top of the page (pre May 2022).
            css = 'margin-right: 42px;';
            if (document.querySelector('[role="banner"]')) {
                // - oldish FB structure has menu buttons across the top (changed for some users in Apr/May 2022)
                styleEl.appendChild(document.createTextNode(`div[role="banner"] > div:last-of-type div[role="navigation"] {${css}}`));
            }
            css = 'position:fixed; top:0.5rem; right:0.5rem; display:none;';
        }
        else {
            // - cmfBtnLocation === "0"
            // - bottom left - has the buttons running down the side of the page (May 2022 ->).
            css = 'position:fixed; bottom:3.2rem; left:1.1rem; display:none;';
        }
        styleEl.appendChild(document.createTextNode(`.fb-cmf-toggle {${css}}`));
        // btn - basic styling.
        styleEl.appendChild(document.createTextNode('.fb-cmf-toggle {border-radius:0.3rem;}'));
        styleEl.appendChild(document.createTextNode('.fb-cmf-toggle svg {height:32px; width:32px;}'))
        styleEl.appendChild(document.createTextNode('.fb-cmf-toggle:hover {cursor:pointer;}'));
        // - dialog box's display
        styleEl.appendChild(document.createTextNode('.fb-cmf-toggle.show {display:block;}'));
        // - dialog box's left/right + animated open/close behaviour
        if (cmfDlgLocation === '1') {
            // - right
            css = 'right:0.35rem; transform:scale(0);transform-origin:top right; transition:transform .45s ease, opacity .25s ease; ';
        }
        else {
            // - cmfDlgLocation === '0' (left)
            css = 'left:5rem; transform:scale(0);transform-origin:center center; transition:transform .45s ease, opacity .25s ease; ';
        }
        styleEl.appendChild(document.createTextNode(`.fb-cmf {${css}}`));
    }

    // -- get the user's settings ...
    async function getUserOptions() {
        // -- read in the saved data, else set defaults.
        let changed = false;
        // - reset Options
        VARS.Options = new Object();

        // - has the user previously saved options?
        // -- if yes, the update Options
        let result = await get(DBVARS.DBKey, DBVARS.ostore)
            .then((values) => {
                if (values) {
                    VARS.Options = JSON.parse(values);
                    return 1; // -- has data
                }
                else {
                    return 0; // -- no data (first time)
                }
            })
            .catch((err) => {
                console.info(`${log}getuserOptions() > get() - Error:`, err);
            });
        if (VARS.VERBOSITY_DEBUG) {
            console.info(`${log}getUserOptions() > get():`, result);
        }

        // -- check that all variables exists ... if not, assign them default values..
        // -- Sponsored (always enabled)
        if (!VARS.Options.hasOwnProperty('NF_SPONSORED')) { VARS.Options.NF_SPONSORED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('GF_SPONSORED')) { VARS.Options.GF_SPONSORED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('VF_SPONSORED')) { VARS.Options.VF_SPONSORED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('MP_SPONSORED')) { VARS.Options.MP_SPONSORED = true; changed = true; }

        // -- rename keys
        let okey = 'OTHER_STORIES';
        let nkey = 'NF_STORIES';
        if (VARS.Options.hasOwnProperty(okey)) {
            VARS.Options[nkey] = VARS.Options[okey];
            delete VARS.Options[okey];
        }
        if (!VARS.Options.hasOwnProperty(nkey)) { VARS.Options[nkey] = KeyWords[nkey].defaultEnabled; changed = true; }

        okey = 'OTHER_CREATE_ROOM';
        nkey = 'NF_CREATE_ROOM';
        if (VARS.Options.hasOwnProperty(okey)) {
            VARS.Options[nkey] = VARS.Options[okey];
            delete VARS.Options[okey];
        }
        if (!VARS.Options.hasOwnProperty(nkey)) { VARS.Options[nkey] = KeyWords[nkey].defaultEnabled; changed = true; }

        okey = 'OTHER_THIRD_COLUMN_SPONSORED';
        nkey = 'NF_THIRD_COLUMN_SPONSORED';
        if (VARS.Options.hasOwnProperty(okey)) {
            VARS.Options[nkey] = VARS.Options[okey];
            delete VARS.Options[okey];
        }
        if (!VARS.Options.hasOwnProperty(nkey)) { VARS.Options[nkey] = KeyWords[nkey].defaultEnabled; changed = true; }

        okey = 'OTHER_THIRD_COLUMN_SUGGESTED_FOR_YOU';
        nkey = 'NF_THIRD_COLUMN_SUGGESTED_FOR_YOU';
        if (VARS.Options.hasOwnProperty(okey)) {
            VARS.Options[nkey] = VARS.Options[okey];
            delete VARS.Options[okey];
        }
        if (!VARS.Options.hasOwnProperty(nkey)) { VARS.Options[nkey] = KeyWords[nkey].defaultEnabled; changed = true; }

        let okey1 = 'GF_JOIN_GROUP_1';
        let okey2 = 'GF_JOIN_GROUP_1';
        nkey = 'GF_JOIN_GROUP';
        if (VARS.Options.hasOwnProperty(okey1)) {
            VARS.Options[nkey] = (VARS.Options[okey1] || VARS.Options[okey2]);
            delete VARS.Options[okey1];
            delete VARS.Options[okey2];
        }
        if (!VARS.Options.hasOwnProperty(nkey)) { VARS.Options[nkey] = KeyWords[nkey].defaultEnabled; changed = true; }

        // -- which suggestions / info boxes / top of NF feed items have been enabled?
        VARS.infoBoxes = false;
        VARS.infoBoxesPaths = [];
        for (const key in KeyWords) {
            // -- is this key one of the News, Groups or Videos?
            if (KeyWords[key].isSuggestion) {
                // - does this key exist? if not, set default value.
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
                // - is this suggestion enabled? if yes, add to the relevant suggestions array.
                if (VARS.Options[key]) {
                    // - nb: slice(0,2) gives you nf,gf,vf,mp.
                    VARS[`${key.slice(0, 2).toLowerCase()}Suggestions`] = VARS[`${key.slice(0, 2).toLowerCase()}Suggestions`].concat(KeyWords[key][VARS.language]);
                }
            }
            else if (KeyWords[key].isInfoBox) {
                // -- information boxes (e.g. coronavirus, climate science, subscribe)
                // -- (appears between post's content and comments)
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
                if (VARS.Options[key]) {
                    VARS.infoBoxes = true;
                    VARS.infoBoxesPaths.push(KeyWords[key].pathMatch);
                }
            }
            else if (KeyWords[key].isTopOfNFFeed) {
                // -- top of nf (appears @ top of nf, not a regular post)
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
            }
        }
        let key = "NF_SPONSORED_PAID";
        if (!VARS.Options.hasOwnProperty(key)) { VARS.Options[key] = KeyWords[key].defaultEnabled; changed = true; }
        key = "VF_LIVE";
        if (!VARS.Options.hasOwnProperty(key)) { VARS.Options[key] = KeyWords[key].defaultEnabled; changed = true; }

        // -- all other options.
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_ENABLED')) { VARS.Options.NF_BLOCKED_ENABLED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_TEXT')) { VARS.Options.NF_BLOCKED_TEXT = ''; changed = true; }
        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_ENABLED')) { VARS.Options.GF_BLOCKED_ENABLED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_TEXT')) { VARS.Options.GF_BLOCKED_TEXT = ''; changed = true; }
        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_ENABLED')) { VARS.Options.VF_BLOCKED_ENABLED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_TEXT')) { VARS.Options.VF_BLOCKED_TEXT = ''; changed = true; }

        if (!VARS.Options.hasOwnProperty('VERBOSITY_LEVEL')) { VARS.Options.VERBOSITY_LEVEL = '2'; changed = true; }
        if (!VARS.Options.hasOwnProperty('VERBOSITY_COLOUR')) { VARS.Options.VERBOSITY_COLOUR = ''; changed = true; }
        if (!VARS.Options.hasOwnProperty('VERBOSITY_BG_COLOUR')) { VARS.Options.VERBOSITY_BG_COLOUR = 'lightgrey'; changed = true; }
        if (!VARS.Options.hasOwnProperty('VERBOSITY_DEBUG')) { VARS.Options.VERBOSITY_DEBUG = false; changed = true; }

        if (!VARS.Options.hasOwnProperty('CMF_BTN_LOCATION')) { VARS.Options.CMF_BTN_LOCATION = KeyWords.CMF_BTN_OPTION.defaultValue; changed = true; }
        if (!VARS.Options.hasOwnProperty('CMF_DIALOG_LOCATION')) { VARS.Options.CMF_DIALOG_LOCATION = KeyWords.CMF_DIALOG_OPTION.defaultValue; changed = true; }
        if (!VARS.Options.hasOwnProperty('CMF_BORDER_COLOUR')) { VARS.Options.CMF_BORDER_COLOUR = ''; changed = true; }

        if (changed) {
            // - save the changes ...
            // -- usually happen if first time setup or change in Options' variables.
            let result = await set(DBVARS.DBKey, JSON.stringify(VARS.Options), DBVARS.ostore)
                .then(() => {
                    return true;
                })
                .catch((err) => {
                    console.info(`${log}getUserOptions() > changed > saving - failed, Error:`, err);
                    return false;
                });
            if (VARS.Options.VERBOSITY_DEBUG) {
                if (result) {
                    console.info(`${log}Changed - success`);
                }
                else {
                    console.info(`${log}Changed - failed`);
                }
            }
        }

        // - third column - sponsored -found flag - default is false;
        //   (set to true to stop mopping up third-col)
        VARS.tcFound_Sponsored = !(VARS.Options.NF_THIRD_COLUMN_SPONSORED);
        VARS.tcFound_Suggested4U = !(VARS.Options.NF_THIRD_COLUMN_SUGGESTED_FOR_YOU);

        // - split the blocks of texts
        splitBlocksOfTexts();
        DBVARS.optionsReady = true;
    }

    function splitBlocksOfTexts() {
        // split the blocks of texts entries into arrays
        // also, get lower case versions of them
        VARS.Filters = new Object();
        VARS.Filters.NF_BLOCKED_TEXT = [];
        VARS.Filters.GF_BLOCKED_TEXT = [];
        VARS.Filters.VF_BLOCKED_TEXT = [];
        VARS.Filters.NF_BLOCKED_TEXT_LC = [];
        VARS.Filters.GF_BLOCKED_TEXT_LC = [];
        VARS.Filters.VF_BLOCKED_TEXT_LC = [];
        if (VARS.Options.NF_BLOCKED_ENABLED) {
            VARS.Filters.NF_BLOCKED_TEXT = VARS.Options.NF_BLOCKED_TEXT.split('¦¦');
            VARS.Filters.NF_BLOCKED_TEXT_LC = VARS.Filters.NF_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }
        VARS.Filters.NF_BLOCKED_ENABLED = ((VARS.Filters.NF_BLOCKED_TEXT.length > 0) && (VARS.Filters.NF_BLOCKED_TEXT[0] !== ''));

        if (VARS.Options.GF_BLOCKED_ENABLED) {
            VARS.Filters.GF_BLOCKED_TEXT = VARS.Options.GF_BLOCKED_TEXT.split('¦¦');
            VARS.Filters.GF_BLOCKED_TEXT_LC = VARS.Filters.GF_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }
        VARS.Filters.GF_BLOCKED_ENABLED = ((VARS.Filters.GF_BLOCKED_TEXT.length > 0) && (VARS.Filters.GF_BLOCKED_TEXT[0] !== ''));

        if (VARS.Options.VF_BLOCKED_ENABLED) {
            VARS.Filters.VF_BLOCKED_TEXT = VARS.Options.VF_BLOCKED_TEXT.split('¦¦');
            VARS.Filters.VF_BLOCKED_TEXT_LC = VARS.Filters.VF_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }
        VARS.Filters.VF_BLOCKED_ENABLED = ((VARS.Filters.VF_BLOCKED_TEXT.length > 0) && (VARS.Filters.VF_BLOCKED_TEXT[0] !== ''));
    }
    // -- run some functions now - not dependent on HEAD being available.
    //    (includes getUserOptions())
    setLanguageAndOptions();

    // -- dailog box for displaying options (called in runMO)
    function buildMoppingDialog() {
        // build the dialog box component ...
        // -- BODY must be available for use.
        // -- used for displaying/getting/setting the various options

        function createCB(cbName, cbKeyWord, cbReadOnly = false) {
            let div = document.createElement('div');
            let cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.name = cbName;
            cb.value = cbKeyWord;
            cb.checked = VARS.Options[cbKeyWord];
            let label = document.createElement('label');
            if (cbReadOnly) {
                cb.checked = true;
                cb.disabled = true;
                label.setAttribute('disabled', 'disabled');
            }
            label.appendChild(cb);
            if (KeyWords[cbKeyWord]) {
                if (Array.isArray(KeyWords[cbKeyWord][VARS.language]) === false) {
                    label.appendChild(document.createTextNode(KeyWords[cbKeyWord][VARS.language]));
                }
                else {
                    label.appendChild(document.createTextNode(Array.from(KeyWords[cbKeyWord][VARS.language]).join(', ')));
                }
            }
            else if (['NF_SPONSORED', 'GF_SPONSORED', 'VF_SPONSORED'].indexOf(cbKeyWord) >= 0) {
                // -- nb: above 3x NF_ values are not in KeyWords, but MP_SPONSORED is ...
                label.appendChild(document.createTextNode(KeyWords['SPONSORED'][VARS.language]));
            }
            else {
                label.appendChild(document.createTextNode(cbKeyWord));
            }
            div.appendChild(label);
            return div;
        }
        function createRB(rbName, rbValue, rbLabelText) {
            let div = document.createElement('div');
            let rb = document.createElement('input');
            rb.type = 'radio';
            rb.name = rbName;
            rb.value = rbValue;
            rb.checked = (VARS.Options[rbName] === rbValue);
            let label = document.createElement('label');
            label.appendChild(rb);
            label.appendChild(document.createTextNode(rbLabelText));
            div.appendChild(label);
            return div;
        }
        function createInput(iName, iLabel) {
            let div = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'text';
            input.name = iName;
            input.value = VARS.Options[iName];
            let label = document.createElement('label');
            label.appendChild(document.createTextNode(iLabel));
            label.appendChild(document.createElement('br'));
            label.appendChild(input);
            div.appendChild(label);
            return div;
        }

        function createDialog() {
            let dlg, hdr, hdr1, hdr2, hdr3, htxt, stxt, btn, cnt, fs, l, s, ta, footer;

            // -- wrapper
            dlg = document.createElement('div');
            dlg.id = 'fbcmf';
            dlg.className = 'fb-cmf'; // class "show" reveals the dialog.
            // -- header (logo + title + close button)
            hdr = document.createElement('header');
            hdr1 = document.createElement('div');
            hdr1.className = 'fb-cmf-icon';
            hdr1.innerHTML = VARS.logoHTML;

            hdr2 = document.createElement('div');
            hdr2.className = 'fb-cmf-title';
            htxt = document.createElement('div');
            htxt.textContent = KeyWords.DLG_TITLE['en'];
            hdr2.appendChild(htxt);
            if (VARS.language !== 'en') {
                stxt = document.createElement('small');
                stxt.textContent = `(${KeyWords.DLG_TITLE[VARS.language]})`;
                hdr2.appendChild(stxt);
                hdr2.classList.add('fb-cmf-lang-2');
            }
            else {
                hdr2.classList.add('fb-cmf-lang-1')
            }

            hdr3 = document.createElement('div');
            hdr3.className = 'fb-cmf-close';
            btn = document.createElement('button');
            btn.textContent = 'X';
            btn.addEventListener("click", toggleMD, false);
            hdr3.appendChild(btn);

            hdr.appendChild(hdr1);
            hdr.appendChild(hdr2);
            hdr.appendChild(hdr3);
            dlg.appendChild(hdr);

            // content container
            cnt = document.createElement('div');
            cnt.classList.add('content');

            // -- News Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_NF[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbNF', 'NF_SPONSORED', true));
            fs.appendChild(createCB('cbNF', 'NF_STORIES', false));
            fs.appendChild(createCB('cbNF', 'NF_CREATE_ROOM', false));
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'NF_' && KeyWords[key].isSuggestion) {
                    fs.appendChild(createCB('cbNF', key));
                }
            }
            fs.appendChild(createCB('cbNF', 'NF_SPONSORED_PAID'));
            fs.appendChild(createCB('cbNF', 'NF_THIRD_COLUMN_SPONSORED', false));
            fs.appendChild(createCB('cbNF', 'NF_THIRD_COLUMN_SUGGESTED_FOR_YOU', false));
            cnt.appendChild(fs);

            // -- Groups Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_GF[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbGF', 'GF_SPONSORED', true));
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'GF_' && KeyWords[key].isSuggestion) {
                    fs.appendChild(createCB('cbGF', key));
                }
            }
            cnt.appendChild(fs);

            // -- Watch/Videos Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VF[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbVF', 'VF_SPONSORED', true));
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'VF_' && KeyWords[key].isSuggestion) {
                    fs.appendChild(createCB('cbVF', key));
                }
            }
            fs.appendChild(createCB('cbVF', 'VF_LIVE'));
            cnt.appendChild(fs);

            // -- MarketPlace option(s)
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_MP[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbMP', 'MP_SPONSORED', true));
            cnt.appendChild(fs);

            // -- Other items options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_OTHER[VARS.language];
            fs.appendChild(l);
            for (const key in KeyWords) {
                if (KeyWords[key].isInfoBox) {
                    fs.appendChild(createCB('cbOther', key));
                }
            }
            fs.appendChild(createCB('cbOther', 'OTHER_SURVEY'));
            fs.appendChild(createCB('cbOther', 'OTHER_FB_RENAMED'));
            fs.appendChild(createCB('cbOther', 'OTHER_FB_PRIVACY_TERMS'));
            cnt.appendChild(fs);

            // -- Keywords to block - News Feed
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_NF_BLOCK[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbNFBT', 'NF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'NF_BLOCKED_TEXT';
            ta.textContent = VARS.Filters.NF_BLOCKED_TEXT.join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- Keywords to block - Groups Feed
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_GF_BLOCK[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbGFBT', 'GF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'GF_BLOCKED_TEXT';
            ta.textContent = VARS.Filters.GF_BLOCKED_TEXT.join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- Keywords to block - Watch/Videos Feed
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VF_BLOCK[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbVFBT', 'VF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'VF_BLOCKED_TEXT';
            ta.textContent = VARS.Filters.VF_BLOCKED_TEXT.join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- Verbosity
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VERBOSITY[VARS.language];
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.DLG_VERBOSITY_MESSAGE[VARS.language]}:`));
            fs.appendChild(s);
            fs.appendChild(createRB('VERBOSITY_LEVEL', '0', `<${KeyWords.VERBOSITY_NO_MESSAGE[VARS.language]}>`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '1', `${KeyWords.VERBOSITY[VARS.language][0]}______`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '2', `7${KeyWords.VERBOSITY[VARS.language][1]}`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('VERBOSITY_COLOUR', `${KeyWords.VERBOSITY_COLOUR[VARS.language]}:`));
            fs.appendChild(createInput('VERBOSITY_BG_COLOUR', `${KeyWords.VERBOSITY_BG_COLOUR[VARS.language]}:`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createCB('cbVD', 'VERBOSITY_DEBUG'));
            cnt.appendChild(fs);

            // -- cmf customisations
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.CMF_CUSTOMISATIONS[VARS.language];
            fs.appendChild(l);
            fs.appendChild(document.createTextNode(`${KeyWords.CMF_BTN_LOCATION[VARS.language]}:`));
            fs.appendChild(createRB('CMF_BTN_LOCATION', '0', KeyWords.CMF_BTN_OPTION[VARS.language][0]));
            fs.appendChild(createRB('CMF_BTN_LOCATION', '1', KeyWords.CMF_BTN_OPTION[VARS.language][1]));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(document.createTextNode(`${KeyWords.CMF_DIALOG_LOCATION[VARS.language]}:`));
            fs.appendChild(createRB('CMF_DIALOG_LOCATION', '0', KeyWords.CMF_DIALOG_OPTION[VARS.language][0]));
            fs.appendChild(createRB('CMF_DIALOG_LOCATION', '1', KeyWords.CMF_DIALOG_OPTION[VARS.language][1]));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('CMF_BORDER_COLOUR', `${KeyWords.CMF_BORDER_COLOUR[VARS.language]}:`));
            cnt.appendChild(fs);

            // -- tips
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_TIPS[VARS.language];
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(KeyWords.DLG_TIPS_CONTENT[VARS.language]));
            fs.appendChild(s);
            cnt.appendChild(fs);

            dlg.appendChild(cnt);

            // -- Actions (buttons)
            footer = document.createElement('footer');
            footer.classList.add('buttons');
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][0]; // save
            btn.addEventListener("click", saveUserOptions, false);
            footer.appendChild(btn);
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][1]; // close
            btn.addEventListener("click", toggleMD, false);
            footer.appendChild(btn);
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][2]; // export
            btn.addEventListener("click", exportUserOptions, false);
            footer.appendChild(btn);
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][3]; // import
            btn.setAttribute('id', 'BTNImport');
            footer.appendChild(btn);
            // -- file input field is hidden, but triggered by the Import button.
            let fileImport = document.createElement('input');
            fileImport.setAttribute('type', 'file');
            fileImport.setAttribute('id', `FI${postAtt}`);
            fileImport.classList.add('fileInput');
            footer.appendChild(fileImport);
            // -- import results
            let div = document.createElement('div');
            div.classList.add('fileResults');
            footer.appendChild(div);

            dlg.appendChild(footer);

            document.body.appendChild(dlg);

            // -- add event listeners to the import button and file input field
            let fileInput = document.getElementById(`FI${postAtt}`);
            fileInput.addEventListener('change', importUserOptions, false);
            // -- make the btn Import trigger file input ...
            let btnImport = document.getElementById('BTNImport');
            btnImport.addEventListener('click', function () { fileInput.click() }, false);
        }
        function updateDialog() {
            let content = document.getElementById('fbcmf').querySelector('.content');
            if (content) {
                let cbs = Array.from(content.querySelectorAll('input[type="checkbox"]'));
                cbs.forEach(cb => {
                    if (VARS.Options.hasOwnProperty(cb.value)) {
                        cb.checked = VARS.Options[cb.value];
                    }
                });
                // let rbs = content.querySelectorAll('input[type="radio"]:checked');
                let rbs = content.querySelectorAll('input[type="radio"]');
                rbs.forEach(rb => {
                    if (VARS.Options.hasOwnProperty(rb.name)) {
                        rb.checked = VARS.Options[rb.name];
                    }
                });
                let tas = Array.from(content.querySelectorAll('textarea'));
                tas.forEach(ta => {
                    if (VARS.Options.hasOwnProperty(ta.name)) {
                        ta.value = VARS.Options[ta.name].replaceAll('¦¦', '\n');
                    }
                });
                let inputs = Array.from(content.querySelectorAll('input[type="text"]'));
                inputs.forEach(inp => {
                    if (VARS.Options.hasOwnProperty[inp.name]) {
                        inp.value = VARS.Options[inp.name];
                    }
                });
            }
        }

        async function saveUserOptions(event, source = 'dialog') {
            // -- save Options in indexeddb as JSON.
            if (source === 'dialog') {
                let md, cbs, rbs, tas, inputs;

                // -- grab the dialog box and get the various options.
                md = document.getElementById('fbcmf');
                // -- checkboxes
                cbs = Array.from(md.querySelectorAll('input[type="checkbox"]'));
                cbs.forEach(cb => {
                    VARS.Options[cb.value] = cb.checked;
                });
                // -- radios
                rbs = md.querySelectorAll('input[type="radio"]:checked');
                rbs.forEach(rb => {
                    VARS.Options[rb.name] = rb.value;
                });
                // -- text input
                inputs = Array.from(md.querySelectorAll('input[type="text"]'));
                inputs.forEach(inp => {
                    VARS.Options[inp.name] = inp.value;
                });
                // -- Blocked text (textareas)
                tas = md.querySelectorAll('textarea');
                tas.forEach(ta => {
                    let txtn = ta.value.split('\n');
                    let txts = [];
                    txtn.forEach(txt => {
                        if (txt.trim().length > 0) {
                            txts.push(txt); // -- do not trim - retain entry as is.
                        }
                    });
                    VARS.Options[ta.name] = txts.join('¦¦');
                });
            }

            // -- clear out items that are not valid.
            let md = document.getElementById('fbcmf');
            let inputs = Array.from(md.querySelectorAll('input:not([type="file"]), textarea'));
            let validNames = [];
            inputs.forEach(inp => {
                validNames.push((inp.type === 'checkbox') ? inp.value : inp.name);
            });
            for (let key in VARS.Options) {
                if (validNames.indexOf(key) < 0) {
                    if (VARS.Options.VERBOSITY_DEBUG) {
                        console.info(`${log}SUO : deleting key:`, key);
                    }
                    delete VARS.Options[key];
                }
            }

            // -- save options
            let result = await set(DBVARS.DBKey, JSON.stringify(VARS.Options), DBVARS.ostore)
                .then(() => {
                    // if (VARS.Options.VERBOSITY_DEBUG) {
                    //     console.info(`${log}saveUserOptions() > set() -> Saved, Options:`, VARS.Options);
                    // }
                    // -- refresh options and split blocks of texts
                    let result2 = getUserOptions()
                        .then(() => {
                            return true;
                        });
                    return result2;
                })
                .catch((err) => {
                    console.info(`${log}saveUserOptions() > set() -> Error:`, err);
                    return false;
                });
            if (VARS.VERBOSITY_DEBUG) {
                console.info(`${log}saveUserOptions() > set() -> Saved:`, result);
            }
            // - update some variables.
            if (result) {
                setFeedSettings(true);
                addCSS();
                addExtraCSS();
            }
            document.querySelector('#fbcmf .fileResults').innerText = `Last Saved @ ${(new Date).toTimeString().slice(0, 8)}`;
        }

        function exportUserOptions() {
            // -- export user's options into a text file.
            // console.info(`${log}exportUserOptions() : Options:`,VARS.Options);
            let exportOptions = document.createElement("a");
            exportOptions.href = window.URL.createObjectURL(new Blob([JSON.stringify(VARS.Options)], { type: "text/plain" }));
            exportOptions.download = 'fb - clean my feeds - settings.json';
            exportOptions.click();
            exportOptions.remove();
            document.querySelector('#fbcmf .fileResults').innerText = 'Exported: fb - clean my feeds - settings.json';
        }
        function importUserOptions(event) {
            // -- import user's options froma text file.
            let fileResults = document.querySelector('#fbcmf .fileResults');
            let file = event.target.files[0];
            let fileN = event.target.files[0].name;
            // -- setup reader for reading in the file
            let reader = new FileReader();
            // -- what to do when reader is called.
            reader.onload = (file) => {
                try {
                    let fileContent = JSON.parse(file.target.result);
                    if (fileContent.hasOwnProperty('NF_SPONSORED') &&
                        fileContent.hasOwnProperty('GF_SPONSORED') &&
                        fileContent.hasOwnProperty('VF_SPONSORED') &&
                        fileContent.hasOwnProperty('MP_SPONSORED')
                    ) {
                        VARS.Options = fileContent;
                        //console.info(`${log}importUserOptions > reader.onload: Options:`, VARS.Options);
                        // -- save the file to the db
                        // -- save will run getUserOptions();
                        let result = saveUserOptions(null, 'file')
                            .then(() => {
                                updateDialog();
                                fileResults.innerText = `File imported: ${fileN}`;
                                return true;
                            });
                    }
                    else {
                        fileResults.innerText = `File NOT imported: ${fileN}`;
                    }
                }
                catch (e) {
                    fileResults.innerText = `File NOT imported: ${fileN}`;
                }
            }
            // -- call reader to read in the file ...
            reader.readAsText(file);
        }

        function toggleMD() {
            let dlg = document.getElementById('fbcmf');
            dlg.classList.toggle('show');
        }

        function createToggleButton() {
            let btn = document.createElement('button');
            btn.innerHTML = VARS.logoHTML;
            btn.id = 'fbcmfToggle';
            btn.title = KeyWords.DLG_TITLE[VARS.language];
            btn.className = 'fb-cmf-toggle fb-cmf-icon';
            document.body.appendChild(btn);
            btn.addEventListener("click", toggleMD, false);
            VARS.btnToggleEl = btn;
        }

        createToggleButton();
        createDialog();
    }
    // --- end of dailog code.



    // adjust some settings if URL has changed.
    function setFeedSettings(forceUpdate = false) {
        if ((VARS.prevURL !== window.location.href) || forceUpdate) {
            // - remember current page's URL
            VARS.prevURL = window.location.href;
            VARS.prevPathname = window.location.pathname;
            // - reset feeds flags
            VARS.isNF = false;
            VARS.isGF = false;
            VARS.isVF = false;
            VARS.isMP = false;
            VARS.isSF = false;
            if (VARS.prevPathname === '/') {
                VARS.isNF = true;
                VARS.QS = VARS.newsFeedQS;
                VARS.suggestions = VARS.nfSuggestions;
                VARS.blockText = VARS.Filters.NF_BLOCKED_ENABLED;
                VARS.blockTextMatch = VARS.Filters.NF_BLOCKED_TEXT;
                VARS.blockTextMatchLC = VARS.Filters.NF_BLOCKED_TEXT_LC;
            }
            else if (['/groups/feed/', '/groups/feed'].indexOf(VARS.prevPathname) >= 0) {
                VARS.isGF = true;
                VARS.QS = VARS.groupsFeedQS;
                VARS.suggestions = VARS.gfSuggestions;
                VARS.blockText = VARS.Filters.GF_BLOCKED_ENABLED;
                VARS.blockTextMatch = VARS.Filters.GF_BLOCKED_TEXT;
                VARS.blockTextMatchLC = VARS.Filters.GF_BLOCKED_TEXT_LC;
            }
            else if (['/watch/', '/watch'].indexOf(VARS.prevPathname) >= 0) {
                VARS.isVF = true;
                if (VARS.prevURL.indexOf('?ref=search&') >= 0) {
                    // searched & watching a video, has more videos below it. has a slightly different layout structure.
                    VARS.QS = VARS.videosFeedQS2;
                }
                else {
                    // bog standard video page/layout.
                    VARS.QS = VARS.videosFeedQS;
                }
                VARS.suggestions = VARS.vfSuggestions;
                VARS.blockText = VARS.Filters.VF_BLOCKED_ENABLED;
                VARS.blockTextMatch = VARS.Filters.VF_BLOCKED_TEXT;
                VARS.blockTextMatchLC = VARS.Filters.VF_BLOCKED_TEXT_LC;
            }
            else if (VARS.prevPathname.indexOf('/marketplace') >= 0) {
                VARS.isMP = true;
                VARS.QS = VARS.marketplaceQS1;
                VARS.suggestions = [];
                VARS.blockText = false;
                VARS.blockTextMatch = [];
                VARS.blockTextMatchLC = [];
                VARS.mpType = '';
                VARS.mpItem = false;
                //let mpf = Array.from(document.querySelectorAll('div[data-pagelet="MainFeed"]')); // pre May 2022
                let mpf = Array.from(document.querySelectorAll('div[role="main"]')); // May 2022+
                if (VARS.prevPathname.indexOf('/category/') >= 0) {
                    // - category feed (doesn't have the data-pagelet attribute)
                    VARS.mpType = 'category';
                }
                else if (mpf.length > 0) {
                    // - standard feed (main feed + locations)
                    VARS.mpType = 'std';
                }
                else {
                    // - possibly a category page.
                    mpf = Array.from(document.querySelectorAll('div[aria-label*="Marketplace"][role="main"]'));
                    if (mpf.length === 1) {
                        VARS.mpType = 'category'
                    }
                    else {
                        // - page is slow to be loaded, treat as std page
                        VARS.mpType = 'std';
                    }
                }
                if (VARS.isMP && VARS.prevPathname.indexOf('/item/') >= 0) {
                    VARS.mpItem = true;
                }
                // console.info(`${log}setFeedSettings() : isMP, mpType, mpItem:`, VARS.isMP, VARS.mpType, VARS.mpItem);
            }
            else if (VARS.prevPathname.indexOf('/commerce/listing/') >= 0) {
                // - view a group's for sale post and is redirected to marketplace ..
                VARS.isMP = true;
                VARS.QS = VARS.marketplaceQS3;
                VARS.suggestions = [];
                VARS.blockText = false;
                VARS.blockTextMatch = [];
                VARS.blockTextMatchLC = [];
                VARS.mpType = 'commerce';
                VARS.mpItem = false;
            }
            else if (['/search/top/', '/search/top', '/search/posts/', '/search/posts'].indexOf(VARS.prevPathname) >= 0) {
                // -- search results page : "All" and "Posts"
                VARS.isSF = true;
                VARS.QS = VARS.searchTopQS;
                VARS.suggestions = [];
                VARS.blockText = false;
                VARS.blockTextMatch = [];
                VARS.blockTextMatchLC = [];
            }
            else {
                VARS.QS = '';
                VARS.suggestions = [];
                VARS.blockText = false;
                VARS.blockTextMatch = [];
                VARS.blockTextMatchLC = [];
            }
            VARS.isAF = (VARS.isNF || VARS.isGF || VARS.isVF || VARS.isMP || VARS.isSF);

            if (VARS.isAF) {
                if (VARS.btnToggleEl) VARS.btnToggleEl.classList.add('show');
            }
            else {
                if (VARS.btnToggleEl) VARS.btnToggleEl.classList.remove('show');
            }

            // - reset count of consecutive posts hidden
            VARS.echoCount = 0;
            // - reset non-feed-posts count
            VARS.nfpLoopCount = 0;
            // - reset stories found flag
            VARS.storiesFound = (VARS.Options.NF_STORIES === false);
            // - reset create-room found flag
            VARS.crFound = (VARS.Options.NF_CREATE_ROOM === false);
            // - reset third-column found flags
            // (set to true to stop mopping up the tc)
            VARS.tcFound_Sponsored = (VARS.Options.NF_THIRD_COLUMN_SPONSORED === false);
            VARS.tcFound_Suggested4U = (VARS.Options.NF_THIRD_COLUMN_SUGGESTED_FOR_YOU === false);

            // - reset f2m and survey found flags
            VARS.f2mFound = (VARS.Options.OTHER_FB_RENAMED === false);
            VARS.surveyFound = (VARS.Options.OTHER_SURVEY === false);
            VARS.fprivacyFound = (VARS.Options.OTHER_FB_PRIVACY_TERMS === false);
            // console.info(`${log}SF:`, VARS.surveyFound);
            VARS.otherLoopCount = 0;

            // console.info(`${log}setFeedSettings() : VARS:`, VARS.isAF, VARS.isNF, VARS.isGF, VARS.isVF, VARS.isMP, VARS.isSF);
            return true;
        }
        else {
            return false;
        }
    }
    function scanTreeForText(theNode) {
        let arrayTextValues = [];
        let n,
            walk = document.createTreeWalker(theNode, NodeFilter.SHOW_TEXT, null, false);
        while ((n = walk.nextNode())) {
            let val = n.textContent.trim();
            if ((val !== '') && (val.length > 1)) {
                // - keep 2+ char strings.
                arrayTextValues.push(val);
            }
        }
        return arrayTextValues;
    }

    function extractTextContent(post, selector, maxBlocks) {
        // - get the text node values of the regular feed posts
        // -- scan the top portion of the posts (first maxBlocks blocks)
        // -- parameters:
        //    post: post to scan
        //    selector: querySelector's query
        //    maxBlocks: max number of blocks to scan
        let blocks = Array.from(post.querySelectorAll(selector));
        let arrayTextValues = [];
        if (blocks.length) {
            // - process first maxBlocks blocks
            // - block 0 = Suggested headings, block 1 = title/heading, block 2 = content, block 3 = info box / comments, block 4 = comments
            // - nb: some suggested posts only have one block ...
            let bL = Math.min(maxBlocks, blocks.length);
            for (let b = 0; b < bL; b++) {
                if (blocks[b].innerHTML.length > 0) {
                    arrayTextValues = arrayTextValues.concat(scanTreeForText(blocks[b]));
                }
            }
        }
        return arrayTextValues;
    }
    function extractTextContentVF(post, selector, whichBlock) {
        // - get the text node values of the regular feed posts
        // -- scan a certain block in the posts
        // -- parameters:
        //    post: post to scan
        //    selector: querySelector's query
        //    whichBlock: the block to scan for text (0 = first block ...)
        let blocks = Array.from(post.querySelectorAll(selector));
        let arrayTextValues = [];
        if ((blocks.length - 1) >= whichBlock) {
            // - block 0 = Suggested headings, block 1 = title/heading, block 2 = content, block 3 = info box / comments, block 4 = comments
            // - nb: some suggested posts only have one block ...
            let blockToScan = blocks[whichBlock];
            if (blockToScan.innerHTML.length > 0) {
                arrayTextValues = arrayTextValues.concat(scanTreeForText(blockToScan));
            }
        }
        return arrayTextValues;
    }

    function echoHiddenPost(post, reason) {
        if (VARS.isMP) {
            // -- marketplace don't display a msg.
            return true;
        }
        if ((parseInt(VARS.Options.VERBOSITY_LEVEL, 10) > 0) && (reason !== '')) {
            if (VARS.Options.VERBOSITY_LEVEL === '1') {
                VARS.echoCount = 1;
            }
            if (VARS.echoCount < 2) {
                // - 1 post hidden
                let echoEl = document.createElement('p');
                echoEl.textContent = KeyWords.VERBOSITY[VARS.language][0] + reason;
                // - add after post being hidden (issue with first post being hidden & fb updating it)
                post = post.querySelector(':scope div:first-of-type');
                if (post) {
                    post.after(echoEl);
                    VARS.echoEl = echoEl;
                    return true;
                }
                else {
                    // post has been changed while being processed (very rare)
                    return false;
                }
            }
            else {
                // - 2+ posts hidden
                VARS.echoEl.textContent = VARS.echoCount + KeyWords.VERBOSITY[VARS.language][1];
                return true;
            }
        }
        return true;
    }
    function hide(post, reason) {
        // hide something ..
        // - also call up echo 'post is hidden' text functions
        if (echoHiddenPost(post, reason)) {
            post.classList.add((VARS.isMP) ? VARS.cssHideEl : VARS.cssHide);
            // - enable the following if wanting to inspect each post's reason for being hidden (in developer's tools)
            post.setAttribute(`${postAtt}-rule`, reason);
        }
    }
    function checkText(text) {
        // - fb is using ASCII code 160 for whitespace ...
        return text.replaceAll(String.fromCharCode(160), String.fromCharCode(32));
    }

    function isSponsored(post) {
        // Is it a sponsored post?
        // -- find the block of code that usually holds the post's timestamp / sponsored text.
        // -- there are various methods for displaying sponsored text.

        let daText = '';

        // -- try the Flex/Order structure
        let elWrapper = post.querySelector( 'span > span > span > a[href^="?"] > span > span[class] > [style*="order"], ' +
                                            'span > span > span > a[href="#"] > span > span[class] > [style*="order"], ' +
                                            'span > span > span > a[href^="?"] > span > span[class] > [style*="display"], ' +
                                            'span > span > span > a[href="#"] > span > span[class] > [style*="display"], '+
                                            'span > span > span > a[href*="/ads/"] > span > span[class] > [style*="order"], ' +
                                            'span > span > span > a[href*="/ads/"] > span > span[class] > [style*="display"]');
        if (elWrapper) {
            // -- found a regular post structure
            let arrText = [];
            let cs = window.getComputedStyle(elWrapper);
            // wrapper's order - set to 0 if has a value (css will ignore other values)
            let wrapperOrder = (cs.order !== "") ? 0 : -1;
            elWrapper.childNodes.forEach((cn) => {
                if (cn.nodeType === Node.ELEMENT_NODE) {
                    let cs = window.getComputedStyle(cn);
                    if ((cs.position === 'relative') && (cs.display != 'none')) {
                        arrText[parseInt(cs.order, 10)] = cn.textContent;
                    }
                }
                else if ((cn.nodeType === Node.TEXT_NODE) && (wrapperOrder >= 0)) {
                    let nv = cn.nodeValue.replaceAll(String.fromCharCode(10), '');
                    if (nv.length > 0) {
                        arrText[wrapperOrder] = nv;
                    }
                }
            });
            daText = checkText(arrText.join('')).trim();
        }
        else {
            // -- try the non-Flex/Order structure
            elWrapper = post.querySelector( 'span > span > span > a[href^="?"] > span > span[class] > [class], ' +
                                            'span > span > span > a[href="#"] > span > span[class] > [class], ' +
                                            'span > span > span > a[href*="/ads/"] > span > span[class] > [class] ' );
            if (elWrapper) {
                // -- found a regular post structure (Portugese, Italian)
                daText = '';
                elWrapper.childNodes.forEach((cn) => {
                    if (cn.nodeType === Node.ELEMENT_NODE) {
                        let cs = window.getComputedStyle(cn);
                        if ((cs.position === 'relative') && (cs.display != 'none')) {
                            daText += cn.textContent;
                        }
                    }
                    else if (cn.nodeType === Node.TEXT_NODE) {
                        let nv = cn.nodeValue.replaceAll(String.fromCharCode(10), '');
                        if (nv.length > 0) {
                            daText += nv;
                        }
                    }
                });
                daText = checkText(daText).trim();
            }
            else {
                // --- try the non-obfuscated structure
                elWrapper = post.querySelector('span > span > span > a[href="#"] > span, span > span > span > a[href*="/ads/"] > span');
                if (elWrapper && elWrapper.children.length == 0) {
                    daText = elWrapper.textContent;
                }
            }
        }
        //console.info(`${log}is Sponsored post:`, `>${VARS.sponsoredWord}<`, `>${daText}<`, elWrapper);
        return ((daText.length > 0) && (VARS.sponsoredWord === daText));

    }
    function isSuggested(post, isRegularPost) {
        // - check for suggestions
        // -- regular posts - scan first 2 blocks, otherwise first block.
        let postBlocks = (isRegularPost) ? VARS.postBlocksQS : (VARS.isVF) ? VARS.videNonFeedPostBlock : VARS.nonRegularPostBlocksQS;
        let ptexts = (isRegularPost) ? extractTextContent(post, postBlocks, 2) : extractTextContent(post, postBlocks, 1);
        let suggestionIndex = -1;
        for (let p = 0, ptL = ptexts.length; p < ptL; p++) {
            suggestionIndex = VARS.suggestions.indexOf(ptexts[p]);
            // console.info(log + 'isSuggested:', suggestionIndex, p, ptexts, VARS.suggestions, post);
            if (suggestionIndex >= 0) {
                break;
            }
        }
        return suggestionIndex;
    }
    function isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- regular posts - scan first 1st & 3rd blocks
        let ptexts = (VARS.isVF) ? extractTextContent(post, VARS.videoBlockQS, 1) : extractTextContent(post, VARS.postBlocksQS, 3);
        ptexts = ptexts.join(' ').toLowerCase();
        let blockedIndex = -1;
        for (let b = 0, btL = VARS.blockTextMatchLC.length; b < btL; b++) {
            blockedIndex = ptexts.indexOf(VARS.blockTextMatchLC[b]);
            if (blockedIndex >= 0) {
                // before breaking out, set the index position of the blocked text that matched.
                blockedIndex = b;
                break;
            }
        }
        return blockedIndex;
    }
    function isSponsoredPaidFor(post) {
        // - check for 'Sponsored · Paid for by ______'
        if (VARS.Options.NF_SPONSORED_PAID === true) {
            // look for certain elements
            let els = Array.from(post.querySelectorAll(VARS.sponsoredPaidForQS));
            // scan the first few elements for the keyword ...
            if (els.length > 0) {
                let eL = Math.min(5, els.length);
                for (let i = 0; i < eL; i++) {
                    let etxt = els[i].textContent;
                    if (etxt.indexOf(VARS.sponsoredPaidForWords) >= 0) {
                        return true;
                    }
                }
            }
        }
    }
    function isVideoLive(post) {
        // - check for "LIVE" indicator on videos
        if (VARS.Options.VF_LIVE === true) {
            let ptexts = extractTextContentVF(post, VARS.videoBlockQS, 1);
            if (ptexts.length > 0) {
                return (ptexts[0].toUpperCase() === KeyWords.VF_LIVE[VARS.language].toUpperCase());
            }
            else {
                return false
            }
        }
        return false;
    }

    function doMoppingStories() {
        if (VARS.Options.NF_STORIES) {
            let stories = Array.from(document.querySelectorAll(VARS.storiesQS2));
            if (stories.length > 0) {
                for (let i = 0; i < stories.length; i++) {
                    let sbox = stories[i].parentElement;
                    if (!sbox.hasAttribute(postAtt)) {
                        let slink = sbox.querySelector('a[href^="/stories/"]');
                        if (slink) {
                            sbox.setAttribute(postAtt, sbox.innerHTML.length);
                            VARS.storiesFound = true;
                            hide(sbox, '');
                            sbox.setAttribute(`${postAtt}-rule`, KeyWords.NF_STORIES[VARS.language]);
                        }
                    }
                }
            }
        }
    }
    function doMoppingCreateRoom() {
        if (VARS.Options.NF_CREATE_ROOM) {
            let createRoom = Array.from(document.querySelectorAll(VARS.createRoomQS1));
            if (createRoom.length > 0) {
                // pre May 2022
                for (let i = 0; i < createRoom.length; i++) {
                    createRoom[i].setAttribute(postAtt, createRoom[i].innerHTML.length);
                    // - get the room's wrapper and hide the room at that level.
                    createRoom[i] = createRoom[i].parentElement.parentElement;
                    // - stop checking for create room element
                    VARS.crFound = true;
                    hide(createRoom[i], '');
                    createRoom[i].setAttribute(`${postAtt}-rule`, KeyWords.NF_CREATE_ROOM[VARS.language]);
                    break;
                }
            }
            else {
                // May 2022 ->
                createRoom = Array.from(document.querySelectorAll(VARS.createRoomQS2));
                if (createRoom.length > 0) {
                    for (let i = 0; i < createRoom.length; i++) {
                        let createRoomWrapper = createRoom[i].parentElement.closest('div[data-visualcompletion').parentElement.parentElement.parentElement.parentElement;
                        createRoomWrapper.setAttribute(postAtt, createRoomWrapper.innerHTML.length);
                        // - stop checking for create room element
                        VARS.crFound = true;
                        hide(createRoomWrapper, '');
                        createRoomWrapper.setAttribute(`${postAtt}-rule`, KeyWords.NF_CREATE_ROOM[VARS.language]);
                        break;
                    }
                }
            }
        }
    }
    let tcCountFound = 0;
    function doMoppingThirdColumn(tcEntry, tcbox) {
        //console.info(log+'dMoppingThirdCol:', tcEntry, tcbox);
        // - third column, sponsored box.
        if (tcEntry === 1) {
            if (tcbox) {
                if (!tcbox.classList.contains(VARS.cssHide)) {
                    let ptexts = scanTreeForText(tcbox);
                    // console.info(`${log}tcbox tc:`, ptexts);
                    if (ptexts.indexOf(VARS.sponsoredWord) >= 0) {
                        VARS.echoCount = 0;
                        hide(tcbox, VARS.sponsoredWord);
                        // make it stop checking third-col.
                        tcCountFound++;
                        if (tcCountFound > 3) {
                            VARS.tcFound_Sponsored = true;
                        }
                    }
                }
            }
        }
        // - third column, groups suggested for you (news feed)
        else if (tcEntry === 2) {
            if (tcbox) {
                if (!tcbox.classList.contains(VARS.cssHide)) {
                    let ptexts = scanTreeForText(tcbox);
                    //console.info(`${log}tcbox scanTreeForText():`, VARS.language, KeyWords.NF_SUGGESTED_FOR_YOU[VARS.language], ptexts);
                    let pidx = ptexts.indexOf(KeyWords.NF_SUGGESTED_FOR_YOU[VARS.language]);
                    if (pidx === 0 || pidx === 1) {
                        VARS.echoCount = 0;
                        hide(tcbox, KeyWords.NF_SUGGESTED_FOR_YOU[VARS.language]);
                        // make it stop checking third-col.
                        tcCountFound++;
                        if (tcCountFound > 3) {
                            VARS.tcFound_Suggested4U = true;
                        }
                    }
                }
            }
        }
    }
    function doMoppingInfoBoxes(post) {
        // hide the info boxes that appear in posts having a certain topic.
        if ((VARS.infoBoxes) && (VARS.infoBoxesPaths.length > 0)) {
            let blocks; // - post's major blocks (sections)
            let minNumBlocks; // - minimum number of blocks in this post that has an info box
            let infoBlock; // - which block has the info box
            if (VARS.isNF || VARS.isGF) {
                // - block 0 = friend posted then commented | shop added | suggested
                // - block 1 = title/heading, date/time | group name, author, date/time
                // - block 2 = content
                // - block 3 = info box OR comments
                // - block 4 = comments (if no info box)
                blocks = post.querySelectorAll(`${VARS.postBlocksQS}:not([msz])`);
                minNumBlocks = 5;
                infoBlock = 3;
            }
            else if (VARS.isVF) {
                // - block 0 = title/heading,
                // - block 1 = video
                // - block 2 = info box OR comments
                // - block 3 = comments (if no info box)
                blocks = post.querySelectorAll(`${VARS.videoBlockQS}:not([msz])`);
                minNumBlocks = 4;
                infoBlock = 2;
            }
            else {
                return;
            }
            if (blocks.length >= minNumBlocks) {
                let block = blocks[infoBlock];
                if (!block.hasAttribute(postAtt)) {
                    for (let j = 0, jL = VARS.infoBoxesPaths.length; j < jL; j++) {
                        let links = Array.from(block.querySelectorAll(`a[href*="${VARS.infoBoxesPaths[j]}"]`));
                        //console.info(log+"checking:", VARS.infoBoxesPaths[j], links);
                        if (links.length > 0) {
                            block.setAttribute(postAtt, block.innerHTML.length);
                            block.setAttribute(`${postAtt}-IB`, VARS.infoBoxesPaths[j]);
                            // - hide with no echo msg.
                            hide(block, '');
                            break;
                        }
                    }
                }
            }
        }
    }

    function doMoppingOthers() {
        // hide fb is meta and survey boxes
        let mainFeed = document.querySelector('div[role="feed"]');
        if (mainFeed) {
            let parentEl = mainFeed.parentElement.parentElement;
            if (parentEl.tagName !== 'BODY') {
                // - [role="feed"] must exists
                // -- if parentElement is BODY, skip this round ...
                // -- not all elements have been created - 'div[role="feed"]' one of the first few ...
                if (VARS.f2mFound === false) {
                    let linkEl = parentEl.querySelector(`a[href*="${KeyWords.OTHER_FB_RENAMED.urlMatch}"]:not([${postAtt}])`);
                    if (linkEl) {
                        // -- grab the container (7 parent nodes up)
                        let boxEl = linkEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                        linkEl.setAttribute(postAtt, linkEl.innerHTML.length);
                        boxEl.setAttribute(postAtt, boxEl.innerHTML.length);
                        hide(boxEl, KeyWords.OTHER_FB_RENAMED[VARS.language]); // - fb removes the hidden message, so skip that bit.
                    }
                    VARS.f2mFound = true;
                }
                if (VARS.fprivacyFound === false) {
                    let linkEl = parentEl.querySelector(`a[href*="${KeyWords.OTHER_FB_PRIVACY_TERMS.pathMatch}"]:not([${postAtt}])`);
                    if (linkEl) {
                        // -- grab the container (7 parent nodes up)
                        let boxEl = linkEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        linkEl.setAttribute(postAtt, linkEl.innerHTML.length);
                        boxEl.setAttribute(postAtt, boxEl.innerHTML.length);
                        hide(boxEl, KeyWords.OTHER_FB_PRIVACY_TERMS[VARS.language]); // - fb removes the hidden message, so skip that bit.
                    }
                    VARS.fprivacyFound = true;
                }
                //console.info(`${log}vSF:`, VARS.surveyFound, VARS.surveyFound === false, VARS.otherLoopCount);
                if (VARS.surveyFound === false) {
                    let linkEl = parentEl.querySelector(`a[href*="${KeyWords.OTHER_SURVEY.pathMatch}"]:not([${postAtt}])`);
                    if (linkEl) {
                        // -- grab the container (7 parent nodes up)
                        let boxEl = linkEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                        linkEl.setAttribute(postAtt, linkEl.innerHTML.length);
                        boxEl.setAttribute(postAtt, boxEl.innerHTML.length);
                        hide(boxEl, KeyWords.OTHER_SURVEY[VARS.language]); // - fb removes the hidden message, so skip that bit.
                    }
                    //VARS.surveyFound = true; - disabled 25/03/2022 - fb recreated after being hidden.
                }
                VARS.otherLoopCount++;
                if (VARS.otherLoopCount >= VARS.otherLoopCountLimit) {
                    VARS.surveyFound = true;
                    VARS.f2mFound = true;
                }
            }
        }
    }

    function doMopping() {
        // News/Groups/Videos/Search Feed
        let posts = Array.from(document.querySelectorAll(VARS.QS));
        if (posts.length) {
            // - consecutive hidden posts count
            VARS.echoCount = 0;
            // - skip the first lot of posts already processed
            let quickScanCount = 0;
            if (posts.length - VARS.inspectPostCount > 0) {
                quickScanCount = posts.length - VARS.inspectPostCount;
                for (let i = 0; i < quickScanCount; i++) {
                    if (posts[i].classList.contains(VARS.cssHide)) {
                        VARS.echoCount++;
                    }
                    else {
                        VARS.echoCount = 0;
                    }
                }
            }
            // - check the posts
            for (let i = quickScanCount, iL = posts.length; i < iL; i++) {
                let post = posts[i];
                if (post.textContent.length > 0) {
                    let hiding = false;
                    if (post.classList.contains(VARS.cssHide)) {
                        hiding = true;
                        VARS.echoCount++;
                    }
                    else if ((post.hasAttribute(postAtt) && (parseInt(post.getAttribute(postAtt), 10) === post.innerHTML.length))) {
                        // post size has not changed
                        // (if already hidden, previous rule would have caught it)
                        hiding = false;
                    }
                    else {
                        // - post is new or updated

                        // - record size of post
                        post.setAttribute(postAtt, post.innerHTML.length);

                        // - check for suggestions, blocked text, info boxes.
                        if (VARS.isNF || VARS.isGF || VARS.isVF) {
                            let suggestionIndex = isSuggested(post, true);
                            if (suggestionIndex >= 0) {
                                VARS.echoCount++;
                                hiding = true;
                                hide(post, VARS.suggestions[suggestionIndex]);
                                break;
                            }
                            else if (isSponsored(post)) {
                                VARS.echoCount++;
                                hiding = true;
                                hide(post, VARS.sponsoredWord);
                                break;
                            }
                            else if (VARS.isNF && isSponsoredPaidFor(post)) {
                                // - (news feed only)
                                VARS.echoCount++;
                                hiding = true;
                                hide(post, VARS.sponsoredPaidForWords);
                                break;
                            }
                            else if (VARS.isVF && isVideoLive(post)) {
                                // - (video feed only) - is !!!LIVE!!!
                                VARS.echoCount++;
                                hiding = true;
                                hide(post, KeyWords.VF_LIVE[VARS.language]);
                                break;
                            }
                            if (!hiding && VARS.blockText) {
                                // - try partial text matches
                                let blockedIndex = isBlockedText(post);
                                if (blockedIndex >= 0) {
                                    VARS.echoCount++;
                                    hiding = true;
                                    hide(post, VARS.blockTextMatch[blockedIndex]);
                                    break;
                                }
                            }
                            if (!hiding) {
                                // -- info boxes that appear between post article and comments.
                                doMoppingInfoBoxes(post);
                            }
                        }
                        else if (VARS.isSF) {
                            if (isSponsored(post)) {
                                VARS.echoCount++;
                                hiding = true;
                                hide(post, VARS.sponsoredWord);
                                break;
                            }
                        }
                    }
                    // - a clean post ..
                    if (!hiding) {
                        VARS.echoCount = 0;
                    }
                }
            }
        }
    }
    function doMoppingNonFeedPosts(nfQS) {
        // check Groups' and Videos' non-feed post(s)
        // - these are the "intro" posts that appear above the feed's title.
        // -- this function is called repeatedly a few times - up to VARS.inspectPostCount.
        //    (due to some posts being latecomers)
        let posts = Array.from(document.querySelectorAll(nfQS));
        if (posts.length > 0) {
            for (let i = 0, iL = posts.length; i < iL; i++) {
                let post = posts[i];
                if ((post.innerHTML.length < 129) || (post.textContent.length < 1)) {
                    // skip (flag them to be ignored)
                    if (!post.hasAttribute(postAtt)) {
                        post.setAttribute(postAtt, post.innerHTML.length);
                    }
                }
                else {
                    let suggIdx = isSuggested(post, false);
                    if (suggIdx >= 0) {
                        VARS.echoCount = 1;
                        hide(post, VARS.suggestions[suggIdx]);
                        post.setAttribute(postAtt, post.innerHTML.length);
                    }
                }
            }
        }
        VARS.nfpLoopCount++;
    }
    function doMoppingMP() {
        // MarketPlace Feeds
        if (VARS.mpType === 'std') {
            // -- MainFeed:
            // --- get collection of blocks (which haven't been read/processed)

            // pre May 2021::
            let mpblocks = Array.from(document.querySelectorAll(VARS.marketplaceQS1));
            if (mpblocks.length > 0) {
                // - pre May 2022 structure
                for (let i = 0, iL = mpblocks.length; i < iL; i++) {
                    let mpblock = mpblocks[i];
                    // console.info(`${log}mpblock:`, mpblock);
                    // - does this block of boxes have the a sponsored one?
                    // -- use the href*=/ads/ detection method - not search for the sponsored word
                    let splinks = Array.from(mpblock.querySelectorAll(`a[href*="/ads/"]:not([${postAtt}])`));
                    if (splinks.length > 0) {
                        // -- hide the heading (first of splinks)
                        let mpBox = splinks[0].parentElement;
                        hide(mpBox, VARS.sponsoredWordMP);
                        // -- hide the content (second of splinks)
                        mpBox = splinks[1].parentElement.closest('a').parentElement.parentElement.parentElement;
                        hide(mpBox, VARS.sponsoredWordMP);
                        splinks[0].setAttribute(postAtt, splinks[0].innerHTML.length);
                        splinks[1].setAttribute(postAtt, splinks[1].innerHTML.length);
                    }
                    mpblock.setAttribute(postAtt, mpblock.innerHTML.length);
                }
            }
            else {
                let spLinks = Array.from(document.querySelectorAll(VARS.marketplaceQS2));
                if (spLinks.length > 1) {
                    if (spLinks[0].classList.length !== spLinks[1].classList.length) {
                        // May 2022 structure - heading and content flagged as sponsored
                        for (let i = 0, iL = spLinks.length; i < iL; i++) {
                            let link = spLinks[i];
                            let pbox = link.parentElement;
                            if (pbox.nodeName === "OBJECT") {
                                // - content
                                pbox = pbox.closest('a').parentElement.parentElement.parentElement;
                            }
                            else {
                                // - heading (do nothing)
                            }
                            if (pbox.innerHTML.length > 0) {
                                link.setAttribute(postAtt, link.innerHTML.length);
                                pbox.setAttribute(postAtt, pbox.innerHTML.length);
                                hide(pbox, VARS.sponsoredWordMP);
                            }
                        }
                    }
                    else {
                        // June/July 2022 structure - heading is flagged as sponsored, but content isn't ...
                        if (spLinks.length > 0) {
                            for (let i = 0, iL = spLinks.length; i < iL; i++) {
                                let spLink = spLinks[i];
                                let hbox = spLink.parentElement;
                                let cbox = hbox.parentElement.parentElement.parentElement.nextSibling.firstElementChild;
                                spLink.setAttribute(postAtt, spLink.innerHTML.length);
                                hbox.setAttribute(postAtt, hbox.innerHTML.length);
                                cbox.setAttribute(postAtt, cbox.innerHTML.length);
                                hide(hbox, VARS.sponsoredWordMP);
                                hide(cbox, VARS.sponsoredWordMP);
                            }
                        }
                    }
                }            }

            if (VARS.mpItem) {
                doMoppingMPItem();
            }
        }
        else if (VARS.mpType === 'category') {
            // -- Viewing a MP category
            let splinks = Array.from(document.querySelectorAll(VARS.marketplaceQS3));
            if (splinks.length > 0) {
                for (let i = 0, iL = splinks.length; i < iL; i++) {
                    let splink = splinks[i];
                    let spbox = splink.parentElement.closest('span div a');
                    if (spbox !== null) {
                        // -- found the sponsored box.
                        spbox = spbox.parentElement.parentElement.parentElement;
                        splink.setAttribute(postAtt, splink.innerHTML.length);
                        spbox.setAttribute(postAtt, spbox.innerHTML.length);
                        hide(spbox, VARS.sponsoredWordMP);
                        // (no break out - several sponsored boxes found)
                    }
                }
            }
            if (VARS.mpItem) {
                doMoppingMPItem();
            }
        }
        else if (VARS.mpType === 'commerce') {
            // -- Viewing a Commerce Listing page
            let splinks = Array.from(document.querySelectorAll(VARS.marketplaceQS4));
            if (splinks.length > 0) {
                for (let i = 0, iL = splinks.length; i < iL; i++) {
                    let splink = splinks[i];
                    let spbox = splink.parentElement.closest('h2').closest('span');
                    if (spbox !== null) {
                        // -- found the sponsored box.
                        if (!spbox.hasAttribute('msz-rule')) {
                            splink.setAttribute(postAtt, spbox.innerHTML.length);
                            spbox.setAttribute(postAtt, spbox.innerHTML.length);
                            hide(spbox, VARS.sponsoredWordMP);
                        }
                        // (no break out - several sponsored boxes found)
                    }
                }
            }
        }
    }
    function doMoppingMPItem() {
        // -- viewing a MP Item and a small sponsored box is showing up on the right.
        let splinks = Array.from(document.querySelectorAll(VARS.marketplaceQS3));
        // console.info(`${log}MPItem() - splinks:`, splinks);
        if (splinks.length > 0) {
            for (let i = 0, iL = splinks.length; i < iL; i++) {
                let splink = splinks[i];
                if (splink.closest('div[data-pagelet^="BrowseFeedUpsell"]') === null) {
                    // -- found the sponsored box inside the mp item box.
                    // -- mp item do not have a parent element having data-pagelet attribute.
                    let spbox = splink.parentElement.closest('h2');
                    if (spbox) {
                        spbox = spbox.closest('span');
                        hide(spbox, VARS.sponsoredWordMP);
                        splink.setAttribute(postAtt, splink.innerHTML.length);
                        // (there's only one sponsored box - so break out)
                        break;
                    }
                }
            }
        }
    }

    // ** Mutations processor
    function bodyMutating(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'childList') {
                if (VARS.prevURL !== window.location.href) {
                    // - page url has changed ... refresh the bodyObserver.
                    runMO();
                    // console.info(`${log}runMO(): A/N/G/V/M:`, VARS.isAF, VARS.isNF, VARS.isGF, VARS.isVF, VARS.isMP);
                }
                else if (VARS.isAF) {
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        let mnode = mutation.addedNodes[i];
                        // -- There's a MarketPlace SPAN node that has Sponsored text ...
                        // -- NF, GF & VF don't need to check SPAN nodes ... so exclude those NODES for performance reasons.
                        let safeNode = (['SCRIPT', 'LINK', undefined, 'FORM'].indexOf(mnode.tagName) < 0);
                        let doCleaning = safeNode ? ((VARS.isMP) ? true : (mnode.tagName === 'DIV')) : false;
                        if (doCleaning) {
                            // console.info(`${log}m.an:`, VARS.isMP, mnode.innerHTML.length, mnode.textContent.length, mnode);
                            if ((mnode.innerHTML.length < 129) || (mnode.textContent.length === 0)) {
                                // - skip these ...
                                // console.info(`${log}m.an: - skipping`, mnode);
                            }
                            else if (VARS.isNF) {
                                if (VARS.storiesFound === false) {
                                    doMoppingStories();
                                }
                                if (VARS.crFound === false) {
                                    doMoppingCreateRoom();
                                }
                                if ((VARS.tcFound_Sponsored === false) || (VARS.tcFound_Suggested4U === false)) {
                                    let tcbox = document.querySelector(VARS.thirdColQS1);
                                    if (tcbox && tcbox.innerHTML.length > 64) {
                                        doMoppingThirdColumn(1, tcbox);
                                    }
                                    tcbox = document.querySelector(VARS.thirdColQS2);
                                    if (tcbox && tcbox.innerHTML.length > 64) {
                                        doMoppingThirdColumn(2, tcbox);
                                    }
                                }
                                if ((VARS.f2mFound === false) || (VARS.surveyFound === false)) {
                                    doMoppingOthers();
                                }
                                if (VARS.storiesFound && VARS.crFound && (VARS.tcFound_Sponsored || VARS.tcFound_Suggested4U) && VARS.f2mFound && VARS.surveyFound) {
                                    VARS.nfpLoopCount = VARS.nfpLoopCountLimit + 1;
                                }
                                else {
                                    VARS.nfpLoopCount++;
                                }

                                doMopping();
                                break;
                            }
                            else if (VARS.isGF) {
                                if (VARS.nfpLoopCount < VARS.nfpLoopCountLimit) {
                                    doMoppingNonFeedPosts(VARS.groupsNonFeedsQS);
                                }
                                doMopping();
                                break;
                            }
                            else if (VARS.isVF) {
                                if (VARS.nfpLoopCount < VARS.nfpLoopCountLimit) {
                                    doMoppingNonFeedPosts(VARS.videoNonFeedQS);
                                }
                                doMopping();
                                break;
                            }
                            else if (VARS.isMP) {
                                doMoppingMP();
                                break;
                            }
                            else if (VARS.isSF) {
                                doMopping();
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    // ** Mutation Observer
    let bodyObserver = new MutationObserver(bodyMutating);
    // ** MO starter / restarter
    const DEBUG_START = false;
    let firstRun = true;
    function runMO() {
        // run code soon as the elements HEAD, BDDY and Options are ready/available.
        // or when page url has changed ...
        if (document.head && document.body && DBVARS.optionsReady) {
            if (DEBUG_START) console.info(`${log}runMO : HEAD/BODY/Options available`);
            if (firstRun) {
                addCSS();
                window.setTimeout(addExtraCSS, 150); // fb is sometimes laggy ...
                buildMoppingDialog();
                firstRun = false;
            }
            if (setFeedSettings()) {
                if (DEBUG_START) console.info(`${log}runMO : feed settings have been reset, A/N/G/V/M:`, VARS.isAF, VARS.isNF, VARS.isGF, VARS.isVF, VARS.isMP);
                // - clear out mutations not yet processed ...
                let mutations = bodyObserver.takeRecords();
                bodyObserver.disconnect();
                // - and start up the osbserver again.
                bodyObserver.observe(document.body, { childList: true, subtree: true, attributes: false });
            }
        }
        else {
            if (DEBUG_START) console.info(`${log}HEAD/BODY/Options not available`);
            setTimeout(runMO, 10);
        }
    }
    runMO();
})();
