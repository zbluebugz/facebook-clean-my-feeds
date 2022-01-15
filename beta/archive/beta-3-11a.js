// ==UserScript==
// @name         facebook - ad block v3 (beta)
// @version      3.11a_beta
// @description  Hides sponsored posts in FB's news-feed (Sept 2021)
// @author       zbluebugz
// @match        https://*.facebook.com/*
// @-icon         https://www.google.com/s2/favicons?domain=facebook.com
// @-icon64URL    https://www.google.com/s2/favicons?domain=facebook.com
// @run-at       document-idle
// @namespace https://greasyfork.org/users/812551
// ==/UserScript==
/*
  Comments:
    original: https://pastebin.com/raw/vmaiA8jJ
    05/09/2021: FB has changed the way sponsored posts are created - made harder to detect.
    06/09/2021: Detected a couple of slight variations in how sponsored posts are created.
    14/09/2021: Detected another slight variation in how sponsored posts are created.
    14/09/2021: Fixed bug with getting textNode values.
    18/09/2021: Detected another variation on how sponsored posts are created.
    18/09/2021: Added code to detect 'Sponsored · Paid for by XYZ' (very rare - untested)
    21/09/2021: Added Portuguese (requested by a user)
    21/09/2021: Detected another variation on how sponsored posts are created.
    22/09/2021: Detected another variation on how sponsored posts are created.
    06/10/2021: Added code for video feeds (not streaming), group feeds and marketplace (home)
       10/2021: Added code for other parts of FB
*/

