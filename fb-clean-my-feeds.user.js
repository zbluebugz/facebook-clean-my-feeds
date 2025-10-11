// ==UserScript==
// @name         FB - Clean my feeds (5.05)
// @description  Hide Sponsored and Suggested posts in FB's News Feed, Groups Feed, Watch Videos Feed and Marketplace Feed
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-clean-my-feeds/issues
// @version      5.05
// @author       Founder - zbluebugz (https://github.com/zbluebugz/)
// @author       UI polish - Quoc Viet Trinh (https://github.com/trinhquocviet/)
// @author       Filters maintenance - Artificial Sweetener (https://github.com/Artificial-Sweetener/)
// @match        https://www.facebook.com/*
// @match        https://web.facebook.com/*
// @match        https://facebook.com/*
// @noframes
// @grant        GM.registerMenuCommand
// @grant        GM.info
// @grant        unsafeWindow
// @license      GPL-3.0-only; https://www.gnu.org/licenses/gpl-3.0.html
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAanSURBVHic5ZtpjBVFEMd/u8vthsCi3OcGxQWBKJdEDEbuDypqNoGgxGgkWY8YDaIYFQ9MRCOJJ0Y80JhgVESiRpCVIAYIIAQPCEoQZCOIyuIB667IPj/8qzPzhveANzPvvX3LP5nMVHdPT1V3VVd1zQwUNroDK4A/gB3A1Pyyk1sUA18DCeBPoBH4FxiRT6ZyiXFI+C+AFsAdRj+TSSfF8fOVM0y281LgP+BwHnnJC75FM15u9BtGV+aNoxyiG7L5H3xlNUgTyjLpqFBNYDJQBKw0ejDQE9gC1GbSUaEOwCQ7r0pDN2sUA78CDUCpla1G9j86X0zlEqOQsJ8b3RaoQ6pfkmlnhWgCQXW/Ag1CNXAi086awwCcVfbfATgOHEReAGAXMone+WIql7geCbvE6F5G7wjbYaGZQFDdpwToZo99aKHrbPQypAGT0t3QnFCBhN1idAlyff8A7cJ2WkgmEFT/S4GOwDoUB4RCIQ3ARDt/ZudL7LwyRdtmhzbAMZT5aWll5wGzgfb5YiqXmIDsf3ncHReKCQTtfwDwGtA1P+zkHi7708/o142ekvaOZoQeKPvzva8sVPYnFQrBBCahuN+pf+jsTyoUygDAWbr7KwF+J4vZnxZxdJICFYQLTxvQzi5h9HCgE7AGOGp9jgGOAJujs5kd3IAECHvc7+vrYSubY/QUo9+Ni9lsrAG97LwN+NiuDwPvAVuN/s7oA0avBjbatdvpQYHa/1w0S1Xo7W0CT7hZRj9o9IdGX4yX7FhodTnJ/jRlLzAerVGrkNC9UAS4A9gf10Oa8gDkJPvTlAdgIooAXf4/K/YflxssBc5HA9rdynoDQ+z6HGAYnu12N7qD0RUo5AXoAlxtbb9Cb4FaAFeidFid3XschccNMckQGpXIR0dxfemO+faMy9LUH0RvikIjqga0QdvS1sBHQH3E/hzGo3RX0P1twlsAy9BXIq8AQ2N6bsa4CM1EnHaZKvuzyZ4zMNB2P1onWhISURdBp0Fx2uHlKORdg+y8E7L5GmBnoG09ihFCyxHVBH6280jgRsKbwGbgJ7sOrvbj0aaohuTPXzoCfYHfyPNC+CrRF7tdvv7SZX/SHfdEYb7o9E3OqI9K9JHidBTnf5JhH+vsXAE8DexGUV8Rmvmu6PO3BNK07sCzaK9RHY39+DAUMZip8AB3kzyrK5Dwg43e4Gu7By18baIwmw2UIWa/yfC+3iiOqAfeRsGO20AttutHrG2RtTsUnd3s4ChnlqfrjFT5MWA9EvIJqxuFIkC/Royzui5Gb6WJwm1XS9PUlyFbriNZwEa8V18gt1aF8ggJ5G3KUYYogbbRTRLViMGKFHW98AboLxTBzQJewhuEJWiWHc7Fyxk8ihbaBPBCVriPAe5z1QmB8g7Aj1a3DAnm0Bt98Oy04QhwJ/L9RXgmMsPKE8B9WZMgIh5HDN4cKH8e792e+5StL/IY6fz7duApu95m9y3AG4xYEHdWuMbOPX1lA4Bb0QJ5O1rlxyIfXorc2jIkJGjnNw251aHoDdBtdp/LN7rnNDm4rO1io8fiqb6L2AaiPzwSSGNap+hnttXvRKGww5dWXp7inryhGH28vAjvD46jaKFz6vwmnrY5tZ+Xoq9StBdwqv9+oH4vWixTDVpeMA5vZQ8etSjEnYYXco+wut0km18nZN/HAn34w9xi9EvML9kRJXPMRbORANYCM4E+QKs07VuhAUkAN/nKL0T7eqc5y/G8yQe+dt2sbAtNAC52/5tT/6FRhgSsxEtqbMWb/XKU80ugMNjFADM42d+PxPMkecUwpIp1nJyPKwKuRTPnojj/sZHkNz/uReeLJO9MX7bymb6y66zsuZjkCI2VxkhVoHwQml0nbB3a269GMzmVZCHddz970dfeDm1RMOQixlo73Ppwb6zSZIh+xsQekhexCXgMrgeu4tQr9RiU0U1YWz/m4Q1gre9osPLpUYWIgipj4klf2RDEbCPwAMn5ueHI17+FNKEaeQCnJQtJxnD05Wc9cEGg7lO7Z0wMcoSGy8q4ha8EL4U1x9duLMoLpHKPjSheCIazg9A+P4EW2SC2W13f6GKEh0tQuK2rW63X4tn3Ajz3uAFtYEYD/dGq77d3kMbcgvdyZVGaZx9C4XDoFHgcuAsxudQYcWrpdn/zjT4MXHOavvqj312dBp1AW95UecqWVn8gRV0kZJoUbY9Uuw+KAdohM9hHcia3FsX7qdAK+fvgTNaTXsBipPqbifgqLA70AN5B+fhTpavjPhqBh+IW5n827DI9G+eQwwAAAABJRU5ErkJggg==
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAanSURBVHic5ZtpjBVFEMd/u8vthsCi3OcGxQWBKJdEDEbuDypqNoGgxGgkWY8YDaIYFQ9MRCOJJ0Y80JhgVESiRpCVIAYIIAQPCEoQZCOIyuIB667IPj/8qzPzhveANzPvvX3LP5nMVHdPT1V3VVd1zQwUNroDK4A/gB3A1Pyyk1sUA18DCeBPoBH4FxiRT6ZyiXFI+C+AFsAdRj+TSSfF8fOVM0y281LgP+BwHnnJC75FM15u9BtGV+aNoxyiG7L5H3xlNUgTyjLpqFBNYDJQBKw0ejDQE9gC1GbSUaEOwCQ7r0pDN2sUA78CDUCpla1G9j86X0zlEqOQsJ8b3RaoQ6pfkmlnhWgCQXW/Ag1CNXAi086awwCcVfbfATgOHEReAGAXMone+WIql7geCbvE6F5G7wjbYaGZQFDdpwToZo99aKHrbPQypAGT0t3QnFCBhN1idAlyff8A7cJ2WkgmEFT/S4GOwDoUB4RCIQ3ARDt/ZudL7LwyRdtmhzbAMZT5aWll5wGzgfb5YiqXmIDsf3ncHReKCQTtfwDwGtA1P+zkHi7708/o142ekvaOZoQeKPvzva8sVPYnFQrBBCahuN+pf+jsTyoUygDAWbr7KwF+J4vZnxZxdJICFYQLTxvQzi5h9HCgE7AGOGp9jgGOAJujs5kd3IAECHvc7+vrYSubY/QUo9+Ni9lsrAG97LwN+NiuDwPvAVuN/s7oA0avBjbatdvpQYHa/1w0S1Xo7W0CT7hZRj9o9IdGX4yX7FhodTnJ/jRlLzAerVGrkNC9UAS4A9gf10Oa8gDkJPvTlAdgIooAXf4/K/YflxssBc5HA9rdynoDQ+z6HGAYnu12N7qD0RUo5AXoAlxtbb9Cb4FaAFeidFid3XschccNMckQGpXIR0dxfemO+faMy9LUH0RvikIjqga0QdvS1sBHQH3E/hzGo3RX0P1twlsAy9BXIq8AQ2N6bsa4CM1EnHaZKvuzyZ4zMNB2P1onWhISURdBp0Fx2uHlKORdg+y8E7L5GmBnoG09ihFCyxHVBH6280jgRsKbwGbgJ7sOrvbj0aaohuTPXzoCfYHfyPNC+CrRF7tdvv7SZX/SHfdEYb7o9E3OqI9K9JHidBTnf5JhH+vsXAE8DexGUV8Rmvmu6PO3BNK07sCzaK9RHY39+DAUMZip8AB3kzyrK5Dwg43e4Gu7By18baIwmw2UIWa/yfC+3iiOqAfeRsGO20AttutHrG2RtTsUnd3s4ChnlqfrjFT5MWA9EvIJqxuFIkC/Royzui5Gb6WJwm1XS9PUlyFbriNZwEa8V18gt1aF8ggJ5G3KUYYogbbRTRLViMGKFHW98AboLxTBzQJewhuEJWiWHc7Fyxk8ihbaBPBCVriPAe5z1QmB8g7Aj1a3DAnm0Bt98Oy04QhwJ/L9RXgmMsPKE8B9WZMgIh5HDN4cKH8e792e+5StL/IY6fz7duApu95m9y3AG4xYEHdWuMbOPX1lA4Bb0QJ5O1rlxyIfXorc2jIkJGjnNw251aHoDdBtdp/LN7rnNDm4rO1io8fiqb6L2AaiPzwSSGNap+hnttXvRKGww5dWXp7inryhGH28vAjvD46jaKFz6vwmnrY5tZ+Xoq9StBdwqv9+oH4vWixTDVpeMA5vZQ8etSjEnYYXco+wut0km18nZN/HAn34w9xi9EvML9kRJXPMRbORANYCM4E+QKs07VuhAUkAN/nKL0T7eqc5y/G8yQe+dt2sbAtNAC52/5tT/6FRhgSsxEtqbMWb/XKU80ugMNjFADM42d+PxPMkecUwpIp1nJyPKwKuRTPnojj/sZHkNz/uReeLJO9MX7bymb6y66zsuZjkCI2VxkhVoHwQml0nbB3a269GMzmVZCHddz970dfeDm1RMOQixlo73Ppwb6zSZIh+xsQekhexCXgMrgeu4tQr9RiU0U1YWz/m4Q1gre9osPLpUYWIgipj4klf2RDEbCPwAMn5ueHI17+FNKEaeQCnJQtJxnD05Wc9cEGg7lO7Z0wMcoSGy8q4ha8EL4U1x9duLMoLpHKPjSheCIazg9A+P4EW2SC2W13f6GKEh0tQuK2rW63X4tn3Ajz3uAFtYEYD/dGq77d3kMbcgvdyZVGaZx9C4XDoFHgcuAsxudQYcWrpdn/zjT4MXHOavvqj312dBp1AW95UecqWVn8gRV0kZJoUbY9Uuw+KAdohM9hHcia3FsX7qdAK+fvgTNaTXsBipPqbifgqLA70AN5B+fhTpavjPhqBh+IW5n827DI9G+eQwwAAAABJRU5ErkJggg==
// @run-at       document-start
// ==/UserScript==
/*

    :: Tip ::
        This userscript does not block video ads (begin-roll, mid-roll, end-roll), however there's a work-around:
        1) Install uBlock Origin (uBO) in your browser(s)
        2) In uBO, goto "My filters" tab and paste in the following rule: facebook.com##+js(set, Object.prototype.scrubber, undefined)
        Note: I have not tested this in other content/ad-blockers.


    Release history is tracked in README, (see GitHub repo).

    Attribution: Mop & Bucket icon:
    - made by Freepik (https://www.freepik.com) @ flaticon (https://www.flaticon.com/)
    - page: https://www.flaticon.com/premium-icon/mop_2383747


    Instructions on how to use:
    - In FB, top right corner or bottom left corner, click on the "Clean my feeds" icon (mop + bucket)
    - Alternatively, click on the script manager icon in the menu bar and select "Settings" under FB - Clean my feeds
    - Toggle the various options
    - Click Save then Close.
    - It is recommended that you Export your settings every now and then.
        (When your browser flushes the cache, your settings are deleted).

    Known issue(s):
    - Settings are not saved in Private/Incognito mode when using Firefox.
    - For Chrome/Edge, in Private/Incognito mode, settings are retained until browser is closed.

    \\\ --- No need to amend any of the code below --- ///
*/

// -- need version 8 for async/await
esversion: 8;

(async function () {

    'use strict';

    // -- TM doesn't like spacesin version number, so convert to human-readable-format.
    const SCRIPT_VERSION = 'v' + GM.info.script.version.replaceAll('-', ' ');

    // Due to a GreaseMonkey bug with @require, we've copied an external script into here.
    // @require      https://unpkg.com/idb-keyval@6.0.3/dist/umd.js
    function _typeof(n) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) { return typeof n } : function (n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n })(n) } !function (n, t) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((n = "undefined" != typeof globalThis ? globalThis : n || self).idbKeyval = {}) }(this, (function (n) { "use strict"; function t(n) { return new Promise((function (t, e) { n.oncomplete = n.onsuccess = function () { return t(n.result) }, n.onabort = n.onerror = function () { return e(n.error) } })) } function e(n, e) { var r, o = (!navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise((function (n) { var t = function () { return indexedDB.databases().finally(n) }; r = setInterval(t, 100), t() })).finally((function () { return clearInterval(r) })) : Promise.resolve()).then((function () { var r = indexedDB.open(n); return r.onupgradeneeded = function () { return r.result.createObjectStore(e) }, t(r) })); return function (n, t) { return o.then((function (r) { return t(r.transaction(e, n).objectStore(e)) })) } } var r; function o() { return r || (r = e("keyval-store", "keyval")), r } function u(n, e) { return n("readonly", (function (n) { return n.openCursor().onsuccess = function () { this.result && (e(this.result), this.result.continue()) }, t(n.transaction) })) } n.clear = function () { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o(); return n("readwrite", (function (n) { return n.clear(), t(n.transaction) })) }, n.createStore = e, n.del = function (n) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(); return e("readwrite", (function (e) { return e.delete(n), t(e.transaction) })) }, n.delMany = function (n) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(); return e("readwrite", (function (e) { return n.forEach((function (n) { return e.delete(n) })), t(e.transaction) })) }, n.entries = function () { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o(), t = []; return u(n, (function (n) { return t.push([n.key, n.value]) })).then((function () { return t })) }, n.get = function (n) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(); return e("readonly", (function (e) { return t(e.get(n)) })) }, n.getMany = function (n) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(); return e("readonly", (function (e) { return Promise.all(n.map((function (n) { return t(e.get(n)) }))) })) }, n.keys = function () { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o(), t = []; return u(n, (function (n) { return t.push(n.key) })).then((function () { return t })) }, n.promisifyRequest = t, n.set = function (n, e) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o(); return r("readwrite", (function (r) { return r.put(e, n), t(r.transaction) })) }, n.setMany = function (n) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(); return e("readwrite", (function (e) { return n.forEach((function (n) { return e.put(n[1], n[0]) })), t(e.transaction) })) }, n.update = function (n, e) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o(); return r("readwrite", (function (r) { return new Promise((function (o, u) { r.get(n).onsuccess = function () { try { r.put(e(this.result), n), o(t(r.transaction)) } catch (n) { u(n) } } })) })) }, n.values = function () { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o(), t = []; return u(n, (function (n) { return t.push(n.value) })).then((function () { return t })) }, Object.defineProperty(n, "__esModule", { value: !0 }) }));

// *** *** Language components *** ***
const masterKeyWords = {

    translations: {
    // - NF_ = News Feed
    // - GF_ = Groups Feed
    // - VF_ = Videos Feed
    // - MP_ = Marketplace Feed
    // - PP_ = Person/Page Profile
    // - DLG_ = CMF's Dialog box
    // - CMF_ = CMF's Dialog box
    // - GM_ = Userscript manager

    // -- English
    en: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Sponsored',
    NF_TABLIST_STORIES_REELS_ROOMS: '"Stories | Reels | Rooms" tabs list box',
    NF_STORIES: 'Stories',
    NF_SURVEY: 'Survey',
    NF_PEOPLE_YOU_MAY_KNOW: 'People you may know',
    NF_PAID_PARTNERSHIP: 'Paid partnership',
    NF_SPONSORED_PAID: 'Sponsored · Paid for by ______',
    NF_SUGGESTIONS: 'Suggestions / Recommendations',
    NF_FOLLOW: 'Follow',
    NF_PARTICIPATE: 'Participate',
    NF_REELS_SHORT_VIDEOS: 'Reels and short videos',
    NF_SHORT_REEL_VIDEO: 'Reel/short video',
    NF_EVENTS_YOU_MAY_LIKE: 'Events you may like',
    NF_ANIMATED_GIFS_POSTS: 'Animated GIFs',
    NF_ANIMATED_GIFS_PAUSE: 'Pause animated GIFs',
    NF_SHARES: '# shares',
    NF_LIKES_MAXIMUM: 'Maximum number of Likes',
    GF_PAID_PARTNERSHIP: 'Paid partnership',
    GF_SUGGESTIONS: 'Suggestions / Recommendations',
    GF_SHORT_REEL_VIDEO: 'Reel/short video',
    GF_ANIMATED_GIFS_POSTS: 'Animated GIFs',
    GF_ANIMATED_GIFS_PAUSE: 'Pause animated GIFs',
    GF_SHARES: '# shares',
    VF_LIVE: 'LIVE',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Duplicate video',
    VF_ANIMATED_GIFS_PAUSE: 'Pause animated GIFs',
    PP_ANIMATED_GIFS_POSTS: 'Animated GIFs',
    PP_ANIMATED_GIFS_PAUSE: 'Pause animated GIFs',
    NF_BLOCKED_FEED: ['News Feed', 'Groups Feed', 'Videos Feed'],
    GF_BLOCKED_FEED: ['News Feed', 'Groups Feed', 'Videos Feed'],
    VF_BLOCKED_FEED: ['News Feed', 'Groups Feed', 'Videos Feed'],
    MP_BLOCKED_FEED: ['Marketplace Feed'],
    PP_BLOCKED_FEED: ['Profile page'],
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavirus (information box)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Climate Science (information box)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Subscribe (information box)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Show video controls',
    REELS_DISABLE_LOOPING: 'Disable looping',
    DLG_TITLE: 'Clean my feeds',
    DLG_NF: 'News Feed',
    DLG_GF: 'Groups Feed',
    DLG_VF: 'Videos Feed',
    DLG_MP: 'Marketplace Feed',
    DLG_PP: 'Profile / Page',
    DLG_OTHER: 'Supplementary / information section',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Text filter',
    DLG_BLOCK_NEW_LINE: '(Separate words or phrases with a line break, Regular Expressions are supported)',
    NF_BLOCKED_ENABLED: 'Enabled',
    GF_BLOCKED_ENABLED: 'Enabled',
    VF_BLOCKED_ENABLED: 'Enabled',
    MP_BLOCKED_ENABLED: 'Enabled',
    PP_BLOCKED_ENABLED: 'Enabled',
    NF_BLOCKED_RE: 'Regular Expressions (RegExp)',
    GF_BLOCKED_RE: 'Regular Expressions (RegExp)',
    VF_BLOCKED_RE: 'Regular Expressions (RegExp)',
    MP_BLOCKED_RE: 'Regular Expressions (RegExp)',
    PP_BLOCKED_RE: 'Regular Expressions (RegExp)',
    DLG_VERBOSITY: 'Options for Hidden Posts',
    DLG_VERBOSITY_CAPTION: 'Show a label if a post is hidden',
    VERBOSITY_MESSAGE: ['no label', 'Post hidden. Rule: ', ' posts hidden', '7 posts hidden ~ (Groups Feed only)'],
    VERBOSITY_MESSAGE_COLOUR: 'Text colour',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Background colour',
    VERBOSITY_DEBUG: 'Highlight "hidden" posts',
    CMF_CUSTOMISATIONS: 'Customisations',
    CMF_BTN_LOCATION: 'Location of Clean my feeds\' button',
    CMF_BTN_OPTION: ['bottom left', 'top right', 'disabled (use "Settings" in User Script Commands menu")'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Clean my feeds\' dialog-box language',
    CMF_DIALOG_LANGUAGE: 'English',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Use site language',
    GM_MENU_SETTINGS: 'Settings',
    CMF_DIALOG_LOCATION: 'Location of Clean my feeds\' dialog box',
    CMF_DIALOG_OPTION: ['left side', 'right side'],
    CMF_BORDER_COLOUR: 'Border colour',
    DLG_TIPS: 'Tips',
    DLG_TIPS_CONTENT: 'Clearing your browser\'s cache will reset your settings to their default values.\n\nUse the "Export" and "Import" buttons to backup and restore your customised settings.',
    DLG_BUTTONS: ['Save', 'Close', 'Export', 'Import', 'Reset'],
    DLG_FB_COLOUR_HINT: 'Leave blank to use FB\'s colour scheme',
    },
    // -- العربية (Arabic)
    ar: {
    LANGUAGE_DIRECTION: 'rtl',
    SPONSORED: 'مُموَّل',
    NF_TABLIST_STORIES_REELS_ROOMS: '"القصص | ريلز | الغرف" مربع قائمة علامات تبويب',
    NF_STORIES: 'القصص',
    NF_SURVEY: 'استبيان',
    NF_PEOPLE_YOU_MAY_KNOW: 'أشخاص قد تعرفهم',
    NF_PAID_PARTNERSHIP: 'شراكة مدفوعة',
    NF_SPONSORED_PAID: 'برعاية · مدفوعة بواسطة ______',
    NF_SUGGESTIONS: 'الاقتراحات / التوصيات',
    NF_FOLLOW: 'تابع',
    NF_PARTICIPATE: 'المشاركة',
    NF_REELS_SHORT_VIDEOS: 'ريلز ومقاطع الفيديو القصيرة',
    NF_SHORT_REEL_VIDEO: 'بكرة / فيديو قصير',
    NF_EVENTS_YOU_MAY_LIKE: 'أحداث قد تعجبك',
    NF_ANIMATED_GIFS_POSTS: 'صور GIF المتحركة',
    NF_ANIMATED_GIFS_PAUSE: 'وقفة ملفات GIF المتحركة',
    NF_SHARES: '# مشاركات',
    NF_LIKES_MAXIMUM: 'الحد الأقصى لعدد الإعجابات',
    GF_PAID_PARTNERSHIP: 'شراكة مدفوعة',
    GF_SUGGESTIONS: 'الاقتراحات / التوصيات',
    GF_SHORT_REEL_VIDEO: 'بكرة / فيديو قصير',
    GF_ANIMATED_GIFS_POSTS: 'صور GIF المتحركة',
    GF_ANIMATED_GIFS_PAUSE: 'وقفة ملفات GIF المتحركة',
    GF_SHARES: '# مشاركات',
    VF_LIVE: 'مباشر',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'فيديو مكرر',
    VF_ANIMATED_GIFS_PAUSE: 'وقفة ملفات GIF المتحركة',
    PP_ANIMATED_GIFS_POSTS: 'صور GIF المتحركة',
    PP_ANIMATED_GIFS_PAUSE: 'وقفة ملفات GIF المتحركة',
    NF_BLOCKED_FEED: ['موجز الأخبار', 'تغذية المجموعات', 'تغذية الفيديو'],
    GF_BLOCKED_FEED: ['موجز الأخبار', 'تغذية المجموعات', 'تغذية الفيديو'],
    VF_BLOCKED_FEED: ['موجز الأخبار', 'تغذية المجموعات', 'تغذية الفيديو'],
    MP_BLOCKED_FEED: ['السوق تغذية'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'فيروس كورونا (صندوق المعلومات)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'علوم المناخ (صندوق المعلومات)',
    OTHER_INFO_BOX_SUBSCRIBE: '(صندوق المعلومات) الاشتراك',
    REELS_TITLE: 'ريلز', // -- FB's label
    REELS_CONTROLS: 'عرض أدوات التحكم في الفيديو',
    REELS_DISABLE_LOOPING: 'تعطيل التكرار',
    DLG_TITLE: 'تنظيف خلاصاتي',
    DLG_NF: 'الأخبار تغذية',
    DLG_GF: 'مجموعات تغذية',
    DLG_VF: 'الفيديو تغذية',
    DLG_MP: 'السوق تغذية',
    DLG_PP: 'الملف الشخصي / الصفحة',
    DLG_OTHER: 'قسم التكميلي / المعلومات',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'مرشح النص',
    DLG_BLOCK_NEW_LINE: '(افصل الكلمات أو العبارات بفاصل سطر، يتم دعم التعبيرات العادية)',
    NF_BLOCKED_ENABLED: 'تمكين',
    GF_BLOCKED_ENABLED: 'تمكين',
    VF_BLOCKED_ENABLED: 'تمكين',
    MP_BLOCKED_ENABLED: 'تمكين',
    PP_BLOCKED_ENABLED: 'تمكين',
    NF_BLOCKED_RE: 'التعبيرات العادية (RegExp)',
    GF_BLOCKED_RE: 'التعبيرات العادية (RegExp)',
    VF_BLOCKED_RE: 'التعبيرات العادية (RegExp)',
    MP_BLOCKED_RE: 'التعبيرات العادية (RegExp)',
    PP_BLOCKED_RE: 'التعبيرات العادية (RegExp)',
    DLG_VERBOSITY: 'خيارات المشاركات المخفية',
    DLG_VERBOSITY_CAPTION: 'إظهار إشعار بعرض المقالات المخفية',
    VERBOSITY_MESSAGE: ['لا تسمية', 'مشاركة واحدة مخفية. حكم: ', ' المشاركات المخفية', '7 مشاركات مخفية ~ (فقط في تغذية المجموعات)'],
    VERBOSITY_MESSAGE_COLOUR: 'لون النص',
    VERBOSITY_MESSAGE_BG_COLOUR: 'لون الخلفية',
    VERBOSITY_DEBUG: 'تسليط الضوء على المشاركات "المخفية"',
    CMF_CUSTOMISATIONS: 'التخصيصات',
    CMF_BTN_LOCATION: 'موقع الزر "تنظيف خلاصاتي"',
    CMF_BTN_OPTION: ['أسفل اليسار', 'أعلى اليمين', 'معطل (استخدم "الإعدادات" في قائمة أوامر البرنامج النصي للمستخدم)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'نظف لغة صندوق حوار تغذيتي',
    CMF_DIALOG_LANGUAGE: 'العربية',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'استخدم لغة الموقع',
    GM_MENU_SETTINGS: 'الإعدادات',
    CMF_DIALOG_LOCATION: 'موقع مربع الحوار "تنظيف موجز ويباتي"',
    CMF_DIALOG_OPTION: ['الجهه اليسرى', 'الجانب الصحيح'],
    CMF_BORDER_COLOUR: 'لون الحدود',
    DLG_TIPS: 'تلميحات',
    DLG_TIPS_CONTENT: 'سيؤدي مسح ذاكرة التخزين المؤقت للمتصفح إلى إعادة تعيين الإعدادات إلى قيمها الافتراضية.\n\nاستخدم الزرين "تصدير" و "استيراد" للنسخ الاحتياطي واستعادة الإعدادات المخصصة.',
    DLG_BUTTONS: ['حفظ', 'قريب', 'يصدّر', 'يستورد', 'إعادة تعيين'],
    DLG_FB_COLOUR_HINT: 'اتركه فارغًا لاستخدام نظام ألوان FB',
    },
    // -- България (Bulgaria)
    bg: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Спонсорирано',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Списъчно поле на раздела „Истории | Макари | Стаи“',
    NF_STORIES: 'Истории',
    NF_SURVEY: 'Анкета',
    NF_PEOPLE_YOU_MAY_KNOW: 'Хора, които може би познавате',
    NF_PAID_PARTNERSHIP: 'Платено партньорство',
    NF_SPONSORED_PAID: 'Спонсорирано · Платено от ______',
    NF_SUGGESTIONS: 'Предложения / Препоръки',
    NF_FOLLOW: 'Следвай',
    NF_PARTICIPATE: 'Участвай',
    NF_REELS_SHORT_VIDEOS: 'Ленти и кратки видеоклипове',
    NF_SHORT_REEL_VIDEO: 'Рил/късо видео',
    NF_EVENTS_YOU_MAY_LIKE: 'Събития, които може да ви харесат',
    NF_ANIMATED_GIFS_POSTS: 'Анимирани GIF файлове',
    NF_ANIMATED_GIFS_PAUSE: 'Пауза на анимирани GIF файлове',
    NF_SHARES: '# споделяния',
    NF_LIKES_MAXIMUM: 'Максимален брой Харесвания',
    GF_PAID_PARTNERSHIP: 'Платено партньорство',
    GF_SUGGESTIONS: 'Предложения / Препоръки',
    GF_SHORT_REEL_VIDEO: 'Рил/късо видео',
    GF_ANIMATED_GIFS_POSTS: 'Анимирани GIF файлове',
    GF_ANIMATED_GIFS_PAUSE: 'Пауза на анимирани GIF файлове',
    GF_SHARES: '# споделяния',
    VF_LIVE: 'НА ЖИВО',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Дублирано видео',
    VF_ANIMATED_GIFS_PAUSE: 'Пауза на анимирани GIF файлове',
    PP_ANIMATED_GIFS_POSTS: 'Анимирани GIF файлове',
    PP_ANIMATED_GIFS_PAUSE: 'Пауза на анимирани GIF файлове',
    NF_BLOCKED_FEED: ['Новинарски поток', 'Поток с групи', 'Поток с видеа'],
    GF_BLOCKED_FEED: ['Новинарски поток', 'Поток с групи', 'Поток с видеа'],
    VF_BLOCKED_FEED: ['Новинарски поток', 'Поток с групи', 'Поток с видеа'],
    MP_BLOCKED_FEED: ['Поток с Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Коронавирус (информационна кутия)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Наука за климата (информационна кутия)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Абонирай се (информационна кутия)',
    REELS_TITLE: 'Ленти', // -- FB's label
    REELS_CONTROLS: 'Покажи контроли на видеото',
    REELS_DISABLE_LOOPING: 'Изключване на повторението',
    DLG_TITLE: 'Почисти моите емисии',
    DLG_NF: 'Новинарски поток',
    DLG_GF: 'Поток с групи',
    DLG_VF: 'Поток с видеа',
    DLG_MP: 'Поток с Marketplace',
    DLG_PP: 'Профил / Страница',
    DLG_OTHER: 'Допълнителен / информационен раздел',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Текстов филтър',
    DLG_BLOCK_NEW_LINE: '(Разделете думите или фразите с нов ред, регулярните изрази са поддържани)',
    NF_BLOCKED_ENABLED: 'Активирано',
    GF_BLOCKED_ENABLED: 'Активирано',
    VF_BLOCKED_ENABLED: 'Активирано',
    MP_BLOCKED_ENABLED: 'Активирано',
    PP_BLOCKED_ENABLED: 'Активирано',
    NF_BLOCKED_RE: 'Регулярни изрази (RegExp)',
    GF_BLOCKED_RE: 'Регулярни изрази (RegExp)',
    VF_BLOCKED_RE: 'Регулярни изрази (RegExp)',
    MP_BLOCKED_RE: 'Регулярни изрази (RegExp)',
    PP_BLOCKED_RE: 'Регулярни изрази (RegExp)',
    DLG_VERBOSITY: 'Опции за скрити публикации',
    DLG_VERBOSITY_CAPTION: 'Показване на етикет, ако публикацията е скрита',
    VERBOSITY_MESSAGE: ['няма етикет', 'Скрита публикация. Правило: ', ' скрити публикации', '7 скрити публикации ~ (само за Груповия поток)'],
    VERBOSITY_MESSAGE_COLOUR: 'Цвят на текста',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Цвят на фона',
    VERBOSITY_DEBUG: 'Открояване на скритите публикации',
    CMF_CUSTOMISATIONS: 'Настройки',
    CMF_BTN_LOCATION: 'Местоположение на бутона "Почисти моите емисии"',
    CMF_BTN_OPTION: ['долу вляво', 'горе вдясно', 'деактивирано (използвайте "Настройки" в менюто с команди за потребителски сценарии)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Почистете езика на моето диалогово поле за новини',
    CMF_DIALOG_LANGUAGE: 'Български',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Използване на езика на сайта',
    GM_MENU_SETTINGS: 'Настройки',
    CMF_DIALOG_LOCATION: 'Местоположение на диалоговия прозорец "Почисти моите емисии"',
    CMF_DIALOG_OPTION: ['лява страна', 'дясна страна'],
    CMF_BORDER_COLOUR: 'Цвят на рамката',
    DLG_TIPS: 'Съвети',
    DLG_TIPS_CONTENT: 'Изчистването на кеша на браузъра ще нулира настройките ви до техните стандартни стойности.\n\nИзползвайте бутоните "Експорт" и "Импорт", за да запазите и възстановите персонализираните си настройки.',
    DLG_BUTTONS: ['Запази', 'Затвори', 'Експорт', 'Импорт', 'Нулиране'],
    DLG_FB_COLOUR_HINT: 'Оставете празно, за да използвате цветовата схема на FB',
    },
    // -- Čeština (Czechia)
    cs: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Sponzorováno',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Seznam karet "Stories | Reels | Místnosti"',
    NF_STORIES: 'Stories',
    NF_SURVEY: 'Průzkum',
    NF_PEOPLE_YOU_MAY_KNOW: 'Koho možná znáte',
    NF_PAID_PARTNERSHIP: 'Placené partnerství',
    NF_SPONSORED_PAID: 'Sponzorováno · Platí za to ______',
    NF_SUGGESTIONS: 'Návrhy / Doporučení',
    NF_FOLLOW: 'Sledovat',
    NF_PARTICIPATE: 'Participovat',
    NF_REELS_SHORT_VIDEOS: 'Sekvence a krátká videa',
    NF_SHORT_REEL_VIDEO: 'Naviják/krátké video',
    NF_EVENTS_YOU_MAY_LIKE: 'Události, které se vám mohou líbit',
    NF_ANIMATED_GIFS_POSTS: 'Animované GIFy',
    NF_ANIMATED_GIFS_PAUSE: 'Pozastavit animované GIFy',
    NF_SHARES: '# sdílení',
    NF_LIKES_MAXIMUM: 'Maximální počet hodnocení Líbí se mi',
    GF_PAID_PARTNERSHIP: 'Placené partnerství',
    GF_SUGGESTIONS: 'Návrhy / Doporučení',
    GF_SHORT_REEL_VIDEO: 'Naviják/krátké video',
    GF_ANIMATED_GIFS_POSTS: 'Animované GIFy',
    GF_ANIMATED_GIFS_PAUSE: 'Pozastavit animované GIFy',
    GF_SHARES: '# sdílení',
    VF_LIVE: 'ŽIVĚ',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Duplikované video',
    VF_ANIMATED_GIFS_PAUSE: 'Pozastavit animované GIFy',
    PP_ANIMATED_GIFS_POSTS: 'Animované GIFy',
    PP_ANIMATED_GIFS_PAUSE: 'Pozastavit animované GIFy',
    NF_BLOCKED_FEED: ['Informační kanál', 'Skupinový kanál', 'Video kanál'],
    GF_BLOCKED_FEED: ['Informační kanál', 'Skupinový kanál', 'Video kanál'],
    VF_BLOCKED_FEED: ['Informační kanál', 'Skupinový kanál', 'Video kanál'],
    MP_BLOCKED_FEED: ['Marketplace kanál'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavirus (informační box)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Klimatická věda (informační box)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Odebírat (informační box)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Zobrazit ovládání videa',
    REELS_DISABLE_LOOPING: 'Vypnout smyčení',
    DLG_TITLE: 'Vyčistěte mé kanály',
    DLG_NF: 'Informační kanál',
    DLG_GF: 'Skupinový kanál',
    DLG_VF: 'Video kanál',
    DLG_MP: 'Marketplace kanál',
    DLG_PP: 'Profil / Stránka',
    DLG_OTHER: 'Doplňková/informační část',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Textový filtr',
    DLG_BLOCK_NEW_LINE: '(Oddělte slova nebo fráze pomocí nového řádku, regulární výrazy jsou podporovány)',
    NF_BLOCKED_ENABLED: 'Zapnuto',
    GF_BLOCKED_ENABLED: 'Zapnuto',
    VF_BLOCKED_ENABLED: 'Zapnuto',
    MP_BLOCKED_ENABLED: 'Zapnuto',
    PP_BLOCKED_ENABLED: 'Zapnuto',
    NF_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    GF_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    VF_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    MP_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    PP_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    DLG_VERBOSITY: 'Možnosti skrytých příspěvků',
    DLG_VERBOSITY_CAPTION: 'Zobrazit popisek, pokud je příspěvek skrytý',
    VERBOSITY_MESSAGE: ['žádný popisek', 'Příspěvek byl skryt. Pravidlo: ', ' příspěvků skrytých', '7 příspěvků skrytých ~ (pouze ve skupinovém zpravodaji)'],
    VERBOSITY_MESSAGE_COLOUR: 'Barva textu',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Barva pozadí',
    VERBOSITY_DEBUG: 'Zvýrazněte „skryté“ příspěvky',
    CMF_CUSTOMISATIONS: 'Přizpůsobení',
    CMF_BTN_LOCATION: 'Umístění tlačítka Vyčistěte mé kanály',
    CMF_BTN_OPTION: ['vlevo dole', 'vpravo nahoře', 'zakázáno (použijte "Nastavení" v nabídce Příkazy uživatelského skriptu)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Vyčistit jazyk mého dialogového okna s feedy',
    CMF_DIALOG_LANGUAGE: 'Čeština',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Použít jazyk webu',
    GM_MENU_SETTINGS: 'Nastavení',
    CMF_DIALOG_LOCATION: 'Umístění dialogového okna Vyčistěte mé kanály',
    CMF_DIALOG_OPTION: ['levá strana', 'pravá strana'],
    CMF_BORDER_COLOUR: 'Barva ohraničení',
    DLG_TIPS: 'Tipy',
    DLG_TIPS_CONTENT: 'Vymazáním mezipaměti prohlížeče obnovíte výchozí hodnoty nastavení.\n\nPomocí tlačítek "Export" a "Import" zálohujte a obnovte svá přizpůsobená nastavení.',
    DLG_BUTTONS: ['Uložit', 'Zavřít', 'Export', 'Import', 'Resetovat'],
    DLG_FB_COLOUR_HINT: 'Chcete-li použít barevné schéma FB, nechte prázdné',
    },
    // -- Deutsch (Germany)
    de: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Gesponsert',
    SPONSORED_EXTRA: 'Anzeige',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Listenfeld der Registerkarte "Stories | Reels | Rooms"',
    NF_STORIES: 'Stories',
    NF_SURVEY: 'Umfrage',
    NF_PEOPLE_YOU_MAY_KNOW: 'Personen, die du kennen könntest',
    NF_PAID_PARTNERSHIP: 'Bezahlte Werbepartnerschaft',
    NF_SPONSORED_PAID: 'Gesponsert · Finanziert von ______',
    NF_SUGGESTIONS: 'Vorschläge / Empfehlungen',
    NF_FOLLOW: 'Folgen',
    NF_PARTICIPATE: 'Teilnehmen',
    NF_REELS_SHORT_VIDEOS: 'Reels und Kurzvideos',
    NF_SHORT_REEL_VIDEO: 'Reel/kurzes Video',
    NF_EVENTS_YOU_MAY_LIKE: 'Veranstaltungen, die Ihnen gefallen könnten',
    NF_ANIMATED_GIFS_POSTS: 'Animierte GIFs',
    NF_ANIMATED_GIFS_PAUSE: 'Animierte GIFs pausieren',
    NF_SHARES: '# Mal geteilt',
    NF_LIKES_MAXIMUM: 'Maximale Anzahl an Likes',
    GF_PAID_PARTNERSHIP: 'Bezahlte Werbepartnerschaft',
    GF_SUGGESTIONS: 'Vorschläge / Empfehlungen',
    GF_SHORT_REEL_VIDEO: 'Reel/kurzes Video',
    GF_ANIMATED_GIFS_POSTS: 'Animierte GIFs',
    GF_ANIMATED_GIFS_PAUSE: 'Animierte GIFs pausieren',
    GF_SHARES: '# Mal geteilt',
    VF_LIVE: 'LIVE',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Dupliziertes Video',
    VF_ANIMATED_GIFS_PAUSE: 'Animierte GIFs pausieren',
    PP_ANIMATED_GIFS_POSTS: 'Animierte GIFs',
    PP_ANIMATED_GIFS_PAUSE: 'Animierte GIFs pausieren',
    NF_BLOCKED_FEED: ['Newsfeed', 'Gruppen-Feed', 'Video-Feed'],
    GF_BLOCKED_FEED: ['Newsfeed', 'Gruppen-Feed', 'Video-Feed'],
    VF_BLOCKED_FEED: ['Newsfeed', 'Gruppen-Feed', 'Video-Feed'],
    MP_BLOCKED_FEED: ['Marktplatz-Feed'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavirus (Infobox)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Klimawissenschaft (Infobox)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Abonnieren (Infobox)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Video-Steuerung anzeigen',
    REELS_DISABLE_LOOPING: 'Wiederholung deaktivieren',
    DLG_TITLE: 'Bereinige meine Feeds',
    DLG_NF: 'Newsfeed',
    DLG_GF: 'Gruppen-Feed',
    DLG_VF: 'Video-Feed',
    DLG_MP: 'Marktplatz-Feed',
    DLG_PP: 'Profil / Seite',
    DLG_OTHER: 'Ergänzungs-/Informationsbereich',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Textfilter',
    DLG_BLOCK_NEW_LINE: '(Trennen Sie Wörter oder Phrasen mit einem Zeilenumbruch, reguläre Ausdrücke werden unterstützt)',
    NF_BLOCKED_ENABLED: 'Ermöglichte',
    GF_BLOCKED_ENABLED: 'Ermöglichte',
    VF_BLOCKED_ENABLED: 'Ermöglichte',
    MP_BLOCKED_ENABLED: 'Ermöglichte',
    PP_BLOCKED_ENABLED: 'Ermöglichte',
    NF_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    GF_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    VF_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    MP_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    PP_BLOCKED_RE: 'Reguläre Ausdrücke (RegExp)',
    DLG_VERBOSITY: 'Optionen für ausgeblendete Beiträge',
    DLG_VERBOSITY_CAPTION: 'Ein Label anzeigen, wenn ein Beitrag ausgeblendet ist',
    VERBOSITY_MESSAGE: ['kein Label', 'Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt', '7 Beiträge versteckt ~ (nur Gruppen-Feed)'],
    VERBOSITY_MESSAGE_COLOUR: 'Textfarbe',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Hintergrundfarbe',
    VERBOSITY_DEBUG: 'Markieren Sie "versteckte" Beiträge',
    CMF_CUSTOMISATIONS: 'Anpassungen',
    CMF_BTN_LOCATION: 'Position der Schaltfläche "Bereinige meine Feeds"',
    CMF_BTN_OPTION: ['unten links', 'oben rechts', 'deaktiviert (verwenden Sie "Einstellungen" im Menü "Benutzerskriptbefehle")'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Sprache meines Feeds-Dialogfelds säubern',
    CMF_DIALOG_LANGUAGE: 'Deutsch',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Website-Sprache verwenden',
    GM_MENU_SETTINGS: 'Einstellungen',
    CMF_DIALOG_LOCATION: 'Position des Dialogfelds "Bereinige meine Feeds"',
    CMF_DIALOG_OPTION: ['linke Seite', 'rechte Seite'],
    CMF_BORDER_COLOUR: 'Farbe der Umrandung',
    DLG_TIPS: 'Tipps',
    DLG_TIPS_CONTENT: 'Wenn Sie den Cache Ihres Browsers leeren, werden Ihre Einstellungen auf die Standardwerte zurückgesetzt.\n\nVerwenden Sie die Schaltflächen "Exportieren" und "Importieren", um Ihre benutzerdefinierten Einstellungen zu sichern und wiederherzustellen.',
    DLG_BUTTONS: ['Speichern', 'Schließen', 'Exportieren', 'Importieren', 'Zurücksetzen'],
    DLG_FB_COLOUR_HINT: 'Leer lassen, um das Farbschema von FB zu verwenden',
    },
    // -- Ελληνικά (Greece)
    el: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Χορηγούμενη',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Λίστα καρτελών "Ιστορίες | Reels | Δωμάτια"',
    NF_STORIES: 'Ιστορίες',
    NF_SURVEY: 'Τοπογράφηση',
    NF_PEOPLE_YOU_MAY_KNOW: 'Άτομα που ίσως γνωρίζετε',
    NF_PAID_PARTNERSHIP: 'Πληρωμένη συνεργασία',
    NF_SPONSORED_PAID: 'Χορηγούμενο · Πληρωμένο από ______',
    NF_SUGGESTIONS: 'Προτάσεις / Συστάσεις',
    NF_FOLLOW: 'Ακολούθησε',
    NF_PARTICIPATE: 'Συμμετέχω',
    NF_REELS_SHORT_VIDEOS: 'Reel και σύντομα βίντεο',
    NF_SHORT_REEL_VIDEO: 'Ριλς/μικρό βίντεο',
    NF_EVENTS_YOU_MAY_LIKE: 'Εκδηλώσεις που μπορεί να σας αρέσουν',
    NF_ANIMATED_GIFS_POSTS: 'Κινούμενες εικόνες GIF',
    NF_ANIMATED_GIFS_PAUSE: 'Παύση κινούμενων GIF',
    NF_SHARES: '# μερίδια',
    NF_LIKES_MAXIMUM: 'Μέγιστα "Μου αρέσει"',
    GF_PAID_PARTNERSHIP: 'Πληρωμένη συνεργασία',
    GF_SUGGESTIONS: 'Προτάσεις / Συστάσεις',
    GF_SHORT_REEL_VIDEO: 'Ριλς/μικρό βίντεο',
    GF_ANIMATED_GIFS_POSTS: 'Κινούμενες εικόνες GIF',
    GF_ANIMATED_GIFS_PAUSE: 'Παύση κινούμενων GIF',
    GF_SHARES: '# μερίδια',
    VF_LIVE: 'ΖΩΝΤΑΝΑ',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Διπλότυπο βίντεο',
    VF_ANIMATED_GIFS_PAUSE: 'Παύση κινούμενων GIF',
    PP_ANIMATED_GIFS_POSTS: 'Κινούμενες εικόνες GIF',
    PP_ANIMATED_GIFS_PAUSE: 'Παύση κινούμενων GIF',
    NF_BLOCKED_FEED: ['Ροή ειδήσεων', 'Ροή ομάδων', 'Ροή βίντεο'],
    GF_BLOCKED_FEED: ['Ροή ειδήσεων', 'Ροή ομάδων', 'Ροή βίντεο'],
    VF_BLOCKED_FEED: ['Ροή ειδήσεων', 'Ροή ομάδων', 'Ροή βίντεο'],
    MP_BLOCKED_FEED: ['Ροή Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Κορονοϊός (πλαίσιο πληροφοριών)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Επιστήμη του κλίματος (πλαίσιο πληροφοριών)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Εγγραφή (πλαίσιο πληροφοριών)',
    REELS_TITLE: 'Reel',
    REELS_CONTROLS: 'Εμφάνιση χειριστηρίων βίντεο',
    REELS_DISABLE_LOOPING: 'Απενεργοποίηση επανάληψης',
    DLG_TITLE: 'Καθαρισμός των ροών μου',
    DLG_NF: 'Ροή ειδήσεων',
    DLG_GF: 'Ροή ομάδων',
    DLG_VF: 'Ροή βίντεο',
    DLG_MP: 'Ροή Marketplace',
    DLG_PP: 'Προφίλ / Σελίδα',
    DLG_OTHER: 'Συμπληρωματικό τμήμα / πληροφοριακό τμήμα',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Φίλτρο κειμένου',
    DLG_BLOCK_NEW_LINE: '(Διαχωρίστε λέξεις ή φράσεις με αλλαγή γραμμής, υποστηρίζονται κανονικές εκφράσεις)',
    NF_BLOCKED_ENABLED: 'Ενεργοποιημένο',
    GF_BLOCKED_ENABLED: 'Ενεργοποιημένο',
    VF_BLOCKED_ENABLED: 'Ενεργοποιημένο',
    MP_BLOCKED_ENABLED: 'Ενεργοποιημένο',
    PP_BLOCKED_ENABLED: 'Ενεργοποιημένο',
    NF_BLOCKED_RE: 'Κανονικές Εκφράσεις (RegExp)',
    GF_BLOCKED_RE: 'Κανονικές Εκφράσεις (RegExp)',
    VF_BLOCKED_RE: 'Κανονικές Εκφράσεις (RegExp)',
    MP_BLOCKED_RE: 'Κανονικές Εκφράσεις (RegExp)',
    PP_BLOCKED_RE: 'Κανονικές Εκφράσεις (RegExp)',
    DLG_VERBOSITY: 'Επιλογές για κρυφές αναρτήσεις',
    DLG_VERBOSITY_CAPTION: 'Εμφάνιση ετικέτας αν μια δημοσίευση είναι κρυμμένη',
    VERBOSITY_MESSAGE: ['χωρίς ετικέτα', 'Δημοσίευση κρυμμένη. Κανόνας: ', ' δημοσιεύσεις κρυμμένες', '7 δημοσιεύσεις κρυμμένες ~ (μόνο στην τροφοδοσία των ομάδων)'],
    VERBOSITY_MESSAGE_COLOUR: 'Χρώμα κειμένου',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Χρώμα φόντου',
    VERBOSITY_DEBUG: 'Επισήμανση "κρυφών αναρτήσεων"',
    CMF_CUSTOMISATIONS: 'Προσαρμογές',
    CMF_BTN_LOCATION: 'Τοποθεσία του κουμπιού "Καθαρισμός των ροών μου"',
    CMF_BTN_OPTION: ['κάτω αριστερά', 'πάνω δεξιά', 'απενεργοποιημένο (χρησιμοποιήστε "Ρυθμίσεις" στο μενού "Εντολές σεναρίου χρήστη")'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Καθαρίστε τη γλώσσα του παραθύρου διαλόγου με τα τροφοδοτούμενα μου',
    CMF_DIALOG_LANGUAGE: 'Ελληνικά',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Χρήση γλώσσας ιστότοπου',
    GM_MENU_SETTINGS: 'Ρυθμίσεις',
    CMF_DIALOG_LOCATION: 'Τοποθεσία της διαλόγου "Καθαρισμός των ροών μου"',
    CMF_DIALOG_OPTION: ['αριστερή πλευρά', 'δεξιά πλευρά'],
    CMF_BORDER_COLOUR: 'Χρώμα περιγράμματος',
    DLG_TIPS: 'Συμβουλές',
    DLG_TIPS_CONTENT: 'Η εκκαθάριση της μνήμης cache του προγράμματος περιήγησης θα επαναφέρει τις ρυθμίσεις σας στις προεπιλεγμένες τιμές τους.\n\nΧρησιμοποιήστε τα κουμπιά "Εξαγωγή" και "Εισαγωγή" για να δημιουργήσετε αντίγραφο ασφαλείας και να επαναφέρετε τις εξατομικευμένες ρυθμίσεις σας.',
    DLG_BUTTONS: ['Αποθήκευση', 'Κλείσιμο', 'Εξαγωγή', 'Εισαγωγή', 'Επαναφορά'],
    DLG_FB_COLOUR_HINT: 'Αφήστε κενό για να χρησιμοποιήσετε το χρωματικό σχήμα του FB',
    },
    // -- Espanol (Spain)
    es: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Publicidad',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Cuadro de lista de la pestaña "Historias | Reels | Salas"',
    NF_STORIES: 'Historias',
    NF_SURVEY: 'Encuesta',
    NF_PEOPLE_YOU_MAY_KNOW: 'Personas que quizá conozcas',
    NF_PAID_PARTNERSHIP: 'Colaboración pagada',
    NF_SPONSORED_PAID: 'Publicidad · Pagado por ______',
    NF_SUGGESTIONS: 'Sugerencias / Recomendaciones',
    NF_FOLLOW: 'Seguir',
    NF_PARTICIPATE: 'Participar',
    NF_REELS_SHORT_VIDEOS: 'Reels y vídeos cortos',
    NF_SHORT_REEL_VIDEO: 'Reel/video corto',
    NF_EVENTS_YOU_MAY_LIKE: 'Eventos que te pueden gustar',
    NF_ANIMATED_GIFS_POSTS: 'GIF animados',
    NF_ANIMATED_GIFS_PAUSE: 'Pausar GIF animados',
    NF_SHARES: '# veces compartida',
    NF_LIKES_MAXIMUM: 'Número máximo de Me gusta',
    GF_PAID_PARTNERSHIP: 'Colaboración pagada',
    GF_SUGGESTIONS: 'Sugerencias / Recomendaciones',
    GF_SHORT_REEL_VIDEO: 'Reel/video corto',
    GF_ANIMATED_GIFS_POSTS: 'GIF animados',
    GF_ANIMATED_GIFS_PAUSE: 'Pausar GIF animados',
    GF_SHARES: '# veces compartida',
    VF_LIVE: 'ESTRENO',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Video duplicado',
    VF_ANIMATED_GIFS_PAUSE: 'Pausar GIF animados',
    PP_ANIMATED_GIFS_POSTS: 'GIF animados',
    PP_ANIMATED_GIFS_PAUSE: 'Pausar GIF animados',
    NF_BLOCKED_FEED: ['Feed de noticias', 'Feed de grupos', 'Feed de videos'],
    GF_BLOCKED_FEED: ['Feed de noticias', 'Feed de grupos', 'Feed de videos'],
    VF_BLOCKED_FEED: ['Feed de noticias', 'Feed de grupos', 'Feed de videos'],
    MP_BLOCKED_FEED: ['Feed de Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavirus (cuadro de información)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Ciencia del clima (cuadro de información)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Suscribir (cuadro de información)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Mostrar controles de video',
    REELS_DISABLE_LOOPING: 'Desactivar bucle',
    DLG_TITLE: 'Limpia mis feeds',
    DLG_NF: 'Feed de noticias',
    DLG_GF: 'Feed de grupos',
    DLG_VF: 'Feed de vídeos',
    DLG_MP: 'Feed de Marketplace',
    DLG_PP: 'Perfil / Página',
    DLG_OTHER: 'Sección suplementaria / información',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Filtro de texto',
    DLG_BLOCK_NEW_LINE: '(Separe palabras o frases con un salto de línea, se admiten expresiones regulares)',
    NF_BLOCKED_ENABLED: 'Habilitadas',
    GF_BLOCKED_ENABLED: 'Habilitadas',
    VF_BLOCKED_ENABLED: 'Habilitadas',
    MP_BLOCKED_ENABLED: 'Habilitadas',
    PP_BLOCKED_ENABLED: 'Habilitadas',
    NF_BLOCKED_RE: 'Expresiones regulares (RegExp)',
    GF_BLOCKED_RE: 'Expresiones regulares (RegExp)',
    VF_BLOCKED_RE: 'Expresiones regulares (RegExp)',
    MP_BLOCKED_RE: 'Expresiones regulares (RegExp)',
    PP_BLOCKED_RE: 'Expresiones regulares (RegExp)',
    DLG_VERBOSITY: 'Opciones para publicaciones ocultas',
    DLG_VERBOSITY_CAPTION: 'Mostrar una etiqueta si una publicación está oculta',
    VERBOSITY_MESSAGE: ['sin etiqueta', 'Publicación oculta. Regla: ', ' publicaciones ocultas', '7 publicaciones ocultas ~ (solo en el Feed de Grupos)'],
    VERBOSITY_MESSAGE_COLOUR: 'Color del texto',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Color de fondo',
    VERBOSITY_DEBUG: 'Destacar publicaciones "ocultas"',
    CMF_CUSTOMISATIONS: 'Personalizaciones',
    CMF_BTN_LOCATION: 'Ubicación del botón Limpia mis feeds',
    CMF_BTN_OPTION: ['abajo a la izquierda', 'arriba a la derecha', 'deshabilitado (use "Configuración" en el menú Comandos de script de usuario)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Limpiar el idioma de mi cuadro de diálogo de feeds',
    CMF_DIALOG_LANGUAGE: 'Español',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Usar idioma del sitio',
    GM_MENU_SETTINGS: 'Configuración',
    CMF_DIALOG_LOCATION: 'Ubicación del cuadro de diálogo Limpia mis feeds',
    CMF_DIALOG_OPTION: ['lado izquierdo', 'lado derecho'],
    CMF_BORDER_COLOUR: 'Color de borde',
    DLG_TIPS: 'Consejos',
    DLG_TIPS_CONTENT: 'Limpiar la memoria caché de su navegador restablecerá la configuración a sus valores predeterminados.\n\nUtilice los botones "Exportar" e "Importar" para hacer una copia de seguridad y restaurar su configuración personalizada.',
    DLG_BUTTONS: ['Guardar', 'Cerrar', 'Exportar', 'Importar', 'Reajustar'],
    DLG_FB_COLOUR_HINT: 'Dejar en blanco para usar el esquema de color de FB',
    },
    // -- Suomi - Finnish (Finland)
    fi: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Sponsoroitu',
    NF_TABLIST_STORIES_REELS_ROOMS: '"Tarinat | Reels | Rooms" -välilehtien luetteloruutu',
    NF_STORIES: 'Tarinat',
    NF_SURVEY: 'Kysely',
    NF_PEOPLE_YOU_MAY_KNOW: 'Ihmiset, jotka saatat tuntea',
    NF_PAID_PARTNERSHIP: 'Maksettu kumppanuus',
    NF_SPONSORED_PAID: 'Sponsoroitu · Maksaja ______',
    NF_SUGGESTIONS: 'Ehdotuksia / Suosituksia',
    NF_FOLLOW: 'Seuraa',
    NF_PARTICIPATE: 'Osallistua',
    NF_REELS_SHORT_VIDEOS: 'Keloja ja lyhyitä videoita',
    NF_SHORT_REEL_VIDEO: 'Kela/lyhyt video',
    NF_EVENTS_YOU_MAY_LIKE: 'Kela/lyhyt video',
    NF_ANIMATED_GIFS_POSTS: 'Animoidut GIF-kuvat',
    NF_ANIMATED_GIFS_PAUSE: 'Pysäytä animoidut GIF-kuvat',
    NF_SHARES: '# jakoa',
    NF_LIKES_MAXIMUM: 'Maksimimäärä tykkäyksiä',
    GF_PAID_PARTNERSHIP: 'Maksettu kumppanuus',
    GF_SUGGESTIONS: 'Ehdotuksia / Suosituksia',
    GF_SHORT_REEL_VIDEO: 'Keloja ja lyhyitä videoita',
    GF_ANIMATED_GIFS_POSTS: 'Animoidut GIF-kuvat',
    GF_ANIMATED_GIFS_PAUSE: 'Pysäytä animoidut GIF-kuvat',
    GF_SHARES: '# jakoa',
    VF_LIVE: 'LIVE',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Kaksoisvideo',
    VF_ANIMATED_GIFS_PAUSE: 'Pysäytä animoidut GIF-kuvat',
    PP_ANIMATED_GIFS_POSTS: 'Animoidut GIF-kuvat',
    PP_ANIMATED_GIFS_PAUSE: 'Pysäytä animoidut GIF-kuvat',
    NF_BLOCKED_FEED: ['Uutissyöte', 'Ryhmäsyöte', 'Videosyöte'],
    GF_BLOCKED_FEED: ['Uutissyöte', 'Ryhmäsyöte', 'Videosyöte'],
    VF_BLOCKED_FEED: ['Uutissyöte', 'Ryhmäsyöte', 'Videosyöte'],
    MP_BLOCKED_FEED: ['Marketplace-syöte'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Koronavirus (tietolaatikko)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Ilmastotiede (tietolaatikko)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Rekisteröidy (tietolaatikko)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Näytä videon hallintaelementit',
    REELS_DISABLE_LOOPING: 'Poista toisto',
    DLG_TITLE: 'Puhdista syötteeni',
    DLG_NF: 'Uutisvirta',
    DLG_GF: 'Ryhmäsyöte',
    DLG_VF: 'Videosyöte',
    DLG_MP: 'Marketplace-syöte',
    DLG_PP: 'Profiili / Sivu',
    DLG_OTHER: 'Täydentävä / tieto-osio',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Tekstisuodatin',
    DLG_BLOCK_NEW_LINE: '(Erota sanat tai lauseet rivinvaihdolla, säännölliset lausekkeet ovat tuettuja)',
    NF_BLOCKED_ENABLED: 'Ota vaihtoehto käyttöön',
    GF_BLOCKED_ENABLED: 'Ota vaihtoehto käyttöön',
    VF_BLOCKED_ENABLED: 'Ota vaihtoehto käyttöön',
    MP_BLOCKED_ENABLED: 'Ota vaihtoehto käyttöön',
    PP_BLOCKED_ENABLED: 'Ota vaihtoehto käyttöön',
    NF_BLOCKED_RE: 'Säännölliset lausekkeet (RegExp)',
    GF_BLOCKED_RE: 'Säännölliset lausekkeet (RegExp)',
    VF_BLOCKED_RE: 'Säännölliset lausekkeet (RegExp)',
    MP_BLOCKED_RE: 'Säännölliset lausekkeet (RegExp)',
    PP_BLOCKED_RE: 'Säännölliset lausekkeet (RegExp)',
    DLG_VERBOSITY: 'Vaihtoehdot piilotetuille viesteille',
    DLG_VERBOSITY_CAPTION: 'Näytä merkki, jos artikkeli on piilotettu',
    VERBOSITY_MESSAGE: ['ei tunnistetta', 'Viesti piilotettu. Sääntö: ', ' viestiä piilotettu', '7 viestiä piilotettu ~ (vain Ryhmien syötteessä)'],
    VERBOSITY_MESSAGE_COLOUR: 'Tekstin väri',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Taustaväri',
    VERBOSITY_DEBUG: 'Korosta "piilotetut" postaus',
    CMF_CUSTOMISATIONS: 'Räätälöinnit',
    CMF_BTN_LOCATION: 'Puhdista syötteeni -painikkeen sijainti',
    CMF_BTN_OPTION: ['alhaalla vasemmalla', 'ylhäällä oikealle', 'pois käytöstä (käytä "Asetukset" User Script Commands -valikossa)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Puhdista syötteideni keskusteluruudun kieli',
    CMF_DIALOG_LANGUAGE: 'Suomi',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Käytä sivuston kieltä',
    GM_MENU_SETTINGS: 'Asetukset',
    CMF_DIALOG_LOCATION: 'Puhdista syötteeni -valintaikkunan sijainti',
    CMF_DIALOG_OPTION: ['vasen puoli', 'oikea puoli'],
    CMF_BORDER_COLOUR: 'Reunuksen väri',
    DLG_TIPS: 'Vinkkejä',
    DLG_TIPS_CONTENT: 'Selaimen välimuistin tyhjentäminen palauttaa asetuksesi oletusarvoihinsa.\n\nKäytä "Vie"- ja "Tuo"-painikkeita varmuuskopioidaksesi ja palauttaaksesi mukautetut asetukset.',
    DLG_BUTTONS: ['Tallentaa', 'Sulkea', 'Vienti', 'Tuonti', 'Nollaa'],
    DLG_FB_COLOUR_HINT: 'Jätä tyhjäksi käyttääksesi FB:n värimaailmaa',
    },
    // -- Français (France)
    fr: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Sponsorisé',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Zone de liste de l\'onglet "Stories | Reels | Salons"',
    NF_STORIES: 'Stories',
    NF_SURVEY: 'Enquête',
    NF_PEOPLE_YOU_MAY_KNOW: 'Connaissez-vous...',
    NF_PAID_PARTNERSHIP: 'Partenariat rémunéré',
    NF_SPONSORED_PAID: 'Sponsorisé · Financé par ______',
    NF_SUGGESTIONS: 'Suggestions / Recommandations',
    NF_FOLLOW: 'Suivre',
    NF_PARTICIPATE: 'Participer',
    NF_REELS_SHORT_VIDEOS: 'Reels et vidéos courtes',
    NF_SHORT_REEL_VIDEO: 'Bobine/courte vidéo',
    NF_EVENTS_YOU_MAY_LIKE: 'Évènements qui pourraient vous intéresser',
    NF_ANIMATED_GIFS_POSTS: 'GIF animés',
    NF_ANIMATED_GIFS_PAUSE: 'Mettre en pause les GIF animés',
    NF_SHARES: '# partages',
    NF_LIKES_MAXIMUM: 'Nombre maximum de J\'aime',
    GF_PAID_PARTNERSHIP: 'Partenariat rémunéré',
    GF_SUGGESTIONS: 'Suggestions / Recommandations',
    GF_SHORT_REEL_VIDEO: 'Bobine/courte vidéo',
    GF_ANIMATED_GIFS_POSTS: 'GIF animés',
    GF_ANIMATED_GIFS_PAUSE: 'Mettre en pause les GIF animés',
    GF_SHARES: '# partages',
    VF_LIVE: 'EN DIRECT',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Vidéo en double',
    VF_ANIMATED_GIFS_PAUSE: 'Mettre en pause les GIF animés',
    PP_ANIMATED_GIFS_POSTS: 'GIF animés',
    PP_ANIMATED_GIFS_PAUSE: 'Mettre en pause les GIF animés',
    NF_BLOCKED_FEED: ['Fil de nouvelles', 'Flux de groupes', 'Flux de vidéos'],
    GF_BLOCKED_FEED: ['Fil de nouvelles', 'Flux de groupes', 'Flux de vidéos'],
    VF_BLOCKED_FEED: ['Fil de nouvelles', 'Flux de groupes', 'Flux de vidéos'],
    MP_BLOCKED_FEED: ['Flux de la place de marché'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavirus (encadré d\'information)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Science du climat (encadré d\'information)',
    OTHER_INFO_BOX_SUBSCRIBE: 'S’abonner (encadré d\'information)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Afficher les contrôles vidéo',
    REELS_DISABLE_LOOPING: 'Désactiver la boucle',
    DLG_TITLE: 'Nettoyer mes flux',
    DLG_NF: 'Fil de nouvelles',
    DLG_GF: 'Flux de groupes',
    DLG_VF: 'Flux de vidéos',
    DLG_MP: 'Flux de la place de marché',
    DLG_PP: 'Profil / Page',
    DLG_OTHER: 'Section supplémentaire / information',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Filtre de texte',
    DLG_BLOCK_NEW_LINE: '(Séparez les mots ou les phrases par un saut de ligne, les expressions régulières sont prises en charge)',
    NF_BLOCKED_ENABLED: 'Activé',
    GF_BLOCKED_ENABLED: 'Activé',
    VF_BLOCKED_ENABLED: 'Activé',
    MP_BLOCKED_ENABLED: 'Activé',
    PP_BLOCKED_ENABLED: 'Activé',
    NF_BLOCKED_RE: 'Expressions régulières (RegExp)',
    GF_BLOCKED_RE: 'Expressions régulières (RegExp)',
    VF_BLOCKED_RE: 'Expressions régulières (RegExp)',
    MP_BLOCKED_RE: 'Expressions régulières (RegExp)',
    PP_BLOCKED_RE: 'Expressions régulières (RegExp)',
    DLG_VERBOSITY: 'Options pour les publications cachées',
    DLG_VERBOSITY_CAPTION: 'Afficher un libellé si une publication est masquée',
    VERBOSITY_MESSAGE: ['pas de libellé', 'Poste caché. Règle: ', ' posts cachés', '7 posts cachés ~ (uniquement dans le flux de groupes)'],
    VERBOSITY_MESSAGE_COLOUR: 'Couleur du texte',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Couleur de fond',
    VERBOSITY_DEBUG: 'Mettez en surbrillance les messages « cachés »',
    CMF_CUSTOMISATIONS: 'Personnalisations',
    CMF_BTN_LOCATION: 'Emplacement du bouton Nettoyer mes flux',
    CMF_BTN_OPTION: ['en bas à gauche', 'en haut à droite', 'désactivé (utilisez "Paramètres" dans le menu Commandes de script utilisateur)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Nettoyer la langue de ma boîte de dialogue de flux',
    CMF_DIALOG_LANGUAGE: 'Français',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Utiliser la langue du site',
    GM_MENU_SETTINGS: 'Paramètres',
    CMF_DIALOG_LOCATION: 'Emplacement de la boîte de dialogue Nettoyer mes flux',
    CMF_DIALOG_OPTION: ['côté gauche', 'côté droit'],
    CMF_BORDER_COLOUR: 'Couleur de bordure',
    DLG_TIPS: 'Des astuces',
    DLG_TIPS_CONTENT: 'Vider le cache de votre navigateur réinitialisera vos paramètres à leurs valeurs par défaut.\n\nUtilisez les boutons "Exporter" et "Importer" pour sauvegarder et restaurer vos paramètres personnalisés.',
    DLG_BUTTONS: ['Sauvegarder', 'Fermer', 'Exporter', 'Importer', 'Réinitialiser'],
    DLG_FB_COLOUR_HINT: 'Laissez vide pour utiliser le jeu de couleurs de FB',
    },
    // -- עִברִית (Hebrew)
    he: {
    LANGUAGE_DIRECTION: 'rtl',
    SPONSORED: 'ממומן',
    NF_TABLIST_STORIES_REELS_ROOMS: 'תיבת רשימה של כרטיסיות "סטוריז | Reels | חדרים"',
    NF_STORIES: 'סטוריז ',
    NF_SURVEY: 'סקר',
    NF_PEOPLE_YOU_MAY_KNOW: 'אנשים שאולי אתה מכיר',
    NF_PAID_PARTNERSHIP: 'שותפות בתשלום',
    NF_SPONSORED_PAID: 'ממומן · שולם על ידי ______',
    NF_SUGGESTIONS: 'הצעות / המלצות',
    NF_FOLLOW: 'עקוב',
    NF_PARTICIPATE: 'השתתף',
    NF_REELS_SHORT_VIDEOS: 'סרטוני Reels וקטעי וידאו קצרים',
    NF_SHORT_REEL_VIDEO: 'סליל/סרטון קצר',
    NF_EVENTS_YOU_MAY_LIKE: 'אירועים שאולי תאהבו',
    NF_ANIMATED_GIFS_POSTS: 'קובצי GIF מונפשים',
    NF_ANIMATED_GIFS_PAUSE: 'השהה קובצי GIF מונפ',
    NF_SHARES: '# שיתופים',
    NF_LIKES_MAXIMUM: 'מספר לייקים מקסימלי',
    GF_PAID_PARTNERSHIP: 'שותפות בתשלום',
    GF_SUGGESTIONS: 'הצעות / המלצות',
    GF_SHORT_REEL_VIDEO: 'סליל/סרטון קצר',
    GF_ANIMATED_GIFS_POSTS: 'קובצי GIF מונפשים',
    GF_ANIMATED_GIFS_PAUSE: 'השהה קובצי GIF מונפ',
    GF_SHARES: '# שיתופים',
    VF_LIVE: 'שידור חי',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'וידאו כפול',
    VF_ANIMATED_GIFS_PAUSE: 'השהה קובצי GIF מונפ',
    PP_ANIMATED_GIFS_POSTS: 'קובצי GIF מונפשים',
    PP_ANIMATED_GIFS_PAUSE: 'השהה קובצי GIF מונפ',
    NF_BLOCKED_FEED: ['ניוז פיד', 'פיד קבוצות', 'צפה בפיד סרטונים'],
    GF_BLOCKED_FEED: ['ניוז פיד', 'פיד קבוצות', 'צפה בפיד סרטונים'],
    VF_BLOCKED_FEED: ['ניוז פיד', 'פיד קבוצות', 'צפה בפיד סרטונים'],
    MP_BLOCKED_FEED: ['זירת מסחר'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'וירוס קורונה (תיבת מידע)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'מדע האקלים (תיבת מידע)',
    OTHER_INFO_BOX_SUBSCRIBE: 'הירשם (תיבת מידע)',
    REELS_TITLE: 'Reels', // -- FB's label
    REELS_CONTROLS: 'הצג אפשרויות בקרת וידאו',
    REELS_DISABLE_LOOPING: 'השבת לולאה',
    DLG_TITLE: 'תנקה את הזנות שלי',
    DLG_NF: 'ניוז פיד',
    DLG_GF: 'פיד קבוצות',
    DLG_VF: 'צפה בפיד הסרטונים',
    DLG_MP: 'זירת מסחר',
    DLG_PP: 'פרופיל / דף',
    DLG_OTHER: 'מדור משלים / מידע',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'מסנן טקסט',
    DLG_BLOCK_NEW_LINE: '(הפרד מילים או ביטויים עם ירידת שורה, ביטויים רגולריים נתמכים)',
    NF_BLOCKED_ENABLED: 'מופעל',
    GF_BLOCKED_ENABLED: 'מופעל',
    VF_BLOCKED_ENABLED: 'מופעל',
    MP_BLOCKED_ENABLED: 'מופעל',
    PP_BLOCKED_ENABLED: 'מופעל',
    NF_BLOCKED_RE: 'ביטויים רגולריים (RegExp)',
    GF_BLOCKED_RE: 'ביטויים רגולריים (RegExp)',
    VF_BLOCKED_RE: 'ביטויים רגולריים (RegExp)',
    MP_BLOCKED_RE: 'ביטויים רגולריים (RegExp)',
    PP_BLOCKED_RE: 'ביטויים רגולריים (RegExp)',
    DLG_VERBOSITY: 'אפשרויות לפוסטים מוסתרים',
    DLG_VERBOSITY_CAPTION: 'הצג תוית אם מאמר מוסתר',
    VERBOSITY_MESSAGE: ['אין תווית', 'פוסט אחד מוסתר. כלל: ', ' פוסטים מוסתרים', '7 פוסטים מוסתרים ~ (רק בסדר חברים)'],
    VERBOSITY_MESSAGE_COLOUR: 'צבע טקסט',
    VERBOSITY_MESSAGE_BG_COLOUR: 'צבע הרקע',
    VERBOSITY_DEBUG: 'הדגש פוסטים "מוסתרים"',
    CMF_CUSTOMISATIONS: 'התאמות אישיות',
    CMF_BTN_LOCATION: 'תנקה את הזנות שלי מיקום הכפתור',
    CMF_BTN_OPTION: ['שמאל למטה', 'ימינה למעלה', 'מושבת (השתמש ב"הגדרות" בתפריט פקודות סקריפט משתמש)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'נקה את שפת תיקיית הדיאלוג שלי',
    CMF_DIALOG_LANGUAGE: 'עִבְרִית',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'השתמש בשפת האתר',
    GM_MENU_SETTINGS: 'ההגדרות',
    CMF_DIALOG_LOCATION: 'מיקום תיבת הדו-שיח "נקה את ההזנות שלי"',
    CMF_DIALOG_OPTION: ['צד שמאל', 'צד ימין'],
    CMF_BORDER_COLOUR: 'צבע גבול',
    DLG_TIPS: 'טיפים',
    DLG_TIPS_CONTENT: 'מחיקת ההיסטורה בדפדפן תנקה את ההגדרות ותחזיר אותם לברירת המחדל.\n\nהשתמש ב"ייצא" ו"ייבא" כדי לגבות ולהחזיר את ההגדרות שלך',
    DLG_BUTTONS: ['שמור', 'סגור', 'ייצא', 'ייבא', 'איפוס'],
    DLG_FB_COLOUR_HINT: 'השאר ריק כדי להשתמש בערכת הצבעים של FB',
    },
    // -- Bahasa Indonesia (Indonesia)
    id: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Bersponsor',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Kotak daftar tab "Cerita | Reels | Forum"',
    NF_STORIES: 'Cerita',
    NF_SURVEY: 'Survei',
    NF_PEOPLE_YOU_MAY_KNOW: 'Orang yang Mungkin Anda Kenal',
    NF_PAID_PARTNERSHIP: 'Kemitraan berbayar',
    NF_SPONSORED_PAID: 'Disponsori · Dibayar oleh ______',
    NF_SUGGESTIONS: 'Saran / Rekomendasi',
    NF_FOLLOW: 'Ikuti',
    NF_PARTICIPATE: 'Berpartisipasi',
    NF_REELS_SHORT_VIDEOS: 'Reels dan Video Pendek',
    NF_SHORT_REEL_VIDEO: 'Reel/video pendek',
    NF_EVENTS_YOU_MAY_LIKE: 'Acara yang mungkin Anda sukai',
    NF_ANIMATED_GIFS_POSTS: 'GIF animasi',
    NF_ANIMATED_GIFS_PAUSE: 'Jeda GIF animasi',
    NF_SHARES: '# Kali dibagikan',
    NF_LIKES_MAXIMUM: 'Jumlah maksimum Suka',
    GF_PAID_PARTNERSHIP: 'Kemitraan berbayar',
    GF_SUGGESTIONS: 'Saran / Rekomendasi',
    GF_SHORT_REEL_VIDEO: 'Reel/video pendek',
    GF_ANIMATED_GIFS_POSTS: 'GIF animasi',
    GF_ANIMATED_GIFS_PAUSE: 'Jeda GIF animasi',
    GF_SHARES: '# Kali dibagikan',
    VF_LIVE: 'LANGSUNG',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Video duplikat',
    VF_ANIMATED_GIFS_PAUSE: 'Jeda GIF animasi',
    PP_ANIMATED_GIFS_POSTS: 'GIF animasi',
    PP_ANIMATED_GIFS_PAUSE: 'Jeda GIF animasi',
    NF_BLOCKED_FEED: ['Umpan Berita', 'Umpan Grup', 'Umpan Video'],
    GF_BLOCKED_FEED: ['Umpan Berita', 'Umpan Grup', 'Umpan Video'],
    VF_BLOCKED_FEED: ['Umpan Berita', 'Umpan Grup', 'Umpan Video'],
    MP_BLOCKED_FEED: ['Umpan Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Virus Corona (kotak informasi)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Ilmu iklim (kotak informasi)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Berlangganan (kotak informasi)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Tampilkan kontrol video',
    REELS_DISABLE_LOOPING: 'Nonaktifkan pengulangan',
    DLG_TITLE: 'Bersihkan feed saya',
    DLG_NF: 'Umpan Berita',
    DLG_GF: 'Umpan Grup',
    DLG_VF: 'Umpan Video',
    DLG_MP: 'Umpan Marketplace',
    DLG_PP: 'Profil / Halaman',
    DLG_OTHER: 'Bagian tambahan / informasi',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Filter teks',
    DLG_BLOCK_NEW_LINE: '(Pisahkan kata atau frasa dengan jeda baris, Ekspresi Reguler didukung)',
    NF_BLOCKED_ENABLED: 'Diaktifkan',
    GF_BLOCKED_ENABLED: 'Diaktifkan',
    VF_BLOCKED_ENABLED: 'Diaktifkan',
    MP_BLOCKED_ENABLED: 'Diaktifkan',
    PP_BLOCKED_ENABLED: 'Diaktifkan',
    NF_BLOCKED_RE: 'Ekspresi Reguler (RegExp)',
    GF_BLOCKED_RE: 'Ekspresi Reguler (RegExp)',
    VF_BLOCKED_RE: 'Ekspresi Reguler (RegExp)',
    MP_BLOCKED_RE: 'Ekspresi Reguler (RegExp)',
    PP_BLOCKED_RE: 'Ekspresi Reguler (RegExp)',
    DLG_VERBOSITY: 'Opsi untuk Postingan Tersembunyi',
    DLG_VERBOSITY_CAPTION: 'Tampilkan label jika kiriman disembunyikan',
    VERBOSITY_MESSAGE: ['tanpa label', 'Pos disembunyikan. Aturan: ', ' postingan disembunyikan', '7 postingan disembunyikan ~ (hanya di Feed Grup)'],
    VERBOSITY_MESSAGE_COLOUR: 'Warna teks',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Warna latar belakang',
    VERBOSITY_DEBUG: 'Sorot postingan "tersembunyi"',
    CMF_CUSTOMISATIONS: 'Kustomisasi',
    CMF_BTN_LOCATION: 'Lokasi tombol Bersihkan umpan saya',
    CMF_BTN_OPTION: ['kiri bawah', 'kanan atas', 'dinonaktifkan (gunakan "Pengaturan" di menu Perintah Skrip Pengguna)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Bersihkan bahasa kotak dialog umpan saya',
    CMF_DIALOG_LANGUAGE: 'Bahasa Indonesia',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Gunakan bahasa situs',
    GM_MENU_SETTINGS: 'Pengaturan',
    CMF_DIALOG_LOCATION: 'Lokasi kotak dialog Bersihkan umpan saya',
    CMF_DIALOG_OPTION: ['sisi kiri', 'sisi kanan'],
    CMF_BORDER_COLOUR: 'Warna perbatasan',
    DLG_TIPS: 'Tips',
    DLG_TIPS_CONTENT: 'Menghapus cache browser Anda akan mengatur ulang pengaturan Anda ke nilai defaultnya.\n\nGunakan tombol "Ekspor" dan "Impor" untuk mencadangkan dan memulihkan pengaturan khusus Anda.',
    DLG_BUTTONS: ['Simpan', 'Tutup', 'Ekspor', 'Impor', 'Reset'],
    DLG_FB_COLOUR_HINT: 'Biarkan kosong untuk menggunakan skema warna FB',
    },
    // -- Italino (Italy)
    it: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Sponsorizzato',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Casella di riepilogo della scheda "Storie | Reels | Stanze"',
    NF_STORIES: 'Storie',
    NF_SURVEY: 'Sondaggio',
    NF_PEOPLE_YOU_MAY_KNOW: 'Persone che potresti conoscere',
    NF_PAID_PARTNERSHIP: 'Partnership pubblicizzata',
    NF_SPONSORED_PAID: 'Sponsorizzato · Finanziato da ______',
    NF_SUGGESTIONS: 'Suggerimenti / Raccomandazioni',
    NF_FOLLOW: 'Segui',
    NF_PARTICIPATE: 'Partecipare',
    NF_REELS_SHORT_VIDEOS: 'Reel e video brevi',
    NF_SHORT_REEL_VIDEO: 'Bobina/breve video',
    NF_EVENTS_YOU_MAY_LIKE: 'Eventi che potrebbero piacerti',
    NF_ANIMATED_GIFS_POSTS: 'GIF animate',
    NF_ANIMATED_GIFS_PAUSE: 'Metti in pausa le GIF animate',
    NF_SHARES: 'Condivisioni: #',
    NF_LIKES_MAXIMUM: 'Numero massimo di Mi piace',
    GF_PAID_PARTNERSHIP: 'Partnership pubblicizzata',
    GF_SUGGESTIONS: 'Suggerimenti / Raccomandazioni',
    GF_SHORT_REEL_VIDEO: 'Bobina/breve video',
    GF_ANIMATED_GIFS_POSTS: 'GIF animate',
    GF_ANIMATED_GIFS_PAUSE: 'Metti in pausa le GIF animate',
    GF_SHARES: 'Condivisioni: #',
    VF_LIVE: 'IN DIRETTA',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Video duplicato',
    VF_ANIMATED_GIFS_PAUSE: 'Metti in pausa le GIF animate',
    PP_ANIMATED_GIFS_POSTS: 'GIF animate',
    PP_ANIMATED_GIFS_PAUSE: 'Metti in pausa le GIF animate',
    NF_BLOCKED_FEED: ['Feed di notizie', 'Feed di gruppo', 'Feed di video'],
    GF_BLOCKED_FEED: ['Feed di notizie', 'Feed di gruppo', 'Feed di video'],
    VF_BLOCKED_FEED: ['Feed di notizie', 'Feed di gruppo', 'Feed di video'],
    MP_BLOCKED_FEED: ['Feed id Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavirus (casella informativa)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Scienza del clima (casella informativa)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Iscriviti (casella informativa)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Mostra controlli video',
    REELS_DISABLE_LOOPING: 'Disattiva ripetizione',
    DLG_TITLE: 'Pulisci i miei feed',
    DLG_NF: 'Feed di notizie',
    DLG_GF: 'Feed di gruppo',
    DLG_VF: 'Feed di video',
    DLG_MP: 'Feed id Marketplace',
    DLG_PP: 'Profilo / Pagina',
    DLG_OTHER: 'Sezione supplementare / informativa',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Filtro di testo',
    DLG_BLOCK_NEW_LINE: '(Separa parole o frasi con un\'interruzione di riga, le espressioni regolari sono supportate)',
    NF_BLOCKED_ENABLED: 'Abilita opzione',
    GF_BLOCKED_ENABLED: 'Abilita opzione',
    VF_BLOCKED_ENABLED: 'Abilita opzione',
    MP_BLOCKED_ENABLED: 'Abilita opzione',
    PP_BLOCKED_ENABLED: 'Abilita opzione',
    NF_BLOCKED_RE: 'Espressioni regolari (RegExp)',
    GF_BLOCKED_RE: 'Espressioni regolari (RegExp)',
    VF_BLOCKED_RE: 'Espressioni regolari (RegExp)',
    MP_BLOCKED_RE: 'Espressioni regolari (RegExp)',
    PP_BLOCKED_RE: 'Espressioni regolari (RegExp)',
    DLG_VERBOSITY: 'Opzioni per post nascosti',
    DLG_VERBOSITY_CAPTION: 'Mostrare un\'etichetta se un post è nascosto',
    VERBOSITY_MESSAGE: ['nessuna etichetta', 'Post nascosto. Regola: ', ' post nascosti', '7 post nascosti ~ (solo nel Feed di Gruppi)'],
    VERBOSITY_MESSAGE_COLOUR: 'Colore del testo',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Colore di sfondo',
    VERBOSITY_DEBUG: 'Evidenzia i post "nascosti"',
    CMF_CUSTOMISATIONS: 'Personalizzazioni',
    CMF_BTN_LOCATION: 'Posizione del pulsante Pulisci i miei feed',
    CMF_BTN_OPTION: ['in basso a sinistra', 'in alto a destra', 'disabilitato (usa "Impostazioni" nel menu Comandi script utente)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Pulisci la lingua della mia casella di dialogo feed',
    CMF_DIALOG_LANGUAGE: 'Italiano',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Usa la lingua del sito',
    GM_MENU_SETTINGS: 'Impostazioni',
    CMF_DIALOG_LOCATION: 'Posizione della finestra di dialogo Pulisci i miei feed',
    CMF_DIALOG_OPTION: ['lato sinistro', 'lato destro'],
    CMF_BORDER_COLOUR: 'Colore del bordo',
    DLG_TIPS: 'Suggerimenti',
    DLG_TIPS_CONTENT: 'La cancellazione della cache del browser ripristinerà le impostazioni ai valori predefiniti.\n\nUtilizza i pulsanti "Esporta" e "Importa" per eseguire il backup e ripristinare le impostazioni personalizzate.',
    DLG_BUTTONS: ['Salva', 'Chiudi', 'Esportare', 'Importare', 'Ripristina'],
    DLG_FB_COLOUR_HINT: 'Lascia vuoto per usare la combinazione di colori di FB',
    },
    // -- Japanese (Japan)
    ja: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: '広告',
    NF_TABLIST_STORIES_REELS_ROOMS: '「Stories | Reels | Rooms」タブのリストボックス',
    NF_STORIES: 'Stories',
    NF_SURVEY: 'アンケート',
    NF_PEOPLE_YOU_MAY_KNOW: 'あなたが知っているかもしれない人々',
    NF_PAID_PARTNERSHIP: '有償パートナーシップ',
    NF_SPONSORED_PAID: '後援 · ______ による支払い',
    NF_SUGGESTIONS: '提案/推奨事項',
    NF_FOLLOW: 'フォロー',
    NF_PARTICIPATE: '参加する',
    NF_REELS_SHORT_VIDEOS: 'リールとショート動画',
    NF_SHORT_REEL_VIDEO: 'リール/ショートビデオ',
    NF_EVENTS_YOU_MAY_LIKE: 'リール/ショートビデオ',
    NF_ANIMATED_GIFS_POSTS: 'アニメーション GIF',
    NF_ANIMATED_GIFS_PAUSE: 'アニメーション GIF を一時停止する',
    NF_SHARES: 'シェア#件',
    NF_LIKES_MAXIMUM: '「いいね！」の最大数',
    GF_PAID_PARTNERSHIP: '有償パートナーシップ',
    GF_SUGGESTIONS: '提案/推奨事項',
    GF_SHORT_REEL_VIDEO: 'リールとショートビデオ',
    GF_ANIMATED_GIFS_POSTS: 'アニメーション GIF',
    GF_ANIMATED_GIFS_PAUSE: 'アニメーション GIF を一時停止する',
    GF_SHARES: 'シェア#件',
    VF_LIVE: 'ライブ',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: '重複する動画',
    VF_ANIMATED_GIFS_PAUSE: 'アニメーション GIF を一時停止する',
    PP_ANIMATED_GIFS_POSTS: 'アニメーション GIF',
    PP_ANIMATED_GIFS_PAUSE: 'アニメーション GIF を一時停止する',
    NF_BLOCKED_FEED: ['ニュースフィード', 'グループ フィード', '動画フィード'],
    GF_BLOCKED_FEED: ['ニュースフィード', 'グループ フィード', '動画フィード'],
    VF_BLOCKED_FEED: ['ニュースフィード', 'グループ フィード', '動画フィード'],
    MP_BLOCKED_FEED: ['マーケットプレイス フィード'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'コロナウイルス（インフォメーションボックス）',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: '気候科学（情報ボックス）',
    OTHER_INFO_BOX_SUBSCRIBE: '購読する（情報ボックス）',
    REELS_TITLE: 'リール動画',
    REELS_CONTROLS: 'ビデオコントロールを表示',
    REELS_DISABLE_LOOPING: 'ループの無効化',
    DLG_TITLE: 'フィードをクリーンアップ',
    DLG_NF: 'ニュースフィード',
    DLG_GF: 'グループ フィード',
    DLG_VF: '動画フィード',
    DLG_MP: 'マーケットプレイス フィード',
    DLG_PP: 'プロフィール / ページ',
    DLG_OTHER: '補足・情報セクション',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'テキストフィルター',
    DLG_BLOCK_NEW_LINE: '(単語やフレーズを改行で区切ってください。正規表現がサポートされています)',
    NF_BLOCKED_ENABLED: '有効化',
    GF_BLOCKED_ENABLED: '有効化',
    VF_BLOCKED_ENABLED: '有効化',
    MP_BLOCKED_ENABLED: '有効化',
    PP_BLOCKED_ENABLED: '有効化',
    NF_BLOCKED_RE: '正規表現 (RegExp)',
    GF_BLOCKED_RE: '正規表現 (RegExp)',
    VF_BLOCKED_RE: '正規表現 (RegExp)',
    MP_BLOCKED_RE: '正規表現 (RegExp)',
    PP_BLOCKED_RE: '正規表現 (RegExp)',
    DLG_VERBOSITY: '非表示投稿のオプション',
    DLG_VERBOSITY_CAPTION: '投稿が非表示の場合にラベルを表示する',
    VERBOSITY_MESSAGE: ['ラベルなし', '投稿を非表示にしました。 ルール： ', ' 件の投稿が非表示', '7件の投稿が非表示 ~ (グループフィードのみ)'],
    VERBOSITY_MESSAGE_COLOUR: 'テキストの色',
    VERBOSITY_MESSAGE_BG_COLOUR: '背景色',
    VERBOSITY_DEBUG: '「非表示」の投稿を強調表示する',
    CMF_CUSTOMISATIONS: 'カスタマイズ',
    CMF_BTN_LOCATION: '「フィードをクリーンアップ」ボタンの配置',
    CMF_BTN_OPTION: ['下左', '上右', '無効 ([ユーザー スクリプト コマンド] メニューの [設定] を使用)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'フィードのダイアログボックス言語をクリーンアップ',
    CMF_DIALOG_LANGUAGE: '日本語',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'サイトの言語を使用',
    GM_MENU_SETTINGS: '設定',
    CMF_DIALOG_LOCATION: '[フィードの消去] ダイアログ ボックスの配置',
    CMF_DIALOG_OPTION: ['左側', '右側'],
    CMF_BORDER_COLOUR: 'ボーダーカラー',
    DLG_TIPS: 'ヒント',
    DLG_TIPS_CONTENT: 'ブラウザのキャッシュをクリアすると、設定がデフォルト値にリセットされます。\n\n[エクスポート] および [インポート] ボタンを使用して、カスタマイズした設定をバックアップおよび復元します。',
    DLG_BUTTONS: ['セーブ', 'クローズ', '輸出する', '輸入', 'リセット'],
    DLG_FB_COLOUR_HINT: '空白のままにすると、FB の配色が使用されます',
    },
    // -- Latviešu (Latvia)
    lv: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Apmaksāta reklāma',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Cilnes "Stāsti | Video rullīši | Rooms" sarakstlodziņš',
    NF_STORIES: 'Stāsti',
    NF_SURVEY: 'Aptauja',
    NF_PEOPLE_YOU_MAY_KNOW: 'Cilvēki, kurus tu varētu pazīt',
    NF_PAID_PARTNERSHIP: 'Apmaksāta sadarbība',
    NF_SPONSORED_PAID: 'Apmaksāta reklāma · Apmaksā ______',
    NF_SUGGESTIONS: 'Ieteikumi',
    NF_FOLLOW: 'Sekot',
    NF_PARTICIPATE: 'Piedalīties',
    NF_REELS_SHORT_VIDEOS: 'Reels un īsi videoklipi',
    NF_SHORT_REEL_VIDEO: 'Ruļļa/īss video',
    NF_EVENTS_YOU_MAY_LIKE: 'Notikumi, kas jums varētu patikt',
    NF_ANIMATED_GIFS_POSTS: 'Animētos GIF',
    NF_ANIMATED_GIFS_PAUSE: 'Apturiet animētos GIF',
    NF_SHARES: '# dalījās',
    NF_LIKES_MAXIMUM: 'Maksimālais atzīmju Patīk skaits',
    GF_PAID_PARTNERSHIP: 'Apmaksāta sadarbība',
    GF_SUGGESTIONS: 'Ieteikumi',
    GF_SHORT_REEL_VIDEO: 'Ruļļa/īss video',
    GF_ANIMATED_GIFS_POSTS: 'Animētos GIF',
    GF_ANIMATED_GIFS_PAUSE: 'Apturiet animētos GIF',
    GF_SHARES: '# dalījās',
    VF_LIVE: 'TIEŠRAIDE',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Dublētais video',
    VF_ANIMATED_GIFS_PAUSE: 'Apturiet animētos GIF',
    PP_ANIMATED_GIFS_POSTS: 'Animētos GIF',
    PP_ANIMATED_GIFS_PAUSE: 'Apturiet animētos GIF',
    NF_BLOCKED_FEED: ['Ziņu plūsma', 'Grupu plūsma', 'Video plūsma'],
    GF_BLOCKED_FEED: ['Ziņu plūsma', 'Grupu plūsma', 'Video plūsma'],
    VF_BLOCKED_FEED: ['Ziņu plūsma', 'Grupu plūsma', 'Video plūsma'],
    MP_BLOCKED_FEED: ['Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Koronavīruss (informācijas lodziņš)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Klimata zinātne (informācijas lodziņš)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Abonēt (informācijas lodziņš)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Rādīt video vadīklus',
    REELS_DISABLE_LOOPING: 'Atspējot cilpotošanu',
    DLG_TITLE: 'Tīrīt manas plūsmas',
    DLG_NF: 'Ziņu plūsma',
    DLG_GF: 'Grupu plūsma',
    DLG_VF: 'Video plūsma',
    DLG_MP: 'Marketplace',
    DLG_PP: 'Profils / Lapa',
    DLG_OTHER: 'Papildu / informācija sadaļa',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Teksta filtrs',
    DLG_BLOCK_NEW_LINE: '(Atdaliet vārdus vai frāzes ar rindkopu pārtraukumu, regulārie izteicieni tiek atbalstīti)',
    NF_BLOCKED_ENABLED: 'Iespējots',
    GF_BLOCKED_ENABLED: 'Iespējots',
    VF_BLOCKED_ENABLED: 'Iespējots',
    MP_BLOCKED_ENABLED: 'Iespējots',
    PP_BLOCKED_ENABLED: 'Iespējots',
    NF_BLOCKED_RE: 'Regulārās izteiksmes (RegExp)',
    GF_BLOCKED_RE: 'Regulārās izteiksmes (RegExp)',
    VF_BLOCKED_RE: 'Regulārās izteiksmes (RegExp)',
    MP_BLOCKED_RE: 'Regulārās izteiksmes (RegExp)',
    PP_BLOCKED_RE: 'Regulārās izteiksmes (RegExp)',
    DLG_VERBOSITY: 'Slēpto ierakstu iespējas',
    DLG_VERBOSITY_CAPTION: 'Rādīt etiķeti, ja raksts ir paslēpts',
    VERBOSITY_MESSAGE: ['nav nekāda ziņojuma', 'Ziņa ir paslēpta. Noteikums: ', ' ziņas ir paslēptas', '7 ziņas paslēptas ~ (tikai Grupu plūsmē)'],
    VERBOSITY_MESSAGE_COLOUR: 'Teksta krāsa',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Fona krāsa',
    VERBOSITY_DEBUG: 'Izceliet "slēptos" rakstus',
    CMF_CUSTOMISATIONS: 'Personalizēšana',
    CMF_BTN_LOCATION: 'Pogas Tīrīt manas plūsmas atrašanās vieta',
    CMF_BTN_OPTION: ['apakšējā kreisajā stūrī', 'augšējā labajā stūrī', 'atspējota (lietotāja skripta komandu izvēlnē izmantojiet sadaļu Iestatījumi)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Tīrīt manu barošanas kastē dialoga valodu',
    CMF_DIALOG_LANGUAGE: 'Latviešu',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Izmantot vietnes valodu',
    GM_MENU_SETTINGS: 'Iestatījumi',
    CMF_DIALOG_LOCATION: 'Dialoglodziņa Tīrīt manas plūsmas atrašanās vieta',
    CMF_DIALOG_OPTION: ['kreisā puse', 'labā puse'],
    CMF_BORDER_COLOUR: 'Apmales krāsa',
    DLG_TIPS: 'Padomi',
    DLG_TIPS_CONTENT: 'Iztīrot pārlūkprogrammas kešatmiņu, iestatījumi tiks atiestatīti uz noklusējuma vērtībām.\n\nIzmantojiet pogas "Eksportēt" un "Importēt", lai dublētu un atjaunotu pielāgotos iestatījumus.',
    DLG_BUTTONS: ['Saglabājiet', 'Aizveriet', 'Eksportēt', 'Importēt', 'Atiestatīt'],
    DLG_FB_COLOUR_HINT: 'Atstājiet tukšu, lai izmantotu FB krāsu shēmu',
    },
    // -- Nederlands (Netherlands)
    nl: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Gesponsord',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Keuzelijst tabblad "Verhalen | Reels | Ruimtes"',
    NF_STORIES: 'Verhalen',
    NF_SURVEY: 'Vragenlijst',
    NF_PEOPLE_YOU_MAY_KNOW: 'Mensen die je misschien kent',
    NF_PAID_PARTNERSHIP: 'Betaald partnerschap',
    NF_SPONSORED_PAID: 'Gesponsord · Betaald door ______',
    NF_SUGGESTIONS: 'Suggesties / Aanbevelingen',
    NF_FOLLOW: 'Volgen',
    NF_PARTICIPATE: 'Deelnemen',
    NF_REELS_SHORT_VIDEOS: 'Reels en korte video\'s',
    NF_SHORT_REEL_VIDEO: 'Spoel/korte video',
    NF_EVENTS_YOU_MAY_LIKE: 'Evenementen die je misschien leuk vindt',
    NF_ANIMATED_GIFS_POSTS: 'Geanimeerde GIF\'s',
    NF_ANIMATED_GIFS_PAUSE: 'Geanimeerde GIF\'s pauzeren',
    NF_SHARES: '# keer gedeeld',
    NF_LIKES_MAXIMUM: 'Maximaal aantal likes',
    GF_PAID_PARTNERSHIP: 'Betaald partnerschap',
    GF_SUGGESTIONS: 'Suggesties / Aanbevelingen',
    GF_SHORT_REEL_VIDEO: 'Spoel/korte video',
    GF_ANIMATED_GIFS_POSTS: 'Geanimeerde GIF\'s',
    GF_ANIMATED_GIFS_PAUSE: 'Geanimeerde GIF\'s pauzeren',
    GF_SHARES: '# keer gedeeld',
    VF_LIVE: 'LIVE',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Dubbel video',
    VF_ANIMATED_GIFS_PAUSE: 'Geanimeerde GIF\'s pauzeren',
    PP_ANIMATED_GIFS_POSTS: 'Geanimeerde GIF\'s',
    PP_ANIMATED_GIFS_PAUSE: 'Geanimeerde GIF\'s pauzeren',
    NF_BLOCKED_FEED: ['Nieuwsfeed', 'Groepsfeed', 'Videofeed'],
    GF_BLOCKED_FEED: ['Nieuwsfeed', 'Groepsfeed', 'Videofeed'],
    VF_BLOCKED_FEED: ['Nieuwsfeed', 'Groepsfeed', 'Videofeed'],
    MP_BLOCKED_FEED: ['Marktplaatsfeed'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavirus (informatiebox)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Klimaatwetenschap (informatiebox)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Abonneren (informatievak)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Toon video bedieningselementen',
    REELS_DISABLE_LOOPING: 'Herhalen uitschakelen',
    DLG_TITLE: 'Schoon mijn feeds',
    DLG_NF: 'Nieuwsfeed',
    DLG_GF: 'Groepsfeed',
    DLG_VF: 'Videofeed',
    DLG_MP: 'Marktplaatsfeed',
    DLG_PP: 'Profiel / Pagina',
    DLG_OTHER: 'Aanvullende / informatie sectie',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Tekstfilter',
    DLG_BLOCK_NEW_LINE: '(Scheid woorden of zinnen met een regeleinde, reguliere expressies worden ondersteund)',
    NF_BLOCKED_ENABLED: 'Ingeschakeld',
    GF_BLOCKED_ENABLED: 'Ingeschakeld',
    VF_BLOCKED_ENABLED: 'Ingeschakeld',
    MP_BLOCKED_ENABLED: 'Ingeschakeld',
    PP_BLOCKED_ENABLED: 'Ingeschakeld',
    NF_BLOCKED_RE: 'Reguliere expressies (RegExp)',
    GF_BLOCKED_RE: 'Reguliere expressies (RegExp)',
    VF_BLOCKED_RE: 'Reguliere expressies (RegExp)',
    MP_BLOCKED_RE: 'Reguliere expressies (RegExp)',
    PP_BLOCKED_RE: 'Reguliere expressies (RegExp)',
    DLG_VERBOSITY: 'Opties voor verborgen berichten',
    DLG_VERBOSITY_CAPTION: 'Toon een label als een artikel verborgen is',
    VERBOSITY_MESSAGE: ['geen label', 'Post verborgen. Regel: ', ' posts verborgen', '7 posts verborgen ~ (alleen in Groepen Feed)'],
    VERBOSITY_MESSAGE_COLOUR: 'Tekstkleur',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Achtergrondkleur',
    VERBOSITY_DEBUG: 'Highlight "verborgen" artikelen',
    CMF_CUSTOMISATIONS: 'Personalisaties',
    CMF_BTN_LOCATION: 'Locatie van de knop Mijn feeds opschonen',
    CMF_BTN_OPTION: ['linksonder', 'rechtsboven', 'uitgeschakeld (gebruik "Instellingen" in het menu Gebruikersscriptopdrachten)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Maak mijn feeds dialoogvensterstaal schoon',
    CMF_DIALOG_LANGUAGE: 'Nederlands',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Site-taal gebruiken',
    GM_MENU_SETTINGS: 'Instellingen',
    CMF_DIALOG_LOCATION: 'Locatie van het dialoogvenster Mijn feeds opschonen',
    CMF_DIALOG_OPTION: ['linkerkant', 'rechterkant'],
    CMF_BORDER_COLOUR: 'Randkleur',
    DLG_TIPS: 'Tips',
    DLG_TIPS_CONTENT: 'Als u de cache van uw browser wist, worden uw instellingen teruggezet naar hun standaardwaarden.\n\nGebruik de knoppen "Exporteren" en "Importeren" om een back-up te maken van uw aangepaste instellingen en deze te herstellen.',
    DLG_BUTTONS: ['Opslaan', 'Sluiten', 'Exporteren', 'Importeren', 'Reset'],
    DLG_FB_COLOUR_HINT: 'Laat leeg om het kleurenschema van FB te gebruiken',
    },
    // -- Polski (Poland)
    pl: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Sponsorowane',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Pole listy zakładki "Relacje | Reels | Pokoje"',
    NF_STORIES: 'Relacje',
    NF_SURVEY: 'Badanie',
    NF_PEOPLE_YOU_MAY_KNOW: 'Osoby, które możesz znać',
    NF_PAID_PARTNERSHIP: 'Post sponsorowany',
    NF_SPONSORED_PAID: 'Sponsorowane · Opłacona przez ______',
    NF_SUGGESTIONS: 'Sugestie / Zalecenia',
    NF_FOLLOW: 'Obserwuj',
    NF_PARTICIPATE: 'Uczestniczyć',
    NF_REELS_SHORT_VIDEOS: 'Rolki i krótkie filmy',
    NF_SHORT_REEL_VIDEO: 'Reel/krótki film',
    NF_EVENTS_YOU_MAY_LIKE: 'Wydarzenia, które mogą Ci się spodobać',
    NF_ANIMATED_GIFS_POSTS: 'Animowane GIF-y',
    NF_ANIMATED_GIFS_PAUSE: 'Wstrzymaj animowane GIF-y',
    NF_SHARES: '# udostępnienia',
    NF_LIKES_MAXIMUM: 'Maksymalna ilość "Lubię to!"',
    GF_PAID_PARTNERSHIP: 'Post sponsorowany',
    GF_SUGGESTIONS: 'Sugestie / Zalecenia',
    GF_SHORT_REEL_VIDEO: 'Reel/krótki film',
    GF_ANIMATED_GIFS_POSTS: 'Animowane GIF-y',
    GF_ANIMATED_GIFS_PAUSE: 'Wstrzymaj animowane GIF-y',
    GF_SHARES: '# udostępnienia',
    VF_LIVE: 'NA ŻYWO',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Duplikat wideo',
    VF_ANIMATED_GIFS_PAUSE: 'Wstrzymaj animowane GIF-y',
    PP_ANIMATED_GIFS_POSTS: 'Animowane GIF-y',
    PP_ANIMATED_GIFS_PAUSE: 'Wstrzymaj animowane GIF-y',
    NF_BLOCKED_FEED: ['Kanał aktualności', 'Kanał grup', 'Kanał wideo'],
    GF_BLOCKED_FEED: ['Kanał aktualności', 'Kanał grup', 'Kanał wideo'],
    VF_BLOCKED_FEED: ['Kanał aktualności', 'Kanał grup', 'Kanał wideo'],
    MP_BLOCKED_FEED: ['Kanał Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Koronawirus (skrzynka informacyjna)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Nauka o klimacie (skrzynka informacyjna)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Subskrybuj (pole informacyjne)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Pokaż sterowanie wideo',
    REELS_DISABLE_LOOPING: 'Wyłącz pętlę',
    DLG_TITLE: 'Wyczyść moje kanały',
    DLG_NF: 'Kanał aktualności',
    DLG_GF: 'Kanał grup',
    DLG_VF: 'Kanał wideo',
    DLG_MP: 'Kanał Marketplace',
    DLG_PP: 'Profil / Strona',
    DLG_OTHER: 'Sekcja uzupełniająca/informacyjna',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Filtr tekstu',
    DLG_BLOCK_NEW_LINE: '(Oddziel słowa lub frazy za pomocą znaku nowej linii, wyrażenia regularne są obsługiwane)',
    NF_BLOCKED_ENABLED: 'Włączone',
    GF_BLOCKED_ENABLED: 'Włączone',
    VF_BLOCKED_ENABLED: 'Włączone',
    MP_BLOCKED_ENABLED: 'Włączone',
    PP_BLOCKED_ENABLED: 'Włączone',
    NF_BLOCKED_RE: 'Wyrażenia regularne (RegExp)',
    GF_BLOCKED_RE: 'Wyrażenia regularne (RegExp)',
    VF_BLOCKED_RE: 'Wyrażenia regularne (RegExp)',
    MP_BLOCKED_RE: 'Wyrażenia regularne (RegExp)',
    PP_BLOCKED_RE: 'Wyrażenia regularne (RegExp)',
    DLG_VERBOSITY: 'Opcje dla ukrytych postów',
    DLG_VERBOSITY_CAPTION: 'Pokaż etykietę, jeśli artykuł jest ukryty',
    VERBOSITY_MESSAGE: ['brak etykiety', 'Ukryto 1 post. Reguła: ', ' posty ukryte', '7 posty ukryte ~ (tylko w Kanałach Grup)'],
    VERBOSITY_MESSAGE_COLOUR: 'Kolor tekstu',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Kolor tła',
    VERBOSITY_DEBUG: 'Wyróżnij „ukryte” posty',
    CMF_CUSTOMISATIONS: 'Personalizacja',
    CMF_BTN_LOCATION: 'Lokalizacja przycisku Wyczyść moje kanały',
    CMF_BTN_OPTION: ['lewy dolny róg', 'prawy górny róg', 'wyłączone (użyj "Ustawienia" w menu Polecenia skryptu użytkownika)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Wyczyść język mojego okna dialogowego z wiadomościami',
    CMF_DIALOG_LANGUAGE: 'Polski',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Użyj języka witryny',
    GM_MENU_SETTINGS: 'Ustawienia',
    CMF_DIALOG_LOCATION: 'Lokalizacja okna dialogowego Wyczyść moje kanały',
    CMF_DIALOG_OPTION: ['lewa strona', 'prawa strona'],
    CMF_BORDER_COLOUR: 'Kolor obramowania',
    DLG_TIPS: 'Sugestia',
    DLG_TIPS_CONTENT: 'Wyczyszczenie pamięci podręcznej przeglądarki spowoduje zresetowanie ustawień do wartości domyślnych.\n\nUżyj przycisków „Eksportuj” i „Importuj”, aby wykonać kopię zapasową i przywrócić niestandardowe ustawienia.',
    DLG_BUTTONS: ['Zapisz', 'Zamknij', 'Eksport', 'Import', 'Przeskładać'],
    DLG_FB_COLOUR_HINT: 'Pozostaw puste, aby użyć schematu kolorów FB',
    },
    // -- Português (Portugal and Brazil)
    pt: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Patrocinado',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Caixa de listagem da guia "Stories | Vídeos do Reels | Salas"',
    NF_STORIES: 'Stories',
    NF_SURVEY: 'Enquete',
    NF_PEOPLE_YOU_MAY_KNOW: 'Pessoas que talvez conheças',
    NF_PAID_PARTNERSHIP: 'Parceria paga',
    NF_SPONSORED_PAID: 'Patrocinado · Financiado por ______',
    NF_SUGGESTIONS: 'Sugestões / Recomendações',
    NF_FOLLOW: 'Seguir',
    NF_PARTICIPATE: 'Participar',
    NF_REELS_SHORT_VIDEOS: 'Vídeos do Reels e vídeos de curta duração',
    NF_SHORT_REEL_VIDEO: 'Rolo/vídeo curto',
    NF_EVENTS_YOU_MAY_LIKE: 'Eventos que você pode gostar',
    NF_ANIMATED_GIFS_POSTS: 'GIFs animados',
    NF_ANIMATED_GIFS_PAUSE: 'Pausar GIFs animados',
    NF_SHARES: '# partilhas',
    NF_LIKES_MAXIMUM: 'Número máximo de curtidas',
    GF_PAID_PARTNERSHIP: 'Parceria paga',
    GF_SUGGESTIONS: 'Sugestões / Recomendações',
    GF_SHORT_REEL_VIDEO: 'Rolo/vídeo curto',
    GF_ANIMATED_GIFS_POSTS: 'GIFs animados',
    GF_ANIMATED_GIFS_PAUSE: 'Pausar GIFs animados',
    GF_SHARES: '# partilhas',
    VF_LIVE: 'DIRETO',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Vídeo duplicado',
    VF_ANIMATED_GIFS_PAUSE: 'Pausar GIFs animados',
    PP_ANIMATED_GIFS_POSTS: 'GIFs animados',
    PP_ANIMATED_GIFS_PAUSE: 'Pausar GIFs animados',
    NF_BLOCKED_FEED: ['Feed de notícias', 'Feed de grupos', 'Feed de vídeos'],
    GF_BLOCKED_FEED: ['Feed de notícias', 'Feed de grupos', 'Feed de vídeos'],
    VF_BLOCKED_FEED: ['Feed de notícias', 'Feed de grupos', 'Feed de vídeos'],
    MP_BLOCKED_FEED: ['Feed de mercado'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Coronavírus (caixa de informações)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Ciência do Clima (caixa de informações)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Assine (caixa de informações)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Mostrar controles do vídeo',
    REELS_DISABLE_LOOPING: 'Desativar repetição',
    DLG_TITLE: 'Limpe meus feeds',
    DLG_NF: 'Feed de notícias',
    DLG_GF: 'Feed de grupos',
    DLG_VF: 'Feed de vídeos',
    DLG_MP: 'Feed de mercado',
    DLG_PP: 'Perfil / Página',
    DLG_OTHER: 'Seção suplementar / informativa',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Filtro de texto',
    DLG_BLOCK_NEW_LINE: '(Separe palavras ou frases com uma quebra de linha, expressões regulares são suportadas)',
    NF_BLOCKED_ENABLED: 'Habilidoso',
    GF_BLOCKED_ENABLED: 'Habilidoso',
    VF_BLOCKED_ENABLED: 'Habilidoso',
    MP_BLOCKED_ENABLED: 'Habilidoso',
    PP_BLOCKED_ENABLED: 'Habilidoso',
    NF_BLOCKED_RE: 'Expressões regulares (RegExp)',
    GF_BLOCKED_RE: 'Expressões regulares (RegExp)',
    VF_BLOCKED_RE: 'Expressões regulares (RegExp)',
    MP_BLOCKED_RE: 'Expressões regulares (RegExp)',
    PP_BLOCKED_RE: 'Expressões regulares (RegExp)',
    DLG_VERBOSITY: 'Opções para postagens ocultas',
    DLG_VERBOSITY_CAPTION: 'Mostrar um rótulo se uma postagem estiver oculta',
    VERBOSITY_MESSAGE: ['sem rótulo', 'Postagem oculta. Regra: ', ' postagens ocultas', '7 postagens ocultas ~ (apenas no Feed de Grupos)'],
    VERBOSITY_MESSAGE_COLOUR: 'Cor do texto',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Cor de fundo',
    VERBOSITY_DEBUG: 'Destacar postagens "ocultas"',
    CMF_CUSTOMISATIONS: 'Personalizações',
    CMF_BTN_LOCATION: 'Localização do botão Limpe meus feeds',
    CMF_BTN_OPTION: ['inferior esquerdo', 'superior direito', 'desativado (use "Configurações" no menu Comandos de script do usuário)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Limpar o idioma da caixa de diálogo dos meus feeds',
    CMF_DIALOG_LANGUAGE: 'Português',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Usar idioma do site',
    GM_MENU_SETTINGS: 'Configurações',
    CMF_DIALOG_LOCATION: 'Localização da caixa de diálogo Limpe meus feeds',
    CMF_DIALOG_OPTION: ['lado esquerdo', 'lado direito'],
    CMF_BORDER_COLOUR: 'Cor da borda',
    DLG_TIPS: 'Pontas',
    DLG_TIPS_CONTENT: 'Limpar o cache do navegador redefinirá suas configurações para os valores padrão.\n\nUse os botões "Exportar" e "Importar" para fazer backup e restaurar suas configurações personalizadas.',
    DLG_BUTTONS: ['Salvar', 'Fechar', 'Exportar', 'Importar', 'Redefinir'],
    DLG_FB_COLOUR_HINT: 'Deixe em branco para usar o esquema de cores do FB',
    },
    // -- Русский (Russia)
    ru: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Реклама',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Список вкладок "Истории | Reels | Комнаты"',
    NF_STORIES: 'Истории',
    NF_SURVEY: 'Опрос',
    NF_PEOPLE_YOU_MAY_KNOW: 'Люди, которых вы можете знать',
    NF_PAID_PARTNERSHIP: 'Платное партнерство',
    NF_SPONSORED_PAID: 'Реклама · Оплачено ______',
    NF_SUGGESTIONS: 'Предложения / Рекомендации',
    NF_FOLLOW: 'Подписаться',
    NF_PARTICIPATE: 'Участвовать',
    NF_REELS_SHORT_VIDEOS: 'Reels и короткие видео',
    NF_SHORT_REEL_VIDEO: 'Reels/короткое видео',
    NF_EVENTS_YOU_MAY_LIKE: 'Мероприятия, которые вам могут понравиться',
    NF_ANIMATED_GIFS_POSTS: 'Анимированные GIF-файлы',
    NF_ANIMATED_GIFS_PAUSE: 'Приостановить анимированные GIF',
    NF_SHARES: '# поделились',
    NF_LIKES_MAXIMUM: 'Максимальное количество «Нравится»',
    GF_PAID_PARTNERSHIP: 'Платное партнерство',
    GF_SUGGESTIONS: 'Предложения / Рекомендации',
    GF_SHORT_REEL_VIDEO: 'Reel/короткое видео',
    GF_ANIMATED_GIFS_POSTS: 'Анимированные GIF-файлы',
    GF_ANIMATED_GIFS_PAUSE: 'Приостановить анимированные GIF',
    GF_SHARES: '# поделились',
    VF_LIVE: 'В ЭФИРЕ',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Дубликат видео',
    VF_ANIMATED_GIFS_PAUSE: 'Приостановить анимированные GIF',
    PP_ANIMATED_GIFS_POSTS: 'Анимированные GIF-файлы',
    PP_ANIMATED_GIFS_PAUSE: 'Приостановить анимированные GIF',
    NF_BLOCKED_FEED: ['Лента новостей', 'Лента групп', 'Лента видео'],
    GF_BLOCKED_FEED: ['Лента новостей', 'Лента групп', 'Лента видео'],
    VF_BLOCKED_FEED: ['Лента новостей', 'Лента групп', 'Лента видео'],
    MP_BLOCKED_FEED: ['Лента Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Коронавирус (информационное окно)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Наука о климате (информационное окно)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Подписаться (информационное окно)',
    REELS_TITLE: 'Видео Reels',
    REELS_CONTROLS: 'Показать элементы управления видео',
    REELS_DISABLE_LOOPING: 'Отключить повторение',
    DLG_TITLE: 'Очистить мои новостные ленты',
    DLG_NF: 'Лента новостей',
    DLG_GF: 'Лента групп',
    DLG_VF: 'Лента видео',
    DLG_MP: 'Лента Marketplace',
    DLG_PP: 'Профиль / Страница',
    DLG_OTHER: 'Дополнительный/информационный раздел',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Текстовый фильтр',
    DLG_BLOCK_NEW_LINE: '(Разделяйте слова или фразы с помощью разрыва строки, поддерживаются регулярные выражения)',
    NF_BLOCKED_ENABLED: 'Включено',
    GF_BLOCKED_ENABLED: 'Включено',
    VF_BLOCKED_ENABLED: 'Включено',
    MP_BLOCKED_ENABLED: 'Включено',
    PP_BLOCKED_ENABLED: 'Включено',
    NF_BLOCKED_RE: 'Регулярные выражения (RegExp)',
    GF_BLOCKED_RE: 'Регулярные выражения (RegExp)',
    VF_BLOCKED_RE: 'Регулярные выражения (RegExp)',
    MP_BLOCKED_RE: 'Регулярные выражения (RegExp)',
    PP_BLOCKED_RE: 'Регулярные выражения (RegExp)',
    DLG_VERBOSITY: 'Настройки скрытых публикаций',
    DLG_VERBOSITY_CAPTION: 'Показать ярлык, если запись скрыта',
    VERBOSITY_MESSAGE: ['нет ярлыка', 'Пост скрыт. Правило: ', ' постов скрыто', '7 постов скрыто ~ (только в Ленте Групп)'],
    VERBOSITY_MESSAGE_COLOUR: 'Цвет текста',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Цвет фона',
    VERBOSITY_DEBUG: 'Выделить «скрытые» посты',
    CMF_CUSTOMISATIONS: 'Настройки',
    CMF_BTN_LOCATION: 'Расположение кнопки «Очистить мои новостные ленты»',
    CMF_BTN_OPTION: ['внизу слева', 'вверху справа', 'отключено (используйте «Настройки» в меню «Пользовательские команды скрипта»)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Очистить язык моего диалогового окна с лентами',
    CMF_DIALOG_LANGUAGE: 'Русский',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Использовать язык сайта',
    GM_MENU_SETTINGS: 'Настройки',
    CMF_DIALOG_LOCATION: 'Расположение диалогового окна «Очистить мои ленты»',
    CMF_DIALOG_OPTION: ['левая сторона', 'правая сторона'],
    CMF_BORDER_COLOUR: 'Цвет границы',
    DLG_TIPS: 'Советы',
    DLG_TIPS_CONTENT: 'Очистка кэша браузера сбросит ваши настройки на значения по умолчанию.\n\nИспользуйте кнопки «Экспорт» и «Импорт», чтобы создать резервную копию и восстановить ваши настройки.',
    DLG_BUTTONS: ['Сохранить', 'Закрыть', 'Экспорт', 'Импорт', 'Сброс'],
    DLG_FB_COLOUR_HINT: 'Оставьте пустым, чтобы использовать цветовую схему FB',
    },
    // -- Türkçe (Turkey)
    tr: {
    SPONSORED: 'Sponsorlu',
    NF_TABLIST_STORIES_REELS_ROOMS: '"Hikayeler | Makaralar | Odalar" sekmeleri liste kutusu',
    NF_STORIES: 'Hikayeler',
    NF_SURVEY: 'Anket',
    NF_PEOPLE_YOU_MAY_KNOW: 'Tanıyor olabileceğin kişiler',
    NF_PAID_PARTNERSHIP: 'ücretli ortaklık',
    NF_SPONSORED_PAID: 'Sponsorlu · ______ tarafından ödendi',
    NF_SUGGESTIONS: 'Öneriler',
    NF_FOLLOW: 'Takip Et',
    NF_PARTICIPATE: 'Katılmak',
    NF_REELS_SHORT_VIDEOS: 'Makaralar ve kısa videolar',
    NF_SHORT_REEL_VIDEO: 'makara/kısa video',
    NF_EVENTS_YOU_MAY_LIKE: 'makara/kısa video',
    NF_ANIMATED_GIFS_POSTS: 'Animasyonlu GIF\'ler',
    NF_ANIMATED_GIFS_PAUSE: 'Hareketli GIF\'leri duraklat',
    NF_SHARES: '# Paylaşım',
    NF_LIKES_MAXIMUM: 'Maksimum Beğeni sayısı',
    GF_PAID_PARTNERSHIP: 'ücretli ortaklık',
    GF_SUGGESTIONS: 'Öneriler',
    GF_SHORT_REEL_VIDEO: 'makara/kısa video',
    GF_ANIMATED_GIFS_POSTS: 'Animasyonlu GIF\'ler',
    GF_ANIMATED_GIFS_PAUSE: 'Hareketli GIF\'leri duraklat',
    GF_SHARES: '# Paylaşım',
    VF_LIVE: 'CANLI',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Çift video',
    VF_ANIMATED_GIFS_PAUSE: 'Hareketli GIF\'leri duraklat',
    PP_ANIMATED_GIFS_POSTS: 'Animasyonlu GIF\'ler',
    PP_ANIMATED_GIFS_PAUSE: 'Hareketli GIF\'leri duraklat',
    NF_BLOCKED_FEED: ['Haber akışı', 'Gruplar Feed\'i', 'Video Beslemelerini İzle'],
    GF_BLOCKED_FEED: ['Haber akışı', 'Gruplar Feed\'i', 'Video Beslemelerini İzle'],
    VF_BLOCKED_FEED: ['Haber akışı', 'Gruplar Feed\'i', 'Video Beslemelerini İzle'],
    MP_BLOCKED_FEED: ['Pazar Yeri Feed\'i'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Koronavirüs (bilgi kutusu)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'İklim Bilimi (bilgi kutusu)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Abone ol (bilgi kutusu)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Video kontrollerini göster',
    REELS_DISABLE_LOOPING: 'Döngüyü devre dışı bırak',
    DLG_TITLE: 'Feed\'lerimi temizle',
    DLG_NF: 'Haber akışı',
    DLG_GF: 'Gruplar Feed\'i',
    DLG_VF: 'Video Beslemelerini İzle',
    DLG_MP: 'Pazar Yeri Feed\'i',
    DLG_PP: 'Profil / Sayfa',
    DLG_OTHER: 'Tamamlayıcı / bilgi bölümü',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Metin filtresi',
    DLG_BLOCK_NEW_LINE: '(Kelimeleri veya ifadeleri satır sonu ile ayırın, Düzenli İfadeler desteklenir)',
    NF_BLOCKED_ENABLED: 'Etkinleştirildi',
    GF_BLOCKED_ENABLED: 'Etkinleştirildi',
    VF_BLOCKED_ENABLED: 'Etkinleştirildi',
    MP_BLOCKED_ENABLED: 'Etkinleştirildi',
    PP_BLOCKED_ENABLED: 'Etkinleştirildi',
    NF_BLOCKED_RE: 'Düzenli İfadeler (RegExp)',
    GF_BLOCKED_RE: 'Düzenli İfadeler (RegExp)',
    VF_BLOCKED_RE: 'Düzenli İfadeler (RegExp)',
    MP_BLOCKED_RE: 'Düzenli İfadeler (RegExp)',
    PP_BLOCKED_RE: 'Düzenli İfadeler (RegExp)',
    DLG_VERBOSITY: 'Gizli Gönderi Seçenekleri',
    DLG_VERBOSITY_CAPTION: 'Bir gönderi gizlenmişse bir etiket göster',
    VERBOSITY_MESSAGE: ['etiket yok', 'Gönderi gizlendi. Kural: ', ' gönderi gizlendi', '7 gönderi gizlendi ~ (yalnızca Grup Beslemesi)'],
    VERBOSITY_MESSAGE_COLOUR: 'Metin rengi',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Arka plan rengi',
    VERBOSITY_DEBUG: '"Gizli" gönderileri vurgulayın',
    CMF_CUSTOMISATIONS: 'özelleştirmeler',
    CMF_BTN_LOCATION: '"Feed\'lerimi temizle" için düğmenin konumu',
    CMF_BTN_OPTION: ['sol alt', 'sağ üst', 'devre dışı (Kullanıcı Komut Dosyası Komutları menüsünde "Ayarlar"ı kullanın)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Beslemelerimin iletişim kutusu dilini temizle',
    CMF_DIALOG_LANGUAGE: 'Türkçe',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Site dilini kullan',
    GM_MENU_SETTINGS: 'Ayarlar',
    CMF_DIALOG_LOCATION: '"Feed\'lerimi temizle" iletişim kutusunun konumu',
    CMF_DIALOG_OPTION: ['sol yan', 'sağ yan'],
    CMF_BORDER_COLOUR: 'Kenarlık rengi',
    DLG_TIPS: 'Ipuçları',
    DLG_TIPS_CONTENT: 'Tarayıcınızın önbelleğini temizlemek, ayarlarınızı varsayılan değerlerine sıfırlayacaktır. \n\nÖzelleştirilmiş ayarlarınızı yedeklemek ve geri yüklemek için "Dışa Aktar" ve "İçe Aktar" düğmelerini kullanın.',
    DLG_BUTTONS: ['Kaydetmek', 'Kapat', 'İhracat', 'İçe aktarmak', 'Sıfırla'],
    DLG_FB_COLOUR_HINT: 'FB\'un renk düzenini kullanmak için boş bırakın',
    },
    // -- Україна (Ukraine)
    uk: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Спонсорована',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Поле списку вкладок «Історії | Reels | Кімнати»',
    NF_STORIES: 'Історії',
    NF_SURVEY: 'Опитування',
    NF_PEOPLE_YOU_MAY_KNOW: 'Люди, яких Ви можете знати',
    NF_PAID_PARTNERSHIP: 'Оплачуване партнерство',
    NF_SPONSORED_PAID: 'Спонсоровано · Оплачено ______',
    NF_SUGGESTIONS: 'Пропозиції / Рекомендації',
    NF_FOLLOW: 'Слідуйте',
    NF_PARTICIPATE: 'Беріть участь',
    NF_REELS_SHORT_VIDEOS: 'Відео Reels і короткі відео',
    NF_SHORT_REEL_VIDEO: 'Reel/коротке відео',
    NF_EVENTS_YOU_MAY_LIKE: 'Події, які можуть вам сподобатися',
    NF_ANIMATED_GIFS_POSTS: 'Анімовані GIF-файли',
    NF_ANIMATED_GIFS_PAUSE: 'Призупинити анімовані GIF-файли',
    NF_SHARES: '# Поширити',
    NF_LIKES_MAXIMUM: 'Максимальна кількість «Подобається».',
    GF_PAID_PARTNERSHIP: 'Оплачуване партнерство',
    GF_SUGGESTIONS: 'Пропозиції / Рекомендації',
    GF_SHORT_REEL_VIDEO: 'Reel/коротке відео',
    GF_ANIMATED_GIFS_POSTS: 'Анімовані GIF-файли',
    GF_ANIMATED_GIFS_PAUSE: 'Призупинити анімовані GIF-файли',
    GF_SHARES: '# Поширити',
    VF_LIVE: 'ЕФІР',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Дубльоване відео',
    VF_ANIMATED_GIFS_PAUSE: 'Призупинити анімовані GIF-файли',
    PP_ANIMATED_GIFS_POSTS: 'Анімовані GIF-файли',
    PP_ANIMATED_GIFS_PAUSE: 'Призупинити анімовані GIF-файли',
    NF_BLOCKED_FEED: ['Стрічка новин', 'Стрічка Групи', 'Стрічка відео'],
    GF_BLOCKED_FEED: ['Стрічка новин', 'Стрічка Групи', 'Стрічка відео'],
    VF_BLOCKED_FEED: ['Стрічка новин', 'Стрічка Групи', 'Стрічка відео'],
    MP_BLOCKED_FEED: ['Стрічка Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Коронавірус (інформаційне вікно)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Наука про клімат (інформаційне вікно)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Підписатися (інформаційне вікно)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Відображення елементів керування відео',
    REELS_DISABLE_LOOPING: 'Вимкнути повторення',
    DLG_TITLE: 'Очистити мої стрічки',
    DLG_NF: 'Стрічка новин',
    DLG_GF: 'Стрічка Групи',
    DLG_VF: 'Стрічка відео',
    DLG_MP: 'Стрічка Marketplace',
    DLG_PP: 'Профіль / Сторінка',
    DLG_OTHER: 'Додатковий/інформаційний розділ',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Текстовий фільтр',
    DLG_BLOCK_NEW_LINE: '(Розділяйте слова або фрази розривом рядка, регулярні вирази підтримуються)',
    NF_BLOCKED_ENABLED: 'Увімкнено',
    GF_BLOCKED_ENABLED: 'Увімкнено',
    VF_BLOCKED_ENABLED: 'Увімкнено',
    MP_BLOCKED_ENABLED: 'Увімкнено',
    PP_BLOCKED_ENABLED: 'Увімкнено',
    NF_BLOCKED_RE: 'Регулярні вирази (RegExp)',
    GF_BLOCKED_RE: 'Регулярні вирази (RegExp)',
    VF_BLOCKED_RE: 'Регулярні вирази (RegExp)',
    MP_BLOCKED_RE: 'Регулярні вирази (RegExp)',
    PP_BLOCKED_RE: 'Регулярні вирази (RegExp)',
    DLG_VERBOSITY: 'Параметри прихованих дописів',
    DLG_VERBOSITY_CAPTION: 'Відображати мітку, якщо публікація прихована',
    VERBOSITY_MESSAGE: ['жодної мітки', 'Допис прихований. Правило: ', ' дописи приховано', '7 дописи приховано ~ (лише в стрічці Груп)'],
    VERBOSITY_MESSAGE_COLOUR: 'Колір тексту',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Колір фону',
    VERBOSITY_DEBUG: '«Виділяти «приховані» дописи»',
    CMF_CUSTOMISATIONS: 'Налаштування',
    CMF_BTN_LOCATION: 'Розташування кнопки «Очистити мої стрічки»',
    CMF_BTN_OPTION: ['внизу ліворуч', 'вгорі праворуч', 'вимкнено (використовуйте «Параметри» в меню команд сценарію користувача»)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Очистити мову мого вікна діалогу',
    CMF_DIALOG_LANGUAGE: 'Українська',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Використовувати мову сайту',
    GM_MENU_SETTINGS: 'Параметри',
    CMF_DIALOG_LOCATION: 'Розташування діалогового вікна «Очистити мої стрічки»',
    CMF_DIALOG_OPTION: ['ліва сторона', 'права сторона'],
    CMF_BORDER_COLOUR: 'Колір кордону',
    DLG_TIPS: 'Підказки',
    DLG_TIPS_CONTENT: 'Очищення кешу браузера призведе до скидання налаштувань до значень за замовчуванням.\n\nВикористовуйте кнопки «Експорт» та «Імпорт», щоб створити резервну копію та відновити налаштовані налаштування.',
    DLG_BUTTONS: ['Зберегти', 'Закрити', 'Експорт', 'Імпорт', 'Скинути'],
    DLG_FB_COLOUR_HINT: 'Залиште порожнім, щоб використовувати колірну схему FB',
    },
    // -- Tiếng Việt (Vietnam)
    vi: {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: 'Được tài trợ',
    NF_TABLIST_STORIES_REELS_ROOMS: 'Hộp danh sách tab "Tin | Reels | Phòng họp mặt"',
    NF_STORIES: 'Tin',
    NF_SURVEY: 'Khảo sát',
    NF_PEOPLE_YOU_MAY_KNOW: 'Những người bạn có thể biết',
    NF_PAID_PARTNERSHIP: 'Mối quan hệ tài trợ',
    NF_SPONSORED_PAID: 'Được tài trợ · Tài trợ bởi ______',
    NF_SUGGESTIONS: 'Đề xuất / Khuyến nghị',
    NF_FOLLOW: 'Theo dõi',
    NF_PARTICIPATE: 'Tham gia',
    NF_REELS_SHORT_VIDEOS: 'Reels và video ngắn',
    NF_SHORT_REEL_VIDEO: 'Reel / video ngắn',
    NF_EVENTS_YOU_MAY_LIKE: 'Sự kiện bạn có thể thích',
    NF_ANIMATED_GIFS_POSTS: 'GIF động',
    NF_ANIMATED_GIFS_PAUSE: 'Tạm dừng các ảnh GIF động',
    NF_SHARES: '# lượt chia sẻ',
    NF_LIKES_MAXIMUM: 'Số lượt thích tối đa',
    GF_PAID_PARTNERSHIP: 'Mối quan hệ tài trợ',
    GF_SUGGESTIONS: 'Đề xuất / Khuyến nghị',
    GF_SHORT_REEL_VIDEO: 'Reel / video ngắn',
    GF_ANIMATED_GIFS_POSTS: 'GIF động',
    GF_ANIMATED_GIFS_PAUSE: 'Tạm dừng các ảnh GIF động',
    GF_SHARES: '# lượt chia sẻ',
    VF_LIVE: 'TRỰC TIẾP',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: 'Video trùng lặp',
    VF_ANIMATED_GIFS_PAUSE: 'Tạm dừng các ảnh GIF động',
    PP_ANIMATED_GIFS_POSTS: 'GIF động',
    PP_ANIMATED_GIFS_PAUSE: 'Tạm dừng các ảnh GIF động',
    NF_BLOCKED_FEED: ['Nguồn cấp tin tức', 'Nguồn cấp dữ liệu Nhóm', 'Nguồn cấp dữ liệu video'],
    GF_BLOCKED_FEED: ['Nguồn cấp tin tức', 'Nguồn cấp dữ liệu Nhóm', 'Nguồn cấp dữ liệu video'],
    VF_BLOCKED_FEED: ['Nguồn cấp tin tức', 'Nguồn cấp dữ liệu Nhóm', 'Nguồn cấp dữ liệu video'],
    MP_BLOCKED_FEED: ['Nguồn cấp dữ liệu Marketplace'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: 'Virus corona (hộp thông tin)',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: 'Khoa học khí hậu (hộp thông tin)',
    OTHER_INFO_BOX_SUBSCRIBE: 'Đăng kí (hộp thông tin)',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: 'Hiển thị điều khiển video',
    REELS_DISABLE_LOOPING: 'Tắt lặp lại',
    DLG_TITLE: 'Làm sạch nguồn cấp dữ liệu của tôi',
    DLG_NF: 'Nguồn cấp tin tức',
    DLG_GF: 'Nguồn cấp dữ liệu Nhóm',
    DLG_VF: 'Nguồn cấp dữ liệu video',
    DLG_MP: 'Nguồn cấp dữ liệu Marketplace',
    DLG_PP: 'Hồ sơ / Trang',
    DLG_OTHER: 'Phần bổ sung/thông tin',
    DLG_BLOCK_TEXT_FILTER_TITLE: 'Bộ lọc văn bản',
    DLG_BLOCK_NEW_LINE: '(Ngăn cách từ hoặc cụm từ bằng dấu xuống dòng, Biểu thức chính quy được hỗ trợ)',
    NF_BLOCKED_ENABLED: 'Đã kích hoạt',
    GF_BLOCKED_ENABLED: 'Đã kích hoạt',
    VF_BLOCKED_ENABLED: 'Đã kích hoạt',
    MP_BLOCKED_ENABLED: 'Đã kích hoạt',
    PP_BLOCKED_ENABLED: 'Đã kích hoạt',
    NF_BLOCKED_RE: 'Biểu thức chính quy (RegExp)',
    GF_BLOCKED_RE: 'Biểu thức chính quy (RegExp)',
    VF_BLOCKED_RE: 'Biểu thức chính quy (RegExp)',
    MP_BLOCKED_RE: 'Biểu thức chính quy (RegExp)',
    PP_BLOCKED_RE: 'Biểu thức chính quy (RegExp)',
    DLG_VERBOSITY: 'Tùy chọn cho bài đăng ẩn',
    DLG_VERBOSITY_CAPTION: 'Hiển thị một nhãn nếu một bài đăng bị ẩn',
    VERBOSITY_MESSAGE: ['không có nhãn', 'Bài bị ẩn. Quy tắc: ', ' bài viết ẩn', '7 bài viết ẩn ~ (chỉ áp dụng cho Bảng tin Nhóm)'],
    VERBOSITY_MESSAGE_COLOUR: 'Màu văn bản',
    VERBOSITY_MESSAGE_BG_COLOUR: 'Màu nền',
    VERBOSITY_DEBUG: 'Đánh dấu các bài đăng "ẩn"',
    CMF_CUSTOMISATIONS: 'Các tùy chỉnh',
    CMF_BTN_LOCATION: 'Vị trí của nút Làm sạch nguồn cấp dữ liệu của tôi',
    CMF_BTN_OPTION: ['dưới cùng bên trái', 'trên cùng bên phải', 'bị vô hiệu hóa (sử dụng "Cài đặt" trong menu Lệnh của Tập lệnh Người dùng)'],
    CMF_DIALOG_LANGUAGE_LABEL: 'Làm sạch ngôn ngữ của hộp thoại của tôi',
    CMF_DIALOG_LANGUAGE: 'Tiếng Việt',
    CMF_DIALOG_LANGUAGE_DEFAULT: 'Sử dụng ngôn ngữ trang web',
    GM_MENU_SETTINGS: 'Cài đặt',
    CMF_DIALOG_LOCATION: 'Vị trí của hộp thoại Làm sạch nguồn cấp dữ liệu của tôi',
    CMF_DIALOG_OPTION: ['bên trái', 'bên phải'],
    CMF_BORDER_COLOUR: 'Màu viền',
    DLG_TIPS: 'Thủ thuật',
    DLG_TIPS_CONTENT: 'Xóa bộ nhớ cache của trình duyệt sẽ đặt lại cài đặt của bạn về các giá trị mặc định của chúng.\n\nSử dụng các nút "Xuất" và "Nhập" để sao lưu và khôi phục cài đặt tùy chỉnh của bạn.',
    DLG_BUTTONS: ['Lưu', 'Đóng', 'Xuất', 'Nhập', 'Đặt lại'],
    DLG_FB_COLOUR_HINT: 'Để trống để sử dụng bảng màu của FB',
    },
    // -- 简体中文 (Chinese (Simplified))
    'zh-Hans': {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: '赞助内容',
    NF_TABLIST_STORIES_REELS_ROOMS: '“快拍|Reels|畅聊室”选项卡列表框',
    NF_STORIES: '故事',
    NF_SURVEY: '调查',
    NF_PEOPLE_YOU_MAY_KNOW: '你可能认识的人',
    NF_PAID_PARTNERSHIP: '付费合伙',
    NF_SPONSORED_PAID: '赞助 · 由 ______ 付费',
    NF_SUGGESTIONS: '建议',
    NF_FOLLOW: '关注',
    NF_PARTICIPATE: '参与',
    NF_REELS_SHORT_VIDEOS: '卷轴和短视频',
    NF_SHORT_REEL_VIDEO: '卷轴/短视频',
    NF_EVENTS_YOU_MAY_LIKE: '您可能喜欢的活动',
    NF_ANIMATED_GIFS_POSTS: '动图 GIF',
    NF_ANIMATED_GIFS_PAUSE: '暂停动画 GIF',
    NF_SHARES: '#次分享',
    NF_LIKES_MAXIMUM: '最大点赞数',
    GF_PAID_PARTNERSHIP: '有偿合作',
    GF_SUGGESTIONS: '建议/建议',
    GF_SHORT_REEL_VIDEO: '卷轴和短视频',
    GF_ANIMATED_GIFS_POSTS: '动图 GIF',
    GF_ANIMATED_GIFS_PAUSE: '暂停动画 GIF',
    GF_SHARES: '#次分享',
    VF_LIVE: '现场直播',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: '重复视频',
    VF_ANIMATED_GIFS_PAUSE: '暂停动画 GIF',
    PP_ANIMATED_GIFS_POSTS: '动图 GIF',
    PP_ANIMATED_GIFS_PAUSE: '暂停动画 GIF',
    NF_BLOCKED_FEED: ['新闻提要', '组提要', '视频提要'],
    GF_BLOCKED_FEED: ['新闻提要', '组提要', '视频提要'],
    VF_BLOCKED_FEED: ['新闻提要', '组提要', '视频提要'],
    MP_BLOCKED_FEED: ['市场提要'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: '冠状病毒（信息框）',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: '气候科学（信息框）',
    OTHER_INFO_BOX_SUBSCRIBE: '订阅（信息框）',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: '显示视频控制',
    REELS_DISABLE_LOOPING: '禁用循环',
    DLG_TITLE: '清理我的提要',
    DLG_NF: '新闻提要',
    DLG_GF: '群组提要',
    DLG_VF: '视频提要',
    DLG_MP: '市场提要',
    DLG_PP: '个人资料 / 页面',
    DLG_OTHER: '补充/资料部分',
    DLG_BLOCK_TEXT_FILTER_TITLE: '文本过滤器',
    DLG_BLOCK_NEW_LINE: '(使用换行符分隔单词或短语，支持正则表达式)',
    NF_BLOCKED_ENABLED: '启用',
    GF_BLOCKED_ENABLED: '启用',
    VF_BLOCKED_ENABLED: '启用',
    MP_BLOCKED_ENABLED: '启用',
    PP_BLOCKED_ENABLED: '启用',
    NF_BLOCKED_RE: '正则表达式 (RegExp)',
    GF_BLOCKED_RE: '正则表达式 (RegExp)',
    VF_BLOCKED_RE: '正则表达式 (RegExp)',
    MP_BLOCKED_RE: '正则表达式 (RegExp)',
    PP_BLOCKED_RE: '正则表达式 (RegExp)',
    DLG_VERBOSITY: '隐藏帖子选项',
    DLG_VERBOSITY_CAPTION: '如果文章被隐藏，则显示标签',
    VERBOSITY_MESSAGE: ['没有标签', '帖子已隐藏。规则：', ' 个帖子已隐藏', '7个帖子已隐藏 ~ (仅适用于群组动态)'],
    VERBOSITY_MESSAGE_COLOUR: '文字颜色',
    VERBOSITY_MESSAGE_BG_COLOUR: '背景颜色',
    VERBOSITY_DEBUG: '突出显示“隐藏”的帖子',
    CMF_CUSTOMISATIONS: '定制化',
    CMF_BTN_LOCATION: '“清理我的提要”按钮位置',
    CMF_BTN_OPTION: ['左下方', '右上', '禁用（使用用户脚本命令菜单中的“设置”）'],
    CMF_DIALOG_LANGUAGE_LABEL: '清理我的动态框语言',
    CMF_DIALOG_LANGUAGE: '中文（简体）',
    CMF_DIALOG_LANGUAGE_DEFAULT: '使用网站语言',
    GM_MENU_SETTINGS: '设置',
    CMF_DIALOG_LOCATION: '“清理我的提要”对话框位置',
    CMF_DIALOG_OPTION: ['左边', '右边'],
    CMF_BORDER_COLOUR: '边框颜色',
    DLG_TIPS: '提示',
    DLG_TIPS_CONTENT: '清除浏览器缓存会将您的设置重置为默认值。\n\n使用“导出”和“导入”按钮来备份和恢复您的自定义设置。',
    DLG_BUTTONS: ['节省', '关', '出口', '进口', '重置'],
    DLG_FB_COLOUR_HINT: '留空以使用 FB 的配色方案',
    },
    // -- 中國傳統的 (Chinese (Traditional))
    'zh-Hant': {
    LANGUAGE_DIRECTION: 'ltr',
    SPONSORED: '贊助',
    NF_TABLIST_STORIES_REELS_ROOMS: '"限時動態 | Reels | 包廂" 分頁列表框',
    NF_STORIES: '故事',
    NF_SURVEY: '調查',
    NF_PEOPLE_YOU_MAY_KNOW: '你可能認識的人',
    NF_PAID_PARTNERSHIP: '付費合作',
    NF_SPONSORED_PAID: '贊助 · 出資者：______',
    NF_SUGGESTIONS: '建議/推薦',
    NF_FOLLOW: '追蹤',
    NF_PARTICIPATE: '參與',
    NF_REELS_SHORT_VIDEOS: 'Reels 和短影片',
    NF_SHORT_REEL_VIDEO: 'Reel/短影片',
    NF_EVENTS_YOU_MAY_LIKE: '你可能感興趣的活動',
    NF_ANIMATED_GIFS_POSTS: '動態 GIF',
    NF_ANIMATED_GIFS_PAUSE: '暫停 GIF 動畫',
    NF_SHARES: '#次分享',
    NF_LIKES_MAXIMUM: '最大按讚數',
    GF_PAID_PARTNERSHIP: '付費合作',
    GF_SUGGESTIONS: '建議/推薦',
    GF_SHORT_REEL_VIDEO: 'Reel/短影片',
    GF_ANIMATED_GIFS_POSTS: '動態 GIF',
    GF_ANIMATED_GIFS_PAUSE: '暫停 GIF 動畫',
    GF_SHARES: '#次分享',
    VF_LIVE: '現場直播',
    VF_INSTAGRAM: 'Instagram',
    VF_DUPLICATE_VIDEOS: '重複視頻',
    VF_ANIMATED_GIFS_PAUSE: '暫停 GIF 動畫',
    PP_ANIMATED_GIFS_POSTS: '動態 GIF',
    PP_ANIMATED_GIFS_PAUSE: '暫停 GIF 動畫',
    NF_BLOCKED_FEED: ['新聞動態消息', '群組動態消息', '影片動態消息'],
    GF_BLOCKED_FEED: ['新聞動態消息', '群組動態消息', '影片動態消息'],
    VF_BLOCKED_FEED: ['新聞動態消息', '群組動態消息', '影片動態消息'],
    MP_BLOCKED_FEED: ['Marketplace 動態消息'],
    PP_BLOCKED_FEED: '',
    OTHER_INFO_BOX_CORONAVIRUS: '武漢肺炎病毒（資訊框）',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: '氣候科學（資訊框）',
    OTHER_INFO_BOX_SUBSCRIBE: '訂閱（資訊框）',
    REELS_TITLE: 'Reels',
    REELS_CONTROLS: '顯示影片控制',
    REELS_DISABLE_LOOPING: '停用循環',
    DLG_TITLE: '清理我的動態消息',
    DLG_NF: '新聞動態消息',
    DLG_GF: '群組動態消息',
    DLG_VF: '影片動態消息',
    DLG_MP: 'Marketplace 動態消息',
    DLG_PP: '個人檔案 / 頁面',
    DLG_OTHER: '補充/資訊部分',
    DLG_BLOCK_TEXT_FILTER_TITLE: '文字過濾器',
    DLG_BLOCK_NEW_LINE: '(使用換行符分隔單詞或短語，支持正則表達式)',
    NF_BLOCKED_ENABLED: '啟用',
    GF_BLOCKED_ENABLED: '啟用',
    VF_BLOCKED_ENABLED: '啟用',
    MP_BLOCKED_ENABLED: '啟用',
    PP_BLOCKED_ENABLED: '啟用',
    NF_BLOCKED_RE: '正則表達式 (RegExp)',
    GF_BLOCKED_RE: '正則表達式 (RegExp)',
    VF_BLOCKED_RE: '正則表達式 (RegExp)',
    MP_BLOCKED_RE: '正則表達式 (RegExp)',
    PP_BLOCKED_RE: '正則表達式 (RegExp)',
    DLG_VERBOSITY: '隱藏帖子選項',
    DLG_VERBOSITY_CAPTION: '如果文章被隱藏，則顯示標籤',
    VERBOSITY_MESSAGE: ['沒有標籤', '帖子已隱藏。規則：', ' 個帖子已隱藏', '7個帖子已隱藏 ~ (僅適用於群組動態)'],
    VERBOSITY_MESSAGE_COLOUR: '文字顏色',
    VERBOSITY_MESSAGE_BG_COLOUR: '背景顏色',
    VERBOSITY_DEBUG: '強調顯示「隱藏」的貼文',
    CMF_CUSTOMISATIONS: '客製化',
    CMF_BTN_LOCATION: '「清理我的動態消息」按鈕的位置',
    CMF_BTN_OPTION: ['左下方', '右上方', '禁用（在用户脚本命令菜单中使用“设置”）'],
    CMF_DIALOG_LANGUAGE_LABEL: '清理我的動態框語言',
    CMF_DIALOG_LANGUAGE: '中文（繁體）',
    CMF_DIALOG_LANGUAGE_DEFAULT: '使用網站語言',
    GM_MENU_SETTINGS: '設置',
    CMF_DIALOG_LOCATION: '「清理我的動態消息」對話框的位置',
    CMF_DIALOG_OPTION: ['左邊', '右邊'],
    CMF_BORDER_COLOUR: '邊框顏色',
    DLG_TIPS: '提示',
    DLG_TIPS_CONTENT: '清除瀏覽器快取會將您的設定重置為預設值。\n\n使用「匯出」和「匯入」按鈕來備份和回復您的自定義設定。',
    DLG_BUTTONS: ['儲存', '關閉', '匯出', '匯入', '重設'],
    DLG_FB_COLOUR_HINT: '留空以使用 FB 的配色方案',
    },
    },
    defaults: {
    SPONSORED: true,
    NF_TABLIST_STORIES_REELS_ROOMS: false,
    NF_STORIES: false,
    NF_SURVEY: true,
    NF_PEOPLE_YOU_MAY_KNOW: false,
    NF_PAID_PARTNERSHIP: true,
    NF_SPONSORED_PAID: true,
    NF_SUGGESTIONS: true,
    NF_FOLLOW: true,
    NF_PARTICIPATE: true,
    NF_REELS_SHORT_VIDEOS: false,
    NF_SHORT_REEL_VIDEO: false,
    NF_EVENTS_YOU_MAY_LIKE: true,
    NF_ANIMATED_GIFS_POSTS: false,
    NF_ANIMATED_GIFS_PAUSE: false,
    NF_SHARES: false,
    NF_LIKES_MAXIMUM: false,
    GF_PAID_PARTNERSHIP: true,
    GF_SUGGESTIONS: false,
    GF_SHORT_REEL_VIDEO: false,
    GF_ANIMATED_GIFS_POSTS: false,
    GF_ANIMATED_GIFS_PAUSE: false,
    GF_SHARES: false,
    VF_LIVE: false,
    VF_INSTAGRAM: false,
    VF_DUPLICATE_VIDEOS: false,
    VF_ANIMATED_GIFS_PAUSE: false,
    PP_ANIMATED_GIFS_POSTS: false,
    PP_ANIMATED_GIFS_PAUSE: false,
    NF_BLOCKED_FEED: ['1', '0', '0'],
    GF_BLOCKED_FEED: ['0', '1', '0'],
    VF_BLOCKED_FEED: ['0', '0', '1'],
    MP_BLOCKED_FEED: ['1', '0', '0'],
    PP_BLOCKED_FEED: ['1', '0', '0'],
    OTHER_INFO_BOX_CORONAVIRUS: false,
    OTHER_INFO_BOX_CLIMATE_SCIENCE: false,
    OTHER_INFO_BOX_SUBSCRIBE: false,
    REELS_CONTROLS: true,
    REELS_DISABLE_LOOPING: true,
    NF_BLOCKED_ENABLED: false,
    GF_BLOCKED_ENABLED: false,
    VF_BLOCKED_ENABLED: false,
    MP_BLOCKED_ENABLED: false,
    PP_BLOCKED_ENABLED: false,
    NF_BLOCKED_RE: false,
    GF_BLOCKED_RE: false,
    VF_BLOCKED_RE: false,
    MP_BLOCKED_RE: false,
    PP_BLOCKED_RE: false,
    DLG_VERBOSITY: '0',
    VERBOSITY_DEBUG: false,
    VERBOSITY_MESSAGE_BG_COLOUR: 'LightGrey',
    CMF_BTN_OPTION: '0',
    CMF_DIALOG_OPTION: '0',
    CMF_BORDER_COLOUR: 'OrangeRed',
    },
    pathInfo: {
    OTHER_INFO_BOX_CORONAVIRUS: '/coronavirus_info/',
    OTHER_INFO_BOX_CLIMATE_SCIENCE: '/climatescienceinfo/',
    OTHER_INFO_BOX_SUBSCRIBE: '/support/',
    },
    };

    // *** *** end of language components *** ***

    // - console log "label" - used for filtering console logs.
    const log = '-- fbcmf :: ';

    // - idb-keyval - indexedDB wrapper
    // -- needs the "@require https://unpkg.com/idb-keyval@6.0.3/dist/umd.js" entry.
    // -- which functions do we want to use from the idb-keyval?
    const { get, set, del, createStore } = idbKeyval;
    // - override idb-keyval's default db and store names.
    let DBVARS = {
        DBName: 'dbCMF',
        DBStore: 'Mopping',
        DBKey: 'Options',
        ostore: null
    };
    // - make sure the db's store exists ...
    DBVARS.ostore = createStore(DBVARS.DBName, DBVARS.DBStore);

    // - post attribute - hidden and reason
    const postAtt = 'cmfr';
    // - post attribute - consecutive posts id
    const postAttCPID = 'cmfcpid';
    // - post property - # of light dusting duties done
    const postPropDS = 'cmfDusted';
    // - post's child element attribute - used for queries that original don't include the parent element.
    const postAttChildFlag = 'cmfcf';
    // - post's toggle state bar + post tab.
    const postAttTab = 'cmftsb';
    // - marketplace post - indicate already scanned
    const postAttMPSkip = 'cmfsmp';
    // - reel video attribute
    const rvAtt = 'cmfrv';
    // - ...
    const mainColumnAtt = 'cmfmc';

    // - Feed Details variables
    // -- nb: setFeedSettings() adjusts some of these settings.
    const VARS = {
        // - how many times to scan a post
        scanCountStart: 0,
        scanCountMaxLoop: 15, // Nov 2023; changed from 12 to 15, need to make code a tad bit more aggressive.

        noChangeCounter: 0, // number of consecutive loops that reported no change in html structure.

        // - langauge (default to EN)
        language: '',
        // - user options
        Options: {},
        optionsReady: false,
        // - blocked text
        Filters: {},
        // - blocked text separator
        SEP: '¦¦',

        dictionarySponsored: {},
        dictionaryReelsAndShortVideos: {},

        // - Feed toggles
        isNF: false, // news
        isGF: false, // groups
        isVF: false, // videos
        isMF: false, // marketplace
        isAF: false, // all feeds
        isSF: false, // search feed
        isRF: false, // reel feed
        isPP: false, // profile page

        isRF_InTimeoutMode: false, // -- processing Reel videos in timeout calls instead of mutations

        // groups feed type : 'group' = single group; 'groups' = multiple groups;
        gfType: '',

        // watch/videos feed type : 'vidoes' = normal feed; 'search' = search videos;
        vfType: '',

        // marketplace feed type: 'marketplace' = default view; 'category' = category view; 'item' = viewing an item; 'search' = search results;
        mpType: '',

        // remember current URL - used for page change detection
        prevURL: '',
        prevPathname: '',

        // element containing echo message about post(s) being hidden
        echoEl: null,
        echoElFirstNote: null, // for restoring "missing" echo message
        echoElCreatedCount: 0,
        echoELFirstPost: null,
        // how many consecutive posts have been hidden
        echoCount: 0,
        // current consecutive posts id
        echoCPID: '',

        // dark-mode ..
        isDarkMode: null,

        // StyleSheet Id
        cssID: '',
        cssOID: '',

        // Attribute names
        hideAtt: '',
        showAtt: '',

        // special attribute
        b1Att: '',
        b2Att: '',

        // CSS class names
        cssHideEl: '',
        cssEcho: '',
        cssHideNumberOfShares: '',

        // toggle dialog button (visible if is a Feed page)
        btnToggleEl: null,
        // - icon close / times
        iconClose: '<svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586z"/></svg>',
        // - script's logo
        logoHTML: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><g id="Layer" fill="currentColor"><path id="Layer" fill-rule="evenodd" class="s0" d="m51 3.2c0.7 1.1 0.7 1-1.6 9.2-1.4 5-2.1 7.4-2.3 7.6-0.1 0.1-0.3 0.2-0.6 0.2-0.4 0-0.9-0.4-0.9-0.7 0-0.1 1-3.5 2-7.4 1.2-4 2-7.3 2-7.5 0-0.4-0.6-1-0.9-1-0.2 0-0.5 0.2-0.7 0.3-0.3 0.3-0.7 1.8-5.5 19.2l-5.3 18.9 0.9 0.5c0.5 0.3 0.9 0.5 0.9 0.5 0 0 1.3-4.4 2.8-9.8 1.5-5.3 2.8-10 2.8-10.3 0.2-0.5 0.3-0.7 0.6-0.9 0.3-0.1 0.4-0.1 0.8 0 0.2 0.2 0.4 0.3 0.4 0.5 0.1 0.2-0.4 2.2-1.5 6.1-0.9 3.2-1.6 5.8-1.6 5.9 0 0 0.5 0.1 1.3 0.1 1.9 0 2.7 0.4 3.2 1.5 0.3 0.6 0.3 2.7 0 3.4-0.3 0.9-1.2 1.4-2 1.4-0.3 0-0.5 0.1-0.5 0.1 0 0.2-2.3 20.2-2.3 20.4-0.2 0.8 0.7 0.7-14.1 0.7-15.3 0-14.3 0.1-15.3-1-0.8-0.8-1.1-1.5-1-2.9 0.2-3.6 2.7-6.7 6.3-7.8 0.4-0.2 0.9-0.3 1-0.3 0.6 0 0.6 0.1 0.1-4.5-0.3-2.4-0.5-4.4-0.5-4.5-0.1-0.1-0.3-0.1-0.7-0.2-0.6 0-1.1-0.3-1.6-1-0.3-0.4-0.3-0.5-0.4-1.8 0-1.7 0.1-2.1 0.6-2.7 0.7-0.6 1-0.7 2.5-0.8h1.3v-2.9c0-3.1 0-3.4 0.6-3.6 0.2-0.1 2.4-0.1 7.1-0.1 6.5 0.1 6.9 0.1 7.1 0.3 0.2 0.2 0.2 0.3 0.2 3.3v3h0.6l0.6-0.1 4.3-15.3c2.4-8.5 4.4-15.6 4.5-15.9 0.4-0.6 0.9-1 1.5-1.3 1.2-0.4 2.6 0.1 3.3 1.2zm-26.6 26.6h-0.7c-0.3 0-0.6 0-0.7 0 0 0.1-0.1 1.2-0.1 2.5v2.3h1.5zm3.4 0h-0.7c-0.5 0-0.9 0-0.9 0.1 0 0-0.1 1.1-0.1 2.4v2.3h1.8v-2.4zm3.4 0h-1.6v4.8h1.6zm3.2 0h-1.3v4.8h1.3zm-6.4 6.6c-7.9 0-9 0-9.2 0.2-0.3 0.2-0.3 0.3-0.3 1.3 0 0.7 0.1 1.1 0.2 1.2 0.1 0.1 2.3 0.1 7.3 0.1 6.9 0.1 7.2 0.1 7.5 0.3 0.3 0.3 0.3 1 0 1.3-0.2 0.2-0.8 0.2-6.3 0.2h-6l0.1 0.5c0 0.3 0.2 2.3 0.5 4.5l0.4 4h0.4c0.6 0 1.5-0.3 2-0.7 0.3-0.3 0.7-0.8 0.9-1.3 0.6-1.1 1.3-2 2.1-2.7 1.1-0.9 2.8-1.5 4-1.5h0.6l0.7-1.1c0.6-1 0.8-1.2 1.3-1.5 0.4-0.2 0.6-0.2 0.9-0.2 0.4 0.1 0.5 0.1 0.5-0.1 0.1-0.1 0.3-1.1 0.6-2.1 0.3-1.1 0.6-2.1 0.6-2.2 0.1-0.2-0.4-0.2-8.8-0.2zm16.2 0h-1.5l-0.4 1.3c-0.2 0.8-0.4 1.4-0.4 1.5 0 0 0.9 0 2 0 2.3 0 2.3 0.1 2.3-1.4 0-0.9-0.1-1-0.3-1.2-0.2-0.2-0.6-0.2-1.7-0.2zm-2.8 4.7c0 0.1-0.2 0.8-0.5 1.6-0.2 1-0.3 1.4-0.2 1.5 0 0 0.3 0.2 0.6 0.4 0.4 0.4 0.4 0.5 0.5 1.2 0 0.6 0 0.7-0.8 2-0.7 1.1-0.8 1.3-1.3 1.6l-0.5 0.2v1.8c0 1.3-0.1 2-0.2 2.5-0.1 0.4-0.2 0.8-0.2 0.8 0 0 0.7 0.1 1.5 0.1 1.2 0 1.6-0.1 1.6-0.2 0-0.1 0.4-3.1 0.8-6.8 0.4-3.6 0.7-6.7 0.7-6.7-0.1-0.2-1.9-0.1-2 0zm-6.3 1.8c-0.2-0.1-0.3 0-0.9 1-0.2 0.4-0.4 0.8-0.3 0.8 0 0.1 1.1 0.7 2.3 1.5 1.3 0.7 2.4 1.4 2.5 1.5 0.3 0.1 0.3 0.1 0.8-0.8 0.3-0.6 0.6-1 0.5-1 0 0-1.1-0.7-2.4-1.5-1.3-0.8-2.4-1.4-2.5-1.5zm-4.5 2.8c-1.6 0.5-2.7 1.5-3.5 3.1-0.6 1.2-1.3 2-2.4 2.5-0.9 0.4-0.9 0.4-2.9 0.5-2.8 0.1-3.9 0.6-5.4 2.1-0.8 0.8-1 1.1-1.4 1.9-1 2.2-0.9 4 0.2 4.4 0.7 0.3 0.8 0.3 1-0.5 0.8-2.4 2.7-4.5 5.1-5.5 1.1-0.4 1.6-0.5 3.2-0.6 2-0.2 2.8-0.7 3.4-2.2 0.3-0.5 0.6-1.2 0.8-1.6 0.8-1.3 2.4-2.5 3.8-2.9 0.4-0.1 0.8-0.2 0.8-0.2q0.2-0.1-0.3-0.4c-0.3-0.2-0.6-0.4-0.6-0.5-0.1-0.3-1.1-0.3-1.8-0.1zm3.2 2.7c-0.9 0.2-2 0.8-2.8 1.5-0.7 0.6-0.8 0.9-1.6 2.6-0.7 1.5-2.2 2.5-3.9 2.7-3.4 0.4-4.3 0.8-5.8 2.2-0.7 0.8-1 1.2-1.4 1.9l-0.5 1 0.9 0.1c0.9 0 0.9 0 1.2-0.4q2.7-3.2 7.3-3.2c2.2 0 2.9-0.5 3.9-2.3 0.3-0.5 0.7-1.2 0.9-1.5 1-1.2 3-2.3 4.6-2.4l0.8-0.1-0.1-0.5c-0.1-0.8-0.3-1.2-0.9-1.4-0.7-0.2-1.9-0.3-2.6-0.2zm3.6 3.9h-0.4c-0.5 0-1.6 0.3-2.3 0.7-0.7 0.5-1.6 1.5-2.2 2.6-1.1 2.1-2.5 2.9-5.2 2.9-0.6 0-1.6 0.1-2 0.2-1 0.2-2.3 0.8-2.9 1.3l-0.4 0.4h4.1c4.6-0.1 4.7-0.1 6.5-1 0.9-0.5 1.3-0.7 2.2-1.6 1.4-1.4 2.2-3 2.5-4.9zm4.3 4.2h-1.9-1.8l-0.5 0.8c-0.6 0.9-1.5 1.9-2.4 2.6l-0.6 0.5h3.4c2.6 0 3.4 0 3.4-0.1 0-0.1 0.1-1 0.2-2z"/></g></svg>',
        // - new window icon
        iconNewWindow: '<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Open post in a new window</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
        iconNewWindowClass: 'cmf-link-new',
        // - for reels - chromium browsers needs more space for video controls...
        isChromium: false,
    };

    // -- user's language portion of the masterKeywords
    let KeyWords = {};
    function cloneKeywords() {
        if (VARS.language && VARS.language !== '') {
            KeyWords = { ...masterKeyWords.translations[VARS.language] };
        }
        else {
            KeyWords = { ...masterKeyWords.translations['en'] };
        }
    }

    // -- which language is the FB page in?
    function setLanguageAndOptions() {
        // - run this function when HEAD is available.
        // - also run getUserOptions().
        if (document.head) {
            // ...
            let result = getUserOptions().then(() => {
                // -- getUserOptions() will set the language.
                return true;
            });
        }
        else {
            setTimeout(setLanguageAndOptions, 5);
        }
    }

    function isDarkMode() {
        // -- fb's dark-mode : off
        if (document.documentElement.classList.contains('__fb-light-mode')) {
            return false;
        };
        // -- fb's dark-mode : on
        if (document.documentElement.classList.contains('__fb-dark-mode')) {
            return true;
        };
        // -- fb's dark-mode: automatic;
        if (document.body) {
            // -- check the body's background colour
            const bodyBackgroundColour = window.getComputedStyle(document.body).backgroundColor;
            const rgb = bodyBackgroundColour.match(/\d+/g);
            if (rgb) {
                const red = parseInt(rgb[0], 10);
                const green = parseInt(rgb[1], 10);
                const blue = parseInt(rgb[2], 10);

                const luminance = 0.299 * red + 0.587 * green + 0.114 * blue;
                return luminance < 128;
            }
        }
        // -- fallback ...
        return false;
    }

    function buildDictionaries() {
        // -- Sponsored
        VARS.dictionarySponsored = Object.values(masterKeyWords.translations).map(translation => translation.SPONSORED);
        VARS.dictionarySponsored = Object.values(masterKeyWords.translations).flatMap(translation => [
            // -- the ?.toLowerCase() - optional chaining - used when there's a value.
            translation.SPONSORED?.toLowerCase(),
            translation.SPONSORED_EXTRA?.toLowerCase()
        ]).filter(Boolean);

        // -- Follow
        VARS.dictionaryFollow = Array.from(new Set(
            Object.values(masterKeyWords.translations)
                .map(translation => translation.NF_FOLLOW)
                .filter(keyword => typeof keyword === 'string' && keyword.trim() !== '')
                .map(keyword => {
                    try {
                        return keyword.normalize('NFKC').toLowerCase();
                    } catch (err) {
                        return keyword.toLowerCase();
                    }
                })
        ));

        // -- Reels and Short Videos
        VARS.dictionaryReelsAndShortVideos = Object.values(masterKeyWords.translations).map(translation => translation.NF_REELS_SHORT_VIDEOS);
    }

    function generateRandomString() {
        // - generate random text (first letter must be an alphabet)
        // -- used for css classes
        // -- used for postAttCPID
        // -- used for tagging items
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const strArray = [chars.charAt(Math.floor(Math.random() * 52))]; // First letter must be an alphabet

        for (let i = 0; i < 12; i++) {
            strArray.push(chars.charAt(Math.floor(Math.random() * 62)));
        }

        return strArray.join('');
    }

    // -- stylesheet builder
    VARS.tempStyleSheetCode = ''; // holds the SS code while it is being built.
    function addToSS(classes, styles) {
        // -- formats and builds the StyleSheet code
        // -- parameters: classes (separated by comma), styles (separated by semicolon)
        // -- array actions: .filter - remove empties, .map - trim (or pad + trim)
        // -- function throwing a wobble? - check the properties and values pairs (one could be unmatched)
        const listOfClasses = classes.split(',').filter(function (e) { return e.trim() }).map(e => e.trim());
        let styleLines = styles.split(';').filter(function (e) { return e.trim() });
        styleLines = styleLines.map(function (e) {
            let temp = e.split(':');
            return '    ' + temp[0].trim() + ':' + temp[1].trim();
        });

        let temp = listOfClasses.join(',\n') + ' {\n';
        temp += styleLines.join(';\n') + ';\n';
        temp += '}\n';
        VARS.tempStyleSheetCode += temp;
    }

    // -- various CSS
    function addCSS() {
        // - CSS styles for hiding or highlighting the selected posts / element
        // - CSS styles for dialog panel
        let head, elStylesheet;
        let isNewCSS = true;

        if (VARS.cssID !== '') {
            // - Reset the existing Stylesheet
            elStylesheet = document.getElementById(VARS.cssID);
            if (elStylesheet) {
                elStylesheet.replaceChildren();
                isNewCSS = false;
            }
        }
        if (isNewCSS) {
            // - Create the new Stylesheet head + classnames
            VARS.cssID = generateRandomString().toUpperCase();
            elStylesheet = document.createElement('style');
            elStylesheet.setAttribute('type', 'text/css');
            elStylesheet.setAttribute('id', VARS.cssID);
            head = document.getElementsByTagName('head')[0];
            head.appendChild(elStylesheet);

            // - remember <element> attribute names (for other functions to use)
            VARS.hideAtt = generateRandomString(); // - the parent element - hides the nth level down element
            VARS.hideWithNoCaptionAtt = generateRandomString(); // - the element to hide - where there's no child element
            VARS.cssHideEl = generateRandomString(); // - the element to hide - where there's no child element
            VARS.cssHideNumberOfShares = generateRandomString(); // - hide "# shares" on posts.
            VARS.showAtt = generateRandomString(); // - for revealing hidden elements.
        }
        VARS.tempStyleSheetCode = ''; // reset temp CSS code.

        // -- override random class names - for testing purposes only.
        // VARS.hideAtt = 'cmfr-hide';
        // VARS.cssHideEl = 'cmfr-hide-element';
        // VARS.cssHideNumberOfShares = 'cmfr-hide-shares';


        // -- **** fix fb's bug in not "hiding" certain elements properly when scrolling
        addToSS('body > div[style*="position: absolute"], ' +
            'body > div[style*="position:absolute"]',
            'top: -1000000px !important;'
        );

        // -- hide the post
        // -- not using hidden post caption facility
        addToSS(
            `div[${VARS.hideAtt}]`,
            'display:none !important; max-height: 0 !important; height: 0 !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; border: 0 !important; overflow: hidden !important; opacity: 0 !important; pointer-events: none !important;'
        );

        // -- reveal the post
        // -- first one, inside a <details> element (showAtt's attribute not required)
        // -- second one, not inside a <details> element
        // -- not using hidden post caption facility
        addToSS(
            `details[${postAtt}][open] > div, ` +
            `details[${postAtt}][open] > span > div, ` + // -- usually aside components
            `div[${VARS.showAtt}]:not([id="fbcmf"])`,
            'display:block !important; height: auto !important; min-height: auto !important; max-height: 10000px; overflow: auto; margin-bottom:1rem !important; opacity: 1 !important; pointer-events: auto !important; ' +
            `border:3px dotted ${VARS.Options.CMF_BORDER_COLOUR} !important; border-radius:8px; padding:0.2rem 0.1rem 0.1rem 0.1rem;` // 4px
        );

        // -- summary element - list-style removes the twistie symbol
        // -- using the +/- symbols to open/close
        addToSS(
            `details[${postAtt}] > summary`,
            'cursor: pointer; list-style: none; ' +
            'position: relative; ' +
            'margin:1.5rem auto; padding:0.5rem 1rem; border-radius:0.55rem; width:85%; font-style:italic;' +
            ((VARS.Options.VERBOSITY_MESSAGE_COLOUR === '') ? '' : ` color: ${VARS.Options.VERBOSITY_MESSAGE_COLOUR}; `) +
            `background-color:${(VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR === '') ? masterKeyWords.defaults.VERBOSITY_MESSAGE_BG_COLOUR : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR};`
        );
        addToSS(
            `details[${postAtt}] > summary:hover`,
            'text-decoration: underline; background-color:white; color:black;'
        );
        // -- formatting of +/-
        addToSS(
            `details[${postAtt}] > summary::after`,
            'background: darkgrey; color: white; border-radius: 50%;' +
            'width: 24px; height: 24px; line-height: 20px;' +
            'font-size: 1rem; font-weight: bold; transform: translateY(-50%); text-align: center;' +
            'position: absolute; top: 1rem; right: 0.25rem;'
        );
        addToSS(
            `details[${postAtt}] > summary::after`,
            'content:"\\002B";' // "+"
        );
        addToSS(
            `details[${postAtt}][open] > summary::after`,
            'content: "\\2212";' // "-"
        );

        // -- reveal a hidden post
        addToSS(
            `details[${postAtt}][open]`,
            'margin-bottom: 1rem;'
        );
        addToSS(
            `details[${postAtt}][open] > summary`,
            'margin-bottom: 0.5rem;'
        );

        // -- hide a component (e.g. marketplace item)
        addToSS(
            `div[${VARS.hideWithNoCaptionAtt}],` +
            `span[${VARS.hideWithNoCaptionAtt}]`,
            'display: none;'
        );
        // -- show a component (e.g. marketplace item)
        addToSS(
            `div[${VARS.hideWithNoCaptionAtt}][${VARS.showAtt}], ` +
            `span[${VARS.hideWithNoCaptionAtt}][${VARS.showAtt}]`,
            'display: block;'
        );

        // - mini-caption (for gf + vf consecutive mode)
        addToSS(
            `h6[${postAttTab}]`,
            'border-radius: 0.55rem 0.55rem 0 0; width:75%; margin:0 auto; padding: 0.45rem 0.25rem; font-style:italic; text-align:center; font-weight:normal;' +
            ((VARS.Options.VERBOSITY_MESSAGE_COLOUR === '') ? '' : `  color: ${VARS.Options.VERBOSITY_MESSAGE_COLOUR}; `) +
            `background-color:${(VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR === '') ? masterKeyWords.defaults.VERBOSITY_MESSAGE_BG_COLOUR : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR}; `
        );


        // -- # shares
        addToSS(
            `[${VARS.cssHideNumberOfShares}]`,
            'display:none !important;'
        );

        // - dailog box CSS
        // --- dialog box; position + flex
        const userBorderColour = VARS.Options.CMF_BORDER_COLOUR || '';
        const defaultBorderColour = masterKeyWords.defaults.CMF_BORDER_COLOUR || '';
        const dialogBorderColour = (userBorderColour && userBorderColour !== defaultBorderColour) ? userBorderColour : 'var(--divider)';
        const tColour = 'var(--primary-text)';
        // - left / right done in fn addExtraCSS()
        addToSS(
            '.fb-cmf ',
            'position:fixed; top:0.15rem; bottom:0.15rem; display:flex; flex-direction:column; width: 100%; max-width:30rem; padding:0 1rem; z-index:5;' +
            'box-shadow: 0 12px 28px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1), inset 0 0 0 1px var(--shadow-inset);' +
            'border:1px solid ' + dialogBorderColour + '; border-radius:0.5rem; opacity:0; visibility:hidden; color:' + tColour + ';'
        );
        addToSS('.fb-cmf', 'background-color: var(--card-background);');

        addToSS(
            '.fb-cmf header',
            'display:flex; justify-content:space-between; direction:ltr;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-icon',
            'flex-grow:0; align-self:auto; width:75px; text-align:left; order:1;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-icon svg',
            'width:64px; height:64px; margin:2px 0;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-title',
            'flex-grow:2; align-self:auto; order:2;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-title .script-version',
            'font-size: 0.75rem; font-weight: normal;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-lang-1',
            'padding-top:1.25rem;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-lang-2',
            'padding-top:0.75rem;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-title > div',
            'font-size:1.35rem; font-weight: 700; text-align:center;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-title > small',
            'display:block; font-size:0.8rem; text-align:center;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-close',
            'flex-grow:0; align-self:auto; width:75px; text-align:right; padding: 1.5rem 0 0 0; order:3;'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-close button',
            'width: 2.25rem; height: 2.25rem; ' +
            'transition-property: color, fill, stroke; transition-timing-function: var(--fds-soft); transition-duration: var(--fds-fast);' +
            'cursor: pointer; background-color: transparent;' +
            'border-radius: 50%; border: none;' +
            'color: var(--secondary-icon);'
        );
        addToSS(
            '.fb-cmf header .fb-cmf-close button:hover',
            'background-color: var(--hover-overlay);'
        );

        // -- content
        addToSS(
            '.fb-cmf div.content',
            'flex:1; overflow: hidden auto; border:1px solid ' + dialogBorderColour + '; border-radius:0.5rem; color: var(--primary-text);'
        );
        addToSS(
            '.fb-cmf fieldset',
            'margin:0.5rem; padding:0.5rem; border-style: solid;'
        );
        addToSS(
            '.fb-cmf fieldset *',
            // 'font-size: calc(var(--body-font-size) * 0.9);'
            //'font-size: var(--body-font-size);'
            'font-size: 0.8125rem;'
        )
        addToSS(
            '.fb-cmf fieldset legend',
            'font-size: 0.95rem;' +
            'width: 95%;  padding: 0 0.5rem 0.125rem 0.5rem;' +
            'line-height: 2.5; ' +
            'border-width: 2px; border-style: solid; border-radius: 0.5rem 0.5rem 0 0 ;'
        );
        addToSS(
            '.fb-cmf fieldset legend:hover,' +
            '.fb-cmf fieldset label:hover',
            //'background-color: LightGrey; cursor: pointer;'
            'background-color: var(--hover-overlay); cursor: pointer;'
        );
        addToSS(
            '.fb-cmf fieldset.visible,' +
            '.fb-cmf fieldset.visible legend ',
            'border-color: ' + dialogBorderColour + ';'
        );
        addToSS(
            '.fb-cmf fieldset.hidden,' +
            '.fb-cmf fieldset.hidden legend ',
            'border-color: LightGrey;'
        );
        addToSS(
            '.fb-cmf fieldset.hidden *:not(legend) ',
            'display: none;'
        );
        addToSS(
            '.fb-cmf fieldset.visible legend::after',
            'content: "\\2212"; float:right;' // "-"
        )
        addToSS(
            '.fb-cmf fieldset.hidden legend::after',
            'content: "\\002B"; float:right;' // "+"
        )
        addToSS(
            '.fb-cmf fieldset label',
            'display:inline-block; padding:0.125rem 0; color: var(--primary-text); font-weight: normal; width:100%;'
        );
        addToSS(
            '.fb-cmf fieldset label input',
            'margin: 0 0.5rem 0 0.5rem; vertical-align:baseline;' // left & right margins for RTL & LTR text
        );
        addToSS(
            '.fb-cmf fieldset label[disabled]',
            'color:darkgrey;'
        );
        addToSS(
            '.fb-cmf fieldset textarea',
            'width:100%; height:12rem;'
        );
        addToSS(
            '.fb-cmf fieldset select',
            'border: 2px inset lightgray;' +
            'margin: 0 0.5rem 0 0.5rem; vertical-align:baseline;' // left & right margins for RTL & LTR text
        )
        addToSS(
            '.__fb-dark-mode .fb-cmf fieldset textarea,' +
            '.__fb-dark-mode .fb-cmf fieldset input[type="input"]' +
            '.__fb-dark-mode .fb-cmf fieldset select',
            'background-color:var(--comment-background); color:var(--primary-text);'
        );
        // -- footer - buttons + results
        addToSS(
            '.fb-cmf footer',
            'display: grid; justify-content: space-evenly; padding:1rem 0.25rem; text-align:center;'
        );
        addToSS(
            '.fb-cmf .buttons button',
            // 'margin-left: 1rem; margin-right:1rem;'
            'margin-left: 0.25rem; margin-right: 0.25rem;'
        );
        // -- footer - file input
        addToSS(
            '.fb-cmf .fileInput',
            'display:none;'
        );
        // -- footer - import results
        addToSS(
            '.fb-cmf .fileResults',
            'grid-column-start: 1; grid-column-end: 6; font-style:italic; margin-top: 1rem;'
        );
        // -- show dialog box (default is not to show)
        addToSS(
            `.fb-cmf[${VARS.showAtt}]`,
            'opacity:1; transform:scale(1); visibility:visible;'
        );
        // -- new window icon
        addToSS(
            `.${VARS.iconNewWindowClass}`,
            'width: 1rem; height: 1rem;'
        );
        // 'width: 1rem; height: 1rem; margin-left: 0.2rem; margin-right: 0.2rem;'
        addToSS(
            `.${VARS.iconNewWindowClass} a`,
            'width: 1rem; position: relative; display: inline-block;'
        );
        addToSS(
            `.${VARS.iconNewWindowClass} svg`,
            'position: absolute; top: -13.5px; stroke: rgb(101, 103, 107);'
        );

        // - save & apply the CSS
        elStylesheet.appendChild(document.createTextNode(VARS.tempStyleSheetCode));
        VARS.tempStyleSheetCode = '';
    }

    function addExtraCSS() {
        // - extra CSS styles
        // - fb can sometimes be a bit slow in loading certain parts of the site ...
        // - ... this function is called several ms later ...
        // - ... and when saving the options (via save button)

        // -- button location
        let cmfBtnLocation = masterKeyWords.defaults.CMF_BTN_OPTION;
        // -- dialog location
        let cmfDlgLocation = masterKeyWords.defaults.CMF_DIALOG_OPTION;
        // -- read in the settings
        if (VARS.Options.hasOwnProperty('CMF_BTN_OPTION')) {
            if (VARS.Options.CMF_BTN_OPTION.toString() !== '') {
                cmfBtnLocation = VARS.Options.CMF_BTN_OPTION;
            }
        }
        if (VARS.Options.hasOwnProperty('CMF_DIALOG_OPTION')) {
            if (VARS.Options.CMF_DIALOG_OPTION.toString() !== '') {
                cmfDlgLocation = VARS.Options.CMF_DIALOG_OPTION;
            }
        }
        cmfBtnLocation = cmfBtnLocation.toString();
        cmfDlgLocation = cmfDlgLocation.toString();

        // Grab the existing Stylesheet and amend it
        let elStylesheet = document.getElementById(VARS.cssID);
        let styles;

        VARS.tempStyleSheetCode = ''; // reset
        styles = '';

        // - button's location.
        if (cmfBtnLocation === '1') {
            // - top right
            if (document.querySelector('[role="banner"]')) {
                // - oldish FB structure has menu buttons across the top (changed for some users in Apr/May 2022)
                addToSS(
                    'div[role="banner"] > div:last-of-type div[role="navigation"]',
                    'margin-right: 42px;'
                );
            }
            styles = 'position:fixed; top:0.5rem; right:0.5rem; display:none;';
        }
        else if (cmfBtnLocation === '2') {
            // - disabled, use "Settings" in the user script menu.
            // - no css
            styles = 'display: none !important;';
        }
        else {
            // - cmfBtnLocation === "0" : bottom left
            // - has the buttons running down the side of the page (May 2022 ->).
            // styles = 'position:fixed; bottom:4.25rem; left:1.1rem; display:none;';
            styles = 'position: fixed; bottom: 1rem; left: 1rem; display:none; z-index: 999;'; // position
            styles += 'background: var(--secondary-button-background-floating); padding: 0.5rem; width: 3rem; height: 3rem; border: 0; border-radius: 1.5rem;'; // styles
            styles += 'box-shadow: 0 2px 4px var(--shadow-1), 0 12px 28px var(--shadow-2);'; // drop shadow
        }
        if (styles.length > 0) {
            addToSS(
                '.fb-cmf-toggle',
                styles
            );
            // - btn - basic styling.
            // addToSS('.fb-cmf-toggle', 'border-radius:0.3rem;');
            addToSS('.fb-cmf-toggle svg', 'height: 95%; aspect-ratio : 1 / 1;');
            addToSS('.fb-cmf-toggle:hover', 'cursor:pointer;');
            // - dialog box's display
            addToSS(`.fb-cmf-toggle[${VARS.showAtt}]`, 'display:block;');
        }
        // - dialog box's left/right + animated open/close behaviour
        if (cmfDlgLocation === '1') {
            // - right
            styles = 'right:0.35rem; margin-left:1rem; transform:scale(0);transform-origin:top right;';
        }
        else {
            // - left (cmfDlgLocation === '0')
            styles = 'left:4.25rem; margin-right:1rem; transform:scale(0);transform-origin:center center;';
        }
        addToSS(
            '.fb-cmf',
            styles +
            'transition:transform .45s ease, opacity .25s ease, visibility 1s ease;'
        );
        addToSS(
            'div#fbcmf footer > button',
            'font-family: inherit; cursor: pointer;' +
            'height: var(--button-height-medium); padding: 0 var(--button-padding-horizontal-medium);' +
            'border: none; border-radius: var(--button-corner-radius);' +
            'background-color: var(--secondary-button-background);' +
            '-webkit-transition: background-color 0.2s linear; transition: background-color 0.2s linear;' +
            'font-size: .9375rem; font-weight: 600;' +
            'color: var(--secondary-button-text);'
        );
        addToSS(
            '#fbcmf footer > button:hover',
            'font-family: inherit;' +
            'background-color: var(--primary-button-background);' +
            'color: var(--primary-button-text);'
        );
        if (VARS.tempStyleSheetCode.length > 0) {
            elStylesheet.appendChild(document.createTextNode(VARS.tempStyleSheetCode));
            VARS.tempStyleSheetCode = '';
        }
    }

    // -- get the user's settings ...
    async function getUserOptions() {
        // -- read in the saved data, else set defaults.
        let changed = false;
        // - reset Options
        VARS.Options = new Object();
        VARS.optionsReady = false;

        // - has the user previously saved options?
        // -- if yes, the update Options
        let result = await get(DBVARS.DBKey, DBVARS.ostore).then((values) => {
            if (values) {
                // -- has data
                VARS.Options = JSON.parse(values);
                return 1;
            }
            else {
                // -- no data (first time)
                return 0;
            }
        }).catch((err) => {
            console.info(`${log}getuserOptions() > get() - Error:`, err);
        });

        if (!VARS.Options.hasOwnProperty('CMF_DIALOG_LANGUAGE')) {
            const lang = document.head.parentNode.lang || 'en';
            VARS.language = masterKeyWords.translations.hasOwnProperty(lang) ? lang : 'en';
            //console.info(log + 'getUserOptions();  .. first time .. :', lang, VARS.language);
        }
        else {
            const uiLang = VARS.Options.CMF_DIALOG_LANGUAGE || 'en';
            const lang = document.head.parentNode.lang || 'en';
            if (masterKeyWords.translations.hasOwnProperty(uiLang)) {
                VARS.language = uiLang;
            }
            else if (masterKeyWords.translations.hasOwnProperty(lang)) {
                VARS.language = lang;
            }
            else {
                VARS.language = lang;
            }
            //console.info(log + 'getUserOptions();  language:', uiLang, lang, VARS.language);
            //console.info(log + 'getUserOptions(); masterKeywords.transations:', masterKeyWords.translations);
        }
        VARS.Options.CMF_DIALOG_LANGUAGE = VARS.language;

        cloneKeywords();

        // -- check that all variables exists ... if not, assign them default values..
        // -- Sponsored (always enabled)
        if (!VARS.Options.hasOwnProperty('NF_SPONSORED')) {
            VARS.Options.NF_SPONSORED = masterKeyWords.defaults['SPONSORED'];
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('GF_SPONSORED')) {
            VARS.Options.GF_SPONSORED = masterKeyWords.defaults['SPONSORED'];
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VF_SPONSORED')) {
            VARS.Options.VF_SPONSORED = masterKeyWords.defaults['SPONSORED'];
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('MP_SPONSORED')) {
            VARS.Options.MP_SPONSORED = masterKeyWords.defaults['SPONSORED'];
            changed = true;
        }

        // -- which option has been enabled / disabled?
        VARS.hideAnInfoBox = false;
        for (const key in KeyWords) {
            if (key.slice(0, 3) === 'NF_' && key.slice(0, 10) !== 'NF_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = masterKeyWords.defaults[key];
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'GF_' && key.slice(0, 10) !== 'GF_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = masterKeyWords.defaults[key];
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'VF_' && key.slice(0, 10) !== 'VF_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = masterKeyWords.defaults[key];
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'MP_' && key.slice(0, 10) !== 'MP_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = masterKeyWords.defaults[key];
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'PP_' && key.slice(0, 10) !== 'PP_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = masterKeyWords.defaults[key];
                    changed = true;
                }
            }
            else if (key.slice(0, 10) === 'OTHER_INFO') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = masterKeyWords.defaults[key];
                    changed = true;
                }
                if (VARS.Options[key]) {
                    VARS.hideAnInfoBox = true;
                }
            }
        }

        // -- all other options.
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_ENABLED')) {
            VARS.Options.NF_BLOCKED_ENABLED = masterKeyWords.defaults.NF_BLOCKED_ENABLED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_FEED')) {
            VARS.Options.NF_BLOCKED_FEED = masterKeyWords.defaults.NF_BLOCKED_FEED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_TEXT')) {
            VARS.Options.NF_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_ENABLED')) {
            VARS.Options.GF_BLOCKED_ENABLED = masterKeyWords.defaults.GF_BLOCKED_ENABLED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_FEED')) {
            VARS.Options.GF_BLOCKED_FEED = masterKeyWords.defaults.GF_BLOCKED_FEED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_TEXT')) {
            VARS.Options.GF_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_ENABLED')) {
            VARS.Options.VF_BLOCKED_ENABLED = masterKeyWords.defaults.VF_BLOCKED_ENABLED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_FEED')) {
            VARS.Options.VF_BLOCKED_FEED = masterKeyWords.defaults.VF_BLOCKED_FEED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_TEXT')) {
            VARS.Options.VF_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('MP_BLOCKED_ENABLED')) {
            VARS.Options.MP_BLOCKED_ENABLED = masterKeyWords.defaults.MP_BLOCKED_ENABLED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('MP_BLOCKED_FEED')) {
            VARS.Options.MP_BLOCKED_FEED = masterKeyWords.defaults.MP_BLOCKED_FEED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('MP_BLOCKED_TEXT')) {
            VARS.Options.MP_BLOCKED_TEXT = '';
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('MP_BLOCKED_TEXT_DESCRIPTION')) {
            VARS.Options.MP_BLOCKED_TEXT_DESCRIPTION = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('PP_BLOCKED_ENABLED')) {
            VARS.Options.PP_BLOCKED_ENABLED = masterKeyWords.defaults.PP_BLOCKED_ENABLED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('PP_BLOCKED_FEED')) {
            VARS.Options.PP_BLOCKED_FEED = masterKeyWords.defaults.PP_BLOCKED_FEED;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('PP_BLOCKED_TEXT')) {
            VARS.Options.PP_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('VERBOSITY_LEVEL')) {
            VARS.Options.VERBOSITY_LEVEL = masterKeyWords.defaults.DLG_VERBOSITY;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VERBOSITY_MESSAGE_COLOUR')) {
            VARS.Options.VERBOSITY_MESSAGE_COLOUR = '';
            changed = true;
        }
        // - nb: test conditions, undefined needs to be tested before using .toString(), otherwise JS complains...
        if (
            (!VARS.Options.hasOwnProperty('VERBOSITY_MESSAGE_BG_COLOUR')) ||
            (VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR === undefined) ||
            (VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR.toString() === '')
        ) {
            VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR = masterKeyWords.defaults.VERBOSITY_MESSAGE_BG_COLOUR;
            changed = true;
        }
        if (
            (!VARS.Options.hasOwnProperty('VERBOSITY_DEBUG')) ||
            (VARS.Options.VERBOSITY_DEBUG === undefined) ||
            (VARS.Options.VERBOSITY_DEBUG.toString() === '')
        ) {
            VARS.Options.VERBOSITY_DEBUG = masterKeyWords.defaults.VERBOSITY_DEBUG;
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('CMF_BTN_OPTION')) {
            VARS.Options.CMF_BTN_OPTION = masterKeyWords.defaults.CMF_BTN_OPTION;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('CMF_DIALOG_OPTION')) {
            VARS.Options.CMF_DIALOG_OPTION = masterKeyWords.defaults.CMF_DIALOG_OPTION;
            changed = true;
        }
        if (
            (!VARS.Options.hasOwnProperty('CMF_BORDER_COLOUR')) ||
            (VARS.Options.CMF_BORDER_COLOUR.toString() === undefined) ||
            (VARS.Options.CMF_BORDER_COLOUR.toString() === '')
        ) {
            VARS.Options.CMF_BORDER_COLOUR = masterKeyWords.defaults.CMF_BORDER_COLOUR;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('NF_LIKES_MAXIMUM_COUNT')) {
            VARS.Options.NF_LIKES_MAXIMUM_COUNT = '';
            changed = true;
        }



        if (changed) {
            // - save the changes ...
            // -- usually happen if first time setup or change in Options' variables.
            let result = await set(DBVARS.DBKey, JSON.stringify(VARS.Options), DBVARS.ostore).then(() => {
                return true;
            }).catch((err) => {
                console.info(`${log}getUserOptions() > changed > saving - failed, Error: ${err}`);
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

        // split the blocks of texts entries into arrays and translate to lowercase.
        VARS.Filters = new Object();

        // -- original list of text for each feed
        let nfBlockedText = '';
        let gfBlockedText = '';
        let vfBlockedText = '';
        let ppBlockedText = '';
        let mpBlockedText = '';
        let mpBlockedTextDesc = '';
        if (VARS.Options.NF_BLOCKED_ENABLED === true) {
            nfBlockedText = VARS.Options.NF_BLOCKED_TEXT;
        }
        if (VARS.Options.GF_BLOCKED_ENABLED === true) {
            gfBlockedText = VARS.Options.GF_BLOCKED_TEXT;
        }
        if (VARS.Options.VF_BLOCKED_ENABLED === true) {
            vfBlockedText = VARS.Options.VF_BLOCKED_TEXT;
        }
        if (VARS.Options.MP_BLOCKED_ENABLED === true) {
            mpBlockedText = VARS.Options.MP_BLOCKED_TEXT;
            mpBlockedTextDesc = VARS.Options.MP_BLOCKED_TEXT_DESCRIPTION;
        }
        if (VARS.Options.PP_BLOCKED_ENABLED === true) {
            ppBlockedText = VARS.Options.PP_BLOCKED_TEXT;
        }

        // -- final list of text for each feed
        let nfBlockedTextList = '';
        let gfBlockedTextList = '';
        let vfBlockedTextList = '';
        let ppBlockedTextList = '';
        let mpBlockedTextList = '';
        let mpBlockedTextDescList = '';

        // -- ##_BLOCKED_FEED[X] : 0 = NF, 1 = GF, 2 = VF.
        // -- rule: both feeds must be enabled before appending text list from one feed to another text list
        // -- news feed:
        if (VARS.Options.NF_BLOCKED_ENABLED) {
            nfBlockedTextList = nfBlockedText; // final list
            // -- add gf to nf
            if (VARS.Options.GF_BLOCKED_ENABLED && VARS.Options.GF_BLOCKED_FEED[0] === '1') {
                if (gfBlockedText.length > 0) {
                    nfBlockedTextList += ((nfBlockedTextList.length > 0) ? VARS.SEP : '') + gfBlockedText;
                }
            }
            // -- add vf to nf
            if (VARS.Options.VF_BLOCKED_ENABLED && VARS.Options.VF_BLOCKED_FEED[0] === '1') {
                if (vfBlockedText.length > 0) {
                    nfBlockedTextList += ((nfBlockedTextList.length > 0) ? VARS.SEP : '') + vfBlockedText;
                }
            }
        }
        // -- groups feed:
        if (VARS.Options.GF_BLOCKED_ENABLED) {
            gfBlockedTextList = gfBlockedText; // final list
            // -- add nf to gf
            if (VARS.Options.NF_BLOCKED_ENABLED && VARS.Options.NF_BLOCKED_FEED[1] === '1') {
                if (nfBlockedText.length > 0) {
                    gfBlockedTextList += ((gfBlockedTextList.length > 0) ? VARS.SEP : '') + nfBlockedText;
                }
            }
            // -- add vf to gf
            if (VARS.Options.VF_BLOCKED_ENABLED && VARS.Options.VF_BLOCKED_FEED[1] === '1') {
                if (vfBlockedText.length > 0) {
                    gfBlockedTextList += ((gfBlockedTextList.length > 0) ? VARS.SEP : '') + vfBlockedText;
                }
            }
        }
        // -- videos feed:
        if (VARS.Options.VF_BLOCKED_ENABLED) {
            vfBlockedTextList = vfBlockedText; // final list
            // -- add nf to vf
            if (VARS.Options.NF_BLOCKED_ENABLED && VARS.Options.NF_BLOCKED_FEED[2] === '1') {
                if (nfBlockedText.length > 0) {
                    vfBlockedTextList += ((vfBlockedTextList.length > 0) ? VARS.SEP : '') + nfBlockedText;
                }
            }
            // -- add gf to vf
            if (VARS.Options.GF_BLOCKED_ENABLED && VARS.Options.GF_BLOCKED_FEED[2] === '1') {
                if (gfBlockedText.length > 0) {
                    vfBlockedTextList += ((vfBlockedTextList.length > 0) ? VARS.SEP : '') + gfBlockedText;
                }
            }
        }

        // -- market place (stand-alone):
        if (VARS.Options.MP_BLOCKED_ENABLED) {
            mpBlockedTextList = mpBlockedText;
            mpBlockedTextDescList = mpBlockedTextDesc;
        }

        // -- profile page (stand-alone):
        if (VARS.Options.PP_BLOCKED_ENABLED) {
            ppBlockedTextList = ppBlockedText;
        }

        // -- populate the VARS.Filters.###...
        // -- news feed:
        VARS.Filters.NF_BLOCKED_TEXT = [];
        VARS.Filters.NF_BLOCKED_TEXT_LC = [];
        VARS.Filters.NF_BLOCKED_ENABLED = false;
        if (VARS.Options.NF_BLOCKED_ENABLED && nfBlockedTextList.length > 0) {
            VARS.Filters.NF_BLOCKED_ENABLED = true;
            VARS.Filters.NF_BLOCKED_TEXT = nfBlockedTextList.split(VARS.SEP);
            VARS.Filters.NF_BLOCKED_TEXT_LC = VARS.Filters.NF_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }
        // -- groups feed:
        VARS.Filters.GF_BLOCKED_TEXT = [];
        VARS.Filters.GF_BLOCKED_TEXT_LC = [];
        VARS.Filters.GF_BLOCKED_ENABLED = false;
        if (VARS.Options.GF_BLOCKED_ENABLED && gfBlockedTextList.length > 0) {
            VARS.Filters.GF_BLOCKED_ENABLED = true;
            VARS.Filters.GF_BLOCKED_TEXT = gfBlockedTextList.split(VARS.SEP);
            VARS.Filters.GF_BLOCKED_TEXT_LC = VARS.Filters.GF_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }
        // -- watch videos feed
        VARS.Filters.VF_BLOCKED_TEXT = [];
        VARS.Filters.VF_BLOCKED_TEXT_LC = [];
        VARS.Filters.VF_BLOCKED_ENABLED = false;
        if (VARS.Options.VF_BLOCKED_ENABLED && vfBlockedTextList.length > 0) {
            VARS.Filters.VF_BLOCKED_ENABLED = true;
            VARS.Filters.VF_BLOCKED_TEXT = vfBlockedTextList.split(VARS.SEP);
            VARS.Filters.VF_BLOCKED_TEXT_LC = VARS.Filters.VF_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }
        // -- marketplace  feed
        VARS.Filters.MP_BLOCKED_TEXT = [];
        VARS.Filters.MP_BLOCKED_TEXT_LC = [];
        VARS.Filters.MP_BLOCKED_TEXT_DESCRIPTION = [];
        VARS.Filters.MP_BLOCKED_TEXT_DESCRIPTION_LC = [];
        VARS.Filters.MP_BLOCKED_ENABLED = false;
        if (VARS.Options.MP_BLOCKED_ENABLED && ((mpBlockedTextList.length > 0) || (mpBlockedTextDescList.length > 0))) {
            VARS.Filters.MP_BLOCKED_ENABLED = true;
            // -- prices ::
            VARS.Filters.MP_BLOCKED_TEXT = mpBlockedTextList.split(VARS.SEP);
            VARS.Filters.MP_BLOCKED_TEXT_LC = VARS.Filters.MP_BLOCKED_TEXT.map(btext => btext.toLowerCase());
            // -- description ::
            VARS.Filters.MP_BLOCKED_TEXT_DESCRIPTION = mpBlockedTextDescList.split(VARS.SEP);
            VARS.Filters.MP_BLOCKED_TEXT_DESCRIPTION_LC = VARS.Filters.MP_BLOCKED_TEXT_DESCRIPTION.map(btext => btext.toLowerCase());
        }

        // -- profile page feed
        VARS.Filters.PP_BLOCKED_TEXT = [];
        VARS.Filters.PP_BLOCKED_TEXT_LC = [];
        VARS.Filters.PP_BLOCKED_ENABLED = false;
        if (VARS.Options.PP_BLOCKED_ENABLED && ppBlockedTextList.length > 0) {
            VARS.Filters.PP_BLOCKED_ENABLED = true;
            VARS.Filters.PP_BLOCKED_TEXT = ppBlockedTextList.split(VARS.SEP);
            VARS.Filters.PP_BLOCKED_TEXT_LC = VARS.Filters.PP_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }

        // console.info(log + 'getUserOptions() - Options:', VARS.Options);
        // console.info(log + 'getUserOptions() - Filters:', VARS.Filters);

        VARS.optionsReady = true;
    }

    // -- run some functions now - not dependent on HEAD being available.
    //    (includes getUserOptions())
    setLanguageAndOptions();

    // -- dailog box for displaying options (called in runMO)
    function buildMoppingDialog() {
        // build the dialog box component ...
        // -- BODY must be available for use.
        // -- used for displaying/getting/setting the various options

        function createSingleCB(cbName, cbReadOnly = false) {
            // -- create toggle style checkboxes
            const CBTYPE = 'T'; // checkbox, single value, Toggle style
            let cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.setAttribute('cbType', CBTYPE);
            cb.name = cbName;
            cb.value = cbName;
            cb.checked = VARS.Options[cbName];
            let label = document.createElement('label');
            if (cbReadOnly) {
                cb.checked = true;
                cb.disabled = true;
                label.setAttribute('disabled', 'disabled');
            }
            label.appendChild(cb);
            if (KeyWords[cbName]) {
                if (Array.isArray(KeyWords[cbName]) === false) {
                    label.appendChild(document.createTextNode(KeyWords[cbName]));
                }
                else {
                    label.appendChild(document.createTextNode(Array.from(KeyWords[cbName]).join(', ')));
                }
            }
            else if (['NF_SPONSORED', 'GF_SPONSORED', 'VF_SPONSORED', 'MP_SPONSORED'].includes(cbName)) {
                label.appendChild(document.createTextNode(KeyWords.SPONSORED));
            }
            else {
                label.appendChild(document.createTextNode(cbName));
            }
            let div = document.createElement('div');
            div.appendChild(label);
            return div;
        }

        function createMultipeCBs(cbName, cbReadOnlyIdx = -1) {
            // -- create multiple values checkboxes
            const CBTYPE = 'M'; // checkbox, Multiple values
            let arrElements = [];
            for (let i = 0; i < KeyWords[cbName].length; i++) {
                let div = document.createElement('div');
                let cbKeyWord = KeyWords[cbName][i];
                let cb = document.createElement('input');
                cb.type = 'checkbox';
                cb.setAttribute('cbType', CBTYPE);
                cb.name = cbName;
                cb.value = i;
                cb.checked = VARS.Options[cbName][i] === '1';
                let label = document.createElement('label');
                if (i === cbReadOnlyIdx) {
                    cb.checked = true;
                    cb.disabled = true;
                    label.setAttribute('disabled', 'disabled');
                }
                label.appendChild(cb);
                label.appendChild(document.createTextNode(cbKeyWord));
                div.appendChild(label);
                arrElements.push(div);
            }
            let br = document.createElement('br');
            arrElements.push(br);
            return arrElements;
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
        function createSelectLanguage() {
            let div = document.createElement('div');
            let select = getLanguagesComponent();
            let label = document.createElement('label');
            label.appendChild(document.createTextNode(`${KeyWords.CMF_DIALOG_LANGUAGE_LABEL}:`));
            label.appendChild(document.createElement('br'));
            label.appendChild(select);
            div.appendChild(label);
            return div;
        }

        function createCheckboxAndInput(cbName, iName) {
            // -- checkbox with input box.
            // -- no read-only attributes
            // -- no multiple keyword values.

            // -- create checkbox first.
            const CBTYPE = 'T';
            let cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.setAttribute('cbType', CBTYPE);
            cb.name = cbName;
            cb.value = cbName;
            cb.checked = VARS.Options[cbName];

            // -- create input box
            let input = document.createElement('input');
            input.type = 'text';
            input.name = iName;
            input.value = VARS.Options[iName];
            input.placeholder = '1000';
            input.size = 6;
            input.addEventListener('input', checkInputNumber, false);

            // -- wrap checkbox and input inside a label
            let label = document.createElement('label');
            label.appendChild(cb);
            label.appendChild(document.createTextNode(KeyWords[cbName] + ': '));
            label.appendChild(input);

            // -- wrap inside a div container ..
            let div = document.createElement('div');
            div.appendChild(label);
            return div;
        }

        function checkInputNumber(event) {
            // -- accept numbers/digits only.
            const el = event.target;
            if (el.value === '') {
                return true;
            }
            const digitsValues = el.value.replace(/\D/g, '');
            el.value = digitsValues.length > 0 ? parseInt(digitsValues) : '';
        }

        function getLanguagesComponent() {
            const elSelect = document.createElement('select');
            elSelect.name = 'CMF_DIALOG_LANGUAGE';
            // let elOption = document.createElement('option');
            // elOption.value = 'default';
            // elOption.textContent = masterKeyWords.translations[VARS.language].CMF_DIALOG_LANGUAGE_DEFAULT;
            // elSelect.appendChild(elOption);
            Object.keys(masterKeyWords.translations).forEach(languageCode => {
                const elOption = document.createElement('option');
                elOption.value = languageCode;
                elOption.textContent = masterKeyWords.translations[languageCode].CMF_DIALOG_LANGUAGE;
                if (languageCode === VARS.language) {
                    elOption.setAttribute('selected', '');
                }
                elSelect.appendChild(elOption);
            })

            return elSelect;
        }

        function createDialog(languageChanged = false) {
            let dlg, hdr, hdr1, hdr2, hdr3, htxt, stxt, btn, cnt, fs, l, s, ta, div, footer;

            if (languageChanged) {
                VARS.language = VARS.Options.CMF_DIALOG_LANGUAGE;
                cloneKeywords();
            }

            if (languageChanged === false) {
                // -- new dialog-box

                // -- wrapper
                dlg = document.createElement('div');
                dlg.id = 'fbcmf';
                dlg.className = 'fb-cmf';
                // class "show" reveals the dialog.
                // -- header (logo + title + close button)
                hdr = document.createElement('header');
                hdr1 = document.createElement('div');
                hdr1.className = 'fb-cmf-icon';
                hdr1.innerHTML = VARS.logoHTML;

                hdr2 = document.createElement('div');
                hdr2.className = 'fb-cmf-title';

                hdr3 = document.createElement('div');
                hdr3.className = 'fb-cmf-close';
                btn = document.createElement('button');
                btn.type = 'button';
                btn.innerHTML = VARS.iconClose;
                const closeLabel = Array.isArray(KeyWords.DLG_BUTTONS) ? KeyWords.DLG_BUTTONS[1] : 'Close';
                btn.setAttribute('aria-label', closeLabel);
                btn.title = closeLabel;
                btn.addEventListener('click', toggleDialog, false);
                hdr3.appendChild(btn);

                hdr.appendChild(hdr1);
                hdr.appendChild(hdr2);
                hdr.appendChild(hdr3);
                dlg.appendChild(hdr);

                // content container
                cnt = document.createElement('div');
                cnt.classList.add('content');

            }
            else {
                // -- existing dialog-box
                // -- UI's language has changed - reset some descriptive text
                dlg = document.getElementById('fbcmf');
                hdr = dlg.querySelector('header');
                hdr2 = hdr.querySelector('.fb-cmf-title');
                while (hdr2.firstChild) {
                    hdr2.removeChild(hdr2.firstChild);
                }
                hdr2.classList.remove('fb-cmf-lang-1');
                hdr2.classList.remove('fb-cmf-lang-2');

                cnt = dlg.querySelector('.content');
                while (cnt.firstChild) {
                    cnt.removeChild(cnt.firstChild);
                }
            }
            dlg.setAttribute('dir', masterKeyWords.translations[VARS.language].LANGUAGE_DIRECTION);

            // -- header - title block
            htxt = document.createElement('div');
            htxt.textContent = masterKeyWords.translations.en.DLG_TITLE;
            s = document.createElement('small');
            s.className = 'script-version';
            s.appendChild(document.createTextNode(` (${SCRIPT_VERSION})`));
            htxt.appendChild(s);
            hdr2.appendChild(htxt);
            if (VARS.language !== 'en') {
                stxt = document.createElement('small');
                stxt.textContent = `(${KeyWords.DLG_TITLE})`;
                hdr2.appendChild(stxt);
                hdr2.classList.add('fb-cmf-lang-2');
            }
            else {
                hdr2.classList.add('fb-cmf-lang-1');
            }

            // -- News Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_NF;
            fs.appendChild(l);
            fs.appendChild(createSingleCB('NF_SPONSORED', false)); // -- changed to false (Dec 2023)
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'NF_') {
                    if (key.slice(0, 8) === 'NF_BLOCK') {
                        continue;
                    }
                    if (key.slice(0, 8) === 'NF_LIKES') {
                        if (key === 'NF_LIKES_MAXIMUM') {
                            fs.appendChild(createCheckboxAndInput(key, 'NF_LIKES_MAXIMUM_COUNT'));
                        }
                    }
                    else {
                        fs.appendChild(createSingleCB(key));
                    }
                }
            }

            // -- Keywords to block - News Feed
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE + ":";
            fs.appendChild(l);

            createMultipeCBs('NF_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('NF_BLOCKED_ENABLED'));
            fs.appendChild(createSingleCB('NF_BLOCKED_RE'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'NF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.NF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- Groups Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_GF;
            fs.appendChild(l);
            fs.appendChild(createSingleCB('GF_SPONSORED', false)); // -- changed to false (Dec 2023)
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'GF_' && key.slice(0, 8) !== 'GF_BLOCK') {
                    fs.appendChild(createSingleCB(key));
                }
            }

            // -- Keywords to block - Groups Feed
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE + ':';
            fs.appendChild(l);

            createMultipeCBs('GF_BLOCKED_FEED', 1).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('GF_BLOCKED_ENABLED'));
            fs.appendChild(createSingleCB('GF_BLOCKED_RE'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'GF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.GF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- MarketPlace option(s)
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_MP;
            fs.appendChild(l);
            fs.appendChild(createSingleCB('MP_SPONSORED', false)); // -- changed to false (Dec 2023)

            // -- Keywords to block - Marketplace Feed
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE + ':';
            fs.appendChild(l);

            createMultipeCBs('MP_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });
            // -- 2 x textarea boxes; one for prices and one for description
            fs.appendChild(createSingleCB('MP_BLOCKED_ENABLED'));
            fs.appendChild(createSingleCB('MP_BLOCKED_RE'));
            l = document.createElement('strong');
            l.textContent = 'Prices: ';
            fs.appendChild(l);
            fs.appendChild(document.createElement('br'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'MP_BLOCKED_TEXT';
            ta.textContent = VARS.Options.MP_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            fs.appendChild(document.createElement('br'));
            fs.appendChild(document.createElement('br'));

            l = document.createElement('strong');
            l.textContent = 'Description: ';
            fs.appendChild(l);
            fs.appendChild(document.createElement('br'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'MP_BLOCKED_TEXT_DESCRIPTION';
            ta.textContent = VARS.Options.MP_BLOCKED_TEXT_DESCRIPTION.split(VARS.SEP).join('\n');
            fs.appendChild(ta);

            cnt.appendChild(fs);


            // -- Watch Videos Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VF;
            fs.appendChild(l);
            fs.appendChild(createSingleCB('VF_SPONSORED', false)); // -- changed to false (Dec 2023)
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'VF_' && key.slice(0, 8) !== 'VF_BLOCK') {
                    fs.appendChild(createSingleCB(key));
                }
            }

            // -- Keywords to block - Watch Videos Feed
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE + ':';
            fs.appendChild(l);

            createMultipeCBs('VF_BLOCKED_FEED', 2).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('VF_BLOCKED_ENABLED'));
            fs.appendChild(createSingleCB('VF_BLOCKED_RE'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'VF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.VF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);


            // -- Profile Page feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_PP;
            fs.appendChild(l);
            // fs.appendChild(createSingleCB('PP_SPONSORED', false));
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'PP_' && key.slice(0, 8) !== 'PP_BLOCK') {
                    fs.appendChild(createSingleCB(key));
                }
            }

            // -- Keywords to block - Profile page
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE + ':';
            fs.appendChild(l);

            createMultipeCBs('PP_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('PP_BLOCKED_ENABLED'));
            fs.appendChild(createSingleCB('PP_BLOCKED_RE'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'PP_BLOCKED_TEXT';
            ta.textContent = VARS.Options.PP_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);


            // -- Other items options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_OTHER;
            fs.appendChild(l);
            for (const key in KeyWords) {
                if (key.slice(0, 10) === 'OTHER_INFO') {
                    fs.appendChild(createSingleCB(key));
                }
            }
            cnt.appendChild(fs);

            // -- Reels
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.REELS_TITLE;
            fs.appendChild(l);
            fs.appendChild(createSingleCB('REELS_CONTROLS'), false);
            fs.appendChild(l);
            fs.appendChild(createSingleCB('REELS_DISABLE_LOOPING'), false);
            cnt.appendChild(fs);

            // -- Verbosity
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VERBOSITY;
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.DLG_VERBOSITY_CAPTION}:`));
            fs.appendChild(s);
            fs.appendChild(createRB('VERBOSITY_LEVEL', '0', `${KeyWords.VERBOSITY_MESSAGE[0]}`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '1', `${KeyWords.VERBOSITY_MESSAGE[1]}______`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '2', `${KeyWords.VERBOSITY_MESSAGE[3]}`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('VERBOSITY_MESSAGE_COLOUR', `${KeyWords.VERBOSITY_MESSAGE_COLOUR}:`));
            fs.appendChild(createInput('VERBOSITY_MESSAGE_BG_COLOUR', `${KeyWords.VERBOSITY_MESSAGE_BG_COLOUR}:`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createSingleCB('VERBOSITY_DEBUG'));
            cnt.appendChild(fs);

            // -- cmf customisations
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.CMF_CUSTOMISATIONS;
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.CMF_BTN_LOCATION}:`));
            fs.appendChild(s);
            let len = KeyWords.CMF_BTN_OPTION.length;
            for (let i = 0; i < len; i++) {
                fs.appendChild(createRB('CMF_BTN_OPTION', i.toString(), KeyWords.CMF_BTN_OPTION[i]));
            }
            fs.appendChild(document.createElement('br'));
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.CMF_DIALOG_LOCATION}:`));
            fs.appendChild(s);
            fs.appendChild(createRB('CMF_DIALOG_OPTION', '0', KeyWords.CMF_DIALOG_OPTION[0]));
            fs.appendChild(createRB('CMF_DIALOG_OPTION', '1', KeyWords.CMF_DIALOG_OPTION[1]));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('CMF_BORDER_COLOUR', `${KeyWords.CMF_BORDER_COLOUR}:`));

            // - ui language
            // fs.appendChild(document.createElement('br'));
            // s = document.createElement('span');
            // s.appendChild(document.createTextNode(`${KeyWords.CMF_DIALOG_LANGUAGE_LABEL}:`));
            // fs.appendChild(s);
            // fs.appendChild(document.createElement('br'));
            // fs.appendChild(getLanguagesComponent());
            // cnt.appendChild(fs);

            fs.appendChild(document.createElement('br'));
            fs.appendChild(createSelectLanguage());
            cnt.appendChild(fs);


            // -- tips
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_TIPS;
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(KeyWords.DLG_TIPS_CONTENT));
            fs.appendChild(s);
            cnt.appendChild(fs);

            if (languageChanged === false) {

                dlg.appendChild(cnt);

                // -- Actions (buttons) + status
                footer = document.createElement('footer');

                const buttonDefinitions = [
                    { id: 'BTNSave', text: KeyWords.DLG_BUTTONS[0], handler: saveUserOptions },
                    { id: 'BTNExport', text: KeyWords.DLG_BUTTONS[2], handler: exportUserOptions },
                    { id: 'BTNImport', text: KeyWords.DLG_BUTTONS[3], handler: null },
                    { id: 'BTNReset', text: KeyWords.DLG_BUTTONS[4], handler: resetUserOptions }
                ];

                buttonDefinitions.forEach(def => {
                    const buttonEl = document.createElement('button');
                    buttonEl.type = 'button';
                    buttonEl.setAttribute('id', def.id);
                    buttonEl.textContent = def.text;
                    if (typeof def.handler === 'function') {
                        buttonEl.addEventListener('click', def.handler, false);
                    }
                    footer.appendChild(buttonEl);
                });

                // -- file input field is hidden, but triggered by the Import button.
                const fileImport = document.createElement('input');
                fileImport.setAttribute('type', 'file');
                fileImport.setAttribute('id', 'FI' + postAtt);
                fileImport.classList.add('fileInput');
                footer.appendChild(fileImport);
                // -- save/export/import/reset status/results
                div = document.createElement('div');
                div.classList.add('fileResults');
                div.innerHTML = '&nbsp;';
                footer.appendChild(div);

                dlg.appendChild(footer);

                document.body.appendChild(dlg);

                // -- add event listeners to the import button and file input field
                const fileInput = document.getElementById('FI' + postAtt);
                fileInput.addEventListener('change', importUserOptions, false);
                const btnImport = document.getElementById('BTNImport');
                btnImport.addEventListener('click', () => {
                    fileInput.click();
                }, false);
            }
            else {
                // -- language changed
                const footer = dlg.querySelector('footer');
                let btn = footer.querySelector('#BTNSave');
                btn.textContent = KeyWords.DLG_BUTTONS[0];
                btn = footer.querySelector('#BTNExport');
                btn.textContent = KeyWords.DLG_BUTTONS[2];
                btn = footer.querySelector('#BTNImport');
                btn.textContent = KeyWords.DLG_BUTTONS[3];
                btn = footer.querySelector('#BTNReset');
                btn.textContent = KeyWords.DLG_BUTTONS[4];
                addLegendEvents();
            }
        }

        function updateDialog() {
            let content = document.getElementById('fbcmf').querySelector('.content');
            if (content) {
                // -- toggle checkboxes
                let cbs = Array.from(content.querySelectorAll('input[type="checkbox"][cbtype="T"]'));
                cbs.forEach(cb => {
                    if (VARS.Options.hasOwnProperty(cb.name)) {
                        cb.checked = VARS.Options[cb.name];
                    }
                });
                // -- multiple values checkboxes
                cbs = Array.from(content.querySelectorAll('input[type="checkbox"][cbtype="M"]'));
                cbs.forEach(cb => {
                    if (VARS.Options.hasOwnProperty(cb.name)) {
                        cb.checked = VARS.Options[cb.name][parseInt(cb.value)] === '1';
                    }
                });
                // -- radios
                let rbs = content.querySelectorAll('input[type="radio"]');
                rbs.forEach(rb => {
                    if (VARS.Options.hasOwnProperty(rb.name) && (rb.value === VARS.Options[rb.name])) {
                        rb.checked = VARS.Options[rb.name];
                    }
                });
                // -- textareas
                let tas = Array.from(content.querySelectorAll('textarea'));
                tas.forEach(ta => {
                    if (VARS.Options.hasOwnProperty(ta.name)) {
                        ta.value = VARS.Options[ta.name].replaceAll(VARS.SEP, '\n');
                    }
                });
                // -- plain inputs
                let inputs = Array.from(content.querySelectorAll('input[type="text"]'));
                inputs.forEach(inp => {
                    if (VARS.Options.hasOwnProperty(inp.name)) {
                        inp.value = VARS.Options[inp.name];
                    }
                });
                // -- selects
                let selects = Array.from(content.querySelectorAll('select'));
                selects.forEach(select => {
                    if (VARS.Options.hasOwnProperty(select.name)) {
                        for (let i = 0; i < select.options.length; i++) {
                            const option = select.options[i];
                            if (option.value === VARS.Options[select.name]) {
                                option.selected = true;
                            } else {
                                option.selected = false;
                            }
                        }
                    }
                });
            }
        }

        async function saveUserOptions(event, source = 'dialog') {
            // -- save Options in indexeddb as JSON.
            let languageChanged = false;
            if (source === 'dialog') {
                let md, cbs, rbs, tas, inputs, selects;

                // -- grab the dialog box and get the various options.
                md = document.getElementById('fbcmf');

                // -- input validation for NF_LIKES_MAXIMUM_COUNT
                const elLikesMaximum = md.querySelector('input[name="NF_LIKES_MAXIMUM"]');
                if (elLikesMaximum.checked) {
                    const elLikesMaximumCount = md.querySelector('input[name="NF_LIKES_MAXIMUM_COUNT"]');
                    if (elLikesMaximumCount.value.length === 0) {
                        alert(KeyWords.NF_LIKES_MAXIMUM + '?');
                        elLikesMaximumCount.focus();
                        return;
                    }
                }

                // -- checkboxes (toggle variations)
                cbs = Array.from(md.querySelectorAll('input[type="checkbox"][cbtype="T"]'));
                cbs.forEach(cb => {
                    VARS.Options[cb.name] = cb.checked;
                });
                // -- checkboxes (multipe values variations)
                let cbName = 'NF_BLOCKED_FEED';
                cbs = Array.from(md.querySelectorAll(`input[type="checkbox"][name="${cbName}"]`));
                cbs.forEach(cb => {
                    VARS.Options[cbName][parseInt(cb.value)] = (cb.checked) ? '1' : '0';
                });
                cbName = 'GF_BLOCKED_FEED';
                cbs = Array.from(md.querySelectorAll(`input[type="checkbox"][name="${cbName}"]`));
                cbs.forEach(cb => {
                    VARS.Options[cbName][parseInt(cb.value)] = (cb.checked) ? '1' : '0';
                });
                cbName = 'VF_BLOCKED_FEED';
                cbs = Array.from(md.querySelectorAll(`input[type="checkbox"][name="${cbName}"]`));
                cbs.forEach(cb => {
                    VARS.Options[cbName][parseInt(cb.value)] = (cb.checked) ? '1' : '0';
                });
                cbName = 'MP_BLOCKED_FEED';
                cbs = Array.from(md.querySelectorAll(`input[type="checkbox"][name="${cbName}"]`));
                cbs.forEach(cb => {
                    VARS.Options[cbName][parseInt(cb.value)] = (cb.checked) ? '1' : '0';
                });
                cbName = 'PP_BLOCKED_FEED';
                cbs = Array.from(md.querySelectorAll(`input[type="checkbox"][name="${cbName}"]`));
                cbs.forEach(cb => {
                    VARS.Options[cbName][parseInt(cb.value)] = (cb.checked) ? '1' : '0';
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
                    VARS.Options[ta.name] = txts.join(VARS.SEP);
                });
                // -- selects
                selects = Array.from(md.querySelectorAll('select'));
                selects.forEach(select => {
                    VARS.Options[select.name] = select.value;
                });

                // -- did the ui language change?
                languageChanged = (VARS.language !== VARS.Options.CMF_DIALOG_LANGUAGE);
            }
            else if (source === 'reset') {
                languageChanged = true;
            }


            // -- clear out items that are not valid.
            let md = document.getElementById('fbcmf');
            let inputs = Array.from(md.querySelectorAll('input:not([type="file"]), textarea, select'));
            let validNames = [];
            inputs.forEach(inp => {
                if (!validNames.includes(inp.name)) {
                    validNames.push(inp.name);
                }
            });
            for (let key in VARS.Options) {
                if (!validNames.includes(key)) {
                    if (VARS.Options.VERBOSITY_DEBUG) {
                        console.info(log + 'saveUserOptions(); Deleting key:', key);
                    }
                    delete VARS.Options[key];
                }
            }

            // -- save options
            let result = await set(DBVARS.DBKey, JSON.stringify(VARS.Options), DBVARS.ostore).then(() => {
                // -- refresh options and split blocks of texts
                let result2 = getUserOptions().then(() => {
                    return true;
                });
                return result2;
            }).catch((err) => {
                console.info(`${log}saveUserOptions() > set() -> Error:`, err);
                return false;
            });
            if (VARS.Options.VERBOSITY_DEBUG) {
                console.info(`${log}saveUserOptions() > set() -> Saved:`, result);
            }

            // - update some variables.
            if (result) {

                if (languageChanged) {
                    createDialog(true);
                }

                setFeedSettings(true);
                // - rebuild css - need user's preferences to take effect
                addCSS();
                addExtraCSS();
                // -- reset the main-column watcher ...
                const elements = document.querySelectorAll(`[${mainColumnAtt}]`);
                for (const element of elements) {
                    element.removeAttribute(mainColumnAtt);
                }
                // - check if toggling debugging mode.
                toggleHiddenElements();
            }
            document.querySelector('#fbcmf .fileResults').textContent = `Last Saved @ ${(new Date()).toTimeString().slice(0, 8)}`;

            // -- reset the posts and do the cleaning/mopping up again ...
            if (VARS.isAF) {
                // -- "reset" scan counts
                VARS.scanCountStart += 100;
                VARS.scanCountMaxLoop += 100;

                // -- purge the hidden post captions
                // -- however, need to move the div out of the <detais> ...
                let details = document.querySelectorAll(`details[${postAtt}]`);
                for (const element of details) {
                    const elParent = element.parentElement;
                    const elContent = element.lastElementChild;
                    if (elContent && elContent.tagName === 'DIV') {
                        elParent.appendChild(elContent);
                    }
                    // -- no need to copy the classes from <details> to parent - parent already have them.
                    elParent.removeChild(element);
                }

                // -- purge the mini-captions
                let miniCaptions = document.querySelectorAll(`h6[${postAttTab}]`);
                for (const miniCaption of miniCaptions) {
                    const elParent = miniCaption.parentElement;
                    elParent.removeChild(miniCaption);
                }

                // -- remove attribute
                let elements = document.querySelectorAll(`[${postAtt}]`);
                for (const element of elements) {
                    element.removeAttribute(postAtt);
                    element.removeAttribute(VARS.hideAtt);
                    element.removeAttribute(VARS.cssHideEl);
                    element.removeAttribute(VARS.cssHideNumberOfShares);
                    element.removeAttribute(VARS.showAtt);
                }
                // -- remove other attributes
                elements = document.querySelectorAll(`[${postAttCPID}], [${postAttChildFlag}]`);
                for (const element of elements) {
                    if (element.hasAttribute(postAttCPID)) {
                        element.removeAttribute(postAttCPID);
                    }
                    if (element.hasAttribute(postAttChildFlag)) {
                        element.removeAttribute(postAttChildFlag);
                    }
                }
                // -- remove some more attributes
                // -- (don't add cssShow to query, the button needs it ...)
                elements = document.querySelectorAll(`[${VARS.hideAtt}], [${VARS.cssHideEl}], [${VARS.cssHideNumberOfShares}]`);
                for (const element of elements) {
                    element.removeAttribute(VARS.hideAtt);
                    element.removeAttribute(VARS.cssHideEl);
                    element.removeAttribute(VARS.cssHideNumberOfShares);
                    element.removeAttribute(VARS.showAtt);
                }

                if (VARS.isNF) {
                    mopUpTheNewsFeed();
                }
                else if (VARS.isGF) {
                    mopUpTheGroupsFeed();
                }
                else if (VARS.isVF) {
                    mopUpTheWatchVideosFeed();
                }
                else if (VARS.isMF) {
                    mopUpTheMarketplaceFeed();
                }
                else if (VARS.isSF) {
                    mopUpTheSearchFeed();
                }
                else if (VARS.isRF) {
                    mopUpTheReelFeed('saveUserOptions');
                }
            }
            // console.info(log + 'saveUserOptions(); OPTIONS:', VARS.Options);
        }

        function exportUserOptions() {
            // -- export user's options into a text file.
            let exportOptions = document.createElement("a");
            exportOptions.href = window.URL.createObjectURL(new Blob([JSON.stringify(VARS.Options)], { type: "text/plain" }));
            exportOptions.download = 'fb - clean my feeds - settings.json';
            exportOptions.click();
            exportOptions.remove();
            document.querySelector('#fbcmf .fileResults').textContent = 'Exported: fb - clean my feeds - settings.json';
        }

        function importUserOptions(event) {
            // -- import user's options from a text file.
            let fileResults = document.querySelector('#fbcmf .fileResults');
            let file = event.target.files[0];
            let fileN = event.target.files[0].name;
            // -- setup reader for reading in the file
            let reader = new FileReader();
            // -- what to do when reader is called.
            reader.onload = (file) => {
                try {
                    let fileContent = JSON.parse(file.target.result);
                    if (
                        fileContent.hasOwnProperty('NF_SPONSORED') &&
                        fileContent.hasOwnProperty('GF_SPONSORED') &&
                        fileContent.hasOwnProperty('VF_SPONSORED') &&
                        fileContent.hasOwnProperty('MP_SPONSORED')
                    ) {
                        VARS.Options = fileContent;
                        // console.info(log + 'importUserOptions() > reader.onload: Options:', VARS.Options);
                        // -- save the file to the db
                        // -- save will run getUserOptions();
                        let result = saveUserOptions(null, 'file').then(() => {
                            updateDialog();
                            fileResults.textContent = `File imported: ${fileN}`;
                            return true;
                        });
                    }
                    else {
                        fileResults.textContent = `File NOT imported: ${fileN}`;
                    }
                }
                catch (e) {
                    fileResults.textContent = `File NOT imported: ${fileN}`;
                }
            };
            // -- call reader to read in the file ...
            reader.readAsText(file);
        }

        function resetUserOptions() {
            // -- reset the options to original state (before customisations)
            del(DBVARS.DBKey, DBVARS.ostore)
                .then(() => {
                    // console.info(log + 'resetUserOptions();', 'Data deleted successfully');

                    // - reset language - setLanguageAndOptions() > getUserOptions() will correct this value.
                    VARS.Options.CMF_DIALOG_LANGUAGE = '';
                    setLanguageAndOptions();
                    let result = saveUserOptions(null, 'reset').then(() => {
                        updateDialog();
                        return true;
                    });
                })
                .catch((error) => {
                    console.info(log + 'resetUserOptions(); Error - unable to delete Data.', error);
                });
        }

        function createToggleButton() {
            let btn = document.createElement('button');
            btn.innerHTML = VARS.logoHTML;
            btn.id = 'fbcmfToggle';
            btn.title = KeyWords.DLG_TITLE;
            btn.className = 'fb-cmf-toggle fb-cmf-icon';
            document.body.appendChild(btn);
            btn.addEventListener('click', toggleDialog, false);
            VARS.btnToggleEl = btn;
        }

        function addLegendEvents() {
            const elFBCMF = document.getElementById('fbcmf');
            if (elFBCMF) {
                const legends = elFBCMF.querySelectorAll('legend');
                legends.forEach(legend => {
                    legend.parentElement.classList.add('hidden');
                    legend.addEventListener('click', function () {
                        legend.parentElement.classList.toggle('hidden');
                        legend.parentElement.classList.toggle('visible');
                    });
                });
            }
        }

        createToggleButton();
        createDialog();
        addLegendEvents();
    }
    // --- end of dailog code.

    // -- toggleDialog() function placed here to allow a GM.registerMenuCommand(...) to call it.
    function toggleDialog() {
        const elDialog = document.getElementById('fbcmf');
        if (elDialog.hasAttribute(VARS.showAtt)) {
            elDialog.removeAttribute(VARS.showAtt);
        }
        else {
            elDialog.setAttribute(VARS.showAtt, '');
        }
    }

    // adjust some settings - if URL has changed.
    function setFeedSettings(forceUpdate = false) {
        if ((VARS.prevURL !== window.location.href) || forceUpdate) {
            // - remember current page's URL
            VARS.prevURL = window.location.href;
            // -- pathname pattern: /marketplace...
            VARS.prevPathname = window.location.pathname;
            // -- search pattern: ?query= ...
            VARS.prevQuery = window.location.search;
            // - reset feeds flags
            VARS.isNF = false;
            VARS.isGF = false;
            VARS.isVF = false;
            VARS.isMF = false;
            VARS.isSF = false;
            VARS.isRF = false;
            VARS.isPP = false;
            if ((VARS.prevPathname === '/') || (VARS.prevPathname === '/home.php')) {
                // -- news feed
                // -- nb: "Feeds (most recent)" combines a few feeds into one ... apply NF rules to all, except Groups.
                if (VARS.prevQuery.indexOf('?filter=groups') < 0) {
                    VARS.isNF = true;
                }
                else {
                    VARS.isGF = true;
                    VARS.gfType = 'groups-recent';
                }
            }
            else if (VARS.prevPathname.indexOf('/groups/') >= 0) {
                // -- groups feed
                VARS.isGF = true;
                if (VARS.prevPathname.indexOf('/groups/feed') >= 0) {
                    VARS.gfType = 'groups';
                }
                else if (VARS.prevPathname.indexOf('/groups/search') >= 0) {
                    VARS.gfType = 'search';
                }
                else if (VARS.prevPathname.indexOf('?filter=groups&sk=h_chr') >= 0) {
                    VARS.gfType = 'groups-recent';
                }
                else {
                    VARS.gfType = 'group';
                }
            }
            else if (VARS.prevPathname.indexOf('/watch') >= 0) {
                // -- watch videos feed
                VARS.isVF = true;
                if (VARS.prevPathname.indexOf('/watch/search') >= 0) {
                    VARS.vfType = 'search';
                }
                else if (VARS.prevQuery.indexOf('?ref=seach') >= 0) {
                    VARS.vfType = 'item';
                }
                else if (VARS.prevQuery.indexOf('?v=') >= 0) {
                    VARS.vfType = 'item';
                }
                else {
                    VARS.vfType = 'videos';
                }
            }
            else if (VARS.prevPathname.indexOf('/marketplace') >= 0) {
                // -- marketplace
                VARS.isMF = true;
                mp_stopTrackingDirtIntoMyHouse();
                if (VARS.isMF && VARS.prevPathname.indexOf('/item/') >= 0) {
                    // - viewing an item
                    VARS.mpType = 'item';
                }
                else if (VARS.prevPathname.indexOf('/search') >= 0) {
                    // - searching within marketplace ... (has similar layout to category feed)
                    VARS.mpType = 'search';
                }
                else if (VARS.prevPathname.indexOf('/category/') >= 0) {
                    // - category feed
                    VARS.mpType = 'category';
                }
                else {
                    // -- check again for category - may have a location in the pathName ...
                    // -- pattern: :: https://www.facebook.com/marketplace/<location>/sports
                    const urlBits = VARS.prevPathname.split('/');
                    if (urlBits.length > 3) {
                        VARS.mpType = 'category';
                    }
                    else {
                        VARS.mpType = 'marketplace';
                    }
                }
            }
            else if (VARS.prevPathname.indexOf('/commerce/listing/') >= 0) {
                // - a group's for sale post - redirected to marketplace ...
                // - same layout as a marketplace item.
                VARS.isMF = true;
                VARS.mpType = 'item';
            }
            else if (['/search/top/', '/search/top', '/search/posts/', '/search/posts', '/search/pages/'].indexOf(VARS.prevPathname) >= 0) {
                // -- search results page : "All" and "Posts"
                VARS.isSF = true;
            }
            else if (VARS.prevPathname.indexOf('/reel/') >= 0) {
                // -- reel(s) page
                // VARS.isRF = true;
                VARS.isRF = (VARS.Options.REELS_CONTROLS === true) || (VARS.Options.REELS_DISABLE_LOOPING === true);
            }
            else if (VARS.prevPathname.indexOf('/profile.php') >= 0) {
                // -- profile page (usually a public page)
                VARS.isPP = true;
            }
            else if (VARS.prevPathname.substring(1).length > 1 && VARS.prevPathname.substring(1).indexOf('/') < 0) {
                // else if (document.querySelector('a[href*="/about"] > div > span')) { <-- to slow to detect - not available onload.
                // -- profile page (usually person)
                VARS.isPP = true;
            }

            VARS.isAF = (VARS.isNF || VARS.isGF || VARS.isVF || VARS.isMF || VARS.isSF || VARS.isRF || VARS.isPP);

            // when to display the cmf button
            if (VARS.isAF) {
                if (VARS.btnToggleEl) {
                    VARS.btnToggleEl.setAttribute(VARS.showAtt, '');
                }
            }
            else {
                if (VARS.btnToggleEl) {
                    VARS.btnToggleEl.removeAttribute(VARS.showAtt);
                }
            }

            // - reset consecutive count of hidden posts
            VARS.echoCount = 0;

            // -- reset the no-change-counter
            VARS.noChangeCounter = 0;

            // console.info(`${log}setFeedSettings() :: isAF: ${VARS.isAF}; isNF: ${VARS.isNF}; isGF: ${VARS.isGF}; isVF: ${VARS.isVF}; isMF: ${VARS.isMF}; isSF: ${VARS.isSF}; isRF: ${VARS.isRF}; isPP: ${VARS.isPP}`);

            return true;
        }
        else {
            return false;
        }
    }

    function climbUpTheTree(element, numberOfBranches = 1) {
        while (element && numberOfBranches > 0) {
            element = element.parentNode;
            numberOfBranches--;
        }
        return element || null;
    }

    function doLightDusting(post) {
        // - remove 'dusty' elements that interfere with querySelectorAll, nth-of-type, :not() queries.
        // -- needs to run a few times to be effective.
        let scanCount = VARS.scanCountStart;
        if (post[postPropDS] !== undefined) {
            scanCount = parseInt(post[postPropDS]);
            scanCount = (scanCount < VARS.scanCountStart) ? VARS.scanCountStart : scanCount;
        }
        if (scanCount < VARS.scanCountMaxLoop) {
            const dustySpots = post.querySelectorAll('[data-0="0"]');
            if (dustySpots) {
                dustySpots.forEach((element) => {
                    element.remove();
                });
            }
            scanCount++;
            post[postPropDS] = scanCount;
        }
    }

    function scanTreeForText(theNode) {
        const arrayTextValues = [];
        const elements = theNode.querySelectorAll(':scope > div, :scope > blockquote, :scope > span');

        for (const element of elements) {
            if (element.hasAttribute('aria-hidden') && element.getAttribute('aria-hidden') === "false") {
                // -- skip this branch (hidden)
                continue;
            }

            // -- scan this branch
            const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
            let currentNode;
            while ((currentNode = walk.nextNode())) {
                const elParent = currentNode.parentElement;
                const elParentTN = elParent.tagName.toLowerCase();
                const val = cleanText(currentNode.textContent).trim();

                // console.info(log + '---> scanTreeForText(); currentNode:', currentNode, elParent, elParentTN, val);

                if (val === '' || val.toLowerCase() === 'facebook') {
                    // -- skip this node
                    continue;
                }

                if (elParent.hasAttribute('aria-hidden') && elParent.getAttribute('aria-hidden') === 'true') {
                    // -- skip this node
                    continue;
                }

                if (elParentTN === 'div' && elParent.hasAttribute('role') && elParent.getAttribute('role') === 'button') {
                    // -- February 2024 - issue with "Anonymous participant" not being detected properly
                    // -- when viewing a post in a group (not groups feed), "Anonymous participant" is inside a div:button wrapped inside an object.
                    if (elParent.parentElement && elParent.parentElement.tagName.toLowerCase() !== 'object') {
                        // -- skip this node
                        continue;
                    }
                }

                if (elParentTN === 'title') {
                    // -- skip this node
                    continue;
                }

                // -- February 2024 - issue with "Anonymous participant" not being detected properly
                // --- usually has a div with role of button, and that div only has 1 descendant.
                // --- previously, we skipped when a div has a button role.
                const elGeneric = elParent.closest('div[role="button"]');
                const elGenericDescendantsCount = elGeneric ? countDescendants(elGeneric) : 0;
                // console.info(log + 'scanTreeForText(); final test:', elGeneric, elParent, currentNode, elGenericDescendantsCount, val);
                if (elGenericDescendantsCount < 2 && val.length > 1) {
                    // - keep 2+ char strings.
                    arrayTextValues.push(...val.split('\n'));
                }
                else {
                    // -- skip this node (hidden / meta info)
                }
            }
        }

        // -- remove duplicates and return results.
        // console.info(log + 'scanTreeForText(); returning::', theNode, arrayTextValues);
        return [...new Set(arrayTextValues)];
    }

    function mp_scanTreeForText(theNode) {
        const arrayTextValues = [];
        let n;
        const walk = document.createTreeWalker(theNode, NodeFilter.SHOW_TEXT, null);
        while ((n = walk.nextNode())) {
            let val = cleanText(n.textContent).trim();
            if ((val !== '') && (val.length > 1) && (val.toLowerCase() !== 'facebook')) {
                // - keep 2+ char strings.
                // arrayTextValues.push(val);
                arrayTextValues.push(val.toLowerCase());
            }
        }
        return arrayTextValues;
    }

    function scanImagesForAltText(theNode) {
        const arrayAltTextValues = [];
        const images = theNode.querySelectorAll('img[alt]');
        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            if (img.alt.length > 0 && img.naturalWidth > 32) {
                // -- (emojis usually have widths < 33 ... skip them)
                const sAlt = cleanText(img.alt);
                if (!arrayAltTextValues.includes(sAlt)) {
                    arrayAltTextValues.push(sAlt);
                }
            }
        }
        return arrayAltTextValues;
    }

    function countDescendants(element) {
        return element.querySelectorAll('div, span').length;
    }

    function extractTextContent(post, selector, maxBlocks) {
        // - get the text node values of the regular feed posts
        // - get the alt-text values of any images in the feed posts
        // -- scan the top portion of the posts (first maxBlocks blocks)
        // -- parameters:
        //    post: post to scan
        //    selector: querySelector's query
        //    maxBlocks: max number of blocks to scan
        const blocks = post.querySelectorAll(selector);
        const arrayTextValues = [];

        // - process first maxBlocks blocks
        // - block 0 = Suggested headings, block 1 = title/heading, block 2 = content, block 3 = info box / comments, block 4 = comments
        // - nb: some suggested posts only have one block ...
        for (let b = 0; b < Math.min(maxBlocks, blocks.length); b++) {
            const block = blocks[b];
            if (countDescendants(block) > 0) {
                arrayTextValues.push(...scanTreeForText(block));
                arrayTextValues.push(...scanImagesForAltText(block));
            }
        }

        return arrayTextValues.filter(item => item !== '');
    }

    function addCaptionForHiddenPost(post, reason, marker = '') {
        // :: caption for a post/feature that has been hidden ...
        // -- using <details><summary>...</summary> ~~ post ~~ </details> structure.
        // :: return : nothing

        // -- create the details/summary component
        const elDetails = document.createElement('details');
        const elSummary = document.createElement('summary');
        const elText = document.createTextNode(KeyWords.VERBOSITY_MESSAGE[1] + reason);

        elSummary.appendChild(elText);
        elDetails.appendChild(elSummary);
        // -- nb: marker is sometimes "false" when not used by caller ...
        elDetails.setAttribute(postAtt, (marker === false ? '' : marker));

        // -- duplicate the post's class(es) - prevents fb from removing the post (Feb 2024).
        if (post.classList.length > 0) {
            elDetails.classList.add(...post.classList);
        }
        // -- add the caption component above the post
        post.parentNode.appendChild(elDetails);
        // -- move the post inside the caption's component.
        elDetails.appendChild(post);

        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            post.setAttribute(VARS.showAtt, '');
            elDetails.setAttribute('open', '');
        }
    }

    function addMiniCaption(post, reason) {
        // :: add a small caption to indicate why the post is hidden/flagged
        // -- in debugging mode ***
        // :: return : nothing

        post.setAttribute(VARS.hideAtt, '');

        const elTab = document.createElement('h6');
        elTab.setAttribute(postAttTab, '0');
        elTab.textContent = reason;

        post.insertBefore(elTab, post.firstElementChild);
    }

    function sanitizeReason(reason) {
        // -- setting an attribute, so remove double quotes from reason's text.
        return reason.replaceAll('"', '');
    }

    function hideFeature(post, reason, marker = '') {
        // -- hide something (not part of a regular feed)
        // -- no consecutive counts (VARS.echoCount is ignored)
        // -- Verbosity_Level: 0 = hide; 1|2 treated as 1 (no consecutive mode)

        // -- mark the post with the reason to hide the post.
        post.setAttribute(postAtt, sanitizeReason(reason));

        // -- add a caption or not?
        if ((VARS.Options.VERBOSITY_LEVEL !== '0') && (reason !== '')) {
            // -- insert a caption for a hidden post
            addCaptionForHiddenPost(post, reason, marker);
        }
        else {
            // -- no caption required ...
            // -- use an attribute to hide the post
            post.setAttribute(VARS.hideAtt, '');
            if (VARS.Options.VERBOSITY_DEBUG) {
                // -- insert a small label to indicate why post was flagged
                addMiniCaption(post, reason);
            }
        }
    }

    function toggleHiddenElements() {
        const containers = Array.from(document.querySelectorAll('[' + VARS.hideAtt + ']'));
        const blocks = Array.from(document.querySelectorAll('[' + VARS.cssHideEl + ']'));
        const shares = Array.from(document.querySelectorAll('[' + VARS.cssHideNumberOfShares + ']'));

        const elements = [...containers, ...blocks, ...shares];

        if (VARS.Options.VERBOSITY_DEBUG) {
            for (const element of elements) {
                element.setAttribute(VARS.showAtt, '');
            }
        }
        else {
            for (const element of elements) {
                element.removeAttribute(VARS.showAtt);
            }
        }
    }

    function toggleConsecutivesElements(ev) {
        ev.stopPropagation();
        const elSummary = ev.target;
        const elDetails = elSummary.parentElement;
        const elPostContent = elDetails.querySelector('div');
        const cpidValue = elPostContent.getAttribute(postAttCPID);

        const collection = document.querySelectorAll(`div[${postAttCPID}="${cpidValue}"]`);

        if (elDetails.hasAttribute('open')) {
            // -- moving into closed state
            collection.forEach(post => {
                post.removeAttribute(VARS.showAtt);
            });
        }
        else {
            // -- moving into open state
            collection.forEach(post => {
                post.setAttribute(VARS.showAtt, '');
            });
        }
    }

    function gf_hidePost(post, reason, marker) {
        // :: hide a group feed post ...
        // -- has consecutive counts
        // -- Verbosity_Level: 0 = hide; 1 = single info note; 2 = consecutive info notes
        // -- return : nothing

        // console.info(log + 'gf_hidePost(); v_L:', VARS.Options.VERBOSITY_LEVEL, VARS.echoEl, VARS.echoCount, reason, post);

        post.setAttribute(postAtt, sanitizeReason(reason));

        if ((VARS.Options.VERBOSITY_LEVEL !== '0') && (reason !== '')) {
            // -- insert either single caption for a hidden post or accumulate a caption for 2+ consecutive hidden posts
            // -- nb: calling function will either zap or increment VARS.echoCount
            // --     they don't look at VARS.Options.VERBOSITY_LEVEL's value

            // -- the group post's element is the container ...
            // -- so, need to go down a level to insert the caption ...
            const elPostContent = post.querySelector('div');

            if (VARS.Options.VERBOSITY_LEVEL === '1') {
                // -- single caption only mode
                // -- insert a caption for a hidden post
                addCaptionForHiddenPost(elPostContent, reason, marker);
            }
            else {
                // -- consecutive caption mode (VARS.Options.VERBOSITY_LEVEL === '2')

                if (VARS.echoCount === 1) {
                    // - first post in a possible consecutive collection.
                    // - CPID = consecutive post id
                    addCaptionForHiddenPost(elPostContent, reason, marker);
                    VARS.echoCPID = generateRandomString();
                    VARS.echoEl = elPostContent;
                    VARS.echoEl.setAttribute(postAttCPID, VARS.echoCPID);
                }
                else {
                    // - 2+ consecutive posts being hidden

                    // console.info(log + 'gf_hidePost(); echoEL:', VARS.echoEl, VARS.echoCount, reason, post);

                    // -- get the primary details element
                    const elDetails = VARS.echoEl.closest('details');

                    if (VARS.echoCount === 2) {
                        // -- second post in same consecutive group, go back to first one and amend it ...
                        addMiniCaption(VARS.echoEl, reason);
                        // -- listen to open/close event - trigger a call to open/close the consecutive posts
                        elDetails.addEventListener('click', toggleConsecutivesElements);
                    }

                    // -- update the main caption hidden post element
                    elDetails.querySelector('summary').lastChild.textContent = VARS.echoCount + KeyWords.VERBOSITY_MESSAGE[1];

                    // second+ posts need a mini-caption
                    const elMiniCaptionSpot = elPostContent;
                    // -- second+ post in same consecutive group
                    addMiniCaption(elMiniCaptionSpot, reason);

                    // - consecutive posts level - flag it as part of a consecutive group
                    elPostContent.setAttribute(postAttCPID, VARS.echoCPID);

                }
            }

            //console.info(log+'gf_hidePost():', VARS.echoElFirst);
        }
        else {
            // -- verbosity_level = 0
            // -- no caption required
            // -- use an attribute to hide the post
            post.setAttribute(VARS.hideAtt, '');
            if (VARS.Options.VERBOSITY_DEBUG) {
                // -- insert a small label to indicate why post was flagged
                addMiniCaption(post, reason);
                post.setAttribute(VARS.showAtt, '');
            }
        }
    }

    function vf_hidePost(post, reason, marker = '') {
        // :: hide a video post ...
        // -- applies to watch videos feed
        // -- parameter 'marker' - for setting details' postTab value (optional)
        // -- no consecutive counts
        // -- Verbosity_Level: 0 = hide; 1|2 treated as 1 (no consecutive mode)
        // -- return :: nothing

        // -- mark the post with the reason for post being hidden/flagged
        post.setAttribute(postAtt, sanitizeReason(reason));

        // -- add a caption or not?
        if ((VARS.Options.VERBOSITY_LEVEL !== '0') && (reason !== '')) {
            // -- insert a caption for a hidden post
            addCaptionForHiddenPost(post, reason, marker);
        }
        else {
            // -- verbosity_level = 0
            // -- no caption required ...
            // -- use an attribute to hide the post
            post.setAttribute(VARS.hideAtt, '');
            if (VARS.Options.VERBOSITY_DEBUG) {
                // -- insert a small label to indicate why post was flagged
                addMiniCaption(post, reason);
                post.setAttribute(VARS.showAtt, '');
            }
        }
        //console.info(log+'nf_hidePost():', VARS.echoElFirst);
    }

    function nf_hidePost(post, reason, marker = '~') {
        // :: hide a post ...
        // -- applies to news feed + search feed
        // -- parameter 'marker' - for setting details' postTab value (optional)
        // -- no consecutive counts
        // -- Verbosity_Level: 0 = hide; 1|2 treated as 1 (no consecutive mode)
        // -- return :: nothing

        // -- mark the post with the reason for post being hidden/flagged
        post.setAttribute(postAtt, sanitizeReason(reason));

        // -- add a caption or not?
        if ((VARS.Options.VERBOSITY_LEVEL !== '0') && (reason !== '')) {
            // -- insert a caption for a hidden post
            addCaptionForHiddenPost(post, reason, marker);
        }
        else {
            // -- verbosity_level = 0
            // -- no caption required ...
            // -- use an attribute to hide the post
            post.setAttribute(VARS.hideAtt, '');
            if (VARS.Options.VERBOSITY_DEBUG) {
                // -- insert a small label to indicate why post was flagged
                addMiniCaption(post, reason);
                post.setAttribute(VARS.showAtt, '');
            }
        }
        //console.info(log+'nf_hidePost():', VARS.echoElFirst);
    }

    function hideBlock(block, link, reason) {
        block.setAttribute(VARS.cssHideEl, '');
        link.setAttribute(postAtt, sanitizeReason(reason));
        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            block.setAttribute(VARS.showAtt, '');
        }
    }

    function cleanText(text) {
        // - fb is using ASCII code 160 for whitespace ...
        // -- also "normalise" the text (i.e. convert unicode magic to normal ascii code)
        // -- (unicode magic used to bold/italic/etc characters without html/css/style)
        // return text.replaceAll(String.fromCharCode(160), String.fromCharCode(32)).normalize('NFKC');
        // -- normalise(NKFC) will convert 160(00A0) to 32(0020)
        // -- https://www.unicode.org/charts/normalization/index.html
        return text.normalize('NFKC');
    }


    function nf_isSponsored_ShadowRoot1(post) {
        // -- works for some languages - can be quite accurate.
        // -- in the early start, this function may have a late hit rate - fb sometimes tad bit slow in loading <element> holding the sponsored text.

        // -- Find the canvas element within the specified hierarchy
        let hasSponsoredText = false;
        const elCanvas = post.querySelector('a > span > span[aria-labelledby] > canvas');
        if (elCanvas) {
            // -- Get the 'aria-labelledby' attribute of the parent element
            const elementId = elCanvas.parentElement.getAttribute('aria-labelledby');
            // -- Check if the ID has the peculiar pattern we expect
            if (elementId && elementId.slice(0, 1) === ':') {
                // -- Escape the colon character in the ID for use in querySelector
                const escapedId = elementId.replace(/(:)/g, '\\$1');
                // -- Find the span element using the escaped ID
                const elSpan = document.querySelector(`[id="${escapedId}"]`);
                if (elSpan) {
                    // -- Check if the span's text content is 'Sponsored' (in user's language)
                    let lcText = elSpan.textContent.trim().toLowerCase();
                    hasSponsoredText = VARS.dictionarySponsored.includes(lcText);
                    // console.info(log + 'nf_isSponsored_ShadowRoot1(); results : ' + hasSponsoredText + "; context: " + elSpan.textContent);
                }
            }
        }
        return hasSponsoredText;
    }
    function nf_isSponsored_ShadowRoot2(post) {
        // -- works for some languages - can be quite accurate.
        // -- in the early start, this function may have a late hit rate - fb sometimes tad bit slow in loading <element> holding the sponsored text.

        // -- Find the use element within the specified hierarchy
        let hasSponsoredText = false;
        const elUse = post.querySelector('a > span > span[aria-labelledby] svg > use[*|href]');
        if (elUse) {
            // -- Get the "id" for find the element having the text we want to scan
            const elementId = elUse.href.baseVal;
            if (elementId !== "" && elementId.slice(0,1) === "#") {
                // -- Find the text element having the elementId
                const elText = document.querySelector(`${elementId}`);
                if (elText) {
                    // -- Check if the text's text content is 'Sponsored' (in user's language)
                    let lcText = elText.textContent.trim().toLowerCase();
                    hasSponsoredText = VARS.dictionarySponsored.includes(lcText);
                    // console.info(log + 'nf_isSponsored_ShadowRoot2(); results : ' + hasSponsoredText + "; context: " + elText.textContent + "; lcText: " + lcText);
                    // console.info(log + 'nf_isSponsored_ShadowRoot2(); dictionary : ' +VARS.dictionarySponsored );
                }
            }
        }
        return hasSponsoredText;
    }

    function nf_isSponsored_Plain(post) {
        // -- works for some languages - more accurate than the other methods.
        // -- simple structure.
   
        let hasSponsoredText = false;
        const queryElement = 'div[id] > span > a[role="link"] > span';
        const elSpans = post.querySelectorAll(queryElement);
    
        elSpans.forEach(elSpan => {
            if (!elSpan.querySelector('svg')) {
                const lcText = elSpan.textContent.trim().toLowerCase();
                hasSponsoredText = VARS.dictionarySponsored.includes(lcText);
                //console.info(log + 'nf_isSponsored_Plain(); results: ' + hasSponsoredText + "; context: " + elSpan.textContent);
            }
        });
    
        return hasSponsoredText;
    }

    function isSponsored(post) {
        // Is it a sponsored post?
        // -- applies to News feed, Groups feed, Videos Feed
        // -- mopUpTheMarketplaceFeed() looks after marketplace feed sponsored posts/items.

        let isSponsoredPost = false;

        if (VARS.isNF) {
            // - try method #1 - content
            isSponsoredPost = nf_isSponsored_Plain(post);
            if (isSponsoredPost == false) {
                // - try method #2 - shadow root
                isSponsoredPost = nf_isSponsored_ShadowRoot1(post);
                if (isSponsoredPost == false) {
                    // - try method #3 - shadow root
                    isSponsoredPost = nf_isSponsored_ShadowRoot2(post);
                }
            }
            // console.info(log + 'isSponsoredNF(); isSponsoredPost: ', isSponsoredPost, post);
        }
        if (isSponsoredPost === false) {
            // - try method #4 - structure ... tricky to get the size right .. prone to some false-hits.
            const PARAM_FIND = '__cft__[0]=';
            // was 308 ... trying 309
            // const PARAM_MIN_SIZE = VARS.isSF ? 250 : VARS.isVF ? 299 : 309 ;
            const PARAM_MIN_SIZE = VARS.isSF ? 250 : VARS.isVF ? 299 : 311 ; // 309? // 331?

            let elLinks = [];
            if (VARS.isNF || VARS.isGF) {
                // -- news feed
                // -- and possibly groups feed (haven't seen a sponsored post in groups for ages!)
                elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
                if (elLinks.length === 0) {
                    // -- try again, some users don't have the aria-posinet attribute.
                    elLinks = Array.from(post.querySelectorAll(`div[aria-describedby] span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
                }
            }
            else if (VARS.isVF) {
                // -- watch videos feed has a slightly different html structure for sponsored posts.
                // console.info(log + "isSponsored(); video post:", post);
                elLinks = Array.from(post.querySelectorAll(`div > div > div > div > span > span > div > a[href*="${PARAM_FIND}"]`));
            }
            else if (VARS.isSF) {
                // -- search feed - has a slightly different html structure for sponsored posts.
                elLinks = Array.from(post.querySelectorAll(`div[role="article"] span > a[href*="${PARAM_FIND}"]`));
            }
            if ((elLinks.length > 0) && (elLinks.length < 10)) {
                // > 0 : found a built post
                // < 10 : found a built post, but does not have an embedded post
                // > 9 : embedded post - unlikely to be sponsored

                // test the first 3 links.
                // -- fb sometimes changes the 4th & 5th links after playing video, which can trigger a false isSponsoredPost flag.
                const elMax = Math.min(2, elLinks.length);

                for (let i = 0; i < elMax; i++) {
                    let el = elLinks[i];
                    let pos = el.href.indexOf(PARAM_FIND);
                    //if (VARS.isNF) console.info(log + "isSponsored(); isNF():: " + i + "; pos >= 0 : " + (pos >= 0) + "; " + el.href.slice(pos).length, (el.href.slice(pos).length >= PARAM_MIN_SIZE), el);
                    //if (VARS.isVF) console.info(log + "isSponsored(); isVF():: " + i + "; pos >= 0 : " + (pos >= 0) + "; " + el.href.slice(pos).length, (el.href.slice(pos).length >= PARAM_MIN_SIZE), el);
                    if (pos >= 0) {
                        // console.info(log + "isSponsored(); testing: " + el.href.slice(pos).length, (el.href.slice(pos).length > PARAM_MIN_SIZE), post);
                        if (el.href.slice(pos).length >= PARAM_MIN_SIZE) {
                            // console.info(log + "isSponsored(); sliced: " + i + "; " + el.href.slice(pos).length, el.href, post);
                            // console.info(log + "isSponsored(); # links: " + elLinks.length, post);
                            isSponsoredPost = true;
                            break;
                        }
                    }
                }
            }
        }

        return isSponsoredPost;
    }

    function querySelectorAllNoChildren(container = document, queries = [], minText = 0, executeAllQueries = false) {
        // -- nb: .querySelectorAll(..) can have multiple queries and will execute them all (regardless of results)
        if (!Array.isArray(queries)) {
            queries = [queries];
        }

        if (queries.length === 0) {
            return [];
        }

        if (executeAllQueries) {
            return Array.from(container.querySelectorAll(queries)).filter((el) => {
                return el.children.length === 0 && el.textContent.length >= minText;
            });
        }

        for (const query of queries) {
            const elements = container.querySelectorAll(query);
            for (const element of elements) {
                if (element.children.length === 0 && element.textContent.length >= minText) {
                    return [element];
                }
            }
        }

        return [];
    }

    function nf_isSuggested(post) {
        // - check if any of the suggestions / recommendations type post
        // -- nb: "<name> commented / <name> replied to a commment" posts have similar structure - but have extra elements ...
        // -- nb: "x people recently commented" posts have similar structure - suggested/recommended posts don't start with a number ...

        const queries = [
            //     // -- June 2024
            //     'div[aria-posinset] span> div[id] > span:nth-of-type(1):not([style]):not([class])',
            //     'div[aria-describedby] span> div[id] > span:nth-of-type(1):not([style]):not([class])',

            // -- github 30/06/2024 mr-pokemon
               'div[aria-posinset] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > span > div > span:nth-of-type(1)',
            'div[aria-describedby] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > span > div > span:nth-of-type(1)',
        ];

        const elSuggestion = querySelectorAllNoChildren(post, queries, 1);
        if (elSuggestion.length > 0) {
            if (nf_isReelsAndShortVideos(post).length > 0) {
                // -- false-positive hit.
                return '';
            }
            // -- pattern: a digit from 0 to 9 or any number in the unicode space
            // --- Basic Latin: \u0030-\u0039 (Range: 0-9)
            // --- Arabic-Indic Digits: \u0660-\u0669 (Range: ٠-٩)
            // --- Eastern Arabic-Indic Digits: \u06F0-\u06F9 (Range: ۰-۹)
            // --- Devanagari Digits: \u0966-\u096F (Range: ०-९)
            // --- Bengali Digits: \u09E6-\u09EF (Range: ০-৯)
            // --- Myanmar Digits: \u1040-\u1049 (Range: ၀-၉)
            // --- Thai Digits: \u0E50-\u0E59 (Range: ๐-๙)
            // --- Tibetan Digits: \u0F20-\u0F29 (Range: ༠-༩)
            // const pattern = /([0-9]|[\u0660-\u0669])/;
            const pattern = /([0-9]|[\u0660-\u0669]|[\u06F0-\u06F9]|[\u0966-\u096F]|[\u09E6-\u09EF]|[\u1040-\u1049]|[\u0E50-\u0E59]|[\u0F20-\u0F29])/;
            // -- if text starts with a number, return nothing, else the trigger word.
            const firstCharacter = cleanText(elSuggestion[0].textContent).trim().slice(0, 1);
            // console.info(log+'isSuggested - match test:', firstCharacter, pattern.test(firstCharacter), pattern.test(firstCharacter) ? 'No': 'Yes' );
            return (pattern.test(firstCharacter)) ? '' : KeyWords.NF_SUGGESTIONS;
        }
        else if (nf_isGroupsYouMightLike(post)) {
            return KeyWords.NF_SUGGESTIONS ;
        }
        return '';
    }

    function nf_isGroupsYouMightLike(post) {
        // -- 21/09/2024 - <name>, here are groups you might like
        const query = 'a[href*="/groups/discover"]' ;
        const results = post.querySelectorAll(query);
        return (results.length > 0);
    }

    function gf_isSuggested(post) {
        // - check if any of the suggestions / recommendations type post
        // -- get the blocks/sections, then have a look for <i> in 1st block (providing there's more than 1 block)
        // -- (query bypasses the dusty elements)
        // -- some users don't have [aria-posinset], hence [aria-describedby]
        let results = '';
        let blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div';
        let blocks = post.querySelectorAll(blocksQuery);
        if (blocks.length <= 1) {
            // try again .. (December 2022 change)
            blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div > div';
            blocks = post.querySelectorAll(blocksQuery);
        }
        if (blocks.length > 1) {
            let suggIcon = blocks[0].querySelector('i[data-visualcompletion="css-img"][style]');
            if (suggIcon) {
                results = KeyWords.GF_SUGGESTIONS;
            }
            else {
                // -- a sneaky group post without the standard suggestion/recommendation header
                let query = 'h3 > div > span ~ span > span > div > div';
                let sneakyGroupPost = blocks[1].querySelector(query);
                if (sneakyGroupPost) {
                    results = KeyWords.GF_SUGGESTIONS;
                }
            }
        }
        return results;
    }

    function nf_isPeopleYouMayKnow(post) {
        //const queryPYMK = 'a[href*="/friends/suggestions/"][role="link"]';
        // -- Sept 2024
        const queryPYMK = 'a[href*="/friends/"][role="link"]';
        const linksPYMK = post.querySelectorAll(queryPYMK);
        return (linksPYMK.length === 0) ? '' : KeyWords.NF_PEOPLE_YOU_MAY_KNOW;
    }

    function nf_isPaidPartnership(post) {
        const queryPP = 'span[dir] > span[id] a[href^="/business/help/"]';
        const elPaidPartnership = post.querySelector(queryPP);
        return (elPaidPartnership === null) ? '' : KeyWords.NF_PAID_PARTNERSHIP;
    }

    function nf_isSponsoredPaidBy(post) {
        const querySPB = 'div:nth-child(2) > div > div:nth-child(2) > span[class] > span[id] > div:nth-child(2)';
        const sponsoredPaidBy = querySelectorAllNoChildren(post, querySPB, 1);
        return (sponsoredPaidBy.length === 0) ? '' : KeyWords.NF_SPONSORED_PAID;
    }

    function nf_isReelsAndShortVideos(post) {
        // -- reels and short videos (multiple)
        const queryReelsAndShortVideos = 'a[href="/reel/?s=ifu_see_more"]';
        const elReelsAndShortVideos = post.querySelector(queryReelsAndShortVideos);

        // -- method one
        if (elReelsAndShortVideos !== null) {
            return KeyWords.NF_REELS_SHORT_VIDEOS;
        }
        // -- method two
        const queryManyReels = 'a[href*="/reel/"]';
        const manyReels = post.querySelectorAll(queryManyReels);
        if (manyReels.length > 4) {
            return KeyWords.NF_REELS_SHORT_VIDEOS;
        }

        // -- method three
        // -- (dictionary based rule)
        const buttonDiv = post.querySelector('div[role="button"] > i ~ div');
        if (buttonDiv && buttonDiv.textContent) {
            const buttonText = buttonDiv.textContent.trim().toLowerCase();
            // console.info(log + "nf_isReelsAndShortVideos(); buttonText: ", buttonText);
            // console.info(log + "nf_isReelsAndShortVideos(); dictionary: ", VARS.dictionaryReelsAndShortVideos)
            if (VARS.dictionaryReelsAndShortVideos.find(item => item === buttonText)) {
                return KeyWords.NF_REELS_SHORT_VIDEOS;
            }
        }

        return '';
    }

    function nf_isShortReelVideo(post) {
        // -- reel/short video post (single)
        // -- post must have only one reel link
        const querySRV = 'a[href*="/reel/"]';
        const elementsSRV = Array.from(post.querySelectorAll(querySRV));
        return (elementsSRV.length !== 1) ? '' : KeyWords.NF_SHORT_REEL_VIDEO;
    }

    function gf_isShortReelVideo(post) {
        // -- reel/short video post (single)
        // -- post must have only one reel link
        const querySRV = 'a[href*="/reel/"]';
        const elementsSRV = Array.from(post.querySelectorAll(querySRV));
        return (elementsSRV.length !== 1) ? '' : KeyWords.GF_SHORT_REEL_VIDEO;
    }

    function nf_isEventsYouMayLike(post) {
        // -- events you may like posts
        const query = (':scope div > div:nth-of-type(2) > div > div >  h3 > span');
        const events = querySelectorAllNoChildren(post, query, 0);
        return (events.length === 0) ? '' : KeyWords.NF_EVENTS_YOU_MAY_LIKE;
    }

    function nf_isFollow(post) {
        // -- follow someone/something post
        // - Pre 09/2024
        // const queryFollow = ':scope h4[id] > span > div > span';
        // - 09/2024 - added the extra query
        //const queryFollow = ':scope h4[id] > span > div > span, :scope h4[id] > span > span > div > span, :scope h4[id] > div > span > span[class] > div[class] > span[class]';
        const queryFollow = [':scope h4[id] > span > div > span', ':scope h4[id] > span > span > div > span', ':scope h4[id] > div > span > span[class] > div[class] > span[class]'];
        const elementsFollow = querySelectorAllNoChildren(post, queryFollow, 0, false);
        if (elementsFollow.length === 1) {
            return KeyWords.NF_FOLLOW;
        }

        if (Array.isArray(VARS.dictionaryFollow) && VARS.dictionaryFollow.length > 0) {
            const normaliseToLower = (value) => {
                if (!value || typeof value !== 'string') {
                    return '';
                }
                try {
                    return value.normalize('NFKC').toLowerCase();
                }
                catch (err) {
                    return value.toLowerCase();
                }
            };

            const hasFollowKeyword = (value) => {
                const normalised = normaliseToLower(value);
                return normalised !== '' && VARS.dictionaryFollow.some(keyword => normalised.includes(keyword));
            };

            const followButton = Array.from(post.querySelectorAll('a[role="button"], div[role="button"], span[role="button"]'))
                .find(btn => hasFollowKeyword(btn?.getAttribute?.('aria-label')) || hasFollowKeyword(btn?.textContent));
            if (followButton) {
                return KeyWords.NF_FOLLOW;
            }

            const blocks = post.querySelectorAll(nf_getBlocksQuery(post));
            if (blocks.length > 0) {
                const headerText = normaliseToLower(scanTreeForText(blocks[0]).join(' '));
                if (headerText !== '' && VARS.dictionaryFollow.some(keyword => headerText.includes(keyword))) {
                    return KeyWords.NF_FOLLOW;
                }
            }
        }

        return '';
    }

    function nf_isParticipate(post) {
        // -- participate in a post ...
        const queryParticipate = ':scope h4[id] > div[class] > span[dir] > span[class] > div[class] > span[class]';
        const elementsParticipate = querySelectorAllNoChildren(post, queryParticipate, 0);
        return (elementsParticipate.length !== 1) ? '' : KeyWords.NF_PARTICIPATE;
    }

    function findFirstMatch(postFullText, textValuesToFind) {
        const foundText = textValuesToFind.find(text => postFullText.includes(text));
        return foundText !== undefined ? foundText : '';
    }

    function findFirstMatchRegExp(postFullText, regexpTextValuesToFind) {
        // -- using Regular Expressions
        // -- user supplied the RE patterns
        for (const pattern of regexpTextValuesToFind) {
            // -- do not use 'g' - want to reset lastindex to 0 for each test.
            // --'i' flag for case-insensitive matching;
            const regex = new RegExp(pattern, 'i');
            if (regex.test(postFullText)) {
                return pattern;
            }
        }
        return '';
    }

    function nf_isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- news feed post's blocks (have 1-4 blocks)
        // -- scan 1st & 3rd blocks
        // -- used by the fn extractTextContent() and fn doMoppingInfoBox()
        const postTexts = (extractTextContent(post, nf_getBlocksQuery(post), 3)).join(' ').toLowerCase();
        if (VARS.Options.NF_BLOCKED_RE) {
            const blockedText = findFirstMatchRegExp(postTexts, VARS.Filters.NF_BLOCKED_TEXT_LC);
            return blockedText;
        }
        else {
            const blockedText = findFirstMatch(postTexts, VARS.Filters.NF_BLOCKED_TEXT_LC);
            return blockedText;
        }
    }

    function gf_isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- groups feed post's blocks (have 1-4 blocks)
        // -- scan first 3 blocks
        // -- some users don't have [aria-posinset], hence [aria-describedby]

        const postTexts = (extractTextContent(post, gf_getBlocksQuery(post), 3)).join(' ').toLowerCase();
        if (VARS.Options.GF_BLOCKED_RE) {
            const blockedText = findFirstMatchRegExp(postTexts, VARS.Filters.GF_BLOCKED_TEXT_LC);
            return blockedText;
        }
        else {
            const blockedText = findFirstMatch(postTexts, VARS.Filters.GF_BLOCKED_TEXT_LC);
            return blockedText;
        }

    }

    function vf_isBlockedText(post, queryBlocks) {
        // - check for blocked text - partial text match
        // -- regular videos feed post's blocks (have 1-3 blocks)
        // -- scan 1st block only
        const postTexts = (extractTextContent(post, queryBlocks, 1)).join(' ').toLowerCase();
        if (VARS.Options.vF_BLOCKED_RE) {
            const blockedText = findFirstMatchRegExp(postTexts, VARS.Filters.VF_BLOCKED_TEXT_LC);
            return blockedText;
        }
        else {
            const blockedText = findFirstMatch(postTexts, VARS.Filters.VF_BLOCKED_TEXT_LC);
            return blockedText;
        }
    }

    function pp_isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- news feed post's blocks (have 1-4 blocks)
        // -- scan 1st & 3rd blocks
        // -- used by the fn extractTextContent() and fn doMoppingInfoBox()
        const postTexts = (extractTextContent(post, nf_getBlocksQuery(post), 3)).join(' ').toLowerCase();
        if (VARS.Options.PP_BLOCKED_RE) {
            const blockedText = findFirstMatchRegExp(postTexts, VARS.Filters.PP_BLOCKED_TEXT_LC);
            return blockedText;
        }
        else {
            const blockedText = findFirstMatch(postTexts, VARS.Filters.PP_BLOCKED_TEXT_LC);
            return blockedText;
        }
    }

    function vf_isVideoLive(post) {
        // - check for "LIVE" indicator on videos
        const liveRule = 'div[role="presentation"] ~ div > div:nth-of-type(1) > span';
        const elLive = post.querySelectorAll(liveRule);
        return (elLive.length > 0) ? KeyWords.VF_LIVE : '';
    }

    function vf_isInstagram(post) {
        // - check for Instagram video posts
        // -- usually marked with authors having href="#"
        // -- nb: some sponsored posts may have a similar structure - ignore for now.
        const instagramRule = 'div > div > div > div > div > a[href="#"] > div > svg';
        const elInstagram = post.querySelectorAll(instagramRule);
        return (elInstagram.length > 0) ? KeyWords.VF_INSTAGRAM : '';
    }

    function findDuplicateVideos(urlQuery, postQuery, patternUsed) {
        // - scan the document for all videos having the same video id.
        const watchVideos = document.querySelectorAll(urlQuery);
        // console.info(log + 'findDuplicateVideos(); video: ', urlQuery, ' count:', watchVideos.length);
        if (watchVideos.length < 2) {
            return;
        }
        // - flag those duplicates ...
        // for (let i = watchVideos.length - 1; i >= 1; i--) {
        //     const videoPost = watchVideos[i].closest(postQuery);
        //     // console.info(log + 'findDuplicateVideos(); found duplicate?', videoPost);
        //     if (videoPost) {
        //         console.info(log + 'findDuplicateVideos(); duplicate: ', urlQuery, postQuery, patternUsed, videoPost);
        //         vf_hidePost(videoPost, KeyWords.VF_DUPLICATE_VIDEOS, '');
        //     }
        // }
        for (let i = 1; i < watchVideos.length; i++) {
            const videoPost = watchVideos[i].closest(postQuery);
            // console.info(log + 'findDuplicateVideos(); found duplicate?', videoPost);
            if (videoPost) {
                console.info(log + 'findDuplicateVideos(); duplicate: ', urlQuery, postQuery, patternUsed, videoPost);
                vf_hidePost(videoPost, KeyWords.VF_DUPLICATE_VIDEOS, '');
            }
        }
    }

    function vf_hideDuplicateVideos(post, postQuery) {
        // -- check for duplicate video posts
        // -- hides duplicate videos
        // :: return : <nothing>

        // -- nb: there's two video url patterns to look for ...
        // -- nb: each video post has two links to the video.

        // -- try pattern #1: "/watch/?v=....&..."
        const elWatchVideo = post.querySelector('div > span > a[href*="/watch/?v="]');
        if (elWatchVideo) {
            // - extract the video-id
            const watchVideoVID = new URL(elWatchVideo.href).searchParams.get('v');
            if (watchVideoVID) {
                findDuplicateVideos(`div > span > a[href*="/watch/?v=${watchVideoVID}&"]`, postQuery, '1');
            }
        }
        else {
            // -- try pattern #2:  "/<profile-name>/videos/.../?"
            const elUserVideo = post.querySelector('div > span > a[href*="/videos/"]');
            if (elUserVideo) {
                // -- extract the video-id
                const watchVideoVID = elUserVideo.href.split('/videos/')[1].split('/')[0];
                if (watchVideoVID) {
                    findDuplicateVideos(`div > span > a[href*="/videos/${watchVideoVID}/"]`, postQuery, '2');
                }
            }
        }
    }

    function vf_hideSponsoredBlock(post, query, queryBlocks) {
        let videoBlocks = post.querySelectorAll(queryBlocks);
        if (videoBlocks.length < 3) {
            return;
        }
        const thirdBlock = videoBlocks[2];
        if (thirdBlock.hasAttribute('class')) {
            return;
        }
        if (thirdBlock.hasAttribute(VARS.hideAtt)) {
            return;
        }
        thirdBlock.setAttribute(VARS.hideAtt, 'Sponsored Content');
        console.info(log + 'vf_hideSponsoredBlock(); third block hidden:', thirdBlock);
    }

    function getVideoPublisherPathFromURL(videoURL) {

        // -- sample incoming href:  "https://www.facebook.com/watch/accesshollywood/?__cft__[0]=AZXwuwSI60vEG7hi6bj6YdygG6S8_Afw8RDQ3P-WX2316ihzte0s3aHyt_d-lNbJsqsfaayjaKMYsZNnrysjlKgUioONtwOdliRijNMzf5t81m1NRoqCkhsH2AuhRcpfi3AzBMIyMtbvnSgtU5ETIXEAT7NWllDpX-MdZN1eZElI9_yA8ebTVTyB6Ly58z5bv_E&__tn__=%3C"
        // -- sample return href: "https://www.facebook.com/accesshollywood/"

        const beginURL = videoURL.split('?')[0];
        if (!beginURL) {
            return '';
        }
        if (beginURL.indexOf('/watch/') >= 0) {
            return beginURL.replace('/watch/', '/');
        }
        else {
            return '';
        }
    }


    function vf_setPostLinkToOpenInNewTab(post) {
        // -- from the watch videos feed, open a video post in a new window
        // -- add an icon next to the other icons at the top of the video post.
        // -- (there's no equivalent function for news feed posts - no quick way of getting the post's URL)
        // :: return <nothing>

        try {
            if (post.querySelector(`.${VARS.iconNewWindowClass}`)) {
                // -- already has the open in new window component
                return;
            }

            // - parts of the post's link can be found in the first link
            const postLinks = post.querySelectorAll('div > span > a[href*="/watch/?v="][role="link"]');

            if (postLinks.length > 0) {
                const postLink = postLinks[0];
                // -- get the container for the lower part of the header block.
                const elHeader = climbUpTheTree(postLink, 3);
                const blockOfIcons = elHeader.querySelector(':scope > div:nth-of-type(2) > span');
                let newLink = '';

                // if (blockOfIcons && blockOfIcons.querySelector(`.${VARS.iconNewWindowClass}`) === null) {
                if (blockOfIcons) {
                    // -- need to create the video post's link
                    // -- nb: last post may not be a post - it could be the "You've completely caught up. Check again later for more updates" post.
                    // --     it doesn't have a set of icons ...
                    const videoId = new URL(postLink.href).searchParams.get('v');

                    if (videoId !== null) {
                        // -- output structure: https://www.facebook.com/<publisher>/videos/?v=<video id>
                        // --- try this:        https://www.facebook.com/<publisher>/videos/1106976933678203/
                        const publisherLink = getVideoPublisherPathFromURL(post.querySelector('a[href*="/watch/"]').href);
                        if (publisherLink === '') {
                            return;
                        }
                        newLink = publisherLink + 'videos/' + videoId + '/';
                    }
                    else {
                        return;
                    }
                }
                else {
                    // -- hmm, we don't have the info to reconstruct a video post link.
                    return;
                }

                // -- put in fb's spacer between icons.
                const spanSpacer = document.createElement('span');
                spanSpacer.innerHTML = '<span><span style="position:absolute;width:1px;height:1px;">&nbsp;</span><span aria-hidden="true"> · </span></span>';
                blockOfIcons.appendChild(spanSpacer);

                const container = document.createElement('span');
                container.className = VARS.iconNewWindowClass;
                const span2 = document.createElement('span');
                const linkNew = document.createElement('a');
                linkNew.setAttribute('href', newLink);
                linkNew.innerHTML = VARS.iconNewWindow;
                linkNew.setAttribute('target', '_blank');
                span2.appendChild(linkNew);
                container.appendChild(span2);

                blockOfIcons.appendChild(container);
            }
        }
        catch (error) {
            console.error('vf_setPostLinkToOpenInNewTab(); Error:', post, error);
        }
    }

    function mp_getBlockedPrices(elBlockOfText) {
        // -- scan the first price listed in itemPrices for a match.
        // -- (second price is the old one (with strike-through))
        // -- needs to be an extact match.
        // :: return : blocked text or ''.
        if (VARS.Filters.MP_BLOCKED_TEXT.length > 0) {
            const itemPrices = mp_scanTreeForText(elBlockOfText);
            const blockedPrices = findFirstMatch(itemPrices, VARS.Filters.MP_BLOCKED_TEXT_LC);
            return blockedPrices;
        }
        return '';
    }

    function mp_getBlockedTextDescription(collectionBlocksOfText, skipFirstBlock = true) {
        // -- scan the various blocks of text for blocked text.
        // -- partial match.
        // :: return : blocked text or ''.
        if (VARS.Filters.MP_BLOCKED_TEXT_DESCRIPTION.length > 0) {
            const startIndex = skipFirstBlock ? 1 : 0;
            for (let i = startIndex; i < collectionBlocksOfText.length; i++) {
                const descriptionTextList = mp_scanTreeForText(collectionBlocksOfText[i]);
                const descriptionText = descriptionTextList.join(' ').toLowerCase();
                const blockedText = findFirstMatch(descriptionText, VARS.Filters.MP_BLOCKED_TEXT_DESCRIPTION_LC);
                if (blockedText.length > 0) {
                    return blockedText;
                }
            }
        }
        return '';
    }

    function mp_doBlockingByBlockedText() {
        // -- scan the marketplace for items
        // -- hide an item if the price is listed in the list of blocked text
        // -- hide an item if the descriptinis listed in the list of blocked description text
        // :: return <nothing>


        const queries = [
            // -- October 2024 (fb changed code - personalised and non-personalised)
            // -- landing page listing
            `div[style]:not([${postAtt}]) > div > div > span > div > div > div > div > a[href*="/marketplace/item/"]`,
            `div[style]:not([${postAtt}]) > div > div > span > div > div > div > div > a[href*="/marketplace/np/item/"]`,
            // -- category page listing
            `div[style]:not([${postAtt}]) > div > span > div > div > a[href*="/marketplace/item/"]`,
            `div[style]:not([${postAtt}]) > div > span > div > div > a[href*="/marketplace/np/item/"]`,

            // -- March 2024 (fb changed code - personalised and non-personalised)
            // -- landing page listing
            `div[style]:not([${postAtt}]) > div > div > span > div > div > a[href*="/marketplace/item/"]`,
            `div[style]:not([${postAtt}]) > div > div > span > div > div > a[href*="/marketplace/np/item/"]`,
            // -- category page listing
            `div[style]:not([${postAtt}]) > div > span > div > div > a[href*="/marketplace/item/"]`,
            `div[style]:not([${postAtt}]) > div > span > div > div > a[href*="/marketplace/np/item/"]`
        ];
        let items = [];
        for (const query of queries) {
            items = document.querySelectorAll(query);
            if (items.length > 0) {
                break;
            }
        }
        for (const item of items) {
            // - item's container
            const box = item.closest('div[style]');
            if (box.hasAttribute(postAttMPSkip)) {
                if (box.innerHTML.length == box.getAttribute(postAttMPSkip)) {
                    continue;
                }
            }
            // - blocks of text to scan
            const queryTextBlock = ':scope > div > div:nth-of-type(2) > div';
            const blocksOfText = item.querySelectorAll(queryTextBlock);
            if (blocksOfText.length > 0) {
                // -- price(s) is in first block
                const blockedTextPrices = mp_getBlockedPrices(blocksOfText[0]);
                // -- description is in other blocks
                const blockedTextDescription = mp_getBlockedTextDescription(blocksOfText, true);

                if (blockedTextPrices.length > 0) {
                    // -- hide the item
                    mp_hideBox(box, blockedTextPrices);
                }
                else if (blockedTextDescription.length > 0) {
                    // -- hide the item
                    mp_hideBox(box, blockedTextDescription);
                }
                else {
                    // -- flag the item not to be scanned again
                    box.setAttribute(postAtt, '');
                    // box.setAttribute(postAttMPSkip, box.innerHTML.length);
                }
            }
        }
    }

    function vf_scrubSponsoredBlock(post) {
        // - some videos have a sponsored block beneath the video block/section
        // - includes "watch more ___ videos by ___"
        // :: return <nothing>
        const queryForContainer = ':scope > div > div > div > div > div > div:nth-of-type(2)';
        const blocksContainer = post.querySelector(queryForContainer);
        if (blocksContainer && blocksContainer.childElementCount > 0) {
            const adBlock = blocksContainer.querySelector(':scope > a');
            if (adBlock && !adBlock.hasAttribute(postAtt)) {
                hideBlock(adBlock, adBlock, KeyWords.SPONSORED);
            }
        }
    }

    function swatTheMosquitos(post) {
        // - scan the post for any gifs that is animating (pausing them once)
        // -- does not hide the post!
        // :: return <nothing>
        const query = getMosquitosQuery();
        const animatedGIFs = post.querySelectorAll(query);
        // console.info(log + 'swatTheMosquitos(); animatedGIFs::', animatedGIFs, post);
        for (const gif of animatedGIFs) {
            // mimic user clicking on animating gif
            // - which will trigger fb's click event.
            // - grab the A tag that is displayed when paused (uses Opacity)
            let parent = climbUpTheTree(gif, 2);
            let sibling = parent.querySelector(':scope > a');
            if (!sibling) {
                // -- pre 2023 rule
                parent = climbUpTheTree(gif, 3);
                sibling = parent.querySelector(':scope > a');
            }
            // console.info(log + 'swatTheMosquitos(); gif / parent / sibling:', gif, parent, sibling);
            if (sibling) {
                const sibingCS = window.getComputedStyle(sibling);
                if (sibingCS.opacity === '0') {
                    // 0 = animating; 1 = paused;
                    gif.parentElement.click();
                    // console.info(log + 'swatTheMosquitos() - paused', gif);
                }
                gif.parentElement.setAttribute(postAtt, '1');
            }
        }
    }

    function nf_getBlocksQuery(post) {
        // :: return the query needed to get a group post's blocks
        // - block 0 = Suggested headings, block 1 = title/heading, block 2 = content, block 3 = info box / comments, block 4 = comments
        // -- some users don't have [aria-posinset], hence [aria-describedby]
        let blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div';
        let blocks = post.querySelectorAll(blocksQuery);
        if (blocks.length <= 1) {
            // -- try again .. (December 2022 change)
            // -- no need to do another querySelectorAll(..) - extractTextContent will do this.
            blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div > div';
        }
        return blocksQuery;
    }

    function gf_getBlocksQuery(post) {
        // :: return the query needed to get a group post's blocks
        // - block 0 = Suggested headings, block 1 = title/heading, block 2 = content, block 3 = info box / comments, block 4 = comments
        let blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div';
        let blocks = post.querySelectorAll(blocksQuery);
        if (blocks.length <= 1) {
            // try again .. (Dec 2022 change)
            // -- no need to do another querySelectorAll(..) - extractTextContent will do this.
            blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div > div';
        }
        return blocksQuery;
    }

    function getMosquitosQuery() {
        const queryForMosquitos = `div[role="button"][aria-label*="GIF"]:not([${postAtt}]) > i:not([data-visualcompletion])`;
        return queryForMosquitos;
    }

    function nf_hasAnimatedGifContent(post) {
        // - scan the post's content for any animated gifs
        // -- scan the post's content block (2nd block) only (ignore comments block)
        // -- the gif is usually either MP4 or GIPHY ... with an round dashed label "GIF" overlay
        // :: return <reason>

        const postBlocks = post.querySelectorAll(nf_getBlocksQuery(post));

        if (postBlocks.length >= 2) {
            const contentBlock = postBlocks[1];
            const queryForAnimatedGIF = getMosquitosQuery();
            const animatedGIFs = contentBlock.querySelectorAll(queryForAnimatedGIF);
            const animatedGIFsText = (animatedGIFs.length > 0) ? KeyWords.GF_ANIMATED_GIFS_POSTS : '';
            // console.info(log + 'nf_hasAnimatedGifContent(); results::', contentBlock, animatedGIFs.length, animatedGIFsText, post);
            return animatedGIFsText;
        }
        return '';
    }

    function gf_hasAnimatedGifContent(post) {
        // - scan the post's content for any animated gifs
        // -- scan the post's content block only (ignore comments block)
        // -- the gif is usually either MP4 or GIPHY ... with an round dashed label "GIF" overlay
        // :: return <reason>

        const postBlocks = post.querySelectorAll(gf_getBlocksQuery(post));

        if (postBlocks.length >= 2) {
            const contentBlock = postBlocks[1];
            const queryForAnimatedGIF = getMosquitosQuery();
            const animatedGIFs = contentBlock.querySelectorAll(queryForAnimatedGIF);
            const animatedGIFsText = (animatedGIFs.length > 0) ? KeyWords.GF_ANIMATED_GIFS_POSTS : '';
            // console.info(log + 'gf_hasAnimatedGifContent(); results::', contentBlock, animatedGIFs.length, animatedGIFsText, post);
            return animatedGIFsText;
        }
        return '';
    }

    function nf_scrubTheTabbies() {
        // -- Tablist : stories | reels | rooms
        // -- Stories
        // -- both appear at top of NF
        const queryTabList = 'div[role="main"] > div > div > div > div > div > div > div > div[role="tablist"]';
        const elTabList = document.querySelector(queryTabList);
        if (elTabList) {
            if (elTabList.hasAttribute(postAttChildFlag)) {
                return;
            }
            // -- parent is 4 levels up.
            const elParent = climbUpTheTree(elTabList, 4);
            if (elParent) {
                hideFeature(elParent, (KeyWords.NF_TABLIST_STORIES_REELS_ROOMS[VARS.language]).replaceAll('"', ''), false);
                elTabList.setAttribute(postAttChildFlag, 'tablist');
                return;
            }
        }
        else {
            // - Stories only
            // -- two patterns
            // -- - one with listing of stories
            // -- - one with no listing of stories

            // const queryForCreateStory = 'a[href*="/stories/create"]'; - too loose, grabs the FB menu's entries as well ...
            const queryForCreateStory = 'div[role="main"] > div > div > div > div > div > div > div > div a[href*="/stories/create"]';
            const elCreateStory = document.querySelector(queryForCreateStory);
            if (elCreateStory && !elCreateStory.hasAttribute(postAttChildFlag)) {
                const elParent = getStoriesParent(elCreateStory);
                if (elParent !== null) {
                    hideFeature(elParent, KeyWords.NF_TABLIST_STORIES_REELS_ROOMS, false);
                    elCreateStory.setAttribute(postAttChildFlag, '1');
                }
            }
        }

    }


    function getStoriesParent(element) {
        const elAFewBranchesUp = climbUpTheTree(element, 4);
        const moreStories = elAFewBranchesUp.querySelectorAll('a[href*="/stories/"]');
        let elParent = null;
        if (moreStories.length > 1) {
            // -- query results has create and at least 1 story link
            elParent = climbUpTheTree(element.closest('div[aria-label][role="region"]'), 4);
        }
        else {
            // -- query results has one link - create story
            elParent = climbUpTheTree(element, 7);
        }
        return elParent;
    }

    function nf_isStoriesPost(post) {
        // - Stories posts
        // -- appears in News-Feed stream
        const queryForStory = '[href^="/stories/"][href*="source=from_feed"]';
        const elStory = post.querySelector(queryForStory);
        return (elStory) ? KeyWords.NF_STORIES : '';
    }

    function nf_cleanTheConsoleTable(findItem = 'Sponsored') {
        // -- mopping up the news feed aside panel. findItem values: Sponosored | Suggestions
        // :: return : <nothing>

        const query = 'div[role="complementary"] > div > div > div > div > div:not([data-visualcompletion])';
        const asideBoxes = document.querySelectorAll(query);
        if (asideBoxes.length === 0) {
            return;
        }
        // -- only interested in the first container.
        const asideContainer = asideBoxes[0];
        if (asideContainer.childElementCount === 0) {
            return;
        }

        let elItem = null;
        let reason = '';
        if (findItem === 'Sponsored') {
            elItem = asideContainer.querySelector(`:scope > span:not([${postAtt}])`);
            if (elItem && elItem.innerHTML.length > 0) {
                reason = KeyWords.SPONSORED;
            }
        }
        else if (findItem === 'Suggestions') {
            elItem = asideContainer.querySelector(`:scope > div:not([${postAtt}])`);
            if (elItem && elItem.innerHTML.length > 0) {
                // -- check for birthdays
                const birthdays = elItem.querySelectorAll('a[href="/events/birthdays/"]').length > 0;
                // -- check for "your pages and profiles"
                // -- suggested groups only have 1 i[..] attribute
                const pagesAndProfiles = elItem.querySelectorAll('div > i[data-visualcompletion="css-img"]').length > 1;

                if (birthdays === false && pagesAndProfiles === false) {
                    reason = KeyWords.NF_SUGGESTIONS;
                }
            }
        }
        if (reason.length > 0) {
            nf_hidePost(elItem, reason);
        }
    }

    function gf_cleanTheConsoleTable(findItem = 'Suggestions') {
        // -- mopping up the groups feed aside panel - suggested
        // :: return : <nothing>

        // console.info(log + 'gf_cleanTheConsoleTable() - fix me!');

        // return;


        if (findItem !== 'Suggestions') {
            return;
        }

        const query = `a[href*="/groups/discover"]:not([${postAtt}]) > span > span`;
        const asideBoxes = querySelectorAllNoChildren(document, query, 1);
        if (asideBoxes.length === 0) {
            return;
        }

        for (const asideBox of asideBoxes) {
            // parent is 21 levels up ...
            const elParent = climbUpTheTree(asideBox, 21);
            asideBox.closest('a').setAttribute(postAtt, KeyWords.GF_SUGGESTIONS);
            hideFeature(elParent, KeyWords.GF_SUGGESTIONS, true);
        }
    }

    function gf_setPostLinkToOpenInNewTab(post) {
        // -- from the groups feed, open a group post in a new window
        // -- add an icon next to the other icons at the top of the group post.
        // -- (there's no equivalent function for news feed posts - no quick way of getting the post's URL)
        // :: return <nothing>

        // console.info(log + 'gf_setPostLinkToOpenInNewTab(); post:', post);

        try {
            if (post.hasAttribute('class') && post.classList.length > 0) {
                // -- not a group post.
                return;
            }
            if (post.querySelector(`.${VARS.iconNewWindowClass}`)) {
                // -- already has the open in new window component
                return;
            }
            // - parts of the post's link can be found in the first link
            const postLinks = post.querySelectorAll('div > div > a[href*="/groups/"][role="link"]');
            if (postLinks.length > 0) {
                const postLink = postLinks[0];
                // -- get the container for the lower part of the header block.
                const elHeader = climbUpTheTree(postLink, 4);
                const blockOfIcons = elHeader.querySelector(':scope > div:nth-of-type(2) > div > div:nth-of-type(2) > span > span');
                let newLink = '';

                // if (blockOfIcons && blockOfIcons.querySelector(`.${VARS.iconNewWindowClass}`) === null) {
                if (blockOfIcons) {
                    // -- need to create the group post's link
                    // -- nb: last post may not be a post - it could be the "You've completely caught up. Check again later for more updates" post.
                    // --     it doesn't have a set of icons ...
                    const postId = new URLSearchParams(postLink.href).get('multi_permalinks');
                    if (postId !== null) {
                        // -- sample link: https://www.facebook.com/groups/424532172574012/?hoisted_section_header_type=recently_seen&multi_permalinks=720886619605231&__cft__[0]=AZV1vpwA0h21cVRZoS_GM3Q7H_Ul77iObEbYu2EA4oL7XyM-C78sQp5KIEpPooBCQZ2dmAMTvpCi1qYt5VxSTiCQCBkTmv8_Ra77OyacW2l685TVbttwb4qwKUm6AVr0zIapBxKODmLHgnNcYaSkXeCEOMEMdxQajQX8NTcniWYUA7OuVNY5C4F-ETSuab37Azw&__tn__=%3C%3C%2CP-R
                        // -- .. converted to: https://www.facebook.com/groups/424532172574012/posts/720886619605231/
                        // -- post link structure: https://www.facebook.com/groups/<group id>/posts/<post id>/
                        newLink = postLink.href.split('?')[0] + 'posts/' + postId + '/';
                    }
                    else {
                        return;
                    }
                }
                else {
                    // -- hmm, we don't have the info to reconstruct a group post link.
                    return;
                }

                // -- put in fb's spacer between icons.
                const spanSpacer = document.createElement('span');
                spanSpacer.innerHTML = '<span><span style="position:absolute;width:1px;height:1px;">&nbsp;</span><span aria-hidden="true"> · </span></span>';
                blockOfIcons.appendChild(spanSpacer);

                const container = document.createElement('span');
                container.className = VARS.iconNewWindowClass;
                const span2 = document.createElement('span');
                const linkNew = document.createElement('a');
                linkNew.setAttribute('href', newLink);
                linkNew.innerHTML = VARS.iconNewWindow;
                linkNew.setAttribute('target', '_blank');
                span2.appendChild(linkNew);
                container.appendChild(span2);

                blockOfIcons.appendChild(container);
            }
        }
        catch (error) {
            console.error(log + 'gf_setPostLinkToOpenInNewTab(); Error:', post, error);
        }
    }

    function scrubInfoBoxes(post) {
        // -- hide the "truth" info boxes that appear in posts having a certain topic.
        // :: return <nothing>
        let hiding = false;

        if (VARS.Options.OTHER_INFO_BOX_CLIMATE_SCIENCE) {
            const elLink = post.querySelector(`a[href*="${masterKeyWords.pathInfo.OTHER_INFO_BOX_CLIMATE_SCIENCE.pathMatch}"]:not([${postAtt}])`);
            if (elLink !== null) {
                // - block @ 5 levels up.
                const block = climbUpTheTree(elLink, 5);
                hideBlock(block, elLink, KeyWords.OTHER_INFO_BOX_CLIMATE_SCIENCE);
                hiding = true;
            }
        }
        //console.info(log+'scrubInfoBoxes():', hiding, VARS.Options.OTHER_INFO_BOX_CORONAVIRUS, masterKeyWords.pathInfo.OTHER_INFO_BOX_CORONAVIRUS.pathMatch, post);
        if (!hiding && VARS.Options.OTHER_INFO_BOX_CORONAVIRUS) {
            const elLink = post.querySelector(`a[href*="${masterKeyWords.pathInfo.OTHER_INFO_BOX_CORONAVIRUS.pathMatch}"]:not([${postAtt}])`);
            if (elLink !== null) {
                // - block @ 5 levels up.
                const block = climbUpTheTree(elLink, 5);
                hideBlock(block, elLink, KeyWords.OTHER_INFO_BOX_CORONAVIRUS);
                hiding = true;
            }
        }
        if (!hiding && VARS.Options.OTHER_INFO_BOX_SUBSCRIBE) {
            const elLink = post.querySelector(`a[href*="${masterKeyWords.pathInfo.OTHER_INFO_BOX_SUBSCRIBE.pathMatch}"]:not([${postAtt}])`);
            if (elLink !== null) {
                // - block @ 5 levels up.
                const block = climbUpTheTree(elLink, 5);
                hideBlock(block, elLink, KeyWords.OTHER_INFO_BOX_SUBSCRIBE);
                hiding = true;
            }
        }
    }

    function nf_hideNumberOfShares(post) {
        // -- hide the number of shares component
        // :: return <nothing>
        const query = `div[data-visualcompletion="ignore-dynamic"] > div:not([class]) > div:not([class]) > div:not([class]) > div[class] > div:nth-of-type(1) > div > div > span > div:not([id]) > span[dir]:not(${postAtt})`;
        const shares = post.querySelectorAll(query);
        for (const share of shares) {
            share.setAttribute(VARS.cssHideNumberOfShares, '');
            if (VARS.Options.VERBOSITY_DEBUG) {
                share.setAttribute(VARS.showAtt, '');
            }
            share.setAttribute(postAtt, 'Shares');
        }
    }

    function gf_hideNumberOfShares(post) {
        // -- groups feed posts have same '# shares' html structure as news feed posts.
        // -- .. hence calling nf_hideNumberOfShares(...)
        // :: return <nothing>
        nf_hideNumberOfShares(post);
    }

    function nf_postExceedsLikeCount(post) {
        // -- hide posts having Like counts over a certain number
        // const query = 'div[data-visualcompletion="ignore-dynamic"] > div:not([class]) > div:not([class]) > div:not([class]) > div[class] > div:nth-of-type(1) > div > div[class] > span > div[role="button"] > span[class][aria-hidden] > span:not([class]) > span[class]';
        const queryLikes = 'span[role="toolbar"] ~ div div[role="button"] > span[class][aria-hidden] > span:not([class]) > span[class]';
        const elLikes = post.querySelectorAll(queryLikes);
        if (elLikes.length > 0) {
            const maxLikes = parseInt(VARS.Options.NF_LIKES_MAXIMUM_COUNT);
            const postLikesCount = getFullNumber(elLikes[0].textContent.trim());
            // const postLikesCount = parseInt(elLikes[0].textContent);
            const results = postLikesCount >= maxLikes ? KeyWords.NF_LIKES_MAXIMUM : '';
            // console.info(log + 'nf_postExceedsLikeCount(); results:', results, maxLikes, postLikesCount, post);
            return results;
        }
        return false;
    }

    function getFullNumber(value) {
        // -- convert shortened numbers into full numbers
        // -- e.g 323 to 323; 1.2K to 1200; 1.4M to 1400000;
        // :: returns a whole number.
        let nvalue = 0;
        if (value !== '') {
            value = value.toUpperCase();
            if (value.endsWith('K') || value.endsWith('M')) {
                let multiplier = 1;
                let pow_Y = 0;
                if (value.endsWith('K')) {
                    // -- thousands
                    multiplier = 1000;
                    pow_Y = 3;
                }
                else if (value.endsWith('M')) {
                    // -- millions
                    multiplier = 1000000;
                    pow_Y = 6;
                }

                let bits = value.replace(/[KM]/g, '').replace(',', '.').split('.');

                nvalue = parseInt(bits[0], 10) * multiplier;

                if (bits.length > 1) {
                    nvalue += (parseInt(bits[1], 10) * Math.pow(10, (pow_Y - bits[1].length)));
                }
            }
            else {
                // -- less than 1000.
                nvalue = parseInt(value, 10);
            }
        }
        // console.info('results:', value, nvalue);
        return nvalue;
    }


    function nf_scrubTheSurvey() {
        // -- fb survey
        // -- appears on the home page ..
        // document.querySelectorAll('a[href*="/survey/?session="] > div[role="none"]')[0].closest('[style*="border-radius"]').parentElement.parentElement.parentElement
        let btnSurvey = document.querySelector(`a[href*="/survey/?session="] > div[role="none"]:not([${postAtt}])`);
        if (btnSurvey) {
            let elContainer = climbUpTheTree(btnSurvey.closest('[style*="border-radius"]'), 3);
            if (elContainer) {
                hideFeature(elContainer, 'Survey', false);
                btnSurvey.setAttribute(postAttChildFlag, KeyWords.NF_SURVEY);
            }
        }
    }

    function nf_getCollectionOfPosts() {
        // -- get a collection of posts
        // -- fb serves a mixture of html structures
        // -- so, we have a set of queries to try until we have found something...
        // :: return : collection of posts.

        let posts = [];
        // -- various news feed queries
        const queries = [
            // -- grab child div in each post having a class.
            // -- nb: <details> is injected in between some <div>s - effectively kicking it out of the collection.

            // -- current feed structure (October 2025):
            'h3[dir="auto"] ~ div div[aria-posinset]',
            'h2[dir="auto"] ~ div div[aria-posinset]',
            'h3[dir="auto"] ~ div div[role="article"]',
            'h2[dir="auto"] ~ div div[role="article"]',
            'div[role="main"] div[aria-posinset]',
            'div[role="main"] div[role="article"]',
            'div[role="main"] div[data-virtualized] div[role="article"]',

            // -- legacy fallbacks:
            'h3[dir="auto"] ~ div:not([class]) > div > div > div > div > div',
            'h2[dir="auto"] ~ div:not([class]) > div > div > div > div > div',
            'div[role="feed"] > h3[dir="auto"] ~ div:not([class]) > div[data-pagelet*="FeedUnit_"] > div > div > div > div',
            'div[role="feed"] > h2[dir="auto"] ~ div:not([class]) > div[data-pagelet*="FeedUnit_"] > div > div > div > div',

            // 'h3[dir="auto"] ~ div:not([class]) > div.x1lliihq > div > div > div > div',
            // 'h2[dir="auto"] ~ div:not([class]) > div.x1lliihq > div > div > div > div',

            // 'h3[dir="auto"] ~ div:not([class]) > div[class] > div > div > div > div',
            // 'h2[dir="auto"] ~ div:not([class]) > div[class] > div > div > div > div',

        ];

        for (const query of queries) {
            const nodeList = document.querySelectorAll(query);
            if (nodeList.length > 0) {
                posts = Array.from(nodeList);
                break;
            }
        }

        return posts;
    }

    function hasSizeChanged(oldValue, newValue) {
        // -- any changes in the size of the html structure?
        // -- nb: fb is constantly changing something small ... hence the tolerance
        const tolerance = 16;
        // console.info(log + `hasSizeChanged(${oldValue}, ${newValue}); results: ${Math.abs(parseInt(newValue, 10) - parseInt(oldValue, 10))}`);
        return Math.abs(parseInt(newValue, 10) - parseInt(oldValue, 10)) > tolerance;
    }

    function isTheHouseDirty() {
        // -- check if the main column exists and has changed ...
        // -- check if dialog exists and has changed ...
        // -- applies to news feed,
        // -- using a quick/crude method of testing if something changed - check size of innerHTML
        // -- (a more advanced, but slower method would be hashing)
        // :: return : array of two items

        const arrReturn = [null, null]; // -- null means no change.

        // -- main column / content (feed)
        const mainColumnQuery = 'div[role="navigation"] ~ div[role="main"]';
        const mainColumn = document.querySelector(mainColumnQuery);
        if (mainColumn) {
            if (mainColumn.hasAttribute(mainColumnAtt) === false) {
                // -- first timer ...
                arrReturn[0] = mainColumn;
            }
            else if (hasSizeChanged(mainColumn.getAttribute(mainColumnAtt), mainColumn.innerHTML.length)) {
                // -- change detected ...
                arrReturn[0] = mainColumn;
            }
        }

        // -- dialog (article popup)
        const elDialog = document.querySelector('div[role="dialog"]');
        if (elDialog) {
            if (elDialog.hasAttribute(mainColumnAtt) === false) {
                arrReturn[1] = elDialog;
            }
            else if (hasSizeChanged(elDialog.getAttribute(mainColumnAtt), elDialog.innerHTML.length)) {
                arrReturn[1] = elDialog;
            }
        }

        VARS.noChangeCounter++;
        return arrReturn;

    }

    function gf_isTheHouseDirty() {
        // -- check if the main column exists and has changed ...
        // -- check if dialog exists and has changed ...
        // -- applies to groups feed, group feed ...
        // -- using a quick/crude method of testing if something changed - check size of innerHTML
        // -- (a more advanced, but slower method would be hashing)
        // :: return : array of two items

        const arrReturn = [null, null]; // -- null means no change.

        // -- main column / content (feed)
        const mainColumnQuery = 'div[role="navigation"] ~ div[role="main"]';
        const mainColumn = document.querySelector(mainColumnQuery);
        if (mainColumn) {
            if (mainColumn.hasAttribute(mainColumnAtt) === false) {
                // -- first timer ...
                arrReturn[0] = mainColumn;
            }
            else if (hasSizeChanged(mainColumn.getAttribute(mainColumnAtt), mainColumn.innerHTML.length)) {
                // -- change detected ...
                arrReturn[0] = mainColumn;
            }
        }
        else {
            // -- inside a group profile ...
            const mainColumnQueryGP = 'div[role="main"] div[role="feed"]' ;
            const mainColumnGP = document.querySelector(mainColumnQueryGP);
            if (mainColumnGP) {
                if (mainColumnGP.hasAttribute(mainColumnAtt) === false) {
                    // -- first timer ...
                    arrReturn[0] = mainColumnGP;
                }
                else if (hasSizeChanged(mainColumnGP.getAttribute(mainColumnAtt), mainColumnGP.innerHTML.length)) {
                    // -- change detected ...
                    arrReturn[0] = mainColumnGP;
                }
            }
        }


        // -- dialog (article popup)
        const elDialog = document.querySelector('div[role="dialog"]');
        if (elDialog) {
            if (elDialog.hasAttribute(mainColumnAtt) === false) {
                arrReturn[1] = elDialog;
            }
            else if (hasSizeChanged(elDialog.getAttribute(mainColumnAtt), elDialog.innerHTML.length)) {
                arrReturn[1] = elDialog;
            }
        }


        VARS.noChangeCounter++;
        return arrReturn;

    }

    function mp_isTheHouseDirty() {
        // -- check if the main column size has changed ...
        // -- if yes, do scanning.
        // -- applies to marketplace ...

        // -- two scenarios; 1) non-dialog mode, 2) dailog mode (viewing a single item).

        // -- viewing an item in dialog mode or page mode ..
        if (VARS.mpType === 'item') {
            // -- do not test for mainColumnAtt first - in dialog mode that area is [hidden] and causes the function to return null ...
            const mainColumnDM = document.querySelector('div[hidden] ~ div[class*="__"] div[role="dialog"]');
            if (mainColumnDM) {
                if (mainColumnDM.hasAttribute(mainColumnAtt)) {
                    if (hasSizeChanged(mainColumnDM.getAttribute(mainColumnAtt), mainColumnDM.innerHTML.length)) {
                        // -- change detected ...
                        return mainColumnDM;
                    }
                }
                else {
                    // -- main column not yet marked
                    return mainColumnDM;
                }
            }
            const mainColumnPM = document.querySelector('div[role="navigation"] ~ div[role="main"]');
            if (mainColumnPM) {
                if (mainColumnPM.hasAttribute(mainColumnAtt)) {
                    if (hasSizeChanged(mainColumnPM.getAttribute(mainColumnAtt), mainColumnPM.innerHTML.length.toString())) {
                        // -- change detected ...
                        return mainColumnPM;
                    }
                }
                else {
                    // -- main column not yet marked
                    return mainColumnPM;
                }
            }
        }
        else {
            // -- standard mp pages.
            const mainColumn = document.querySelector(`[${mainColumnAtt}]`);
            if (mainColumn) {
                if (hasSizeChanged(mainColumn.getAttribute(mainColumnAtt), mainColumn.innerHTML.length)) {
                    // -- change detected ...
                    return mainColumn;
                }
            }
            else {
                // -- main column not yet  marked
                const query = 'div[role="navigation"] ~ div[role="main"]';
                const mainColumn = document.querySelector(query);
                if (mainColumn) {
                    return mainColumn;
                }
            }
        }
        // -- either main column not found or no change in size.
        // console.info(log + 'nf_isTheHouseDirty(); - no mainColumn found / no change in size');
        VARS.noChangeCounter++;
        return null;
    }

    function sf_isTheHouseDirty() {
        // -- check if the main column size has changed ...
        // -- if yes, do scanning.
        // -- applies to search results feed

        const query = 'div[role="region"] ~ div[role="main"]';
        const mainColumn = document.querySelector(query);
        if (mainColumn) {
            if (mainColumn.hasAttribute(mainColumnAtt) === false) {
                // -- first timer
                return mainColumn;
            }
            if (hasSizeChanged(mainColumn.getAttribute(mainColumnAtt), mainColumn.innerHTML.length)) {
                return mainColumn;
            }
        }

        // console.info(log + 'nf_isTheHouseDirty(); - no mainColumn found / no change in size');
        VARS.noChangeCounter++;
        return null;
    }

    function vf_isTheHouseDirty() {
        // -- check if the main column size has changed ...
        // -- if yes, do scanning.
        // -- applies to videos feed ...

        const arrReturn = [null, null]; // -- null means no change

        // -- main column / content (feed)
        // -- nb: sometimes we get more than one set of elements matching this ..
        // -- the first 2 could be related to "new videos for you * 1" ..
        // -- so grab the last one ...
        const mainColumnQuery = 'div[role="navigation"] ~ div[role="main"] div[role="main"] > div > div > div > div > div';
        const mainColumns = document.querySelectorAll(mainColumnQuery);
        //const mainColumn = document.querySelector(mainColumnQuery);
        let mainColumn = null;
        if (mainColumns.length > 0) {
            // - bypass the "new videos for you * 1" ...
            mainColumn = mainColumns[mainColumns.length - 1];
        }
        // console.info(log + 'vf_isTheHouseDirty(); mainColumn(1):', mainColumn);
        if (mainColumn) {
            if (mainColumn.hasAttribute(mainColumnAtt) === false) {
                // -- first  timer
                arrReturn[0] = mainColumn;
            }
            else if (hasSizeChanged(mainColumn.getAttribute(mainColumnAtt), mainColumn.innerHTML.length)) {
                // -- change detected ...
                arrReturn[0] = mainColumn;
            }
        }

        // -- dialog box (clicked 'expand' from video feed)
        // -- nb: vfType === 'item'
        const elDialog = document.querySelector('div[role="dialog"] div[role="main"]');
        // console.info(log + 'vf_isTheHouseDirty(); mainColumn(2):', elDialog);
        if (elDialog) {
            if (elDialog.hasAttribute(mainColumnAtt) === false) {
                arrReturn[1] = elDialog;
            }
            else if (hasSizeChanged(elDialog.getAttribute(mainColumnAtt), elDialog.innerHTML.length)) {
                arrReturn[1] = elDialog;
            }
        }

        VARS.noChangeCounter++;
        return arrReturn;
    }

    function pp_isTheHouseDirty() {
        // -- check if the main column size has changed ...
        // -- if yes, do scanning.
        // -- applies to profile pages feed

        const arrReturn = [null, null]; //-- null means no change

        // -- main column / content (feed)
        const mainColumnQuery = 'div[role="main"]';
        const mainColumn = document.querySelector(mainColumnQuery);
        if (mainColumn) {
            if (mainColumn.hasAttribute(mainColumnAtt) === false) {
                // -- first timer
                arrReturn[0] = mainColumn;
            }
            else if (hasSizeChanged(mainColumn.getAttribute(mainColumnAtt), mainColumn.innerHTML.length)) {
                // -- change detected ...
                arrReturn[0] = mainColumn;
            }
        }

        // -- dialog (article popup)
        const elDialog = document.querySelector('div[role="dialog"]');
        if (elDialog) {
            if (elDialog.hasAttribute(mainColumnAtt) === false) {
                arrReturn[1] = elDialog;
            }
            else if (hasSizeChanged(elDialog.getAttribute(mainColumnAtt), elDialog.innerHTML.length)) {
                arrReturn[1] = elDialog;
            }
        }

        VARS.noChangeCounter++;
        return arrReturn;
    }

    function mopUpTheNewsFeed() {
        // -- mopping up the news feed page

        const [mainColumn, elDialog] = isTheHouseDirty();
        if (mainColumn === null && elDialog === null) {
            return;
        }

        if (mainColumn) {

            // -- Tablist - not part of the general news feed stream
            // -- Includes Stories (standalone tab)
            if (VARS.Options.NF_TABLIST_STORIES_REELS_ROOMS) {
                nf_scrubTheTabbies();
            }
            if (VARS.Options.NF_SURVEY) {
                nf_scrubTheSurvey();
            }

            // -- aside's sponsored
            if (VARS.Options.NF_SPONSORED) {
                nf_cleanTheConsoleTable('Sponsored');
            }

            // -- aside's suggestions
            if (VARS.Options.NF_SUGGESTIONS) {
                nf_cleanTheConsoleTable('Suggestions');
            }

            // -- news feed stream ...
            const posts = nf_getCollectionOfPosts();

            // console.info(log + 'mopUpTheNewsFeed(); number of posts:', posts.length);

            for (const post of posts) {

                if (post.innerHTML.length === 0) {
                    // -- fb is clearing out the posts as the user scrolls ...
                }
                else {

                    let hideReason = '';
                    let isSponsoredPost = false;

                    if (post.hasAttribute(postAtt)) {
                        // -- already flagged ...
                        hideReason = 'hidden';
                    }
                    // else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                    //     // -- skip these - already been scanned a few times
                    //     console.info(log, 'mopping(); skipping:' + post[postPropDS] + '; ' + post);
                    // }
                    else {
                        doLightDusting(post);

                        if (hideReason === '' && VARS.Options.NF_REELS_SHORT_VIDEOS) {
                            hideReason = nf_isReelsAndShortVideos(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_SHORT_REEL_VIDEO) {
                            hideReason = nf_isShortReelVideo(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_PAID_PARTNERSHIP) {
                            hideReason = nf_isPaidPartnership(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_PEOPLE_YOU_MAY_KNOW) {
                            hideReason = nf_isPeopleYouMayKnow(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_SUGGESTIONS) {
                            hideReason = nf_isSuggested(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_FOLLOW) {
                            hideReason = nf_isFollow(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_PARTICIPATE) {
                            hideReason = nf_isParticipate(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_SPONSORED_PAID) {
                            hideReason = nf_isSponsoredPaidBy(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_EVENTS_YOU_MAY_LIKE) {
                            hideReason = nf_isEventsYouMayLike(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_STORIES) {
                            hideReason = nf_isStoriesPost(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_ANIMATED_GIFS_POSTS) {
                            hideReason = nf_hasAnimatedGifContent(post);
                        }
                        // -- placed here due to "overlaps" between this rule and at least 1 of the above rule.
                        if (hideReason === '' && VARS.Options.NF_SPONSORED && isSponsored(post)) {
                            isSponsoredPost = true;
                            hideReason = KeyWords.SPONSORED;
                        }
                        // -- sponsored + blocked text sometimes overlap. sponsored takes priority.
                        if (hideReason === '' && VARS.Options.NF_BLOCKED_ENABLED) {
                            hideReason = nf_isBlockedText(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_LIKES_MAXIMUM && VARS.Options.NF_LIKES_MAXIMUM !== '') {
                            hideReason = nf_postExceedsLikeCount(post);
                        }
                    }

                    if (hideReason.length > 0) {
                        if (hideReason !== 'hidden') {
                            // -- post not yet hidden, hide it.
                            nf_hidePost(post, hideReason, isSponsoredPost);
                        }
                    }
                    else {
                        // -- not a hidden post

                        // -- run pause animation (useful to hide those animated posts/comments)
                        if (VARS.Options.NF_ANIMATED_GIFS_PAUSE) {
                            swatTheMosquitos(post);
                        }
                        // -- hide info boxes
                        if (VARS.hideAnInfoBox) {
                            scrubInfoBoxes(post);
                        }
                        // -- hide number of shares box
                        if (VARS.Options.NF_SHARES) {
                            nf_hideNumberOfShares(post);
                        }
                    }
                }
            }

            mainColumn.setAttribute(mainColumnAtt, mainColumn.innerHTML.length.toString());
            VARS.noChangeCounter = 0;
        }

        if (elDialog) {
            // -- viewing a post in a "dialog-box" (triggered by viewing more comments)
            if (VARS.Options.NF_ANIMATED_GIFS_PAUSE) {
                swatTheMosquitos(elDialog);
            }
            elDialog.setAttribute(mainColumnAtt, elDialog.innerHTML.length.toString());
            VARS.noChangeCounter = 0;
        }

    }

    function mopUpTheGroupsFeed() {
        // -- mopping up the groups feed page

        // console.info(log+'mopUpTheGroupsFeed(), gfType:', VARS.gfType, '; hide an info box:', VARS.hideAnInfoBox);

        const [mainColumn, elDialog] = gf_isTheHouseDirty();
        if (mainColumn === null && elDialog === null) {
            return;
        }

        if (mainColumn) {

            if (VARS.gfType === 'groups' || VARS.gfType === 'groups-recent' || VARS.gfType === 'search') {
                // - main groups feed.
                // -- 'groups' - accessible via the Groups link
                // -- 'groups-recent' - accessible via the Feeds > group link (has similar HTML structure to News Feed)
                // -- 'search' - groups (same layout as groups feed)

                // -- aside's suggestions (also appears above feed on narrow pages)
                if (VARS.Options.GF_SUGGESTIONS) {
                    gf_cleanTheConsoleTable('Suggestions');
                }

                // -- groups feed stream ...
                const query = VARS.gfType === 'groups-recent' ? 'h2[dir="auto"] + div > div' : 'div[role="feed"] > div';
                const posts = Array.from(document.querySelectorAll(query));
                if (posts.length > 0) {
                    // console.info(log+'---> mopUpTheGroupsFeed() - multiple groups');
                    const count = posts.length;
                    const start = (count < 25) ? 0 : (count - 25);

                    // for (const post of posts) {
                    for (let i = start; i < count; i++) {
                        const post = posts[i];

                        if (post.innerHTML.length === 0) {
                            continue;
                        }

                        let hideReason = '';

                        // -- add the "open post in new tab link+icon".
                        if ((VARS.gfType === 'groups') && (post[postPropDS] === undefined)) {
                            gf_setPostLinkToOpenInNewTab(post);
                        }

                        if (post.hasAttribute(postAtt)) {
                            // -- already flagged
                            hideReason = 'hidden';
                        }
                        // else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                        //     // -- skip these - already been scanned a few times
                        // }
                        else {

                            doLightDusting(post);

                            if (hideReason === '' && VARS.Options.GF_SPONSORED && isSponsored(post)) {
                                hideReason = KeyWords.SPONSORED;
                            }
                            if (hideReason === '' && VARS.Options.GF_SUGGESTIONS) {
                                hideReason = gf_isSuggested(post);
                            }
                            // if (hideReason === '' && VARS.Options.GF_PAID_PARTNERSHIP) {
                            //     //console.info(log + 'mopUpTheGroupsFeed(), ---- Paid partnership - needs code ----')
                            // }
                            if (hideReason === '' && VARS.Options.GF_SHORT_REEL_VIDEO) {
                                hideReason = gf_isShortReelVideo(post);
                            }
                            if (hideReason === '' && VARS.Options.GF_BLOCKED_ENABLED) {
                                hideReason = gf_isBlockedText(post);
                            }
                            if (hideReason === '' && VARS.Options.GF_ANIMATED_GIFS_POSTS) {
                                hideReason = gf_hasAnimatedGifContent(post);
                            }
                        }

                        if (hideReason.length > 0) {
                            // -- increment hidden count
                            VARS.echoCount++;
                            if (hideReason !== 'hidden') {
                                // -- post not yet hidden, hide it.
                                gf_hidePost(post, hideReason);
                            }
                        }
                        else {
                            // -- not a hidden post
                            // -- reset hidden count
                            VARS.echoCount = 0;
                            // -- run pause animation (useful to hide those animated comments)
                            if (VARS.Options.GF_ANIMATED_GIFS_PAUSE) {
                                // console.info(log + 'pausing animations ...');
                                swatTheMosquitos(post);
                            }
                            // -- hide info boxes
                            if (VARS.hideAnInfoBox) {
                                scrubInfoBoxes(post);
                            }
                            // -- hide number of shares box
                            if (VARS.Options.GF_SHARES) {
                                gf_hideNumberOfShares(post);
                            }
                        }
                        // console.info(log+'mopUpTheGroupsFeed:', hideReason, VARS.echoCount, post);
                    }
                }
                // console.info(log+'<--- mopUpTheGroupsFeed() - multiple groups');
            }
            else {
                // - single group ...
                const query = 'div[role="feed"] > div';
                const posts = Array.from(document.querySelectorAll(query));
                if (posts.length) {
                    // console.info(log+'---> mopUpTheGroupsFeed() - single group');
                    for (const post of posts) {

                        if (post.innerHTML.length === 0) {
                            continue;
                        }

                        let hideReason = '';

                        if (post.hasAttribute(postAtt)) {
                            // -- already flagged
                            hideReason = 'hidden';
                        }
                        // else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                        //     // -- skip these - already scanned a few times
                        //     // console.info(log + 'skipping:', post);
                        // }
                        else {
                            doLightDusting(post);

                            if (hideReason === '' && VARS.Options.GF_SHORT_REEL_VIDEO) {
                                hideReason = gf_isShortReelVideo(post);
                            }
                            if (hideReason === '' && VARS.Options.GF_BLOCKED_ENABLED) {
                                hideReason = gf_isBlockedText(post);
                            }
                            if (hideReason === '' && VARS.Options.GF_ANIMATED_GIFS_POSTS) {
                                hideReason = gf_hasAnimatedGifContent(post);
                            }
                        }

                        if (hideReason.length > 0) {
                            // -- increment hidden counter
                            VARS.echoCount++;
                            if (hideReason !== 'hidden') {
                                // -- post not yet hidden, hide it.
                                gf_hidePost(post, hideReason);
                            }
                        }
                        else {
                            // -- not a hidden post
                            // -- reset hidden count
                            VARS.echoCount = 0;
                            // -- run pause animation (useful to hide those animated posts/comments)
                            if (VARS.Options.GF_ANIMATED_GIFS_PAUSE) {
                                // console.info(log + 'pausing animations ...');
                                swatTheMosquitos(post);
                            }
                            // -- hide info boxes
                            if (VARS.hideAnInfoBox) {
                                scrubInfoBoxes(post);
                            }
                            // -- hide number of shares box
                            if (VARS.Options.GF_SHARES) {
                                gf_hideNumberOfShares(post);
                            }
                        }
                    }
                    // console.info(log+'<--- mopUpTheGroupsFeed() - single group');
                }
            }

            mainColumn.setAttribute(mainColumnAtt, mainColumn.innerHTML.length.toString());
            VARS.noChangeCounter = 0;
        }

        if (elDialog) {
            // -- viewing a post in a "dialog-box" (triggered by viewing more comments)
            if (VARS.Options.GF_ANIMATED_GIFS_PAUSE) {
                swatTheMosquitos(elDialog);
            }
            elDialog.setAttribute(mainColumnAtt, elDialog.innerHTML.length.toString());
            VARS.noChangeCounter = 0;
        }

    }

    function mopUpTheWatchVideosFeed() {
        // -- mopping up the watch videos feed page

        const [mainColumn, elDialog] = vf_isTheHouseDirty();
        // console.info(log + 'mopUpTheWatchVideosFeed(); video type:', VARS.vfType, '; mainColumn:', mainColumn, '; elDialog:', elDialog);
        if (mainColumn === null && elDialog === null) {
            return;
        }

        const container = (elDialog ? elDialog : mainColumn);
        // console.info(log + 'mopUpTheWatchVideosFeed(); container:', container);
        if (container) {
            let query;
            let queryBlocks;
            if (VARS.vfType === 'videos') {
                // -- normal feed
                query = ':scope > div > div:not([class]) > div';
                queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
            }
            else if (VARS.vfType === 'search') {
                // -- videos --> search
                query = 'div[role="feed"] > div[role="article"]';
                queryBlocks = ':scope > div > div > div > div > div > div > div:nth-of-type(2)';
            }
            else if (VARS.vfType === 'item') {
                // -- videos --> search --> item (videos being listed below the video of interest)
                // -- video - via link
                query = 'div[id="watch_feed"] > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div > div > div > div';
                queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
            }
            else {
                return;
            }

            //            console.info(log + 'mopUpTheWatchVideosFeed(); container:', container, '; type:', VARS.vfType, '; query:', query);

            if (VARS.vfType !== 'search') {
                const posts = container.querySelectorAll(query);
                // console.info(log + 'mopUpTheWatchVideosFeed(); container:', container, '; type:', VARS.vfType, '; query:', query, '; posts:', posts);
                for (const post of posts) {
                    // if (post.innerHTML.length === 0) {
                    //     continue;
                    // }
                    if (countDescendants(post) < 3) {
                        // -- bad post - purge it.
                        // -- fb sometimes "forget" to finish creating a post
                        // console.info(log + 'videos - dummy post found and removed ... next post:', post.parentElement.nextElementSibling);
                        // -- disabled the .remove() as it can sometimes be a bit too aggressive ...
                        // post.parentElement.remove();
                        continue;
                    }

                    let hideReason = '';

                    // -- add the open post in new tab link+icon.
                    if ((VARS.vfType === 'videos') && (post[postPropDS] === undefined)) {
                        vf_setPostLinkToOpenInNewTab(post);
                    }

                    if (post.hasAttribute(postAtt)) {
                        // -- already hidden
                        hideReason = 'hidden';
                    }
                    // else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                    //     // -- skip these - already been scanned a few times
                    //     // console.info(log + 'video; skipping;', post[postPropDS], VARS.scanCountMaxLoop, post);
                    // }
                    else {
                        doLightDusting(post);

                        if (hideReason === '' && VARS.Options.VF_SPONSORED && isSponsored(post)) {
                            hideReason = KeyWords.SPONSORED;
                        }
                        if (hideReason === '' && VARS.Options.VF_LIVE) {
                            hideReason = vf_isVideoLive(post);
                        }
                        if (hideReason === '' && VARS.Options.VF_INSTAGRAM) {
                            hideReason = vf_isInstagram(post);
                        }
                        if (hideReason === '' && VARS.Options.VF_DUPLICATE_VIDEOS) {
                            // -- vf_hideDuplicateVideos() will hide the duplicates
                            // -- returns nothing.
                            vf_hideDuplicateVideos(post, query);
                            if (post.hasAttribute(postAtt)) {
                                // -- prevent doubling up of hiding the video post.
                                hideReason === 'hidden';
                            }
                        }
                        if (hideReason === '' && VARS.Options.VF_BLOCKED_ENABLED) {
                            hideReason = vf_isBlockedText(post, queryBlocks);
                        }
                        // console.info(log + 'mopUpTheWatchVideosFeed(); ::: hideReason:', hideReason, post, queryBlocks);
                    }

                    if (hideReason.length > 0) {
                        if (hideReason !== 'hidden') {
                            // -- post not yet hidden, hide it.
                            vf_hidePost(post, hideReason);
                        }
                    }
                    else {
                        // -- not a hidden post
                        // -- run pause animation (useful to hide those animated posts/comments)
                        if (VARS.Options.VF_ANIMATED_GIFS_PAUSE) {
                            // console.info(log + 'pausing animations ...');
                            swatTheMosquitos(post);
                        }
                        // -- hide info boxes
                        if (VARS.hideAnInfoBox) {
                            scrubInfoBoxes(post);
                        }
                        // -- nb: videos do not have a number of shares box

                        // -- hide sponsored blocks (appears between video & comments)
                        vf_scrubSponsoredBlock(post);
                    }

                    // -- check for sponsored content beneath the video ...
                    vf_hideSponsoredBlock(post, query, queryBlocks);
                }
            }
            else {
                // -- search videos
                // -- structure is different from regular video feed
                // -- thumbnail on left, text on right
                const posts = document.querySelectorAll(query);
                for (const post of posts) {

                    let hideReason = '';

                    if (post.hasAttribute(postAtt)) {
                        // -- already hidden
                        hideReason = 'hidden';
                    }
                    else {
                        if (VARS.Options.VF_BLOCKED_ENABLED) {
                            hideReason = vf_isBlockedText(post, queryBlocks);
                        }
                    }

                    if (hideReason.length > 0) {
                        if (hideReason !== 'hidden') {
                            // -- post not yet hidden, hide it.
                            vf_hidePost(post, hideReason);
                        }
                    }
                    else {
                        // -- not a hidden post
                    }
                }
            }

            container.setAttribute(mainColumnAtt, container.innerHTML.length.toString());
            VARS.noChangeCounter = 0;
        }

        if (elDialog) {
            // -- viewing a post in a "dialog-box" (triggered by viewing more comments)
            if (VARS.Options.NF_ANIMATED_GIFS_PAUSE) {
                swatTheMosquitos(elDialog);
            }
            // elDialog.setAttribute(mainColumnAtt, elDialog.innerHTML.length.toString());
            // VARS.noChangeCounter = 0;
        }

    }

    function mp_hideBox(box, reason) {
        box.setAttribute(VARS.hideWithNoCaptionAtt, '');
        box.setAttribute(postAtt, sanitizeReason(reason));
        if (VARS.Options.VERBOSITY_DEBUG) {
            box.setAttribute(VARS.showAtt, '');
        }
    }

    function mp_stopTrackingDirtIntoMyHouse() {
        // -- remove tracking bits
        const collectionOfLinks = document.querySelectorAll('a[href*="/?ref="]');
        for (const trackingLink of collectionOfLinks) {
            trackingLink.href = trackingLink.href.split('/?ref')[0];
        }
    }

    function mp_hideSponsoredItems() {

        // -- landing page listing - items above categories
        // -- sponsored posts have <span> as the first child element ...
        const query = `div[${mainColumnAtt}] > div > div > div > div > div > div[style] > span`;
        const items = document.querySelectorAll(query);
        for (const item of items) {
            // - item's container
            // const box = item.closest('div[style]');
            const box = item.parentElement;
            if (box.hasAttribute(postAttMPSkip)) {
                if (box.innerHTML.length == box.getAttribute(postAttMPSkip)) {
                    continue;
                }
            }
            mp_hideBox(box, KeyWords.SPONSORED);
        }
    }

    function mopUpTheMarketplaceFeed() {
        // -- mopping up parts of the Marketplace ...

        const mainColumn = mp_isTheHouseDirty();
        // console.info(log + 'clean(); mainColumn:', mainColumn, VARS.mpType);
        if (mainColumn === null) {
            return;
        }

        mp_stopTrackingDirtIntoMyHouse();

        // console.info(log + 'mopUpTheMarketplaceFeed(); mpType:', VARS.mpType);

        if (VARS.mpType === 'marketplace' || VARS.mpType === 'item') {
            // - standard marketplace page
            // - on the item page, there's listing of items to sell ... (similar structure to standard marketplace page)


            if (VARS.Options.MP_SPONSORED) {
                // -- sponsored items (above sections) (untested)
                mp_hideSponsoredItems();

                // -- sponsored items in "categories"
                // -- two parts - heading + item
                // -- nb: adguard base filter hides the heading, but not the item
                const queryHeadings = `div:not([${postAtt}]) > a[href="/ads/about/?entry_product=ad_preferences"], div:not([${postAtt}]) > object > a[href="/ads/about/?entry_product=ad_preferences"]`;
                const headings = document.querySelectorAll(queryHeadings);

                let queryItems = `div[style]:not([${postAtt}]) > span > div:first-of-type > a:not([href*="marketplace"])`;
                let items = document.querySelectorAll(queryItems);
                if (items.length === 0) {
                    // -- structure changed in Nov 2023.
                    queryItems = `div[style]:not([${postAtt}]) > span > div:first-of-type > div > a:not([href*="marketplace"])`;
                    items = document.querySelectorAll(queryItems);
                }

                // console.info(log+'marketplace(); headings:', headings);
                // console.info(log+'marketplace(); items:', items);
                // console.info(log+'marketplace(); bool:', (VARS.Options.MP_SPONSORED && (headings.length > 0) && (items.length > 0)));

                if (VARS.Options.MP_SPONSORED && (headings.length > 0) && (items.length > 0)) {
                    for (const heading of headings) {
                        // heading = heading.parentElement;
                        mp_hideBox(heading.parentElement, KeyWords.SPONSORED);
                    }
                    for (const item of items) {
                        // const parentItem = climbUpTheTree(item, 3);
                        const parentItem = climbUpTheTree(item, 4);
                        mp_hideBox(parentItem, KeyWords.SPONSORED);
                    }
                }
            }

            if (VARS.Options.MP_BLOCKED_ENABLED) {
                mp_doBlockingByBlockedText();
            }
        }
        if (VARS.mpType === 'item') {
            // -- viewing a marketplace item - a small sponsored box often shows up on the right.
            if (VARS.Options.MP_SPONSORED) {
                const elDialog = document.querySelector('div[role="dialog"]');
                if (elDialog) {
                    // -- viewing a mp item via mp feed (no new tab or reloaded page)
                    const query = `span h2 [href*="/ads/about/"]:not([${postAtt}])`;
                    const elLink = elDialog.querySelector(query);
                    if (elLink) {
                        const box = elLink.closest('h2').closest('span');
                        mp_hideBox(box, KeyWords.SPONSORED);
                        elLink.setAttribute(postAtt, KeyWords.SPONSORED);
                    }
                }
                else {
                    // -- viewing a mp item in a new tab / reloaded page.
                    const query = `div[${mainColumnAtt}] span h2 [href*="/ads/about/"]:not([${postAtt}])`;
                    const elLink = document.querySelector(query);
                    if (elLink) {
                        const box = elLink.closest('h2').closest('span');
                        mp_hideBox(box, KeyWords.SPONSORED);
                        elLink.setAttribute(postAtt, KeyWords.SPONSORED);
                    }
                }
            }
        }
        else if ((VARS.mpType === 'category') || (VARS.mpType === 'search')) {
            // - viewing a markplace category or marketplace search results
            // - (both have similar layout)
            if (VARS.Options.MP_SPONSORED) {
                // -- sponsored items
                mp_hideSponsoredItems();
                // const query = `a[href*="/ads/"]:not([${postAtt}])`;
                // const elements = document.querySelectorAll(query);
                // for (const element of elements) {
                //     // console.info(log + 'mp-clean:', element);
                //     element.setAttribute(postAtt, element.innerHTML.length);
                //     const itemBox = climbUpTheTree(element.parentElement.closest('a'), 3);
                //     mp_hideBox(itemBox, KeyWords.SPONSORED);
                // }
            }
            if (VARS.Options.MP_BLOCKED_ENABLED) {
                mp_doBlockingByBlockedText();
            }
        }

        mainColumn.setAttribute(mainColumnAtt, mainColumn.innerHTML.length.toString());
        VARS.noChangeCounter = 0;

    }

    function mopUpTheSearchFeed() {
        // mopping up the search feed / results
        // -- (nb: has similar layout to news feed stream)
        // -- "borrow" news feed's text filter.

        const mainColumn = sf_isTheHouseDirty();
        if (mainColumn === null) {
            return;
        }

        if (VARS.Options.NF_BLOCKED_ENABLED) {
            //            const query = 'div[role="feed"] > div';
            const query = 'div[role="feed"] > div > div';
            const posts = Array.from(document.querySelectorAll(query));

            for (const post of posts) {

                if (post.innerHTML.length === 0) {
                    continue;
                }

                let hideReason = '';
                let isSponsoredPost = false;

                if (post.hasAttribute(postAtt)) {
                    hideReason = 'hidden';
                }
                else {
                    if (VARS.Options.NF_SPONSORED && isSponsored(post)) {
                        hideReason = KeyWords.SPONSORED;
                        isSponsoredPost = true;
                    }
                    if (hideReason === '' && VARS.Options.NF_BLOCKED_ENABLED) {
                        hideReason = nf_isBlockedText(post);
                    }
                }

                if (hideReason.length > 0) {
                    // -- increment hidden count
                    VARS.echoCount++;
                    if (hideReason !== 'hidden') {
                        // -- post not yet hidden, hide it.
                        nf_hidePost(post, hideReason, isSponsoredPost);
                    }
                }
                else {
                    // -- not a hidden post
                    // -- reset hidden count
                    VARS.echoCount = 0;
                    // -- run pause animation (useful to hide those animated comments)
                    if (VARS.Options.NF_ANIMATED_GIFS_PAUSE) {
                        // console.info(log + 'pausing animations ...');
                        swatTheMosquitos(post);
                    }
                    // -- hide info boxes
                    if (VARS.hideAnInfoBox) {
                        scrubInfoBoxes(post);
                    }
                }
            }
        }

        mainColumn.setAttribute(mainColumnAtt, mainColumn.innerHTML.length.toString());
        VARS.noChangeCounter = 0;

    }

    function mopUpTheReelFeed(caller) {

        // -- Reels ...

        // -- saveUserOptions will also call this function ...

        // -- nb: videos from the watch videos feed are also collected in the query ..
        // -- .. but they do not have a container with [data-video-id] attribute
        // -- .. and therefore skipped ...

        // -- nb: setting VARS.isRF determines if this function is called or not.

        // console.info(log + 'mopUpTheReelFeed(); ', VARS.isRF, VARS.isRF_InTimeoutMode);

        if (!VARS.isRF) {
            // -- no longer in Reels Feed
            VARS.isRF_InTimeoutMode = false;
            return;
        }
        if (caller !== 'self' && VARS.isRF_InTimeoutMode === true) {
            // -- saveUserOptions or another function is calling and TimeoutMode is currently active.
            return;
        }

        const videoRules = `[data-video-id] video:not([${rvAtt}])`;
        const videos = document.querySelectorAll(videoRules);

        // console.info(log + 'mopUpTheReelFeed(); videos:', caller, videos);

        for (const video of videos) {
            // -- get the video's container's child element
            const elVideoId = video.closest('[data-video-id]');
            if (elVideoId) {
                // -- get the video's container
                const videoContainer = elVideoId.parentElement;
                if (videoContainer) {
                    if (VARS.Options.REELS_CONTROLS === true) {
                        // -- get the video's description + audio track info container.
                        const descriptionOverlay = videoContainer.nextElementSibling;
                        if (descriptionOverlay) {
                            // -- make room to display the controls by moving the description element up a bit ...
                            const elDescriptionContainer = descriptionOverlay.children[0];
                            elDescriptionContainer.setAttribute('style', `margin-bottom:${VARS.isChromium ? '4.5' : '2.25'}rem;`);
                            // -- enable controls on the video
                            video.setAttribute('controls', 'true');
                            // -- hide the video's sibling (makes it easier to click on the video's controls)
                            const sibling = video.nextElementSibling;
                            if (sibling) {
                                sibling.setAttribute('style', 'display:none;');
                            }
                        }
                    }
                    if (VARS.Options.REELS_DISABLE_LOOPING === true) {
                        // -- stop the video
                        video.addEventListener('ended', function (ev) {
                            ev.target.pause();
                        });
                    }
                    video.setAttribute(rvAtt, '1');
                }
                else {
                    // -- a video from the watch videos feed
                    // -- hidden underneath the reels feed overlay)
                }
            }
        }
        // -- call me again in a few ms ...
        VARS.isRF_InTimeoutMode = true;
        setTimeout(function () {
            mopUpTheReelFeed('self');
        }, 1000);
    }

    function mopUpTheProfilePage() {
        // -- profile pages

        const proceed = VARS.Options.PP_BLOCKED_ENABLED || VARS.Options.PP_ANIMATED_GIFS_POSTS || VARS.Options.PP_ANIMATED_GIFS_PAUSE;
        // console.info(log + "mopUpTheProfilePage(); proceed:", proceed, "PP_BLOCKED_ENABLED:", VARS.Options.PP_BLOCKED_ENABLED, "PP_ANIMATED_GIFS_POSTS:", VARS.Options.PP_ANIMATED_GIFS_POSTS, "PP_ANIMATED_GIFS_PAUSE:", VARS.Options.PP_ANIMATED_GIFS_PAUSE);
        if (!proceed) {
            return;
        }

        const [mainColumn, elDialog] = pp_isTheHouseDirty();
        // console.info(log + "mopUpTheProfilePage(); mainC:", mainColumn, "elDialog:", elDialog);
        if (mainColumn === null && elDialog === null) {
            return;
        }

        // console.info(log + 'mopUpTheProfilePage(); size changed, doing some cleaning ... (mainColumn / elDialog)', mainColumn, elDialog);

        if (mainColumn) {
            // profile page feed stream ...
            //const query = 'div[role="main"] > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div';
            //const query = 'div[role="main"] > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div[class]';
            const query = 'div[role="main"] > div > div > div > div:nth-of-type(2) > div:not([class]) > div > div[class]';
            const posts = Array.from(document.querySelectorAll(query));

            //console.info(log + 'mopUpTheProfilePage(); # of posts: ' + posts.length);

            for (const post of posts) {
                if (post.innerHTML.length === 0) {
                    continue;
                }

                let hideReason = '';
                const isSponsoredPost = false;

                if (post.hasAttribute(postAtt)) {
                    hideReason = 'hidden';
                }
                else {
                    if (hideReason === '' && VARS.Options.PP_ANIMATED_GIFS_POSTS) {
                        hideReason = nf_hasAnimatedGifContent(post);
                    }
                    if (hideReason === '' && VARS.Options.PP_BLOCKED_ENABLED) {
                        hideReason = pp_isBlockedText(post);
                    }
                }

                //console.info(log + 'mopUpTheProfilePage(); hideReason:', hideReason, post );

                if (hideReason.length > 0) {
                    if (hideReason !== 'hidden') {
                        nf_hidePost(post, hideReason, isSponsoredPost);
                    }
                }
                else {
                    // -- run pause animation (useful to hide those animated comments)
                    if (VARS.Options.PP_ANIMATED_GIFS_PAUSE) {
                        // console.info(log + 'pausing animations ...');
                        swatTheMosquitos(post);
                    }
                    // -- hide info boxes
                    if (VARS.hideAnInfoBox) {
                        scrubInfoBoxes(post);
                    }
                }
            }
            mainColumn.setAttribute(mainColumnAtt, mainColumn.innerHTML.length.toString());
            VARS.noChangeCounter = 0;
        }

        if (elDialog) {
            // -- viewing a post in a "dialog-box" (triggered by viewing more comments)
            if (VARS.Options.PP_ANIMATED_GIFS_PAUSE) {
                swatTheMosquitos(elDialog);
            }
            elDialog.setAttribute(mainColumnAtt, elDialog.innerHTML.length.toString());
            VARS.noChangeCounter = 0;
        }

    }

    // **** TIMING COMPONENT ****

    let firstRun = true;
    let prevScrollY = window.scrollY;
    let lastCleaningTime = 0;
    let sleepDuration = 50;

    function processPage(eventType = 'timing') {

        // console.info(log + 'processPage(); (being) :: currentTime:', currentTime, '; lastCleaningTime:', lastCleaningTime, '; oldDuration:', oldDuration, '; sleepDuration:', sleepDuration, '; elapsedTime:', elapsedTime, '; counter: ', VARS.noChangeCounter);

        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - lastCleaningTime;
        const oldDuration = sleepDuration;

        if (eventType == 'url-changed') {
            // -- url has changed ...
            setFeedSettings();
            // console.info(`${log}processPage(); :: url has changed; isAF: ${VARS.isAF}; isNF: ${VARS.isNF}; isGF: ${VARS.isGF}; isVF: ${VARS.isVF}; isMF: ${VARS.isMF}; isSF: ${VARS.isSF}; isRF: ${VARS.isRF};`);
        }
        else if (eventType === 'scrolling') {
            // -- page is scrolling ...
            if (sleepDuration < 151) {
                // -- .. and sleep duration is quite short ...
                return;
            }
            // -- else: sleep duration is quite long, so trigger a clean up request now ...
        }
        else if (elapsedTime < sleepDuration) {
            // -- called to early ...
            // console.info(log + 'processPage(); (early) :: currentTime:', currentTime, '; lastCleaningTime:', lastCleaningTime, '; oldDuration:', oldDuration, '; sleepDuration:', sleepDuration, '; elapsedTime:', elapsedTime, '; counter: ', VARS.noChangeCounter);
            return;
        }

        // -- do some mopping up ...
        if (VARS.isNF) {
            mopUpTheNewsFeed();
        }
        else if (VARS.isGF) {
            mopUpTheGroupsFeed();
        }
        else if (VARS.isVF) {
            mopUpTheWatchVideosFeed();
        }
        else if (VARS.isMF) {
            mopUpTheMarketplaceFeed();
        }
        else if (VARS.isSF) {
            mopUpTheSearchFeed();
        }
        else if (VARS.isRF) {
            mopUpTheReelFeed('sleeping');
        }
        else if (VARS.isPP) {
            mopUpTheProfilePage();
        }

        // -- sleep for a few ms and run me again ...
        // -- noChangeCounter is recording the number of loops where no changes have been detected
        if (VARS.isAF) {
            if (VARS.noChangeCounter < 16) {
                sleepDuration = 50;
            }
            else if (VARS.noChangeCounter < 31) {
                sleepDuration = 75;
            }
            else if (VARS.noChangeCounter < 46) {
                sleepDuration = 100;
            }
            else if (VARS.noChangeCounter < 61) {
                sleepDuration = 150;
            }
            else {
                sleepDuration = 1000;
            }
        }

        // console.info(`${log}processPage(); > setFeedSettings() :: isAF: ${VARS.isAF}; isNF: ${VARS.isNF}; isGF: ${VARS.isGF}; isVF: ${VARS.isVF}; isMF: ${VARS.isMF}; isSF: ${VARS.isSF}; isRF: ${VARS.isRF};`);
        // console.info(log + 'processPage(); 3 :: timing: ', timing, '; counter: ', VARS.noChangeCounter, '; isScrolling: ', isScrolling);

        // -- have a nap and then scan again...
        lastCleaningTime = currentTime;
        // console.info(log + 'processPage(); (end) :: currentTime:', currentTime, '; lastCleaningTime:', lastCleaningTime, '; oldDuration:', oldDuration, '; sleepDuration:', sleepDuration, '; elapsedTime:', elapsedTime, '; counter: ', VARS.noChangeCounter);
        setTimeout(processPage, sleepDuration);
    }

    function startUp() {
        // -- run code soon as the elements HEAD, BDDY and variable Options are ready/available.
        // -- or when page url has changed ...
        if (document.head && document.body && VARS.optionsReady) {
            if (firstRun) {
                GM.registerMenuCommand(KeyWords.GM_MENU_SETTINGS, toggleDialog);
                addCSS();
                window.setTimeout(addExtraCSS, 150); // fb is sometimes laggy ...
                buildMoppingDialog();
                // -- for reels's controls - chromium browsers needs more spacing ...
                // -- requires: @grant        unsafeWindow
                VARS.isChromium = !!unsafeWindow.chrome && /Chrome|CriOS/.test(navigator.userAgent);
                // -- dictionary of words to use in filters.
                buildDictionaries();
                firstRun = false;
            }

            // -- add some event listeners to detect if something is being changed ...
            window.addEventListener('scroll', function () {
                // -- wakey wakey!
                let currentScrollY = window.scrollY;
                let scrollingDistance = Math.abs(currentScrollY - prevScrollY);
                if (scrollingDistance > 20) {
                    processPage('scrolling');
                }
            });

            window.addEventListener('popstate', function () {
                // -- closed a fb "dialog" (e.g. popout-reel from a news-feed)
                // -- fb mimics the back-button action
                processPage('url-changed');
            });


            let timerId = setInterval(function () {
                // -- watch the url-change (new page being loaded)
                if (VARS.prevURL !== window.location.href) {
                    // console.info(log + 'url-changed:', VARS.prevURL, window.location.href);
                    processPage('url-changed');
                }
            }, 500);

            // -- start scanning
            // -- (processPage will call setFeedSettings ..)
            processPage('url-changed');
        }
        else {
            setTimeout(startUp, 10);
        }
    }

    function handleClassListChange() {
        let modeHasChanged = false;
        let modeNow = isDarkMode();
        if (VARS.isDarkMode === null) {
            modeHasChanged = true;
        }
        else if (VARS.isDarkMode !== modeNow) {
            modeHasChanged = true;
        }

        if (modeHasChanged) {
            // -- update CSS

            VARS.isDarkMode = modeNow;
        }
    }

    // Initial check
    handleClassListChange();

    // -- Create an observer instance
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                handleClassListChange();
            }
        }
    });

    // -- Start observing the target node for configured mutations
    observer.observe(document.documentElement, {
        attributes: true, // Observe changes to attributes
        attributeFilter: ['class'] // Only observe changes to the 'class' attribute
    });

    // setTimeout(startUp, 50);
    startUp();

})();
