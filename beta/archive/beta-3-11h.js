// ==UserScript==
// @name         facebook - ad block v3.11h (beta)
// @description  Hide Sponsored and Suggested posts in FB News Feed, Groups Feed and Watch Videos Feed
// @version      3.11h beta
// @author       zbluebugz (https://github.com/zbluebugz/)
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-ad-block/issues
// @match        https://*.facebook.com/*
// @grant        GM_addStyle
// @license      MIT; https://opensource.org/licenses/MIT
// @run-at       document-body
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
    v3.11 :: 25/10/2021: Rewrite
                         Changed timings to MutationsObserver.
                         Adjusted sponsored word detection block
                         Added extra Suggestions keywords
                         Added detection for Groups Feed, Videos Feed (Watch), MarketPlace Feed
                         Added German (incomplete)
                         Added option to display 'post is hidden' text

    ** TO DO **
    - complete English translation
    - complete Portuguese translation
    - complete German translation
*/

(function () {
    'use strict';

    // -- START OF OPTIONS

    // *** Debugging:
    // - if true, show a border on the post, else hide the post.
    const DEBUG = false;

    // Sponsored posts
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


    // *** Verbosity:
    // - display a message if a post is hidden.
    const VERBOSITY = {
        level: 2, // 0 = Say nothing, 1 = Say "1 post hidden. Rule: xyz" for each post, 2 = Say "23 posts hidden" (consecutively/consecutivamente/nacheinander)
        keywords: {
            'en' : ['1 post hidden. Rule: ', ' posts hidden', 'Post hidden by another add-on/extension'],
            'pt' : ['1 postagem oculta. Regra: ', ' postagens ocultas', 'Postagem oculta por outro complemento / extensão'],
            'de' : ['1 Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt', 'Von einem anderen Add-On/einer Erweiterung versteckter Beitrag'],
        }
    };


    // *** News Feed :: Hide some Suggested posts
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
    //   -- page you follow is "sponsoring" another page's post (e.g. job)
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
        hideThis: true,
        keywords: {
            'en': 'Suggested live gaming video',
            'pt': 'Vídeo sugerido de jogos ao vivo',
            'de': 'Suggested live gaming video', // --- need translation
        }
    };
    // - Explore brands for you
    const EXPLORE_BRANDS = {
        hideThis: true,
        keywords: {
            'en': 'Explore brands for you',
            'pt': 'Explore brands for you', // --- need translation
            'de': 'Explore brands for you' // --- need translation
        }
    };
    // - Videos just for you
    const VIDEOS_JUST_FOR_YOU = {
        hideThis: true,
        keywords: {
            'en': 'Videos just for you',
            'pt': 'Vídeos só para ti',
            'de': 'Videos just for you' // --- need translation
        }
    };
    // - Page you could subscribe to
    const PAGE_SUBSCRIBE_TO = {
            hideThis: true,
        keywords: {
            'en': 'Page you could subscribe to', // --- need translation (not see in EN, but seen in DE)
            'pt': 'Page you could subscribe to', // --- need translation
            'de': 'Seite, die du abonnieren könntest'
        }
    }


    // *** Groups Feed :: Hide some Suggested posts
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
    //   - (lots of posts from groups not subscribed too)
    //   - (may cause flicking while fb is grabbing more group posts - and most of them are promoted ones ...)
    const POST_PUBLIC_GROUP = {
        hideThis: true,
        keywords: {
            'en': 'Post from public group',
            'pt': 'Postagem de grupo público',
            'de': 'Post from public group' // --- need translation
        }
    };
    // - Suggested post from a public group
    //   - (lots of posts from groups not subscribed too)
    //   - (may cause flicking while fb is grabbing more group posts - and most of them are promoted ones ...)
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
        hideThis: true,
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
            'pt': 'Join Group', // --- need translation
            'de': 'Join Group' // --- need translation
        }
    };
    // - See More Groups - from post's heading "More like XYZ (group you've joined)"
    //   - if SUGGESTED_GROUPS' "hideThis:false", this this rule will override it.
    //   - because both keywords have "See more groups" ...
    const SEE_MORE_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'See More Groups',
            'pt': 'Ver mais grupos',
            'de': 'Weitere Gruppen ansehen'
        }
    };
    // - "Promoted" group disguised as an ordinary group post
    //   - but none of the above keywords are found.
    //   - has a "Join" link next to the group's name.
    //   - somewhat a rather "agressive" rule
    //      - if some of the above group keywords are "hideThis:false", and their post has the link "Join" next to their name,
    //        then this keyword rule will override them.
    const JOIN_GROUP_2 = {
        hideThis: true,
        keywords: {
            'en': 'Join',
            'pt': 'Aderir',
            'de': 'Beitreten'
        }
    };
    // - Friends' groups
    //   - usually shows up at top of feed.
    const FRIENDS_GROUPS = {
        hideThis: true,
        keywords: {
            'en': 'Friends\' groups',
            'pt': 'Grupos dos amigos',
            'de': 'Gruppen von Freunden'
        }
    };
    // - New for you
    //   - usually shows up at top of feed.
    const NEW_FOR_YOU = {
        hideThis: false,
        keywords: {
            'en': 'New for you',
            'pt': 'New for you', // --- need translation
            'de': 'New for you' // --- need translation
        }
    };

    // *** Watch Feed
    // - Paid partnership
    //   -- page you follow is "sponsoring" another page's video post (e.g. job)
    const PAID_PARTNERSHIP_WATCH = {
        hideThis: true,
        keywords: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Bezahlte Werbepartnerschaft' // (Paid advertising partnership)
        }
    };

    // *** Marketplace
    // - hide the sponored ads in the marketplace?
    // -- no keywords required - uses SPONSORED_KEYWORD
    const HIDE_MARKETPLACE_ADS = {
        hideThis: true
    };


    // *** Other boxes ::
    // - Create Room ..
    //   (uses the data-pagelet attribute for detection. no keyword/text required.)
    const CREATE_ROOM = {
        hideThis: false
    };

    // *** News Feed :: Info boxes that appear between the post and comments
    // - hide the info box, not the post.
    // -- e.g. coronavirus, climate science.
    const INFO_BOXES = {
        hideThis: true,
        paths: ['/coronavirus_info/', '/climatescienceinfo/']
    }

    // *** Which languages have been setup:
    const LANGUAGES = ['en', 'pt', 'de'];


    // -- END OF OPTIONS ---




    // --- rest of code - no more toggles & keywords to adjust ---



    let language;
    let SPONSORED_WORD;
    let nfSuggestions;
    let gfSuggestions;
    let vfSuggestions;
    function setVariablesDependentOnLanguage() {
        // which language entry to use?
        // - default to EN
        language = document.head.parentNode.lang || 'en';
        language = (LANGUAGES.indexOf(language) >= 0) ? language : 'en';

        // Sponsored word
        SPONSORED_WORD = SPONSORED_KEYWORD.keywords[language];

        // Keywords: text to find for certain Suggested posts
        // -- News Feed suggestions
        nfSuggestions = [];
        if (PEOPLE_YOU_MAY_KNOW.hideThis) nfSuggestions.push(PEOPLE_YOU_MAY_KNOW.keywords[language]);
        if (SUGGESTED_FOR_YOU.hideThis) nfSuggestions.push(SUGGESTED_FOR_YOU.keywords[language]);
        if (SUGGESTED_PAGES.hideThis) nfSuggestions.push(SUGGESTED_PAGES.keywords[language]);
        if (SUGGESTED_EVENTS.hideThis) nfSuggestions.push(SUGGESTED_EVENTS.keywords[language]);
        if (PAID_PARTNERSHIP.hideThis) nfSuggestions.push(PAID_PARTNERSHIP.keywords[language]);
        if (SUGGESTED_LIVE_GAMES.hideThis) nfSuggestions.push(SUGGESTED_LIVE_GAMES.keywords[language]);
        if (EXPLORE_BRANDS.hideThis) nfSuggestions.push(EXPLORE_BRANDS.keywords[language]);
        if (EVENTS_YOU_MAY_LIKE.hideThis) nfSuggestions.push(EVENTS_YOU_MAY_LIKE.keywords[language]);
        if (VIDEOS_JUST_FOR_YOU.hideThis) nfSuggestions.push(VIDEOS_JUST_FOR_YOU.keywords[language]);
        if (PAGE_SUBSCRIBE_TO.hideThis) nfSuggestions.push(PAGE_SUBSCRIBE_TO.keywords[language]);

        // console.info('-- fbadb :: news feed suggestions:', nfSuggestions);

        // -- Groups Feed suggestions
        gfSuggestions = [];
        if (SUGGESTED_GROUPS.hideThis) gfSuggestions.push(SUGGESTED_GROUPS.keywords[language]);
        if (SUGGESTED_FOR_YOU_GROUPS.hideThis) gfSuggestions.push(SUGGESTED_FOR_YOU_GROUPS.keywords[language]);
        if (POST_PUBLIC_GROUP.hideThis) gfSuggestions.push(POST_PUBLIC_GROUP.keywords[language]);
        if (SUGGESTED_POST_PUBLIC_GROUP.hideThis) gfSuggestions.push(SUGGESTED_POST_PUBLIC_GROUP.keywords[language]);
        if (FROM_A_GROUP_YOUR_FRIEND_IS_IN.hideThis) gfSuggestions.push(FROM_A_GROUP_YOUR_FRIEND_IS_IN.keywords[language]);
        if (POPULAR_NEAR_YOU.hideThis) gfSuggestions.push(POPULAR_NEAR_YOU.keywords[language]);
        if (SEE_MORE_GROUPS.hideThis) gfSuggestions.push(SEE_MORE_GROUPS.keywords[language]);
        if (JOIN_GROUP.hideThis) gfSuggestions.push(JOIN_GROUP.keywords[language]);
        if (JOIN_GROUP_2.hideThis) gfSuggestions.push(JOIN_GROUP_2.keywords[language]);
        if (FRIENDS_GROUPS.hideThis) gfSuggestions.push(FRIENDS_GROUPS.keywords[language]);
        if (NEW_FOR_YOU.hideThis) gfSuggestions.push(NEW_FOR_YOU.keywords[language]);

        //console.info('-- fbadb :: groups feed suggestions:', gfSuggestions);
        vfSuggestions = [];
        if (PAID_PARTNERSHIP_WATCH.hideThis) vfSuggestions.push(PAID_PARTNERSHIP_WATCH.keywords[language]);
    }
    setVariablesDependentOnLanguage();

    // Feed pages keywords
    // - for use in detecting which feed is showing
    const FEEDS_PAGES = {
        news: ['https://www.facebook.com/', 'https://www.facebook.com/?sk=h_chr'],
        groups: ['https://www.facebook.com/groups/', 'https://www.facebook.com/groups/?ref=bookmarks', 'https://www.facebook.com/groups/feed/'],
        videos: ['https://www.facebook.com/watch/', 'https://www.facebook.com/watch/?ref=tab', 'https://www.facebook.com/videos'],
        marketplace: ['https://www.facebook.com/marketplace/', 'https://www.facebook.com/watch/?ref=tab', 'https://www.facebook.com/marketplace/?ref=bookmark', 'https://www.facebook.com/marketplace/?ref=app_tab'],
        isNF: false,
        isGF: false,
        isVF: false,
        isMP: false,
        isAF: false // is a feed (any of the above feeds)
    }

    // info boxes - tidy them up a little bit.
    if (INFO_BOXES.hideThis) {
        for (let i = 0 ; i < INFO_BOXES.paths.length; i++) {
            INFO_BOXES.paths[i] = INFO_BOXES.paths[i].toLowerCase();
        }
    }

    // styles for hiding or highlighting the selected posts
    // - generate class names (first letter must be an alphabet)
    function generateClassName() {
        let firstChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let str = firstChars.charAt(Math.floor(Math.random() * firstChars.length));
        for (let i = 0; i < 12; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    };
    let CLASS_HIDE = generateClassName();
    let CLASS_PINKIFY = generateClassName();
    let CLASS_ECHO = generateClassName();
    // - style rules ...
    let STYLE_HIDE = '.' + CLASS_HIDE + (!DEBUG ? ' {display:none !important;}' : ' {border: 5px dotted orange !important;}') ;
    let STYLE_PINKIFY = '.' + CLASS_PINKIFY + ' {border: 5px dotted pink !important;}';
    let STYLE_ECHO = '.' + CLASS_ECHO + ' {margin: 1.5rem 1rem !important; font-style: italic;}';
    // - insert styles (as classes)
    GM_addStyle(STYLE_HIDE + ' ' + STYLE_ECHO + ' ' + STYLE_PINKIFY);

    // other variables
    // -- track how many times checkNonFeedPosts() has been called in this session
    let nonFeedTries = 0;
    // -- "remember" the URL address used in this session - used for detecting if page has changed.
    let prevURL = '';
    // -- how many consecutive posts were hidden
    let hiddenCount = 0;
    // -- echo's element displaying how many posts were hidden (when VERBOSITY.level = 2)
    let hiddenEl;
    // -- Verbosity stuff
    let nfpLevel = (VERBOSITY.level > 0) ? 1 : 0; // non-feed posts
    let fpLevel = (VERBOSITY.level > 0) ? VERBOSITY.level : 0; // feed posts


    // functions
    function isSuggestedPost(post, vlevel) {
        // check for News Feed / Groups Feed suggestions.
        // - vlevel : verbosity level
        let isHidden = false;
        let postTexts = getTextContent(post);
        if ((postTexts[0] === undefined) || (postTexts[0] === '')) {
            // empties - skip
             //post.setAttribute('adbpr', '-- empty (0)');
            //post.setAttribute('adbpr', '-');
            isHidden = true;
        }
        else {
            // console.info('-- postTexts:', postTexts[0]);
            let suggX;
            for (let x = 0, ptl = postTexts.length; x < ptl; x++) {
                suggX = FEEDS_PAGES.suggestions.indexOf(postTexts[x]);
                //console.info('-- fbadb :: in suggestions: ', postTexts[x], suggX);
                if (suggX >= 0) {
                    post.setAttribute('adbpr', FEEDS_PAGES.suggestions[suggX]);
                    hide(post, fpLevel);
                    isHidden = true;
                    break;
                }
            }
        }
        return isHidden;
    }

    function checkForInfoBoxes(post) {
        // hide the info boxes that appear in posts having a certain topic.
        if(INFO_BOXES.hideThis && (INFO_BOXES.paths.length > 0)){
            let links = post.querySelectorAll('a');
            for (let i = 0, iL = links.length; i < iL; i++) {
                let ahref = links[i].href.toLowerCase();
                if (INFO_BOXES.paths.findIndex(ipath => (ahref.indexOf(ipath) >=0) ) >=0 ) {
                    let infobox = links[i].parentElement.parentElement.parentElement.parentElement;
                    infobox.setAttribute('adbpr', 'Info box');
                    // pinkify(infobox);
                    hide(infobox, 0);
                    break;
                }
            }
        }
    }

    function getTextContent(post) {
        // get the text node values of each element
        // return an array of text values.
        // - cannot use split() on post.textContent due to hiccups
        var n,
            arrayTextValues=[],
            walk=document.createTreeWalker(post,NodeFilter.SHOW_TEXT,null,false);
        while(n=walk.nextNode()) {
            arrayTextValues.push(n.textContent);
        }
         // limit the number of post texts to return - if 20+, you could get a false postive match (join rule)
        return arrayTextValues.slice(0,13);
    }

    function hide(post, verbosityInfo) {
        // hide something ..
        // - also call up echo 'post is hidden' text functions
        if (verbosityInfo === 1) {
            echoHiddenSinglePost(post);
        }
        else if (verbosityInfo > 1) {
            echoHiddenMultiplePosts(post, verbosityInfo);
        }
        post.classList.add(CLASS_HIDE);
    };

    function pinkify(el) {
        // apply a pink border around a post / element (used in special cases)
        el.classList.add(CLASS_PINKIFY);
    }

    function echoHiddenSinglePost(post) {
        // echo '1 post is hidden. Rule: xyz'
        let elEcho = document.createElement('div');
        elEcho.setAttribute('adbpr', '');
        elEcho.classList.add(CLASS_ECHO);
        elEcho.textContent = VERBOSITY.keywords[language][0] + post.getAttribute('adbpr');
        // - add after post being hidden (issue with first post being hidden & fb updating it)
        post.after(elEcho);
    }

    function echoHiddenMultiplePosts(post) {
        // echo 'x posts hidden' when 2+ consecutive posts are hidden
        // - except if one post is hidden.
        if ((!hiddenEl) || (hiddenCount === 0)) {
            let elEcho = document.createElement('div');
            elEcho.setAttribute('adbpr', '');
            elEcho.classList.add(CLASS_ECHO);
            // - add after post being hidden (issue with first post being hidden & fb updating it)
            post.after(elEcho);
            hiddenEl = elEcho;
        }
        // increment count of consecutive hidden posts
        hiddenCount++;
        // echo's text.
        if (hiddenCount < 2) {
            hiddenEl.textContent = VERBOSITY.keywords[language][0] + post.getAttribute('adbpr');
        }
        else {
            hiddenEl.textContent = hiddenCount + VERBOSITY.keywords[language][1];
        }
    }

    function echoPostAlreadyHidden(post) {
        // echo 'post already hidden'
        // - usually hidden by another addon/extension or something else
        //   that has beaten this script in hiding that post.
        // - this script doesn't detect when they're hidden after it has processed a post.
        //   so, it won't echo anything for those late-hidden posts.
        let elEcho = document.createElement('div');
        elEcho.setAttribute('adbpr', '');
        elEcho.classList.add(CLASS_ECHO);
        elEcho.textContent = VERBOSITY.keywords[language][2];
        // - add after post being hidden (issue with first post being hidden & fb updating it)
        post.after(elEcho);
        hiddenCount = 0;
    }


    // ** check for posts outside the regular feed.
    function checkNonFeedPosts() {

        //console.info('-- fbadb (A/N/G/MP):: ', FEEDS_PAGES.isAF, FEEDS_PAGES.isNF, FEEDS_PAGES.isGF, FEEDS_PAGES.isMP, prevURL);

        if (CREATE_ROOM.hideThis) {
            let createRoom = document.querySelector('div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([adbpr]), div[data-pagelet="VideoChatHomeUnit"]:not([adbpr])');
            if (createRoom) {
                createRoom.setAttribute('adbpr', '');
                // get the room's wrapper and hide the room at that level.
                createRoom = createRoom.parentElement.parentElement;
                createRoom.setAttribute('adbpr', '');
                hide(createRoom, 0);
            }
        };

        if (FEEDS_PAGES.isNF) {
            // check for Suggested post at the top of the News Feed (e.g. People you may know)
            let posts = Array.from(document.querySelectorAll('div[role="feed"] > div:not([adbpr])'));
            // console.info('-- fbadb :: isNF posts:', posts);
            for (let i = 0, iL = posts.length; i < iL; i++) {
                if (!posts[i].hasAttribute('adbpr')) {
                    if (!isSuggestedPost(posts[i], nfpLevel)) {
                        checkForInfoBoxes(posts[i]);
                    }
                }
            }
            // try again (via mutation observer) ...
            nonFeedTries++;
        }
        else if (FEEDS_PAGES.isGF) {
            // Groups Feed "Intro"
            // - outside of the normal feed scope.
            // - depending on width of page, at top or in right-hand sidebar
            // - may take a few goes until the box is avaiable ...
            // - also, check the first "2 posts" - sometimes they manage to slip in before MO is ready/running.
            //let posts = Array.from(document.querySelectorAll('div[role="main"] > div > div > div > div:nth-of-type(2) > div > div > div:not([adbpr])'));
            let posts = Array.from(document.querySelectorAll('div[role="main"] > div > div > div > div:nth-of-type(2) > div > div > div'));
            //console.info('-- fbadb :: isGF posts:', posts);
            if (posts.length) {
                // check intro post(s)
                for (let i = 0, iL = posts.length; i < iL; i++) {
                    if (!posts[i].hasAttribute('adbpr')) {
                        isSuggestedPost(posts[i], nfpLevel);
                    }
                }
                // check first 2 posts
                // - first one is usually the title/heading of the Groups feed.
                // - secone one is usually the first post.
                let feed = document.querySelector('div[role="feed"]');
                let post = feed.firstElementChild;
                if (post) {
                    // heading/title "post".
                    if (!post.hasAttribute('adbpr')) {
                        checkPost(post);
                        if (!post.hasAttribute('adbpr')) {
                            post.setAttribute('adbpr', '')
                        }
                    }
                    post = post.nextElementSibling;
                    if (post) {
                          // console.info('--- post:', nonFeedTries, post.hasAttribute('adbpr'), post);
                        if (!post.hasAttribute('adbpr')) {
                            // actual post - first one.
                            checkPost(post);
                            if (!post.hasAttribute('adbpr')) {
                                post.setAttribute('adbpr', '---')
                            }
                        }
                    }
                }
            }
            // try again (via mutation observer) ...
            nonFeedTries++;
        }
        else if (FEEDS_PAGES.isMP && SPONSORED_KEYWORD.hideThis) {
            // Marketplace
            // - get collection of blocks (which haven't been read/processed)
            let mpblocks = Array.from(document.querySelectorAll('div[data-pagelet="StreamingBrowseFeed"] > div > div:not([adbpr]'));
            //console.info('-- fbadb :: mpblocks: ', mpblocks);
            for (let i = 0, iL = mpblocks.length; i < iL; i++) {
                let mpblock = mpblocks[i];
                mpblock.setAttribute('adbpr', '');
                // does this block of boxes have the sponsored word?
                let mptexts = getTextContent(mpblock);
                if (mptexts.indexOf(SPONSORED_WORD) >= 0) {
                    // which heading has the sponsored word?
                    let mpheadings = Array.from(mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(1) > div a > span'));
                    // hide the heading having the sponsored word.
                    for (let k = 0, kL = mpheadings.length; k < kL; k++) {
                        let mpheading = mpheadings[k];
                        if (mpheading.textContent === SPONSORED_WORD) {
                            hide(mpheading.parentElement.parentElement, 0);
                        }
                    };
                    // get collection boxes in this block
                    let mpboxes = mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(2) > div');
                    // which box has the sponsored word?
                    for (let j = 0, jL = mpboxes.length; j < jL; j++) {
                        let mpbox = mpboxes[j];
                        mptexts = getTextContent(mpbox);
                        if (mptexts.indexOf(SPONSORED_WORD) >= 0) {
                            hide(mpbox, 0);
                        }
                    }
                }
            }
            // NB: do not icrement nonFeedTries - want to keep calling this function.
        }
        else {
            // try again (via mutation observer)
            nonFeedTries++;
        }
        //console.info('-- fbadb :: nonFeedTries:', nonFeedTries);
    } // -- end checkNonFeedPosts


    // check regular Feed Posts for Sponsored and Suggestions
    function checkPost(post) {

        // console.info('\n\n-- fbadb :: --> checking:', post);

        let csr; // getComputedStyle results
        let ss = 1; // sponsored structure (1 = uses aria-label, 2 = uses a tag.
        let isHidden = false;

        // check if post is visible (another addon(s)/extension(s) may have already hidden this post)
        csr = window.getComputedStyle(post, null);
        // console.info('-- fbadb :: post display:', csr.display, post);
        if (csr.display !== 'none') {

            // check the suggestions - quick and easy to do.
            // -- News Feed and Groups Feed suggestions
            if (((FEEDS_PAGES.isNF) && (nfSuggestions.length)) || ((FEEDS_PAGES.isGF) && (gfSuggestions.length)) || ((FEEDS_PAGES.isVF) && (vfSuggestions.length))) {
                isHidden = isSuggestedPost(post, fpLevel);
            };

            // Sponsored post
            if ((!isHidden) && (SPONSORED_KEYWORD.hideThis)) {
                // within this post, find the SPAN element(s) having aria-label = Sponsored
                // - usually only one is found
                let alSpans = Array.from(post.querySelectorAll('span[aria-label="' + SPONSORED_WORD + '"]'));
                ss = 1;
                if (alSpans.length === 0) {
                    // not found, try another structure: A and aria-label structure;
                    alSpans = Array.from(post.querySelectorAll('a[href="#"][aria-label="label"], a[aria-label="' + SPONSORED_WORD + '"]'));
                    ss = 2;
                }
                // console.info('-- fbadb :: alSpans:', alSpans.length);
                // if (alSpans.length) console.info('-- fbadb :: alSpans[0]:', alSpans[0]);
                // is the word "Sponsored" visible?
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
                        // - uses the a[href=# aria-label=label] or a[aria-label=SPONSORED_WORD] structure
                        //  - A tag is nested with 2 SPANs then either B or SPAN tag wrapper with lots of B/SPAN tags.
                        //  - grab the B/SPAN tag (wrapper)
                        nsp = sp.firstChild.firstChild.firstChild;
                    }
                    // note that 'nsp' is a "parent" ...
                    // .. sometimes it has a textNode (as firstChild) ...
                    // ... there are several SPAN/B tags having single letters
                    // ... - all randomised, but will make up "sponsored" when certain SPAN/B tags are "visible".
                    if (nsp.tagName === "SPAN" || nsp.tagName === 'B') {
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
                        //console.info('--- nsp(1):', nsp);
                        //nsp = nsp.firstElementChild;
                        //console.info('--- nsp(2):', nsp);
                        // the "parent" has childNodes (SPAN/B) ...
                        for (let cX = 0, cL = nsp.childElementCount; cX < cL; cX++) {
                            //console.info('--', cX, nsp.children[cX].tagName, nsp.children[cX]);
                            if (nsp.children[cX].tagName === 'SPAN' || nsp.children[cX].tagName === 'B') {
                                csr = window.getComputedStyle(nsp.children[cX]);
                                //console.info('--', cX, csr.position, csr.display, '>' + nsp.children[cX].textContent +'<', nsp.children[cX]);
                                if (csr.position === 'relative' && csr.display === 'inline') {
                                    // visible ... (need both styles)
                                    //if (nsp.children[cX].textContent.length === 1) {
                                    daText += nsp.children[cX].textContent;
                                    if (daText === SPONSORED_WORD) {
                                        break;
                                    }
                                    //}
                                }
                            }
                        }
                    }
                    //console.info("-- fbadb :: --is Sponsored post:", '>' + daText + '<');
                    // do we hide this post?
                    if ((daText.length > 0) && (SPONSORED_WORD === daText)) {
                        post.setAttribute('adbpr', SPONSORED_WORD);
                        isHidden = true;
                        hide(post, fpLevel);
                        break;
                    }
                };
                // - hide those pesky info boxes within posts that show up between post and comments.
                if (!isHidden && (FEEDS_PAGES.isNF || FEEDS_PAGES.isVF)) {
                    checkForInfoBoxes(post);
                }
            };

            // count of consecutive posts hidden
            // - reset if this post is not hidden.
            if (!isHidden) hiddenCount = 0;
        } // -- end of csr.display !== none
        else {
            // post already hidden by another addon/extension or something else
            //   before this script was able to process it
            // console.info('-- fbadb :: post already hidden');
            echoPostAlreadyHidden(post);
        }

        // console.info('\n\n-- fbadb :: <-- checking:', isHidden, post.hasAttribute('adbpr'), post);

    } // -- end checkPost()


    // MutationObserver processor
    // - if the element being added is a post, we check it out.
    const MOPPING = function(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (mutation.addedNodes.length) {
                    // something has been added.
                    // - has the page changed?
                    if (prevURL !== window.location.href) {
                        prevURL = window.location.href;
                        // - reset feeds flags
                        FEEDS_PAGES.isNF = (FEEDS_PAGES.news.indexOf(prevURL) >= 0);
                        FEEDS_PAGES.isGF = (FEEDS_PAGES.groups.indexOf(prevURL) >= 0);
                        FEEDS_PAGES.isVF = (FEEDS_PAGES.videos.indexOf(prevURL) >= 0);
                        FEEDS_PAGES.isMP = ((FEEDS_PAGES.marketplace.indexOf(prevURL) >= 0) && (HIDE_MARKETPLACE_ADS.hideThis));
                        FEEDS_PAGES.isAF = (FEEDS_PAGES.isNF || FEEDS_PAGES.isGF || FEEDS_PAGES.isVF || FEEDS_PAGES.isMP);

                        // language may have changed (1% chance)
                        setVariablesDependentOnLanguage();

                        // - which suggestions to use
                        FEEDS_PAGES.suggestions = (FEEDS_PAGES.isNF) ? nfSuggestions : (FEEDS_PAGES.isGF) ? gfSuggestions : (FEEDS_PAGES.isVF) ? vfSuggestions : [];

                        // - allow checkNonFeedPosts() to run again.
                        nonFeedTries = 0;
                        // - reset count of consecutive posts hidden
                        hiddenCount = 0;
                    }
                    // console.info('-- fbadb :: Feeds: ', FEEDS_PAGES.isAF, FEEDS_PAGES.isNF, FEEDS_PAGES.isGF, FEEDS_PAGES.isVF, FEEDS_PAGES.isMP, prevURL, window.location.href);
                    // scan the new nodes for any work to do.
                    // - is it a Feed / Marketplace page?
                    if (FEEDS_PAGES.isAF) {
                        for (let i = 0; i < mutation.addedNodes.length; i++) {
                            if (mutation.addedNodes[i].tagName === 'DIV') {
                                let mnode = mutation.addedNodes[i];
                                if (FEEDS_PAGES.isNF || FEEDS_PAGES.isGF) {
                                    let postNode = mnode.closest('div[role="feed"] > div:not([adbpr]');
                                    // News / Groups Feed post.
                                    if (postNode && postNode === mnode) {
                                        // console.info('--- postNode::', postNode.hasAttribute('adbpr'));
                                        // check this post (either a News Feed or Groups Feed one)
                                        checkPost(postNode);
                                        if (!postNode.hasAttribute('adbpr')) {
                                            // mark as processed (if not already flagged)
                                            //postNode.setAttribute('adbpr', '-pn-')
                                        }
                                    }
                                }
                                else if (FEEDS_PAGES.isVF) {
                                    // Videos Feed post
                                    let postNode = mnode.closest('div[data-pagelet="MainFeed"] > div > div > div > div:not([adbpr])') ;
                                    if (postNode && postNode === mnode) {
                                        checkPost(postNode);
                                        if (!postNode.hasAttribute('adbpr')) {
                                            // mark as processed (if not already flagged)
                                            postNode.setAttribute('adbpr', '')
                                        }
                                    }
                                }

                                if (FEEDS_PAGES.isMP) {
                                    // MarketPlace feed
                                    // console.info('-- fbadb :: isMP:', FEEDS_PAGES.isMP)
                                    checkNonFeedPosts();
                                }
                                else {
                                    // check for the outside-of-feed posts
                                    // - to be done after above postNode(s) have been processed.
                                    // - may take a few goes to see them.
                                    if (nonFeedTries < 51) {
                                        checkNonFeedPosts();
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }
    }


    // set up MutationObserver and call it.
    // -- https://javascript.info/mutation-observer
    function runMO() {
        // run code soon as BDDY is available.
        if (document.body !== null) {
            if (DEBUG) console.info('-- fbadb :: BODY is available, running MO ::');
            let observer = new MutationObserver(MOPPING);
            observer.observe(document.body, {childList: true, subtree: true, attributes: false});
        }
        else {
            if (DEBUG) console.info('-- fbadb :: BODY not yet available');
            setTimeout(runMO, 100);
        }
    };

    runMO();

})();