(function () {
    'use strict';

    // -- START KEYWORDS

    // news feed: xyz, explore brands for you (francis)

    // group feed: Friends' groups

    // video feeds - low quality: For Entertainment Purposes Only

    // Hide Sponsored posts
    // - no toggle :-)   (keyword #1)

    // Hide certain promotional posts from News Feed...
    // - People you may know?   (keyword #2)
    const TOGGLE_PEOPLE_YOU_MAY_KNOW = true;
    // - Suggested for you?   (keyword #3)
    const TOGGLE_SUGGESTED_CONTENT = true;
    // - Suggested pages?   (keyword #4)
    const TOGGLE_SUGGESTED_PAGES = true;
    // - Suggested events?   (keyword #5)
    const TOGGLE_SUGGESTED_EVENTS = false;
    // - Paid partnership?   (keyword #6)
    //   -- page you follow is "sponsoring" another page's post (e.g. job)
    const TOGGLE_PAID_PARTNERSHIP = true;
    // - Suggested live gaming video?    (keyword #7)
    const TOGGLE_SUGGESTED_LIVE_GAMES = true;
    // - name, explore brands for you (keyword #13)
    const TOGGLE_EXPLORE_BRANDS = true;
    // - "For Entertainment Purposes Only" (low quality videos) (keyword #14)
    const TOGGLE_VIDEO_LQ = true;


    // Group Feed ...
    // - Suggested groups   (keyword #8)
    const TOGGLE_SUGGESTED_GROUPS = true;
    // - Post form public group?    (keyword #9)
    // - Suggested post from a public group?   (keyword #10)
    //   - (lots of posts from groups not subscribed too)
    //   - (may cause flicking while fb is grabbing more group posts - and most of them are promoted ones ...)
    const TOGGLE_POST_FROM_PUBLIC_GROUP = true; // for both keyword 9 & 10
    // - From a group that your friend is in?   (keyword #11)
    const TOGGLE_SUGGESTED_GROUPS_VIA_FRIEND = true;
    // - Popular near you
    const TOGGLE_POPULAR_NEAR_YOU = true; // keyword #12


    // Create Room ..
    //(uses the data-pagelet attribute for detection. no keyword/text required.)
    const TOGGLE_CREATE_ROOM = true;

    // Exceptions for certain sponsored posts, e.g. job postsings
    // - examples: "Company XYZ posted a job"\n"Sponsored"; "Company XYZ posted a job in CITY"\n"Sponsored";
    // - has separate keyword list.
    let TOGGLE_EXCEPTIONS_SPONSORED = true;

    // debugging: if false, hide the post. if true, show a border on the post.
    const DEBUG = false;

    // how often to run this script (milliseconds)
    const CHECK_RATE_MS = 120;

    // Keywords:
    // - multivalue object;
    // - various non-sponsored keywords ...
    const KEYWORDS_LIST = {
        // english
        'en': ['Sponsored', 'People you may know', 'Suggested for you', 'Suggested Pages', 'Suggested Events', 'Paid partnership', 'Suggested live gaming video', 'Suggested groups', 'Post from public group', 'Suggested post from a public group', 'From a group that your friend is in', 'Popular near you', 'Explore brands for you', 'For Entertainment Purposes Only'],
        // portuguese
        'pt': ['Patrocinado', 'Pessoas que talvez conheças', 'Sugestões para ti', 'Páginas sugeridas', 'Eventos Sugeridos', 'Parceria paga', 'Vídeo sugerido de jogos ao vivo', 'Grupos sugeridos', 'Postagem de grupo público', 'Publicação sugerida de um grupo público', 'De um grupo em que o teu amigo/a é membro', 'Popular near you', 'Explore brands for you', 'For Entertainment Purposes Only'],
        // german
        'de': ['Gesponsert', 'Personen, die du kennen könntest', 'Vorschläge für dich', 'Vorgeschlagene Seiten', 'Suggested Events', 'Paid partnership', 'Suggested live gaming video', 'Vorgeschlagene Gruppen', 'Post from public group', 'Vorgeschlagener Beitrag aus einer öffentlichen Gruppe', 'Aus einer Gruppe, in der dein/e Freund/in ist', 'Popular near you', 'Explore brands for you', 'For Entertainment Purposes Only']
    }
    // Exception for certain "Sponsored" posts, e.g. job postsings
    // examples: "Company XYZ posted a job"\n"Sponsored"; "Company XYZ posted a job in CITY"\n"Sponsored";
    const KEYWORDS_EXCEPTIONS_LIST = {
        // english
        'en': ['posted a job'],
        'pt': ['publicou um emprego'],
        'de': ['hat eine Jobanzeige gepostet']
    }


    // *** Untested - very,very rare to see this one ***
    // Sponsored paid for ... (not "Paid partnership")
    const TOGGLE_SPONSORED_PAID_FOR = false;
    // - just match the first few words ...
    const SPONSORED_PAID_FOR_WORDS = 'Sponsored · Paid for by';


    // -- END TOGGLES & KEYWORDS
    // -- rest of code - no more toggles & keywords to adjust.

    // which language entry to use? (default to EN)
    const SPONSORED_OBJ = KEYWORDS_LIST[document.querySelector('html').getAttribute('lang')] || KEYWORDS_LIST.en;
    // Exceptions ...
    const EXCEPTIONS_OBJ = KEYWORDS_EXCEPTIONS_LIST[document.querySelector('html').getAttribute('lang')] || KEYWORDS_EXCEPTIONS_LIST.en;
    if (TOGGLE_EXCEPTIONS_SPONSORED) {
        // do we actually have anything to skip/ignore?
        TOGGLE_EXCEPTIONS_SPONSORED = (EXCEPTIONS_OBJ.length === 0) ? false : true;
    }

    // keyword for "sponsored"
    const SPONSORED_WORD = SPONSORED_OBJ[0];

    // Keywords: text to find for certain promotional elements
    let suggestions = []; // News Feed suggestions
    if (TOGGLE_PEOPLE_YOU_MAY_KNOW) 	suggestions.push(SPONSORED_OBJ[1]);
    if (TOGGLE_SUGGESTED_CONTENT) 	 	suggestions.push(SPONSORED_OBJ[2]);
    if (TOGGLE_SUGGESTED_PAGES) 	 	suggestions.push(SPONSORED_OBJ[3]);
    if (TOGGLE_SUGGESTED_EVENTS) 	 	suggestions.push(SPONSORED_OBJ[4]);
    if (TOGGLE_PAID_PARTNERSHIP) 	 	suggestions.push(SPONSORED_OBJ[5]);
    if (TOGGLE_SUGGESTED_LIVE_GAMES)	suggestions.push(SPONSORED_OBJ[6]);
    if (TOGGLE_SUGGESTED_GROUPS)	 	suggestions.push(SPONSORED_OBJ[7]);
    if (TOGGLE_EXPLORE_BRANDS) 	 	 	suggestions.push(SPONSORED_OBJ[12]);
    if (TOGGLE_VIDEO_LQ) 	 	 	 	suggestions.push(SPONSORED_OBJ[13]);

    let gsuggestions = []; // Group Feed suggestions
    if (TOGGLE_SUGGESTED_GROUPS)	 	gsuggestions.push(SPONSORED_OBJ[7]);
    if (TOGGLE_POST_FROM_PUBLIC_GROUP) 	gsuggestions.push(SPONSORED_OBJ[8]);
    if (TOGGLE_POST_FROM_PUBLIC_GROUP) 	gsuggestions.push(SPONSORED_OBJ[9]);
    if (TOGGLE_SUGGESTED_GROUPS_VIA_FRIEND) gsuggestions.push(SPONSORED_OBJ[10]);
    if (TOGGLE_POPULAR_NEAR_YOU)	 	gsuggestions.push(SPONSORED_OBJ[11]);

    //console.info('gSuggestions:', gsuggestions);

    // hide or highlight the selected posts
    let HIDE_STYLE = !DEBUG ? 'display:none !important' : 'border:3px dotted orange !important' ;
    let PINKIFY_STYLE = 'border: 5px dotted pink !important' ;

    // sponsored for posts - length of text
    let SPONSORED_PAID_FOR_WORDS_LEN = SPONSORED_PAID_FOR_WORDS.length;

    function hide(el) {
        return el.setAttribute('style',HIDE_STYLE);
    };
    function pinkify(el) {
        return el.setAttribute('style',PINKIFY_STYLE);
    }

    function doChanges() {

        if(TOGGLE_CREATE_ROOM){
            let create_room = document.querySelector('div[data-pagelet="VideoChatHomeUnitNoDDD"]');
            if(create_room) hide(create_room);
        };

        function findSponsoredPosts() {
            // get collection of News Feed posts, ignore those already read by this script.
            let posts = Array.from(document.querySelectorAll('div[data-pagelet*=FeedUnit]:not([adbpr])'));
            if (posts.length < 1) {
                // no News Feed posts found ... try Video Feed posts (has same word spoofing pattern as News Feed)
                posts = Array.from(document.querySelectorAll('div[data-pagelet="MainFeed"] > div > div > div > div:not([adbpr'));
            }
            // loop through each post to see if it is a sponsored one or not
            let csr ; // getComputedStyle results
            let ss = 1; // sponsored structure (1 = uses aria-label, 2 = uses a tag.
            let isFlagged = false; // has post been flagged as sponsored? (skip further processing for that post)
            let SoB = 'S'; // (S)pan or (B)old tags used for holding Sponsored letters/word
            posts.forEach(
                post => {
                    // flag this post as not to be read/processed again
                    post.setAttribute('adbpr', true);
                    // reset isHidden flag
                    isFlagged = false;
                    // within this unread post, find the SPAN element(s) having aria-label = Sponsored
                    // (usually only one is found)
                    let alSpans = Array.from(post.querySelectorAll('span[aria-label="' + SPONSORED_WORD + '"]'));
                    ss = 1;
                    // console.info('----:', SPONSORED_WORD, alSpans.length );
                    if (alSpans.length === 0) {
                        // sigh!  uses the A + aria-label structure;
                        alSpans = Array.from(post.querySelectorAll('a[href="#"][aria-label="label"], a[aria-label="' + SPONSORED_WORD +'"]'));
                        ss = 2;
                    }
                    // is the word "Sponsored" visible?
                    // - there are several span/b tags having single letters - all randomised, but will make up "sponsored" when certain span/b tags are "visible".
                    alSpans.forEach(sp => {
                        let daText = '';
                        // get the next sibling from the <span aria-label="..."></span> | <a href="#" aria-label="..."> | <a aria-label="...">
                        let nsp ;
                        if (ss === 1) {
                            // uses the span[arial-label="sponsored] structure
                            nsp = sp.nextSibling;
                            // which set of TAGs is being used?
                            SoB = 'S'; // SPAN
                        }
                        else {
                            // ss = 2
                            // - uses the a[href=# aria-label=label] structure
                            // - uses the a[aria-label=SPONSORED_WORD] structure
                            //  - A tag is nested with 2 SPANs then either B or SPAN tag wrapper with lots of B/SPAN tags.
                            //  - grab the B/SPAN tag (wrapper)
                            nsp = sp.firstChild.firstChild.firstChild;
                            // which set of TAGS used?
                            SoB = (nsp.tagName === 'B') ? 'B' : 'S' ;
                        }
                        // note that this sibling is a "parent" ...
                        // .. sometimes it has a textNode (as firstChild) ...
                        if (SoB === 'B') {
                            // uses the <b> tags structure
                            daText += nsp.innerText;
                            //console.info("--->", daText);
                        }
                        else {
                            // uses the <span> tags structure
                            if (nsp.tagName === "SPAN") {
                                if (nsp.firstChild.tagName === 'SPAN') {
                                    // no immediate textNode
                                    // - nothing to do.
                                }
                                else {
                                    csr = window.getComputedStyle(nsp);
                                    if (csr.position === 'relative' && csr.display === 'inline') {
                                        // visible ... (need both styles) ... grab the textNode's value.
                                        daText += nsp.firstChild.textContent ;
                                    }
                                }
                            }
                            // the "parent" has childNodes (spans) ...
                            nsp = nsp.firstChild;
                            do {
                                if (nsp.tagName === 'SPAN') {
                                    csr = window.getComputedStyle(nsp);
                                    if (csr.position === 'relative' && csr.display === 'inline') {
                                        // visible ... (need both styles)
                                        if (nsp.innerText.length ===1) {
                                            daText += nsp.innerText;
                                        }
                                    }
                                }
                                nsp = nsp.nextSibling;
                            } while (nsp);
                        }
                        // console.info("--is Sponsored post:", daText, (SPONSORED_WORD.indexOf(daText) > -1));
                        // console.info("-----sp: ", sp);
                        // do we hide this post?
                        if (SPONSORED_WORD.indexOf(daText) > -1 ) {
                            if (!TOGGLE_EXCEPTIONS_SPONSORED) {
                                hide(post);
                            }
                            else {
                                // Exceptions of certain sponsored posts.
                                let spHeading = post.querySelector('h4 > strong > span > a > span');
                                if (spHeading) {
                                    spHeading = spHeading.parentNode.parentNode.parentNode;
                                    if (spHeading.nextSibling.nodeName == '#text') {
                                        if (EXCEPTIONS_OBJ.indexOf(spHeading.nextSibling.nodeValue.trim()) < 0) {
                                            pinkify(post)
                                        }
                                    }
                                }
                                else {
                                    hide(post);
                                }
                            }
                            isFlagged = true;
                        }
                    });

                    if (!isFlagged) {
                        // post not yet marked to be hidden ...
                        // .. so check for Suggestions.
                        // .. suggested words are in either A or SPAN tags
                        if (suggestions) {
                            // scan the A and SPAN tags
                            let els = Array.from(post.querySelectorAll('a, span'));
                            for (let x = 0; x < els.length; x++) {
                                if (suggestions.includes(els[x].textContent)) {
                                    hide(post);
                                    isFlagged = true;
                                    break;
                                }
                            };
                        }
                        // sponsored + paid for ... posts (untested)
                        if (TOGGLE_SPONSORED_PAID_FOR && !isFlagged) {
                            let tdivs = Array.from(post.querySelectorAll('div[role="button"]'));
                            for (let x= 0; x < tdivs.length; x++) {
                                if (tdivs[x].textContent.substring(0,SPONSORED_PAID_FOR_WORDS_LEN) === SPONSORED_PAID_FOR_WORDS) {
                                    hide(post);
                                    break;
                                }
                            }
                        }
                    }
                }
            );
            return (posts.length > 0);
        };
        function findMarketplaceSponsoredPosts() {
            // marketplace home page
            let mphome = document.querySelectorAll('[data-pagelet="CometMarketplaceHomeContentWithBannerContainer"]');
            if (mphome.length) {
                // get collection of blocks (which haven't been read/processed)
                let mpblocks = Array.from(document.querySelectorAll('div[data-pagelet*="BrowseFeedUpsell_"]:not([adbpr])'));
                mpblocks.forEach( mpblock => {
                    mpblock.setAttribute('adbpr', true);
                    // does this block of boxes have the sponsored word?
                    if (mpblock.innerText.split('\n').indexOf(SPONSORED_WORD) >= 0) {
                        // which heading has the sponsored word?
                        let mpheadings = Array.from(mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(1) > div a > span'));
                        // get collection boxes in this block
                        let mpboxes = mpblock.querySelectorAll('div > div > span > div > div > div > div:nth-of-type(2) > div');
                        // which box has the sponsored word?
                        mpboxes.forEach( mpbox => {
                            if (mpbox.innerText.split('\n').indexOf(SPONSORED_WORD) >= 0) {
                                hide(mpbox);
                                // hide the heading too ...
                                mpheadings.forEach( mpheading => {
                                    if (mpheading.innerText === SPONSORED_WORD) {
                                        hide(mpheading.parentElement.parentElement);
                                    }
                                });
                            }
                        });
                    }
                });
            }
            return (mphome.length > 0);
        };
        function findGroupFeedSponsoredPosts() {
            // Group Feed posts - annoyances
            if (gsuggestions.length) {
                let gfPosts = Array.from(document.querySelectorAll('div[data-pagelet*="GroupsFeed_"]:not([adbpr])'));
                gfPosts.forEach( gfPost => {
                    gfPost.setAttribute('adbpr', true);
                    // does this post have an annoying word?
                    let gfHeading = gfPost.innerText.split('\n')[0];
                    //console.info("---:", gfHeading, gsuggestions.indexOf(gfHeading));
                    if (gsuggestions.indexOf(gfHeading) >= 0) {
                        hide(gfPost);
                    }
                });
                // promotion box - outside of general group feed container ...
                if (gfPosts.length) {
                    let gfPBox = gfPosts[0].parentElement.parentElement.parentElement.parentElement.nextSibling;
                    if (!gfPBox.hasAttribute('adbpr')) {
                        gfPBox.setAttribute('adbpr', true);
                        let gfHeading = gfPBox.querySelector('div:nth-of-type(2) > div > div > div > div > div > div > div:nth-of-type(1) > div').innerText.split('\n')[0];
                        //console.info("---::", gfHeading, gsuggestions.indexOf(gfHeading));
                        if (gsuggestions.indexOf(gfHeading) >= 0) {
                            hide(gfPBox);
                        }
                    }
                }
                return (gfPosts.length > 0);
            }
            return false;
        };

        // call the functions to scan & hide sponsored bits
        if (!findSponsoredPosts()) {
            if (!findMarketplaceSponsoredPosts()) {
                findGroupFeedSponsoredPosts();
            };
        };

    };

    const callback = function () {
        try {
            doChanges();
        } catch (e) {
            console.warn('facebook - ad block v3', e);
        }
    };

    setInterval(callback, CHECK_RATE_MS);
})();
