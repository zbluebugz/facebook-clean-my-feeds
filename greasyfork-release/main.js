// ==UserScript==
// @name         facebook - ad block v3
// @version      3.10gf
// @description  Hides sponsored posts in FB's news-feed (Sept 2021)
// @author       zbluebugz
// @match        https://*.facebook.com/*
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
    09/10/2021: Code tweaked, removed dead code.
    10/10/2021: Code tweaked.
*/

(function () {
    'use strict';

    // *** Start of user customisations ***

    // Hide certain promotional posts ... (optional)
    const TOGGLE_PEOPLE_YOU_MAY_KNOW = true;
    const TOGGLE_SUGGESTED_CONTENT = true;
    const TOGGLE_SUGGESTED_PAGES = true ;
    const TOGGLE_SUGGESTED_EVENTS = false;
    const TOGGLE_PAID_PARTNERSHIP = true;
    const TOGGLE_SUGGESTED_GROUPS = false;

    // "Create Room" - uses the data-pagelet attribute for detection. (no language text required)
    const TOGGLE_CREATE_ROOM = true;

    // News Feed Keywords
    // - multivalue object;
    // - various words to detect ...
    const SPONSORED_LIST = {
        // english
        'en': ['Sponsored', 'People you may know', 'Suggested for you', 'Suggested Pages', 'Suggested Events', 'Paid partnership', 'Suggested groups'],
        // portuguese
        'pt': ['Patrocinado', 'Pessoas que talvez conheças', 'Sugestões para ti', 'Páginas sugeridas', 'Eventos Sugeridos', 'Parceria paga', 'Grupos sugeridos']
    }

    // *** END OF USER CUSTOMISATIONS ***


    // which language entry to use?
    const SPONSORED_OBJ = SPONSORED_LIST[document.querySelector('html').getAttribute('lang')] || SPONSORED_LIST.en;
    const SPONSORED_WORD = SPONSORED_OBJ[0];

    // Keywords: text to find for certain promotional elements
    let suggestions = [];
    if(TOGGLE_PEOPLE_YOU_MAY_KNOW) 	suggestions.push(SPONSORED_OBJ[1]);
    if(TOGGLE_SUGGESTED_CONTENT) 	suggestions.push(SPONSORED_OBJ[2]);
    if(TOGGLE_SUGGESTED_PAGES) 	 	suggestions.push(SPONSORED_OBJ[3]);
    if(TOGGLE_SUGGESTED_EVENTS) 	suggestions.push(SPONSORED_OBJ[4]);
    if(TOGGLE_PAID_PARTNERSHIP) 	suggestions.push(SPONSORED_OBJ[5]);
    if(TOGGLE_SUGGESTED_GROUPS)	 	suggestions.push(SPONSORED_OBJ[6]);

    // hide or highlight the selected posts
    let HIDE_STYLE = (true) ? 'display:none !important' : 'border:3px dotted orange !important';

    // how often to run this script (milliseconds)
    const CHECK_RATE_MS = 100;

    function hide(el) {
        return el.setAttribute('style', HIDE_STYLE);
    }

    function doChanges() {

        if(TOGGLE_CREATE_ROOM){
            let createRoom = document.querySelector('div[data-pagelet="VideoChatHomeUnitNoDDD"]:not([adbpr])');
            if(createRoom) {
                createRoom.setAttribute('adbpr', true);
                hide(createRoom);
            }
        }

        function findSponsoredPosts() {
            // get collection of posts, ignore those already read by this script.
            let posts = Array.from(document.querySelectorAll('div[data-pagelet*="FeedUnit"]:not([adbpr])'));
            if (posts.length) {
                // loop through each post to see if it is a sponsored one or not
                let csr ; // getComputedStyle results
                let ss = 1; // sponsored structure (1 = uses aria-label, 2 = uses a tag.
                let SoB = 'S'; // (S)pan or (B)old tags used for holding Sponsored letters/word
                posts.forEach(
                    post => {
                        // flag this post as not to be read/processed again
                        post.setAttribute('adbpr', true);
                        // check if post is visible (other add-on(s)/extension(s) may have already hidden this post)
                        csr = window.getComputedStyle(post);
                        if (csr.display !== 'none') {
                            // within this unread post, find the SPAN element(s) having aria-label = Sponsored
                            // (usually only one is found)
                            let alSpans = Array.from(post.querySelectorAll('span[aria-label="' + SPONSORED_WORD + '"]'));
                            ss = 1;
                            // console.info('----:', SPONSORED_WORD, alSpans.length );
                            if (alSpans.length === 0) {
                                // try the alternative structures using the A tag; 2 x queries
                                alSpans = Array.from(post.querySelectorAll('a[href="#"][aria-label="label"]', 'a[aria-label="' + SPONSORED_WORD +'"]'));
                                ss = 2;
                            }
                            // is the word "Sponsored" visible?
                            let daText = '';
                            alSpans.forEach(sp => {
                                // get the next sibling from the <span aria-label="Sponsored"></span>
                                let nsp ;
                                if (ss === 1) {
                                    // uses the span[arial-label="sponsored] structure
                                    nsp = sp.nextSibling;
                                    // which set of TAGs used?
                                    SoB = 'S'; // SPAN
                                }
                                else {
                                    // ss = 2
                                    // - uses either "a[href=# aria-label=label]" or "a[aria-label=SPONSORED_WORD" structure
                                    // - A tag is nested with 2 SPANs then either B or SPAN tag wrapper with lots of B/SPAN tags.
                                    // - grab the B/SPAN tag (wrapper)
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
                                    // there are several SPAN having single letters - all randomised, but will make up "sponsored" when certain SPAN tags are "visible".
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
                                                if (nsp.innerText.length === 1) {
                                                    daText += nsp.innerText;
                                                }
                                            }
                                        }
                                        nsp = nsp.nextSibling;
                                    } while (nsp);
                                }
                            });
                            // console.info("--is Sponsored post:", daText, (SPONSORED_WORD.indexOf(daText) > -1));
                            // do we hide this post?
                            if (SPONSORED_WORD.indexOf(daText) >= 0) {
                                hide(post);
                            }
                            else if (suggestions.length){
                                // post is not sponsored, but is it one of the suggested ones?
                                // scan the A and SPAN tags
                                let els = Array.from(post.querySelectorAll('a, span'));
                                for (let x = 0; x < els.length; x++) {
                                    if (suggestions.includes(els[x].textContent)) {
                                        hide(post)
                                        break;
                                    }
                                }
                            }
                        }
                    }
                )
            }
            return posts.length > 0
        }

        findSponsoredPosts();

    }

    const callback = function () {
        try {
            doChanges();
        } catch (e) {
            console.warn('facebook - ad block', e);
        }
    };

    setInterval(callback, CHECK_RATE_MS);
})();
