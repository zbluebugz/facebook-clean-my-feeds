// ==UserScript==
// @name         facebook - ad block
// @description  Hide Sponsored and Suggested posts in FB News Feed, Groups Feed and Watch Videos Feed
// @version      3.11
// @author       zbluebugz (https://github.com/zbluebugz/)
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-ad-block/issues
// @match        https://*.facebook.com/*
// @grant        none
// @license      MIT; https://opensource.org/licenses/MIT
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-start
// ==/UserScript==
/*
      v3.01 :: 05/09/2021: First round.
      v3.02 :: 06/09/2021: Detected a couple of slight variations in how sponsored posts are created.
      v3.03 :: 14/09/2021: Code tweaked.
      v3.04 :: 14/09/2021: Fixed bug with getting textNode values.
      v3.05 :: 18/09/2021: Detected another variation on how sponsored posts are created.
      v3.06 :: 18/09/2021: Detected another variation how sponsored posts are marked. Code detection rewritten.
      v3.07 :: 21/09/2021: Added code to detect 'Sponsored · Paid for by XYZ' (very rare - untested)
                           Added Portuguese (requested by a user)
                           Detected another variation on how sponsored posts are created.
      v3.08 :: 22/09/2021: Detected another variation on how sponsored posts are created.
      v3.09 :: 09/10/2021: Code tweaked, removed dead code.
      v3.10 :: 10/10/2021: Code tweaked.
      v3.11 :: 20/11/2021: Rewrite
                           Changed timings to MutationsObserver.
                           Adjusted sponsored word detection block
                           Adjusted suggestions text detection block
                           Added extra Suggestions keywords
                           Added detection for Groups Feed, Videos Feed (Watch), MarketPlace Feed
                           Added option to hide Information Boxes (e.g. Covid Information, Global Climate Info)
                           Added right rail(column) hide sponsored block
                           Added German (incomplete)
                           Added French (incomplete)
                           Added option to display 'post is hidden' text
                           Added option to hide videos based on text (partial match)

      ** TO DO **
      - complete English translation
      - complete Portuguese translation
      - complete German translation
      - complete French translation
  */


/* jshint esversion: 6 */

