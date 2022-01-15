// ==UserScript==
// @name         FB - Clean my feeds
// @description  Hide Sponsored and Suggested posts in FB's News Feed, Groups Feed, Watch Videos Feed and Marketplace Feed
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-clean-my-feeds/issues
// @version      3.12-beta-52
// @author       zbluebugz (https://github.com/zbluebugz/)
// @require      https://unpkg.com/idb-keyval@6.0.3/dist/umd.js
// @match        https://*.facebook.com/*
// @grant        none
// @license      MIT; https://opensource.org/licenses/MIT
// @icon         data:image/png;base64,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
// @run-at       document-start
// ==/UserScript==
/*
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

        v3.12 :: December/January 2021:
            Added a dialog box for users to toggle options
            Added option to hide News and Groups posts based on text (partial match)
            Added option to save/export options
            Added Espanol and Čeština(Czech) (incomplete)
            Added option to hide "Take a survey" and "FB 2 Meta" info boxes.
            Added option to hide Stories

    Attribution: Mop & bucket icon
    - made by Freepik (https://www.freepik.com) @ flaticon (https://www.flaticon.com/)
    - page: https://www.flaticon.com/premium-icon/mop_2383747

    To do:
    - complete language translation

    Instructions on how to use:
    - In FB, top right corner, click on the "Clean my feeds" icon (mop + bucket)
    - Toggle the various options
    - Click Save then Close.
    - Recommend that you Export your settings every now and then. (When your browser flushes the cache, your settings are deleted).


    \\\ --- No need to amend any of the code below --- ///
*/

