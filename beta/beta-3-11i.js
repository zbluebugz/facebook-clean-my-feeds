// ==UserScript==
// @name         facebook - ad block v3.11i (beta)
// @description  Hide Sponsored and Suggested posts in FB News Feed, Groups Feed and Watch Videos Feed
// @version      3.11i
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
    v3.11 :: 15/11/2021: Rewrite
                         Changed timings to MutationsObserver.
                         Adjusted sponsored word detection block
                         Added extra Suggestions keywords
                         Added detection for Groups Feed, Videos Feed (Watch), MarketPlace Feed
                         Added option to hide Information Boxes (e.g. Covid Information, Global Climate Info)
                         Added German (incomplete)
                         Added option to display 'post is hidden' text
                         Added option to hide videos based on text (partial match)

    ** TO DO **
    - complete English translation
    - complete Portuguese translation
    - complete German translation
*/

(function() {
    'use strict';

    // -- -- START OF OPTIONS -- --

    // *** Debugging:
    // - if true, show a border on the post, else hide the post.
    const DEBUG = false;

    // *** Sponsored posts
    const SPONSORED_KEYWORD = {
        hideThis: true,
        keywords: {
            // english
            'en': 'Sponsored',
            // portuguese (portugal)
            'pt': 'Patrocinado',
            // deutsch (german)
            'de': 'Gesponsert'
        }
    };

    // *** Watch/Videos Feed
    // - Text within videos to block (partial match)
    // -- array of values (case-insensitive)
    const VIDEOS_BLOCK_TEXT = {
        hideThis: true,
        keywords: [' 2020', 'gender reveal', 'gender. reveal','for entertainment purposes', 'when she ', 'when he ', 'Gamer']
    }

    // *** Verbosity:
    // - display a message if a post is hidden.
    const VERBOSITY = {
        level: 1, // 0 = Say nothing, 1 = Say "1 post hidden. Rule: xyz" for each post, 2 = Say "23 posts hidden" (consecutively/consecutivamente/nacheinander)
        keywords: {
            'en' : ['1 post hidden. Rule: ', ' posts hidden'],
            'pt' : ['1 postagem oculta. Regra: ', ' postagens ocultas'],
            'de' : ['1 Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt'],
        }
    };

    // *** News Feed :: Suggested posts
    // - People you may know
    const PEOPLE_YOU_MAY_KNOW = {
        hideThis: true,
        keywords: {
            'en': 'People you may know',
            'pt': 'Pessoas que talvez conheças',
            'de': 'Personen, die du kennen könntest'
        }
    };
    // - Suggested for you
    const SUGGESTED_FOR_YOU = {
        hideThis: true,
        keywords: {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich'
        }
    };
    // - Suggested pages
    const SUGGESTED_PAGES = {
        hideThis: true,
        keywords: {
            'en': 'Suggested Pages',
            'pt': 'Páginas sugeridas',
            'de': 'Vorgeschlagene Seiten'
        }
    };
    // - Suggested events
    const SUGGESTED_EVENTS = {
        hideThis: false,
        keywords: {
            'en': 'Suggested Events',
            'pt': 'Eventos Sugeridos',
            'de': 'Suggested Events' // --- need translation
        }
    };
    // - Events you may like
    const EVENTS_YOU_MAY_LIKE = {
        hideThis: false,
        keywords: {
            'en': 'Events you may like',
            'pt': 'Events you may like', // --- need translation
            'de': 'Events you may like' // --- need translation
        }
    };
    // - Paid partnership
    // -- page you follow is "sponsoring" another page's post (e.g. job)
    const PAID_PARTNERSHIP = {
        hideThis: true,
        keywords: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft' // (Paid advertising partnership)
        }
    };
    // - Suggested live gaming video
    const SUGGESTED_LIVE_GAMES = {
        hideThis: false,
        keywords: {
            'en': 'Suggested live gaming video',
            'pt': 'Vídeo sugerido de jogos ao vivo',
            'de': 'Suggested live gaming video', // --- need translation
        }
    };
    // - Explore brands for you
    const EXPLORE_BRANDS = {
        hideThis: false,
        keywords: {
            'en': 'Explore brands for you',
            'pt': 'Explore brands for you', // --- need translation
            'de': 'Explore brands for you' // --- need translation
        }
    };
    // - Videos just for you
    const VIDEOS_JUST_FOR_YOU = {
        hideThis: false,
        keywords: {
            'en': 'Videos just for you',
            'pt': 'Vídeos só para ti',
            'de': 'Videos just for you' // --- need translation
        }
    };
    // - Page you could subscribe to
    const PAGE_SUBSCRIBE_TO = {
        hideThis: false,
        keywords: {
            'en': 'Page you could subscribe to', // --- need translation (not see in EN, but seen in DE)
            'pt': 'Page you could subscribe to', // --- need translation
            'de': 'Seite, die du abonnieren könntest'
        }
    }


    // *** Groups Feed :: Hide some Suggested posts
    // -- nb: some of these rules overlap each other
    // -- e.g. "Join" is shown up in many non-subscribed group posts,
    //    and if many of these groups' rules "hideThis = false",
    //    but JOIN_GROUP_2.hideThis = true,
    //    then those groups rules (hideThis=false) will be ignored.
    // - Suggested groups
    const SUGGESTED_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'Suggested groups',
            'pt': 'Grupos sugeridos',
            'de': 'Vorgeschlagene Gruppen'
        }
    };
    // - Suggested for you (Groups you might be interested in.)
    const SUGGESTED_FOR_YOU_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich'
        }
    };
    // - Post from public group
    // -- (lots of posts from groups not subscribed too)
    const POST_PUBLIC_GROUP = {
        hideThis: true,
        keywords: {
            'en': 'Post from public group',
            'pt': 'Postagem de grupo público',
            'de': 'Post from public group' // --- need translation
        }
    };
    // - Suggested post from a public group
    // -- (lots of posts from groups not subscribed too)
    const SUGGESTED_POST_PUBLIC_GROUP = {
        hideThis: true,
        keywords: {
            'en': 'Suggested post from a public group',
            'pt': 'Publicação sugerida de um grupo público',
            'de': 'Vorgeschlagener Beitrag aus einer öffentlichen Gruppe'
        }
    };
    // - From a group that your friend is in
    const FROM_A_GROUP_YOUR_FRIEND_IS_IN = {
        hideThis: true,
        keywords: {
            'en': 'From a group that your friend is in',
            'pt': 'De um grupo em que o teu amigo/a é membro',
            'de': 'Aus einer Gruppe, in der dein/e Freund/in ist'
        }
    };
    // - Popular near you / in your area
    const POPULAR_NEAR_YOU = {
        hideThis: false,
        keywords: {
            'en': 'Popular near you',
            'pt': 'Populares perto de ti',
            'de': 'Beliebt in deiner Nähe'
        }
    };
    // - Join Group
    const JOIN_GROUP = {
        hideThis: true,
        keywords: {
            'en': 'Join Group',
            'pt': 'Aderir ao grupo',
            'de': 'Gruppe beitreten'
        }
    };
    // - See More Groups - from post's heading "More like XYZ (group you've joined)"
    // -- nb: some non-subscribed group posts also have this keyword.
    // -- nb: it's a hit/miss on this rule - getTextContent() returns X number of text nodes
    //        and having a larger X might trigger false postives.
    const SEE_MORE_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'See More Groups',
            'pt': 'Ver mais grupos',
            'de': 'Weitere Gruppen ansehen'
        }
    };
    const BECAUSE_YOU_VIEWED_A_SIMILAR_POST = {
        hideThis: true,
        keywords: {
            'en': 'Because you viewed a similar post',
            'pt': 'Porque viste uma publicação semelhante', // - becaus you saw a similar publication
            'de': 'Because you viewed a similar post' // --- need translation
        }
    }
    // - Occasionally some non-subscribed group posts slip in,
    //   but their Suggested keyword is missing ...
    //   so this rule will capture those posts
    //   nb: will also capture posts mentioned above
    //       and any new keywords that fb creates and have the Join button
    const JOIN_GROUP_2 = {
        hideThis: false,
        keywords: {
            'en': 'Join',
            'pt': 'Aderir',
            'de': 'Beitreten'
        }
    };
    // - Friends' groups
    // -- usually shows up at top of feed.
    const FRIENDS_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'Friends\' groups',
            'pt': 'Grupos dos amigos',
            'de': 'Gruppen von Freunden'
        }
    };
    // - New for you
    // -- usually shows up at top of feed.
    const NEW_FOR_YOU = {
        hideThis: false,
        keywords: {
            'en': 'New for you',
            'pt': 'Novidades para ti',
            'de': 'New for you' // --- need translation
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
            'de': 'Bezahlte Werbepartnerschaft' // (Paid advertising partnership)
        }
    };


    // *** Marketplace Feed
    // - hide the sponored ads in the marketplace
    // -- no keywords required - uses SPONSORED_KEYWORD
    const HIDE_MARKETPLACE_SPONSORED = {
        hideThis: true
    };

    // *** News and Videos Feed
    // -- Information boxes that appear between the post and comments
    // - hide the info box, not the post.
    // -- e.g. coronavirus, climate science.
    // -- paths' values must be in lowercase.
    const INFO_BOXES = {
        hideThis: true,
        paths: ['/coronavirus_info/', '/climatescienceinfo/']
    }


    // *** Right rail sponsored box
    // - hide sponsored box that appears in the right hand column when viewing News Feed
    // - uses the SPONSORED_KEYWORD.keywords for keywords.
    const RIGHT_RAIL_SPONSORED = {
        hideThis: true
    }

    // ** Create room (video chat room)
    // - News Feed page only
    // - (no keywords required)
    const CREATE_ROOM = {
        hideThis: true
    }



    // *** Which languages have been setup:
    const LANGUAGES = ['en', 'pt', 'de'];

    // *** Like text
    // - cut off point for getTextContent() / getTextContentVF() functions
    // -- only need text before Like button.
    const LIKE_TEXT = {
        keywords: {
            'en': 'Like',
            'pt': 'Gosto',
            'de': 'Gefällt mir'
        }
    }

    // -- -- END OF OPTIONS -- --



    // -- -- Rest of code - no more toggles, keywords and options to adjust -- --


    // - console log "label" - used for filtering console logs.
    const logPrefix = '-- fbm :: ';
    // - post attribute
    const postAtt = 'msz';



    // - Feed details variables
    // -- nb: setFeedSettings() uses and adjust some of these settings.
    const FD = {
        // - langauge (default to EN)
        language: '',
        // - Sponsored word
        sponsoredWord: '',
        // - Suggestions
        nfSuggestions: [],
        gfSuggestions: [],
        // - no suggestions for Videos
        // -- using partial matches instead.
        videosTextMatch : '',
        // - like text
        likeText : '',

        // - URLs for each Feed
        newsURL: ['https://www.facebook.com/', 'https://www.facebook.com/?sk=h_chr'],
        groupsURL: ['https://www.facebook.com/groups/', 'https://www.facebook.com/groups/?ref=bookmarks', 'https://www.facebook.com/groups/feed/'],
        videosURL: ['https://www.facebook.com/watch/', 'https://www.facebook.com/watch/?ref=tab', 'https://www.facebook.com/videos'],
        marketplaceURL: ['https://www.facebook.com/marketplace/', 'https://www.facebook.com/watch/?ref=tab', 'https://www.facebook.com/marketplace/?ref=bookmark', 'https://www.facebook.com/marketplace/?ref=app_tab'],

        // - document.querySelectorAll( .. ) query string for getting a collection of Feed posts
        QS : '',
        newsFeedQS: 'div[role="feed"] > div',
        groupsFeedQS: 'div[role="feed"] > div',
        // - groups feed intro posts - exclude procseed post(s)
        groupsNonFeedQS1: 'div[role="main"] > div > div > div > div:nth-of-type(2) > div:not([' + postAtt + '])',
        groupsNonFeedQS2: 'div[role="main"] div[role="main"] > div > div > div > div:first-of-type > div > div:first-of-type > div:not([' + postAtt + '])',
        //groupsNonFeedQS2: 'div[role="main"] div[role="main"] > div > div > div > div:first-of-type > div > div:first-of-type > div > div:not([' + postAtt + '])',
        // - videos feed
        videosFeedQS: 'div#watch_feed div[data-pagelet="MainFeed"] > div > div > div > div' ,
        // - marketplace - exclude boxes already processed.
        marketplaceQS: 'div[data-pagelet="StreamingBrowseFeed"] > div > div:not([' + postAtt +']',
        // - marketplace extra css rule
        marketplaceCSS: 'div[data-pagelet="StreamingBrowseFeed"] > div > div',
        // - right rail sponsored box
        rightRailQS: 'div[data-pagelet="RightRail"] > div:first-of-type',
        // - create room
        createRoomQS1: 'div[data-pagelet="VideoChatHomeUnit"]:not([' + postAtt + '])',
        createRoomQS2: 'div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([' + postAtt + '])',

        // Feed toggles
        isNF : false,
        isGF : false,
        isVF : false,
        isMP : false,
        isAF : false,

        // remember current URL - used for page change detection
        prevURL : '',

        // suggestion keywords
        suggestions : [],

        // number of posts to check/inspect
        // - need to re-process existing posts as sometimes fb is slow to populate them
        // - so, how many of the posts at the bottom of the feed to inspect/check
        // - nb: fb has 2-3 "dummies" at the bottom of the feed.
        inspectPostCount : 15,
        // element containing message about post(s) being hidden
        echoEl : null,
        // how many consecutive posts are hidden
        echoCount : 0,
        // count of checks made for non-feed posts
        nfpCount : 0,
        nfpCountLimit: 20,
        // count of checks made for right-rail
        rrCount : 0,
        // need to check for right rail more frequently than nfpCount - sometimes it is slow to show up.
        rrCountLimit: 150,

        // CSS class names
        cssHide : '',
        cssPinkify : '',
        cssEcho : '',

    }
    function initFD_and_insertCSS(){
        // - language
       let lang = document.head.parentNode.lang || 'en';
        FD.language = (LANGUAGES.indexOf(lang) >= 0) ? lang : 'en';
        // - sponsored word
        FD.sponsoredWord = SPONSORED_KEYWORD.keywords[FD.language];

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
        if (SUGGESTED_GROUPS.hideThis) suggestions.push(SUGGESTED_GROUPS.keywords[FD.language]);
        if (SUGGESTED_FOR_YOU_GROUPS.hideThis) suggestions.push(SUGGESTED_FOR_YOU_GROUPS.keywords[FD.language]);
        if (POST_PUBLIC_GROUP.hideThis) suggestions.push(POST_PUBLIC_GROUP.keywords[FD.language]);
        if (SUGGESTED_POST_PUBLIC_GROUP.hideThis) suggestions.push(SUGGESTED_POST_PUBLIC_GROUP.keywords[FD.language]);
        if (FROM_A_GROUP_YOUR_FRIEND_IS_IN.hideThis) suggestions.push(FROM_A_GROUP_YOUR_FRIEND_IS_IN.keywords[FD.language]);
        if (POPULAR_NEAR_YOU.hideThis) suggestions.push(POPULAR_NEAR_YOU.keywords[FD.language]);
        if (SEE_MORE_GROUPS.hideThis) suggestions.push(SEE_MORE_GROUPS.keywords[FD.language]);
        if (JOIN_GROUP.hideThis) suggestions.push(JOIN_GROUP.keywords[FD.language]);
        if (JOIN_GROUP_2.hideThis) suggestions.push(JOIN_GROUP_2.keywords[FD.language]);
        if (FRIENDS_GROUPS.hideThis) suggestions.push(FRIENDS_GROUPS.keywords[FD.language]);
        if (NEW_FOR_YOU.hideThis) suggestions.push(NEW_FOR_YOU.keywords[FD.language]);
        FD.gfSuggestions = suggestions;

        // - Videos Feed text match
        FD.videosTextMatch = '';
        if (VIDEOS_BLOCK_TEXT.hideThis) {
            if (VIDEOS_BLOCK_TEXT.keywords.length) {
                // do not apply trim() - retain what user has inputted.
                FD.videosTextMatch = VIDEOS_BLOCK_TEXT.keywords.map(btext => btext.toLowerCase());
            }
            else {
                VIDEOS_BLOCK_TEXT.hideThis = false;
            }
        }

         if (!RIGHT_RAIL_SPONSORED.hideThis) {
             FD.rrCount = FD.rrCountLimit + 1;
         }

        // - Like text
        FD.likeText = LIKE_TEXT.keywords[FD.language];

        // ** CSS styles for hiding or highlighting the selected posts / element
        function generateClassName() {
            // - generate class names (first letter must be an alphabet)
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let str = chars.charAt(Math.floor(Math.random() * (chars.length-10)));
            for (let i = 0; i < 12; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return str;
        };
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
        styleEl.appendChild(document.createTextNode('.' + FD.cssHide + (!DEBUG ? ' {margin:0 !important;}' : '{}')));
        // -- hide child div
        styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' > div' + (!DEBUG ? ' {display:none !important;}' : ' {border: 5px dotted orange !important;}')));
        // -- hide child span div (right-rail)
        styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' > span > div' + (!DEBUG ? ' {display:none !important;}' : ' {border: 5px dotted orange !important;}')));
        // - Marketplace
        styleEl.appendChild(document.createTextNode(FD.marketplaceCSS + ' .' + FD.cssHide + (!DEBUG ? ' {display:none !important;}' : ' {border: 5px dotted orange !important;}')));
        // - pinkify child div
        styleEl.appendChild(document.createTextNode('.' + FD.cssPinkify + ' > div {border: 5px dotted pink !important;}'));
        // - pinkify child span div (right-rail)
        styleEl.appendChild(document.createTextNode('.' + FD.cssPinkify + ' > span > div {border: 5px dotted pink !important;}'));
        // - echo msg
        //styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' > p {margin: 1.5rem 1rem !important; font-style: italic;}'));
        styleEl.appendChild(document.createTextNode('.' + FD.cssHide + ' > p {margin: 0.25rem 1rem 1.5rem 1rem !important; font-style: italic;}'));
        head.appendChild(styleEl);
    };
    initFD_and_insertCSS();

    function getTextContent(post) {
        // get the text node values of each element
        // return an array of text values.
        // - cannot use split() on post.textContent due to hiccups
        var n,
            arrayTextValues=[],
            walk=document.createTreeWalker(post,NodeFilter.SHOW_TEXT,null,false);
        while(n=walk.nextNode()) {
            let val = n.textContent.trim();
            if ((val !== '') && (val.length > 1)) {
                if (val === FD.likeText) {
                    // 'Like' is the cut off point before reaching comments.
                    break;
                }
                arrayTextValues.push(val);
            }
        }
        // limit the number of post texts to return - if 20+, you could get a false postive match (join rule)
        // (not using 'Like' as cut-off point
        return arrayTextValues.slice(0,20);
    }
    function getTextContentVF(post) {
        // get text node values of video feeds - skip certain text values.
        // - return as one long string.
        var n,
            arrayTextValues=[],
            walk=document.createTreeWalker(post,NodeFilter.SHOW_TEXT,null,false);
        while(n=walk.nextNode()) {
            let val = n.textContent.trim();
            if ((val !== '') && (val.length > 1)) {
                if (val === FD.likeText) {
                    // 'Like' is the cut off point before reaching comments.
                    break;
                }
                arrayTextValues.push(val.toLowerCase());
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
                post = post.querySelector('div:first-of-type');
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
        }
    };

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
            //console.log(logPrefix + '..isSponsored loop', sX);
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
                    //console.info(logPrefix +  nsp.children:', cX, nsp.children[cX].tagName, nsp.children[cX]);
                    if (nsp.children[cX].tagName === 'SPAN' || nsp.children[cX].tagName === 'B') {
                        csr = window.getComputedStyle(nsp.children[cX]);
                        if (csr.position === 'relative' && csr.display === 'inline') {
                            // visible ... (need both styles)
                            daText += nsp.children[cX].textContent;
                            //console.log(logPrefix + 'inner loop, daText:', daText);
                            if (isNaN(parseInt(daText)) === false) {
                                // - starts with a number, so break out early
                                //   (getComputedStyle() is an "expensive" time operation)
                                //console.log(logPrefix + 'inner loop - found a number');
                                break;
                            }
                            if (daText === FD.sponsoredWord) {
                                //console.log(logPrefix + 'inner loop - found sponsoredWord');
                                break;
                            }
                        }
                    }
                }
            }
            //console.info(logPrefix + 'is Sponsored post:', '>' + daText + '<');
            // do we hide this post?
            return ((daText.length > 0) && (FD.sponsoredWord === daText))
        };
    }
    function isSuggested(post) {
        // - check for suggestions
        let ptexts = getTextContent(post);
        // if (FD.isGF) console.info(logPrefix + 'isSuggested:', ptexts, post);
        for (let p = 0, ptL = ptexts.length; p < ptL; p++) {
            let sugg = FD.suggestions.indexOf(ptexts[p]);
            if (sugg >= 0) {
                return sugg;
                break;
            }
        }
    }

    function doMoppingCreateRoom() {
        if (CREATE_ROOM.hideThis) {
            let createRoom = document.querySelector(FD.createRoomQS1);
            if (createRoom) {
                createRoom.setAttribute(postAtt, createRoom.innerHTML.length);
                // get the room's wrapper and hide the room at that level.
                createRoom = createRoom.parentElement.parentElement;
                //pinkify(createRoom, '');
                hide(createRoom, '');
            }
            else {
                let createRoom = document.querySelector(FD.createRoomQS2);
                if (createRoom) {
                    createRoom.setAttribute(postAtt, createRoom.innerHTML.length);
                    createRoom = createRoom.parentElement.parentElement;
                    createRoom.setAttribute(postAtt, createRoom.innerHTML.length);
                    // get the room's wrapper and hide the room at that level.
                    //pinkify(createRoom, '');
                    hide(createRoom, '');
                }
            }
        }
        // increment nfpCount so we only call this function a few times and then stop.
        FD.nfpCount++;
    }
    function doMoppingRightRail() {
        // hide the right rail sponsored box.
        if (RIGHT_RAIL_SPONSORED.hideThis) {
            let rrbox = document.querySelector(FD.rightRailQS);
            //console.info(logPrefix + 'rrbox:', FD.rightRailQS, rrbox);
            if (rrbox) {
                let ptexts = getTextContent(rrbox);
                //console.info(logPrefix + 'rr pt:', FD.sponsoredWord, ptexts.indexOf(FD.sponsoredWord), ptexts);
                if (ptexts.indexOf(FD.sponsoredWord) >= 0) {
                    FD.echoCount = 0;
                    //pinkify(rrbox, '(' + FD.sponsoredWord + ')');
                    hide(rrbox, FD.sponsoredWord);
                    // make it stop checking right-rail.
                    FD.rrCount += FD.rrCountLimit ;
                }
            }
        }
        FD.rrCount++;
    }

    function doMoppingInfoBoxes(post) {
        // hide the info boxes that appear in posts having a certain topic.
        if(INFO_BOXES.hideThis && (INFO_BOXES.paths.length > 0)){
            let links = Array.from(post.querySelectorAll('a'));
            for (let i = 0, iL = links.length; i < iL; i++) {
                let ahref = links[i].href.toLowerCase();
                if (INFO_BOXES.paths.findIndex(ipath => (ahref.indexOf(ipath) >=0) ) >=0 ) {
                    let infobox = links[i].parentElement.parentElement.parentElement.parentElement;
                    infobox.setAttribute(postAtt, infobox.innerHTML.length);
                    //pinkify(infobox, '');
                    hide(infobox, '');
                    break;
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
                    let inspect = false;
                    let hiding = false;
                    if (post.classList.contains(FD.cssHide)) {
                        hiding = true;
                        FD.echoCount++;
                    }
                    else if (!post.hasAttribute(postAtt)) {
                        // - "record" size of post
                        post.setAttribute(postAtt, post.innerHTML.length);
                        inspect = true;
                    }
                    else if (parseInt(post.getAttribute(postAtt)) !== post.innerHTML.length) {
                        // - post size has changed ...
                        post.setAttribute(postAtt, post.innerHTML.length);
                        inspect = true;
                    }
                    if (inspect) {
                        // - check for suggestions
                        if (FD.isNF || FD.isGF) {
                            let sugg = isSuggested(post);
                            if (sugg >= 0) {
                                FD.echoCount++;
                                hiding = true;
                                hide(post, FD.suggestions[sugg]);
                                break;
                            }
                            // - if not suggested, check for sponsoredWord
                            if (!hiding) {
                                if (isSponsored(post)) {
                                    FD.echoCount++;
                                    hiding = true;
                                    hide(post, FD.sponsoredWord);
                                    break;
                                }
                            }
                            // - if not yet hidden, check for info boxes
                            // -- info boxes that appear between post article and comments.
                            if ((!hiding) && (FD.isNF)) {
                                doMoppingInfoBoxes(post);
                            }
                        }
                        else if (FD.isVF) {
                            if (isSponsored(post)) {
                                FD.echoCount++;
                                hiding = true;
                                hide(post, FD.sponsoredWord);
                                break;
                            }
                            if ((!hiding) && (VIDEOS_BLOCK_TEXT.hideThis)) {
                                let vTexts = getTextContentVF(post);
                                //console.info(logPrefix + 'vTC:', vTexts);
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
                            if (!hiding) {
                                doMoppingInfoBoxes(post);
                            }
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
        // check non-feed post(s)
        // - these are the "intro" posts above the feed
        // - this function is called repeatedly a few times - up to FD.inspectPostCount.
        let posts = Array.from(document.querySelectorAll(FD.groupsNonFeedQS1));
        //console.info(logPrefix + 'nfp:',posts);
        if (posts) {
            for (let i = 0, iL = posts.length; i < iL; i++) {
                let post = posts[i];
                if ((post.innerHTML.length < 129) || (post.textContent.length === 0)) {
                    // skip (flag them to be ignored)
                    if (!post.hasAttribute(postAtt)) {
                        post.setAttribute(postAtt, post.innerHTML.length);
                    }
                }
                else {
                    let sugg = isSuggested(post);
                    if (sugg >= 0) {
                        FD.echoCount = 1;
                        //pinkify( post, FD.suggestions[sugg]);
                        hide( post, FD.suggestions[sugg]);
                        post.setAttribute(postAtt, post.innerHTML.length);
                    }
                }
            }
            posts = Array.from(document.querySelectorAll(FD.groupsNonFeedQS2));
            //console.info(logPrefix + 'nfp:',posts);
            if (posts) {
                for (let i = 0, iL = posts.length; i < iL; i++) {
                    let post = posts[i];
                    if ((post.innerHTML.length < 129) || (post.textContent.length === 0)) {
                        // skip (flag them to be ignored)
                        if (!post.hasAttribute(postAtt)) {
                            post.setAttribute(postAtt, post.innerHTML.length);
                        }
                    }
                    else {
                        let sugg = isSuggested(post);
                        if (sugg >= 0) {
                            FD.echoCount = 1;
                            //pinkify(post, FD.suggestions[sugg]);
                            hide(post, FD.suggestions[sugg]);
                            post.setAttribute(postAtt, post.innerHTML.length);
                        }
                    }
                }
            }
            FD.nfpCount++;
        }
    }

    function doMoppingMP() {
        // MarketPlace Feed
        if (SPONSORED_KEYWORD.hideThis) {
            // - get collection of blocks (which haven't been read/processed)
            let mpblocks = Array.from(document.querySelectorAll(FD.QS));
            //console.info(logPrefix + 'mpblocks: ', mpblocks);
            for (let i = 0, iL = mpblocks.length; i < iL; i++) {
                let mpblock = mpblocks[i];
                mpblock.setAttribute(postAtt, '');
                // does this block of boxes have the sponsored word?
                let mptexts = getTextContent(mpblock);
                //console.info(logPrefix + 'mptexts:', mptexts, mptexts.indexOf(sponsoredWord));
                if (mptexts.indexOf(FD.sponsoredWord) >= 0) {
                    // which heading has the sponsored word?
                    let mpheadings = Array.from(mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(1) > div a > span'));
                    // hide the heading having the sponsored word.
                    for (let k = 0, kL = mpheadings.length; k < kL; k++) {
                        let mpheading = mpheadings[k];
                        if (mpheading.textContent === FD.sponsoredWord) {
                            //console.info(logPrefix + 'mpheading:', mpheading);
                            hide(mpheading.parentElement.parentElement, '');
                        }
                    };
                    // get collection boxes in this block
                    let mpboxes = mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(2) > div');
                    // which box has the sponsored word?
                    for (let j = 0, jL = mpboxes.length; j < jL; j++) {
                        let mpbox = mpboxes[j];
                        mptexts = getTextContent(mpbox);
                        if (mptexts.indexOf(FD.sponsoredWord) >= 0) {
                            hide(mpbox, '');
                        }
                    }
                }
            }

        }
    }


    // adjust some settings if URL has changed.
    function setFeedSettings() {
        if (FD.prevURL !== window.location.href) {
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
                if (HIDE_MARKETPLACE_SPONSORED.hideThis) {
                    FD.isMP = true;
                    FD.QS = FD.marketplaceQS;
                    FD.suggestions = [];
                }
            }
            else {
                FD.QS = '';
                FD.suggestions = [];
            }
            FD.isAF = (FD.isNF || FD.isGF || FD.isVF || FD.isMP);

            // - reset count of consecutive posts hidden
            FD.echoCount = 0;
            // - reset non-feed-posts count
            FD.nfpCount = 0;
            // - reset right-rail count
            FD.rrCount = 0;

            return true;
        }
        else {
            return false;
        }
    }

    // ** Mutation Observer
    let bodyObserver = new MutationObserver(bodyMutating);
    // ** Mutations processor
    function bodyMutating(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                //console.info(logPrefix + 'bM - mutating. ', mutation.addedNodes.length, mutation.removedNodes.length);
                if (FD.prevURL !== window.location.href) {
                    // - page url has changed ... refresh the bodyObserver.
                    runMO();
                }
                // console.info(logPrefix + 'A/N/G/V/M:', FD.isAF, FD.isNF, FD.isGF, FD.isVF, FD.isMP);
                else if (FD.isAF) {
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        let mnode = mutation.addedNodes[i];
                        if (mnode.tagName === 'DIV') {
                            if ((mnode.innerHTML.length < 129) || (mnode.textContent.length === 0)) {
                                // - skip these ...
                            }
                            else if (FD.isNF) {
                                if (FD.nfpCount < FD.nfpCountLimit) {
                                    doMoppingCreateRoom();
                                }
                                if ( FD.rrCount < (FD.rrCountLimit)) {
                                    doMoppingRightRail();
                                }
                                doMopping();
                                break;
                            }
                            else if (FD.isGF) {
                                if (FD.nfpCount < FD.nfpCountLimit) {
                                    doMoppingGF();
                                }
                                doMopping();
                                break;
                            }
                            else if (FD.isVF) {
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

    // ** MO starter / restarter
    function runMO() {
        // run code soon as BDDY is available.
        if (document.body) {
            if (DEBUG) console.info(logPrefix + 'runMO : body available');
            if (setFeedSettings()) {
                if (DEBUG) console.info(logPrefix + 'runMO : feed settings have been reset, A/N/G/V/M:', FD.isAF, FD.isNF, FD.isGF, FD.isVF, FD.isMP);
                // - clear out mutations not yet processed ...
                let mutations = bodyObserver.takeRecords();
                bodyObserver.disconnect();
                // - and start up the osbserver again.
                bodyObserver.observe(document.body, {childList: true, subtree: true, attributes: false});
            }
        }
        else {
            if (DEBUG) console.info(logPrefix + 'body not available');
            setTimeout(runMO, 25);
        }
    }
    runMO();
})();
