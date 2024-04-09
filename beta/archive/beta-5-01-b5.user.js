// ==UserScript==
// @name         FB - Clean my feeds (5.01b5)
// @description  Hide Sponsored and Suggested posts in FB's News Feed, Groups Feed, Watch Videos Feed and Marketplace Feed
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-clean-my-feeds/issues
// @version      5.01-beta-05
// @author       zbluebugz (https://github.com/zbluebugz/)
// @match        https://www.facebook.com/*
// @match        https://web.facebook.com/*
// @match        https://facebook.com/*
// @noframes
// @grant        GM.registerMenuCommand
// @grant        GM.info
// @grant        unsafeWindow
// @license      MIT; https://opensource.org/licenses/MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAanSURBVHic5ZtpjBVFEMd/u8vthsCi3OcGxQWBKJdEDEbuDypqNoGgxGgkWY8YDaIYFQ9MRCOJJ0Y80JhgVESiRpCVIAYIIAQPCEoQZCOIyuIB667IPj/8qzPzhveANzPvvX3LP5nMVHdPT1V3VVd1zQwUNroDK4A/gB3A1Pyyk1sUA18DCeBPoBH4FxiRT6ZyiXFI+C+AFsAdRj+TSSfF8fOVM0y281LgP+BwHnnJC75FM15u9BtGV+aNoxyiG7L5H3xlNUgTyjLpqFBNYDJQBKw0ejDQE9gC1GbSUaEOwCQ7r0pDN2sUA78CDUCpla1G9j86X0zlEqOQsJ8b3RaoQ6pfkmlnhWgCQXW/Ag1CNXAi086awwCcVfbfATgOHEReAGAXMone+WIql7geCbvE6F5G7wjbYaGZQFDdpwToZo99aKHrbPQypAGT0t3QnFCBhN1idAlyff8A7cJ2WkgmEFT/S4GOwDoUB4RCIQ3ARDt/ZudL7LwyRdtmhzbAMZT5aWll5wGzgfb5YiqXmIDsf3ncHReKCQTtfwDwGtA1P+zkHi7708/o142ekvaOZoQeKPvzva8sVPYnFQrBBCahuN+pf+jsTyoUygDAWbr7KwF+J4vZnxZxdJICFYQLTxvQzi5h9HCgE7AGOGp9jgGOAJujs5kd3IAECHvc7+vrYSubY/QUo9+Ni9lsrAG97LwN+NiuDwPvAVuN/s7oA0avBjbatdvpQYHa/1w0S1Xo7W0CT7hZRj9o9IdGX4yX7FhodTnJ/jRlLzAerVGrkNC9UAS4A9gf10Oa8gDkJPvTlAdgIooAXf4/K/YflxssBc5HA9rdynoDQ+z6HGAYnu12N7qD0RUo5AXoAlxtbb9Cb4FaAFeidFid3XschccNMckQGpXIR0dxfemO+faMy9LUH0RvikIjqga0QdvS1sBHQH3E/hzGo3RX0P1twlsAy9BXIq8AQ2N6bsa4CM1EnHaZKvuzyZ4zMNB2P1onWhISURdBp0Fx2uHlKORdg+y8E7L5GmBnoG09ihFCyxHVBH6280jgRsKbwGbgJ7sOrvbj0aaohuTPXzoCfYHfyPNC+CrRF7tdvv7SZX/SHfdEYb7o9E3OqI9K9JHidBTnf5JhH+vsXAE8DexGUV8Rmvmu6PO3BNK07sCzaK9RHY39+DAUMZip8AB3kzyrK5Dwg43e4Gu7By18baIwmw2UIWa/yfC+3iiOqAfeRsGO20AttutHrG2RtTsUnd3s4ChnlqfrjFT5MWA9EvIJqxuFIkC/Royzui5Gb6WJwm1XS9PUlyFbriNZwEa8V18gt1aF8ggJ5G3KUYYogbbRTRLViMGKFHW98AboLxTBzQJewhuEJWiWHc7Fyxk8ihbaBPBCVriPAe5z1QmB8g7Aj1a3DAnm0Bt98Oy04QhwJ/L9RXgmMsPKE8B9WZMgIh5HDN4cKH8e792e+5StL/IY6fz7duApu95m9y3AG4xYEHdWuMbOPX1lA4Bb0QJ5O1rlxyIfXorc2jIkJGjnNw251aHoDdBtdp/LN7rnNDm4rO1io8fiqb6L2AaiPzwSSGNap+hnttXvRKGww5dWXp7inryhGH28vAjvD46jaKFz6vwmnrY5tZ+Xoq9StBdwqv9+oH4vWixTDVpeMA5vZQ8etSjEnYYXco+wut0km18nZN/HAn34w9xi9EvML9kRJXPMRbORANYCM4E+QKs07VuhAUkAN/nKL0T7eqc5y/G8yQe+dt2sbAtNAC52/5tT/6FRhgSsxEtqbMWb/XKU80ugMNjFADM42d+PxPMkecUwpIp1nJyPKwKuRTPnojj/sZHkNz/uReeLJO9MX7bymb6y66zsuZjkCI2VxkhVoHwQml0nbB3a269GMzmVZCHddz970dfeDm1RMOQixlo73Ppwb6zSZIh+xsQekhexCXgMrgeu4tQr9RiU0U1YWz/m4Q1gre9osPLpUYWIgipj4klf2RDEbCPwAMn5ueHI17+FNKEaeQCnJQtJxnD05Wc9cEGg7lO7Z0wMcoSGy8q4ha8EL4U1x9duLMoLpHKPjSheCIazg9A+P4EW2SC2W13f6GKEh0tQuK2rW63X4tn3Ajz3uAFtYEYD/dGq77d3kMbcgvdyZVGaZx9C4XDoFHgcuAsxudQYcWrpdn/zjT4MXHOavvqj312dBp1AW95UecqWVn8gRV0kZJoUbY9Uuw+KAdohM9hHcia3FsX7qdAK+fvgTNaTXsBipPqbifgqLA70AN5B+fhTpavjPhqBh+IW5n827DI9G+eQwwAAAABJRU5ErkJggg==
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAanSURBVHic5ZtpjBVFEMd/u8vthsCi3OcGxQWBKJdEDEbuDypqNoGgxGgkWY8YDaIYFQ9MRCOJJ0Y80JhgVESiRpCVIAYIIAQPCEoQZCOIyuIB667IPj/8qzPzhveANzPvvX3LP5nMVHdPT1V3VVd1zQwUNroDK4A/gB3A1Pyyk1sUA18DCeBPoBH4FxiRT6ZyiXFI+C+AFsAdRj+TSSfF8fOVM0y281LgP+BwHnnJC75FM15u9BtGV+aNoxyiG7L5H3xlNUgTyjLpqFBNYDJQBKw0ejDQE9gC1GbSUaEOwCQ7r0pDN2sUA78CDUCpla1G9j86X0zlEqOQsJ8b3RaoQ6pfkmlnhWgCQXW/Ag1CNXAi086awwCcVfbfATgOHEReAGAXMone+WIql7geCbvE6F5G7wjbYaGZQFDdpwToZo99aKHrbPQypAGT0t3QnFCBhN1idAlyff8A7cJ2WkgmEFT/S4GOwDoUB4RCIQ3ARDt/ZudL7LwyRdtmhzbAMZT5aWll5wGzgfb5YiqXmIDsf3ncHReKCQTtfwDwGtA1P+zkHi7708/o142ekvaOZoQeKPvzva8sVPYnFQrBBCahuN+pf+jsTyoUygDAWbr7KwF+J4vZnxZxdJICFYQLTxvQzi5h9HCgE7AGOGp9jgGOAJujs5kd3IAECHvc7+vrYSubY/QUo9+Ni9lsrAG97LwN+NiuDwPvAVuN/s7oA0avBjbatdvpQYHa/1w0S1Xo7W0CT7hZRj9o9IdGX4yX7FhodTnJ/jRlLzAerVGrkNC9UAS4A9gf10Oa8gDkJPvTlAdgIooAXf4/K/YflxssBc5HA9rdynoDQ+z6HGAYnu12N7qD0RUo5AXoAlxtbb9Cb4FaAFeidFid3XschccNMckQGpXIR0dxfemO+faMy9LUH0RvikIjqga0QdvS1sBHQH3E/hzGo3RX0P1twlsAy9BXIq8AQ2N6bsa4CM1EnHaZKvuzyZ4zMNB2P1onWhISURdBp0Fx2uHlKORdg+y8E7L5GmBnoG09ihFCyxHVBH6280jgRsKbwGbgJ7sOrvbj0aaohuTPXzoCfYHfyPNC+CrRF7tdvv7SZX/SHfdEYb7o9E3OqI9K9JHidBTnf5JhH+vsXAE8DexGUV8Rmvmu6PO3BNK07sCzaK9RHY39+DAUMZip8AB3kzyrK5Dwg43e4Gu7By18baIwmw2UIWa/yfC+3iiOqAfeRsGO20AttutHrG2RtTsUnd3s4ChnlqfrjFT5MWA9EvIJqxuFIkC/Royzui5Gb6WJwm1XS9PUlyFbriNZwEa8V18gt1aF8ggJ5G3KUYYogbbRTRLViMGKFHW98AboLxTBzQJewhuEJWiWHc7Fyxk8ihbaBPBCVriPAe5z1QmB8g7Aj1a3DAnm0Bt98Oy04QhwJ/L9RXgmMsPKE8B9WZMgIh5HDN4cKH8e792e+5StL/IY6fz7duApu95m9y3AG4xYEHdWuMbOPX1lA4Bb0QJ5O1rlxyIfXorc2jIkJGjnNw251aHoDdBtdp/LN7rnNDm4rO1io8fiqb6L2AaiPzwSSGNap+hnttXvRKGww5dWXp7inryhGH28vAjvD46jaKFz6vwmnrY5tZ+Xoq9StBdwqv9+oH4vWixTDVpeMA5vZQ8etSjEnYYXco+wut0km18nZN/HAn34w9xi9EvML9kRJXPMRbORANYCM4E+QKs07VuhAUkAN/nKL0T7eqc5y/G8yQe+dt2sbAtNAC52/5tT/6FRhgSsxEtqbMWb/XKU80ugMNjFADM42d+PxPMkecUwpIp1nJyPKwKuRTPnojj/sZHkNz/uReeLJO9MX7bymb6y66zsuZjkCI2VxkhVoHwQml0nbB3a269GMzmVZCHddz970dfeDm1RMOQixlo73Ppwb6zSZIh+xsQekhexCXgMrgeu4tQr9RiU0U1YWz/m4Q1gre9osPLpUYWIgipj4klf2RDEbCPwAMn5ueHI17+FNKEaeQCnJQtJxnD05Wc9cEGg7lO7Z0wMcoSGy8q4ha8EL4U1x9duLMoLpHKPjSheCIazg9A+P4EW2SC2W13f6GKEh0tQuK2rW63X4tn3Ajz3uAFtYEYD/dGq77d3kMbcgvdyZVGaZx9C4XDoFHgcuAsxudQYcWrpdn/zjT4MXHOavvqj312dBp1AW95UecqWVn8gRV0kZJoUbY9Uuw+KAdohM9hHcia3FsX7qdAK+fvgTNaTXsBipPqbifgqLA70AN5B+fhTpavjPhqBh+IW5n827DI9G+eQwwAAAABJRU5ErkJggg==
// @run-at       document-start
// ==/UserScript==
/*




        visit: https://www.facebook.com/?filter=pages&sk=h_chr

        play a video

        click expand ...

        ... other videos not filtered ....


        ~~~~~



    when saving, need to reset the container's attribute.




    :: Tip ::
        This userscript does not block video ads (begin-roll, mid-roll, end-roll), however there's a work-around:
        1) Install uBlock Origin (uBO) in your browser(s)
        2) In uBO, goto "My filters" tab and paste in the following rule: facebook.com##+js(set, Object.prototype.scrubber, undefined)
        Note: I have not tested this in other content/ad-blockers.


    v5.01 :: March 2024
        Changed the detect-changes-engine component
        Updated dialog-box
        Users can change dialog-box's ui language
        Updated hidden post label component
        Added Animated GIFs post detection component (News Feed + Groups Feed) (gif/mp4)
        Removed consecutive hidden posts facility from Watch Videos (FB keeps a few posts as you scroll)
        Added Duplicate Video detection component (Watch Videos feed)
        Added Instagram Video detection component (Watch Videos feed)
        Added code to remove "incomplete" Watch Video posts (posts with no content)
        Added icon to open a Watch Videos Feed post in a new window
        Updated Marketplace detection rules
        Added option to Disable looping videos in Reels

        Code tweaks

    v4.29 :: February 2024
        !!! Hot fix !!!
        Issues with FB, Adblockers and FB-CMF - all clashing
        Adjusted News Feed's query rules
        Temporarily disabled News Feed's message/notification tab (will be restored in next version)

    v4.28 :: January 2024
        Enabled option to toggle Sponsored post detection rule (for uBO compatibility)
        Added Video's "Live" detection rule
        Enabled Reels' video controls
        Added Ukrainian (Україна)
        Added Bulgarian (български)
        Dialog box - reworded "Miscellaneous items" to "Supplementary / information section"
        Dialog box - added "Reset" button to reset the options
        Fixed bug with Survey detection component
        Fixed bug with Importing settings from a file
        Revised message/notification tab for News feed
        Revised Create Stories detection rule
        Add option to filter posts by number of Likes
        Fixed bug with function scanTreeForText() - failing to detect "Anonymous participant"
        Updated Groups Feed filter rules - new HTML structure via (Feeds > Groups)
        Added display of script's version number to dialog box

    v4.27 :: December 2023
        Added Russian (Русский) - supplied by github user Kenya-West
    v4.26 :: November 2023
        Added web.facebook.com to @match conditions
        Added Survey detection component (Home / News feed)
        Added Follow detection component (Home / News feed)
        Added Participate detection component (Home / News feed)
        Updated Marketplace detection rules
    v4.25 :: November 2023
        Added extra filter rule for nf_isSuggested() (for "Suggested for you" posts) - fix supplied by opello (via github)
        Added News Feed's Stories post detection rule.
        Revised function scanTreeForText() to include other elements for scanning
        Fixed bug with Marketplace prices' filter
        Reduce possible conflicts with uBlock Origin / other adblockers
        Code tweaks
    v4.24 :: September 2023
        Fixed issues with v4.23 (selection/detection rules)
        Code tweaks
    v4.23 :: August 2023
        Fixed bug with showing Marketplace's hidden items
        Updated Marketplace detection rules
        Split Marketplace's text filter into two - prices and description
        Merged "Stories" with "Stories | Reels | Rooms" detection rules.
        Fixed bug with CMF's hidden dialog box's text being included in CTRL+F search (now excluded)
        Dropped "Create room" detection component (no longer listed in FB)
    v4.22 :: July 2023
        Updated News Feed posts selection rule (FB changed structure)
        Updated Events you may like detection rule
    v4.21 :: June 2023
        Updated news feed detection rules - for older HTML structures
        Updated watch videos feed detection rules
        Added Greek (Ελληνικά)
        Updated various functions
    v4.20 :: May 2023
        Added "Feeds (most recent)" to the clean up rules (FB recently introduced the "Feeds (most recent)" feature)
        Updated Search Feed sponsored posts rule
    v4.19 :: May 2023
        Updated News Feed posts selection rule (FB changed structure)
    v4.18 :: May 2023
        Updated News Feed sponsored posts rule
        Added News Feed sponsored video posts rule
        Updated News Feed suggested posts rule
    v4.17 :: March 2023
        Fixed issue with GreaseMonkey & FireMonkey not able to run userscript
        Updated News Feed sponsored posts rule
        Updated Videos Feed sponsored posts rule
        Added option to hide "# shares" on posts (news + groups)
    v4.16 :: February 2023
        Fixed issue with <no message> setting breaking FB
        Code tweaks
    v4.15 :: February 2023
        Updated News Feed sponsored posts rule (FB changed structure)
        Updated Marketplace Feed > Item page posts rules
        Code tweaks
    v4.14 :: January 2023
        Updated News Feed Suggestion/Recommendation posts rule (FB changed structure)
        Updated News Feed verbosity behaviour. FB limits 40 posts in News Feed. Show either no notification or 1 post hidden. 2+ posts hidden notification disabled.
        Groups Feed posts - added icon to open post in new window (fix annoying FB bug with not showing comments properly)

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
    const KeyWords = {
        // *** Which languages have been setup (for dialog box)
        // -- not used as keywords for detection of anything

        // - 'en' is default.
        LANGUAGES: [
            'en', // English
            'pt', // Português (Portugal and Brazil)
            'de', // Deutsch (Germany)
            'fr', // Français (France)
            'es', // Espanol (Spain)
            'cs', // Čeština (Czechia)
            'vi', // Tiếng Việt (Vietnam)
            'it', // Italino (Italy)
            'lv', // Latviešu (Latvia)
            'pl', // Polski (Poland)
            'nl', // Nederlands (Netherlands)
            'he', // עִברִית (Hebrew)
            'ar', // العربية (Arabic)
            'id', // Bahasa Indonesia (Indonesia)
            'zh-Hans', // Chinese (Simplified)
            'zh-Hant', // Chinese (Traditional)
            'ja', // Japanese (Japan)
            'fi', // Suomi - Finnish (Finland)
            'tr', // Türkçe (Turkey)
            'el', // Ελληνικά (Greece)
            'ru', // Русский (Russia)
            'uk', // Україна (Ukraine)
            'bg', // България (Bulgaria)
        ],

        // *** sample Object setup:
        // _VARIABLE_NAME_: {
        //     'en': '',
        //     'pt': '',
        //     'de': '',
        //     'fr': '',
        //     'es': '',
        //     'cs': '',
        //     'vi': '',
        //     'it': '',
        //     'lv': '',
        //     'pl': '',
        //     'nl': '',
        //     'he': '',
        //     'ar': '',
        //     'id': '',
        //     'zh-Hans': '',
        //     'zh-Hant': '',
        //     'ja': '',
        //     'fi': '',
        //     'tr': '',
        //     'el': '',
        //     'ru': '',
        //     'uk': '',
        //     'bg': '',
        // },


        // - Sponsored
        SPONSORED: {
            'en': 'Sponsored',
            'pt': 'Patrocinado',
            'de': 'Gesponsert',
            'fr': 'Sponsorisé',
            'es': 'Publicidad',
            'cs': 'Sponzorováno',
            'vi': 'Được tài trợ',
            'it': 'Sponsorizzato',
            'lv': 'Apmaksāta reklāma',
            'pl': 'Sponsorowane',
            'nl': 'Gesponsord',
            'he': 'ממומן',
            'ar': 'مُموَّل',
            'id': 'Bersponsor',
            'zh-Hans': '赞助内容',
            'zh-Hant': '贊助',
            'ja': '広告',
            'fi': 'Sponsoroitu',
            'tr': 'Sponsorlu',
            'el': 'Χορηγούμενη',
            'ru': 'Реклама',
            'uk': 'Спонсорована',
            'bg': 'Спонсорирано',
            'defaultEnabled': true
        },

        // *** News Feed ::

        // - "Stories | Reels | Rooms" tablist box
        // -- includes the standalone Stories component
        NF_TABLIST_STORIES_REELS_ROOMS: {
            'en': '"Stories | Reels | Rooms" tabs list box',
            'pt': 'Caixa de listagem da guia "Stories | Vídeos do Reels | Salas"',
            'de': 'Listenfeld der Registerkarte "Stories | Reels | Rooms"',
            'fr': 'Zone de liste de l\'onglet "Stories | Reels | Salons"',
            'es': 'Cuadro de lista de la pestaña "Historias | Reels | Salas"',
            'cs': 'Seznam karet "Stories | Reels | Místnosti"',
            'vi': 'Hộp danh sách tab "Tin | Reels | Phòng họp mặt"',
            'it': 'Casella di riepilogo della scheda "Storie | Reels | Stanze"',
            'lv': 'Cilnes "Stāsti | Video rullīši | Rooms" sarakstlodziņš',
            'pl': 'Pole listy zakładki "Relacje | Reels | Pokoje"',
            'nl': 'Keuzelijst tabblad "Verhalen | Reels | Ruimtes"',
            'he': 'תיבת רשימה של כרטיסיות "סטוריז | Reels | חדרים"',
            'ar': '"القصص | ريلز | الغرف" مربع قائمة علامات تبويب',
            'id': 'Kotak daftar tab "Cerita | Reels | Forum"',
            'zh-Hans': '“快拍|Reels|畅聊室”选项卡列表框',
            'zh-Hant': '"限時動態 | Reels | 包廂" 分頁列表框',
            'ja': '「Stories | Reels | Rooms」タブのリストボックス',
            'fi': '"Tarinat | Reels | Rooms" -välilehtien luetteloruutu',
            'tr': '"Hikayeler | Makaralar | Odalar" sekmeleri liste kutusu',
            'el': 'Λίστα καρτελών "Ιστορίες | Reels | Δωμάτια"',
            'ru': 'Список вкладок "Истории | Reels | Комнаты"',
            'uk': 'Поле списку вкладок «Історії | Reels | Кімнати»',
            'bg': 'Списъчно поле на раздела „Истории | Макари | Стаи“',
            'defaultEnabled': false
        },
        // - "Stories" posts (separate from tablist, in News Feed stream)
        NF_STORIES: {
            'en': 'Stories',
            'pt': 'Stories',
            'de': 'Stories',
            'fr': 'Stories',
            'es': 'Historias',
            'cs': 'Stories',
            'vi': 'Tin',
            'it': 'Storie',
            'lv': 'Stāsti',
            'pl': 'Relacje',
            'nl': 'Verhalen',
            'he': 'סטוריז ',
            'ar': 'القصص',
            'id': 'Cerita',
            'zh-Hans': '故事',
            'zh-Hant': '故事',
            'ja': 'Stories',
            'fi': 'Tarinat',
            'tr': 'Hikayeler',
            'el': 'Ιστορίες',
            'ru': 'Истории',
            'uk': 'Історії',
            'bg': 'Истории',
            'defaultEnabled': false
        },
        // - fb's survey
        // - <name>, we're asking a small group of people for their opinion
        // - could you take a few minutes to answer a short survey?  <button>start survey</button>
        NF_SURVEY: {
            'en': 'Survey',
            'pt': 'Enquete',
            'de': 'Umfrage',
            'fr': 'Enquête',
            'es': 'Encuesta',
            'cs': 'Průzkum',
            'vi': 'Khảo sát',
            'it': 'Sondaggio',
            'lv': 'Aptauja',
            'pl': 'Badanie',
            'nl': 'Vragenlijst',
            'he': 'סקר',
            'ar': 'استبيان',
            'id': 'Survei',
            'zh-Hans': '调查',
            'zh-Hant': '調查',
            'ja': 'アンケート',
            'fi': 'Kysely',
            'tr': 'Anket',
            'el': 'Τοπογράφηση',
            'ru': 'Опрос',
            'uk': 'Опитування',
            'bg': 'Анкета',
            'defaultEnabled': false
        },

        // - People you may know:
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
            'ar': 'أشخاص قد تعرفهم',
            'id': 'Orang yang Mungkin Anda Kenal',
            'zh-Hans': '你可能认识的人',
            'zh-Hant': '你可能認識的人',
            'ja': 'あなたが知っているかもしれない人々',
            'fi': 'Ihmiset, jotka saatat tuntea',
            'tr': 'Tanıyor olabileceğin kişiler',
            'el': 'Άτομα που ίσως γνωρίζετε',
            'ru': 'Люди, которых вы можете знать',
            'uk': 'Люди, яких Ви можете знати',
            'bg': 'Хора, които може би познавате',
            'defaultEnabled': false
        },

        // - Paid partnership:
        // - page you follow is "sponsoring" another page's post (e.g. job)
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
            'ar': 'شراكة مدفوعة',
            'id': 'Kemitraan berbayar',
            'zh-Hans': '付费合伙',
            'zh-Hant': '付費合作',
            'ja': '有償パートナーシップ',
            'fi': 'Maksettu kumppanuus',
            'tr': 'ücretli ortaklık',
            'el': 'Πληρωμένη συνεργασία',
            'ru': 'Платное партнерство',
            'uk': 'Оплачуване партнерство',
            'bg': 'Платено партньорство',
            'defaultEnabled': true
        },

        // - Sponsored · Paid for by ______  :
        // - (paid advertising)
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
            'he': 'ממומן · שולם על ידי ______',
            'ar': 'برعاية · مدفوعة بواسطة ______',
            'id': 'Disponsori · Dibayar oleh ______',
            'zh-Hans': '赞助 · 由 ______ 付费',
            'zh-Hant': '贊助 · 出資者：______',
            'ja': '後援 · ______ による支払い',
            'fi': 'Sponsoroitu · Maksaja ______',
            'tr': 'Sponsorlu · ______ tarafından ödendi',
            'el': 'Χορηγούμενο · Πληρωμένο από ______',
            'ru': 'Реклама · Оплачено ______',
            'uk': 'Спонсоровано · Оплачено ______',
            'bg': 'Спонсорирано · Платено от ______',
            'defaultEnabled': true
        },

        // - Various Suggested/recommendations type posts
        NF_SUGGESTIONS: {
            'en': 'Suggestions / Recommendations',
            'pt': 'Sugestões / Recomendações',
            'de': 'Vorschläge / Empfehlungen',
            'fr': 'Suggestions / Recommandations',
            'es': 'Sugerencias / Recomendaciones',
            'cs': 'Návrhy / Doporučení',
            'vi': 'Đề xuất / Khuyến nghị',
            'it': 'Suggerimenti / Raccomandazioni',
            'lv': 'Ieteikumi',
            'pl': 'Sugestie / Zalecenia',
            'nl': 'Suggesties / Aanbevelingen',
            'he': 'הצעות / המלצות',
            'ar': 'الاقتراحات / التوصيات',
            'id': 'Saran / Rekomendasi',
            'zh-Hans': '建议',
            'zh-Hant': '建議/推薦',
            'ja': '提案/推奨事項',
            'fi': 'Ehdotuksia / Suosituksia',
            'tr': 'Öneriler',
            'el': 'Προτάσεις / Συστάσεις',
            'ru': 'Предложения / Рекомендации',
            'uk': 'Пропозиції / Рекомендації',
            'bg': 'Предложения / Препоръки',
            'defaultEnabled': false
        },

        // - Follow
        NF_FOLLOW: {
            'en': 'Follow',
            'pt': 'Seguir',
            'de': 'Folgen',
            'fr': 'Suivre',
            'es': 'Seguir',
            'cs': 'Sledovat',
            'vi': 'Theo dõi',
            'it': 'Segui',
            'lv': 'Sekot',
            'pl': 'Obserwuj',
            'nl': 'Volgen',
            'he': 'עקוב',
            'ar': 'تابع',
            'id': 'Ikuti',
            'zh-Hans': '关注',
            'zh-Hant': '追蹤',
            'ja': 'フォロー',
            'fi': 'Seuraa',
            'tr': 'Takip Et',
            'el': 'Ακολούθησε',
            'ru': 'Подписаться',
            'uk': 'Слідуйте',
            'bg': 'Следвай',
            'defaultEnabled': false
        },

        // - Participate
        NF_PARTICIPATE: {
            'en': 'Participate',
            'pt': 'Participar',
            'de': 'Teilnehmen',
            'fr': 'Participer',
            'es': 'Participar',
            'cs': 'Participovat',
            'vi': 'Tham gia',
            'it': 'Partecipare',
            'lv': 'Piedalīties',
            'pl': 'Uczestniczyć',
            'nl': 'Deelnemen',
            'he': 'השתתף',
            'ar': 'المشاركة',
            'id': 'Berpartisipasi',
            'zh-Hans': '参与',
            'zh-Hant': '參與',
            'ja': '参加する',
            'fi': 'Osallistua',
            'tr': 'Katılmak',
            'el': 'Συμμετέχω',
            'ru': 'Участвовать',
            'uk': 'Беріть участь',
            'bg': 'Участвай',
            'defaultEnabled': false
        },

        // - Reels and short videos:
        NF_REELS_SHORT_VIDEOS: {
            'en': 'Reels and short videos',
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
            'ar': 'ريلز ومقاطع الفيديو القصيرة',
            'id': 'Reels dan Video Pendek',
            'zh-Hans': '卷轴和短视频',
            'zh-Hant': 'Reels 和短影片',
            'ja': 'リールとショート動画',
            'fi': 'Keloja ja lyhyitä videoita',
            'tr': 'Makaralar ve kısa videolar',
            'el': 'Reel και σύντομα βίντεο',
            'ru': 'Reels и короткие видео',
            'uk': 'Відео Reels і короткі відео',
            'bg': 'Ленти и кратки видеоклипове',
            'defaultEnabled': false
        },

        // - Reel/short video posts
        NF_SHORT_REEL_VIDEO: {
            'en': 'Reel/short video',
            'pt': 'Rolo/vídeo curto',
            'de': 'Reel/kurzes Video',
            'fr': 'Bobine/courte vidéo',
            'es': 'Reel/video corto',
            'cs': 'Naviják/krátké video',
            'vi': 'Reel / video ngắn',
            'it': 'Bobina/breve video',
            'lv': 'Ruļļa/īss video',
            'pl': 'Reel/krótki film',
            'nl': 'Spoel/korte video',
            'he': 'סליל/סרטון קצר',
            'ar': 'بكرة / فيديو قصير',
            'id': 'Reel/video pendek',
            'zh-Hans': '卷轴/短视频',
            'zh-Hant': 'Reel/短影片',
            'ja': 'リール/ショートビデオ',
            'fi': 'Kela/lyhyt video',
            'tr': 'makara/kısa video',
            'el': 'Ριλς/μικρό βίντεο',
            'ru': 'Reels/короткое видео',
            'uk': 'Reel/коротке відео',
            'bg': 'Рил/късо видео',
            'defaultEnabled': false
        },

        // - Events you may like:
        NF_EVENTS_YOU_MAY_LIKE: {
            'en': 'Events you may like',
            'pt': 'Eventos que você pode gostar',
            'de': 'Veranstaltungen, die Ihnen gefallen könnten',
            'fr': 'Évènements qui pourraient vous intéresser',
            'es': 'Eventos que te pueden gustar',
            'cs': 'Události, které se vám mohou líbit',
            'vi': 'Sự kiện bạn có thể thích',
            'it': 'Eventi che potrebbero piacerti',
            'lv': 'Notikumi, kas jums varētu patikt',
            'pl': 'Wydarzenia, które mogą Ci się spodobać',
            'nl': 'Evenementen die je misschien leuk vindt',
            'he': 'אירועים שאולי תאהבו',
            'ar': 'أحداث قد تعجبك',
            'id': 'Acara yang mungkin Anda sukai',
            'zh-Hans': '您可能喜欢的活动',
            'zh-Hant': '你可能感興趣的活動',
            'ja': 'リール/ショートビデオ',
            'fi': 'Kela/lyhyt video',
            'tr': 'makara/kısa video',
            'el': 'Εκδηλώσεις που μπορεί να σας αρέσουν',
            'ru': 'Мероприятия, которые вам могут понравиться',
            'uk': 'Події, які можуть вам сподобатися',
            'bg': 'Събития, които може да ви харесат',
            'defaultEnabled': false,
        },

        // - posts having animated GIFs content (ignore in comments section)
        NF_ANIMATED_GIFS_POSTS: {
            'en': 'Animated GIFs',
            'pt': 'GIFs animados',
            'de': 'Animierte GIFs',
            'fr': 'GIF animés',
            'es': 'GIF animados',
            'cs': 'Animované GIFy',
            'vi': 'GIF động',
            'it': 'GIF animate',
            'lv': 'Animētos GIF',
            'pl': 'Animowane GIF-y',
            'nl': 'Geanimeerde GIF\'s',
            'he': 'קובצי GIF מונפשים',
            'ar': 'صور GIF المتحركة',
            'id': 'GIF animasi',
            'zh-Hans': '动图 GIF',
            'zh-Hant': '動態 GIF',
            'ja': 'アニメーション GIF',
            'fi': 'Animoidut GIF-kuvat',
            'tr': 'Animasyonlu GIF\'ler',
            'el': 'Κινούμενες εικόνες GIF',
            'ru': 'Анимированные GIF-файлы',
            'uk': 'Анімовані GIF-файли',
            'bg': 'Анимирани GIF файлове',
            'defaultEnabled': false,
        },

        // - pause animated GIFs (in post's content and comments):
        NF_ANIMATED_GIFS_PAUSE: {
            'en': 'Pause animated GIFs',
            'pt': 'Pausar GIFs animados',
            'de': 'Animierte GIFs pausieren',
            'fr': 'Mettre en pause les GIF animés',
            'es': 'Pausar GIF animados',
            'cs': 'Pozastavit animované GIFy',
            'vi': 'Tạm dừng các ảnh GIF động',
            'it': 'Metti in pausa le GIF animate',
            'lv': 'Apturiet animētos GIF',
            'pl': 'Wstrzymaj animowane GIF-y',
            'nl': 'Geanimeerde GIF\'s pauzeren',
            'he': 'השהה קובצי GIF מונפ',
            'ar': 'وقفة ملفات GIF المتحركة',
            'id': 'Jeda GIF animasi',
            'zh-Hans': '暂停动画 GIF',
            'zh-Hant': '暫停 GIF 動畫',
            'ja': 'アニメーション GIF を一時停止する',
            'fi': 'Pysäytä animoidut GIF-kuvat',
            'tr': 'Hareketli GIF\'leri duraklat',
            'el': 'Παύση κινούμενων GIF',
            'ru': 'Приостановить анимированные GIF',
            'uk': 'Призупинити анімовані GIF-файли',
            'bg': 'Пауза на анимирани GIF файлове',
            'defaultEnabled': false,
        },

        // - # shares
        NF_SHARES: {
            'en': '# shares',
            'pt': '# partilhas',
            'de': '# Mal geteilt',
            'fr': '# partages',
            'es': '# veces compartida',
            'cs': '# sdílení',
            'vi': '# lượt chia sẻ',
            'it': 'Condivisioni: #',
            'lv': '# dalījās',
            'pl': '# udostępnienia',
            'nl': '# keer gedeeld',
            'he': '# שיתופים',
            'ar': '# مشاركات',
            'id': '# Kali dibagikan',
            'zh-Hans': '#次分享',
            'zh-Hant': '#次分享',
            'ja': 'シェア#件',
            'fi': '# jakoa',
            'tr': '# Paylaşım',
            'el': '# μερίδια',
            'ru': '# поделились',
            'uk': '# Поширити',
            'bg': '# споделяния',
            'defaultEnabled': false
        },

        // -- Maximum Likes
        // -- hide posts having excessive Likes
        // -- user's input count value is stored in NF_LIKES_MAXIMUM_COUNT
        NF_LIKES_MAXIMUM: {
            'en': 'Maximum number of Likes',
            'pt': 'Número máximo de curtidas',
            'de': 'Maximale Anzahl an Likes',
            'fr': 'Nombre maximum de J\'aime',
            'es': 'Número máximo de Me gusta',
            'cs': 'Maximální počet hodnocení Líbí se mi',
            'vi': 'Số lượt thích tối đa',
            'it': 'Numero massimo di Mi piace',
            'lv': 'Maksimālais atzīmju Patīk skaits',
            'pl': 'Maksymalna ilość "Lubię to!"',
            'nl': 'Maximaal aantal likes',
            'he': 'מספר לייקים מקסימלי',
            'ar': 'الحد الأقصى لعدد الإعجابات',
            'id': 'Jumlah maksimum Suka',
            'zh-Hans': '最大点赞数',
            'zh-Hant': '最大按讚數',
            'ja': '「いいね！」の最大数',
            'fi': 'Maksimimäärä tykkäyksiä',
            'tr': 'Maksimum Beğeni sayısı',
            'el': 'Μέγιστα "Μου αρέσει"',
            'ru': 'Максимальное количество «Нравится»',
            'uk': 'Максимальна кількість «Подобається».',
            'bg': 'Максимален брой Харесвания',
            'defaultEnabled': false
        },

        // *** Groups Feed ::

        // - Paid partnership:
        // - a page you follow is "sponsoring" another page's post (e.g. job)
        GF_PAID_PARTNERSHIP: {
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
            'ar': 'شراكة مدفوعة',
            'id': 'Kemitraan berbayar',
            'zh-Hans': '有偿合作',
            'zh-Hant': '付費合作',
            'ja': '有償パートナーシップ',
            'fi': 'Maksettu kumppanuus',
            'tr': 'ücretli ortaklık',
            'el': 'Πληρωμένη συνεργασία',
            'ru': 'Платное партнерство',
            'uk': 'Оплачуване партнерство',
            'bg': 'Платено партньорство',
            'defaultEnabled': true
        },

        // - Various suggested/recommendations:
        GF_SUGGESTIONS: {
            'en': 'Suggestions / Recommendations',
            'pt': 'Sugestões / Recomendações',
            'de': 'Vorschläge / Empfehlungen',
            'fr': 'Suggestions / Recommandations',
            'es': 'Sugerencias / Recomendaciones',
            'cs': 'Návrhy / Doporučení',
            'vi': 'Đề xuất / Khuyến nghị',
            'it': 'Suggerimenti / Raccomandazioni',
            'lv': 'Ieteikumi',
            'pl': 'Sugestie / Zalecenia',
            'nl': 'Suggesties / Aanbevelingen',
            'he': 'הצעות / המלצות',
            'ar': 'الاقتراحات / التوصيات',
            'id': 'Saran / Rekomendasi',
            'zh-Hans': '建议/建议',
            'zh-Hant': '建議/推薦',
            'ja': '提案/推奨事項',
            'fi': 'Ehdotuksia / Suosituksia',
            'tr': 'Öneriler',
            'el': 'Προτάσεις / Συστάσεις',
            'ru': 'Предложения / Рекомендации',
            'uk': 'Пропозиції / Рекомендації',
            'bg': 'Предложения / Препоръки',
            'defaultEnabled': false
        },

        // - Reel/short video posts
        GF_SHORT_REEL_VIDEO: {
            'en': 'Reel/short video',
            'pt': 'Rolo/vídeo curto',
            'de': 'Reel/kurzes Video',
            'fr': 'Bobine/courte vidéo',
            'es': 'Reel/video corto',
            'cs': 'Naviják/krátké video',
            'vi': 'Reel / video ngắn',
            'it': 'Bobina/breve video',
            'lv': 'Ruļļa/īss video',
            'pl': 'Reel/krótki film',
            'nl': 'Spoel/korte video',
            'he': 'סליל/סרטון קצר',
            'ar': 'بكرة / فيديو قصير',
            'id': 'Reel/video pendek',
            'zh-Hans': '卷轴和短视频',
            'zh-Hant': 'Reel/短影片',
            'ja': 'リールとショートビデオ',
            'fi': 'Keloja ja lyhyitä videoita',
            'tr': 'makara/kısa video',
            'el': 'Ριλς/μικρό βίντεο',
            'ru': 'Reel/короткое видео',
            'uk': 'Reel/коротке відео',
            'bg': 'Рил/късо видео',
            'defaultEnabled': false
        },

        // - posts having animated GIFs content (ignore in comments section)
        GF_ANIMATED_GIFS_POSTS: {
            'en': 'Animated GIFs',
            'pt': 'GIFs animados',
            'de': 'Animierte GIFs',
            'fr': 'GIF animés',
            'es': 'GIF animados',
            'cs': 'Animované GIFy',
            'vi': 'GIF động',
            'it': 'GIF animate',
            'lv': 'Animētos GIF',
            'pl': 'Animowane GIF-y',
            'nl': 'Geanimeerde GIF\'s',
            'he': 'קובצי GIF מונפשים',
            'ar': 'صور GIF المتحركة',
            'id': 'GIF animasi',
            'zh-Hans': '动图 GIF',
            'zh-Hant': '動態 GIF',
            'ja': 'アニメーション GIF',
            'fi': 'Animoidut GIF-kuvat',
            'tr': 'Animasyonlu GIF\'ler',
            'el': 'Κινούμενες εικόνες GIF',
            'ru': 'Анимированные GIF-файлы',
            'uk': 'Анімовані GIF-файли',
            'bg': 'Анимирани GIF файлове',
            'defaultEnabled': false,
        },

        // - pause animated GIFs (in post's content and comments):
        GF_ANIMATED_GIFS_PAUSE: {
            'en': 'Pause animated GIFs',
            'pt': 'Pausar GIFs animados',
            'de': 'Animierte GIFs pausieren',
            'fr': 'Mettre en pause les GIF animés',
            'es': 'Pausar GIF animados',
            'cs': 'Pozastavit animované GIFy',
            'vi': 'Tạm dừng các ảnh GIF động',
            'it': 'Metti in pausa le GIF animate',
            'lv': 'Apturiet animētos GIF',
            'pl': 'Wstrzymaj animowane GIF-y',
            'nl': 'Geanimeerde GIF\'s pauzeren',
            'he': 'השהה קובצי GIF מונפ',
            'ar': 'وقفة ملفات GIF المتحركة',
            'id': 'Jeda GIF animasi',
            'zh-Hans': '暂停动画 GIF',
            'zh-Hant': '暫停 GIF 動畫',
            'ja': 'アニメーション GIF を一時停止する',
            'fi': 'Pysäytä animoidut GIF-kuvat',
            'tr': 'Hareketli GIF\'leri duraklat',
            'el': 'Παύση κινούμενων GIF',
            'ru': 'Приостановить анимированные GIF',
            'uk': 'Призупинити анімовані GIF-файли',
            'bg': 'Пауза на анимирани GIF файлове',
            'defaultEnabled': false,
        },

        // - # shares
        GF_SHARES: {
            'en': '# shares',
            'pt': '# partilhas',
            'de': '# Mal geteilt',
            'fr': '# partages',
            'es': '# veces compartida',
            'cs': '# sdílení',
            'vi': '# lượt chia sẻ',
            'it': 'Condivisioni: #',
            'lv': '# dalījās',
            'pl': '# udostępnienia',
            'nl': '# keer gedeeld',
            'he': '# שיתופים',
            'ar': '# مشاركات',
            'id': '# Kali dibagikan',
            'zh-Hans': '#次分享',
            'zh-Hant': '#次分享',
            'ja': 'シェア#件',
            'fi': '# jakoa',
            'tr': '# Paylaşım',
            'el': '# μερίδια',
            'ru': '# поделились',
            'uk': '# Поширити',
            'bg': '# споделяния',
            'defaultEnabled': false
        },

        // *** Watch Videos Feed ::

        // - LIVE videos:
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
            'he': 'שידור חי',
            'ar': 'مباشر',
            'id': 'LANGSUNG',
            'zh-Hans': '现场直播',
            'zh-Hant': '現場直播',
            'ja': 'ライブ',
            'fi': 'LIVE',
            'tr': 'CANLI',
            'el': 'ΖΩΝΤΑΝΑ',
            'ru': 'В ЭФИРЕ',
            'uk': 'ЕФІР',
            'bg': 'НА ЖИВО',
            'defaultEnabled': false,
        },

        // - Instagram videos:
        VF_INSTAGRAM: {
            'en': 'Instagram',
            'pt': 'Instagram',
            'de': 'Instagram',
            'fr': 'Instagram',
            'es': 'Instagram',
            'cs': 'Instagram',
            'vi': 'Instagram',
            'it': 'Instagram',
            'lv': 'Instagram',
            'pl': 'Instagram',
            'nl': 'Instagram',
            'he': 'Instagram',
            'ar': 'Instagram',
            'id': 'Instagram',
            'zh-Hans': 'Instagram',
            'zh-Hant': 'Instagram',
            'ja': 'Instagram',
            'fi': 'Instagram',
            'tr': 'Instagram',
            'el': 'Instagram',
            'ru': 'Instagram',
            'uk': 'Instagram',
            'bg': 'Instagram',
            'defaultEnabled': false,
        },

        // - Duplicate video:
        VF_DUPLICATE_VIDEOS: {
            'en': 'Duplicate video',
            'pt': 'Vídeo duplicado',
            'de': 'Dupliziertes Video',
            'fr': 'Vidéo en double',
            'es': 'Video duplicado',
            'cs': 'Duplikované video',
            'vi': 'Video trùng lặp',
            'it': 'Video duplicato',
            'lv': 'Dublētais video',
            'pl': 'Duplikat wideo',
            'nl': 'Dubbel video',
            'he': 'וידאו כפול',
            'ar': 'فيديو مكرر',
            'id': 'Video duplikat',
            'zh-Hans': '重复视频',
            'zh-Hant': '重複視頻',
            'ja': '重複する動画',
            'fi': 'Kaksoisvideo',
            'tr': 'Çift video',
            'el': 'Διπλότυπο βίντεο',
            'ru': 'Дубликат видео',
            'uk': 'Дубльоване відео',
            'bg': 'Дублирано видео',
            'defaultEnabled': false,
        },

        // - pause animated GIFs (in post's content and comments):
        VF_ANIMATED_GIFS_PAUSE: {
            'en': 'Pause animated GIFs',
            'pt': 'Pausar GIFs animados',
            'de': 'Animierte GIFs pausieren',
            'fr': 'Mettre en pause les GIF animés',
            'es': 'Pausar GIF animados',
            'cs': 'Pozastavit animované GIFy',
            'vi': 'Tạm dừng các ảnh GIF động',
            'it': 'Metti in pausa le GIF animate',
            'lv': 'Apturiet animētos GIF',
            'pl': 'Wstrzymaj animowane GIF-y',
            'nl': 'Geanimeerde GIF\'s pauzeren',
            'he': 'השהה קובצי GIF מונפ',
            'ar': 'وقفة ملفات GIF المتحركة',
            'id': 'Jeda GIF animasi',
            'zh-Hans': '暂停动画 GIF',
            'zh-Hant': '暫停 GIF 動畫',
            'ja': 'アニメーション GIF を一時停止する',
            'fi': 'Pysäytä animoidut GIF-kuvat',
            'tr': 'Hareketli GIF\'leri duraklat',
            'el': 'Παύση κινούμενων GIF',
            'ru': 'Приостановить анимированные GIF',
            'uk': 'Призупинити анімовані GIF-файли',
            'bg': 'Пауза на анимирани GIF файлове',
            'defaultEnabled': false,
        },
        // (videos do not have # shares count)


        // -- Profile Page
        // - posts having animated GIFs content (ignore in comments section)
        PP_ANIMATED_GIFS_POSTS: {
            'en': 'Animated GIFs',
            'pt': 'GIFs animados',
            'de': 'Animierte GIFs',
            'fr': 'GIF animés',
            'es': 'GIF animados',
            'cs': 'Animované GIFy',
            'vi': 'GIF động',
            'it': 'GIF animate',
            'lv': 'Animētos GIF',
            'pl': 'Animowane GIF-y',
            'nl': 'Geanimeerde GIF\'s',
            'he': 'קובצי GIF מונפשים',
            'ar': 'صور GIF المتحركة',
            'id': 'GIF animasi',
            'zh-Hans': '动图 GIF',
            'zh-Hant': '動態 GIF',
            'ja': 'アニメーション GIF',
            'fi': 'Animoidut GIF-kuvat',
            'tr': 'Animasyonlu GIF\'ler',
            'el': 'Κινούμενες εικόνες GIF',
            'ru': 'Анимированные GIF-файлы',
            'uk': 'Анімовані GIF-файли',
            'bg': 'Анимирани GIF файлове',
            'defaultEnabled': false,
        },

        // - pause animated GIFs (in post's content and comments):
        PP_ANIMATED_GIFS_PAUSE: {
            'en': 'Pause animated GIFs',
            'pt': 'Pausar GIFs animados',
            'de': 'Animierte GIFs pausieren',
            'fr': 'Mettre en pause les GIF animés',
            'es': 'Pausar GIF animados',
            'cs': 'Pozastavit animované GIFy',
            'vi': 'Tạm dừng các ảnh GIF động',
            'it': 'Metti in pausa le GIF animate',
            'lv': 'Apturiet animētos GIF',
            'pl': 'Wstrzymaj animowane GIF-y',
            'nl': 'Geanimeerde GIF\'s pauzeren',
            'he': 'השהה קובצי GIF מונפ',
            'ar': 'وقفة ملفات GIF المتحركة',
            'id': 'Jeda GIF animasi',
            'zh-Hans': '暂停动画 GIF',
            'zh-Hant': '暫停 GIF 動畫',
            'ja': 'アニメーション GIF を一時停止する',
            'fi': 'Pysäytä animoidut GIF-kuvat',
            'tr': 'Hareketli GIF\'leri duraklat',
            'el': 'Παύση κινούμενων GIF',
            'ru': 'Приостановить анимированные GIF',
            'uk': 'Призупинити анімовані GIF-файли',
            'bg': 'Пауза на анимирани GIF файлове',
            'defaultEnabled': false,
        },


        // *** block text - feeds

        // - text filter for News Feed:
        NF_BLOCKED_FEED: {
            'en': ['News Feed', 'Groups Feed', 'Videos Feed'],
            'pt': ['Feed de notícias', 'Feed de grupos', 'Feed de vídeos'],
            'de': ['Newsfeed', 'Gruppen-Feed', 'Video-Feed'],
            'fr': ['Fil de nouvelles', 'Flux de groupes', 'Flux de vidéos'],
            'es': ['Feed de noticias', 'Feed de grupos', 'Feed de videos'],
            'cs': ['Informační kanál', 'Skupinový kanál', 'Video kanál'],
            'vi': ['Nguồn cấp tin tức', 'Nguồn cấp dữ liệu Nhóm', 'Nguồn cấp dữ liệu video'],
            'it': ['Feed di notizie', 'Feed di gruppo', 'Feed di video'],
            'lv': ['Ziņu plūsma', 'Grupu plūsma', 'Video plūsma'],
            'pl': ['Kanał aktualności', 'Kanał grup', 'Kanał wideo'],
            'nl': ['Nieuwsfeed', 'Groepsfeed', 'Videofeed'],
            'he': ['ניוז פיד', 'פיד קבוצות', 'צפה בפיד סרטונים'],
            'ar': ['موجز الأخبار', 'تغذية المجموعات', 'تغذية الفيديو'],
            'id': ['Umpan Berita', 'Umpan Grup', 'Umpan Video'],
            'zh-Hans': ['新闻提要', '组提要', '视频提要'],
            'zh-Hant': ['新聞動態消息', '群組動態消息', '影片動態消息'],
            'ja': ['ニュースフィード', 'グループ フィード', '動画フィード'],
            'fi': ['Uutissyöte', 'Ryhmäsyöte', 'Videosyöte'],
            'tr': ['Haber akışı', 'Gruplar Feed\'i', 'Video Beslemelerini İzle'],
            'el': ['Ροή ειδήσεων', 'Ροή ομάδων', 'Ροή βίντεο'],
            'ru': ['Лента новостей', 'Лента групп', 'Лента видео'],
            'uk': ['Стрічка новин', 'Стрічка Групи', 'Стрічка відео'],
            'bg': ['Новинарски поток', 'Поток с групи', 'Поток с видеа'],
            'defaultEnabled': ['1', '0', '0'],
        },
        // - text filter for Groups Feed:
        GF_BLOCKED_FEED: {
            'en': ['News Feed', 'Groups Feed', 'Videos Feed'],
            'pt': ['Feed de notícias', 'Feed de grupos', 'Feed de vídeos'],
            'de': ['Newsfeed', 'Gruppen-Feed', 'Video-Feed'],
            'fr': ['Fil de nouvelles', 'Flux de groupes', 'Flux de vidéos'],
            'es': ['Feed de noticias', 'Feed de grupos', 'Feed de videos'],
            'cs': ['Informační kanál', 'Skupinový kanál', 'Video kanál'],
            'vi': ['Nguồn cấp tin tức', 'Nguồn cấp dữ liệu Nhóm', 'Nguồn cấp dữ liệu video'],
            'it': ['Feed di notizie', 'Feed di gruppo', 'Feed di video'],
            'lv': ['Ziņu plūsma', 'Grupu plūsma', 'Video plūsma'],
            'pl': ['Kanał aktualności', 'Kanał grup', 'Kanał wideo'],
            'nl': ['Nieuwsfeed', 'Groepsfeed', 'Videofeed'],
            'he': ['ניוז פיד', 'פיד קבוצות', 'צפה בפיד סרטונים'],
            'ar': ['موجز الأخبار', 'تغذية المجموعات', 'تغذية الفيديو'],
            'id': ['Umpan Berita', 'Umpan Grup', 'Umpan Video'],
            'zh-Hans': ['新闻提要', '组提要', '视频提要'],
            'zh-Hant': ['新聞動態消息', '群組動態消息', '影片動態消息'],
            'ja': ['ニュースフィード', 'グループ フィード', '動画フィード'],
            'fi': ['Uutissyöte', 'Ryhmäsyöte', 'Videosyöte'],
            'tr': ['Haber akışı', 'Gruplar Feed\'i', 'Video Beslemelerini İzle'],
            'el': ['Ροή ειδήσεων', 'Ροή ομάδων', 'Ροή βίντεο'],
            'ru': ['Лента новостей', 'Лента групп', 'Лента видео'],
            'uk': ['Стрічка новин', 'Стрічка Групи', 'Стрічка відео'],
            'bg': ['Новинарски поток', 'Поток с групи', 'Поток с видеа'],
            'defaultEnabled': ['0', '1', '0'],
        },
        // - text filter for Vidoes Feed:
        VF_BLOCKED_FEED: {
            'en': ['News Feed', 'Groups Feed', 'Videos Feed'],
            'pt': ['Feed de notícias', 'Feed de grupos', 'Feed de vídeos'],
            'de': ['Newsfeed', 'Gruppen-Feed', 'Video-Feed'],
            'fr': ['Fil de nouvelles', 'Flux de groupes', 'Flux de vidéos'],
            'es': ['Feed de noticias', 'Feed de grupos', 'Feed de videos'],
            'cs': ['Informační kanál', 'Skupinový kanál', 'Video kanál'],
            'vi': ['Nguồn cấp tin tức', 'Nguồn cấp dữ liệu Nhóm', 'Nguồn cấp dữ liệu video'],
            'it': ['Feed di notizie', 'Feed di gruppo', 'Feed di video'],
            'lv': ['Ziņu plūsma', 'Grupu plūsma', 'Video plūsma'],
            'pl': ['Kanał aktualności', 'Kanał grup', 'Kanał wideo'],
            'nl': ['Nieuwsfeed', 'Groepsfeed', 'Videofeed'],
            'he': ['ניוז פיד', 'פיד קבוצות', 'צפה בפיד סרטונים'],
            'ar': ['موجز الأخبار', 'تغذية المجموعات', 'تغذية الفيديو'],
            'id': ['Umpan Berita', 'Umpan Grup', 'Umpan Video'],
            'zh-Hans': ['新闻提要', '组提要', '视频提要'],
            'zh-Hant': ['新聞動態消息', '群組動態消息', '影片動態消息'],
            'ja': ['ニュースフィード', 'グループ フィード', '動画フィード'],
            'fi': ['Uutissyöte', 'Ryhmäsyöte', 'Videosyöte'],
            'tr': ['Haber akışı', 'Gruplar Feed\'i', 'Video Beslemelerini İzle'],
            'el': ['Ροή ειδήσεων', 'Ροή ομάδων', 'Ροή βίντεο'],
            'ru': ['Лента новостей', 'Лента групп', 'Лента видео'],
            'uk': ['Стрічка новин', 'Стрічка Групи', 'Стрічка відео'],
            'bg': ['Новинарски поток', 'Поток с групи', 'Поток с видеа'],
            'defaultEnabled': ['0', '0', '1'],
        },
        // - text filter for Marketplace feed:
        MP_BLOCKED_FEED: {
            'en': ['Marketplace Feed'],
            'pt': ['Feed de mercado'],
            'de': ['Marktplatz-Feed'],
            'fr': ['Flux de la place de marché'],
            'es': ['Feed de Marketplace'],
            'cs': ['Marketplace kanál'],
            'vi': ['Nguồn cấp dữ liệu Marketplace'],
            'it': ['Feed id Marketplace'],
            'lv': ['Marketplace'],
            'pl': ['Kanał Marketplace'],
            'nl': ['Marktplaatsfeed'],
            'he': ['זירת מסחר'],
            'ar': ['السوق تغذية'],
            'id': ['Umpan Marketplace'],
            'zh-Hans': ['市场提要'],
            'zh-Hant': ['Marketplace 動態消息'],
            'ja': ['マーケットプレイス フィード'],
            'fi': ['Marketplace-syöte'],
            'tr': ['Pazar Yeri Feed\'i'],
            'el': ['Ροή Marketplace'],
            'ru': ['Лента Marketplace'],
            'uk': ['Стрічка Marketplace'],
            'bg': ['Поток с Marketplace'],
            'defaultEnabled': ['1', '0', '0'],
        },

        PP_BLOCKED_FEED: {
            'en': ['Profile page'],
            'pt': '',
            'de': '',
            'fr': '',
            'es': '',
            'cs': '',
            'vi': '',
            'it': '',
            'lv': '',
            'pl': '',
            'nl': '',
            'he': '',
            'ar': '',
            'id': '',
            'zh-Hans': '',
            'zh-Hant': '',
            'ja': '',
            'fi': '',
            'tr': '',
            'el': '',
            'ru': '',
            'uk': '',
            'bg': '',
            'defaultEnabled': ['1', '0', '0'],
        },

        // *** Miscellaneous/Supplementary/Other items ::

        // - Info box - coronavirus:
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
            'he': 'וירוס קורונה (תיבת מידע)',
            'ar': 'فيروس كورونا (صندوق المعلومات)',
            'id': 'Virus Corona (kotak informasi)',
            'zh-Hans': '冠状病毒（信息框）',
            'zh-Hant': '武漢肺炎病毒（資訊框）',
            'ja': 'コロナウイルス（インフォメーションボックス）',
            'fi': 'Koronavirus (tietolaatikko)',
            'tr': 'Koronavirüs (bilgi kutusu)',
            'el': 'Κορονοϊός (πλαίσιο πληροφοριών)',
            'ru': 'Коронавирус (информационное окно)',
            'uk': 'Коронавірус (інформаційне вікно)',
            'bg': 'Коронавирус (информационна кутия)',
            'defaultEnabled': false,
            'pathMatch': '/coronavirus_info/',
        },

        // - Info box - climate science
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
            'he': 'מדע האקלים (תיבת מידע)',
            'ar': 'علوم المناخ (صندوق المعلومات)',
            'id': 'Ilmu iklim (kotak informasi)',
            'zh-Hans': '气候科学（信息框）',
            'zh-Hant': '氣候科學（資訊框）',
            'ja': '気候科学（情報ボックス）',
            'fi': 'Ilmastotiede (tietolaatikko)',
            'tr': 'İklim Bilimi (bilgi kutusu)',
            'el': 'Επιστήμη του κλίματος (πλαίσιο πληροφοριών)',
            'ru': 'Наука о климате (информационное окно)',
            'uk': 'Наука про клімат (інформаційне вікно)',
            'bg': 'Наука за климата (информационна кутия)',
            'defaultEnabled': false,
            'pathMatch': '/climatescienceinfo/',
        },

        // - Info box - subscribe
        OTHER_INFO_BOX_SUBSCRIBE: {
            'en': 'Subscribe (information box)',
            'pt': 'Assine (caixa de informações)',
            'de': 'Abonnieren (Infobox)',
            'fr': 'S’abonner (encadré d\'information)',
            'es': 'Suscribir (cuadro de información)',
            'cs': 'Odebírat (informační box)',
            'vi': 'Đăng kí (hộp thông tin)',
            'it': 'Iscriviti (casella informativa)',
            'lv': 'Abonēt (informācijas lodziņš)',
            'pl': 'Subskrybuj (pole informacyjne)',
            'nl': 'Abonneren (informatievak)',
            'he': 'הירשם (תיבת מידע)',
            'ar': '(صندوق المعلومات) الاشتراك',
            'id': 'Berlangganan (kotak informasi)',
            'zh-Hans': '订阅（信息框）',
            'zh-Hant': '訂閱（資訊框）',
            'ja': '購読する（情報ボックス）',
            'fi': 'Rekisteröidy (tietolaatikko)',
            'tr': 'Abone ol (bilgi kutusu)',
            'el': 'Εγγραφή (πλαίσιο πληροφοριών)',
            'ru': 'Подписаться (информационное окно)',
            'uk': 'Підписатися (інформаційне вікно)',
            'bg': 'Абонирай се (информационна кутия)',
            'defaultEnabled': false,
            'pathMatch': '/support/',
        },

        REELS_TITLE: {
            'en': 'Reels',
            'pt': 'Reels',
            'de': 'Reels',
            'fr': 'Reels',
            'es': 'Reels',
            'cs': 'Reels',
            'vi': 'Reels',
            'it': 'Reels',
            'lv': 'Reels',
            'pl': 'Reels',
            'nl': 'Reels',
            'he': 'Reels', // -- FB's label
            'ar': 'ريلز', // -- FB's label
            'id': 'Reels',
            'zh-Hans': 'Reels',
            'zh-Hant': 'Reels',
            'ja': 'リール動画',
            'fi': 'Reels',
            'tr': 'Reels',
            'el': 'Reel',
            'ru': 'Видео Reels',
            'uk': 'Reels',
            'bg': 'Ленти', // -- FB's label
        },

        REELS_CONTROLS: {
            'en': 'Show video controls',
            'pt': 'Mostrar controles do vídeo',
            'de': 'Video-Steuerung anzeigen',
            'fr': 'Afficher les contrôles vidéo',
            'es': 'Mostrar controles de video',
            'cs': 'Zobrazit ovládání videa',
            'vi': 'Hiển thị điều khiển video',
            'it': 'Mostra controlli video',
            'lv': 'Rādīt video vadīklus',
            'pl': 'Pokaż sterowanie wideo',
            'nl': 'Toon video bedieningselementen',
            'he': 'הצג אפשרויות בקרת וידאו',
            'ar': 'عرض أدوات التحكم في الفيديو',
            'id': 'Tampilkan kontrol video',
            'zh-Hans': '显示视频控制',
            'zh-Hant': '顯示影片控制',
            'ja': 'ビデオコントロールを表示',
            'fi': 'Näytä videon hallintaelementit',
            'tr': 'Video kontrollerini göster',
            'el': 'Εμφάνιση χειριστηρίων βίντεο',
            'ru': 'Показать элементы управления видео',
            'uk': 'Відображення елементів керування відео',
            'bg': 'Покажи контроли на видеото',
            'defaultEnabled': true
        },
        REELS_DISABLE_LOOPING: {
            'en': 'Disable looping',
            'pt': 'Desativar repetição',
            'de': 'Wiederholung deaktivieren',
            'fr': 'Désactiver la boucle',
            'es': 'Desactivar bucle',
            'cs': 'Vypnout smyčení',
            'vi': 'Tắt lặp lại',
            'it': 'Disattiva ripetizione',
            'lv': 'Atspējot cilpotošanu',
            'pl': 'Wyłącz pętlę',
            'nl': 'Herhalen uitschakelen',
            'he': 'השבת לולאה',
            'ar': 'تعطيل التكرار',
            'id': 'Nonaktifkan pengulangan',
            'zh-Hans': '禁用循环',
            'zh-Hant': '停用循環',
            'ja': 'ループの無効化',
            'fi': 'Poista toisto',
            'tr': 'Döngüyü devre dışı bırak',
            'el': 'Απενεργοποίηση επανάληψης',
            'ru': 'Отключить повторение',
            'uk': 'Вимкнути повторення',
            'bg': 'Изключване на повторението',
            'defaultEnable': true
        },

        // *** Dialog box ::

        // - CMF's dialog title:
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
            'he': 'תנקה את הזנות שלי',
            'ar': 'تنظيف خلاصاتي',
            'id': 'Bersihkan feed saya',
            'zh-Hans': '清理我的提要',
            'zh-Hant': '清理我的動態消息',
            'ja': 'フィードをクリーンアップ',
            'fi': 'Puhdista syötteeni',
            'tr': 'Feed\'lerimi temizle',
            'el': 'Καθαρισμός των ροών μου',
            'ru': 'Очистить мои новостные ленты',
            'uk': 'Очистити мої стрічки',
            'bg': 'Почисти моите емисии',
        },

        // - label for News Feed:
        DLG_NF: {
            'en': 'News Feed',
            'pt': 'Feed de notícias',
            'de': 'Newsfeed',
            'fr': 'Fil de nouvelles',
            'es': 'Feed de noticias',
            'cs': 'Informační kanál',
            'vi': 'Nguồn cấp tin tức',
            'it': 'Feed di notizie',
            'lv': 'Ziņu plūsma',
            'pl': 'Kanał aktualności',
            'nl': 'Nieuwsfeed',
            'he': 'ניוז פיד',
            'ar': 'الأخبار تغذية',
            'id': 'Umpan Berita',
            'zh-Hans': '新闻提要',
            'zh-Hant': '新聞動態消息',
            'ja': 'ニュースフィード',
            'fi': 'Uutisvirta',
            'tr': 'Haber akışı',
            'el': 'Ροή ειδήσεων',
            'ru': 'Лента новостей',
            'uk': 'Стрічка новин',
            'bg': 'Новинарски поток',
        },

        // - label for Groups Feed:
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
            'he': 'פיד קבוצות',
            'ar': 'مجموعات تغذية',
            'id': 'Umpan Grup',
            'zh-Hans': '群组提要',
            'zh-Hant': '群組動態消息',
            'ja': 'グループ フィード',
            'fi': 'Ryhmäsyöte',
            'tr': 'Gruplar Feed\'i',
            'el': 'Ροή ομάδων',
            'ru': 'Лента групп',
            'uk': 'Стрічка Групи',
            'bg': 'Поток с групи',
        },

        // - label for Videos Feed:
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
            'he': 'צפה בפיד הסרטונים',
            'ar': 'الفيديو تغذية',
            'id': 'Umpan Video',
            'zh-Hans': '视频提要',
            'zh-Hant': '影片動態消息',
            'ja': '動画フィード',
            'fi': 'Videosyöte',
            'tr': 'Video Beslemelerini İzle',
            'el': 'Ροή βίντεο',
            'ru': 'Лента видео',
            'uk': 'Стрічка відео',
            'bg': 'Поток с видеа',
        },

        // - label for Marketplace Feed:
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
            'he': 'זירת מסחר',
            'ar': 'السوق تغذية',
            'id': 'Umpan Marketplace',
            'zh-Hans': '市场提要',
            'zh-Hant': 'Marketplace 動態消息',
            'ja': 'マーケットプレイス フィード',
            'fi': 'Marketplace-syöte',
            'tr': 'Pazar Yeri Feed\'i',
            'el': 'Ροή Marketplace',
            'ru': 'Лента Marketplace',
            'uk': 'Стрічка Marketplace',
            'bg': 'Поток с Marketplace',
        },

        // - label for profile page feed:
        DLG_PP: {
            'en': 'Profile page',
            'pt': '',
            'de': '',
            'fr': '',
            'es': '',
            'cs': '',
            'vi': '',
            'it': '',
            'lv': '',
            'pl': '',
            'nl': '',
            'he': '',
            'ar': '',
            'id': '',
            'zh-Hans': '',
            'zh-Hant': '',
            'ja': '',
            'fi': '',
            'tr': '',
            'el': '',
            'ru': '',
            'uk': '',
            'bg': '',
        },

        DLG_OTHER: {
            'en': 'Supplementary / information section',
            'pt': 'Seção suplementar / informativa',
            'de': 'Ergänzungs-/Informationsbereich',
            'fr': 'Section supplémentaire / information',
            'es': 'Sección suplementaria / información',
            'cs': 'Doplňková/informační část',
            'vi': 'Phần bổ sung/thông tin',
            'it': 'Sezione supplementare / informativa',
            'lv': 'Papildu / informācija sadaļa',
            'pl': 'Sekcja uzupełniająca/informacyjna',
            'nl': 'Aanvullende / informatie sectie',
            'he': 'מדור משלים / מידע',
            'ar': 'قسم التكميلي / المعلومات',
            'id': 'Bagian tambahan / informasi',
            'zh-Hans': '补充/资料部分',
            'zh-Hant': '補充/資訊部分',
            'ja': '補足・情報セクション',
            'fi': 'Täydentävä / tieto-osio',
            'tr': 'Tamamlayıcı / bilgi bölümü',
            'el': 'Συμπληρωματικό τμήμα / πληροφοριακό τμήμα',
            'ru': 'Дополнительный/информационный раздел',
            'uk': 'Додатковий/інформаційний розділ',
            'bg': 'Допълнителен / информационен раздел',
        },

        // - text filter label (title)
        DLG_BLOCK_TEXT_FILTER_TITLE: {
            'en': 'Text filter',
            'pt': 'Filtro de texto',
            'de': 'Textfilter',
            'fr': 'Filtre de texte',
            'es': 'Filtro de texto',
            'cs': 'Textový filtr',
            'vi': 'Bộ lọc văn bản',
            'it': 'Filtro di testo',
            'lv': 'Teksta filtrs',
            'pl': 'Filtr tekstu',
            'nl': 'Tekstfilter',
            'he': 'מסנן טקסט',
            'ar': 'مرشح النص',
            'id': 'Filter teks',
            'zh-Hans': '文本过滤器',
            'zh-Hant': '文字過濾器',
            'ja': 'テキストフィルター',
            'fi': 'Tekstisuodatin',
            'tr': 'Metin filtresi',
            'el': 'Φίλτρο κειμένου',
            'ru': 'Текстовый фильтр',
            'uk': 'Текстовий фільтр',
            'bg': 'Текстов филтър',
        },

        // - text filter - separate keywords with new line:
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
            'he': '(הפרד מילים או ביטויים עם מעבר שורה)',
            'ar': '(افصل الكلمات أو العبارات بفاصل أسطر)',
            'id': '(pisahkan kata atau frasa dengan jeda baris)',
            'zh-Hans': '（用换行符分隔单词或短语）',
            'zh-Hant': '（用換行符號分隔單字或短語）',
            'ja': '(改行で単語または語句を区切ります)',
            'fi': '(erottele sanat tai lauseet rivinvaihdolla)',
            'tr': '(sözcükleri veya tümcecikleri satır sonu ile ayırın)',
            'el': '(διαχωρίστε λέξεις ή φράσεις με αλλαγή γραμμής)',
            'ru': '(разделяйте слова или фразы с помощью переноса строки)',
            'uk': '(розділяти слова або фрази розривом рядка)',
            'bg': '(разделяйте думи или фрази с нов ред)',
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
            'nl': 'Ingeschakeld',
            'he': 'מופעל',
            'ar': 'تمكين',
            'id': 'Diaktifkan',
            'zh-Hans': '启用',
            'zh-Hant': '啟用',
            'ja': '有効化',
            'fi': 'Ota vaihtoehto käyttöön',
            'tr': 'Etkinleştirildi',
            'el': 'Ενεργοποιημένο',
            'ru': 'Включено',
            'uk': 'Увімкнено',
            'bg': 'Активирано',
            'defaultEnabled': false,
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
            'he': 'מופעל',
            'ar': 'تمكين',
            'id': 'Diaktifkan',
            'zh-Hans': '启用',
            'zh-Hant': '啟用',
            'ja': '有効化',
            'fi': 'Ota vaihtoehto käyttöön',
            'tr': 'Etkinleştirildi',
            'el': 'Ενεργοποιημένο',
            'ru': 'Включено',
            'uk': 'Увімкнено',
            'bg': 'Активирано',
            'defaultEnabled': false,
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
            'he': 'מופעל',
            'ar': 'تمكين',
            'id': 'Diaktifkan',
            'zh-Hans': '启用',
            'zh-Hant': '啟用',
            'ja': '有効化',
            'fi': 'Ota vaihtoehto käyttöön',
            'tr': 'Etkinleştirildi',
            'el': 'Ενεργοποιημένο',
            'ru': 'Включено',
            'uk': 'Увімкнено',
            'bg': 'Активирано',
            'defaultEnabled': false,
        },

        MP_BLOCKED_ENABLED: {
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
            'he': 'מופעל',
            'ar': 'تمكين',
            'id': 'Diaktifkan',
            'zh-Hans': '启用',
            'zh-Hant': '啟用',
            'ja': '有効化',
            'fi': 'Ota vaihtoehto käyttöön',
            'tr': 'Etkinleştirildi',
            'el': 'Ενεργοποιημένο',
            'ru': 'Включено',
            'uk': 'Увімкнено',
            'bg': 'Активирано',
            'defaultEnabled': false,
        },

        PP_BLOCKED_ENABLED: {
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
            'he': 'מופעל',
            'ar': 'تمكين',
            'id': 'Diaktifkan',
            'zh-Hans': '启用',
            'zh-Hant': '啟用',
            'ja': '有効化',
            'fi': 'Ota vaihtoehto käyttöön',
            'tr': 'Etkinleştirildi',
            'el': 'Ενεργοποιημένο',
            'ru': 'Включено',
            'uk': 'Увімкнено',
            'bg': 'Активирано',
            'defaultEnabled': false,
        },

        // - label for Verbosity
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
            'he': 'ורבוסיטי',
            'ar': 'الإسهاب',
            'id': 'Verbositas',
            'zh-Hans': '详细程度',
            'zh-Hant': '詳細程度',
            'ja': '詳細度',
            'fi': 'Monisanaisuus',
            'tr': 'Ayrıntı',
            'el': 'Πολυλογία',
            'ru': 'Многословие',
            'uk': 'Багатослівність',
            'bg': 'Многословие',
            'defaultValue': '1',
        },

        // - label for display a caption if a post is hidden:
        DLG_VERBOSITY_CAPTION: {
            'en': 'Show a label if a post is hidden',
            'pt': 'Mostrar um rótulo se uma postagem estiver oculta',
            'de': 'Ein Label anzeigen, wenn ein Beitrag ausgeblendet ist',
            'fr': 'Afficher un libellé si une publication est masquée',
            'es': 'Mostrar una etiqueta si una publicación está oculta',
            'cs': 'Zobrazit popisek, pokud je příspěvek skrytý',
            'vi': 'Hiển thị một nhãn nếu một bài đăng bị ẩn',
            'it': 'Mostrare un\'etichetta se un post è nascosto',
            'lv': 'Rādīt etiķeti, ja raksts ir paslēpts',
            'pl': 'Pokaż etykietę, jeśli artykuł jest ukryty',
            'nl': 'Toon een label als een artikel verborgen is',
            'he': 'הצג תוית אם מאמר מוסתר',
            'ar': 'إظهار إشعار بعرض المقالات المخفية',
            'id': 'Tampilkan label jika kiriman disembunyikan',
            'zh-Hans': '如果文章被隐藏，则显示标签',
            'zh-Hant': '如果文章被隱藏，則顯示標籤',
            'ja': '投稿が非表示の場合にラベルを表示する',
            'fi': 'Näytä merkki, jos artikkeli on piilotettu',
            'tr': 'Bir gönderi gizlenmişse bir etiket göster',
            'el': 'Εμφάνιση ετικέτας αν μια δημοσίευση είναι κρυμμένη',
            'ru': 'Показать ярлык, если запись скрыта',
            'uk': 'Відображати мітку, якщо публікація прихована',
            'bg': 'Показване на етикет, ако публикацията е скрита',
        },

        // - post hidden caption
        // -- items 2 & 3 used in the hidden caption
        // -- items 1, 2 & 4 used in the dialog-box.
        VERBOSITY_MESSAGE: {
            'en': ['no label', 'Post hidden. Rule: ', ' posts hidden', '7 posts hidden ~ (Groups Feed only)'],
            'pt': ['sem rótulo', 'Postagem oculta. Regra: ', ' postagens ocultas', '7 postagens ocultas ~ (apenas no Feed de Grupos)'],
            'de': ['kein Label', 'Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt', '7 Beiträge versteckt ~ (nur Gruppen-Feed)'],
            'fr': ['pas de libellé', 'Poste caché. Règle: ', ' posts cachés', '7 posts cachés ~ (uniquement dans le flux de groupes)'],
            'es': ['sin etiqueta', 'Publicación oculta. Regla: ', ' publicaciones ocultas', '7 publicaciones ocultas ~ (solo en el Feed de Grupos)'],
            'cs': ['žádný popisek', 'Příspěvek byl skryt. Pravidlo: ', ' příspěvků skrytých', '7 příspěvků skrytých ~ (pouze ve skupinovém zpravodaji)'],
            'vi': ['không có nhãn', 'Bài bị ẩn. Quy tắc: ', ' bài viết ẩn', '7 bài viết ẩn ~ (chỉ áp dụng cho Bảng tin Nhóm)'],
            'it': ['nessuna etichetta', 'Post nascosto. Regola: ', ' post nascosti', '7 post nascosti ~ (solo nel Feed di Gruppi)'],
            'lv': ['nav nekāda ziņojuma', 'Ziņa ir paslēpta. Noteikums: ', ' ziņas ir paslēptas', '7 ziņas paslēptas ~ (tikai Grupu plūsmē)'],
            'pl': ['brak etykiety', 'Ukryto 1 post. Reguła: ', ' posty ukryte', '7 posty ukryte ~ (tylko w Kanałach Grup)'],
            'nl': ['geen label', 'Post verborgen. Regel: ', ' posts verborgen', '7 posts verborgen ~ (alleen in Groepen Feed)'],
            'he': ['אין תווית', 'פוסט אחד מוסתר. כלל: ', ' פוסטים מוסתרים', '7 פוסטים מוסתרים ~ (רק בסדר חברים)'],
            'ar': ['لا تسمية', 'مشاركة واحدة مخفية. حكم: ', ' المشاركات المخفية', '7 مشاركات مخفية ~ (فقط في تغذية المجموعات)'],
            'id': ['tanpa label', 'Pos disembunyikan. Aturan: ', ' postingan disembunyikan', '7 postingan disembunyikan ~ (hanya di Feed Grup)'],
            'zh-Hans': ['没有标签', '帖子已隐藏。规则：', ' 个帖子已隐藏', '7个帖子已隐藏 ~ (仅适用于群组动态)'],
            'zh-Hant': ['沒有標籤', '帖子已隱藏。規則：', ' 個帖子已隱藏', '7個帖子已隱藏 ~ (僅適用於群組動態)'],
            'ja': ['ラベルなし', '投稿を非表示にしました。 ルール： ', ' 件の投稿が非表示', '7件の投稿が非表示 ~ (グループフィードのみ)'],
            'fi': ['ei tunnistetta', 'Viesti piilotettu. Sääntö: ', ' viestiä piilotettu', '7 viestiä piilotettu ~ (vain Ryhmien syötteessä)'],
            'tr': ['etiket yok', 'Gönderi gizlendi. Kural: ', ' gönderi gizlendi', '7 gönderi gizlendi ~ (yalnızca Grup Beslemesi)'],
            'el': ['χωρίς ετικέτα', 'Δημοσίευση κρυμμένη. Κανόνας: ', ' δημοσιεύσεις κρυμμένες', '7 δημοσιεύσεις κρυμμένες ~ (μόνο στην τροφοδοσία των ομάδων)'],
            'ru': ['нет ярлыка', 'Пост скрыт. Правило: ', ' постов скрыто', '7 постов скрыто ~ (только в Ленте Групп)'],
            'uk': ['жодної мітки', 'Допис прихований. Правило: ', ' дописи приховано', '7 дописи приховано ~ (лише в стрічці Груп)'],
            'bg': ['няма етикет', 'Скрита публикация. Правило: ', '  скрити публикации', '7 скрити публикации ~ (само за Груповия поток)'],
        },

        // - colour of the verbosity message:
        VERBOSITY_MESSAGE_COLOUR: {
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
            'he': 'צבע טקסט',
            'ar': 'لون النص',
            'id': 'Warna teks',
            'zh-Hans': '文字颜色',
            'zh-Hant': '文字顏色',
            'ja': 'テキストの色',
            'fi': 'Tekstin väri',
            'tr': 'Metin rengi',
            'el': 'Χρώμα κειμένου',
            'ru': 'Цвет текста',
            'uk': 'Колір тексту',
            'bg': 'Цвят на текста',
        },

        // - background colour of the verbosity message:
        VERBOSITY_MESSAGE_BG_COLOUR: {
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
            'he': 'צבע הרקע',
            'ar': 'لون الخلفية',
            'id': 'Warna latar belakang',
            'zh-Hans': '背景颜色',
            'zh-Hant': '背景顏色',
            'ja': '背景色',
            'fi': 'Taustaväri',
            'tr': 'Arka plan rengi',
            'el': 'Χρώμα φόντου',
            'ru': 'Цвет фона',
            'uk': 'Колір фону',
            'bg': 'Цвят на фона',
            'defaultValue': 'LightGrey',
        },

        // - debugging - show "hidden" posts
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
            'he': 'הדגש פוסטים "מוסתרים"',
            'ar': 'تسليط الضوء على المشاركات "المخفية"',
            'id': 'Sorot postingan "tersembunyi"',
            'zh-Hans': '突出显示“隐藏”的帖子',
            'zh-Hant': '強調顯示「隱藏」的貼文',
            'ja': '「非表示」の投稿を強調表示する',
            'fi': 'Korosta "piilotetut" postaus',
            'tr': '"Gizli" gönderileri vurgulayın',
            'el': 'Επισήμανση "κρυφών αναρτήσεων"',
            'ru': 'Выделить «скрытые» посты',
            'uk': '«Виділяти «приховані» дописи»',
            'bg': 'Открояване на скритите публикации',
            'defaultValue': false,
        },

        // - customisation of cmf's dialog box:
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
            'he': 'התאמות אישיות',
            'ar': 'التخصيصات',
            'id': 'Kustomisasi',
            'zh-Hans': '定制化',
            'zh-Hant': '客製化',
            'ja': 'カスタマイズ',
            'fi': 'Räätälöinnit',
            'tr': 'özelleştirmeler',
            'el': 'Προσαρμογές',
            'ru': 'Настройки',
            'uk': 'Налаштування',
            'bg': 'Настройки',
        },

        // - label for location of button:
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
            'he': 'תנקה את הזנות שלי מיקום הכפתור',
            'ar': 'موقع الزر "تنظيف خلاصاتي"',
            'id': 'Lokasi tombol Bersihkan umpan saya',
            'zh-Hans': '“清理我的提要”按钮位置',
            'zh-Hant': '「清理我的動態消息」按鈕的位置',
            'ja': '「フィードをクリーンアップ」ボタンの配置',
            'fi': 'Puhdista syötteeni -painikkeen sijainti',
            'tr': '"Feed\'lerimi temizle" için düğmenin konumu',
            'el': 'Τοποθεσία του κουμπιού "Καθαρισμός των ροών μου"',
            'ru': 'Расположение кнопки «Очистить мои новостные ленты»',
            'uk': 'Розташування кнопки «Очистити мої стрічки»',
            'bg': 'Местоположение на бутона "Почисти моите емисии"',
        },

        // - location of button:
        CMF_BTN_OPTION: {
            'en': ['bottom left', 'top right', 'disabled (use "Settings" in User Script Commands menu")'],
            'pt': ['inferior esquerdo', 'superior direito', 'desativado (use "Configurações" no menu Comandos de script do usuário)'],
            'de': ['unten links', 'oben rechts', 'deaktiviert (verwenden Sie "Einstellungen" im Menü "Benutzerskriptbefehle")'],
            'fr': ['en bas à gauche', 'en haut à droite', 'désactivé (utilisez "Paramètres" dans le menu Commandes de script utilisateur)'],
            'es': ['abajo a la izquierda', 'arriba a la derecha', 'deshabilitado (use "Configuración" en el menú Comandos de script de usuario)'],
            'cs': ['vlevo dole', 'vpravo nahoře', 'zakázáno (použijte "Nastavení" v nabídce Příkazy uživatelského skriptu)'],
            'vi': ['dưới cùng bên trái', 'trên cùng bên phải', 'bị vô hiệu hóa (sử dụng "Cài đặt" trong menu Lệnh của Tập lệnh Người dùng)'],
            'it': ['in basso a sinistra', 'in alto a destra', 'disabilitato (usa "Impostazioni" nel menu Comandi script utente)'],
            'lv': ['apakšējā kreisajā stūrī', 'augšējā labajā stūrī', 'atspējota (lietotāja skripta komandu izvēlnē izmantojiet sadaļu Iestatījumi)'],
            'pl': ['lewy dolny róg', 'prawy górny róg', 'wyłączone (użyj "Ustawienia" w menu Polecenia skryptu użytkownika)'],
            'nl': ['linksonder', 'rechtsboven', 'uitgeschakeld (gebruik "Instellingen" in het menu Gebruikersscriptopdrachten)'],
            'he': ['שמאל למטה', 'ימינה למעלה', 'מושבת (השתמש ב"הגדרות" בתפריט פקודות סקריפט משתמש)'],
            'ar': ['أسفل اليسار', 'أعلى اليمين', 'معطل (استخدم "الإعدادات" في قائمة أوامر البرنامج النصي للمستخدم)'],
            'id': ['kiri bawah', 'kanan atas', 'dinonaktifkan (gunakan "Pengaturan" di menu Perintah Skrip Pengguna)'],
            'zh-Hans': ['左下方', '右上', '禁用（使用用户脚本命令菜单中的“设置”）'],
            'zh-Hant': ['左下方', '右上方', '禁用（在用户脚本命令菜单中使用“设置”）'],
            'ja': ['下左', '上右', '無効 ([ユーザー スクリプト コマンド] メニューの [設定] を使用)'],
            'fi': ['alhaalla vasemmalla', 'ylhäällä oikealle', 'pois käytöstä (käytä "Asetukset" User Script Commands -valikossa)'],
            'tr': ['sol alt', 'sağ üst', 'devre dışı (Kullanıcı Komut Dosyası Komutları menüsünde "Ayarlar"ı kullanın)'],
            'el': ['κάτω αριστερά', 'πάνω δεξιά', 'απενεργοποιημένο (χρησιμοποιήστε "Ρυθμίσεις" στο μενού "Εντολές σεναρίου χρήστη")'],
            'ru': ['внизу слева', 'вверху справа', 'отключено (используйте «Настройки» в меню «Пользовательские команды скрипта»)'],
            'uk': ['внизу ліворуч', 'вгорі праворуч', 'вимкнено (використовуйте «Параметри» в меню команд сценарію користувача»)'],
            'bg': ['долу вляво', 'горе вдясно', 'деактивирано (използвайте "Настройки" в менюто с команди за потребителски сценарии)'],
            'defaultValue': '0',
        },

        // - label for cmf's ui language:
        CMF_DIALOG_LANGUAGE_LABEL: {
            'en': 'Clean my feeds\' dialog-box language',
            'pt': 'Limpar o idioma da caixa de diálogo dos meus feeds',
            'de': 'Sprache meines Feeds-Dialogfelds säubern',
            'fr': 'Nettoyer la langue de ma boîte de dialogue de flux',
            'es': 'Limpiar el idioma de mi cuadro de diálogo de feeds',
            'cs': 'Vyčistit jazyk mého dialogového okna s feedy',
            'vi': 'Làm sạch ngôn ngữ của hộp thoại của tôi',
            'it': 'Pulisci la lingua della mia casella di dialogo feed',
            'lv': 'Tīrīt manu barošanas kastē dialoga valodu',
            'pl': 'Wyczyść język mojego okna dialogowego z wiadomościami',
            'nl': 'Maak mijn feeds dialoogvensterstaal schoon',
            'he': 'נקה את שפת תיקיית הדיאלוג שלי',
            'ar': 'نظف لغة صندوق حوار تغذيتي',
            'id': 'Bersihkan bahasa kotak dialog umpan saya',
            'zh-Hans': '清理我的动态框语言',
            'zh-Hant': '清理我的動態框語言',
            'ja': 'フィードのダイアログボックス言語をクリーンアップ',
            'fi': 'Puhdista syötteideni keskusteluruudun kieli',
            'tr': 'Beslemelerimin iletişim kutusu dilini temizle',
            'el': 'Καθαρίστε τη γλώσσα του παραθύρου διαλόγου με τα τροφοδοτούμενα μου',
            'ru': 'Очистить язык моего диалогового окна с лентами',
            'uk': 'Очистити мову мого вікна діалогу',
            'bg': 'Почистете езика на моето диалогово поле за новини',
        },

        CMF_DIALOG_LANGUAGE: {
            'en': 'English',
            'pt': 'Português',
            'de': 'Deutsch',
            'fr': 'Français',
            'es': 'Español',
            'cs': 'Čeština',
            'vi': 'Tiếng Việt',
            'it': 'Italiano',
            'lv': 'Latviešu',
            'pl': 'Polski',
            'nl': 'Nederlands',
            'he': 'עִבְרִית',
            'ar': 'العربية',
            'id': 'Bahasa Indonesia',
            'zh-Hans': '中文（简体）',
            'zh-Hant': '中文（繁體）',
            'ja': '日本語',
            'fi': 'Suomi',
            'tr': 'Türkçe',
            'el': 'Ελληνικά',
            'ru': 'Русский',
            'uk': 'Українська',
            'bg': 'Български',
        },

        // - script manager's menu item "Settings"
        GM_MENU_SETTINGS: {
            'en': 'Settings',
            'pt': 'Configurações',
            'de': 'Einstellungen',
            'fr': 'Paramètres',
            'es': 'Configuración',
            'cs': 'Nastavení',
            'vi': 'Cài đặt',
            'it': 'Impostazioni',
            'lv': 'Iestatījumi',
            'pl': 'Ustawienia',
            'nl': 'Instellingen',
            'he': 'ההגדרות',
            'ar': 'الإعدادات',
            'id': 'Pengaturan',
            'zh-Hans': '设置',
            'zh-Hant': '設置',
            'ja': '設定',
            'fi': 'Asetukset',
            'tr': 'Ayarlar',
            'el': 'Ρυθμίσεις',
            'ru': 'Настройки',
            'uk': 'Параметри',
            'bg': 'Настройки',
        },

        // - label for location of dialog:
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
            'he': 'מיקום תיבת הדו-שיח "נקה את ההזנות שלי"',
            'ar': 'موقع مربع الحوار "تنظيف موجز ويباتي"',
            'id': 'Lokasi kotak dialog Bersihkan umpan saya',
            'zh-Hans': '“清理我的提要”对话框位置',
            'zh-Hant': '「清理我的動態消息」對話框的位置',
            'ja': '[フィードの消去] ダイアログ ボックスの配置',
            'fi': 'Puhdista syötteeni -valintaikkunan sijainti',
            'tr': '"Feed\'lerimi temizle" iletişim kutusunun konumu',
            'el': 'Τοποθεσία της διαλόγου "Καθαρισμός των ροών μου"',
            'ru': 'Расположение диалогового окна «Очистить мои ленты»',
            'uk': 'Розташування діалогового вікна «Очистити мої стрічки»',
            'bg': 'Местоположение на диалоговия прозорец "Почисти моите емисии"',
        },

        // - location of dialog:
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
            'ar': ['الجهه اليسرى', 'الجانب الصحيح'],
            'id': ['sisi kiri', 'sisi kanan'],
            'zh-Hans': ['左边', '右边'],
            'zh-Hant': ['左邊', '右邊'],
            'ja': ['左側', '右側'],
            'fi': ['vasen puoli', 'oikea puoli'],
            'tr': ['sol yan', 'sağ yan'],
            'el': ['αριστερή πλευρά', 'δεξιά πλευρά'],
            'ru': ['левая сторона', 'правая сторона'],
            'uk': ['ліва сторона', 'права сторона'],
            'bg': ['лява страна', 'дясна страна'],
            'defaultValue': '0',
        },

        // - dialog's border colour:
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
            'ar': 'لون الحدود',
            'id': 'Warna perbatasan',
            'zh-Hans': '边框颜色',
            'zh-Hant': '邊框顏色',
            'ja': 'ボーダーカラー',
            'fi': 'Reunuksen väri',
            'tr': 'Kenarlık rengi',
            'el': 'Χρώμα περιγράμματος',
            'ru': 'Цвет границы',
            'uk': 'Колір кордону',
            'bg': 'Цвят на рамката',
            'defaultValue': 'OrangeRed',
        },

        // - label for tips:
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
            'ar': 'تلميحات',
            'id': 'Tips',
            'zh-Hans': '提示',
            'zh-Hant': '提示',
            'ja': 'ヒント',
            'fi': 'Vinkkejä',
            'tr': 'Ipuçları',
            'el': 'Συμβουλές',
            'ru': 'Советы',
            'uk': 'Підказки',
            'bg': 'Съвети',
        },

        // - tip's content:
        DLG_TIPS_CONTENT: {
            'en': 'Clearing your browser\'s cache will reset your settings to their default values.\n\nUse the "Export" and "Import" buttons to backup and restore your customised settings.',
            'pt': 'Limpar o cache do navegador redefinirá suas configurações para os valores padrão.\n\nUse os botões "Exportar" e "Importar" para fazer backup e restaurar suas configurações personalizadas.',
            'de': 'Wenn Sie den Cache Ihres Browsers leeren, werden Ihre Einstellungen auf die Standardwerte zurückgesetzt.\n\nVerwenden Sie die Schaltflächen "Exportieren" und "Importieren", um Ihre benutzerdefinierten Einstellungen zu sichern und wiederherzustellen.',
            'fr': 'Vider le cache de votre navigateur réinitialisera vos paramètres à leurs valeurs par défaut.\n\nUtilisez les boutons "Exporter" et "Importer" pour sauvegarder et restaurer vos paramètres personnalisés.',
            'es': 'Limpiar la memoria caché de su navegador restablecerá la configuración a sus valores predeterminados.\n\nUtilice los botones "Exportar" e "Importar" para hacer una copia de seguridad y restaurar su configuración personalizada.',
            'cs': 'Vymazáním mezipaměti prohlížeče obnovíte výchozí hodnoty nastavení.\n\nPomocí tlačítek "Export" a "Import" zálohujte a obnovte svá přizpůsobená nastavení.',
            'vi': 'Xóa bộ nhớ cache của trình duyệt sẽ đặt lại cài đặt của bạn về các giá trị mặc định của chúng.\n\nSử dụng các nút "Xuất" và "Nhập" để sao lưu và khôi phục cài đặt tùy chỉnh của bạn.',
            'it': 'La cancellazione della cache del browser ripristinerà le impostazioni ai valori predefiniti.\n\nUtilizza i pulsanti "Esporta" e "Importa" per eseguire il backup e ripristinare le impostazioni personalizzate.',
            'lv': 'Iztīrot pārlūkprogrammas kešatmiņu, iestatījumi tiks atiestatīti uz noklusējuma vērtībām.\n\nIzmantojiet pogas "Eksportēt" un "Importēt", lai dublētu un atjaunotu pielāgotos iestatījumus.',
            'pl': 'Wyczyszczenie pamięci podręcznej przeglądarki spowoduje zresetowanie ustawień do wartości domyślnych.\n\nUżyj przycisków „Eksportuj” i „Importuj”, aby wykonać kopię zapasową i przywrócić niestandardowe ustawienia.',
            'nl': 'Als u de cache van uw browser wist, worden uw instellingen teruggezet naar hun standaardwaarden.\n\nGebruik de knoppen "Exporteren" en "Importeren" om een back-up te maken van uw aangepaste instellingen en deze te herstellen.',
            'he': 'מחיקת ההיסטורה בדפדפן תנקה את ההגדרות ותחזיר אותם לברירת המחדל.\n\nהשתמש ב"ייצא" ו"ייבא" כדי לגבות ולהחזיר את ההגדרות שלך',
            'ar': 'سيؤدي مسح ذاكرة التخزين المؤقت للمتصفح إلى إعادة تعيين الإعدادات إلى قيمها الافتراضية.\n\nاستخدم الزرين "تصدير" و "استيراد" للنسخ الاحتياطي واستعادة الإعدادات المخصصة.',
            'id': 'Menghapus cache browser Anda akan mengatur ulang pengaturan Anda ke nilai defaultnya.\n\nGunakan tombol "Ekspor" dan "Impor" untuk mencadangkan dan memulihkan pengaturan khusus Anda.',
            'zh-Hans': '清除浏览器缓存会将您的设置重置为默认值。\n\n使用“导出”和“导入”按钮来备份和恢复您的自定义设置。',
            'zh-Hant': '清除瀏覽器快取會將您的設定重置為預設值。\n\n使用「匯出」和「匯入」按鈕來備份和回復您的自定義設定。',
            'ja': 'ブラウザのキャッシュをクリアすると、設定がデフォルト値にリセットされます。\n\n[エクスポート] および [インポート] ボタンを使用して、カスタマイズした設定をバックアップおよび復元します。',
            'fi': 'Selaimen välimuistin tyhjentäminen palauttaa asetuksesi oletusarvoihinsa.\n\nKäytä "Vie"- ja "Tuo"-painikkeita varmuuskopioidaksesi ja palauttaaksesi mukautetut asetukset.',
            'tr': 'Tarayıcınızın önbelleğini temizlemek, ayarlarınızı varsayılan değerlerine sıfırlayacaktır. \n\nÖzelleştirilmiş ayarlarınızı yedeklemek ve geri yüklemek için "Dışa Aktar" ve "İçe Aktar" düğmelerini kullanın.',
            'el': 'Η εκκαθάριση της μνήμης cache του προγράμματος περιήγησης θα επαναφέρει τις ρυθμίσεις σας στις προεπιλεγμένες τιμές τους.\n\nΧρησιμοποιήστε τα κουμπιά "Εξαγωγή" και "Εισαγωγή" για να δημιουργήσετε αντίγραφο ασφαλείας και να επαναφέρετε τις εξατομικευμένες ρυθμίσεις σας.',
            'ru': 'Очистка кэша браузера сбросит ваши настройки на значения по умолчанию.\n\nИспользуйте кнопки «Экспорт» и «Импорт», чтобы создать резервную копию и восстановить ваши настройки.',
            'uk': 'Очищення кешу браузера призведе до скидання налаштувань до значень за замовчуванням.\n\nВикористовуйте кнопки «Експорт» та «Імпорт», щоб створити резервну копію та відновити налаштовані налаштування.',
            'bg': 'Изчистването на кеша на браузъра ще нулира настройките ви до техните стандартни стойности.\n\nИзползвайте бутоните "Експорт" и "Импорт", за да запазите и възстановите персонализираните си настройки.'
        },

        DLG_BUTTONS: {
            'en': ['Save', 'Close', 'Export', 'Import', 'Reset'],
            'pt': ['Salvar', 'Fechar', 'Exportar', 'Importar', 'Redefinir'],
            'de': ['Speichern', 'Schließen', 'Exportieren', 'Importieren', 'Zurücksetzen'],
            'fr': ['Sauvegarder', 'Fermer', 'Exporter', 'Importer', 'Réinitialiser'],
            'es': ['Guardar', 'Cerrar', 'Exportar', 'Importar', 'Reajustar'],
            'cs': ['Uložit', 'Zavřít', 'Export', 'Import', 'Resetovat'],
            'vi': ['Lưu', 'Đóng', 'Xuất', 'Nhập', 'Đặt lại'],
            'it': ['Salva', 'Chiudi', 'Esportare', 'Importare', 'Ripristina'],
            'lv': ['Saglabājiet', 'Aizveriet', 'Eksportēt', 'Importēt', 'Atiestatīt'],
            'pl': ['Zapisz', 'Zamknij', 'Eksport', 'Import', 'Przeskładać'],
            'nl': ['Opslaan', 'Sluiten', 'Exporteren', 'Importeren', 'Reset'],
            'he': ['שמור', 'סגור', 'ייצא', 'ייבא', 'איפוס'],
            'ar': ['حفظ', 'قريب', 'يصدّر', 'يستورد', 'إعادة تعيين'],
            'id': ['Simpan', 'Tutup', 'Ekspor', 'Impor', 'Reset'],
            'zh-Hans': ['节省', '关', '出口', '进口', '重置'],
            'zh-Hant': ['儲存', '關閉', '匯出', '匯入', '重設'],
            'ja': ['セーブ', 'クローズ', '輸出する', '輸入', 'リセット'],
            'fi': ['Tallentaa', 'Sulkea', 'Vienti', 'Tuonti', 'Nollaa'],
            'tr': ['Kaydetmek', 'Kapat', 'İhracat', 'İçe aktarmak', 'Sıfırla'],
            'el': ['Αποθήκευση', 'Κλείσιμο', 'Εξαγωγή', 'Εισαγωγή', 'Επαναφορά'],
            'ru': ['Сохранить', 'Закрыть', 'Экспорт', 'Импорт', 'Сброс'],
            'uk': ['Зберегти', 'Закрити', 'Експорт', 'Імпорт', 'Скинути'],
            'bg': ['Запази', 'Затвори', 'Експорт', 'Импорт', 'Нулиране'],
        },

        DLG_FB_COLOUR_HINT: {
            'en': 'Leave blank to use FB\'s colour scheme',
            'pt': 'Deixe em branco para usar o esquema de cores do FB',
            'de': 'Leer lassen, um das Farbschema von FB zu verwenden',
            'fr': 'Laissez vide pour utiliser le jeu de couleurs de FB',
            'es': 'Dejar en blanco para usar el esquema de color de FB',
            'cs': 'Chcete-li použít barevné schéma FB, nechte prázdné',
            'vi': 'Để trống để sử dụng bảng màu của FB',
            'it': 'Lascia vuoto per usare la combinazione di colori di FB',
            'lv': 'Atstājiet tukšu, lai izmantotu FB krāsu shēmu',
            'pl': 'Pozostaw puste, aby użyć schematu kolorów FB',
            'nl': 'Laat leeg om het kleurenschema van FB te gebruiken',
            'he': 'השאר ריק כדי להשתמש בערכת הצבעים של FB',
            'ar': 'اتركه فارغًا لاستخدام نظام ألوان FB',
            'id': 'Biarkan kosong untuk menggunakan skema warna FB',
            'zh-Hans': '留空以使用 FB 的配色方案',
            'zh-Hant': '留空以使用 FB 的配色方案',
            'ja': '空白のままにすると、FB の配色が使用されます',
            'fi': 'Jätä tyhjäksi käyttääksesi FB:n värimaailmaa',
            'tr': 'FB\'un renk düzenini kullanmak için boş bırakın',
            'el': 'Αφήστε κενό για να χρησιμοποιήσετε το χρωματικό σχήμα του FB',
            'ru': 'Оставьте пустым, чтобы использовать цветовую схему FB',
            'uk': 'Залиште порожнім, щоб використовувати колірну схему FB',
            'bg': 'Оставете празно, за да използвате цветовата схема на FB',
        }
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
        // - script's logo
        logoHTML: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><g id="Layer" fill="currentColor"><path id="Layer" fill-rule="evenodd" class="s0" d="m51 3.2c0.7 1.1 0.7 1-1.6 9.2-1.4 5-2.1 7.4-2.3 7.6-0.1 0.1-0.3 0.2-0.6 0.2-0.4 0-0.9-0.4-0.9-0.7 0-0.1 1-3.5 2-7.4 1.2-4 2-7.3 2-7.5 0-0.4-0.6-1-0.9-1-0.2 0-0.5 0.2-0.7 0.3-0.3 0.3-0.7 1.8-5.5 19.2l-5.3 18.9 0.9 0.5c0.5 0.3 0.9 0.5 0.9 0.5 0 0 1.3-4.4 2.8-9.8 1.5-5.3 2.8-10 2.8-10.3 0.2-0.5 0.3-0.7 0.6-0.9 0.3-0.1 0.4-0.1 0.8 0 0.2 0.2 0.4 0.3 0.4 0.5 0.1 0.2-0.4 2.2-1.5 6.1-0.9 3.2-1.6 5.8-1.6 5.9 0 0 0.5 0.1 1.3 0.1 1.9 0 2.7 0.4 3.2 1.5 0.3 0.6 0.3 2.7 0 3.4-0.3 0.9-1.2 1.4-2 1.4-0.3 0-0.5 0.1-0.5 0.1 0 0.2-2.3 20.2-2.3 20.4-0.2 0.8 0.7 0.7-14.1 0.7-15.3 0-14.3 0.1-15.3-1-0.8-0.8-1.1-1.5-1-2.9 0.2-3.6 2.7-6.7 6.3-7.8 0.4-0.2 0.9-0.3 1-0.3 0.6 0 0.6 0.1 0.1-4.5-0.3-2.4-0.5-4.4-0.5-4.5-0.1-0.1-0.3-0.1-0.7-0.2-0.6 0-1.1-0.3-1.6-1-0.3-0.4-0.3-0.5-0.4-1.8 0-1.7 0.1-2.1 0.6-2.7 0.7-0.6 1-0.7 2.5-0.8h1.3v-2.9c0-3.1 0-3.4 0.6-3.6 0.2-0.1 2.4-0.1 7.1-0.1 6.5 0.1 6.9 0.1 7.1 0.3 0.2 0.2 0.2 0.3 0.2 3.3v3h0.6l0.6-0.1 4.3-15.3c2.4-8.5 4.4-15.6 4.5-15.9 0.4-0.6 0.9-1 1.5-1.3 1.2-0.4 2.6 0.1 3.3 1.2zm-26.6 26.6h-0.7c-0.3 0-0.6 0-0.7 0 0 0.1-0.1 1.2-0.1 2.5v2.3h1.5zm3.4 0h-0.7c-0.5 0-0.9 0-0.9 0.1 0 0-0.1 1.1-0.1 2.4v2.3h1.8v-2.4zm3.4 0h-1.6v4.8h1.6zm3.2 0h-1.3v4.8h1.3zm-6.4 6.6c-7.9 0-9 0-9.2 0.2-0.3 0.2-0.3 0.3-0.3 1.3 0 0.7 0.1 1.1 0.2 1.2 0.1 0.1 2.3 0.1 7.3 0.1 6.9 0.1 7.2 0.1 7.5 0.3 0.3 0.3 0.3 1 0 1.3-0.2 0.2-0.8 0.2-6.3 0.2h-6l0.1 0.5c0 0.3 0.2 2.3 0.5 4.5l0.4 4h0.4c0.6 0 1.5-0.3 2-0.7 0.3-0.3 0.7-0.8 0.9-1.3 0.6-1.1 1.3-2 2.1-2.7 1.1-0.9 2.8-1.5 4-1.5h0.6l0.7-1.1c0.6-1 0.8-1.2 1.3-1.5 0.4-0.2 0.6-0.2 0.9-0.2 0.4 0.1 0.5 0.1 0.5-0.1 0.1-0.1 0.3-1.1 0.6-2.1 0.3-1.1 0.6-2.1 0.6-2.2 0.1-0.2-0.4-0.2-8.8-0.2zm16.2 0h-1.5l-0.4 1.3c-0.2 0.8-0.4 1.4-0.4 1.5 0 0 0.9 0 2 0 2.3 0 2.3 0.1 2.3-1.4 0-0.9-0.1-1-0.3-1.2-0.2-0.2-0.6-0.2-1.7-0.2zm-2.8 4.7c0 0.1-0.2 0.8-0.5 1.6-0.2 1-0.3 1.4-0.2 1.5 0 0 0.3 0.2 0.6 0.4 0.4 0.4 0.4 0.5 0.5 1.2 0 0.6 0 0.7-0.8 2-0.7 1.1-0.8 1.3-1.3 1.6l-0.5 0.2v1.8c0 1.3-0.1 2-0.2 2.5-0.1 0.4-0.2 0.8-0.2 0.8 0 0 0.7 0.1 1.5 0.1 1.2 0 1.6-0.1 1.6-0.2 0-0.1 0.4-3.1 0.8-6.8 0.4-3.6 0.7-6.7 0.7-6.7-0.1-0.2-1.9-0.1-2 0zm-6.3 1.8c-0.2-0.1-0.3 0-0.9 1-0.2 0.4-0.4 0.8-0.3 0.8 0 0.1 1.1 0.7 2.3 1.5 1.3 0.7 2.4 1.4 2.5 1.5 0.3 0.1 0.3 0.1 0.8-0.8 0.3-0.6 0.6-1 0.5-1 0 0-1.1-0.7-2.4-1.5-1.3-0.8-2.4-1.4-2.5-1.5zm-4.5 2.8c-1.6 0.5-2.7 1.5-3.5 3.1-0.6 1.2-1.3 2-2.4 2.5-0.9 0.4-0.9 0.4-2.9 0.5-2.8 0.1-3.9 0.6-5.4 2.1-0.8 0.8-1 1.1-1.4 1.9-1 2.2-0.9 4 0.2 4.4 0.7 0.3 0.8 0.3 1-0.5 0.8-2.4 2.7-4.5 5.1-5.5 1.1-0.4 1.6-0.5 3.2-0.6 2-0.2 2.8-0.7 3.4-2.2 0.3-0.5 0.6-1.2 0.8-1.6 0.8-1.3 2.4-2.5 3.8-2.9 0.4-0.1 0.8-0.2 0.8-0.2q0.2-0.1-0.3-0.4c-0.3-0.2-0.6-0.4-0.6-0.5-0.1-0.3-1.1-0.3-1.8-0.1zm3.2 2.7c-0.9 0.2-2 0.8-2.8 1.5-0.7 0.6-0.8 0.9-1.6 2.6-0.7 1.5-2.2 2.5-3.9 2.7-3.4 0.4-4.3 0.8-5.8 2.2-0.7 0.8-1 1.2-1.4 1.9l-0.5 1 0.9 0.1c0.9 0 0.9 0 1.2-0.4q2.7-3.2 7.3-3.2c2.2 0 2.9-0.5 3.9-2.3 0.3-0.5 0.7-1.2 0.9-1.5 1-1.2 3-2.3 4.6-2.4l0.8-0.1-0.1-0.5c-0.1-0.8-0.3-1.2-0.9-1.4-0.7-0.2-1.9-0.3-2.6-0.2zm3.6 3.9h-0.4c-0.5 0-1.6 0.3-2.3 0.7-0.7 0.5-1.6 1.5-2.2 2.6-1.1 2.1-2.5 2.9-5.2 2.9-0.6 0-1.6 0.1-2 0.2-1 0.2-2.3 0.8-2.9 1.3l-0.4 0.4h4.1c4.6-0.1 4.7-0.1 6.5-1 0.9-0.5 1.3-0.7 2.2-1.6 1.4-1.4 2.2-3 2.5-4.9zm4.3 4.2h-1.9-1.8l-0.5 0.8c-0.6 0.9-1.5 1.9-2.4 2.6l-0.6 0.5h3.4c2.6 0 3.4 0 3.4-0.1 0-0.1 0.1-1 0.2-2z"/></g></svg>',
        // - new window icon
        iconNewWindow: '<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Open post in a new window</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
        iconNewWindowClass: 'cmf-link-new',
        // - for reels - chromium browsers needs more space for video controls...
        isChromium: false,
    };

    // -- which language is the FB page in?
    function setLanguageAndOptions() {
        // - run this function when HEAD is available.
        // - language (default to EN)
        // - also run getUserOptions().
        if (document.head) {
            // let lang = document.head.parentNode.lang || 'en';
            // VARS.language = (KeyWords.LANGUAGES.indexOf(lang) >= 0) ? lang : 'en';

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
        // addToSS('body > div[style*="position: absolute"], ' +
        //     'body > div[style*="position:absolute"]',
        //     'top: -1000000px !important;'
        // );

        // -- hide the post
        // -- not using hidden post caption facility
        addToSS(
            `div[${VARS.hideAtt}]`,
            'max-height: 0; overflow: hidden; margin-bottom:0 !important;'
        );

        // -- reveal the post
        // -- first one, inside a <details> element (showAtt's attribute not required)
        // -- second one, not inside a <details> element
        // -- not using hidden post caption facility
        addToSS(
            `details[${postAtt}][open] > div, ` +
            `details[${postAtt}][open] > span > div, ` + // -- usually aside components
            `div[${VARS.showAtt}]:not([id="fbcmf"])`,
            'max-height: 10000px; overflow: auto; margin-bottom:1rem !important; ' +
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
            `background-color:${(VARS.Options.VERBOSITY_MESSSAGE_BG_COLOUR === '') ? KeyWords.VERBOSITY_MESSAGE_BG_COLOUR.defaultValue : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR};`
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
            `background-color:${(VARS.Options.VERBOSITY_MESSSAGE_BG_COLOUR === '') ? KeyWords.VERBOSITY_MESSAGE_BG_COLOUR.defaultValue : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR}; `
        );


        // -- # shares
        addToSS(
            `[${VARS.cssHideNumberOfShares}]`,
            'display:none !important;'
        );

        // - dailog box CSS
        // --- dialog box; position + flex
        let bColour = (VARS.Options.CMF_BORDER_COLOUR === '') ? KeyWords.CMF_BORDER_COLOUR.defaultValue : VARS.Options.CMF_BORDER_COLOUR;
        let tColour = 'var(--primary-text)';
        // - left / right done in fn addExtraCSS()
        addToSS(
            '.fb-cmf ',
            'position:fixed; top:0.15rem; bottom:0.15rem; display:flex; flex-direction:column; width: 100%; max-width:30rem; padding:0 1rem; z-index:5;' +
            `border:2px solid ${bColour}; border-radius:1rem; opacity:0; color:${tColour}; visibility:hidden;`
        );
        // - dialog's background color
        addToSS('.__fb-light-mode .fb-cmf', 'background-color:#fefefa;');
        addToSS('.__fb-dark-mode .fb-cmf', 'background-color:var(--web-wash);');
        addToSS('.fb-cmf', 'background-color:floralwhite;'); // -- fall back colour.

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
            'width:1.75rem; height:1.5rem; font-family: monospace;'
        );

        // -- content
        addToSS(
            '.fb-cmf div.content',
            `flex:1; overflow: hidden scroll; border:2px double ${bColour}; border-radius:0.5rem; color: var(--primary-text);`
        );
        addToSS(
            '.fb-cmf fieldset',
            'margin:0.5rem; padding:0.5rem; border-style: solid;'
        );
        addToSS(
            '.fb-cmf fieldset legend',
            'font-size: 0.95rem;' +
            'width: 95%;  padding: 0 0.5rem 0.125rem 0.5rem;' +
            'line-height: 2.5; ' +
            'border-width: 2px; border-style: solid; border-radius: 0.5rem 0.5rem 0 0 ;'
        );
        addToSS(
            '.fb-cmf fieldset legend:hover',
            'background-color: LightGrey; cursor: pointer;'
        );
        addToSS(
            '.fb-cmf fieldset.visible,' +
            '.fb-cmf fieldset.visible legend ',
            `border-color: ${bColour};`
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
            'display:inline-block; padding:0.125rem 0; color: var(--primary-text); font-weight: normal;'
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
        let cmfBtnLocation = KeyWords.CMF_BTN_OPTION.defaultValue;
        let cmfDlgLocation = KeyWords.CMF_DIALOG_OPTION.defaultValue;
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

        // - button's location.
        if (cmfBtnLocation === '1') {
            // - top right - has the buttons running across the top of the page (pre May 2022).
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
            styles = '';
        }
        else {
            // - bottom left - has the buttons running down the side of the page (May 2022 ->).
            // - cmfBtnLocation === "0"
            styles = 'position:fixed; bottom:4.25rem; left:1.1rem; display:none;';
        }
        if (styles.length > 0) {
            addToSS(
                '.fb-cmf-toggle',
                styles
            );
            // - btn - basic styling.
            addToSS('.fb-cmf-toggle', 'border-radius:0.3rem;');
            addToSS('.fb-cmf-toggle svg', 'height:32px; width:32px;');
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

        // -- check that all variables exists ... if not, assign them default values..
        // -- Sponsored (always enabled)
        if (!VARS.Options.hasOwnProperty('NF_SPONSORED')) {
            VARS.Options.NF_SPONSORED = KeyWords['SPONSORED'].defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('GF_SPONSORED')) {
            VARS.Options.GF_SPONSORED = KeyWords['SPONSORED'].defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VF_SPONSORED')) {
            VARS.Options.VF_SPONSORED = KeyWords['SPONSORED'].defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('MP_SPONSORED')) {
            VARS.Options.MP_SPONSORED = KeyWords['SPONSORED'].defaultEnabled;
            changed = true;
        }

        // -- which option has been enabled / disabled?
        VARS.hideAnInfoBox = false;
        for (const key in KeyWords) {
            if (key.slice(0, 3) === 'NF_' && key.slice(0, 10) !== 'NF_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'GF_' && key.slice(0, 10) !== 'GF_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'VF_' && key.slice(0, 10) !== 'VF_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'MP_' && key.slice(0, 10) !== 'MP_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
            }
            else if (key.slice(0, 3) === 'PP_' && key.slice(0, 10) !== 'PP_BLOCKED') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
            }
            else if (key.slice(0, 10) === 'OTHER_INFO') {
                if (!VARS.Options.hasOwnProperty(key)) {
                    VARS.Options[key] = KeyWords[key].defaultEnabled;
                    changed = true;
                }
                if (VARS.Options[key]) {
                    VARS.hideAnInfoBox = true;
                }
            }
        }

        // -- all other options.
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_ENABLED')) {
            VARS.Options.NF_BLOCKED_ENABLED = KeyWords.NF_BLOCKED_ENABLED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_FEED')) {
            VARS.Options.NF_BLOCKED_FEED = KeyWords.NF_BLOCKED_FEED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('NF_BLOCKED_TEXT')) {
            VARS.Options.NF_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_ENABLED')) {
            VARS.Options.GF_BLOCKED_ENABLED = KeyWords.GF_BLOCKED_ENABLED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_FEED')) {
            VARS.Options.GF_BLOCKED_FEED = KeyWords.GF_BLOCKED_FEED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('GF_BLOCKED_TEXT')) {
            VARS.Options.GF_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_ENABLED')) {
            VARS.Options.VF_BLOCKED_ENABLED = KeyWords.VF_BLOCKED_ENABLED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_FEED')) {
            VARS.Options.VF_BLOCKED_FEED = KeyWords.VF_BLOCKED_FEED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VF_BLOCKED_TEXT')) {
            VARS.Options.VF_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('MP_BLOCKED_ENABLED')) {
            VARS.Options.MP_BLOCKED_ENABLED = KeyWords.MP_BLOCKED_ENABLED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('MP_BLOCKED_FEED')) {
            VARS.Options.MP_BLOCKED_FEED = KeyWords.MP_BLOCKED_FEED.defaultEnabled;
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
            VARS.Options.PP_BLOCKED_ENABLED = KeyWords.PP_BLOCKED_ENABLED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('PP_BLOCKED_FEED')) {
            VARS.Options.PP_BLOCKED_FEED = KeyWords.PP_BLOCKED_FEED.defaultEnabled;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('PP_BLOCKED_TEXT')) {
            VARS.Options.PP_BLOCKED_TEXT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('VERBOSITY_LEVEL')) {
            VARS.Options.VERBOSITY_LEVEL = KeyWords.DLG_VERBOSITY.defaultValue;
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
            VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR = KeyWords.VERBOSITY_MESSAGE_BG_COLOUR.defaultValue;
            changed = true;
        }
        if (
            (!VARS.Options.hasOwnProperty('VERBOSITY_DEBUG')) ||
            (VARS.Options.VERBOSITY_DEBUG === undefined) ||
            (VARS.Options.VERBOSITY_DEBUG.toString() === '')
        ) {
            VARS.Options.VERBOSITY_DEBUG = KeyWords.VERBOSITY_DEBUG.defaultValue;
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('CMF_BTN_OPTION')) {
            VARS.Options.CMF_BTN_OPTION = KeyWords.CMF_BTN_OPTION.defaultValue;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('CMF_DIALOG_OPTION')) {
            VARS.Options.CMF_DIALOG_OPTION = KeyWords.CMF_DIALOG_OPTION.defaultValue;
            changed = true;
        }
        if (
            (!VARS.Options.hasOwnProperty('CMF_BORDER_COLOUR')) ||
            (VARS.Options.CMF_BORDER_COLOUR.toString() === undefined) ||
            (VARS.Options.CMF_BORDER_COLOUR.toString() === '')
        ) {
            VARS.Options.CMF_BORDER_COLOUR = KeyWords.CMF_BORDER_COLOUR.defaultValue;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('NF_LIKES_MAXIMUM_COUNT')) {
            VARS.Options.NF_LIKES_MAXIMUM_COUNT = '';
            changed = true;
        }

        if (!VARS.Options.hasOwnProperty('CMF_DIALOG_LANGUAGE')) {
            const lang = document.head.parentNode.lang || 'en';
            VARS.language = KeyWords.LANGUAGES.includes(lang) ? lang : 'en';
        }
        else {
            const uiLang = VARS.Options.CMF_DIALOG_LANGUAGE;
            const lang = document.head.parentNode.lang || 'en';
            VARS.language = KeyWords.LANGUAGES.includes(uiLang) ? uiLang : KeyWords.LANGUAGES.includes(lang) ? lang : 'en';
        }
        VARS.Options.CMF_DIALOG_LANGUAGE = VARS.language;

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
                if (Array.isArray(KeyWords[cbName][VARS.language]) === false) {
                    label.appendChild(document.createTextNode(KeyWords[cbName][VARS.language]));
                }
                else {
                    label.appendChild(document.createTextNode(Array.from(KeyWords[cbName][VARS.language]).join(', ')));
                }
            }
            else if (['NF_SPONSORED', 'GF_SPONSORED', 'VF_SPONSORED', 'MP_SPONSORED'].includes(cbName)) {
                label.appendChild(document.createTextNode(KeyWords.SPONSORED[VARS.language]));
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
            for (let i = 0; i < KeyWords[cbName][VARS.language].length; i++) {
                let div = document.createElement('div');
                let cbKeyWord = KeyWords[cbName][VARS.language][i];
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
            label.appendChild(document.createTextNode(KeyWords[cbName][VARS.language] + ': '));
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

            for (const languageCode in KeyWords.CMF_DIALOG_LANGUAGE) {
                // Check if the property is a direct property of the object (not from the prototype chain)
                if (KeyWords.CMF_DIALOG_LANGUAGE.hasOwnProperty(languageCode)) {
                    const languageValue = KeyWords.CMF_DIALOG_LANGUAGE[languageCode];
                    const elOption = document.createElement('option');
                    elOption.value = languageCode;
                    elOption.textContent = languageValue;
                    if (languageCode === VARS.language) {
                        elOption.setAttribute('selected', '');
                    }
                    elSelect.appendChild(elOption);
                }
            }

            return elSelect;
        }

        function createDialog(languageChanged = false) {
            let dlg, hdr, hdr1, hdr2, hdr3, htxt, stxt, btn, cnt, fs, l, s, ta, div, footer;

            const uiLanguage = languageChanged ? (VARS.language = VARS.Options.CMF_DIALOG_LANGUAGE) : VARS.language;

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
                btn.textContent = 'X';
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

            // -- header - title block
            htxt = document.createElement('div');
            htxt.textContent = KeyWords.DLG_TITLE['en'];
            s = document.createElement('small');
            s.className = 'script-version';
            s.appendChild(document.createTextNode(` (${SCRIPT_VERSION})`));
            htxt.appendChild(s);
            hdr2.appendChild(htxt);
            if (uiLanguage !== 'en') {
                stxt = document.createElement('small');
                stxt.textContent = `(${KeyWords.DLG_TITLE[uiLanguage]})`;
                hdr2.appendChild(stxt);
                hdr2.classList.add('fb-cmf-lang-2');
            }
            else {
                hdr2.classList.add('fb-cmf-lang-1');
            }

            // -- News Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_NF[uiLanguage];
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
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[uiLanguage] + ":";
            fs.appendChild(l);

            createMultipeCBs('NF_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('NF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[uiLanguage]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'NF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.NF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- Groups Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_GF[uiLanguage];
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
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[uiLanguage] + ':';
            fs.appendChild(l);

            createMultipeCBs('GF_BLOCKED_FEED', 1).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('GF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[uiLanguage]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'GF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.GF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- MarketPlace option(s)
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_MP[uiLanguage];
            fs.appendChild(l);
            fs.appendChild(createSingleCB('MP_SPONSORED', false)); // -- changed to false (Dec 2023)

            // -- Keywords to block - Marketplace Feed
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[uiLanguage] + ':';
            fs.appendChild(l);

            createMultipeCBs('MP_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });
            // -- 2 x textarea boxes; one for prices and one for description
            fs.appendChild(createSingleCB('MP_BLOCKED_ENABLED'));
            l = document.createElement('strong');
            l.textContent = 'Prices: ';
            fs.appendChild(l);
            fs.appendChild(document.createElement('br'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[uiLanguage]));
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
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[uiLanguage]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'MP_BLOCKED_TEXT_DESCRIPTION';
            ta.textContent = VARS.Options.MP_BLOCKED_TEXT_DESCRIPTION.split(VARS.SEP).join('\n');
            fs.appendChild(ta);

            cnt.appendChild(fs);


            // -- Watch Videos Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VF[uiLanguage];
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
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[uiLanguage] + ':';
            fs.appendChild(l);

            createMultipeCBs('VF_BLOCKED_FEED', 2).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('VF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[uiLanguage]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'VF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.VF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);


            // -- Profile Page feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_PP[uiLanguage];
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
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[uiLanguage] + ':';
            fs.appendChild(l);

            createMultipeCBs('PP_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('PP_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[uiLanguage]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'PP_BLOCKED_TEXT';
            ta.textContent = VARS.Options.PP_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);


            // -- Other items options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_OTHER[uiLanguage];
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
            l.textContent = KeyWords.REELS_TITLE[uiLanguage];
            fs.appendChild(l);
            fs.appendChild(createSingleCB('REELS_CONTROLS'), false);
            fs.appendChild(l);
            fs.appendChild(createSingleCB('REELS_DISABLE_LOOPING'), false);
            cnt.appendChild(fs);

            // -- Verbosity
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VERBOSITY[uiLanguage];
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.DLG_VERBOSITY_CAPTION[uiLanguage]}:`));
            fs.appendChild(s);
            fs.appendChild(createRB('VERBOSITY_LEVEL', '0', `${KeyWords.VERBOSITY_MESSAGE[uiLanguage][0]}`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '1', `${KeyWords.VERBOSITY_MESSAGE[uiLanguage][1]}______`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '2', `${KeyWords.VERBOSITY_MESSAGE[uiLanguage][3]}`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('VERBOSITY_MESSAGE_COLOUR', `${KeyWords.VERBOSITY_MESSAGE_COLOUR[uiLanguage]}:`));
            fs.appendChild(createInput('VERBOSITY_MESSAGE_BG_COLOUR', `${KeyWords.VERBOSITY_MESSAGE_BG_COLOUR[uiLanguage]}:`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createSingleCB('VERBOSITY_DEBUG'));
            cnt.appendChild(fs);

            // -- cmf customisations
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.CMF_CUSTOMISATIONS[uiLanguage];
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.CMF_BTN_LOCATION[uiLanguage]}:`));
            fs.appendChild(s);
            let len = KeyWords.CMF_BTN_OPTION[uiLanguage].length;
            for (let i = 0; i < len; i++) {
                fs.appendChild(createRB('CMF_BTN_OPTION', i.toString(), KeyWords.CMF_BTN_OPTION[uiLanguage][i]));
            }
            fs.appendChild(document.createElement('br'));
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.CMF_DIALOG_LOCATION[uiLanguage]}:`));
            fs.appendChild(s);
            fs.appendChild(createRB('CMF_DIALOG_OPTION', '0', KeyWords.CMF_DIALOG_OPTION[uiLanguage][0]));
            fs.appendChild(createRB('CMF_DIALOG_OPTION', '1', KeyWords.CMF_DIALOG_OPTION[uiLanguage][1]));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('CMF_BORDER_COLOUR', `${KeyWords.CMF_BORDER_COLOUR[uiLanguage]}:`));

            // - ui language
            fs.appendChild(document.createElement('br'));
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.CMF_DIALOG_LANGUAGE_LABEL[uiLanguage]}:`));
            fs.appendChild(s);
            fs.appendChild(document.createElement('br'));
            fs.appendChild(getLanguagesComponent());
            cnt.appendChild(fs);

            // -- tips
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_TIPS[uiLanguage];
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(KeyWords.DLG_TIPS_CONTENT[uiLanguage]));
            fs.appendChild(s);
            cnt.appendChild(fs);

            if (languageChanged === false) {

                dlg.appendChild(cnt);

                // -- Actions (buttons) + status
                footer = document.createElement('footer');
                // footer.classList.add('buttons');
                btn = document.createElement('button');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][0]; // save
                btn.setAttribute('id', 'BTNSave');
                btn.addEventListener('click', saveUserOptions, false);
                footer.appendChild(btn);
                btn = document.createElement('button');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][1]; // close
                btn.setAttribute('id', 'BTNClose');
                btn.addEventListener('click', toggleDialog, false);
                footer.appendChild(btn);
                btn = document.createElement('button');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][2]; // export
                btn.setAttribute('id', 'BTNExport');
                btn.addEventListener('click', exportUserOptions, false);
                footer.appendChild(btn);
                btn = document.createElement('button');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][3]; // import
                btn.setAttribute('id', 'BTNImport');
                footer.appendChild(btn);
                btn = document.createElement('button');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][4]; // reset
                btn.setAttribute('id', 'BTNReset');
                btn.addEventListener('click', resetUserOptions, false);
                footer.appendChild(btn);
                // -- file input field is hidden, but triggered by the Import button.
                let fileImport = document.createElement('input');
                fileImport.setAttribute('type', 'file');
                fileImport.setAttribute('id', `FI${postAtt}`);
                fileImport.classList.add('fileInput');
                footer.appendChild(fileImport);
                // -- save/export/import/reset status/results
                div = document.createElement('div');
                div.classList.add('fileResults');
                footer.appendChild(div);

                dlg.appendChild(footer);

                document.body.appendChild(dlg);

                // -- add event listeners to the import button and file input field
                let fileInput = document.getElementById(`FI${postAtt}`);
                fileInput.addEventListener('change', importUserOptions, false);
                // -- make the btn Import trigger file input ...
                let btnImport = document.getElementById('BTNImport');
                btnImport.addEventListener('click', function () {
                    fileInput.click();
                }, false);
            }
            else {
                // -- language changed
                const footer = dlg.querySelector('footer');
                let btn = footer.querySelector('#BTNSave');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][0];
                btn = footer.querySelector('#BTNClose');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][1];
                btn = footer.querySelector('#BTNExport');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][2];
                btn = footer.querySelector('#BTNImport');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][3];
                btn = footer.querySelector('#BTNReset');
                btn.textContent = KeyWords.DLG_BUTTONS[uiLanguage][4];
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
                        alert(KeyWords.NF_LIKES_MAXIMUM[VARS.language] + '?');
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
            btn.title = KeyWords.DLG_TITLE[VARS.language];
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
        const elText = document.createTextNode(KeyWords.VERBOSITY_MESSAGE[VARS.language][1] + reason);

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
                    elDetails.querySelector('summary').lastChild.textContent = VARS.echoCount + KeyWords.VERBOSITY_MESSAGE[VARS.language][1];

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

    function isSponsored(post) {
        // Is it a sponsored post?
        // -- applies to News feed, Groups feed, Videos Feed
        // -- mopUpTheMarketplaceFeed() looks after marketplace feed sponsored posts/items.

        let isSponsoredPost = false;
        const PARAM_FIND = '__cft__[0]=';
        const PARAM_MIN_SIZE = (VARS.isSF) ? 254 : 299;

        let elLinks = [];
        if (VARS.isNF || VARS.isGF) {
            // -- news feed
            // -- and possibly groups feed (haven't seen a sponsored post in groups for ages!)
            // -- May 2023 update (#3) - works with the introduced "Feeds (most recent)" feature
            elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            if (elLinks.length === 0) {
                // -- try again, some users don't have the aria-posinet attribute.
                elLinks = Array.from(post.querySelectorAll(`div[aria-describedby] span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            }
        }
        else if (VARS.isVF) {
            // -- watch videos feed has a slightly different html structure for sponsored posts.
            elLinks = Array.from(post.querySelectorAll(`div > div > div > div > span > span > div > a[href*="${PARAM_FIND}"]`));
        }
        else if (VARS.isSF) {
            // -- search feed - has a slightly different html structure for sponsored posts.
            elLinks = Array.from(post.querySelectorAll(`div[role="article"] span > a[href*="${PARAM_FIND}"]`));
        }
        if (elLinks.length > 0) {
            for (let i = 0; i < elLinks.length; i++) {
                let el = elLinks[i];
                let pos = el.href.indexOf(PARAM_FIND);
                if (pos >= 0) {
                    if (el.href.slice(pos).length > PARAM_MIN_SIZE) {
                        isSponsoredPost = true;
                        break;
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
            // -- May 2023
            'div[aria-posinset] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > span',
            'div[aria-describedby] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > span',
            // -- February 2023 (no need for light dusting ...)
            ':scope div[aria-posinset] > div > div > div > div > div > div:not([data-0]) > div > div > div:nth-of-type(1) > div > div > div > div > span',
            ':scope div[aria-describedby] > div > div > div > div > div > div:not([data-0]) > div > div > div:nth-of-type(1) > div > div > div > div > span',

            // -- Oct/Nov 2023 (provisional - not tested by zbluebugz)
            'div[aria-posinset] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > span > span > span:nth-of-type(2)',
            'div[aria-describedby] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > span > span > span:nth-of-type(2)',

            // -- December 2022 - #2
            ':scope div[aria-posinset] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div > div > span',
            ':scope div[aria-describedby] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div > div > span',
            // -- December 2022 - #1
            ':scope > div > div > div > div > div > div > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div > div > span',
            // -- < December 2022
            ':scope > div > div > div > div > div > div > div > div > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div > div > div > div > span',
            ':scope > div > div > div > div > div > div > div > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div > div > div > div > span'
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
            return (pattern.test(firstCharacter)) ? '' : KeyWords.NF_SUGGESTIONS[VARS.language];
        }
        return '';
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
                results = KeyWords.GF_SUGGESTIONS[VARS.language];
            }
            else {
                // -- a sneaky group post without the standard suggestion/recommendation header
                let query = 'h3 > div > span ~ span > span > div > div';
                let sneakyGroupPost = blocks[1].querySelector(query);
                if (sneakyGroupPost) {
                    results = KeyWords.GF_SUGGESTIONS[VARS.language];
                }
            }
        }
        return results;
    }

    function nf_isPeopleYouMayKnow(post) {
        const queryPYMK = 'a[href*="/friends/suggestions/"][role="link"]';
        const linksPYMK = post.querySelectorAll(queryPYMK);
        return (linksPYMK.length === 0) ? '' : KeyWords.NF_PEOPLE_YOU_MAY_KNOW[VARS.language];
    }

    function nf_isPaidPartnership(post) {
        const queryPP = 'span[dir] > span[id] a[href^="/business/help/"]';
        const elPaidPartnership = post.querySelector(queryPP);
        return (elPaidPartnership === null) ? '' : KeyWords.NF_PAID_PARTNERSHIP[VARS.language];
    }

    function nf_isSponsoredPaidBy(post) {
        const querySPB = 'div:nth-child(2) > div > div:nth-child(2) > span[class] > span[id] > div:nth-child(2)';
        const sponsoredPaidBy = querySelectorAllNoChildren(post, querySPB, 1);
        return (sponsoredPaidBy.length === 0) ? '' : KeyWords.NF_SPONSORED_PAID[VARS.language];
    }

    function nf_isReelsAndShortVideos(post) {
        // -- reels and short videos (multiple)
        const queryRaSV = 'a[href="/reel/?s=ifu_see_more"]';
        const elRaSV = post.querySelector(queryRaSV);
        return (elRaSV === null) ? '' : KeyWords.NF_REELS_SHORT_VIDEOS[VARS.language];
    }

    function nf_isShortReelVideo(post) {
        // -- reel/short video post (single)
        // -- post must have only one reel link
        const querySRV = 'a[href*="/reel/"]';
        const elementsSRV = Array.from(post.querySelectorAll(querySRV));
        return (elementsSRV.length !== 1) ? '' : KeyWords.NF_SHORT_REEL_VIDEO[VARS.language];
    }

    function gf_isShortReelVideo(post) {
        // -- reel/short video post (single)
        // -- post must have only one reel link
        const querySRV = 'a[href*="/reel/"]';
        const elementsSRV = Array.from(post.querySelectorAll(querySRV));
        return (elementsSRV.length !== 1) ? '' : KeyWords.GF_SHORT_REEL_VIDEO[VARS.language];
    }

    function nf_isEventsYouMayLike(post) {
        // -- events you may like posts
        const query = (':scope div > div:nth-of-type(2) > div > div >  h3 > span');
        const events = querySelectorAllNoChildren(post, query, 0);
        return (events.length === 0) ? '' : KeyWords.NF_EVENTS_YOU_MAY_LIKE[VARS.language];
    }

    function nf_isFollow(post) {
        // -- follow someone/something post
        const queryFollow = ':scope h4[id] > span > div > span';
        const elementsFollow = querySelectorAllNoChildren(post, queryFollow, 0);
        return (elementsFollow.length !== 1) ? '' : KeyWords.NF_FOLLOW[VARS.language];
    }

    function nf_isParticipate(post) {
        // -- participate in a post ...
        const queryParticipate = ':scope h4[id] > div[class] > span[dir] > span[class] > div[class] > span[class]';
        const elementsParticipate = querySelectorAllNoChildren(post, queryParticipate, 0);
        return (elementsParticipate.length !== 1) ? '' : KeyWords.NF_PARTICIPATE[VARS.language];
    }

    function findFirstMatch(longText, valuesToFind) {
        const foundWord = valuesToFind.find(word => longText.includes(word));
        return foundWord !== undefined ? foundWord : '';
    }

    function findFirstMatchRE(longText, patterns) {
        // -- using Regular Expressions
        // -- user supplied the RE patterns
        for (const pattern of patterns) {
            // -- do not use 'g' - want to reset lastindex to 0 for each test.
            // --'i' flag for case-insensitive matching;
            const regex = new RegExp(pattern, 'i');
            if (regex.test(longText)) {
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
        const blockedText = findFirstMatch(postTexts, VARS.Filters.NF_BLOCKED_TEXT_LC);
        return blockedText;
    }

    function gf_isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- groups feed post's blocks (have 1-4 blocks)
        // -- scan first 3 blocks
        // -- some users don't have [aria-posinset], hence [aria-describedby]
        const postTexts = (extractTextContent(post, gf_getBlocksQuery(post), 3)).join(' ').toLowerCase();
        const blockedText = findFirstMatch(postTexts, VARS.Filters.GF_BLOCKED_TEXT_LC);
        return blockedText;
    }

    function vf_isBlockedText(post, queryBlocks) {
        // - check for blocked text - partial text match
        // -- regular videos feed post's blocks (have 1-3 blocks)
        // -- scan 1st block only
        const postTexts = (extractTextContent(post, queryBlocks, 1)).join(' ').toLowerCase();
        const blockedText = findFirstMatch(postTexts, VARS.Filters.VF_BLOCKED_TEXT_LC);
        // console.info(log + 'vf_isBlockedText(); postText:', postTexts, '; blocked:', blockedText, '; post:', post, queryBlocks);
        return blockedText;
    }

    function pp_isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- news feed post's blocks (have 1-4 blocks)
        // -- scan 1st & 3rd blocks
        // -- used by the fn extractTextContent() and fn doMoppingInfoBox()
        const postTexts = (extractTextContent(post, nf_getBlocksQuery(post), 3)).join(' ').toLowerCase();
        const blockedText = findFirstMatch(postTexts, VARS.Filters.PP_BLOCKED_TEXT_LC);
        return blockedText;
    }


    function vf_isVideoLive(post) {
        // - check for "LIVE" indicator on videos
        const liveRule = 'div[role="presentation"] ~ div > div:nth-of-type(1) > span';
        const elLive = post.querySelectorAll(liveRule);
        return (elLive.length > 0) ? KeyWords.VF_LIVE[VARS.language] : '';
    }

    function vf_isInstagram(post) {
        // - check for Instagram video posts
        // -- usually marked with authos having href="#"
        // -- nb: some sponsored posts may have a similar structure - ignore for now.
        const instagramRule = 'div > div > div > div > div > a[href="#"] > div > svg';
        const elInstagram = post.querySelectorAll(instagramRule);
        return (elInstagram.length > 0) ? KeyWords.VF_INSTAGRAM[VARS.language] : '';
    }

    function findDuplicateVideos(urlQuery, postQuery) {
        // - scan the document for all videos having the same video id.
        const watchVideoDuplicates = document.querySelectorAll(urlQuery);
        // console.info(log + 'findDuplicateVideos(); video: ', urlQuery, ' count:', watchVideoDuplicates.length);
        if (watchVideoDuplicates.length < 2) {
            return;
        }
        // - flag those duplicates ...
        for (let i = watchVideoDuplicates.length - 1; i >= 1; i--) {
            const duplicatePost = watchVideoDuplicates[i].closest(postQuery);
            // console.info(log + 'findDuplicateVideos(); found duplicate?', duplicatePost);
            if (duplicatePost) {
                // console.info(log + 'findDuplicateVideos(); duplicate: ', duplicatePost);
                vf_hidePost(duplicatePost, KeyWords.VF_DUPLICATE_VIDEOS[VARS.language], '');
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
                findDuplicateVideos(`div > span > a[href*="/watch/?v=${watchVideoVID}&"]`, postQuery);
            }
        }
        else {
            // -- try pattern #2:  "/<profile-name>/videos/.../?"
            const elUserVideo = post.querySelector('div > span > a[href*="/videos/"]');
            if (elUserVideo) {
                // -- extract the video-id
                const watchVideoVID = elUserVideo.href.split('/videos/')[1].split('/')[0];
                if (watchVideoVID) {
                    findDuplicateVideos(`div > span > a[href*="/videos/${watchVideoVID}/"]`, postQuery);
                }
            }
        }
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

        // -- March 2024 (fb changed code - personalised and non-personalised)
        const queries = [
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
                hideBlock(adBlock, adBlock, KeyWords.SPONSORED[VARS.language]);
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
        // -- scan the post's content block only (ignore comments block)
        // -- the gif is usually either MP4 or GIPHY ... with an round dashed label "GIF" overlay
        // :: return <reason>

        const postBlocks = post.querySelectorAll(nf_getBlocksQuery(post));

        if (postBlocks.length >= 2) {
            const contentBlock = postBlocks[2];
            const queryForAnimatedGIF = getMosquitosQuery();
            const animatedGIFs = contentBlock.querySelectorAll(queryForAnimatedGIF);
            const animatedGIFsText = (animatedGIFs.length > 0) ? KeyWords.GF_ANIMATED_GIFS_POSTS[VARS.language] : '';
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
            const contentBlock = postBlocks[2];
            const queryForAnimatedGIF = getMosquitosQuery();
            const animatedGIFs = contentBlock.querySelectorAll(queryForAnimatedGIF);
            const animatedGIFsText = (animatedGIFs.length > 0) ? KeyWords.GF_ANIMATED_GIFS_POSTS[VARS.language] : '';
            // console.info(log + 'gf_hasAnimatedGifContent(); results::', contentBlock, animatedGIFs.length, animatedGIFsText, post);
            return animatedGIFsText;
        }
        return '';
    }

    function nf_scrubTheTabbiesAndOrSurvey(doScrubTheTabbies = false, doScrubTheSurvey = false) {
        // -- Tablist : stories | reels | rooms
        // -- Stories
        // -- both appear at top of NF
        // -- FB Survey
        // -- appears after Tablist / Stories
        const queryTabList = 'div[role="main"] > div > div > div > div > div > div > div > div[role="tablist"]';
        const elTabList = document.querySelector(queryTabList);
        if (elTabList) {
            if (doScrubTheSurvey === true) {
                const elParent = climbUpTheTree(elTabList, 4);
                if (elParent !== null) {
                    nf_scrubTheSurvey(elParent);
                }
            }
            if (doScrubTheTabbies === true) {
                if (elTabList.hasAttribute(postAttChildFlag)) {
                    return;
                }
                // -- parent is 4 levels up.
                const elParent = climbUpTheTree(elTabList, 4);
                if (elParent) {
                    nf_hidePost(elParent, KeyWords.NF_TABLIST_STORIES_REELS_ROOMS[VARS.language], 'tabbies');
                    elTabList.setAttribute(postAttChildFlag, 'tablist');
                    return;
                }
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
            if (doScrubTheSurvey === true && elCreateStory) {
                const elParent = getStoriesParent(elCreateStory);
                if (elParent !== null) {
                    nf_scrubTheSurvey(elParent);
                }
            }
            if (doScrubTheTabbies && elCreateStory && !elCreateStory.hasAttribute(postAttChildFlag)) {
                const elParent = getStoriesParent(elCreateStory);
                if (elParent !== null) {
                    nf_hidePost(elParent, KeyWords.NF_TABLIST_STORIES_REELS_ROOMS[VARS.language], 'tabbies');
                    elCreateStory.setAttribute(postAttChildFlag, '1');
                }
            }
        }
        // -- find duplicated tabbies and remove the extras ...
        // -- (fb sometimes duplicate this feature when this userscript is running ...)
        const tabbies = document.querySelectorAll(`[${postAtt}="tabbies"]`);
        if (tabbies.length > 1) {
            // -- keep the first one and remove others
            for (let i = tabbies.length - 1; i >= 1; i--) {
                tabbies[i].remove();
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
        return (elStory) ? KeyWords.NF_STORIES[VARS.language] : '';
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
                reason = KeyWords.SPONSORED[VARS.language];
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
                    reason = KeyWords.NF_SUGGESTIONS[VARS.language];
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
            asideBox.closest('a').setAttribute(postAtt, KeyWords.GF_SUGGESTIONS[VARS.language]);
            hideFeature(elParent, KeyWords.GF_SUGGESTIONS[VARS.language], true);
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
            const elLink = post.querySelector(`a[href*="${KeyWords.OTHER_INFO_BOX_CLIMATE_SCIENCE.pathMatch}"]:not([${postAtt}])`);
            if (elLink !== null) {
                // - block @ 5 levels up.
                const block = climbUpTheTree(elLink, 5);
                hideBlock(block, elLink, KeyWords.OTHER_INFO_BOX_CLIMATE_SCIENCE[VARS.language]);
                hiding = true;
            }
        }
        //console.info(log+'scrubInfoBoxes():', hiding, VARS.Options.OTHER_INFO_BOX_CORONAVIRUS, KeyWords.OTHER_INFO_BOX_CORONAVIRUS.pathMatch, post);
        if (!hiding && VARS.Options.OTHER_INFO_BOX_CORONAVIRUS) {
            const elLink = post.querySelector(`a[href*="${KeyWords.OTHER_INFO_BOX_CORONAVIRUS.pathMatch}"]:not([${postAtt}])`);
            if (elLink !== null) {
                // - block @ 5 levels up.
                const block = climbUpTheTree(elLink, 5);
                hideBlock(block, elLink, KeyWords.OTHER_INFO_BOX_CORONAVIRUS[VARS.language]);
                hiding = true;
            }
        }
        if (!hiding && VARS.Options.OTHER_INFO_BOX_SUBSCRIBE) {
            const elLink = post.querySelector(`a[href*="${KeyWords.OTHER_INFO_BOX_SUBSCRIBE.pathMatch}"]:not([${postAtt}])`);
            if (elLink !== null) {
                // - block @ 5 levels up.
                const block = climbUpTheTree(elLink, 5);
                hideBlock(block, elLink, KeyWords.OTHER_INFO_BOX_SUBSCRIBE[VARS.language]);
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
            const results = postLikesCount >= maxLikes ? KeyWords.NF_LIKES_MAXIMUM[VARS.language] : '';
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


    function nf_scrubTheSurvey(containerTablist) {
        // -- fb survey
        // - located in the container beneath Stories / Reels / Rooms tablist

        const elParent = containerTablist.parentElement;
        if (!elParent.nextElementSibling) {
            return;
        }

        const elContainer = elParent.nextElementSibling.querySelector(':scope > div > div > div');

        if (elContainer.hasAttribute(postAtt)) {
            return;
        }

        const surveyLink = elContainer.querySelector('a[href^="https://www.facebook.com/survey/"]');

        if (surveyLink) {
            nf_hidePost(elContainer, KeyWords.NF_SURVEY[VARS.language]);
            // console.info('fbcmf - survey:', elContainer, surveyLink)
        }
        // <element>.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
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

            // -- mostly English users:
            'h3[dir="auto"] ~ div:not([class]) > div.x1lliihq > div > div > div > div',
            'h2[dir="auto"] ~ div:not([class]) > div.x1lliihq > div > div > div > div',

            // -- mostly non-English users:
            'div[role="feed"] > h3[dir="auto"] ~ div:not([class]) > div[data-pagelet*="FeedUnit_"] > div > div > div > div',
            'div[role="feed"] > h2[dir="auto"] ~ div:not([class]) > div[data-pagelet*="FeedUnit_"] > div > div > div > div',
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
        // -- applies to news feed, groups feed, group feed ...
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
        const mainColumnQuery = 'div[role="navigation"] ~ div[role="main"] div[role="main"]';
        const mainColumn = document.querySelector(mainColumnQuery);
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

        // -- similar to dialog box, but not having [role="dialog"] ..
        const elDialog2 = document.querySelector('div[role="main"] > div#watch_feed');
        // console.info(log + 'vf_isTheHouseDirty(); mainColumn(3:', elDialog2);
        if (elDialog2) {
            if (elDialog2.hasAttribute(mainColumnAtt) === false) {
                arrReturn[1] = elDialog2;
            }
            else if (hasSizeChanged(elDialog2.getAttribute(mainColumnAtt), elDialog2.innerHTML.length)) {
                arrReturn[1] = elDialog2;
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
            // -- Includes FB' survey
            if (VARS.Options.NF_TABLIST_STORIES_REELS_ROOMS || VARS.Options.NF_SURVEY) {
                nf_scrubTheTabbiesAndOrSurvey(VARS.Options.NF_TABLIST_STORIES_REELS_ROOMS, VARS.Options.NF_SURVEY);
            }

            // -- aside's sponsored
            nf_cleanTheConsoleTable('Sponsored');

            // -- aside's suggestions
            if (VARS.Options.NF_SUGGESTIONS) {
                nf_cleanTheConsoleTable('Suggestions');
            }

            // -- news feed stream ...
            const posts = nf_getCollectionOfPosts();

            // console.info(log + 'mopUpTheNewsFeed(); posts:', posts);

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
                    else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                        // -- skip these - already been scanned a few times
                    }
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
                            hideReason = KeyWords.SPONSORED[VARS.language];
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

        const [mainColumn, elDialog] = isTheHouseDirty();
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

                        // -- add the open post in new tab link+icon.
                        if ((VARS.gfType === 'groups') && (post[postPropDS] === undefined)) {
                            gf_setPostLinkToOpenInNewTab(post);
                        }

                        if (post.hasAttribute(postAtt)) {
                            // -- already flagged
                            hideReason = 'hidden';
                        }
                        else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                            // -- skip these - already been scanned a few times
                        }
                        else {

                            doLightDusting(post);

                            if (hideReason === '' && VARS.Options.GF_SPONSORED && isSponsored(post)) {
                                hideReason = KeyWords.SPONSORED[VARS.language];
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
                        else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                            // -- skip these - already scanned a few times
                            // console.info(log + 'skipping:', post);
                        }
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
                query = 'div[id="watch_feed"] > div > div > div > div > div > div > div';
                //queryBlocks = ':scope > div > div > div > div > div > div:nth-of-type(2) > div';
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
                // queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
                queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
            }
            else {
                return;
            }

            if (VARS.vfType !== 'search') {
                const posts = container.querySelectorAll(query);
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
                    else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                        // -- skip these - already been scanned a few times
                        // console.info(log + 'video; skipping;', post[postPropDS], VARS.scanCountMaxLoop, post);
                    }
                    else {
                        doLightDusting(post);

                        if (hideReason === '' && VARS.Options.VF_SPONSORED && isSponsored(post)) {
                            hideReason = KeyWords.SPONSORED[VARS.language];
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
            mp_hideBox(box, KeyWords.SPONSORED[VARS.language]);
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
                const queryHeadings = `div:not([${postAtt}]) > a[href="/ads/about/?entry_product=ad_preferences"]`;
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
                        mp_hideBox(heading.parentElement, KeyWords.SPONSORED[VARS.language]);
                    }
                    for (const item of items) {
                        // const parentItem = climbUpTheTree(item, 3);
                        const parentItem = climbUpTheTree(item, 4);
                        mp_hideBox(parentItem, KeyWords.SPONSORED[VARS.language]);
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
                        mp_hideBox(box, KeyWords.SPONSORED[VARS.language]);
                        elLink.setAttribute(postAtt, KeyWords.SPONSORED[VARS.language]);
                    }
                }
                else {
                    // -- viewing a mp item in a new tab / reloaded page.
                    const query = `div[${mainColumnAtt}] span h2 [href*="/ads/about/"]:not([${postAtt}])`;
                    const elLink = document.querySelector(query);
                    if (elLink) {
                        const box = elLink.closest('h2').closest('span');
                        mp_hideBox(box, KeyWords.SPONSORED[VARS.language]);
                        elLink.setAttribute(postAtt, KeyWords.SPONSORED[VARS.language]);
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
                //     mp_hideBox(itemBox, KeyWords.SPONSORED[VARS.language]);
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
            const query = 'div[role="feed"] > div';
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
                        hideReason = KeyWords.SPONSORED[VARS.language];
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
        if (!proceed) {
            return;
        }

        const [mainColumn, elDialog] = pp_isTheHouseDirty();
        if (mainColumn === null && elDialog === null) {
            return;
        }

        if (mainColumn) {
            // profile page feed stream ...
            const query = 'div[role="main"] > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) >div > div';
            const posts = Array.from(document.querySelectorAll(query));

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
                GM.registerMenuCommand(KeyWords.GM_MENU_SETTINGS[VARS.language], toggleDialog);
                addCSS();
                window.setTimeout(addExtraCSS, 150); // fb is sometimes laggy ...
                buildMoppingDialog();
                // -- for reels's controls - chromium browsers needs more spacing ...
                // -- requires: @grant        unsafeWindow
                VARS.isChromium = !!unsafeWindow.chrome && /Chrome|CriOS/.test(navigator.userAgent);
                firstRun = false;
            }

            // -- add some event listeners to detect if something is being changed ...
            window.addEventListener('scroll', function () {
                // -- wakey wakey!
                let currentScrollY = window.scrollY;
                let scrollingDistance = currentScrollY - prevScrollY;
                if (Math.abs(scrollingDistance) > 20) {
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
    // setTimeout(startUp, 50);
    startUp();

})();