(function () {
    'use strict';
    // -- -- START OF OPTIONS -- --

    // *** Debugging:
    // - if true, show a border on the post, else hide the post.
    const DEBUG = false;

    // *** Sponsored posts
    //     (no hideThis variable - always on)
    const SPONSORED_KEYWORD = {
        keywords: {
            // English
            'en': 'Sponsored',
            // Portuguese (Portugal)
            'pt': 'Patrocinado',
            // Deutsch (German)
            'de': 'Gesponsert',
            // French (France)
            'fr': 'Sponsorisé',
        },
        // marketplace 'sponsored' word ... sigh! fb having different spelling for marketplace.
        keywordsMP: {
            // English
            'en': 'Sponsored',
            // Portuguese (Portugal)
            'pt': 'Patrocinado',
            // Deutsch (German)
            'de': 'Gesponsert',
            // French (France)
            'fr': 'Sponsorisée',
        }
    };

    // *** Watch/Videos Feed
    // - Text within video posts to block (partial match)
    // -- array of values (case-insensitive)
    const VIDEOS_BLOCK_TEXT = {
        hideThis: true,
        keywords: [' 2018', ' 2019', ' 2020', 'gender reveal', 'gender. reveal','for entertainment purposes', 'when she ', 'when he ']
    };

    // *** Verbosity:
    // - display a message if a post is hidden.
    // -- level: 0 = Say nothing, 1 = Say "1 post hidden. Rule: xyz" for each post, 2 = Say "23 posts hidden" (consecutively/consecutivamente/nacheinander)
    // -- message colours for text and background (if '', use fb colours)
    const VERBOSITY = {
        level: 2,
        keywords: {
            'en' : ['1 post hidden. Rule: ', ' posts hidden'],
            'pt' : ['1 postagem oculta. Regra: ', ' postagens ocultas'],
            'de' : ['1 Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt'],
            'fr' : ['1 poste caché. Règle: ', ' posts cachés'],
        },
        colourText: '',
        colourBackground: 'lightgrey',
    };


    // *** News Feed :: Suggested posts
    // - People you may know
    const PEOPLE_YOU_MAY_KNOW = {
        hideThis: true,
        keywords: {
            'en': 'People you may know',
            'pt': 'Pessoas que talvez conheças',
            'de': 'Personen, die du kennen könntest',
            'fr': 'Connaissez-vous...', // Do you know...
        }
    };
    // - Suggested for you
    const SUGGESTED_FOR_YOU = {
        hideThis: true,
        keywords: {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich',
            'fr': 'Suggestions pour vous',
        }
    };
    // - Suggested pages
    const SUGGESTED_PAGES = {
        hideThis: true,
        keywords: {
            'en': 'Suggested Pages',
            'pt': 'Páginas sugeridas',
            'de': 'Vorgeschlagene Seiten',
            'fr': 'Pages suggérées',
        }
    };
    // - Suggested events
    const SUGGESTED_EVENTS = {
        hideThis: false,
        keywords: {
            'en': 'Suggested Events',
            'pt': 'Eventos Sugeridos',
            'de': 'Suggested Events', // --- needs translation
            'fr': 'Suggested Events', // --- needs translation
        }
    };
    // - Events you may like
    const EVENTS_YOU_MAY_LIKE = {
        hideThis: false,
        keywords: {
            'en': 'Events you may like',
            'pt': 'Events you may like', // --- needs translation
            'de': 'Events you may like', // --- needs translation
            'fr': 'Évènements qui pourraient vous intéresser', // (Events that may/might interest you )
        }
    };
    // - Paid partnership
    // -- page you follow is "sponsoring" another page's post (e.g. job)
    const PAID_PARTNERSHIP = {
        hideThis: true,
        keywords: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft', // (Paid advertising partnership)
            'fr': 'Partenariat rémunéré',
        }
    };
    // - Suggested live gaming video
    const SUGGESTED_LIVE_GAMES = {
        hideThis: false,
        keywords: {
            'en': 'Suggested live gaming video',
            'pt': 'Vídeo sugerido de jogos ao vivo',
            'de': 'Suggested live gaming video', // --- needs translation
            'fr': 'Suggested live gaming video', // --- needs translation
        }
    };
    // - Explore brands for you
    const EXPLORE_BRANDS = {
        hideThis: false,
        keywords: {
            'en': 'Explore brands for you',
            'pt': 'Explore brands for you', // --- needs translation
            'de': 'Explore brands for you', // --- needs translation
            'fr': 'Explore brands for you', // --- needs translation
        }
    };
    // - Videos just for you
    const VIDEOS_JUST_FOR_YOU = {
        hideThis: false,
        keywords: {
            'en': 'Videos just for you',
            'pt': 'Vídeos só para ti',
            'de': 'Videos just for you', // --- needs translation
            'fr': 'Videos just for you', // --- needs translation
        }
    };
    // - Page you could subscribe to
    const PAGE_SUBSCRIBE_TO = {
        hideThis: false,
        keywords: {
            'en': 'Page you could subscribe to', // --- needs translation (not see in EN, but seen in DE)
            'pt': 'Page you could subscribe to', // --- needs translation
            'de': 'Seite, die du abonnieren könntest',
            'fr': 'Page you could subscribe to', // --- needs translation
        }
    };


    // *** Groups Feed :: Hide some Suggested posts
    // -- nb: some of these rules overlap each other
    // -- e.g. "Join" is shown up in many non-subscribed group posts,
    //    and if many of these groups' rules "hideThis = false",
    //    but JOIN_GROUP_2.hideThis = true,
    //    then those groups rules (hideThis=false) will be ignored.
    //    nb: "Join Group" has a similar effect too.
    // - Suggested groups
    const SUGGESTED_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'Suggested groups',
            'pt': 'Grupos sugeridos',
            'de': 'Vorgeschlagene Gruppen',
            'fr': 'Groupes suggérés',
        }
    };
    // - Suggested for you (Groups you might be interested in.)
    const SUGGESTED_FOR_YOU_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich',
            'fr': 'Suggestions pour vous',
        }
    };
    // - Post from public group
    // -- (lots of posts from groups not subscribed too)
    const POST_PUBLIC_GROUP = {
        hideThis: false,
        keywords: {
            'en': 'Post from public group',
            'pt': 'Postagem de grupo público',
            'de': 'Post from public group', // --- needs translation
            'fr': 'Post from public group', // --- needs translation
        }
    };
    // - Suggested post from a public group
    // -- (lots of posts from groups not subscribed too)
    const SUGGESTED_POST_PUBLIC_GROUP = {
        hideThis: true,
        keywords: {
            'en': 'Suggested post from a public group',
            'pt': 'Publicação sugerida de um grupo público',
            'de': 'Vorgeschlagener Beitrag aus einer öffentlichen Gruppe',
            'fr': 'Publication suggérée d’un groupe public',
        }
    };
    // - From a group that your friend is in
    const FROM_A_GROUP_YOUR_FRIEND_IS_IN = {
        hideThis: true,
        keywords: {
            'en': 'From a group that your friend is in',
            'pt': 'De um grupo em que o teu amigo/a é membro',
            'de': 'Aus einer Gruppe, in der dein/e Freund/in ist',
            'fr': 'D’un groupe dont votre ami(e) est membre',
        }
    };
    // - Popular near you / in your area
    const POPULAR_NEAR_YOU = {
        hideThis: false,
        keywords: {
            'en': 'Popular near you',
            'pt': 'Populares perto de ti',
            'de': 'Beliebt in deiner Nähe',
            'fr': 'Popular near you', // --- needs translation
        }
    };
    // - See More Groups - from post's heading "More like XYZ" (where XYZ is a group you've joined)
    // -- nb: some non-subscribed group posts also have this keyword.
    const SEE_MORE_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'See More Groups',
            'pt': 'Ver mais grupos',
            'de': 'Weitere Gruppen ansehen',
            'frn': 'Voir plus de groupes',
        }
    };
    // - Becaused you viewed a similar post (but not from a subscribed group)
    const BECAUSE_YOU_VIEWED_A_SIMILAR_POST = {
        hideThis: true,
        keywords: {
            'en': 'Because you viewed a similar post',
            'pt': 'Porque viste uma publicação semelhante',
            'de': 'Weil du dir einen ähnlichen Beitrag angesehen hast',
            'fr': 'Parce que vous avez consulté une publication similaire',
        }
    };
    // - Join Group
    // -- one of two generic join a group
    // -- (bit like a catch-all rule)
    const JOIN_GROUP_1 = {
        hideThis: true,
        keywords: {
            'en': 'Join Group',
            'pt': 'Aderir ao grupo',
            'de': 'Gruppe beitreten',
            'fr': 'Rejoindre le groupe',
        }
    };
    // - "Join" button/link
    // -- one of two generic join a group
    // -- (bit like a catch-all rule)
    const JOIN_GROUP_2 = {
        hideThis: false,
        keywords: {
            'en': 'Join',
            'pt': 'Aderir',
            'de': 'Beitreten',
            'fr': 'Rejoindre',
        }
    };
    // - Friends' groups
    // -- usually shows up at top of feed.
    const FRIENDS_GROUPS = {
        hideThis: false,
        keywords: {
            'en': 'Friends\' groups',
            'pt': 'Grupos dos amigos',
            'de': 'Gruppen von Freunden',
            'fr': 'Friends\' groups', // --- needs translation
        }
    };
    // - New for you
    // -- usually shows up at top of feed.
    const NEW_FOR_YOU = {
        hideThis: true,
        keywords: {
            'en': 'New for you',
            'pt': 'Novidades para ti',
            'de': 'Neu für dich',
            'fr': 'Nouveautés',
        }
    };


    // *** Watch Videos Feed
    // - Paid partnership
    //   -- page you follow is "sponsoring" another page's video post (e.g. job)
    const PAID_PARTNERSHIP_VIDEOS = {
        hideThis: true,
        keywords: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft', // (Paid advertising partnership)
            'fr': 'Partenariat rémunéré',
        }
    };
    const NEW_FOR_YOU_VIDEOS = {
        hideThis: true,
        keywords: {
            'en': 'New for you',
            'pt': 'Novidades para ti',
            'de': 'Neu für dich',
            'fr': 'Nouveautés',
        }
    };


    // *** News, Groups and Videos Feeds
    // -- Information boxes that appear between the post and comments
    // - hide the info box, not the post.
    // -- e.g. coronavirus, climate science.
    // -- paths' values must be in lowercase.
    const INFO_BOXES = {
        hideThis: true,
        paths: ['/coronavirus_info/', '/climatescienceinfo/']
    };


    // *** Right rail(column) sponsored box (News Feed only)
    // -- uses the SPONSORED_KEYWORD.keywords for keywords.
    const RIGHT_RAIL_SPONSORED = {
        hideThis: true
    };

    // *** Create room (video chat room) (News Feed page only)
    // - (no keywords required)
    const CREATE_ROOM = {
        hideThis: true
    };



    // *** Which languages have been setup:
    // - 'en' is default.
    const LANGUAGES = ['en', 'pt', 'de', 'fr'];


    // -- -- END OF OPTIONS -- --



    // -- --
    // -- -- Rest of code - _no_ more toggles, keywords and options to adjust -- --
    // -- --


    // - console log "label" - used for filtering console logs.
    const log = '-- fbm :: ';
    // - post attribute (used for detecting changes within a post)
    const postAtt = 'msz';


    // - Feed Details variables
    // -- nb: setFeedSettings() adjusts some of these settings.
    const FD = {
        // - langauge (default to EN)
        language: '',
        // - Sponsored word
        sponsoredWord: [],
        sponsoredWordMP: [],
        // - Suggestions
        // -- "current" feed
        suggestions : [],
        // -- news feed suggestions
        nfSuggestions: [],
        // -- groups feed suggestions
        gfSuggestions: [],
        // -- videos feed suggestions
        vfSuggestions: [],
        // -- videos feed - partial matches (first block)
        videosTextMatch : '',

        // - URLs for each Feed (for when to run mopping up code)
        newsURL: ['https://www.facebook.com/', 'https://www.facebook.com/?sk=h_chr'],
        groupsURL: ['https://www.facebook.com/groups/', 'https://www.facebook.com/groups/?ref=bookmarks', 'https://www.facebook.com/groups/feed/'],
        videosURL: ['https://www.facebook.com/watch/', 'https://www.facebook.com/watch/?ref=tab', 'https://www.facebook.com/videos'],
        marketplaceURL: ['https://www.facebook.com/marketplace/', 'https://www.facebook.com/watch/?ref=tab', 'https://www.facebook.com/marketplace/?ref=bookmark', 'https://www.facebook.com/marketplace/?ref=app_tab'],

        // - Query String selectors for getting a collection of Feed posts / elements
        QS : '',
        newsFeedQS: 'div[role="feed"] > div',
        groupsFeedQS: 'div[role="feed"] > div',
        // - News and Groups feeds post's blocks (posts have 1-4 blocks)
        // -- used by the various fn getTextContent() and fn doMoppingInfoBox()
        postBlocksQS: ':scope > div > div > div > div > div > div > div > div > div > div > div > div > div',
        // - groups feed intro posts - exclude procseed post(s)
        // --- two variations in stucture
        groupsNonFeedsQS: ['div[role="main"] > div > div > div > div:nth-of-type(2) > div:not([' + postAtt + '])',
                           'div[role="main"] div[role="main"] > div > div > div > div:first-of-type > div > div:first-of-type > div:not([' + postAtt + '])'],
        // - not regular feed post blocks (getTextContentNotRegularPost())
        nonRegularPostBlocksQS: ':scope > div > div > div > div > div > div > div:first-of-type',
        // - videos feed
        videosFeedQS: 'div#watch_feed div[data-pagelet="MainFeed"] > div > div > div > div' ,
        // - video feed post's blocks
        videoBlockQS: ':scope > div > div > div > div > div:nth-of-type(2) > div',
        // - video "new video for you" (post above feed)
        videoNonFeedQS: '[id=watch_feed] > div > div:first-of-type > div',
        videNonFeedPostBlock: ':scope > div:first-of-type',
        // - marketplace - exclude boxes already processed.
        marketplaceQS: 'div[data-pagelet="StreamingBrowseFeed"] > div > div:not([' + postAtt +']',
        // - marketplace extra css rule
        marketplaceCSS: 'div[data-pagelet="StreamingBrowseFeed"] > div > div',
        // - right rail sponsored box
        rightRailQS: 'div[data-pagelet="RightRail"] > div:first-of-type > span',
        // - create room
        createRoomQS: ['div[data-pagelet="VideoChatHomeUnit"]:not([' + postAtt + '])',
                       'div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([' + postAtt + '])'],

        // - Feed toggles
        isNF : false,
        isGF : false,
        isVF : false,
        isMP : false,
        isAF : false,

        // remember current URL - used for page change detection
        prevURL : '',

        // number of posts to check/inspect
        // - need to re-process existing posts as sometimes fb is slow to populate them
        // - nb: fb has 2-3 "dummies" at the bottom of the feed.
        inspectPostCount : 15,
        // element containing echo message about post(s) being hidden
        echoEl : null,
        // how many consecutive posts are hidden
        echoCount : 0,
        // count of checks made for non-feed posts
        nfpLoopCount : 0,
        // max checks for non-feed posts
        nfpLoopCountLimit: 50,

        // indicate if create-room was found and stop looking for it
        crFound: false,
        // indicate if right-rail was found and stop looking for it
        // (code will set to true to stop hunting for RR)
        rrFound: false,

        // CSS class names
        cssHide : '',
        cssPinkify : '',
        cssEcho : '',
    };
    function initFD_and_insertCSS(){
        // run this function @ start up (in runMO())
        // - language
        let lang = document.head.parentNode.lang || 'en';
        FD.language = (LANGUAGES.indexOf(lang) >= 0) ? lang : 'en';
        // - sponsored word
        FD.sponsoredWord = SPONSORED_KEYWORD.keywords[FD.language];
        FD.sponsoredWordMP = SPONSORED_KEYWORD.keywordsMP[FD.language];

        let suggestions = [];
        // - News Feed suggestions
        if (PEOPLE_YOU_MAY_KNOW.hideThis) suggestions.push(PEOPLE_YOU_MAY_KNOW.keywords[FD.language]);
        if (SUGGESTED_FOR_YOU.hideThis) suggestions.push(SUGGESTED_FOR_YOU.keywords[FD.language]);
        if (SUGGESTED_PAGES.hideThis) suggestions.push(SUGGESTED_PAGES.keywords[FD.language]);
        if (SUGGESTED_EVENTS.hideThis) suggestions.push(SUGGESTED_EVENTS.keywords[FD.language]);
        if (PAID_PARTNERSHIP.hideThis) suggestions.push(PAID_PARTNERSHIP.keywords[FD.language]);
        if (SUGGESTED_LIVE_GAMES.hideThis) suggestions.push(SUGGESTED_LIVE_GAMES.keywords[FD.language]);
        if (EXPLORE_BRANDS.hideThis) suggestions.push(EXPLORE_BRANDS.keywords[FD.language]);
        if (EVENTS_YOU_MAY_LIKE.hideThis) suggestions.push(EVENTS_YOU_MAY_LIKE.keywords[FD.language]);
        if (VIDEOS_JUST_FOR_YOU.hideThis) suggestions.push(VIDEOS_JUST_FOR_YOU.keywords[FD.language]);
        if (PAGE_SUBSCRIBE_TO.hideThis) suggestions.push(PAGE_SUBSCRIBE_TO.keywords[FD.language]);
        FD.nfSuggestions = suggestions;

        // - Groups Feed suggestions
        suggestions = [];
        if (JOIN_GROUP_1.hideThis) suggestions.push(JOIN_GROUP_1.keywords[FD.language]);
        if (JOIN_GROUP_2.hideThis) suggestions.push(JOIN_GROUP_2.keywords[FD.language]);
        if (SUGGESTED_GROUPS.hideThis) suggestions.push(SUGGESTED_GROUPS.keywords[FD.language]);
        if (SUGGESTED_FOR_YOU_GROUPS.hideThis) suggestions.push(SUGGESTED_FOR_YOU_GROUPS.keywords[FD.language]);
        if (POST_PUBLIC_GROUP.hideThis) suggestions.push(POST_PUBLIC_GROUP.keywords[FD.language]);
        if (SUGGESTED_POST_PUBLIC_GROUP.hideThis) suggestions.push(SUGGESTED_POST_PUBLIC_GROUP.keywords[FD.language]);
        if (FROM_A_GROUP_YOUR_FRIEND_IS_IN.hideThis) suggestions.push(FROM_A_GROUP_YOUR_FRIEND_IS_IN.keywords[FD.language]);
        if (POPULAR_NEAR_YOU.hideThis) suggestions.push(POPULAR_NEAR_YOU.keywords[FD.language]);
        if (SEE_MORE_GROUPS.hideThis) suggestions.push(SEE_MORE_GROUPS.keywords[FD.language]);
        if (FRIENDS_GROUPS.hideThis) suggestions.push(FRIENDS_GROUPS.keywords[FD.language]);
        if (NEW_FOR_YOU.hideThis) suggestions.push(NEW_FOR_YOU.keywords[FD.language]);
        if (BECAUSE_YOU_VIEWED_A_SIMILAR_POST.hideThis) suggestions.push(BECAUSE_YOU_VIEWED_A_SIMILAR_POST.keywords[FD.language]);

        FD.gfSuggestions = suggestions;

        // - Videos Feed Suggestions
        suggestions = [];
        if (PAID_PARTNERSHIP_VIDEOS.hideThis) suggestions.push(PAID_PARTNERSHIP_VIDEOS.keywords[FD.language]);
        if (NEW_FOR_YOU_VIDEOS.hideThis) suggestions.push(NEW_FOR_YOU_VIDEOS.keywords[FD.language]);
        FD.vfSuggestions = suggestions;

        // - Videos Feed text match
        FD.videosTextMatch = '';
        if ((VIDEOS_BLOCK_TEXT.hideThis) && (VIDEOS_BLOCK_TEXT.keywords.length)) {
            // - do not apply trim() - retain what user has inputted.
            FD.videosTextMatch = VIDEOS_BLOCK_TEXT.keywords.map(btext => btext.toLowerCase());
        }
        else {
            VIDEOS_BLOCK_TEXT.hideThis = false;
        }

        // - right-rail found flag - default is false;
        //   (set to true to stop mopping up RR)
        FD.rrFound = !(RIGHT_RAIL_SPONSORED.hideThis);

        // - info_boxes
        if (INFO_BOXES.hideThis) {
            if (INFO_BOXES.paths.length === 0) {
                INFO_BOXES.hideThis = false;
            }
        }

        // ** CSS styles for hiding or highlighting the selected posts / element
        function generateClassName() {
            // - generate class names (first letter must be an alphabet)
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let str = chars.charAt(Math.floor(Math.random() * (chars.length-10)));
            for (let i = 0; i < 12; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return str;
        }
        // - remember class names (for other functions to use)
        FD.cssHide = generateClassName();
        FD.cssPinkify = generateClassName();
        FD.cssEcho = generateClassName();
        // - insert Styles (as classes)
        let head = document.getElementsByTagName('head')[0];
        let styleEl = document.createElement('style');
        styleEl.setAttribute('type', 'text/css');
        // - NF/GF/VF
        // -- remove margins
        if (!DEBUG) {
            // (not_ in debugging mode)
            // (n/a for debugging)
            styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' {margin:0 !important;}'));
        }
        // -- feed : child div
        styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' > div,'));
        // -- right-rail : child span div
        styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' > span > div,'));
        // - Marketplace
        styleEl.appendChild(document.createTextNode(FD.marketplaceCSS + ' .' + FD.cssHide));
        if (!DEBUG) {
            // (not in debugging mode)
            // - what style(s) to apply:
            styleEl.appendChild(document.createTextNode(' {display:none !important;}'));
        }
        else {
            // (in debugging mode
            styleEl.appendChild(document.createTextNode(' {border: 5px dotted orange !important;}'));
        }

        // - pinkify
        // -- feed : child div
        styleEl.appendChild(document.createTextNode('.' + FD.cssPinkify + ' > div,'));
        // -- right-rail : child span div (right-rail)
        styleEl.appendChild(document.createTextNode('.' + FD.cssPinkify + ' > span > div'));
        // -- what style(s) to apply:
        styleEl.appendChild(document.createTextNode(' {border: 5px dotted pink !important;}'));

        // - echo msg
        let colourMsg = (VERBOSITY.colourText === '') ? '' : 'color: ' + VERBOSITY.colourText + '; ';
        colourMsg += (VERBOSITY.colourBackground === '') ? '' : 'background-color: ' + VERBOSITY.colourBackground + '; ';
        styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' > p {margin: 1.25rem 0 1.5rem 0 !important; padding: 0.75rem 1rem; border-radius: 0.55rem; font-style: italic; ' + colourMsg + '}'));
        // - add above styles to HEAD.
        head.appendChild(styleEl);

        // - set the right-rail query selector - excludes the hide class.
        FD.rightRailQS = 'div[data-pagelet="RightRail"] > div:first-of-type:not(.' + FD.cssHide + ') > span';
    }

    // adjust some settings if URL has changed.
    function setFeedSettings() {
        if (FD.prevURL !== window.location.href) {
            //console.info(log + "sFS() - resetting");
            // - remember current page's URL
            FD.prevURL = window.location.href;
            // - reset feeds flags
            FD.isNF = false;
            FD.isGF = false;
            FD.isVF = false;
            FD.isMP = false;
            if (FD.newsURL.indexOf(FD.prevURL) >= 0) {
                FD.isNF = true;
                FD.QS = FD.newsFeedQS;
                FD.suggestions = FD.nfSuggestions;
            }
            else if (FD.groupsURL.indexOf(FD.prevURL) >= 0) {
                FD.isGF = true;
                FD.QS = FD.groupsFeedQS;
                FD.suggestions = FD.gfSuggestions;
            }
            else if (FD.videosURL.indexOf(FD.prevURL) >= 0) {
                FD.isVF = true;
                FD.QS = FD.videosFeedQS;
                FD.suggestions = FD.vfSuggestions;
            }
            else if (FD.marketplaceURL.indexOf(FD.prevURL) >= 0) {
                FD.isMP = true;
                FD.QS = FD.marketplaceQS;
                FD.suggestions = [];
            }
            else {
                FD.QS = '';
                FD.suggestions = [];
            }
            FD.isAF = (FD.isNF || FD.isGF || FD.isVF || FD.isMP);

            // - reset count of consecutive posts hidden
            FD.echoCount = 0;
            // - reset non-feed-posts count
            FD.nfpLoopCount = 0;
            // - reset create-room found flag
            FD.crFound = (CREATE_ROOM.hideThis === false);
            // - reset right-rail found flag
            // (set to true to stop mopping up the RR)
            FD.rrFound = (RIGHT_RAIL_SPONSORED.hideThis === false);

            return true;
        }
        else {
            //console.info(log + "sFS() - NOT resetting");
            return false;
        }
    }

    function getTextContent(post) {
        // - get the text node values of the regular feed posts
        // -- scan the top portion of the posts (first two blocks)
        // -- return an array of text values
        let blocks = Array.from(post.querySelectorAll(FD.postBlocksQS));
        let arrayTextValues = [];
        if (blocks.length) {
            // - process first two blocks
            // - block 0 = Suggested headings, block 1 = title/heading, (block 2 = content)
            // - nb: some suggested posts only have one block ...
            let bL = (blocks.length > 1 ? 2 : 1); // blocks.length);
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
        // console.info(log + 'gTC:', arrayTextValues, post);
        return arrayTextValues;
    }
    function getTextContentFromNonRegularPost(post) {
        // - get the text node values of the post(s) above the regular feed stream
        // -- scan the top portion of the posts (first block)
        // -- return an array of text values
        let block = post.querySelectorAll(FD.nonRegularPostBlocksQS)[0];
        let arrayTextValues = [];
        if (block) {
            let n,
                walk=document.createTreeWalker(block,NodeFilter.SHOW_TEXT,null,false);
            while((n=walk.nextNode())) {
                let val = n.textContent.trim();
                if ((val !== '') && (val.length > 1)) {
                    // - skip < 2 char strings.
                    arrayTextValues.push(val);
                }
            }
        }
        return arrayTextValues;
    }
    function getTextContentRRMP(post) {
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
    function getTextContentVF(post) {
        // get text node values of video feeds - skip certain text values.
        // -- scan the top portion of the posts (first block)
        // - return as one long string.
        let block = post.querySelectorAll(FD.videoBlockQS)[0];
        let arrayTextValues = [];
        if (block) {
            let n,
                walk=document.createTreeWalker(block,NodeFilter.SHOW_TEXT,null,false);
            while((n=walk.nextNode())) {
                let val = n.textContent.trim();
                if ((val !== '') && (val.length > 1)) {
                    // - skip < 2 char strings
                    arrayTextValues.push(val.toLowerCase());
                }
            }
        }
        return arrayTextValues.join(' ');
    }
    function echoHiddenPost(post, reason) {
        if ((VERBOSITY.level > 0) && (reason !== '')) {
            if (VERBOSITY.level === 1) {
                FD.echoCount = 1;
            }
            if (FD.echoCount < 2) {
                // - 1 post hidden
                let echoEl = document.createElement('p');
                echoEl.textContent = VERBOSITY.keywords[FD.language][0] + reason;
                // - add after post being hidden (issue with first post being hidden & fb updating it)
                post = post.querySelector(':scope div:first-of-type');
                if (post){
                    post.after(echoEl);
                    FD.echoEl = echoEl;
                    return true;
                }
                else {
                    // post has been changed while being processed (very rare)
                    return false;
                }
            }
            else {
                // - 2+ posts hidden
                FD.echoEl.textContent = FD.echoCount + VERBOSITY.keywords[FD.language][1];
                return true;
            }
        }
        return true;
    }
    function pinkify(post, reason) {
        // apply a pink border around a post / element (used in special cases)
        if (echoHiddenPost(post, reason)) {
            post.classList.add(FD.cssPinkify);
        }
    }
    function hide(post, reason) {
        // hide something ..
        // - also call up echo 'post is hidden' text functions
        if (echoHiddenPost(post, reason)) {
            post.classList.add(FD.cssHide);
            // - enable the following if wanting to inspect each post's reason for being hidden (in developer's tools)
            post.setAttribute(postAtt + '-rule', reason);
        }
    }

    function isSponsored(post) {
        // Is it a Sponsored post?
        let csr; // getComputedStyle results
        // within this post, find the SPAN element(s) having aria-label = Sponsored
        // - usually only one is found
        let alSpans = Array.from(post.querySelectorAll('span[aria-label="' + FD.sponsoredWord + '"]'));
        let ss = 1; // sponsored structure (1 = uses aria-label, 2 = uses a tag.
        if (alSpans.length === 0) {
            // not found, try another structure: A and aria-label structure;
            alSpans = Array.from(post.querySelectorAll('a[href="#"][aria-label="label"], a[aria-label="' + FD.sponsoredWord + '"]'));
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
                                //   (getComputedStyle() is an "expensive" time operation)
                                break;
                            }
                            if (daText === FD.sponsoredWord) {
                                break;
                            }
                        }
                    }
                }
            }
            //console.info(log + 'is Sponsored post:', '>' + daText + '<');
            // do we hide this post?
            return ((daText.length > 0) && (FD.sponsoredWord === daText));
        }
    }
    function isSuggested(post, isRegularPost) {
        // - check for suggestions
        let ptexts = (isRegularPost) ? getTextContent(post) : getTextContentFromNonRegularPost(post);
        let suggestionIndex = -1;
        for (let p = 0, ptL = ptexts.length; p < ptL; p++) {
            suggestionIndex = FD.suggestions.indexOf(ptexts[p]);
            if (suggestionIndex >= 0) {
                break;
            }
        }
        return suggestionIndex;
    }

    function doMoppingCreateRoom() {
        if (CREATE_ROOM.hideThis) {
            for (let r = 0; r < 2; r++) {
                let createRoom = document.querySelector(FD.createRoomQS[r]);
                //console.info(log + 'CR:', createRoom);
                if (createRoom) {
                    createRoom.setAttribute(postAtt, createRoom.innerHTML.length);
                    //console.info(log + 'CR-msz', createRoom);
                    // - get the room's wrapper and hide the room at that level.
                    createRoom = createRoom.parentElement.parentElement;
                    // - stop checking for create room element
                    FD.crFound = true;
                    //pinkify(createRoom, '');
                    hide(createRoom, '');
                    break;
                }
            }
        }
        // - increment nfpLoopCount so we only call this function a few times and then stop.
        FD.nfpLoopCount++;
    }
    function doMoppingRightRail() {
        // - hide the right rail sponsored box.
        let rrbox = document.querySelector(FD.rightRailQS);
        if (rrbox) {
          if (!rrbox.classList.contains(FD.cssHide)) {
            let ptexts = getTextContentRRMP(rrbox);
            // console.info(log + 'rrbox tc:', ptexts);
            if (ptexts.indexOf(FD.sponsoredWord) >= 0) {
                FD.echoCount = 0;
                hide(rrbox, FD.sponsoredWord);
                // make it stop checking right-rail.
                FD.rrFound = true;
            }
          }
        }
    }
    function doMoppingInfoBoxes(post) {
        // hide the info boxes that appear in posts having a certain topic.
         if(INFO_BOXES.hideThis){
             let blocks; // - post's major blocks (sections)
             let minBlocks; // - minimum blocks in this post that has an info box
             let infoBlock; // - which block has the info box
             if (FD.isNF || FD.isGF) {
                 // - block 0 = friend posted then commented | shop added | suggested
                 // - block 1 = title/heading, date/time | group name, author, date/time
                 // - block 2 = content
                 // - block 3 = info box OR comments
                 // - block 4 = comments (if no info box)
                 blocks = post.querySelectorAll(FD.postBlocksQS + ':not([msz])');
                 minBlocks = 5;
                 infoBlock = 3;
             }
             else if (FD.isVF) {
                 // - block 0 = title/heading,
                 // - block 1 = video
                 // - block 2 = info box OR comments
                 // - block 3 = comments (if no info box)
                 blocks = post.querySelectorAll(FD.videoBlockQS + ':not([msz])');
                 minBlocks = 4;
                 infoBlock = 2;
             }
             else {
                 return;
             }
             if (blocks.length >= minBlocks) {
                 let block = blocks[infoBlock];
                 if (!block.hasAttribute(postAtt)) {
                     for (let j = 0, jL = INFO_BOXES.paths.length; j < jL; j++) {
                         let links = Array.from(block.querySelectorAll('a[href*="' + INFO_BOXES.paths[j] + '"]'));
                         if (links.length) {
                             block.setAttribute(postAtt, block.innerHTML.length);
                             //pinkify(block, '');
                             // - hide with no echo msg.
                             hide(block, '');
                             break;
                         }
                     }
                 }
             }
         }
    }

    function doMopping() {
        // News/Groups/Videos Feed
        let posts = Array.from(document.querySelectorAll(FD.QS));
        if (posts.length) {
            // - consecutive hidden posts count
            FD.echoCount = 0;
            // - skip the first lot of posts already processed
            let quickScanCount = 0;
            if (posts.length - FD.inspectPostCount > 0) {
                quickScanCount = posts.length - FD.inspectPostCount;
                for (let i = 0; i < quickScanCount; i++) {
                    if(posts[i].classList.contains(FD.cssHide)) {
                        FD.echoCount++;
                    }
                    else {
                        FD.echoCount = 0;
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
                    if (post.classList.contains(FD.cssHide)) {
                        hiding = true;
                        FD.echoCount++;
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

                        // - check for suggestions
                        if (FD.isNF || FD.isGF || FD.isVF) {

                            let suggestionIndex = isSuggested(post, true);
                            if (suggestionIndex >= 0) {
                                FD.echoCount++;
                                hiding = true;
                                hide(post, FD.suggestions[suggestionIndex]);
                                break;
                            } else if (isSponsored(post)) {
                                // - if not suggested, check for sponsoredWord
                                FD.echoCount++;
                                hiding = true;
                                hide(post, FD.sponsoredWord);
                                break;
                            }
                        }
                        if ((!hiding) && (FD.isVF) && (VIDEOS_BLOCK_TEXT.hideThis)) {
                            // - videos - partial text matches
                            let vTexts = getTextContentVF(post);
                            for (let v = 0, vL = FD.videosTextMatch.length; v < vL; v++) {
                                let keyword = FD.videosTextMatch[v];
                                if (vTexts.indexOf(keyword) >= 0) {
                                    FD.echoCount++;
                                    hiding = true;
                                    hide(post, VIDEOS_BLOCK_TEXT.keywords[v]);
                                    break;
                                }
                            }
                        }
                        // - if not yet hidden, check for info boxes
                        // -- info boxes that appear between post article and comments.
                        if (!hiding) {
                            doMoppingInfoBoxes(post);
                        }
                    }
                    // - a clean post ..
                    if (!hiding) {
                        FD.echoCount = 0;
                    }
                }
            }
        }
    }
    function doMoppingGF() {
        // check Groups' non-feed post(s)
        // - these are the "intro" posts that appear above the feed's title.
        // -- this function is called repeatedly a few times - up to FD.inspectPostCount.
        //    (due to post sometime slow to show up)
        // -- there's a couple of variations in non-feed post structure
        for (let q = 0; q < 2; q++) {
            let posts = Array.from(document.querySelectorAll(FD.groupsNonFeedsQS[q]));
            if (posts.length) {
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
                            FD.echoCount = 1;
                            //pinkify( post, FD.suggestions[sugg]);
                            hide( post, FD.suggestions[sugg]);
                            post.setAttribute(postAtt, post.innerHTML.length);
                        }
                    }
                }
            }
        }
        FD.nfpLoopCount++;
    }
    function doMoppingVF() {
        // check Videos' non-feed post(s)
        // - these are the "intro" posts that appear above the feed's title.
        // -- this function is called repeatedly a few times - up to FD.inspectPostCount.
        //    (due to post sometime slow to show up)
        let posts = Array.from(document.querySelectorAll(FD.videosNonFeedsQS));
        if (posts.length) {
            for (let i = 0, iL = posts.length; i < iL; i++) {
                let post = posts[i];
                if ((post.innerHTML.length < 129) || (post.textContent.length === 0)) {
                    // skip (flag them to be ignored)
                    if (!post.hasAttribute(postAtt)) {
                        post.setAttribute(postAtt, post.innerHTML.length);
                    }
                }
                else {
                    let suggestionIndex = isSuggested(post, false);
                    if (suggestionIndex >= 0) {
                        FD.echoCount = 1;
                        //pinkify( post, FD.suggestions[suggestionIndex]);
                        hide( post, FD.suggestions[suggestionIndex]);
                        post.setAttribute(postAtt, post.innerHTML.length);
                    }
                }
            }
        }
        FD.nfpLoopCount++;
    }
    function doMoppingMP() {
        // MarketPlace Feed
        // - get collection of blocks (which haven't been read/processed)
        let mpblocks = Array.from(document.querySelectorAll(FD.QS));
        for (let i = 0, iL = mpblocks.length; i < iL; i++) {
            let mpblock = mpblocks[i];
            console.info(log + 'mpblock:', mpblock);
            // - does this block of boxes have the sponsored word?
            let mptexts = getTextContentRRMP(mpblock);
            if (mptexts.indexOf(FD.sponsoredWordMP) >= 0) {
                // - which heading has the sponsored word?
                let mpheadings = Array.from(mpblock.querySelectorAll(':scope > div > div > span > div > div > div > div:nth-of-type(1) > div a > span'));
                // - hide the heading having the sponsored word.
                for (let k = 0, kL = mpheadings.length; k < kL; k++) {
                    let mpheading = mpheadings[k];
                    if (mpheading.textContent === FD.sponsoredWordMP) {
                        hide(mpheading.parentElement.parentElement, '');
                    }
                }
                // get collection boxes in this block
                let mpboxes = Array.from(mpblock.querySelectorAll(':scope > div > div > span > div > div > div > div:nth-of-type(2) > div'));
                // which box has the sponsored word?
                for (let j = 0, jL = mpboxes.length; j < jL; j++) {
                    let mpbox = mpboxes[j];
                    mptexts = getTextContentRRMP(mpbox);
                    if (mptexts.indexOf(FD.sponsoredWordMP) >= 0) {
                        hide(mpbox, '');
                    }
                }
            }
            mpblock.setAttribute(postAtt, mpblock.innerHTML.length);
        }
    }


    // ** Mutations processor
    function bodyMutating(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (FD.prevURL !== window.location.href) {
                    // - page url has changed ... refresh the bodyObserver.
                    runMO();
                }
                // console.info(log + 'A/N/G/V/M:', FD.isAF, FD.isNF, FD.isGF, FD.isVF, FD.isMP);
                else if (FD.isAF) {
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        let mnode = mutation.addedNodes[i];
                        if (mnode.tagName === 'DIV') {
                            if ((mnode.innerHTML.length < 129) || (mnode.textContent.length === 0)) {
                                // - skip these ...
                            }
                            else if (FD.isNF) {
                                if (FD.crFound === false) {
                                    doMoppingCreateRoom();
                                }
                                if (FD.rrFound === false) {
                                  let rrbox = document.querySelector(FD.rightRailQS);
                                    if (rrbox && rrbox.innerHTML.length > 64) {
                                        doMoppingRightRail();
                                    }
                                }
                                doMopping();
                                break;
                            }
                            else if (FD.isGF) {
                                if (FD.nfpLoopCount < FD.nfpLoopCountLimit) {
                                    doMoppingGF();
                                }
                                doMopping();
                                break;
                            }
                            else if (FD.isVF) {
                                if (FD.nfpLoopCount < FD.nfpLoopCountLimit) {
                                    doMoppingVF();
                                }
                                doMopping();
                                break;
                            }
                            else if (FD.isMP) {
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
    let firstRun = true;
    function runMO() {
        // run code soon as HEAD and BDDY are available.
        if (document.head && document.body) {
            if (DEBUG) console.info(log + 'runMO : head and body available');
            if (firstRun) {
                initFD_and_insertCSS();
                firstRun = false;
            }
            if (setFeedSettings()) {
                if (DEBUG) console.info(log + 'runMO : feed settings have been reset, A/N/G/V/M:', FD.isAF, FD.isNF, FD.isGF, FD.isVF, FD.isMP);
                // - clear out mutations not yet processed ...
                let mutations = bodyObserver.takeRecords();
                bodyObserver.disconnect();
                // - and start up the osbserver again.
                bodyObserver.observe(document.body, {childList: true, subtree: true, attributes: false});
            }
        }
        else {
            if (DEBUG) console.info(log + 'head and/or body not available');
            setTimeout(runMO, 25);
        }
    }
    runMO();
})();