(async function() {

    'use strict';

    // - console log "label" - used for filtering console logs.
    const log = '-- fbm :: ';

    // - idb-keyval - indexedDB wrapper
    // -- needs the "@require https://unpkg.com/idb-keyval@6.0.3/dist/umd.js" entry.
    // -- which functions do we want to use from the idb-keyval?
    const  { get, set, createStore } = idbKeyval;
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

    /*
    // -- indexeddb testing --
    console.info(log + 'createStore:', ostore);
    const Options = {'LANGUAGE': 'en'};
    let result = set(DBVARS.DBKey, JSON.stringify(Options), ostore)
    .then(() => console.info(log+'test save - success'))
    .catch((err) => console.info(log+'test save - failed, err:', err));

    return true;
    */

    // - post attribute (used for detecting changes within a post)
    const postAtt = 'msz';
    const postAttIB = 'msz-ib';

    // *** *** Language components *** ***
    const KeyWords = {
        // *** Which languages have been setup:
        // - 'en' is default.
        LANGUAGES : ['en', 'pt', 'de', 'fr', 'es', 'cs'],

        SPONSORED : {
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
            // Čeština (Czech)
            'cs': 'Sponzorováno',
        },
        // marketplace 'sponsored' word ... sigh! fb having different spelling for marketplace for certain languages.
        MP_SPONSORED : {
            'en': 'Sponsored',
            'pt': 'Patrocinado',
            'de': 'Gesponsert',
            'fr': 'Sponsorisée',
            'es': 'Publicidad',
            'cs': 'Sponzorováno',
        },
        // *** Verbosity:
        VERBOSITY : {
            'en' : ['1 post hidden. Rule: ', ' posts hidden'],
            'pt' : ['1 postagem oculta. Regra: ', ' postagens ocultas'],
            'de' : ['1 Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt'],
            'fr' : ['1 poste caché. Règle: ', ' posts cachés'],
            'es' : ['1 publicación oculta. Regla: ', ' publicaciones ocultas'],
            'cs' : ['1 příspěvek byl skryt. Pravidlo: ', ' příspěvků skrytých'],
        },

        // *** Instructions for adding a Suggestion keywords ***
        // 1) Create keyword under relevant feed
        // 2) Enter all language entries (must use FB wording).
        //      - If unknown, use EN's word(s) and add "// -- need translation" comment
        //      - Also set isSuggestion & defaultEnabled.
        // 3) The code will then do the rest ...
        // 4) NB: Placement of keyword determines the display order.
        // *** --- ***

        // *** News Feed :: Suggested posts
        // - People you may know
        NF_PEOPLE_YOU_MAY_KNOW : {
            'en': 'People you may know',
            'pt': 'Pessoas que talvez conheças',
            'de': 'Personen, die du kennen könntest',
            'fr': 'Connaissez-vous...', // (Do you know...)
            'es': 'Personas que quizá conozcas',
            'cs': 'Koho možná znáte',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Paid partnership
        // -- page you follow is "sponsoring" another page's post (e.g. job)
        NF_PAID_PARTNERSHIP : {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft', // (Paid advertising partnership)
            'fr': 'Partenariat rémunéré',
            'es': 'Colaboración pagada', // (Paid collaboration)
            'cs': 'Placené partnerství',
            'isSuggestion': true,
            'defaultEnabled': true,
        },
        // - Suggested for you
        NF_SUGGESTED_FOR_YOU : {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich',
            'fr': 'Suggestions pour vous',
            'es': 'Sugerencias para ti',
            'cs': 'Návrhy pro vás',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested pages
        NF_SUGGESTED_PAGES : {
            'en': 'Suggested Pages',
            'pt': 'Páginas sugeridas',
            'de': 'Vorgeschlagene Seiten',
            'fr': 'Pages suggérées',
            'es': 'Páginas sugeridas',
            'cs': 'Navrhované stránky',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested events
        NF_SUGGESTED_EVENTS : {
            'en': 'Suggested Events',
            'pt': 'Eventos Sugeridos',
            'de': 'Suggested Events', // --- needs translation
            'fr': 'Suggested Events', // --- needs translation
            'es': 'Suggested Events', // --- needs translation
            'cs': 'Suggested Events', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,

        },
        // - Events you may like
        NF_EVENTS_YOU_MAY_LIKE : {
            'en': 'Events you may like',
            'pt': 'Events you may like', // --- needs translation
            'de': 'Events you may like', // --- needs translation
            'fr': 'Évènements qui pourraient vous intéresser', // (Events that may/might interest you )
            'es': 'Eventos que te pueden gustar',
            'cs': 'Events you may like', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,

        },
        // - Suggested live gaming video
        NF_SUGGESTED_LIVE_GAMES : {
            'en': 'Suggested live gaming video',
            'pt': 'Vídeo sugerido de jogos ao vivo',
            'de': 'Suggested live gaming video', // --- needs translation
            'fr': 'Suggested live gaming video', // --- needs translation
            'es': 'Suggested live gaming video', // --- needs translation
            'cs': 'Suggested live gaming video', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Explore brands for you
        NF_EXPLORE_BRANDS : {
            'en': 'Explore brands for you',
            'pt': 'Explore brands for you', // --- needs translation
            'de': 'Explore brands for you', // --- needs translation
            'fr': 'Explore brands for you', // --- needs translation
            'es': 'Explore brands for you', // --- needs translation
            'cs': 'Explore brands for you', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Videos just for you
        NF_VIDEOS_JUST_FOR_YOU : {
            'en': 'Videos just for you',
            'pt': 'Vídeos só para ti',
            'de': 'Videos just for you', // --- needs translation
            'fr': 'Videos just for you', // --- needs translation
            'es': 'Videos just for you', // --- needs translation
            'cs': 'Videos just for you', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Page you could subscribe to
        NF_PAGE_SUBSCRIBE_TO : {
            'en': 'Page you could subscribe to', // --- needs translation (not seen in EN, but seen in DE)
            'pt': 'Page you could subscribe to', // --- needs translation
            'de': 'Seite, die du abonnieren könntest',
            'fr': 'Page you could subscribe to', // --- needs translation
            'es': 'Page you could subscribe to', // --- needs translation
            'cs': 'Page you could subscribe to', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },

        // *** Groups Feed :: Hide some Suggested posts
        // -- nb: some of these rules overlap each other
        // -- "Join" and "Join Group" is listed in most non-subscribed group posts,
        //    if both of these keywords are enabled, then the other keywords are "redundant"
        // - New for you
        // -- usually shows up at top of feed.
        GF_NEW_FOR_YOU : {
            'en': 'New for you',
            'pt': 'Novidades para ti',
            'de': 'Neu für dich',
            'fr': 'Nouveautés',
            'es': 'Novedades para ti',
            'cs': 'Novinky pro vás',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Paid partnership
        // -- page you follow is "sponsoring" another page's post (e.g. job)
        GF_PAID_PARTNERSHIP : {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft', // (Paid advertising partnership)
            'fr': 'Partenariat rémunéré',
            'es': 'Colaboración pagada', // (Paid collaboration)
            'cs': 'Placené partnerství',
            'isSuggestion': true,
            'defaultEnabled': true,
        },
        // - Suggested groups
        GF_SUGGESTED_GROUPS : {
            'en': 'Suggested groups',
            'pt': 'Grupos sugeridos',
            'de': 'Vorgeschlagene Gruppen',
            'fr': 'Groupes suggérés',
            'es': 'Grupos sugeridos',
            'cs': 'Suggested groups',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested for you (Groups you might be interested in.)
        GF_SUGGESTED_FOR_YOU_GROUPS : {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich',
            'fr': 'Suggestions pour vous',
            'es': 'Sugerencias para ti',
            'cs': 'Návrhy pro vás',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Suggested post from a public group
        // -- (lots of posts from groups not subscribed too)
        GF_SUGGESTED_POST_PUBLIC_GROUP : {
            'en': 'Suggested post from a public group',
            'pt': 'Publicação sugerida de um grupo público',
            'de': 'Vorgeschlagener Beitrag aus einer öffentlichen Gruppe',
            'fr': 'Publication suggérée d’un groupe public',
            'es': 'Publicación sugerida de un grupo público',
            'cs': 'Navrhovaný příspěvek z veřejné skupiny', // proposed contribution from public group
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Post from public group
        // -- (lots of posts from groups not subscribed too)
        GF_POST_PUBLIC_GROUP : {
            'en': 'Post from public group',
            'pt': 'Postagem de grupo público',
            'de': 'Post from public group', // --- needs translation
            'fr': 'Post from public group', // --- needs translation
            'es': 'Post from public group', // --- needs translation
            'cs': 'Post from public group', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - From a group that your friend is in
        GF_FROM_A_GROUP_YOUR_FRIEND_IS_IN : {
            'en': 'From a group that your friend is in',
            'pt': 'De um grupo em que o teu amigo/a é membro',
            'de': 'Aus einer Gruppe, in der dein/e Freund/in ist',
            'fr': 'D’un groupe dont votre ami(e) est membre',
            'es': 'De un grupo al que tu amigo pertenece',
            'cs': 'Ze skupiny, kde je váš přítel',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Friends' groups
        // -- usually shows up at top of feed.
        GF_FRIENDS_GROUPS : {
            'en': 'Friends\' groups',
            'pt': 'Grupos dos amigos',
            'de': 'Gruppen von Freunden',
            'fr': 'Friends\' groups', // --- needs translation
            'es': 'Friends\' groups', // --- needs translation
            'cs': 'Friends\' groups', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Popular near you / in your area
        GF_POPULAR_NEAR_YOU : {
            'en': 'Popular near you',
            'pt': 'Populares perto de ti',
            'de': 'Beliebt in deiner Nähe',
            'fr': 'Popular near you', // --- needs translation
            'es': 'Popular near you', // --- needs translation
            'cs': 'Popular near you', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - See More Groups - from post's heading "More like XYZ" (where XYZ is a group you've joined)
        // -- nb: some non-subscribed group posts also have this keyword.
        GF_SEE_MORE_GROUPS : {
            'en': 'See More Groups',
            'pt': 'Ver mais grupos',
            'de': 'Weitere Gruppen ansehen',
            'fr': 'Voir plus de groupes',
            'es': 'Ver más grupos',
            'cs': 'Zobrazit další skupiny',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Because you viewed a similar post (but not from a subscribed group)
        GF_BECAUSE_YOU_VIEWED_A_SIMILAR_POST : {
            'en': 'Because you viewed a similar post',
            'pt': 'Porque viste uma publicação semelhante',
            'de': 'Weil du dir einen ähnlichen Beitrag angesehen hast',
            'fr': 'Parce que vous avez consulté une publication similaire',
            'es': 'Porque has visto una publicación similar',
            'cs': 'Protože jste se díval na podobný příspěvek',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Because you viewed a similar group
        GF_BECAUSE_YOU_VIEWED_A_SIMILAR_GROUP : {
            'en': 'Because you viewed a similar group',
            'pt': 'Because you viewed a similar group', // --- needs translation
            'de': 'Because you viewed a similar group', // --- needs translation
            'fr': 'Because you viewed a similar group', // --- needs translation
            'es': 'Because you viewed a similar group', // --- needs translation
            'cs': 'Protože jste zobrazil podobnou skupinu',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Based on your recent activity
        GF_YOUR_RECENT_ACTIVITY: {
            'en': 'Based on your recent activity',
            'pt': 'Based on your recent activity', // --- needs translation
            'de': 'Based on your recent activity', // --- needs translation
            'fr': 'Based on your recent activity', // --- needs translation
            'es': 'Based on your recent activity', // --- needs translation
            'cs': 'Based on your recent activity', // --- needs translation
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - Join Group
        // -- one of two generic join a group
        // -- (bit like a catch-all rule - placed these to rules @ end of list.)
        GF_JOIN_GROUP_1 : {
            'en': 'Join Group',
            'pt': 'Aderir ao grupo',
            'de': 'Gruppe beitreten',
            'fr': 'Rejoindre le groupe',
            'es': 'Unirte al grupo',
            'cs': 'Přidat se ke skupině',
            'isSuggestion': true,
            'defaultEnabled': false,
        },
        // - "Join" button/link
        // -- one of two generic join a group
        // -- (bit like a catch-all rule)
        GF_JOIN_GROUP_2 : {
            'en': 'Join',
            'pt': 'Aderir',
            'de': 'Beitreten',
            'fr': 'Rejoindre',
            'es': 'Unirte',
            'cs': 'Přidat se',
            'isSuggestion': true,
            'defaultEnabled': false,
        },

        // *** Watch Videos Feed
        // - Paid partnership
        //   -- page you follow is "sponsoring" another page's video post (e.g. job)
        VF_PAID_PARTNERSHIP_VIDEOS : {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft', // (Paid advertising partnership)
            'fr': 'Partenariat rémunéré',
            'es': 'Colaboración pagada', // (Paid collaboration)
            'cs': 'Placené partnerství',
            'isSuggestion': true,
            'defaultEnabled': true,
        },
        VF_NEW_FOR_YOU_VIDEOS : {
            'en': 'New for you',
            'pt': 'Novidades para ti',
            'de': 'Neu für dich',
            'fr': 'Nouveautés',
            'es': 'Novedades para ti',
            'cs': 'Novinky pro vás',
            'isSuggestion': true,
            'defaultEnabled': false,
        },

        // *** Miscellaneous/Other items
        // -- create room
        OTHER_CREATE_ROOM : {
            'en' : 'Create room',
            'pt' : 'Criar sala',
            'de' : 'Room erstellen',
            'fr' : 'Créer un salon',
            'es' : 'Crear sala',
            'cs' : 'Vytvořit místnost',
            'defaultEnabled': false,
        },
        // -- sponsored box in right-hand column
        OTHER_RIGHT_RAIL_SPONSORED : {
            'en' : 'Sponsored box (right-hand column)',
            'pt' : 'Caixa patrocinada (coluna da direita)',
            'de' : 'Gesponserte Box (rechte Spalte)',
            'fr' : 'Encadré sponsorisé (colonne de droite)',
            'es' : 'Cuadro patrocinado (columna de la derecha)',
            'cs' : 'Sponzorovaný box (pravý sloupec)',
            'defaultEnabled': true,
        },
        // -- Stories (top of News Feed)
        OTHER_STORIES : {
            'en': 'Stories',
            'pt': 'Stories',
            'de': 'Stories',
            'fr': 'Stories',
            'es': 'Stories',
            'cs': 'Stories',
            'defaultEnabled': false,
        },
        // -- info box - coronavirus
        OTHER_INFO_BOX_CORONAVIRUS : {
            'en' : 'Coronavirus (information box)',
            'pt' : 'Coronavírus (caixa de informações)',
            'de' : 'Coronavirus (Infobox)',
            'fr' : 'Coronavirus (encadré d\'information)',
            'es' : 'Coronavirus (cuadro de información)',
            'cs' : 'Coronavirus (informační box)',
            'isInfoBox': true,
            'defaultEnabled': false,
            'pathMatch': '/coronavirus_info/', // -- the partial path name to match.
        },
        // -- info box - climate science
        OTHER_INFO_BOX_CLIMATE_SCIENCE : {
            'en' : 'Climate Science (information box)',
            'pt' : 'Ciência do Clima (caixa de informações)',
            'de' : 'Klimawissenschaft (Infobox)',
            'fr' : 'Science du climat (encadré d\'information)',
            'es' : 'Ciencia del clima (cuadro de información)',
            'cs' : 'Klimatická věda (informační box)',
            'isInfoBox': true,
            'defaultEnabled': false,
            'pathMatch': '/climatescienceinfo/',
        },
        // -- info box - subscribe
        OTHER_INFO_BOX_SUBSCRIBE : {
            'en' : 'Subscribe (information box)',
            'pt' : 'Assine (caixa de informações)',
            'de' : 'Abonnieren (Infobox)',
            'fr' : 'S’abonner (encadré d\'information)',
            'es' : 'Suscribir  (cuadro de información)',
            'cs' : 'Odebírat (informační box)',
            'isInfoBox': true,
            'defaultEnabled': false,
            'pathMatch': '/support/',
        },
        // -- nf - top of feed - "invitation to a survey"
        OTHER_SURVEY : {
            'en': 'See Survey Details',
            'pt': 'Veja os detalhes da pesquisa',
            'de': 'Siehe Umfragedetails ',
            'fr': 'Voir les détails de l\'enquête',
            'es': 'Consulte los detalles de la encuesta',
            'cs': 'Viz Podrobnosti průzkumu',
            'pathMatch' : '/survey/',
            'isTopOfNFFeed': true,
            'defaultEnabled': false,
        },
        // -- nf - top of feed - "fb 2 m"
        OTHER_FB_RENAMED : {
            'en': 'The Facebook company is now called Meta',
            'pt': 'A empresa do Facebook agora se chama Meta',
            'de': 'Das Facebook-Unternehmen heißt jetzt Meta',
            'fr': 'La société Facebook s\'appelle désormais Meta',
            'es': 'La compañía de Facebook ahora se llama Meta',
            'cs': 'Facebooková společnost se nyní jmenuje Meta',
            'urlMatch' : 'about.facebook.com/meta/',
            'isTopOfNFFeed': true,
            'defaultEnabled': false,
        },

        // *** Dialog box
        // - Title
        DLG_TITLE : {
            'en' : 'Clean my feeds',
            'pt' : 'Limpe meus feeds',
            'de' : 'Bereinige meine Feeds',
            'fr' : 'Nettoyer mes flux',
            'es' : 'Limpia mis feeds',
            'cs' : 'Vyčistěte mé kanály',
        },
        DLG_NF : {
            'en' : 'News Feed',
            'pt' : 'Feed de notícias',
            'de' : 'Newsfeed',
            'fr' : 'Fil de nouvelles',
            'es' : 'Feed de noticias',
            'cs' : 'Informační kanál',
        },
        DLG_GF : {
            'en' : 'Groups Feed',
            'pt' : 'Feed de grupos',
            'de' : 'Gruppen-Feed',
            'fr' : 'Flux de groupes',
            'es' : 'Feed de grupos',
            'cs' : 'Skupinový kanál',
        },
        DLG_VF : {
            'en' : 'Videos Feed',
            'pt' : 'Feed de vídeos',
            'de' : 'Video-Feed',
            'fr' : 'Flux de vidéos',
            'es' : 'Feed de vídeos',
            'cs' : 'Video kanál',
        },
        DLG_MP : {
            'en' : 'Marketplace Feed',
            'pt' : 'Feed de mercado',
            'de' : 'Marktplatz-Feed',
            'fr' : 'Flux de la place de marché',
            'es' : 'Feed de Marketplace',
            'cs' : 'Marketplace kanál',
        },
        DLG_OTHER : {
            'en' : 'Miscellaneous items',
            'pt' : 'Itens miscelâneos',
            'de' : 'Sonstige Gegenstände',
            'fr' : 'Articles divers',
            'es' : 'Artículos diversos',
            'cs' : 'Různé položky'
        },
        DLG_NF_BLOCK : {
            'en' : 'News Feed - text filter',
            'pt' : 'Feed de notícias - filtro de texto',
            'de' : 'Newsfeed - Textfilter',
            'fr' : 'Fil de nouvelles - filtre de texte',
            'es' : 'Feed de noticias: filtro de texto',
            'cs' : 'Informační kanál - textový filtr',
        },
        DLG_GF_BLOCK : {
            'en' : 'Groups Feed - text filter',
            'pt' : 'Feed de grupos - filtro de texto',
            'de' : 'Gruppen-Feed - Textfilter',
            'fr' : 'Flux de groupes - filtre de texte',
            'es' : 'Feed de grupos: filtro de texto',
            'cs' : 'Skupinový kanál - textový filtr',
        },
        DLG_VF_BLOCK : {
            'en' : 'Videos Feed - text filter',
            'pt' : 'Feed de vídeos - filtro de texto',
            'de' : 'Video-Feed - Textfilter',
            'fr' : 'Flux de vidéos - filtre de texte',
            'es' : 'Feed de videos - filtro de texto',
            'cs' : 'Video kanál - textový filtr',
        },
        DLG_BLOCK_NEW_LINE : {
            'en' : '(separate words or phrases with a line break)',
            'pt' : '(separe palavras ou frases com quebras de linha)',
            'de' : '(trennen Sie Wörter oder Sätze mit Zeilenumbrüchen)',
            'fr' : '(mots ou phrases séparés avec des sauts de ligne)',
            'es' : '(palabras o frases separadas con saltos de línea)',
            'cs' : '(oddělte slova nebo fráze na nový řádek)',
        },
        NF_BLOCKED_ENABLED : {
            'en' : 'Enabled',
            'pt' : 'Habilidoso',
            'de' : 'Ermöglichte',
            'fr' : 'Activé',
            'es' : 'Habilitadas',
            'cs' : 'Zapnuto',
        },
        GF_BLOCKED_ENABLED : {
            'en' : 'Enabled',
            'pt' : 'Habilidoso',
            'de' : 'Ermöglichte',
            'fr' : 'Activé',
            'es' : 'Habilitadas',
            'cs' : 'Zapnuto',
        },
        VF_BLOCKED_ENABLED : {
            'en' : 'Enabled',
            'pt' : 'Habilidoso',
            'de' : 'Ermöglichte',
            'fr' : 'Activé',
            'es' : 'Habilitadas',
            'cs' : 'Zapnuto',
        },
        DLG_VERBOSITY : {
            'en' : 'Verbosity',
            'pt' : 'Verbosidade',
            'de' : 'Ausführlichkeit',
            'fr' : 'Verbosité',
            'es' : 'Verbosidad',
            'cs' : 'Výřečnost',
        },
        DLG_VERBOSITY_MESSAGE : {
            'en' : 'Display a message if a post is hidden',
            'pt' : 'Exibir uma mensagem se uma postagem estiver oculta',
            'de' : 'Nachricht anzeigen, wenn ein Beitrag ausgeblendet ist',
            'fr' : 'Afficher un message si une publication est masquée',
            'es' : 'Mostrar un mensaje si una publicación está oculta',
            'cs' : 'Zobrazit zprávu, pokud je příspěvek skrytý',
        },
        VERBOSITY_NO_MESSAGE : {
            'en' : 'no message',
            'pt' : 'nenhuma mensagem',
            'de' : 'keine Nachricht',
            'fr' : 'pas de message',
            'es' : 'Sin mensaje',
            'cs' : 'žádná zpráva',
        },
        VERBOSITY_COLOUR : {
            'en' : 'Text colour',
            'pt' : 'Cor do texto',
            'de' : 'Textfarbe',
            'fr' : 'Couleur du texte',
            'es' : 'Color del texto',
            'cs' : 'Barva textu'
        },
        VERBOSITY_BG_COLOUR : {
            'en' : 'Background colour',
            'pt' : 'Cor de fundo',
            'de' : 'Hintergrundfarbe',
            'fr' : 'Couleur de fond',
            'es' : 'Color de fondo',
            'cs' : 'Barva pozadí',
        },
        VERBOSITY_DEBUG : {
            'en' : 'Highlight "hidden" posts"',
            'pt' : 'Destacar postagens "ocultas"',
            'de' : 'Markieren Sie "versteckte" Beiträge',
            'fr' : 'Mettez en surbrillance les messages « cachés »',
            'es' : 'Destacar publicaciones "ocultas"',
            'cs' : 'Zvýrazněte „skryté“ příspěvky',
        },
        DLG_TIPS : {
            'en' : 'Tips"',
            'pt' : 'Pontas',
            'de' : 'Tipps',
            'fr' : 'Des astuces',
            'es' : 'Consejos',
            'cs' : 'Tipy',
        },
        DLG_TIPS_CONTENT : {
            'en' : 'Clearing your browser\'s cache will reset your settings to their default values.\n\nUse the "Export" and "Import" buttons to backup and restore your customised settings.',
            'pt' : 'Limpar o cache do navegador redefinirá suas configurações para os valores padrão.\n\nUse os botões "Exportar" e "Importar" para fazer backup e restaurar suas configurações personalizadas.',
            'de' : 'Wenn Sie den Cache Ihres Browsers leeren, werden Ihre Einstellungen auf die Standardwerte zurückgesetzt.\n\nVerwenden Sie die Schaltflächen "Exportieren" und "Importieren", um Ihre benutzerdefinierten Einstellungen zu sichern und wiederherzustellen.',
            'fr' : 'Vider le cache de votre navigateur réinitialisera vos paramètres à leurs valeurs par défaut.\n\nUtilisez les boutons "Exporter" et "Importer" pour sauvegarder et restaurer vos paramètres personnalisés.',
            'es' : 'Limpiar la memoria caché de su navegador restablecerá la configuración a sus valores predeterminados.\n\nUtilice los botones "Exportar" e "Importar" para hacer una copia de seguridad y restaurar su configuración personalizada.',
            'cs' : 'Vymazáním mezipaměti prohlížeče obnovíte výchozí hodnoty nastavení.\n\nPomocí tlačítek "Export" a "Import" zálohujte a obnovte svá přizpůsobená nastavení.',
        },
        DLG_BUTTONS : {
            'en' : ['Save', 'Close', 'Export', 'Import'],
            'pt' : ['Salvar', 'Fechar', 'Exportar', 'Importar'],
            'de' : ['Speichern', 'Schließen', 'Exportieren', 'Importieren'],
            'fr' : ['Sauvegarder', 'Fermer', 'Exporter', 'Importer'],
            'es' : ['Guardar', 'Cerrar', 'Exportar', 'Importar'],
            'cs' : ['Zachránit', 'Zavřít', 'Export', 'Import'],
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
        // - Suggestions
        // -- "current" feed
        suggestions : [],
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
        QS : '',
        newsFeedQS: 'div[role="feed"] > div',
        groupsFeedQS: 'div[role="feed"] > div',
        // - News and Groups feeds post's blocks (posts have 1-4 blocks)
        // -- used by the fn extractTextContent() and fn doMoppingInfoBox()
        postBlocksQS: ':scope > div > div > div > div > div > div > div > div > div > div > div > div > div',
        // - groups feed intro posts - exclude procseed post(s)
        // --- two variations in stucture
        groupsNonFeedsQS: 'div[role="main"] > div > div > div > div:nth-of-type(2) > div:not([' + postAtt + ']) , ' +
                            'div[role="main"] div[role="main"] > div > div > div > div:first-of-type > div > div:first-of-type > div:not([' + postAtt + '])',
        // - non regular feed post blocks
        nonRegularPostBlocksQS: ':scope > div > div > div > div > div > div > div:first-of-type',
        // - videos feed
        videosFeedQS: 'div#watch_feed div[data-pagelet="MainFeed"] > div > div > div > div' ,
        // - video feed post's blocks
        videoBlockQS: ':scope > div > div > div > div > div:nth-of-type(2) > div',
        // - video "new video for you" (post above feed)
        videoNonFeedQS: '[id=watch_feed] > div > div:first-of-type > div',
        videNonFeedPostBlock: ':scope > div:first-of-type',
        // - marketplace - exclude boxes already processed.
        marketplaceQS: 'div[data-pagelet="MainFeed"] div[data-pagelet^="BrowseFeedUpsell"]:not([' + postAtt + '])',
        // - marketplace - post with sponsored box in the right-hand column.
        marketplaceQS2: 'div[data-pagelet="MainFeed"] div:not([data-pagelet^="BrowseFeedUpsell"])',
        // - right rail sponsored box
        rightRailQS: 'div[data-pagelet="RightRail"] > div:first-of-type > span',
        // - create room
        createRoomQS: 'div[data-pagelet="VideoChatHomeUnit"]:not([' + postAtt + ']) , ' +
                        'div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([' + postAtt + '])',
        // - stories
        storiesQS: 'div[data-pagelet="Stories"]:not([' + postAtt + '])',

        // - Feed toggles
        isNF : false,
        isGF : false,
        isVF : false,
        isMP : false,
        isAF : false,

        // marketplace feed type (std | category)
        mpType: '',
        // marketplace - viewing an item
        mpItem: false,

        // remember current URL - used for page change detection
        prevURL : '',
        prevPathname : '',

        // number of posts to check/inspect
        // - need to re-process existing posts as sometimes fb is slow to populate them
        //    or updates them after a few moments.
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
        // (code will set to true to stop hunting for RR)
        rrFound: false,
        // indicate if fb-meta was found and stop looking for it
        f2mFound: false,
        // indicate if survey was found and stop looking for it
        surveyFound: false,
        otherLoopCount: 0,
        otherLoopCountLimit: 2,

        // StyleSheet Id
        cssID : '',
        // CSS class names
        cssHide : '',
        cssHideEl : '',
        cssEcho : '',
        // toggle dialog button (visible if is a Feed page)
        btnToggleEl : null,
        // - script's logo
        logoSrc: 'data:image/png;base64,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',

    };

    // -- which language is the FB page in?
    function setLanguageAndOptions(){
        // - run this function when HEAD is available.
        // - language (default to EN)
        // - also run getUserOptions().
        if (document.head) {
            let lang = document.head.parentNode.lang || 'en';
            VARS.language = (KeyWords.LANGUAGES.indexOf(lang) >= 0) ? lang : 'en';
            // - sponsored word
            VARS.sponsoredWord = KeyWords.SPONSORED[VARS.language];
            VARS.sponsoredWordMP = KeyWords.MP_SPONSORED[VARS.language];
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
            let str = chars.charAt(Math.floor(Math.random() * (chars.length-10)));
            for (let i = 0; i < 12; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            // return postAtt + "_" + str;
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
            styleEl.appendChild(document.createTextNode('.' + VARS.cssHide + ', .' + VARS.cssHideEl + ' {margin:0 !important;}'));
        }
        // -- post wrapper's first child div (mainly for news, groups and video feeds posts)
        styleEl.appendChild(document.createTextNode('.' + VARS.cssHide + ' > div:first-of-type, '));
        // -- post wrapper's element (mainly for marketplace posts)
        styleEl.appendChild(document.createTextNode('.' + VARS.cssHideEl + ', '));
        // -- news, groups & video posts' info boxes
        styleEl.appendChild(document.createTextNode('.' + VARS.cssHide + '[' + postAttIB +'] '));
        // -- which styles to apply?
        if (VARS.Options.VERBOSITY_DEBUG === false) {
            // -- not in debugging mode
            styleEl.appendChild(document.createTextNode(' {display:none !important;}'));
        }
        else {
            // -- in debugging mode
            styleEl.appendChild(document.createTextNode(' {border: 5px dotted orange !important;}'));
        }

        // - echo msg
        let colourMsg = (VARS.Options.VERBOSITY_COLOUR === '') ? '' : 'color: ' + VARS.Options.VERBOSITY_COLOUR + '; ';
        colourMsg += (VARS.Options.VERBOSITY_BG_COLOUR === '') ? '' : 'background-color: ' + VARS.Options.VERBOSITY_BG_COLOUR + '; ';
        css = 'margin:1.25rem 0 1.5rem 0 !important; padding:0.75rem 1rem; ';
        css += 'border-radius:0.55rem; ';
        css += 'font-style:italic; ' + colourMsg;
        styleEl.appendChild(document.createTextNode('.' + VARS.cssHide + ' > p {' + css + '}'));

        // - dailog box CSS
        // -- toggle button
        css = 'margin-right: 42px;';
        styleEl.appendChild(document.createTextNode('div[role="banner"] > div:last-of-type div[role="navigation"] {' + css + '}'));
        css = 'position:fixed; top:0.5rem; right:0.5rem; display:none;';
        styleEl.appendChild(document.createTextNode('.fb-cmf-toggle {' + css + '}'));
        styleEl.appendChild(document.createTextNode('.fb-cmf-toggle.show {display:block;}'));
        styleEl.appendChild(document.createTextNode('.fb-cmf-toggle img {width:32px;}'));

        // --- dialog box
        // -- position + flex
        css = 'position:fixed; top:0.15rem; right:0.15rem; bottom:0.15rem; ';
        css += 'display:flex; flex-direction:column; ';
        css += 'width:30rem; ';
        css += 'padding:0 1rem; ';
        css += 'z-index:5; ';
        css += 'background-color:white; ';
        css += 'border:2px solid orangered; border-radius:1rem; ';
        css += 'opacity:0; ';
        css += 'transform:scale(0);transform-origin:top right; transition:transform .45s ease, opacity .25s ease; ';
        styleEl.appendChild(document.createTextNode('.fb-cmf {' + css + '}'));
        // -- header
        css = 'padding:0.5rem 0.75rem; ';
        css += 'font-size:1.35rem; font-weight: 700; text-align:center; ';
        css += 'background-image: url(' + VARS.logoSrc + '); background-repeat:no-repeat; background-size:2.25rem; background-position:left center;';
        styleEl.appendChild(document.createTextNode('.fb-cmf header {' + css + '}'));
        css = 'margin:0.25rem 0 0 1rem; ';
        css += 'float:right; ';
        css += 'font-size:0.8rem; font-family:courier !important';
        styleEl.appendChild(document.createTextNode('.fb-cmf header button {' + css + '}'));
        // -- content
        css = 'flex:1; '
        css += 'overflow:auto; ';
        css += 'border:2px double orangered; border-radius:0.5rem;';
        styleEl.appendChild(document.createTextNode('.fb-cmf div.content {' + css + '}'));
        css = 'padding:1rem; text-align:center;';
        styleEl.appendChild(document.createTextNode('.fb-cmf footer.buttons {' + css + '}'));
        css = 'margin:0.5rem;';
        styleEl.appendChild(document.createTextNode('.fb-cmf fieldset {' + css + '}'));
        css = 'font-weight:700;';
        styleEl.appendChild(document.createTextNode('.fb-cmf fieldset legend {' + css + '}'));
        css = 'display:inline-block; ';
        css += 'padding:0.125rem 0; ';
        css += 'width:95%;';
        styleEl.appendChild(document.createTextNode('.fb-cmf fieldset label {' + css + '}'));
        css = 'margin: 0 0.5rem 0 0; vertical-align:baseline;';
        styleEl.appendChild(document.createTextNode('.fb-cmf fieldset label input {' + css + '}'));
        css = 'color:darkgrey;';
        styleEl.appendChild(document.createTextNode('.fb-cmf fieldset label[disabled] {' + css + '}'));
        css = 'width:100%; height:12rem;';
        styleEl.appendChild(document.createTextNode('.fb-cmf fieldset textarea {' + css + '}'));
        // -- footer - buttons
        css = 'margin-left: 1rem; margin-right:1rem;';
        styleEl.appendChild(document.createTextNode('.fb-cmf .buttons button {' + css + '}'));
        // -- footer - file input
        css = 'display:none;';
        styleEl.appendChild(document.createTextNode('.fb-cmf .fileInput {' + css + '}'));
        // -- footer - import results
        css = 'font-style:italic; margin-top: 1rem;';
        styleEl.appendChild(document.createTextNode('.fb-cmf .fileResults {' + css + '}'));
        // -- show dialog box (default is not to show)
        css = 'opacity:1; transform:scale(1);';
        styleEl.appendChild(document.createTextNode('.fb-cmf.show {' + css + '}'));
        // - add above styles to HEAD.
        head.appendChild(styleEl);

        // - set the right-rail query selector - excludes the hide class.
        VARS.rightRailQS = 'div[data-pagelet="RightRail"] > div:first-of-type:not(.' + VARS.cssHide + ') > span';
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
            console.info(log+'getuserOptions() > get() - Error:', err);
        });
        if (VARS.VERBOSITY_DEBUG) {
            console.info(log + 'getUserOptions() > get():', result);
        }

        // -- check that all variables exists ... if not, assign them default values..
        // -- Sponsored (always enabled)
        if (!VARS.Options.hasOwnProperty('NF_SPONSORED')) { VARS.Options.NF_SPONSORED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('GF_SPONSORED')) { VARS.Options.GF_SPONSORED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('VF_SPONSORED')) { VARS.Options.VF_SPONSORED = true; changed = true; }
        if (!VARS.Options.hasOwnProperty('MP_SPONSORED')) { VARS.Options.MP_SPONSORED = true; changed = true; }

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
                    VARS[key.slice(0,2).toLowerCase() + 'Suggestions'].push(KeyWords[key][VARS.language]);
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

        // -- all other options.
        let key = "OTHER_CREATE_ROOM";
        if (!VARS.Options.hasOwnProperty(key)) { VARS.Options[key] = KeyWords[key].defaultEnabled; changed = true; }
        key = "OTHER_RIGHT_RAIL_SPONSORED";
        if (!VARS.Options.hasOwnProperty(key)) { VARS.Options[key] = KeyWords[key].defaultEnabled; changed = true; }
        key = "OTHER_STORIES";
        if (!VARS.Options.hasOwnProperty(key)) { VARS.Options[key] = KeyWords[key].defaultEnabled; changed = true; }


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

        if (changed) {
            // - save the changes ...
            // -- usually happen if first time setup or change in Options' variables.
            let result = await set(DBVARS.DBKey, JSON.stringify(VARS.Options), DBVARS.ostore)
            .then(() => {
                return true;
            })
            .catch((err) => {
                console.log(log + 'getUserOptions() > changed > saving - failed, Error:', err);
                return false;
            });
            if (VARS.Options.VERBOSITY_DEBUG) {
                if (result) {
                    console.info(log+'Changed - success');
                }
                else {
                    console.info(log+'Changed - failed');
                }
            }
        }

        // - right-rail found flag - default is false;
        //   (set to true to stop mopping up RR)
        VARS.rrFound = !(VARS.Options.OTHER_RIGHT_RAIL_SPONSORED);

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

        function createCB(cbName, cbKeyWord, cbReadOnly=false) {
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
                label.appendChild(document.createTextNode(KeyWords[cbKeyWord][VARS.language]));
            }
            else if (['NF_SPONSORED','GF_SPONSORED','VF_SPONSORED'].indexOf(cbKeyWord) >=0) {
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
            let dlg, hdr, htxt, btn, cnt, fs, l, s, ta, footer;

            // -- wrapper
            dlg = document.createElement('div');
            dlg.id = 'fbcmf';
            dlg.className = 'fb-cmf'; // class "show" reveals the dialog.
            // -- header (title + close button)
            hdr = document.createElement('header');
            hdr.className = 'header';
            htxt = document.createElement('b');
            htxt.textContent = KeyWords.DLG_TITLE[VARS.language];
            btn = document.createElement('button');
            btn.textContent = 'X';
            btn.addEventListener("click", toggleMD, false);
            hdr.appendChild(htxt);
            hdr.appendChild(btn);
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
            for (const key in KeyWords) {
                if (key.slice(0,3) === 'NF_' && KeyWords[key].isSuggestion) {
                    fs.appendChild(createCB('cbNF', key));
                }
            }
            cnt.appendChild(fs);

            // -- Groups Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_GF[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createCB('cbGF', 'GF_SPONSORED', true));
            for (const key in KeyWords) {
                if (key.slice(0,3) === 'GF_' && KeyWords[key].isSuggestion) {
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
                if (key.slice(0,3) === 'VF_' && KeyWords[key].isSuggestion) {
                    fs.appendChild(createCB('cbVF', key));
                }
            }
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
            fs.appendChild(createCB('cbOther', 'OTHER_STORIES'));
            fs.appendChild(createCB('cbOther', 'OTHER_CREATE_ROOM'));
            fs.appendChild(createCB('cbOther', 'OTHER_RIGHT_RAIL_SPONSORED'));
            for (const key in KeyWords) {
                if (KeyWords[key].isInfoBox) {
                    fs.appendChild(createCB('cbOther', key));
                }
            }
            fs.appendChild(createCB('cbOther', 'OTHER_SURVEY'));
            fs.appendChild(createCB('cbOther', 'OTHER_FB_RENAMED'));
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
            s.appendChild(document.createTextNode(KeyWords.DLG_VERBOSITY_MESSAGE[VARS.language] + ':'));
            fs.appendChild(s);
            fs.appendChild(createRB('VERBOSITY_LEVEL', '0', '<' + KeyWords.VERBOSITY_NO_MESSAGE[VARS.language] + '>'));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '1', KeyWords.VERBOSITY[VARS.language][0] + '______'));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '2', '7' + KeyWords.VERBOSITY[VARS.language][1]));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('VERBOSITY_COLOUR', KeyWords.VERBOSITY_COLOUR[VARS.language] + ':'));
            fs.appendChild(createInput('VERBOSITY_BG_COLOUR', KeyWords.VERBOSITY_BG_COLOUR[VARS.language] + ':'));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createCB('cbVD', 'VERBOSITY_DEBUG'));
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
            fileImport.setAttribute('id', 'FI' + postAtt);
            fileImport.classList.add('fileInput');
            footer.appendChild(fileImport);
            // -- import results
            let div = document.createElement('div');
            div.classList.add('fileResults');
            footer.appendChild(div);

            dlg.appendChild(footer);

            document.body.appendChild(dlg);

            // -- add event listeners to the import button and file input field
            let fileInput = document.getElementById('FI'+ postAtt);
            fileInput.addEventListener('change', importUserOptions, false);
            // -- make the btn Import trigger file input ...
            let btnImport = document.getElementById('BTNImport');
            btnImport.addEventListener('click', function(){fileInput.click()}, false);
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
                let rbs = content.querySelectorAll('input[type="radio"]:checked');
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

        async function saveUserOptions(event, source='dialog') {
            // -- save Options in indexeddb as JSON.
            if (source === 'dialog') {
                let md, cbs, rbs, tas, inputs;

                // -- grab the dialog box and get the various options.
                md = document.getElementById('fbcmf');
                // -- checkboxes
                cbs = Array.from(md.querySelectorAll('input[type="checkbox"]'));
                cbs.forEach( cb => {
                    VARS.Options[cb.value] = cb.checked;
                });
                // -- radios
                rbs = md.querySelectorAll('input[type="radio"]:checked');
                rbs.forEach(rb => {
                    VARS.Options[rbs.name] = rbs.value;
                });
                // -- text input
                inputs = Array.from(md.querySelectorAll('input[type="input]'));
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

                //console.info(log+'saveUserOptions() : Options:', VARS.Options);
            }
            else {
                // -- source: file (imported)
                // -- clear out items that are not valid.
                let md = document.getElementById('fbcmf');
                let inputs = Array.from(md.querySelectorAll('input:not([type="file"]), textarea'));
                let validNames = [];
                inputs.forEach(inp => {
                    validNames.push( (inp.type === 'checkbox') ? inp.value : inp.name);
                });
                for (let key in VARS.Options) {
                    if (validNames.indexOf(key) < 0) {
                        // console.info(log+'SUO : deleting key:', key);
                        delete VARS.Options[key];
                    }
                }
            }
            // -- save options (need await?)
            // set(DBVARS.DBKey, JSON.stringify(VARS.Options), DBVARS.ostore)
            let result = await set(DBVARS.DBKey, JSON.stringify(VARS.Options), DBVARS.ostore)
            .then(() => {
                if (VARS.Options.VERBOSITY_DEBUG) {
                    console.info(log + 'saveUserOptions() > set() -> Saved, Options:', VARS.Options);
                }
                // -- refresh options and split blocks of texts
                let result2 = getUserOptions()
                .then(() => {
                    return true;
                });
                return result2;
            })
            .catch((err) => {
                console.info(log + 'saveUserOptions() > set() -> Error:', err);
                return false;
            });
            if (VARS.VERBOSITY_DEBUG) {
                console.info(log + 'saveUserOptions() > set() -> Saved:', result);
            }
            // - update some variables.
            if (result) {
                setFeedSettings(true);
            }
            // -- close the dialog.
            // toggleMD();
        }

        function exportUserOptions() {
            // -- export user's options into a text file.
            // console.info(log+'exportUserOptions() : Options:',VARS.Options);
            let exportOptions = document.createElement("a");
            exportOptions.href = window.URL.createObjectURL(new Blob([JSON.stringify(VARS.Options)], {type: "text/plain"}));
            exportOptions.download = 'fb - clean my feeds - settings.json';
            exportOptions.click();
            exportOptions.remove();
            document.querySelector('#fbcmf .fileResults').innerText = 'Exported: fb - clean my feeds - settings.json';
        }
        function importUserOptions(event) {
            // -- import user's options froma text file.
            let fileResults = document.querySelector('#fbcmf .fileResults');
            // let file = document.getElementById('FI'+postAtt).files[0];
            let file = event.target.files[0];
            let fileN = event.target.files[0].name;
            // console.info(log+'importUserOptions() : file:', file, file.name);
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
                        // console.info(log+'importUserOptions > reader.onload: Options:', VARS.Options);
                        // -- save the file to the db
                        // -- save will run getUserOptions();
                        let result = saveUserOptions(null, 'file')
                        .then(() => {
                            updateDialog();
                            fileResults.innerText = 'File imported: ' + fileN;
                            return true;
                        });
                    }
                    else {
                        fileResults.innerText = 'File NOT imported: ' + fileN;
                    }
                }
                catch (e) {
                    fileResults.innerText = 'File NOT imported: ' + fileN;
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
            btn.id = 'fbcmfToggle';
            let image = new Image();
            image.src = VARS.logoSrc;
            image.title = KeyWords.DLG_TITLE[VARS.language];
            btn.appendChild(image);
            btn.classList.add('fb-cmf-toggle');
            document.body.appendChild(btn);
            btn.addEventListener("click", toggleMD, false);
            VARS.btnToggleEl = btn;
        }

        createToggleButton();
        createDialog();
    }
    // --- end of dailog code.

    // adjust some settings if URL has changed.
    function setFeedSettings(forceUpdate=false) {
        if ((VARS.prevURL !== window.location.href) || forceUpdate) {
            // - remember current page's URL
            VARS.prevURL = window.location.href;
            VARS.prevPathname = window.location.pathname;
            // - reset feeds flags
            VARS.isNF = false;
            VARS.isGF = false;
            VARS.isVF = false;
            VARS.isMP = false;
            if (VARS.prevPathname === '/') {
                VARS.isNF = true;
                VARS.QS = VARS.newsFeedQS;
                VARS.suggestions = VARS.nfSuggestions;
                VARS.blockText = VARS.Filters.NF_BLOCKED_ENABLED;
                VARS.blockTextMatch = VARS.Filters.NF_BLOCKED_TEXT;
                VARS.blockTextMatchLC = VARS.Filters.NF_BLOCKED_TEXT_LC ;
            }
            else if (['/groups/feed/', '/groups/feed'].indexOf(VARS.prevPathname) >= 0) {
                VARS.isGF = true;
                VARS.QS = VARS.groupsFeedQS;
                VARS.suggestions = VARS.gfSuggestions;
                VARS.blockText = VARS.Filters.GF_BLOCKED_ENABLED;
                VARS.blockTextMatch = VARS.Filters.GF_BLOCKED_TEXT;
                VARS.blockTextMatchLC = VARS.Filters.GF_BLOCKED_TEXT_LC ;
            }
            else if (['/watch/', '/watch'].indexOf(VARS.prevPathname) >= 0) {
                VARS.isVF = true;
                VARS.QS = VARS.videosFeedQS;
                VARS.suggestions = VARS.vfSuggestions;
                VARS.blockText = VARS.Filters.VF_BLOCKED_ENABLED;
                VARS.blockTextMatch = VARS.Filters.VF_BLOCKED_TEXT;
                VARS.blockTextMatchLC = VARS.Filters.VF_BLOCKED_TEXT_LC ;
            }
            else if ((VARS.prevPathname.indexOf('/marketplace/') >=0) || (VARS.prevPathname.indexOf('/marketplace?') >=0)) {
                VARS.isMP = true;
                VARS.QS = VARS.marketplaceQS;
                VARS.suggestions = [];
                VARS.blockText = false;
                VARS.blockTextMatch = [];
                VARS.blockTextMatchLC = [];
                VARS.mpType = '';
                VARS.mpItem = false;
                let mpf = Array.from(document.querySelectorAll('div[data-pagelet="MainFeed"]'));
                if (mpf.length > 0) {
                    // - standard feed (main feed + locations)
                    VARS.mpType = 'std';
                }
                else if (VARS.prevPathname.indexOf('/category/') >=0 ) {
                    // - category feed (doesn't have the data-pagelet attribute)
                    VARS.mpType = 'category';
                }
                else {
                    // - possibly a category page.
                    mpf = Array.from(document.querySelectorAll('div[aria-label*="Marketplace"][role="main"]'));
                    if (mpf.length === 1) {
                        VARS.mpType = 'category'
                    }
                    else {
                        // - unknown marketplace page
                        VARS.isMP = false;
                    }
                }
                if (VARS.isMP && VARS.prevPathname.indexOf('/item/') >=0) {
                    VARS.mpItem = true;
                }
                // console.info(log+'setFeedSettings() : isMP, mpType, mpItem:', VARS.isMP, VARS.mpType, VARS.mpItem);
            }
            else {
                VARS.QS = '';
                VARS.suggestions = [];
                VARS.blockText = false;
                VARS.blockTextMatch = [];
                VARS.blockTextMatchLC = [];
            }
            VARS.isAF = (VARS.isNF || VARS.isGF || VARS.isVF || VARS.isMP);

            if (VARS.isAF) {
                VARS.btnToggleEl.classList.add('show');
            }
            else {
                VARS.btnToggleEl.classList.remove('show');
            }

            // - reset count of consecutive posts hidden
            VARS.echoCount = 0;
            // - reset non-feed-posts count
            VARS.nfpLoopCount = 0;
            // - reset stories found flag
            VARS.storiesFound = (VARS.Options.OTHER_STORIES === false);
            // - reset create-room found flag
            VARS.crFound = (VARS.Options.OTHER_CREATE_ROOM === false);
            // - reset right-rail found flag
            // (set to true to stop mopping up the RR)
            VARS.rrFound = (VARS.Options.OTHER_RIGHT_RAIL_SPONSORED === false);

            // - reset f2m and survey found flags
            VARS.f2mFound = (VARS.Options.OTHER_FB_RENAMED === false);
            VARS.surveyFound = (VARS.Options.OTHER_SURVEY === false);
            VARS.otherLoopCount = 0;

            //console.info(log+'setFeedSettings() : VARS:', VARS.isAF, VARS.isNF, VARS.isGF, VARS.isVF, VARS.isMP);
            return true;
        }
        else {
            return false;
        }
    }

    function extractTextContent(post, selector, maxBlocks ) {
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
                    let n,
                        walk=document.createTreeWalker(blocks[b],NodeFilter.SHOW_TEXT,null,false);
                    while((n=walk.nextNode())) {
                        let val = n.textContent.trim();
                        if ((val !== '') && (val.length > 1)) {
                            // - skip < 2 char strings.
                            arrayTextValues.push(val);
                        }
                    }
                }
            }
        }
        return arrayTextValues;
    }
    function extractTextContentRRMP(post) {
        // get text node values of Right Rail
        // get text node values of MarketPlace section
        // - return as array of values.
        let n,
            arrayTextValues=[],
            walk=document.createTreeWalker(post,NodeFilter.SHOW_TEXT,null,false);
        while((n=walk.nextNode())) {
            let val = n.textContent.trim();
            if ((val !== '') && (val.length > 1)) {
                // - skip < 2 char strings
                arrayTextValues.push(val);
            }
        }
        return arrayTextValues;
    }

    function echoHiddenPost(post, reason) {
        if (VARS.isMP) {
            // -- marketplace don't display a msg.
            return true;
        }
        if ((parseInt(VARS.Options.VERBOSITY_LEVEL) > 0) && (reason !== '')) {
            if (VARS.Options.VERBOSITY_LEVEL === '1') {
                VARS.echoCount = 1;
            }
            if (VARS.echoCount < 2) {
                // - 1 post hidden
                let echoEl = document.createElement('p');
                echoEl.textContent = KeyWords.VERBOSITY[VARS.language][0] + reason;
                // - add after post being hidden (issue with first post being hidden & fb updating it)
                post = post.querySelector(':scope div:first-of-type');
                if (post){
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
            post.classList.add( (VARS.isMP) ? VARS.cssHideEl : VARS.cssHide);
            // - enable the following if wanting to inspect each post's reason for being hidden (in developer's tools)
            post.setAttribute(postAtt + '-rule', reason);
        }
    }

    function isSponsored(post) {
        // Is it a Sponsored post?
        let csr; // getComputedStyle results
        // within this post, find the SPAN element(s) having aria-label = Sponsored
        // - usually only one is found
        let alSpans = Array.from(post.querySelectorAll('span[aria-label="' + VARS.sponsoredWord + '"]'));
        let ss = 1; // sponsored structure (1 = uses aria-label, 2 = uses a tag.
        if (alSpans.length === 0) {
            // not found, try another structure: A and aria-label structure;
            alSpans = Array.from(post.querySelectorAll('a[href="#"][aria-label="label"], a[aria-label="' + VARS.sponsoredWord + '"]'));
            ss = 2;
        }
        // is the word "Sponsored" visible?
        // - nb: not all posts have either of the above structures
        let daText = '';
        for (let sX = 0, sL = alSpans.length; sX < sL; sX++) {
            let sp = alSpans[sX];
            // get the next sibling from the <span aria-label="..."></span> | <a href="#" aria-label="..."> | <a aria-label="...">
            let nsp;
            if (ss === 1) {
                // uses the span[arial-label="sponsored] structure
                nsp = sp.nextSibling;
            }
            else {
                // ss = 2
                // - uses the a[href=# aria-label=label] or a[aria-label=sponsoredWord] structure
                //  - A tag is nested with 2 SPANs then either B or SPAN tag wrapper with lots of B/SPAN tags.
                //  - grab the B/SPAN tag (wrapper)
                nsp = sp.firstChild.firstChild.firstChild;
            }
            // note that 'nsp' is a "parent" ...
            // .. sometimes it has a textNode (as firstChild) ...
            // ... there are several SPAN/B tags having single letters
            // ... - all randomised, but will make up "sponsored" when certain SPAN/B tags are "visible".
            // .... - nb: sometimes, there's a single span and nsp is null (esp when ss = 2)
            if (nsp && ((nsp.tagName === "SPAN") || (nsp.tagName === 'B'))) {
                // does this "parent" node have an immediate textNode?
                if (nsp.firstChild.tagName === 'SPAN' || nsp.firstChild.tagName === 'B') {
                    // no textNode
                }
                else {
                    // yes, has a textNode ...
                    csr = window.getComputedStyle(nsp);
                    if (csr.position === 'relative' && csr.display === 'inline') {
                        // visible ... (need both styles) ... grab the textNode's value.
                        daText += nsp.firstChild.textContent;
                    }
                }
                // the "parent" has childNodes (SPAN/B) ...
                for (let cX = 0, cL = nsp.childElementCount; cX < cL; cX++) {
                    if (nsp.children[cX].tagName === 'SPAN' || nsp.children[cX].tagName === 'B') {
                        csr = window.getComputedStyle(nsp.children[cX]);
                        if (csr.position === 'relative' && csr.display === 'inline') {
                            // visible ... (need both styles)
                            daText += nsp.children[cX].textContent;
                            if (isNaN(parseInt(daText)) === false) {
                                // - starts with a number, so break out early
                                // -- getComputedStyle() is an "expensive" time operation
                                break;
                            }
                            if (daText === VARS.sponsoredWord) {
                                break;
                            }
                        }
                    }
                }
            }
            //console.info(log + 'is Sponsored post:', '>' + daText + '<');
            // do we hide this post?
            return ((daText.length > 0) && (VARS.sponsoredWord === daText));
        }
    }
    function isSuggested(post, isRegularPost) {
        // - check for suggestions
        // -- regular posts - scan first 2 blocks, otherwise first block.
        let ptexts = (isRegularPost) ? extractTextContent(post, VARS.postBlocksQS, 2) : extractTextContent(post, VARS.nonRegularPostBlocksQS, 1);
        let suggestionIndex = -1;
        for (let p = 0, ptL = ptexts.length; p < ptL; p++) {
            suggestionIndex = VARS.suggestions.indexOf(ptexts[p]);
            if (suggestionIndex >= 0) {
                break;
            }
        }
        return suggestionIndex;
    }
    function isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- regular posts - scan first 1|3 block(s)
        let ptexts = (VARS.isVF) ? extractTextContent(post, VARS.videoBlockQS, 1) : extractTextContent(post, VARS.postBlocksQS, 3);
        ptexts = ptexts.join(' ').toLowerCase();
        let blockedIndex = -1;
        for (let b = 0, btL = VARS.blockTextMatchLC.length; b < btL; b++) {
            blockedIndex = ptexts.indexOf(VARS.blockTextMatchLC[b]);
            if (blockedIndex >=0) {
                // before breaking out, set the index position of the blocked text that matched.
                blockedIndex = b;
                break;
            }
        }
        return blockedIndex;
    }

    function doMoppingStories() {
        if (VARS.Options.OTHER_STORIES) {
            let stories = Array.from(document.querySelectorAll(VARS.storiesQS));
            if (stories.length > 0) {
                for (let i = 0; i < stories.length; i++) {
                    stories[i].setAttribute(postAtt, stories[i].innerHTML.length);
                    // - stop checking for stories element
                    VARS.storiesFound = true;
                    hide(stories[i], '');
                    stories[i].setAttribute(postAtt+'-rule', KeyWords.OTHER_STORIES[VARS.language]);
                    break;
                }
            }
        }
    }
    function doMoppingCreateRoom() {
        if (VARS.Options.OTHER_CREATE_ROOM) {
            let createRoom = Array.from(document.querySelectorAll(VARS.createRoomQS));
            if (createRoom.length > 0) {
                for (let i = 0; i < createRoom.length; i++) {
                    createRoom[i].setAttribute(postAtt, createRoom[i].innerHTML.length);
                    // - get the room's wrapper and hide the room at that level.
                    createRoom[i] = createRoom[i].parentElement.parentElement;
                    // - stop checking for create room element
                    VARS.crFound = true;
                    hide(createRoom[i], '');
                    createRoom[i].setAttribute(postAtt+'-rule', KeyWords.OTHER_CREATE_ROOM[VARS.language]);
                    break;
                }
            }
        }
    }
    function doMoppingRightRail() {
        // - hide the right rail sponsored box.
        let rrbox = document.querySelector(VARS.rightRailQS);
        if (rrbox) {
            if (!rrbox.classList.contains(VARS.cssHide)) {
                let ptexts = extractTextContentRRMP(rrbox);
                // console.info(log + 'rrbox tc:', ptexts);
                if (ptexts.indexOf(VARS.sponsoredWord) >= 0) {
                    VARS.echoCount = 0;
                    hide(rrbox, VARS.sponsoredWord);
                    // make it stop checking right-rail.
                    VARS.rrFound = true;
                }
            }
        }
    }
    function doMoppingInfoBoxes(post) {
        // hide the info boxes that appear in posts having a certain topic.
        if((VARS.infoBoxes) && (VARS.infoBoxesPaths.length > 0)){
            let blocks; // - post's major blocks (sections)
            let minBlocks; // - minimum blocks in this post that has an info box
            let infoBlock; // - which block has the info box
            if (VARS.isNF || VARS.isGF) {
                // - block 0 = friend posted then commented | shop added | suggested
                // - block 1 = title/heading, date/time | group name, author, date/time
                // - block 2 = content
                // - block 3 = info box OR comments
                // - block 4 = comments (if no info box)
                blocks = post.querySelectorAll(VARS.postBlocksQS + ':not([msz])');
                minBlocks = 5;
                infoBlock = 3;
            }
            else if (VARS.isVF) {
                // - block 0 = title/heading,
                // - block 1 = video
                // - block 2 = info box OR comments
                // - block 3 = comments (if no info box)
                blocks = post.querySelectorAll(VARS.videoBlockQS + ':not([msz])');
                minBlocks = 4;
                infoBlock = 2;
            }
            else {
                return;
            }
            if (blocks.length >= minBlocks) {
                let block = blocks[infoBlock];
                if (!block.hasAttribute(postAtt)) {
                    for (let j = 0, jL = VARS.infoBoxesPaths.length; j < jL; j++) {
                        let links = Array.from(block.querySelectorAll('a[href*="' + VARS.infoBoxesPaths[j] + '"]'));
                        if (links.length > 0) {
                            block.setAttribute(postAtt, block.innerHTML.length);
                            block.setAttribute(postAtt + '-IB', VARS.infoBoxesPaths[j]);
                            // - hide with no echo msg.
                            hide(block, '');
                            break;
                        }
                    }
                }
            }
        }
    }
    //let ocount = 0;
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
                    let linkEl = parentEl.querySelector('a[href*="facebook.com/meta/"]:not([' + postAtt + '])');
                    if (linkEl) {
                        // -- grab the container (7 parent nodes up)
                        let boxEl = linkEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                        linkEl.setAttribute(postAtt, linkEl.innerHTML.length);
                        boxEl.setAttribute(postAtt, boxEl.innerHTML.length);
                        hide(boxEl, KeyWords.OTHER_FB_RENAMED[VARS.language]); // - fb removes the hidden message, so skip that bit.
                        //boxEl.setAttribute(postAtt + '-rule', KeyWords.OTHER_FB_RENAMED[VARS.language]);
                    }
                    VARS.f2mFound = true;
                }
                if (VARS.surveyFound === false) {
                    let linkEl = parentEl.querySelector('a[href*="/survey/"]:not([' + postAtt + '])');
                    if (linkEl) {
                        // -- grab the container (7 parent nodes up)
                        let boxEl = linkEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                        linkEl.setAttribute(postAtt, linkEl.innerHTML.length);
                        boxEl.setAttribute(postAtt, boxEl.innerHTML.length);
                        hide(boxEl, KeyWords.OTHER_SURVEY[VARS.language]); // - fb removes the hidden message, so skip that bit.
                        //boxEl.setAttribute(postAtt + '-rule', KeyWords.OTHER_SURVEY[VARS.language]);
                    }
                    VARS.surveyFound = true;
                }
                VARS.otherLoopCount++;
                if (VARS.otherLoopCount >= VARS.otherLoopCountLimit) {
                    VARS.surveyFound = true;
                    VARS.f2mFound = true;
                }
                //ocount++;
                //console.info(log+'doMoppingOthers :: ocount:', ocount);
            }
        }
    }

    function doMopping() {
        // News/Groups/Videos Feed
        let posts = Array.from(document.querySelectorAll(VARS.QS));
        if (posts.length) {
            // - consecutive hidden posts count
            VARS.echoCount = 0;
            // - skip the first lot of posts already processed
            let quickScanCount = 0;
            if (posts.length - VARS.inspectPostCount > 0) {
                quickScanCount = posts.length - VARS.inspectPostCount;
                for (let i = 0; i < quickScanCount; i++) {
                    if(posts[i].classList.contains(VARS.cssHide)) {
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
                if (post.textContent.length === 0 ){
                    // skip
                }
                else {
                    let hiding = false;
                    if (post.classList.contains(VARS.cssHide)) {
                        hiding = true;
                        VARS.echoCount++;
                    }
                    else if ((post.hasAttribute(postAtt) && (parseInt(post.getAttribute(postAtt)) === post.innerHTML.length))) {
                        // post size has not changed
                        // (if hidden, previous rule would have caught it)
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
                                // - if not suggested, check for sponsoredWord
                                VARS.echoCount++;
                                hiding = true;
                                hide(post, VARS.sponsoredWord);
                                break;
                            }
                            if (!hiding && VARS.blockText) {
                                // - partial text matches
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
        //    (due to some posts being slow to show up)
        let posts = Array.from(document.querySelectorAll(nfQS));
        if (posts.length > 0) {
            for (let i = 0, iL = posts.length; i < iL; i++) {
                let post = posts[i];
                if ((post.innerHTML.length < 129) || (post.textContent.length === 0)) {
                    // skip (flag them to be ignored)
                    if (!post.hasAttribute(postAtt)) {
                        post.setAttribute(postAtt, post.innerHTML.length);
                    }
                }
                else {
                    let sugg = isSuggested(post, false);
                    if (sugg >= 0) {
                        VARS.echoCount = 1;
                        hide( post, VARS.suggestions[sugg]);
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
            let mpblocks = Array.from(document.querySelectorAll(VARS.QS));
            if (mpblocks.length > 0){
                for (let i = 0, iL = mpblocks.length; i < iL; i++) {
                    let mpblock = mpblocks[i];
                    // console.info(log + 'mpblock:', mpblock);
                    // - does this block of boxes have the a sponsored one?
                    // -- use the href*=/ads/ detection method - not search for the sponsored word
                    let splinks = Array.from(mpblock.querySelectorAll('a[href*="/ads/"]:not([' + postAtt + '])'));
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
            if (VARS.mpItem) {
                doMoppingMPItem();
            }
        }
        else if (VARS.mpType === 'category') {
            // -- Viewing a MP category
            let splinks = Array.from(document.querySelectorAll('a[href*="/ads/"]:not([' + postAtt + '])'));
            if (splinks.length > 0) {
                for (let i = 0, iL = splinks.length; i < iL; i++) {
                    let splink = splinks[i];
                    let spbox = splink.parentElement.closest('span div a');
                    if (spbox !== null) {
                        // -- found the sponsored box.
                        spbox = spbox.parentElement.parentElement.parentElement;
                        spbox.setAttribute(postAtt, spbox.innerHTML.length);
                        splink.setAttribute(postAtt, splink.innerHTML.length);
                        hide(spbox, VARS.sponsoredWordMP);
                        // (no break out - several sponsored boxes found)
                    }
                }
            }
            if (VARS.mpItem) {
                doMoppingMPItem();
            }
        }
    }
    function doMoppingMPItem() {
        // -- viewing a MP Item and a small sponsored box is showing up on the right.
        let splinks = Array.from(document.querySelectorAll('a[href*="/ads/"]:not([' + postAtt + '])'));
        // console.info(log+'MPItem() - splinks:', splinks);
        if (splinks.length > 0){
            for (let i = 0, iL = splinks.length; i < iL; i++) {
                let splink = splinks[i];
                if (splink.closest('div[data-pagelet^="BrowseFeedUpsell"]') === null) {
                    // -- found the sponsored box inside the mp item box.
                    // -- mp item do not have a parent element having data-pagelet attribute.
                    //console.info(log+'MPItem() : splink:', splinks);
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
                    //                    console.info(log + 'runMO(): A/N/G/V/M:', VARS.isAF, VARS.isNF, VARS.isGF, VARS.isVF, VARS.isMP);
                }
                else if (VARS.isAF) {
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        let mnode = mutation.addedNodes[i];
                        // -- There's a MarketPlace SPAN node that has Sponsored text ...
                        // -- NF, GF & VF don't need to check SPAN nodes ... so exclude those NODES for performance reasons.
                        let safeNode = (['SCRIPT', 'LINK', undefined, 'FORM'].indexOf(mnode.tagName) < 0) ;
                        let doCleaning = safeNode ? ((VARS.isMP) ? true : (mnode.tagName === 'DIV')) : false ;
                        if (doCleaning) {
                            //console.info(log+'m.an:', VARS.isMP, mnode.innerHTML.length, mnode.textContent.length, mnode);
                            if ((mnode.innerHTML.length < 129) || (mnode.textContent.length === 0)) {
                                // - skip these ...
                                //console.info(log+'m.an: - skipping', mnode);
                            }
                            else if (VARS.isNF) {
                                if (VARS.nfpLoopCount < VARS.nfpLoopCountLimit) {
                                    if (VARS.storiesFound === false) {
                                        doMoppingStories();
                                    }
                                    if (VARS.crFound === false) {
                                        doMoppingCreateRoom();
                                    }
                                    if (VARS.rrFound === false) {
                                        let rrbox = document.querySelector(VARS.rightRailQS);
                                        if (rrbox && rrbox.innerHTML.length > 64) {
                                            doMoppingRightRail();
                                        }
                                    }
                                    if ((VARS.f2mFound === false) || (VARS.surveyFound === false)){
                                        doMoppingOthers();
                                    }
                                    if (VARS.storiesFound && VARS.crFound && VARS.rrFound && VARS.f2mFound && VARS.surveyFound) {
                                        VARS.nfpLoopCount = VARS.nfpLoopCountLimit + 1;    
                                    }
                                    else {
                                        VARS.nfpLoopCount++;
                                    }
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
            if (DEBUG_START) console.info(log + 'runMO : HEAD/BODY/Options available');
            if (firstRun) {
                addCSS();
                buildMoppingDialog();
                firstRun = false;
            }
            if (setFeedSettings()) {
                if (DEBUG_START) console.info(log + 'runMO : feed settings have been reset, A/N/G/V/M:', VARS.isAF, VARS.isNF, VARS.isGF, VARS.isVF, VARS.isMP);
                // - clear out mutations not yet processed ...
                let mutations = bodyObserver.takeRecords();
                bodyObserver.disconnect();
                // - and start up the osbserver again.
                bodyObserver.observe(document.body, {childList: true, subtree: true, attributes: false});
            }
        }
        else {
            if (DEBUG_START) console.info(log + 'HEAD/BODY/Options not available');
            setTimeout(runMO, 10);
        }
    }
    runMO();
})();
