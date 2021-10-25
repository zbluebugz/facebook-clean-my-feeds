// ==UserScript==
// @name         facebook - ad block v3.11 (beta)
// @version      3.11b_beta
// @description  Hides sponsored posts in FB's news-feed (Sept 2021)
// @author       zbluebugz
// @match        https://*.facebook.com/*
// @run-at       document-idle
// @namespace https://greasyfork.org/users/812551
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


    // Hide Sponsored posts
    // - always Enabled.
    const SPONSORED_KEYWORD = {
        enabled: true,
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
        enabled: true,
        keywords: {
            'en': 'People you may know',
            'pt': 'Pessoas que talvez conheças',
            'de': 'Personen, die du kennen könntest'
        }
    };
    // - Suggested for you
    const SUGGESTED_FOR_YOU = {
        enabled: true,
        keywords: {
            'en': 'Suggested for you',
            'pt': 'Sugestões para ti',
            'de': 'Vorschläge für dich'
        }
    };
    // - Suggested pages
    const SUGGESTED_PAGES = {
        enabled: true,
        keywords: {
            'en': 'Suggested Pages',
            'pt': 'Páginas sugeridas',
            'de': 'Vorgeschlagene Seiten'
        }
    };
    // - Suggested events
    const SUGGESTED_EVENTS = {
        enabled: false,
        keywords: {
            'en': 'Suggested Events',
            'pt': 'Eventos Sugeridos',
            'de': 'Suggested Events'
        }
    };
    // - Events you may like
    const EVENTS_YOU_MAY_LIKE = {
        enabled: false,
        keywords: {
            'en': 'Events you may like',
            'pt': 'Events you may like',
            'de': 'Events you may like'
        }
    };
    // - Paid partnership
    //   -- page you follow is "sponsoring" another page's post (e.g. job)
    const PAID_PARTNERSHIP = {
        enabled: true,
        keywords: {
            'en': 'Paid partnership',
            'pt': 'Parceria paga',
            'de': 'Paid partnership'
        }
    };
    // - Suggested live gaming video
    const SUGGESTED_LIVE_GAMES = {
        enabled: true,
        keywords: {
            'en': 'Suggested live gaming video',
            'pt': 'Vídeo sugerido de jogos ao vivo',
            'de': 'Suggested live gaming video',
        }
    };
    // Explore brands for you
    const EXPLORE_BRANDS = {
        enabled: true,
        keywords: {
            'en': 'Explore brands for you',
            'pt': 'Explore brands for you',
            'de': 'Explore brands for you'
        }
    };


    // *** Groups Feed :: Hide some Suggested posts
    // - Suggested groups
    const SUGGESTED_GROUPS = {
        enabled: true,
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
        enabled: true,
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
        enabled: true,
        keywords: {
            'en': 'Suggested post from a public group',
            'pt': 'Publicação sugerida de um grupo público',
            'de': 'Vorgeschlagener Beitrag aus einer öffentlichen Gruppe'
        }
    };
    // - From a group that your friend is in
    const FROM_A_GROUP_YOUR_FRIEND_IS_IN = {
        enabled: true,
        keywords: {
            'en': 'From a group that your friend is in',
            'pt': 'De um grupo em que o teu amigo/a é membro',
            'de': 'Aus einer Gruppe, in der dein/e Freund/in ist'
        }
    };
    // - Popular near you
    const POPULAR_NEAR_YOU = {
        enabled: true,
        keywords: {
            'en': 'Popular near you',
            'pt': 'Populares perto de ti',
            'de': 'Beliebt in deiner Nähe' // popular in your area
        }
    };
    // - Join Group
    const JOIN_GROUP = {
        enabled: true,
        keywords: {
            'en': 'Join Group',
            'pt': 'Join Group',
            'de': 'Join Group'
        }
    };
    // - See More Groups - from post's heading "More like XYZ (group you've joined)"
    //   - if SUGGESTED_GROUPS' "enabled:false", this this rule will override it.
    //   - because both keywords have "See more groups" ...
    const SEE_MORE_GROUPS = {
        enabled: true,
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
    //      - if some of the above group keywords are "enabled:false", and their post has the link "Join" next to their name,
    //        then this keyword rule will override them.
    const JOIN_GROUP_2 = {
        enabled: true,
        keywords: {
            'en': 'Join',
            'pt': 'Aderir',
            'de': 'Beitreten'
        }
    };
    // - Friends' groups
    //   - usually shows up at top of feed.
    const FRIENDS_GROUPS = {
        enabled: true,
        keywords: {
            'en': 'Friends\' groups',
            'pt': 'Grupos dos amigos',
            'de': 'Gruppen von Freunden'
        }
    };

    // *** Marketplace
    // - hide the sponored ads in the marketplace?
    const HIDE_MARKETPLACE_ADS = {
        enabled: true
    };


    // *** Other boxes ::
    // - Create Room ..
    //   (uses the data-pagelet attribute for detection. no keyword/text required.)
    const CREATE_ROOM = {
        enabled: true
    };


    // *** Untested - very, very rare to see this one ***
    // Sponsored paid for ... (not "Paid partnership")
    // - just match the first few words ...
    const SPONSORED_PAID_FOR = {
        enabled: true,
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
    if (PEOPLE_YOU_MAY_KNOW.enabled) nfSuggestions.push(PEOPLE_YOU_MAY_KNOW.keywords[language]);
    if (SUGGESTED_FOR_YOU.enabled) nfSuggestions.push(SUGGESTED_FOR_YOU.keywords[language]);
    if (SUGGESTED_PAGES.enabled) nfSuggestions.push(SUGGESTED_PAGES.keywords[language]);
    if (SUGGESTED_EVENTS.enabled) nfSuggestions.push(SUGGESTED_EVENTS.keywords[language]);
    if (PAID_PARTNERSHIP.enabled) nfSuggestions.push(PAID_PARTNERSHIP.keywords[language]);
    if (SUGGESTED_LIVE_GAMES.enabled) nfSuggestions.push(SUGGESTED_LIVE_GAMES.keywords[language]);
    if (EXPLORE_BRANDS.enabled) nfSuggestions.push(EXPLORE_BRANDS.keywords[language]);
    if (EVENTS_YOU_MAY_LIKE.enabled) nfSuggestions.push(EVENTS_YOU_MAY_LIKE.keywords[language]);
    // console.info('news feed suggestions:', nfSuggestions);

    // -- Groups Feed suggestions
    let gfSuggestions = [];
    if (SUGGESTED_GROUPS.enabled) gfSuggestions.push(SUGGESTED_GROUPS.keywords[language]);
    if (POST_PUBLIC_GROUP.enabled) gfSuggestions.push(POST_PUBLIC_GROUP.keywords[language]);
    if (SUGGESTED_POST_PUBLIC_GROUP.enabled) gfSuggestions.push(SUGGESTED_POST_PUBLIC_GROUP.keywords[language]);
    if (FROM_A_GROUP_YOUR_FRIEND_IS_IN.enabled) gfSuggestions.push(FROM_A_GROUP_YOUR_FRIEND_IS_IN.keywords[language]);
    if (POPULAR_NEAR_YOU.enabled) gfSuggestions.push(POPULAR_NEAR_YOU.keywords[language]);
    if (SEE_MORE_GROUPS.enabled) gfSuggestions.push(SEE_MORE_GROUPS.keywords[language]);
    if (JOIN_GROUP.enabled) gfSuggestions.push(JOIN_GROUP.keywords[language]);
    if (JOIN_GROUP_2.enabled) gfSuggestions.push(JOIN_GROUP_2.keywords[language]);
    if (FRIENDS_GROUPS.enabled) gfSuggestions.push(FRIENDS_GROUPS.keywords[language]);
    //console.info('groups feed suggestions:', gfSuggestions);

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
    let HIDE_STYLE = !DEBUG ? 'display:none !important' : 'border:3px dotted orange !important';
    let PINKIFY_STYLE = 'border: 5px dotted pink !important';

    function hide(el) {
        return el.setAttribute('style', HIDE_STYLE);
    };
    function pinkify(el) {
        return el.setAttribute('style', PINKIFY_STYLE);
    }

    let oneOffsTries = 0;
    let prevURL = '';

    function checkOneOffs() {
        // check for "posts" at top of feed, but not in the feed stream.
        if (CREATE_ROOM.enabled) {
            let createRoom = document.querySelector('div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([adbpr])');
            if (createRoom) {
                createRoom.setAttribute('adbpr', '');
                hide(createRoom);
            }
        };

        //console.info('::', FEEDS_PAGES.isAF, FEEDS_PAGES.isNF, FEEDS_PAGES.isGF, FEEDS_PAGES.isMP, prevURL);

        if (FEEDS_PAGES.isNF) {
            // check for Suggested post at the top of the News Feed (e.g. People you may know)
            // (it is normally the first post).
            let post = document.querySelector('div[role="feed"] > div');
            if (post) {
                if (!post.hasAttribute('adbpr')) {
                    if (post.innerText !== '') {
                        let ptext = post.innerText.split('\n');
                        // console.info('-- ptext:', ptext)
                        if (nfSuggestions.indexOf(ptext[0]) >= 0) {
                            post.setAttribute('adbpr', ptext[0]);
                            hide(post);
                            oneOffsTries = 100;
                        }
                        else {
                            post.setAttribute('adbpr', '');
                        }
                    }
                }
            }
            else {
                // try again (via mutation observer) ...
                oneOffsTries++;
            }
        }
        else if (FEEDS_PAGES.isGF) {
            // Groups Feed "Intro"
            // - outside of the normal feed scope.
            // - depending on width of page, at top or in right-hand sidebar
            // - may take a few goes until the box is avaiable ...
            // - use the post to walk up the structure and then across ...
            // - no 'isHidden' variable - not a regular post.
            let ghPost = document.querySelector('div[role="main"] > div > div > div > div:nth-of-type(2) > div > div > div:not([adbpr])');
            if (!(ghPost == null)) {
                // == null also gets the undefined)
                if (ghPost.innerText !== '') {
                    //console.info('i-t:', ghEl.innerText );
                    let ptext = ghPost.innerText.split('\n')[0];
                    //console.info('ghElText:', ghElText, gsuggestions.indexOf(ghElText));
                    //console.info('suggestions:', gsuggestions);
                    if (gfSuggestions.indexOf(ptext) >= 0) {
                        ghPost.setAttribute('adbpr', ptext);
                        // nb: this is not a regular feed post.
                        hide(ghPost);
                        oneOffsTries = 100;
                    }
                    else {
                        ghPost.setAttribute('adbpr', '');
                    }
                }
            }
        }
        else if (FEEDS_PAGES.isMP) {
            // Marketplace
            // get collection of blocks (which haven't been read/processed)
            let mpblocks = Array.from(document.querySelectorAll('div[data-pagelet="StreamingBrowseFeed"] > div > div:not([adbpr]'));
            //console.info('--mp:', mpblocks);
            for (let i = 0, iL = mpblocks.length; i < iL; i++) {
                let mpblock = mpblocks[i];
                mpblock.setAttribute('adbpr', '');
                // does this block of boxes have the sponsored word?
                if (mpblock.innerText.split('\n').indexOf(SPONSORED_WORD) >= 0) {
                    // which heading has the sponsored word?
                    let mpheadings = Array.from(mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(1) > div a > span'));
                    // hide the heading having the sponsored word.
                    for (let k = 0, kL = mpheadings.length; k < kL; k++) {
                        let mpheading = mpheadings[k];
                        if (mpheading.innerText === SPONSORED_WORD) {
                            hide(mpheading.parentElement.parentElement);
                        }
                    };
                    // get collection boxes in this block
                    let mpboxes = mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(2) > div');
                    // which box has the sponsored word?
                    for (let j = 0, jL = mpboxes.length; j < jL; j++) {
                        let mpbox = mpboxes[j];
                        if (mpbox.innerText.split('\n').indexOf(SPONSORED_WORD) >= 0) {
                            hide(mpbox);
                        }
                    }
                }
            }
        }
        else {
            // try again (via mutation observer)
            oneOffsTries++;
        }
    } // -- end CheckOneOffs

    function checkPost(post) {
        // check the post for Suggestions and "Sponsored"

        let csr; // getComputedStyle results
        let ss = 1; // sponsored structure (1 = uses aria-label, 2 = uses a tag.
        let SoB = 'S'; // (S)pan or (B)old tags used for holding Sponsored letters/word
        let isHidden = false;

        // check if post is visible (other addon(s)/extension(s) may have already hidden this post)
        csr = window.getComputedStyle(post, null);
        if (csr.display !== 'none') {

            // News Feed suggestions
            if ((!isHidden) && (FEEDS_PAGES.isNF) && (nfSuggestions.length)) {
                let itexts = post.innerText.split('\n');
                let iL = itexts.length;
                iL = (iL > 12) ? 13 : iL;
                let suggX;
                for (let x = 0; x < iL; x++) {
                    suggX = nfSuggestions.indexOf(itexts[x]);
                    if (suggX >= 0) {
                        post.setAttribute('adbpr', nfSuggestions[suggX]);
                        isHidden = true;
                        hide(post);
                        break;
                    }
                }
            };

            // Groups Feed suggestions
            if ((!isHidden) && FEEDS_PAGES.isGF && gfSuggestions.length) {

                // Groups Feed post suggestions
                // - do this before looking for 'Sponsored'.
                // only look at the first 12 bits of text. after 20, you could trigger a false postive (join rule).
                let itexts = post.innerText.split('\n');
                if (itexts.length > 1) {
                    let iL = itexts.length;
                    iL = (iL > 12) ? 13 : iL;
                    let suggX;
                    for (let x = 0; x < iL; x++) {
                        suggX = gfSuggestions.indexOf(itexts[x]);
                        //console.info('---', itexts[iX], suggX);
                        if (suggX >= 0) {
                            post.setAttribute('adbpr', gfSuggestions[suggX]);
                            hide(post);
                            isHidden = true;
                            break;
                        }
                    }
                }
                else {
                    // "empty" posts.
                    // console.info('-- skipping:', itexts);
                    isHidden = true; // stop processing this post.
                }
            }


            // Sponsored post
            if (!isHidden) {
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
                        daText += nsp.innerText;
                        //console.info("--->", daText);
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
                        // the "parent" has childNodes (spans) ...
                        for (let cX = 0, cL = nsp.children.length; cX < cL; cX++) {
                            if (nsp.children[cX].tagName === 'SPAN') {
                                csr = window.getComputedStyle(nsp.children[cX]);
                                if (csr.position === 'relative' && csr.display === 'inline') {
                                    // visible ... (need both styles)
                                    if (nsp.children[cX].innerText.length === 1) {
                                        daText += nsp.children[cX].innerText;
                                    }
                                }
                            }
                        }
                    }
                    // console.info("--is Sponsored post:", daText, (SPONSORED_WORD.indexOf(daText) > -1));
                    // console.info("-----sp: ", sp);
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
            if ((SPONSORED_PAID_FOR.enabled) && (!isHidden)) {
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
                        // changed "pages" ...
                        prevURL = window.location.href;
                        // - reset feeds flags
                        FEEDS_PAGES.isNF = (FEEDS_PAGES.news.indexOf(prevURL) >= 0);
                        FEEDS_PAGES.isGF = (FEEDS_PAGES.groups.indexOf(prevURL) >= 0);
                        FEEDS_PAGES.isVF = (FEEDS_PAGES.videos.indexOf(prevURL) >= 0);
                        FEEDS_PAGES.isMP = ((FEEDS_PAGES.marketplace.indexOf(prevURL) >= 0) && (HIDE_MARKETPLACE_ADS.enabled));
                        FEEDS_PAGES.isAF = (FEEDS_PAGES.isNF || FEEDS_PAGES.isGF || FEEDS_PAGES.isVF || FEEDS_PAGES.isMP);
                        // - allow checkOneOffs() to run again.
                        oneOffsTries = 0;
                    }
                    // console.info(':---:', FEEDS_PAGES.isAF, FEEDS_PAGES.isNF, FEEDS_PAGES.isGF, FEEDS_PAGES.isVF, FEEDS_PAGES.isMP, prevURL, window.location.href);
                    // scan the new nodes for any work to do.
                    // - is it a Feed / Marketplace page?
                    if (FEEDS_PAGES.isAF) {
                        for (let i = 0; i < mutation.addedNodes.length; i++) {
                            if (mutation.addedNodes[i].tagName === 'DIV') {
                                if (FEEDS_PAGES.isNF || FEEDS_PAGES.isGF) {
                                    let postNode = mutation.addedNodes[i].closest('div[role="feed"] > div:not([adbpr]');
                                    // News / Groups Feed post.
                                    if (postNode) {
                                        // mark as processed
                                        postNode.setAttribute('adbpr', '')
                                        // check this post (either a News Feed or Groups Feed one)
                                        checkPost(postNode);
                                    }
                                }
                                else if (FEEDS_PAGES.isVF) {
                                    // Videos Feed post
                                    let postNode = mutation.addedNodes[i].closest('div[data-pagelet="MainFeed"] > div > div > div > div:not([adbpr])') ;
                                    if (postNode) {
                                        postNode.setAttribute('adbpr', '')
                                        checkPost(postNode);
                                    }
                                }
                                // check for the outside-of-feed posts and Marketplace.
                                // - to be done after above postNode(s) have been processed.
                                // - may take a few goes to see them.
                                if (oneOffsTries < 21) {
                                    checkOneOffs();
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
        //console.info(':: MO is running ::');
        let observer = new MutationObserver(callback);
        observer.observe(document.body, {childList: true, subtree: true, attributes: false});
    };
    doObservations();

})();
