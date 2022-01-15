// ==UserScript==
// @name         facebook - ad block v3.11 (beta)
// @description  Hide Sponsored and Suggested posts in FB News Feed, Groups Feed, Watch Videos Feed and Marketplace Feed
// @version      3.11c_beta
// @author       zbluebugz (https://github.com/zbluebugz/)
// @match        https://*.facebook.com/*
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-ad-block/issues
// @grant        none
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
                         Added extra Suggestions keywords
                         Added Groups Feed, Videos Feed (Watch), MarketPlace Feed
                         Added German (incomplete)
                         Changed timings to MutationsObserver.

*/

(function () {
    'use strict';

    // -- START OF OPTIONS

    // *** Debugging:
    // if true, show a border on the post, else hide the post.
    const DEBUG = true;


    // Sponsored posts
    const SPONSORED_KEYWORD = {
        hideThis: true,
        keywords: {
            // english
            'en': 'Sponsored',
            // portuguese
            'pt': 'Patrocinado',
            // german
            'de': 'Gesponsert'
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
            'de': 'Suggested Events'
        }
    };
    // - Events you may like
    const EVENTS_YOU_MAY_LIKE = {
        hideThis: false,
        keywords: {
            'en': 'Events you may like',
            'pt': 'Events you may like',
            'de': 'Events you may like'
        }
    };
    // - Paid partnership
    //   -- page you follow is "sponsoring" another page's post (e.g. job)
    const PAID_PARTNERSHIP = {
        hideThis: true,
        keywords: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Paid partnership'
        }
    };
    // - Suggested live gaming video
    const SUGGESTED_LIVE_GAMES = {
        hideThis: true,
        keywords: {
            'en': 'Suggested live gaming video',
            'pt': 'Vídeo sugerido de jogos ao vivo',
            'de': 'Suggested live gaming video',
        }
    };
    // Explore brands for you
    const EXPLORE_BRANDS = {
        hideThis: true,
        keywords: {
            'en': 'Explore brands for you',
            'pt': 'Explore brands for you',
            'de': 'Explore brands for you'
        }
    };
    // Videos just for you
    const VIDEOS_JUST_FOR_YOU = {
        hideThis: true,
        keywords: {
            'en': 'Videos just for you',
            'pt': 'Videos just for you',
            'de': 'Videos just for you'
        }
    };


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
    // - Post from public group
    //   - (lots of posts from groups not subscribed too)
    //   - (may cause flicking while fb is grabbing more group posts - and most of them are promoted ones ...)
    const POST_PUBLIC_GROUP = {
        hideThis: true,
        keywords: {
            'en': 'Post from public group',
            'pt': 'Postagem de grupo público',
            'de': 'Post from public group'
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
    // - Popular near you
    const POPULAR_NEAR_YOU = {
        hideThis: true,
        keywords: {
            'en': 'Popular near you',
            'pt': 'Populares perto de ti',
            'de': 'Beliebt in deiner Nähe' // popular in your area
        }
    };
    // - Join Group
    const JOIN_GROUP = {
        hideThis: true,
        keywords: {
            'en': 'Join Group',
            'pt': 'Join Group',
            'de': 'Join Group'
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

    // *** Marketplace
    // - hide the sponored ads in the marketplace?
    const HIDE_MARKETPLACE_ADS = {
        hideThis: true
    };


    // *** Other boxes ::
    // - Create Room ..
    //   (uses the data-pagelet attribute for detection. no keyword/text required.)
    const CREATE_ROOM = {
        hideThis: false
    };


    // *** Untested - very, very rare to see this one ***
    // Sponsored paid for ... (not "Paid partnership")
    // - just match the first few words ...
    const SPONSORED_PAID_FOR = {
        hideThis: true,
        keywords: {
            'en': 'Sponsored · Paid for by',
            'pt': 'Sponsored · Paid for by',
            'de': 'Sponsored · Paid for by'
        },
        pinkify: true
    };


    // Which languages have been setup:
    const LANGUAGES = ['en', 'pt', 'de'];

    // -- END OF OPTIONS ---




    // --- rest of code - no more toggles & keywords to adjust ---


    // which language entry to use? (default to EN)
    let language = document.querySelector('html').getAttribute('lang') || 'en';
    language = (LANGUAGES.indexOf(language) >= 0) ? language : 'en';

    // Sponsored word
    const SPONSORED_WORD = SPONSORED_KEYWORD.keywords[language];

    // Keywords: text to find for certain Suggested posts
    // -- News Feed suggestions
    let nfSuggestions = [];
    if (PEOPLE_YOU_MAY_KNOW.hideThis) nfSuggestions.push(PEOPLE_YOU_MAY_KNOW.keywords[language]);
    if (SUGGESTED_FOR_YOU.hideThis) nfSuggestions.push(SUGGESTED_FOR_YOU.keywords[language]);
    if (SUGGESTED_PAGES.hideThis) nfSuggestions.push(SUGGESTED_PAGES.keywords[language]);
    if (SUGGESTED_EVENTS.hideThis) nfSuggestions.push(SUGGESTED_EVENTS.keywords[language]);
    if (PAID_PARTNERSHIP.hideThis) nfSuggestions.push(PAID_PARTNERSHIP.keywords[language]);
    if (SUGGESTED_LIVE_GAMES.hideThis) nfSuggestions.push(SUGGESTED_LIVE_GAMES.keywords[language]);
    if (EXPLORE_BRANDS.hideThis) nfSuggestions.push(EXPLORE_BRANDS.keywords[language]);
    if (EVENTS_YOU_MAY_LIKE.hideThis) nfSuggestions.push(EVENTS_YOU_MAY_LIKE.keywords[language]);
    if (VIDEOS_JUST_FOR_YOU.hideThis) nfSuggestions.push(VIDEOS_JUST_FOR_YOU.keywords[language]);

    // console.info('-- fbadb :: news feed suggestions:', nfSuggestions);

    // -- Groups Feed suggestions
    let gfSuggestions = [];
    if (SUGGESTED_GROUPS.hideThis) gfSuggestions.push(SUGGESTED_GROUPS.keywords[language]);
    if (POST_PUBLIC_GROUP.hideThis) gfSuggestions.push(POST_PUBLIC_GROUP.keywords[language]);
    if (SUGGESTED_POST_PUBLIC_GROUP.hideThis) gfSuggestions.push(SUGGESTED_POST_PUBLIC_GROUP.keywords[language]);
    if (FROM_A_GROUP_YOUR_FRIEND_IS_IN.hideThis) gfSuggestions.push(FROM_A_GROUP_YOUR_FRIEND_IS_IN.keywords[language]);
    if (POPULAR_NEAR_YOU.hideThis) gfSuggestions.push(POPULAR_NEAR_YOU.keywords[language]);
    if (SEE_MORE_GROUPS.hideThis) gfSuggestions.push(SEE_MORE_GROUPS.keywords[language]);
    if (JOIN_GROUP.hideThis) gfSuggestions.push(JOIN_GROUP.keywords[language]);
    if (JOIN_GROUP_2.hideThis) gfSuggestions.push(JOIN_GROUP_2.keywords[language]);
    if (FRIENDS_GROUPS.hideThis) gfSuggestions.push(FRIENDS_GROUPS.keywords[language]);
    //console.info('-- fbadb :: groups feed suggestions:', gfSuggestions);

    // Sponsored paid for posts - length of text
    let SPONSORED_PAID_FOR_WORDS = SPONSORED_PAID_FOR.keywords[language];
    let SPONSORED_PAID_FOR_WORDS_LEN = SPONSORED_PAID_FOR_WORDS.length;

    // Feed pages keywords - for use in detecting which feed is showing
    const FEEDS_PAGES = {
        news: ['https://www.facebook.com/', 'https://www.facebook.com/?sk=h_chr'],
        groups: ['https://www.facebook.com/groups/?ref=bookmarks', 'https://www.facebook.com/groups/', 'https://www.facebook.com/groups/feed/'],
        videos: ['https://www.facebook.com/watch/', 'https://www.facebook.com/watch/?ref=tab'],
        marketplace: ['https://www.facebook.com/watch/', 'https://www.facebook.com/watch/?ref=tab', 'https://www.facebook.com/marketplace/?ref=bookmark', 'https://www.facebook.com/marketplace/?ref=app_tab'],
        isNF: false,
        isGF: false,
        isVF: false,
        isMP: false,
        isAF: false // is a feed (any of the above feeds)
    }

    // hide or highlight the selected posts
    let HIDE_STYLE = !DEBUG ? 'display:none !important' : 'border:5px dotted orange !important';
    let PINKIFY_STYLE = 'border: 5px dotted pink !important';

    // other variables
    // -- track how many times checkNonFeedPosts() has been called in this session
    let nonFeedTries = 0;
    // -- "remember" the URL address used in this session - used for detecting if page has changed.
    let prevURL = '';

    // utility functions
    function hide(el) {
        return el.setAttribute('style', HIDE_STYLE);
    };
    function pinkify(el) {
        return el.setAttribute('style', PINKIFY_STYLE);
    }
    function getTextContent(post) {
        // there are issues with using split() on post.textContent ...
        //   so, walk through the post's elements looking for textNodes and grab their text values
        var n,
            arrayTextValues=[],
            walk=document.createTreeWalker(post,NodeFilter.SHOW_TEXT,null,false);
        while(n=walk.nextNode()) {
            arrayTextValues.push(n.textContent);
        }
        return arrayTextValues.slice(0,13);
    }


    // core functions

    function checkNonFeedPosts() {
        // check for "posts" at top of feed, but not in the feed stream.
        if (CREATE_ROOM.hideThis) {
            let createRoom = document.querySelector('div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([adbpr]), div[data-pagelet="VideoChatHomeUnit"]:not([adbpr])');
            if (createRoom) {
                createRoom.setAttribute('adbpr', '');
                // get the room's wrapper and hide the room at that level.
                createRoom = createRoom.parentElement.parentElement;
                createRoom.setAttribute('adbpr', '');
                hide(createRoom);
            }
        };

        //console.info('-- fbadb (A/N/G/MP):: ', FEEDS_PAGES.isAF, FEEDS_PAGES.isNF, FEEDS_PAGES.isGF, FEEDS_PAGES.isMP, prevURL);

        if (FEEDS_PAGES.isNF) {
            // check for Suggested post at the top of the News Feed (e.g. People you may know)
            // (usually the first post).
            let posts = Array.from(document.querySelectorAll('div[role="feed"] > div:not([adbpr])'));
            // console.info('-- fbadb :: isNF posts:', posts);
            if (posts.length) {
                for (let i = 0; i < posts.length; i++) {
                    if (!posts[i].hasAttribute('adbpr')) {
                        let ptext = getTextContent(posts[i]);
                        if ((ptext[0] === undefined) || (ptext[0] === '')) {
                            // empties - skip
                            posts[i].setAttribute('adbpr', '-- empty');
                        }
                        else {
                            // console.info('-- ptext:', ptext[0]);
                            if (nfSuggestions.indexOf(ptext[0]) >= 0) {
                                posts[i].setAttribute('adbpr', ptext[0]);
                                hide(posts[i]);
                            }
                        }
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
            // - use the post to walk up the structure and then across ...
            // - no 'isHidden' variable - not a regular post.
            let posts = Array.from(document.querySelectorAll('div[role="main"] > div > div > div > div:nth-of-type(2) > div > div > div:not([adbpr])'));
            //console.info('-- fbadb :: isGF posts:', posts);
            if (posts.length) {
                for (let i = 0; i < posts.length; i++) {
                    let ptext = getTextContent(posts[i]);
                    if ((ptext[0] === undefined) || (ptext[0] === '')) {
                        // empties - skip
                        posts[i].setAttribute('adbpr', '-- empty');
                    }
                    else {
                        // console.info('-- fbadb :: suggestions.indexOf('+ptext[0]+'):', gfSuggestions.indexOf(ptext[0]));
                        if (gfSuggestions.indexOf(ptext[0]) >= 0) {
                            posts[i].setAttribute('adbpr', ptext[0]);
                            hide(posts[i]);
                        }
                        else {
                            // nb: this is not a regular post in the main feed.
                            posts[i].setAttribute('adbpr', '-- skipped');
                        }
                    }
                }
            }
            // try again (via mutation observer) ...
            nonFeedTries++;
        }
        else if (FEEDS_PAGES.isMP && SPONSORED_KEYWORD.hideThis) {
            // Marketplace
            // get collection of blocks (which haven't been read/processed)
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
                            hide(mpheading.parentElement.parentElement);
                        }
                    };
                    // get collection boxes in this block
                    let mpboxes = mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(2) > div');
                    // which box has the sponsored word?
                    for (let j = 0, jL = mpboxes.length; j < jL; j++) {
                        let mpbox = mpboxes[j];
                        mptexts = getTextContent(mpbox);
                        if (mptexts.indexOf(SPONSORED_WORD) >= 0) {
                            hide(mpbox);
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


    // Check regular Feed Posts for Suggestons and Sponsored
    function checkPost(post) {

        //console.info('\n\n-- fbadb :: checking:', post);

        let csr; // getComputedStyle results
        let ss = 1; // sponsored structure (1 = uses aria-label, 2 = uses a tag.
        let SoB = 'S'; // (S)pan or (B)old tags used for holding Sponsored letters/word
        let isHidden = false;

        // check if post is visible (other addon(s)/extension(s) may have already hidden this post)
        csr = window.getComputedStyle(post, null);
        // console.info('-- fbadb :: post display:', csr.display);
        if (csr.display !== 'none') {

            // check the suggestions - quick and easy to do.
            // -- News Feed and Groups Feed suggestions
            if (((FEEDS_PAGES.isNF) && (nfSuggestions.length)) || ((FEEDS_PAGES.isGF) && (gfSuggestions.length))) {
                let suggestions = FEEDS_PAGES.isNF ? nfSuggestions : gfSuggestions;
                let postTexts = getTextContent(post);
                let ptl = postTexts.length;
                // limit the number of post texts to search - if 20+, you'd get a false postive match (join rule)
                ptl = (ptl > 12) ? 13 : ptl;
                if (ptl > 1) {
                    let suggX;
                    for (let x = 0; x < ptl; x++) {
                        suggX = suggestions.indexOf(postTexts[x]);
                        //console.info('-- fbadb :: in suggestions: ', postTexts[x], suggX);
                        if (suggX >= 0) {
                            post.setAttribute('adbpr', suggestions[suggX]);
                            hide(post);
                            isHidden = true;
                            break;
                        }
                    }
                }
                else {
                    // empty post ...
                    // console.info('-- fbadb :: skipping:', postTexts[0]);
                    post.setAttribute('adbpr', '');
                    isHidden = true; // stop processing this post.
                }
            };



            // Sponsored post
            if ((!isHidden) && (SPONSORED_KEYWORD.hideThis)) {
                // within this post, find the SPAN element(s) having aria-label = Sponsored
                // (usually only one is found)
                let alSpans = Array.from(post.querySelectorAll('span[aria-label="' + SPONSORED_WORD + '"]'));
                ss = 1;
                if (alSpans.length === 0) {
                    // not found, try another structure: A and aria-label structure;
                    alSpans = Array.from(post.querySelectorAll('a[href="#"][aria-label="label"], a[aria-label="' + SPONSORED_WORD + '"]'));
                    ss = 2;
                }
                // is the word "Sponsored" visible?
                let daText = '';
                for (let sX = 0, sL = alSpans.length; sX < sL; sX++) {
                    let sp = alSpans[sX];
                    // get the next sibling from the <span aria-label="..."></span> | <a href="#" aria-label="..."> | <a aria-label="...">
                    let nsp;
                    if (ss === 1) {
                        // uses the span[arial-label="sponsored] structure
                        nsp = sp.nextSibling;
                        // which set of TAGs is being used?
                        SoB = 'S'; // SPAN
                    }
                    else {
                        // ss = 2
                        // - uses the a[href=# aria-label=label] or a[aria-label=SPONSORED_WORD] structure
                        //  - A tag is nested with 2 SPANs then either B or SPAN tag wrapper with lots of B/SPAN tags.
                        //  - grab the B/SPAN tag (wrapper)
                        nsp = sp.firstChild.firstChild.firstChild;
                        // which set of TAGS used?
                        SoB = (nsp.tagName === 'B') ? 'B' : 'S';
                    }
                    // note that 'nsp' is a "parent" ...
                    // .. sometimes it has a textNode (as firstChild) ...
                    if (SoB === 'B') {
                        // uses the <b> tags structure
                        // - this structure doesn't have junk characters.
                        daText += nsp.textContent;
                    }
                    else {
                        // there are several SPAN/B tags having single letters
                        // - all randomised, but will make up "sponsored" when certain SPAN/B tags are "visible".
                        if (nsp.tagName === "SPAN") {
                            if (nsp.firstChild.tagName === 'SPAN') {
                                // no immediate textNode
                                // - nothing to do.
                            }
                            else {
                                csr = window.getComputedStyle(nsp);
                                if (csr.position === 'relative' && csr.display === 'inline') {
                                    // visible ... (need both styles) ... grab the textNode's value.
                                    daText += nsp.firstChild.textContent;
                                }
                            }
                        }
                        while (nsp.tagName === undefined) {
                            // Sometimes there's comment tags (<!--$--> & <--/$-->) as siblings ...
                            nsp = nsp.nextSibling;
                        }
                        // the "parent" has childNodes (spans) ...
                        for (let cX = 0, cL = nsp.children.length; cX < cL; cX++) {
                            if (nsp.children[cX].tagName === 'SPAN') {
                                csr = window.getComputedStyle(nsp.children[cX]);
                                if (csr.position === 'relative' && csr.display === 'inline') {
                                    // visible ... (need both styles)
                                    if (nsp.children[cX].textContent.length === 1) {
                                        daText += nsp.children[cX].textContent;
                                    }
                                }
                            }
                        }
                    }
                    // console.info("-- fbadb :: --is Sponsored post:", daText, (SPONSORED_WORD.indexOf(daText) > -1));
                    // do we hide this post?
                    if ((daText.length > 0) && (SPONSORED_WORD === daText)) {
                        post.setAttribute('adbpr', SPONSORED_WORD);
                        isHidden = true;
                        hide(post);
                        break;
                    }
                };
            };

            // sponsored + paid for ... posts (untested)
            if ((SPONSORED_PAID_FOR.hideThis) && (!isHidden)) {
                let tdivs = Array.from(post.querySelectorAll('div[role="button"]'));
                for (let x = 0, xL = tdivs.length; x < xL; x++) {
                    if (tdivs[x].textContent.substring(0, SPONSORED_PAID_FOR_WORDS_LEN) === SPONSORED_PAID_FOR_WORDS) {
                        post.setAttribute('adbpr', 'Paid for by');
                        isHidden = true;
                        if (SPONSORED_PAID_FOR.pinkify === true) {
                            pinkify(post)
                        }
                        else
                        {
                            hide(post)
                        }
                        break;
                    }
                }
            }
        } // -- end of csr.display !== none

    } // -- end checkPost()


    // MutationObserver processor
    // - when an element has been added,
    //   we check if it is a post ...
    // - if is a post, check it out.
    const callback = function(mutationsList, observer) {
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
                        // - allow checkNonFeedPosts() to run again.
                        nonFeedTries = 0;
                    }
                    // console.info('-- fbadb :: Feeds: ', FEEDS_PAGES.isAF, FEEDS_PAGES.isNF, FEEDS_PAGES.isGF, FEEDS_PAGES.isVF, FEEDS_PAGES.isMP, prevURL, window.location.href);
                    // scan the new nodes for any work to do.
                    // - is it a Feed / Marketplace page?
                    if (FEEDS_PAGES.isAF) {
                        for (let i = 0; i < mutation.addedNodes.length; i++) {
                            if (mutation.addedNodes[i].tagName === 'DIV') {
                                if (FEEDS_PAGES.isNF || FEEDS_PAGES.isGF) {
                                    let postNode = mutation.addedNodes[i].closest('div[role="feed"] > div:not([adbpr]');
                                    // News / Groups Feed post.
                                    if (postNode) {
                                        // check this post (either a News Feed or Groups Feed one)
                                        checkPost(postNode);
                                        if (!postNode.hasAttribute('adbpr')) {
                                            // mark as processed
                                            postNode.setAttribute('adbpr', '')
                                        }
                                    }
                                }
                                else if (FEEDS_PAGES.isVF) {
                                    // Videos Feed post
                                    let postNode = mutation.addedNodes[i].closest('div[data-pagelet="MainFeed"] > div > div > div > div:not([adbpr])') ;
                                    if (postNode) {
                                        checkPost(postNode);
                                        if (!postNode.hasAttribute('adbpr')) {
                                            // mark as processed
                                            postNode.setAttribute('adbpr', '')
                                        }
                                    }
                                }

                                if (FEEDS_PAGES.isMP) {
                                    // MarketPlace feed
                                    //console.info('-- fbadb :: isMP:', FEEDS_PAGES.isMP)
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
    function doObservations() {
        // run code soon as BDDY is available.
        if (document.body !== null) {
            if (DEBUG) console.info('-- fbadb :: BODY is available, running MO ::');
            let observer = new MutationObserver(callback);
            observer.observe(document.body, {childList: true, subtree: true, attributes: false});
        }
        else {
            if (DEBUG) console.info('-- fbadb :: BODY not yet available');
            setTimeout(doObservations, 100);
        }
    };
    doObservations();

})();
