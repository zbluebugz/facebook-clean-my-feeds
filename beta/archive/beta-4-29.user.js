// ==UserScript==
// @name         FB - Clean my feeds
// @description  Hide Sponsored and Suggested posts in FB's News Feed, Groups Feed, Watch Videos Feed and Marketplace Feed
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-clean-my-feeds/issues
// @version      4.29
// @author       zbluebugz (https://github.com/zbluebugz/)
// @match        https://www.facebook.com/*
// @match        https://web.facebook.com/*
// @match        https://facebook.com/*
// @noframes
// @grant        GM.registerMenuCommand
// @grant        GM.info
// @license      MIT; https://opensource.org/licenses/MIT
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

(async function () {

    'use strict';

    const SCRIPT_VERSION = 'v4.29'; // TM doesn't like spaces in version number ...

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

        // - pause animated GIFs:
        NF_ANIMATED_GIFS: {
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
            'he': 'השהה קובצי GIF מונפשים',
            'ar': 'وقفة GIF المتحركة',
            'id': 'Jeda GIF animasi',
            'zh-Hans': '暂停动画 GIF',
            'zh-Hant': '暫停 GIF 動畫',
            'ja': 'アニメーション GIF を一時停止する',
            'fi': 'Keskeytä animoidut GIF-kuvat',
            'tr': 'Hareketli GIF\'leri duraklat',
            'el': 'Παύση κινούμενων GIF',
            'ru': 'Приостановить анимированные GIF',
            'uk': 'Призупинити анімовані GIF-файли',
            'bg': 'Пауза на анимирани GIF файлове',
            'defaultEnabled': false
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

        // - pause animated GIFs:
        GF_ANIMATED_GIFS: {
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
            'he': 'השהה קובצי GIF מונפשים',
            'ar': 'وقفة GIF المتحركة',
            'id': 'Jeda GIF animasi',
            'zh-Hans': '暂停动画 GIF',
            'zh-Hant': '暫停 GIF 動畫',
            'ja': 'リール/ショートビデオ',
            'fi': 'Kela/lyhyt video',
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

        // - pause animated GIFs:
        VF_ANIMATED_GIFS: {
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
            'he': 'השהה קובצי GIF מונפשים',
            'ar': 'وقفة GIF المتحركة',
            'id': 'Jeda GIF animasi',
            'zh-Hans': '暂停动画 GIF',
            'zh-Hant': '暫停 GIF 動畫',
            'ja': 'アニメーション GIF を一時停止する',
            'fi': 'Keskeytä animoidut GIF-kuvat',
            'tr': 'Hareketli GIF\'leri duraklat',
            'el': 'Παύση κινούμενων GIF',
            'ru': 'Приостановить анимированные GIF',
            'uk': 'Призупинити анімовані GIF-файли',
            'bg': 'Пауза на анимирани GIF файлове',
            'defaultEnabled': false,
        },
        // (videos do not have # shares count)


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

        // - label for Miscellaneous/Other items:
        // DLG_OTHER: {
        //     'en': 'Miscellaneous items',
        //     'pt': 'Itens miscelâneos',
        //     'de': 'Sonstige Gegenstände',
        //     'fr': 'Articles divers',
        //     'es': 'Artículos diversos',
        //     'cs': 'Různé položky',
        //     'vi': 'Những thứ linh tinh',
        //     'it': 'Articoli vari',
        //     'lv': 'Dažādas vienumus',
        //     'pl': 'Różne pozycje',
        //     'nl': 'Diversen',
        //     'he': 'פריטים שונים',
        //     'ar': 'عناصر متنوعة',
        //     'id': 'Barang lain-lain',
        //     'zh-Hans': '杂件',
        //     'zh-Hant': '雜項',
        //     'ja': 'その他のアイテム',
        //     'fi': 'Sekalaiset tavarat',
        //     'tr': 'Diğer öğeler',
        //     'el': 'Διάφορα αντικείμενα',
        //     'ru': 'Разное',
        // },
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

        // - label for display a message if a post is hidden:
        DLG_VERBOSITY_MESSAGE: {
            'en': 'Display a message if a post is hidden',
            'pt': 'Exibir uma mensagem se uma postagem estiver oculta',
            'de': 'Nachricht anzeigen, wenn ein Beitrag ausgeblendet ist',
            'fr': 'Afficher un message si une publication est masquée',
            'es': 'Mostrar un mensaje si una publicación está oculta',
            'cs': 'Zobrazit zprávu, pokud je příspěvek skrytý',
            'vi': 'Hiển thị một tin nhắn nếu một bài đăng bị ẩn',
            'it': 'Visualizza un messaggio se un post è nascosto',
            'lv': 'Parādīt ziņojumu, ja raksts ir paslēpts',
            'pl': 'Wyświetlaj wiadomość, jeśli wpis jest ukryty',
            'nl': 'Een bericht weergeven als een artikel verborgen is',
            'he': 'הצג הודעה אם פוסט מוסתר',
            'ar': 'اعرض رسالة إذا كانت المشاركة مخفية',
            'id': 'Tampilkan pesan jika kiriman disembunyikan',
            'zh-Hans': '如果帖子被隐藏，则显示消息',
            'zh-Hant': '如果貼文被隱藏，則顯示訊息',
            'ja': '投稿が非表示の場合にメッセージを表示する',
            'fi': 'Näytä viesti, jos postaus on piilotettu',
            'tr': 'Bir gönderi gizlenmişse bir mesaj göster',
            'el': 'Εμφάνιση μηνύματος αν ένας δημοσίευση είναι κρυμμένη',
            'ru': 'Показывать сообщение, если пост скрыт',
            'uk': 'Відображати повідомлення, якщо публікація прихована',
            'bg': 'Показване на съобщение, ако публикацията е скрита',
        },

        // - Verbosity - say nothing:
        VERBOSITY_NO_MESSAGE: {
            'en': 'no message',
            'pt': 'nenhuma mensagem',
            'de': 'keine Nachricht',
            'fr': 'pas de message',
            'es': 'Sin mensaje',
            'cs': 'žádná zpráva',
            'vi': 'không có tin nhắn',
            'it': 'Nessun messaggio',
            'lv': 'Nekādu ziņojumu',
            'pl': 'nie ma wiadomości',
            'nl': 'geen bericht',
            'he': 'אין הודעה',
            'ar': 'لا توجد رسالة',
            'id': 'tidak ada pesan',
            'zh-Hans': '没有消息',
            'zh-Hant': '不要顯示訊息',
            'ja': 'メッセージなし',
            'fi': 'ei viestiä',
            'tr': 'esaj yok',
            'el': 'Κανένα μήνυμα',
            'ru': 'сообщение отсутствует',
            'uk': 'немає повідомлення',
            'bg': 'Без съобщение',
        },

        // - notification
        VERBOSITY_MESSAGE: {
            'en': ['1 post hidden. Rule: ', ' posts hidden'],
            'pt': ['1 postagem oculta. Regra: ', ' postagens ocultas'],
            'de': ['1 Beitrag ausgeblendet. Regel: ', ' Beiträge versteckt'],
            'fr': ['1 poste caché. Règle: ', ' posts cachés'],
            'es': ['1 publicación oculta. Regla: ', ' publicaciones ocultas'],
            'cs': ['1 příspěvek byl skryt. Pravidlo: ', ' příspěvků skrytých'],
            'vi': ['1 bài bị ẩn. Quy tắc: ', ' bài viết ẩn'],
            'it': ['1 post nascosto Regola: ', ' post nascosti'],
            'lv': ['1 ziņa ir paslēpta. Noteikums: ', ' ziņas ir paslēptas'],
            'pl': ['Ukryto 1 post. Reguła: ', ' posty ukryte'],
            'nl': ['1 post verborgen. Regel: ', ' posts verborgen'],
            'he': ['פוסט אחד מוסתר. כלל: ', ' פוסטים מוסתרים'],
            'ar': ['مشاركة واحدة مخفية. حكم: ', ' المشاركات المخفية'],
            'id': ['1 pos disembunyikan. Aturan: ', ' postingan disembunyikan'],
            'zh-Hans': ['1 个帖子已隐藏。 规则： ', ' 个帖子已隐藏'],
            'zh-Hant': ['1 個貼文已隱藏。 規則： ', ' 個貼文已隱藏'],
            'ja': ['1 件の投稿が非表示になっています。 ルール： ', ' 件の投稿が非表示'],
            'fi': ['1 viesti piilotettu. Sääntö: ', ' viestiä piilotettu'],
            'tr': ['1 gönderi gizlendi. Kural: ', ' gönderi gizlendi'],
            'el': ['1 δημοσίευση κρυμμένη. Κανόνας: ', ' δημοσιεύσεις κρυμμένες'],
            'ru': ['1 пост скрыт. Правило: ', ' постов скрыто'],
            'uk': ['1 допис прихований. Правило: ', ' дописи приховано'],
            'bg': ['1 скрита публикация. Правило: ', '  скрити публикации'],
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

        // - colour of the dialog's text:
        CMF_DIALOG_COLOUR: {
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
            'defaultValue': '',
        },

        // - background colour of the dialog:
        CMF_DIALOG_BG_COLOUR: {
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
            'defaultValue': '',
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
    }
    // - make sure the db's store exists ...
    DBVARS.ostore = createStore(DBVARS.DBName, DBVARS.DBStore);

    // - post attribute - hidden and reason
    const postAtt = 'cmfrx';
    // - post attribute - consecutive posts id
    const postAttCPID = 'cmfcpid';
    // - post property - # of light dusting duties done
    const postPropDS = 'cmfDusted';
    // - post's child element attribute - used for queries that original don't include the parent element.
    const postAttChildFlag = 'cmfcf';
    // - post's toggle state bar + post tab.
    const postAttTab = 'cmftsb'
    // - marketplace post - indicate already scanned
    const postAttMPSkip = 'cmfsmp';

    // - Feed Details variables
    // -- nb: setFeedSettings() adjusts some of these settings.
    const VARS = {
        // - mutations counter
        mutationsCount: 0,
        // - how many mutations to ignore @ start (usually non-feed elements)
        mutationsInitSkip: 75,
        // - how many times to scan a post
        scanCountStart: 0,
        scanCountMaxLoop: 15, // Nov 2023; changed from 12 to 15, need to make code a tad bit more aggressive.

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
        // CSS class names
        cssHide: '',
        cssHideEl: '',
        cssEcho: '',
        cssHideNumberOfShares: '',
        cssShow: '',
        // toggle dialog button (visible if is a Feed page)
        btnToggleEl: null,
        // - script's logo
        logoHTML: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><g id="Layer" fill="currentColor"><path id="Layer" fill-rule="evenodd" class="s0" d="m51 3.2c0.7 1.1 0.7 1-1.6 9.2-1.4 5-2.1 7.4-2.3 7.6-0.1 0.1-0.3 0.2-0.6 0.2-0.4 0-0.9-0.4-0.9-0.7 0-0.1 1-3.5 2-7.4 1.2-4 2-7.3 2-7.5 0-0.4-0.6-1-0.9-1-0.2 0-0.5 0.2-0.7 0.3-0.3 0.3-0.7 1.8-5.5 19.2l-5.3 18.9 0.9 0.5c0.5 0.3 0.9 0.5 0.9 0.5 0 0 1.3-4.4 2.8-9.8 1.5-5.3 2.8-10 2.8-10.3 0.2-0.5 0.3-0.7 0.6-0.9 0.3-0.1 0.4-0.1 0.8 0 0.2 0.2 0.4 0.3 0.4 0.5 0.1 0.2-0.4 2.2-1.5 6.1-0.9 3.2-1.6 5.8-1.6 5.9 0 0 0.5 0.1 1.3 0.1 1.9 0 2.7 0.4 3.2 1.5 0.3 0.6 0.3 2.7 0 3.4-0.3 0.9-1.2 1.4-2 1.4-0.3 0-0.5 0.1-0.5 0.1 0 0.2-2.3 20.2-2.3 20.4-0.2 0.8 0.7 0.7-14.1 0.7-15.3 0-14.3 0.1-15.3-1-0.8-0.8-1.1-1.5-1-2.9 0.2-3.6 2.7-6.7 6.3-7.8 0.4-0.2 0.9-0.3 1-0.3 0.6 0 0.6 0.1 0.1-4.5-0.3-2.4-0.5-4.4-0.5-4.5-0.1-0.1-0.3-0.1-0.7-0.2-0.6 0-1.1-0.3-1.6-1-0.3-0.4-0.3-0.5-0.4-1.8 0-1.7 0.1-2.1 0.6-2.7 0.7-0.6 1-0.7 2.5-0.8h1.3v-2.9c0-3.1 0-3.4 0.6-3.6 0.2-0.1 2.4-0.1 7.1-0.1 6.5 0.1 6.9 0.1 7.1 0.3 0.2 0.2 0.2 0.3 0.2 3.3v3h0.6l0.6-0.1 4.3-15.3c2.4-8.5 4.4-15.6 4.5-15.9 0.4-0.6 0.9-1 1.5-1.3 1.2-0.4 2.6 0.1 3.3 1.2zm-26.6 26.6h-0.7c-0.3 0-0.6 0-0.7 0 0 0.1-0.1 1.2-0.1 2.5v2.3h1.5zm3.4 0h-0.7c-0.5 0-0.9 0-0.9 0.1 0 0-0.1 1.1-0.1 2.4v2.3h1.8v-2.4zm3.4 0h-1.6v4.8h1.6zm3.2 0h-1.3v4.8h1.3zm-6.4 6.6c-7.9 0-9 0-9.2 0.2-0.3 0.2-0.3 0.3-0.3 1.3 0 0.7 0.1 1.1 0.2 1.2 0.1 0.1 2.3 0.1 7.3 0.1 6.9 0.1 7.2 0.1 7.5 0.3 0.3 0.3 0.3 1 0 1.3-0.2 0.2-0.8 0.2-6.3 0.2h-6l0.1 0.5c0 0.3 0.2 2.3 0.5 4.5l0.4 4h0.4c0.6 0 1.5-0.3 2-0.7 0.3-0.3 0.7-0.8 0.9-1.3 0.6-1.1 1.3-2 2.1-2.7 1.1-0.9 2.8-1.5 4-1.5h0.6l0.7-1.1c0.6-1 0.8-1.2 1.3-1.5 0.4-0.2 0.6-0.2 0.9-0.2 0.4 0.1 0.5 0.1 0.5-0.1 0.1-0.1 0.3-1.1 0.6-2.1 0.3-1.1 0.6-2.1 0.6-2.2 0.1-0.2-0.4-0.2-8.8-0.2zm16.2 0h-1.5l-0.4 1.3c-0.2 0.8-0.4 1.4-0.4 1.5 0 0 0.9 0 2 0 2.3 0 2.3 0.1 2.3-1.4 0-0.9-0.1-1-0.3-1.2-0.2-0.2-0.6-0.2-1.7-0.2zm-2.8 4.7c0 0.1-0.2 0.8-0.5 1.6-0.2 1-0.3 1.4-0.2 1.5 0 0 0.3 0.2 0.6 0.4 0.4 0.4 0.4 0.5 0.5 1.2 0 0.6 0 0.7-0.8 2-0.7 1.1-0.8 1.3-1.3 1.6l-0.5 0.2v1.8c0 1.3-0.1 2-0.2 2.5-0.1 0.4-0.2 0.8-0.2 0.8 0 0 0.7 0.1 1.5 0.1 1.2 0 1.6-0.1 1.6-0.2 0-0.1 0.4-3.1 0.8-6.8 0.4-3.6 0.7-6.7 0.7-6.7-0.1-0.2-1.9-0.1-2 0zm-6.3 1.8c-0.2-0.1-0.3 0-0.9 1-0.2 0.4-0.4 0.8-0.3 0.8 0 0.1 1.1 0.7 2.3 1.5 1.3 0.7 2.4 1.4 2.5 1.5 0.3 0.1 0.3 0.1 0.8-0.8 0.3-0.6 0.6-1 0.5-1 0 0-1.1-0.7-2.4-1.5-1.3-0.8-2.4-1.4-2.5-1.5zm-4.5 2.8c-1.6 0.5-2.7 1.5-3.5 3.1-0.6 1.2-1.3 2-2.4 2.5-0.9 0.4-0.9 0.4-2.9 0.5-2.8 0.1-3.9 0.6-5.4 2.1-0.8 0.8-1 1.1-1.4 1.9-1 2.2-0.9 4 0.2 4.4 0.7 0.3 0.8 0.3 1-0.5 0.8-2.4 2.7-4.5 5.1-5.5 1.1-0.4 1.6-0.5 3.2-0.6 2-0.2 2.8-0.7 3.4-2.2 0.3-0.5 0.6-1.2 0.8-1.6 0.8-1.3 2.4-2.5 3.8-2.9 0.4-0.1 0.8-0.2 0.8-0.2q0.2-0.1-0.3-0.4c-0.3-0.2-0.6-0.4-0.6-0.5-0.1-0.3-1.1-0.3-1.8-0.1zm3.2 2.7c-0.9 0.2-2 0.8-2.8 1.5-0.7 0.6-0.8 0.9-1.6 2.6-0.7 1.5-2.2 2.5-3.9 2.7-3.4 0.4-4.3 0.8-5.8 2.2-0.7 0.8-1 1.2-1.4 1.9l-0.5 1 0.9 0.1c0.9 0 0.9 0 1.2-0.4q2.7-3.2 7.3-3.2c2.2 0 2.9-0.5 3.9-2.3 0.3-0.5 0.7-1.2 0.9-1.5 1-1.2 3-2.3 4.6-2.4l0.8-0.1-0.1-0.5c-0.1-0.8-0.3-1.2-0.9-1.4-0.7-0.2-1.9-0.3-2.6-0.2zm3.6 3.9h-0.4c-0.5 0-1.6 0.3-2.3 0.7-0.7 0.5-1.6 1.5-2.2 2.6-1.1 2.1-2.5 2.9-5.2 2.9-0.6 0-1.6 0.1-2 0.2-1 0.2-2.3 0.8-2.9 1.3l-0.4 0.4h4.1c4.6-0.1 4.7-0.1 6.5-1 0.9-0.5 1.3-0.7 2.2-1.6 1.4-1.4 2.2-3 2.5-4.9zm4.3 4.2h-1.9-1.8l-0.5 0.8c-0.6 0.9-1.5 1.9-2.4 2.6l-0.6 0.5h3.4c2.6 0 3.4 0 3.4-0.1 0-0.1 0.1-1 0.2-2z"/></g></svg>',
        // - new window icon
        iconNewWindow: '<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Open post in a new window</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'
    };

    // -- which language is the FB page in?
    function setLanguageAndOptions() {
        // - run this function when HEAD is available.
        // - language (default to EN)
        // - also run getUserOptions().
        if (document.head) {
            let lang = document.head.parentNode.lang || 'en';
            VARS.language = (KeyWords.LANGUAGES.indexOf(lang) >= 0) ? lang : 'en';

            // ...
            let result = getUserOptions().then(() => {
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
        const listOfClasses = classes.split(',').filter(function (e) { return e.trim() }).map(e => e.trim());
        let styleLines = styles.split(';').filter(function (e) { return e.trim() });
        styleLines = styleLines.map(function (e) { let temp = e.split(':'); return '    ' + temp[0].trim() + ':' + temp[1].trim() });

        let temp = listOfClasses.join(',\n') + ' {\n';
        temp += styleLines.join(';\n') + ';\n';
        temp += '}\n';
        VARS.tempStyleSheetCode += temp;
    }

    // -- various CSS
    function addCSS() {
        // - CSS styles for hiding or highlighting the selected posts / element
        // - CSS styles for dialog panel
        let head, styleEl, classes, styles;
        let isNewCSS = true;

        if (VARS.cssID !== '') {
            // - Reset the existing Stylesheet
            styleEl = document.getElementById(VARS.cssID);
            if (styleEl) {
                styleEl.replaceChildren();
                isNewCSS = false;
            }
        }
        if (isNewCSS) {
            // - Create the new Stylesheet head + classnames
            VARS.cssID = generateRandomString().toUpperCase();
            styleEl = document.createElement('style');
            styleEl.setAttribute('type', 'text/css');
            styleEl.setAttribute('id', VARS.cssID);
            head = document.getElementsByTagName('head')[0];
            head.appendChild(styleEl);

            // - remember <element> attribute names (for other functions to use)
            VARS.cssHide = generateRandomString(); // - the parent element - hides the nth level down element
            VARS.cssHideEl = generateRandomString(); // - the element to hide - where there's no child element
            VARS.cssHideNumberOfShares = generateRandomString(); // - hide "# shares" on posts.
            VARS.cssShow = generateRandomString(); // - for revealing hidden elements.
        }
        VARS.tempStyleSheetCode = ''; // reset temp CSS code.

        // -- override random class names - for testing purposes only.
        // VARS.cssHide = 'cmfr-hide';
        // VARS.cssHideEl = 'cmfr-hide-element';
        // VARS.cssHideNumberOfShares = 'cmfr-hide-shares';

        // -- **** fix fb's bug in not "hiding" certain elements properly when scrolling
        addToSS('body > div[style*="position: absolute"], ' +
            'body > div[style*="position:absolute"]',
            'top: -1000000px !important;'
        );

        // - insert Styles (as classes)
        // - NF/GF/VF
        // -- remove margins
        addToSS(
            `[${VARS.cssHide}],` +
            `[${VARS.cssHideEl}]`,
            'margin:0 !important;'
        );

        // -- post wrapper (mainly for news, groups and video feeds posts)
        classes = `[${VARS.cssHide}] > div:not([${postAttTab}]) > div,`;
        classes += `[${VARS.cssHide}] > span,`;
        // -- non n/f & g/f wrappers (mainly for marketplace posts + some aside boxes)
        classes += `[${VARS.cssHideEl}]`;
        // -- which styles to apply?
        // --- (display:block is for those span tags being a nth-of-child element.)
        styles = 'display:none !important;';
        addToSS(classes, styles);

        // -- # shares
        addToSS(
            `[${VARS.cssHideNumberOfShares}]`,
            'display:none !important;'
        );

        // - toggle post state :: <toggle button> x posts hidden
        addToSS(
            `div[${postAttTab}]`,
            'display:flex; margin:1.5rem auto; padding:0.5rem 1rem 0.5rem 0; border-radius:0.55rem; width:85%; font-style:italic; cursor:pointer;' +
            ((VARS.Options.VERBOSITY_MESSAGE_COLOUR === '') ? '' : `  color: ${VARS.Options.VERBOSITY_MESSAGE_COLOUR}; `) +
            `background-color:${(VARS.Options.VERBOSITY_MESSSAGE_BG_COLOUR === '') ? KeyWords.VERBOSITY_MESSAGE_BG_COLOUR.defaultValue : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR};`
        );
        // - echo msg flex boxes
        addToSS(
            `div[${postAttTab}] > div`,
            'display:flex; align-items: center;'
        );
        // - echo msg's button
        addToSS(
            `div[${postAttTab}] > div.wbtn`,
            'flex:0 0 3rem; justify-content: center;'
        );
        // - echo msg's text
        addToSS(
            `div[${postAttTab}] > div.wtxt`,
            'flex:1;'
        );
        // - echo msg hover
        addToSS(
            `div[${postAttTab}]:hover`,
            'text-decoration: underline; background-color:white; color:black;'
        );
        addToSS(
            `div[${postAttTab}] button:hover`,
            'cursor:pointer;'
        );
        // - echo msg's button's default state
        addToSS(
            `div[${postAttTab}] > div.wbtn > button`,
            'transform: rotate(180deg);transition: transform 0.15s linear;'
        );
        // - flagged post's mini-tab
        addToSS(
            `h6[${postAttTab}]`,
            'border-radius: 0.55rem 0.55rem 0 0; width:75%; margin:0 auto; padding: 0.45rem 0.25rem; font-style:italic; text-align:center; font-weight:normal;' +
            ((VARS.Options.VERBOSITY_MESSAGE_COLOUR === '') ? '' : `  color: ${VARS.Options.VERBOSITY_MESSAGE_COLOUR}; `) +
            `background-color:${(VARS.Options.VERBOSITY_MESSSAGE_BG_COLOUR === '') ? KeyWords.VERBOSITY_MESSAGE_BG_COLOUR.defaultValue : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR}; `
        );

        // - 'show' - reveal a hidden post (except for mp)
        addToSS(
            `[${VARS.cssShow}]:not([${VARS.cssHideEl}]) > div:not([${postAttTab}]) > div, ` +
            `[${VARS.cssHideNumberOfShares}][${VARS.cssShow}]`,
            'display:block !important; ' +
            `border:3px dotted ${VARS.Options.CMF_BORDER_COLOUR} !important; border-radius:8px; padding:0.2rem 0.1rem 0.1rem 0.1rem;` // 4px
        );
        // - echo msg show state
        addToSS(
            `[${VARS.cssShow}] > div[${postAttTab}]`,
            'margin-top:0.5rem; margin-bottom:0.5rem;'
        );
        // - echo msg's button show state
        addToSS(
            `[${VARS.cssShow}] > div[${postAttTab}] > div.wbtn > button`,
            'transform: rotate(360deg);transition: transform 0.15s linear;'
        );
        // - non-standard post's show state (mp)
        addToSS(
            `[${VARS.cssHideEl}][${VARS.cssShow}] `,
            `display: block !important; border:3px dotted ${VARS.Options.CMF_BORDER_COLOUR} !important; border-radius:8px; padding:0.1rem;` // 4px
        );
        // - dailog box CSS
        // --- dialog box; position + flex
        let bColour = (VARS.Options.CMF_BORDER_COLOUR === '') ? KeyWords.CMF_BORDER_COLOUR.defaultValue : VARS.Options.CMF_BORDER_COLOUR;
        let tColour = ((VARS.Options.CMF_DIALOG_COLOUR === '') || (VARS.Options.CMF_DIALOG_COLOUR === undefined)) ? 'var(--primary-text)' : VARS.Options.CMF_DIALOG_COLOUR;
        // - left / right done in fn addExtraCSS()
        addToSS(
            '.fb-cmf ',
            'position:fixed; top:0.15rem; bottom:0.15rem; display:flex; flex-direction:column; max-width:30rem; padding:0 1rem; z-index:5;' +
            `border:2px solid ${bColour}; border-radius:1rem; opacity:0; color:${tColour}; visibility:hidden;`
        );
        if ((VARS.Options.CMF_DIALOG_BG_COLOUR === '') || (VARS.Options.CMF_DIALOG_BG_COLOUR === undefined)) {
            addToSS('.__fb-light-mode .fb-cmf', 'background-color:#fefefa;');
            addToSS('.__fb-dark-mode .fb-cmf', 'background-color:var(--web-wash);');
            addToSS('.fb-cmf', 'background-color:floralwhite;'); // -- fall back colour.
        }
        else {
            addToSS('.fb-cmf', `background-color:${VARS.Options.CMF_DIALOG_BG_COLOUR};`);
        }
        // -- header
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
            `    flex:1; overflow:auto; border:2px double ${bColour}; border-radius:0.5rem; color: var(--primary-text);`
        );
        addToSS(
            '.fb-cmf fieldset',
            'margin:0.5rem; padding:0.5rem; border-color:LightGrey;'
        );
        addToSS(
            '.fb-cmf fieldset legend',
            'font-weight:700;'
        );
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
        )
        addToSS(
            '.fb-cmf fieldset textarea',
            'width:100%; height:12rem;'
        );
        addToSS(
            '.__fb-dark-mode .fb-cmf fieldset textarea,' +
            '.__fb-dark-mode .fb-cmf fieldset input[type="input"]',
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
            `.fb-cmf[${VARS.cssShow}]`,
            'opacity:1; transform:scale(1); visibility:visible;'
        );
        // -- new window icon
        addToSS(
            '.link-new',
            'width: 1rem; height: 1rem;'
        );
        // 'width: 1rem; height: 1rem; margin-left: 0.2rem; margin-right: 0.2rem;'
        addToSS(
            '.link-new a',
            'width: 1rem; position: relative; display: inline-block;'
        );
        addToSS(
            '.link-new svg',
            'position: absolute; top: -13.5px; stroke: rgb(101, 103, 107);'
        );

        // - save & apply the CSS
        styleEl.appendChild(document.createTextNode(VARS.tempStyleSheetCode));
        VARS.tempStyleSheetCode = '';
    }

    function addExtraCSS() {
        // - extra CSS styles
        // - fb can sometimes be a bit slow in loading certain parts of the site ...
        // - ... this function is called several ms later ...
        // - ... and when saving the options (via save button)
        let cmfBtnLocation = KeyWords.CMF_BTN_OPTION.defaultValue;
        let cmfDlgLocation = KeyWords.CMF_DIALOG_OPTION.defaultValue
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
        let styleEl = document.getElementById(VARS.cssID);
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
            addToSS(`.fb-cmf-toggle[${VARS.cssShow}]`, 'display:block;');
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
            styleEl.appendChild(document.createTextNode(VARS.tempStyleSheetCode));
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
        if (
            (!VARS.Options.hasOwnProperty('CMF_DIALOG_COLOUR')) ||
            (VARS.Options.CMF_DIALOG_COLOUR.toString() === undefined)
        ) {
            VARS.Options.CMF_DIALOG_COLOUR = KeyWords.CMF_DIALOG_COLOUR.defaultValue;
            changed = true;
        }
        if (
            (!VARS.Options.hasOwnProperty('CMF_DIALOG_BG_COLOUR')) ||
            (VARS.Options.CMF_DIALOG_BG_COLOUR.toString() === undefined)
        ) {
            VARS.Options.CMF_DIALOG_BG_COLOUR = KeyWords.CMF_DIALOG_BG_COLOUR.defaultValue;
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

        // -- final list of text for each feed
        let nfBlockedTextList = '';
        let gfBlockedTextList = '';
        let vfBlockedTextList = '';
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

        // -- market place (stand-alone)
        if (VARS.Options.MP_BLOCKED_ENABLED) {
            mpBlockedTextList = mpBlockedText;
            mpBlockedTextDescList = mpBlockedTextDesc;
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
            else if (['NF_SPONSORED', 'GF_SPONSORED', 'VF_SPONSORED', 'MP_SPONSORED'].indexOf(cbName) >= 0) {
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
            };
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

        function createDialog() {
            let dlg, hdr, hdr1, hdr2, hdr3, htxt, stxt, btn, cnt, fs, l, s, ta, div, footer;

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
            htxt = document.createElement('div');
            htxt.textContent = KeyWords.DLG_TITLE['en'];
            s = document.createElement('small');
            s.className = 'script-version';
            s.appendChild(document.createTextNode(` (${SCRIPT_VERSION})`));
            htxt.appendChild(s);
            hdr2.appendChild(htxt);
            if (VARS.language !== 'en') {
                stxt = document.createElement('small');
                stxt.textContent = `(${KeyWords.DLG_TITLE[VARS.language]})`;
                hdr2.appendChild(stxt);
                hdr2.classList.add('fb-cmf-lang-2');
            }
            else {
                hdr2.classList.add('fb-cmf-lang-1')
            }
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

            // -- News Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_NF[VARS.language];
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
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[VARS.language] + ":";
            fs.appendChild(l);

            createMultipeCBs('NF_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('NF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'NF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.NF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- Groups Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_GF[VARS.language];
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
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[VARS.language] + ':';
            fs.appendChild(l);

            createMultipeCBs('GF_BLOCKED_FEED', 1).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('GF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'GF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.GF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- Watch Videos Feed options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VF[VARS.language];
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
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[VARS.language] + ':';
            fs.appendChild(l);

            createMultipeCBs('VF_BLOCKED_FEED', 2).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('VF_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'VF_BLOCKED_TEXT';
            ta.textContent = VARS.Options.VF_BLOCKED_TEXT.split(VARS.SEP).join('\n');
            fs.appendChild(ta);
            cnt.appendChild(fs);

            // -- MarketPlace option(s)
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_MP[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createSingleCB('MP_SPONSORED', false)); // -- changed to false (Dec 2023)

            // -- Keywords to block - Marketplace Feed
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[VARS.language] + ':';
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
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
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
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'MP_BLOCKED_TEXT_DESCRIPTION';
            ta.textContent = VARS.Options.MP_BLOCKED_TEXT_DESCRIPTION.split(VARS.SEP).join('\n');
            fs.appendChild(ta);

            cnt.appendChild(fs);

            // -- Other items options
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_OTHER[VARS.language];
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
            l.textContent = KeyWords.REELS_TITLE[VARS.language];
            fs.appendChild(l);
            fs.appendChild(createSingleCB('REELS_CONTROLS'), false);
            cnt.appendChild(fs);

            // -- Verbosity
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.DLG_VERBOSITY[VARS.language];
            fs.appendChild(l);
            s = document.createElement('span');
            s.appendChild(document.createTextNode(`${KeyWords.DLG_VERBOSITY_MESSAGE[VARS.language]}:`));
            fs.appendChild(s);
            fs.appendChild(createRB('VERBOSITY_LEVEL', '0', `<${KeyWords.VERBOSITY_NO_MESSAGE[VARS.language]}>`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '1', `${KeyWords.VERBOSITY_MESSAGE[VARS.language][0]}______`));
            fs.appendChild(createRB('VERBOSITY_LEVEL', '2', `7${KeyWords.VERBOSITY_MESSAGE[VARS.language][1]}`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('VERBOSITY_MESSAGE_COLOUR', `${KeyWords.VERBOSITY_MESSAGE_COLOUR[VARS.language]}:`));
            fs.appendChild(createInput('VERBOSITY_MESSAGE_BG_COLOUR', `${KeyWords.VERBOSITY_MESSAGE_BG_COLOUR[VARS.language]}:`));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createSingleCB('VERBOSITY_DEBUG'));
            cnt.appendChild(fs);

            // -- cmf customisations
            fs = document.createElement('fieldset');
            l = document.createElement('legend');
            l.textContent = KeyWords.CMF_CUSTOMISATIONS[VARS.language];
            fs.appendChild(l);
            fs.appendChild(document.createTextNode(`${KeyWords.CMF_BTN_LOCATION[VARS.language]}:`));
            let len = KeyWords.CMF_BTN_OPTION[VARS.language].length;
            for (let i = 0; i < len; i++) {
                fs.appendChild(createRB('CMF_BTN_OPTION', i.toString(), KeyWords.CMF_BTN_OPTION[VARS.language][i]));
            };
            fs.appendChild(document.createElement('br'));
            fs.appendChild(document.createTextNode(`${KeyWords.CMF_DIALOG_LOCATION[VARS.language]}:`));
            fs.appendChild(createRB('CMF_DIALOG_OPTION', '0', KeyWords.CMF_DIALOG_OPTION[VARS.language][0]));
            fs.appendChild(createRB('CMF_DIALOG_OPTION', '1', KeyWords.CMF_DIALOG_OPTION[VARS.language][1]));
            fs.appendChild(document.createElement('br'));
            fs.appendChild(createInput('CMF_BORDER_COLOUR', `${KeyWords.CMF_BORDER_COLOUR[VARS.language]}:`));
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

            // -- Actions (buttons) + status
            footer = document.createElement('footer');
            // footer.classList.add('buttons');
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][0]; // save
            btn.addEventListener('click', saveUserOptions, false);
            footer.appendChild(btn);
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][1]; // close
            btn.addEventListener('click', toggleDialog, false);
            footer.appendChild(btn);
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][2]; // export
            btn.addEventListener('click', exportUserOptions, false);
            footer.appendChild(btn);
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][3]; // import
            btn.setAttribute('id', 'BTNImport');
            footer.appendChild(btn);
            btn = document.createElement('button');
            btn.textContent = KeyWords.DLG_BUTTONS[VARS.language][4]; // reset
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
                fileInput.click()
            }, false);
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
            }
        }

        async function saveUserOptions(event, source = 'dialog') {
            // -- save Options in indexeddb as JSON.
            if (source === 'dialog') {
                let md, cbs, rbs, tas, inputs;

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
            }

            // -- clear out items that are not valid.
            let md = document.getElementById('fbcmf');
            let inputs = Array.from(md.querySelectorAll('input:not([type="file"]), textarea'));
            let validNames = [];
            inputs.forEach(inp => {
                if (validNames.indexOf(inp.name) < 0) {
                    validNames.push(inp.name);
                }
            });
            for (let key in VARS.Options) {
                if (validNames.indexOf(key) < 0) {
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
                setFeedSettings(true);
                // - rebuild css - need user's preferences to take effect
                addCSS();
                addExtraCSS();
                // - check if toggling debugging mode.
                toggleHiddenElements();
            }
            document.querySelector('#fbcmf .fileResults').textContent = `Last Saved @ ${(new Date).toTimeString().slice(0, 8)}`;

            // -- reset the posts and do the cleaning/mopping up again ...
            if (VARS.isAF) {
                // -- "reset" scan counts
                VARS.scanCountStart += 100;
                VARS.scanCountMaxLoop += 100;
                // -- "purge" toggle post state bar + post-tab
                let elements = document.querySelectorAll(`[${postAttTab}]`);
                for (const element of elements) {
                    const elParent = element.parentElement;
                    elParent.removeChild(element);
                }
                // -- remove attribute
                elements = document.querySelectorAll(`[${postAtt}]`);
                for (const element of elements) {
                    element.removeAttribute(postAtt);
                    element.removeAttribute(VARS.cssHide);
                    element.removeAttribute(VARS.cssHideEl);
                    element.removeAttribute(VARS.cssHideNumberOfShares);
                    element.removeAttribute(VARS.cssShow);

                    // -- February 2024 - hot fix !!! - remove the collapse post completely hack
                    const elWithMargin = climbUpTheTree(element, 4);
                    if (elWithMargin && elWithMargin.hasAttribute('style')) {
                        elWithMargin.removeAttribute('style');
                    }
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
                elements = document.querySelectorAll(`[${VARS.cssHide}], [${VARS.cssHideEl}], [${VARS.cssHideNumberOfShares}]`);
                for (const element of elements) {
                    element.removeAttribute(VARS.cssHide);
                    element.removeAttribute(VARS.cssHideEl);
                    element.removeAttribute(VARS.cssHideNumberOfShares);
                    element.removeAttribute(VARS.cssShow);
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
            }
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

        createToggleButton();
        createDialog();
    }
    // --- end of dailog code.

    // -- toggleDialog() function placed here to allow a GM.registerMenuCommand(...) to call it.
    function toggleDialog() {
        const elDialog = document.getElementById('fbcmf');
        if (elDialog.hasAttribute(VARS.cssShow)) {
            elDialog.removeAttribute(VARS.cssShow);
        }
        else {
            elDialog.setAttribute(VARS.cssShow, '');
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
                    VARS.gfType = 'groups'
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
                VARS.isRF = (VARS.Options.REELS_CONTROLS === true);
            }

            VARS.isAF = (VARS.isNF || VARS.isGF || VARS.isVF || VARS.isMF || VARS.isSF || VARS.isRF);

            // when to display the cmf button
            if (VARS.isAF) {
                if (VARS.btnToggleEl) {
                    VARS.btnToggleEl.setAttribute(VARS.cssShow, '');
                }
            }
            else {
                if (VARS.btnToggleEl) {
                    VARS.btnToggleEl.removeAttribute(VARS.cssShow);
                }
            }

            // - reset consecutive count of hidden posts
            VARS.echoCount = 0;

            // console.info(`${log}setFeedSettings() :: isAF: ${VARS.isAF}; isNF: ${VARS.isNF}; isGF: ${VARS.isGF}; isVF: ${VARS.isVF}; isMF: ${VARS.isMF}; isSF: ${VARS.isSF}; isRF: ${VARS.isRF};`);

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

                // if (elParentTN === 'div' && elParent.hasAttribute('role') && elParent.getAttribute('role') === 'button') {
                //     // -- skip this node
                //     continue;
                // }
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

                // const elGeneric = elParent.closest('div[role="button"]');
                // if (elGeneric === null && val.length > 1) {
                //     // - keep 2+ char strings.
                //     arrayTextValues.push(...val.split('\n'));
                // }
                // else {
                //     // -- skip this node (hidden / meta info)
                // }

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

    function extractTextContentVF(post, selector, whichBlock) {
        // - get the text node values of the regular feed posts
        // -- scan a certain block in the posts
        // -- parameters:
        //    post: post to scan
        //    selector: querySelector's query
        //    whichBlock: the block to scan for text (0 = first block ...)
        const blocks = post.querySelectorAll(selector);
        const arrayTextValues = [];
        if ((blocks.length - 1) >= whichBlock) {
            // - block 0 = Suggested headings, block 1 = title/heading, block 2 = content, block 3 = info box / comments, block 4 = comments
            // - nb: some suggested posts only have one block ...
            let blockToScan = blocks[whichBlock];
            if (blockToScan.innerHTML.length > 0) {
                arrayTextValues = arrayTextValues.concat(scanTreeForText(blockToScan));
            }
        }
        return arrayTextValues;
    }

    function createTogglePostStateBar(reason) {
        // :: <toggle button> <reason for hiding post(s)>
        const elToggleBar = document.createElement('div');
        elToggleBar.setAttribute(postAttTab, '0');

        const elButtonBox = document.createElement('div');
        elButtonBox.className = 'wbtn';

        const elButton = document.createElement('button');
        elButton.textContent = '___';
        elButton.addEventListener('click', togglePost, false);
        elButtonBox.appendChild(elButton);

        const elTextReason = document.createElement('div');
        elTextReason.className = 'wtxt';
        elTextReason.textContent = KeyWords.VERBOSITY_MESSAGE[VARS.language][0] + reason;

        elToggleBar.appendChild(elButtonBox);
        elToggleBar.appendChild(elTextReason);

        elToggleBar.addEventListener('click', togglePost, false);
        return elToggleBar;
    }

    function createPostTab(reason) {
        const elTab = document.createElement('h6');
        elTab.setAttribute(postAttTab, '0');
        elTab.textContent = reason;
        return elTab;
    }

    function sanitizeReason(reason) {
        // -- setting an attribute, so remove double quotes from reason's text.
        return reason.replaceAll('"', '');
    }

    function hideFeature(post, reason, addPostTab = false) {
        // -- hide something - keep it out of the regular feed stuff.
        // -- no counter

        if ((parseInt(VARS.Options.VERBOSITY_LEVEL, 10) > 0) && (reason !== '')) {
            // -- add info tab
            const elPostToggleStateBar = createTogglePostStateBar(reason);
            let postFirstChild = post.querySelector(':scope > :first-child');
            if (postFirstChild) {
                postFirstChild.before(elPostToggleStateBar);
            }
        }

        post.setAttribute(VARS.cssHide, '');
        post.setAttribute(postAtt, sanitizeReason(reason));

        if (addPostTab === true) {
            // - add mini-tab to indicate why post is hidden
            const elTabSpot = post.querySelector(`:scope > div:not([${postAttTab}]) > div > div > div:first-child`);
            if (elTabSpot) {
                elTabSpot.before(createPostTab(reason));
            }
        }

        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            post.setAttribute(VARS.cssShow, '');
        }
    }

    function toggleHiddenElements() {
        const containers = Array.from(document.querySelectorAll('[' + VARS.cssHide + ']'));
        const blocks = Array.from(document.querySelectorAll('[' + VARS.cssHideEl + ']'));
        const shares = Array.from(document.querySelectorAll('[' + VARS.cssHideNumberOfShares + ']'));

        const elements = [...containers, ...blocks, ...shares];

        if (VARS.Options.VERBOSITY_DEBUG) {
            for (const element of elements) {
                element.setAttribute(VARS.cssShow, '');
            }
        }
        else {
            for (const element of elements) {
                element.removeAttribute(VARS.cssShow);
            }
        }
    }

    function togglePost(ev) {
        ev.stopPropagation();
        // -- grab the toggle post state bar container
        const elToggleBarContainer = ev.target.closest(`div[${postAttTab}]`);
        // -- grab the post
        const elPost = elToggleBarContainer.parentElement;
        // -- then toggle the VARS.cssShow attribute on the post.
        if (!elToggleBarContainer.hasAttribute(postAttCPID)) {
            // -- single post being hidden
            elPost.hasAttribute(VARS.cssShow) ? elPost.removeAttribute(VARS.cssShow) : elPost.setAttribute(VARS.cssShow, '');
        }
        else {
            // -- multiple consecutive posts being hidden
            const cpid = elToggleBarContainer.getAttribute(postAttCPID);
            const flaggedPosts = document.querySelectorAll(`[${postAtt}][${postAttCPID}=${cpid}]`);
            if (flaggedPosts.length > 0) {
                // -- cannot use classList.toggle() while posts are still being loaded ...
                if (elPost.hasAttribute(VARS.cssShow)) {
                    for (const flaggedPost of flaggedPosts) {
                        flaggedPost.removeAttribute(VARS.cssShow);
                    }
                }
                else {
                    for (const flaggedPost of flaggedPosts) {
                        flaggedPost.setAttribute(VARS.cssShow, '');
                    }
                }
            }
        }
    }

    function gvf_hidePost(post, reason) {
        // -- hide something ..
        // -- group feed
        // -- video feed
        // -- Verbosity_Level: 0 = hide; 1 = single info note; 2 = consecutive info notes

        // console.info(log + 'gvf_hidePost(); v_L:', VARS.Options.VERBOSITY_LEVEL, VARS.echoEl, VARS.echoCount, reason, post);

        if ((VARS.Options.VERBOSITY_LEVEL !== '0') && (reason !== '')) {
            // -- in info tab mode
            // -- nb: calling function will either zap or increment VARS.echoCount
            // --     they don't look at VARS.Options.VERBOSITY_LEVEL's value

            if ((VARS.Options.VERBOSITY_LEVEL === '1') || (VARS.isNF === true)) {
                // - single post level
                VARS.echoCount = 1;
            }

            if (VARS.echoCount < 2) {
                // - 1 post to be hidden (includes first of consecutive group)

                const postFirstChildEl = post.querySelector(':scope > :first-child');
                if (postFirstChildEl) {
                    VARS.echoEl = createTogglePostStateBar(reason);
                    postFirstChildEl.before(VARS.echoEl);
                }
                else {
                    // post has been changed while being processed (very rare)
                }
            }

            if ((VARS.Options.VERBOSITY_LEVEL === '2') && (VARS.isNF === false)) {

                if (VARS.echoCount < 2) {
                    // - first post in a possible consecutive collection.
                    // - CPID = consecutive post id
                    VARS.echoCPID = generateRandomString();
                    VARS.echoEl.setAttribute(postAttCPID, VARS.echoCPID);
                }
                else {
                    // - 2+ consecutive posts hidden
                    VARS.echoEl.querySelector('.wtxt').textContent = VARS.echoCount + KeyWords.VERBOSITY_MESSAGE[VARS.language][1];
                }

                // - consecutive posts level - flag it as part of a consecutive group
                post.setAttribute(postAttCPID, VARS.echoCPID);

                // - add a tab (indicates why post is hidden)
                const elTabSpot = post.querySelector(`:scope > div:not([${postAttTab}]) > div > div > div:first-child`);
                if (elTabSpot) {
                    elTabSpot.before(createPostTab(reason));
                }
            }
        }

        // - flag & hide the post
        post.setAttribute(VARS.cssHide, '');
        post.setAttribute(postAtt, sanitizeReason(reason));

        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            post.setAttribute(VARS.cssShow, '');
        }

        //console.info(log+'gvf_hidePost():', VARS.echoElFirst);
    }

    function nf_hidePost(post, reason) {
        // -- hide something ..
        // -- news feed + search feed
        // -- no consecutive counts.
        // -- Verbosity_Level: 0 = hide; 1|2 = single info note; (no consecutive mode)

        // console.info(log + 'nf_hidePost(); v_L:', VARS.Options.VERBOSITY_LEVEL, VARS.echoEl, VARS.echoCount, reason, post);

        // -- February 2024 - hit fix !!! - disabled.
        /*
        if ((VARS.Options.VERBOSITY_LEVEL !== '0') && (reason !== '')) {
            // -- in message/info tab mode
            // -- code 2 is switched to code 1.
            // -- VARS.echoCount is ignored.

            const postFirstChildEl = post.querySelector(':scope > :first-child');
            if (postFirstChildEl) {
                const elMessageTab = createTogglePostStateBar(reason);
                postFirstChildEl.before(elMessageTab);
            }
            else {
                // post has been changed while being processed (very rare)
            }
        }
        */

        // - flag & hide the post
        post.setAttribute(VARS.cssHide, '');
        post.setAttribute(postAtt, sanitizeReason(reason));

        // -- February 2024 - hot fix !!! - collapse post completely
        const elWithMargin = climbUpTheTree(post, 4);
        elWithMargin.setAttribute('style', 'margin:0 !important;');

        // -- February 2024 - hot fix !!! - disabled
        /*
        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            post.setAttribute(VARS.cssShow, '');
        }
        */

        //console.info(log+'nf_hidePost():', VARS.echoElFirst);
    }


    function nf_dropTags(post) {
        // -- remove cmf's attributes/classes from empty posts.
        // -- including tabs (if any)
        post.removeAttribute(postAtt);
        post.removeAttribute(VARS.cssHide);
        post.removeAttribute(VARS.cssHideEl);
        post.removeAttribute(VARS.cssShow);
        // -- other attribute(s)
        post.removeAttribute(postAttCPID);
        // -- remove the notification tab.
        if (post.querySelectorAll('div, h6').length > 0) {
            post.removeChild(post.firstElementChild);
        }

        // -- February 2024 - hot fix !!! - remove the collapse post completely hack
        const elWithMargin = climbUpTheTree(post, 4);
        if (elWithMargin && elWithMargin.hasAttribute('style')) {
            elWithMargin.removeAttribute('style');
        }

        post[postPropDS] = 1; // -- reset scanning count
    }

    function hideBlock(block, link, reason) {
        block.setAttribute(VARS.cssHideEl, '');
        link.setAttribute(postAtt, sanitizeReason(reason));
        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            block.setAttribute(VARS.cssShow, '');
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

            // -- May 2023 update (disabled - May 2023 #3 takes care of this fix)
            // elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] h4 span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            // if (elLinks.length === 0) {
            //     // -- try again, some users don't have the aria-posinet attribute.
            //     elLinks = Array.from(post.querySelectorAll(`div[aria-describedby] h4 span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            // }

            // -- March 2023 udpate (disabled - May 2023 takes care of March's fix.)
            // elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] h4 > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            // if (elLinks.length === 0) {
            //     // -- try again, some users don't have the aria-posinet attribute.
            //     elLinks = post.querySelectorAll(`div[aria-describedby] h4 > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`);
            // }

            // -- April 2023, possible sponsored video post in News Feed ("LIVE")
            // if (elLinks.length === 0) {
            //     elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] h4 > span > strong > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            //     if (elLinks.length === 0) {
            //         // -- try again, some users don't have the aria-posinet attribute.
            //         elLinks = post.querySelectorAll(`div[aria-describedby] h4 > span > strong > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`);
            //     }
            // }
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
                    };
                }
            }
        }
        // if (isSponsoredPost) console.info(log + 'isSponsored(); isSponsoredPost:', isSponsoredPost, post);
        return isSponsoredPost;
    }

    function querySelectorAllNoChildren(container = document, queries = [], minText = 0, executeAllQueries = false) {
        // -- nb: .querySelectorAll(..) can have multiple queries and will execute them all (regardless of results)
        if (!Array.isArray(queries)) {
            queries = [queries];
        }

        if (queries.length === 0) {
            return [];
        };

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
        // for (const value of valuesToFind) {
        //     if (longText.includes(value)) {
        //         return value;
        //     }
        // }
        // return '';
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
        // -- some users don't have [aria-posinset], hence [aria-describedby]
        let blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div';
        let blocks = post.querySelectorAll(blocksQuery);
        if (blocks.length <= 1) {
            // -- try again .. (December 2022 change)
            // -- no need to do another querySelectorAll(..) - extractTextContent will do this.
            blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div > div';
        }
        const postTexts = (extractTextContent(post, blocksQuery, 3)).join(' ').toLowerCase();
        const blockedText = findFirstMatch(postTexts, VARS.Filters.NF_BLOCKED_TEXT_LC);
        return blockedText;
    }

    function gf_isBlockedText(post) {
        // - check for blocked text - partial text match
        // -- groups feed post's blocks (have 1-4 blocks)
        // -- scan first 3 blocks
        // -- some users don't have [aria-posinset], hence [aria-describedby]
        let blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div';
        let blocks = post.querySelectorAll(blocksQuery);
        if (blocks.length <= 1) {
            // try again .. (Dec 2022 change)
            // -- no need to do another querySelectorAll(..) - extractTextContent will do this.
            blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div > div';
        }
        const postTexts = (extractTextContent(post, blocksQuery, 3)).join(' ').toLowerCase();
        const blockedText = findFirstMatch(postTexts, VARS.Filters.GF_BLOCKED_TEXT_LC);
        return blockedText;
    }

    function vf_isBlockedText(post, queryBlocks) {
        // - check for blocked text - partial text match
        // -- regular videos feed post's blocks (have 1-3 blocks)
        // -- scan 1st block only
        const postTexts = (extractTextContent(post, queryBlocks, 1)).join(' ').toLowerCase();
        const blockedText = findFirstMatch(postTexts, VARS.Filters.VF_BLOCKED_TEXT_LC);
        return blockedText;
    }

    function vf_isVideoLive(post) {
        // - check for "LIVE" indicator on videos
        const liveRule = 'div[role="presentation"] ~ div > div:nth-of-type(1) > span';
        const elLive = post.querySelectorAll(liveRule);
        return (elLive.length > 0) ? KeyWords.VF_LIVE[VARS.language] : '';
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
                    return blockedText
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
        const query = `div[style]:not([${postAtt}]) > div > div > span > div > div > a[href*="/marketplace/item/"]`;
        const items = document.querySelectorAll(query);
        for (const item of items) {
            // - item's container
            const box = item.closest('div[style]');
            if (box.hasAttribute(postAttMPSkip)) {
                if (box.innerHTML.length == box.getAttribute(postAttMPSkip)) {
                    continue;
                }
            }
            // - blocks of text to scan
            const queryTextBlock = ':scope > div > div:nth-of-type(2) > div'
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
        };
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
        // const query = `:scope > div > div > div > div > div:nth-of-type(2) > div`;
        // const blocks = post.querySelectorAll(query);
        // if (blocks.length > 3) {
        //     const block = blocks[2]; // -- 3rd block
        //     const isJunk = block.querySelector(`:scope > div > div > div > div > div > div > span > a:not([${postAtt}])`);
        //     if (isJunk !== null) {
        //         hideBlock(block, isJunk, KeyWords.SPONSORED[VARS.language]);
        //     }
        // }
    }

    function swatTheMosquitos(post) {
        // - scan the post for any gifs that is animating (pausing them once)
        // :: return <nothing>
        const query = `div[role="button"][aria-label*="GIF"]:not([${postAtt}]) > i:not([data-visualcompletion])`;
        const animatedGIFs = post.querySelectorAll(query);
        // console.info('pausing, animatedGIFs::', animatedGIFs);
        for (const gif of animatedGIFs) {
            // mimic user clicking on animating gif
            // - which will trigger fb's click event.
            // - grab the A tag that is displayed when paused (uses Opacity)
            const parent = climbUpTheTree(gif, 3);
            const sibling = parent.querySelector(':scope > a');
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
                    hideFeature(elParent, (KeyWords.NF_TABLIST_STORIES_REELS_ROOMS[VARS.language]).replaceAll('"', ''), false);
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

            function getStoriesParent(element) {
                const elAFewBranchesUp = climbUpTheTree(element, 4);
                const moreStories = elAFewBranchesUp.querySelectorAll('a[href*="/stories/"]');
                let elParent = null;
                if (moreStories.length > 1) {
                    // -- query results has create and at least 1 story link
                    elParent = climbUpTheTree(elCreateStory.closest('div[aria-label][role="region"]'), 4);
                }
                else {
                    // -- query results has one link - create story
                    elParent = climbUpTheTree(elCreateStory, 7);
                }
                return elParent;
            }

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
                    hideFeature(elParent, KeyWords.NF_TABLIST_STORIES_REELS_ROOMS[VARS.language], false);
                    elCreateStory.setAttribute(postAttChildFlag, '1');
                }
            }
        }
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
        // :: return <nothing>
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
            hideFeature(elItem, reason, true);
        }
    }

    function gf_cleanTheConsoleTable(findItem = 'Suggestions') {
        // -- mopping up the groups feed aside panel - suggested
        // :: return <nothing>
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

        try {
            if (post.hasAttribute('class')) {
                // -- not a group post.
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

                if (blockOfIcons && blockOfIcons.querySelector('.cmf-link-new') === null) {
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
                spanSpacer.innerHTML = '<span><span style="position:absolute;width:1px;height:1px;">&nbsp;</span><span aria-hidden="true"> · </span></span>'
                blockOfIcons.appendChild(spanSpacer);

                const container = document.createElement('span');
                container.className = 'link-new';
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
                share.setAttribute(VARS.cssShow, '');
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
        // - located in the container next to Stories / Reels / Rooms tablist

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
            // const surveyContainer = climbUpTheTree(surveyLink, 8);
            // const surveyContainer = climbUpTheTree(surveyLink, 7);
            // if (surveyContainer) {
            //     hideFeature(surveyContainer, 'Survey', false);
            // }
            hideFeature(elContainer, 'Survey', false);
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
            // -- February 2024 - hot fix !!! (no "extra" spaces in the feeds)
            // 'h3[dir="auto"] ~ div:not([class]) > div[class] > div > div > div > div',
            // 'h2[dir="auto"] ~ div:not([class]) > div[class] > div > div > div > div',

            // -- February 2024 - hot fix !!! (test)
            'h3[dir="auto"] ~ div:not([class]) > div[class] :is([aria-posinset],[aria-describedby]:not([aria-posinset]))',
            'h2[dir="auto"] ~ div:not([class]) > div[class] :is([aria-posinset],[aria-describedby]:not([aria-posinset]))',


            // -- February 2023 (promoted above Sept/August due to no hard-coded class names.
            'h3[dir="auto"] ~ div:not([class]) > div[class]',
            'h2[dir="auto"] ~ div:not([class]) > div[class]',
            // -- September 2023
            // -- - home news feed
            'h3[dir="auto"] + div > div.x1lliihq',
            // -- - recent news feed
            'h2[dir="auto"] + div > div.x1lliihq',
            // -- July 2023 - fb tweaked the structure - random div levels.
            // -- - home news feed
            'h3[dir="auto"] ~ div > div > div div.x1yztbdb:not([role])',
            // -- - recent news feed
            'h2[dir="auto"] ~ div > div > div div.x1yztbdb:not([role])',
        ]

        for (const query of queries) {
            const nodeList = document.querySelectorAll(query);
            if (nodeList.length > 0) {
                posts = Array.from(nodeList);
                break;
            }
        }

        return posts;
    }

    function mopUpTheNewsFeed() {
        // -- mopping up the news feed page

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

        if (posts.length > 0) {
            // console.info(log+'---> mopUpTheNewsFeed()');
            // -- fb clears out "older" posts as the user scrolls ... so, only process the last X posts.
            const count = posts.length;
            const start = (count < 50) ? 0 : (count - 50);

            // for (let post of posts) {
            for (let i = start; i < count; i++) {

                const post = posts[i];

                if (post.innerHTML.length === 0) {
                    if (post.hasAttribute(postAtt)) {
                        // -- fb is clearing out the posts as the user scrolls ...
                        nf_dropTags(post);
                    }
                }
                else {

                    let hideReason = '';

                    if (post.hasAttribute(postAtt)) {
                        // -- already flagged ...
                        hideReason = 'hidden';
                        // -- however, fb is clearing out the posts as the user scrolls ...
                        if (post.querySelector('a') === null) {
                            nf_dropTags(post);
                        }
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
                        if (hideReason === '' && VARS.Options.NF_BLOCKED_ENABLED) {
                            hideReason = nf_isBlockedText(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_STORIES) {
                            hideReason = nf_isStoriesPost(post);
                        }
                        // -- placed here due to "overlaps" between this rule and at least 1 of the above rule.
                        if (hideReason === '' && VARS.Options.NF_SPONSORED && isSponsored(post)) {
                            hideReason = KeyWords.SPONSORED[VARS.language];
                        }
                        if (hideReason === '' && VARS.Options.NF_LIKES_MAXIMUM && VARS.Options.NF_LIKES_MAXIMUM !== '') {
                            hideReason = nf_postExceedsLikeCount(post);
                        }
                    }

                    if (hideReason.length > 0) {
                        // -- increment hidden count
                        VARS.echoCount++;
                        if (hideReason !== 'hidden') {
                            // -- post not yet hidden, hide it.
                            nf_hidePost(post, hideReason);
                        }
                    }
                    else {
                        // -- not a hidden post
                        // -- reset hidden count
                        VARS.echoCount = 0;
                        // -- run pause animation (useful to hide those animated comments)
                        if (VARS.Options.NF_ANIMATED_GIFS) {
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
            // console.info(log+'<--- mopUpTheNewsFeed()');
        }
    }

    function mopUpTheGroupsFeed() {
        // -- mopping up the groups feed page

        // console.info(log+'mopUpTheGroupsFeed(), gfType:', VARS.gfType, '; hide an info box:', VARS.hideAnInfoBox);

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
            if (posts.length) {
                // console.info(log+'---> mopUpTheGroupsFeed() - multiple groups');
                for (const post of posts) {
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
                    }

                    if (hideReason.length > 0) {
                        // -- increment hidden count
                        VARS.echoCount++;
                        if (hideReason !== 'hidden') {
                            // -- post not yet hidden, hide it.
                            gvf_hidePost(post, hideReason)
                        }
                    }
                    else {
                        // -- not a hidden post
                        // -- reset hidden count
                        VARS.echoCount = 0;
                        // -- run pause animation (useful to hide those animated comments)
                        if (VARS.Options.GF_ANIMATED_GIFS) {
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
                // console.info(log+'<--- mopUpTheGroupsFeed() - multiple groups');
            }
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
                    }
                    else {
                        doLightDusting(post);

                        if (hideReason === '' && VARS.Options.GF_SHORT_REEL_VIDEO) {
                            hideReason = gf_isShortReelVideo(post);
                        }
                        if (hideReason === '' && VARS.Options.GF_BLOCKED_ENABLED) {
                            hideReason = gf_isBlockedText(post);
                        }
                    }

                    if (hideReason.length > 0) {
                        // -- increment hidden counter
                        VARS.echoCount++;
                        if (hideReason !== 'hidden') {
                            // -- post not yet hidden, hide it.
                            gvf_hidePost(post, hideReason)
                        }
                    }
                    else {
                        // -- not a hidden post
                        // -- reset hidden count
                        VARS.echoCount = 0;
                        // -- run pause animation (useful to hide those animated comments)
                        if (VARS.Options.GF_ANIMATED_GIFS) {
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
    }

    function mopUpTheWatchVideosFeed() {
        // -- mopping up the watch videos feed page

        let query;
        let queryBlocks;
        if (VARS.vfType === 'videos') {
            // -- normal feed
            query = 'div[id="watch_feed"] > div > div > div > div > div > div';
            //queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
            queryBlocks = ':scope > div > div > div > div > div > div:nth-of-type(2) > div';
        }
        else if (VARS.vfType === 'search') {
            // -- videos --> search
            query = 'div[role="feed"] > div[role="article"]';
            queryBlocks = ':scope > div > div > div > div > div > div > div:nth-of-type(2)';
        }
        else if (VARS.vfType === 'item') {
            // -- videos --> search --> item (videos being listed below the video of interest)
            // -- video - via link
            query = 'div[id="watch_feed"] > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div > div > div';
            queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
        }
        else {
            return;
        }

        if (VARS.vfType !== 'search') {
            const posts = document.querySelectorAll(query);
            for (const post of posts) {
                if (post.innerHTML.length === 0) {
                    continue;
                }

                let hideReason = '';

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
                    if (hideReason === '' && VARS.Options.VF_BLOCKED_ENABLED) {
                        hideReason = vf_isBlockedText(post, queryBlocks);
                    }
                    // console.info(log + 'mopUpTheWatchVideosFeed(); ::: hideReason:', hideReason, post, queryBlocks);
                }

                if (hideReason.length > 0) {
                    // -- increment hidden count
                    VARS.echoCount++;
                    if (hideReason !== 'hidden') {
                        // -- post not yet hidden, hide it.
                        gvf_hidePost(post, hideReason);
                    }
                }
                else {
                    // -- not a hidden post
                    // -- reset hidden count
                    VARS.echoCount = 0;
                    // -- run pause animation (useful to hide those animated comments)
                    if (VARS.Options.VF_ANIMATED_GIFS) {
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
                    // -- increment hidden count
                    VARS.echoCount++;
                    if (hideReason !== 'hidden') {
                        // -- post not yet hidden, hide it.
                        gvf_hidePost(post, hideReason);
                    }
                }
                else {
                    // -- not a hidden post
                    // -- reset hidden count
                    VARS.echoCount = 0;
                }
            }
        }
    }

    function mp_hideBox(box, reason) {
        box.setAttribute(VARS.cssHideEl, '');
        box.setAttribute(postAtt, sanitizeReason(reason));
        if (VARS.Options.VERBOSITY_DEBUG) {
            box.setAttribute(VARS.cssShow, '');
        }
    }

    function mp_stopTrackingDirtIntoMyHouse() {
        // -- remove tracking bits
        const collectionOfLinks = document.querySelectorAll('a[href*="/?ref="]');
        for (const trackingLink of collectionOfLinks) {
            trackingLink.href = trackingLink.href.split('/?ref')[0];
        }
    }

    function mopUpTheMarketplaceFeed() {
        // -- mopping up parts of the Marketplace ...

        mp_stopTrackingDirtIntoMyHouse();

        // console.info(log + 'mopUpTheMarketplaceFeed(); mpType:', VARS.mpType);

        if (VARS.mpType === 'marketplace' || VARS.mpType === 'item') {
            // - standard marketplace page
            // - on the item page, there's listing of items to sell ... (similar structure to standard marketplace page)
            // -- "sponsored" is _not_ obfuscated;
            // -- nb: adguard base filter hides the label, but not the item/product ...
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
                    let queryPattern = 'a[href*="/ads/"]';
                    let element = elDialog.querySelector(queryPattern);
                    if (element) {
                        if (element.hasAttribute(postAtt)) {
                            return;
                        }
                        // console.info(`${log}MPItem() - element:`, queryPattern1, element);
                        if (element.closest('div[data-pagelet^="BrowseFeedUpsell"]') === null) {
                            // -- found the sponsored box inside the mp item box.
                            // -- mp item do not have a parent element having data-pagelet attribute.
                            let elParent = element.parentElement.closest('h2');
                            if (elParent) {
                                elParent = elParent.closest('span');
                                mp_hideBox(elParent, KeyWords.SPONSORED[VARS.language]);
                                element.setAttribute(postAtt, KeyWords.SPONSORED[VARS.language]);
                            }
                        }
                    }
                    else {
                        // -- structure change, Nov 2023
                        // -- multiple sponsored items (slider style)
                        queryPattern = 'a[href*="//l.facebook.com/l.php?u="]';
                        const elements = elDialog.querySelectorAll(queryPattern);
                        if (elements.length > 0) {
                            element = elements[0];
                            if (element.hasAttribute(postAttChildFlag)) {
                                return;
                            }
                            if (element.href.length > 500) {
                                const elParent = climbUpTheTree(element, 9);
                                mp_hideBox(elParent, KeyWords.SPONSORED[VARS.language]);
                                element.setAttribute(postAttChildFlag, KeyWords.SPONSORED[VARS.language]);
                            }
                        }
                    }
                }
                else {
                    // -- viewing a mp item in a new tab / reloaded page.
                    let queryPattern = 'a[href*="/ads/"]';
                    let element = document.querySelector(queryPattern);
                    if (element) {
                        if (!element.hasAttribute(postAtt)) {
                            // -- found the sponsored box inside the mp item box.
                            let elParent = element.parentElement.closest('h2');
                            if (elParent) {
                                elParent = elParent.closest('span');
                                mp_hideBox(elParent, KeyWords.SPONSORED[VARS.language]);
                                element.setAttribute(postAtt, KeyWords.SPONSORED[VARS.language]);
                            }
                        }
                    }
                    else {
                        // -- structure change, Nov 2023
                        // -- multiple sponsored items (slider style)
                        queryPattern = 'a[href*="//l.facebook.com/l.php?u="]';
                        const elements = document.querySelectorAll(queryPattern);
                        if (elements.length > 0) {
                            element = elements[0];
                            if (element.hasAttribute(postAttChildFlag)) {
                                return;
                            }
                            if (element.href.length > 500) {
                                const elParent = climbUpTheTree(element, 9);
                                mp_hideBox(elParent, KeyWords.SPONSORED[VARS.language]);
                                element.setAttribute(postAttChildFlag, KeyWords.SPONSORED[VARS.language]);
                            }
                        }
                    }
                }
            }
        }
        else if ((VARS.mpType === 'category') || (VARS.mpType === 'search')) {
            // - viewing a markplace category or marketplace search results
            // - (both have similar layout)
            if (VARS.Options.MP_SPONSORED) {
                const query = `a[href*="/ads/"]:not([${postAtt}])`;
                const elements = document.querySelectorAll(query);
                for (const element of elements) {
                    // console.info(log + 'mp-clean:', element);
                    element.setAttribute(postAtt, element.innerHTML.length);
                    const itemBox = climbUpTheTree(element.parentElement.closest('a'), 3);
                    mp_hideBox(itemBox, KeyWords.SPONSORED[VARS.language]);
                }
            }
            if (VARS.Options.MP_BLOCKED_ENABLED) {
                mp_doBlockingByBlockedText();
            }
        }
    }

    function mopUpTheSearchFeed() {
        // mopping up the search feed / results
        // -- (nb: has similar layout to news feed stream)
        // -- "borrow" news feed's text filter.
        if (VARS.Options.NF_BLOCKED_ENABLED) {
            const query = 'div[role="feed"] > div';
            const posts = Array.from(document.querySelectorAll(query));

            for (const post of posts) {

                if (post.innerHTML.length === 0) {
                    continue;
                }

                let hideReason = '';

                if (post.hasAttribute(postAtt)) {
                    hideReason = 'hidden';
                }
                else {
                    if (VARS.Options.NF_SPONSORED && isSponsored(post)) {
                        hideReason = KeyWords.SPONSORED[VARS.language];
                    }
                    if (hideReason === '' && VARS.NF_BLOCKED_ENABLED) {
                        hideReason = nf_isBlockedText(post);
                    }
                }

                if (hideReason.length > 0) {
                    // -- increment hidden count
                    VARS.echoCount++;
                    if (hideReason !== 'hidden') {
                        // -- post not yet hidden, hide it.
                        nf_hidePost(post, hideReason);
                    }
                }
                else {
                    // -- not a hidden post
                    // -- reset hidden count
                    VARS.echoCount = 0;
                    // -- run pause animation (useful to hide those animated comments)
                    if (VARS.Options.NF_ANIMATED_GIFS) {
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
    }

    function mopUpTheReelFeed(caller) {
        // -- display the reel's video controls

        // -- bodyMutation will initially trigger this function to run, but sometimes misses out on a reel video ...
        // -- so, we use setTimeout() to make it run regularly until no longer in Reels.

        // -- saveUserOptions will also call this function ...

        // -- nb: videos from the watch videos feed are also collected in the query ..
        // -- .. but they do not have a container with [data-video-id] attribute
        // -- .. and therefore skipped ...

        // -- nb: setting VARS.isRF determines if this function is called or not.

        if (!VARS.isRF) {
            // -- no longer in Reels Feed
            VARS.isRF_InTimeoutMode = false;
            return;
        }
        if (caller !== 'self' && VARS.isRF_InTimeoutMode === true) {
            // -- either bodyMutation or saveUserOptions is calling and TimeoutMode is currently active.
            return;
        }

        const videoRules = 'video:not([controls])';
        const videos = document.querySelectorAll(videoRules);
        // console.info(log+'mopUpTheReelFeed(); videos:', caller, videos);
        for (const video of videos) {
            // -- get the video's container's child element
            const elVideoId = video.closest('[data-video-id]');
            if (elVideoId) {
                // -- get the video's container
                const videoContainer = elVideoId.parentElement;
                if (videoContainer) {
                    // -- get the video's description + audio track info container.
                    const descriptionOverlay = videoContainer.nextElementSibling;
                    if (descriptionOverlay) {
                        // -- make room to display the controls by moving the description element up a bit ...
                        const elDescriptionContainer = descriptionOverlay.children[0];
                        elDescriptionContainer.setAttribute('style', 'margin-bottom:2.15rem;');
                        // -- enable controls on the video
                        video.setAttribute('controls', 'true');
                        // -- hide the video's sibling (makes it easier to click on the video's controls)
                        const sibling = video.nextElementSibling;
                        if (sibling) {
                            sibling.setAttribute('style', 'display:none;');
                        }
                    }
                }
            }
            else {
                // -- a video from the watch videos feed
                // -- hidden underneath the reels feed overlay)
            }
        }

        // -- call me again in a few ms ...
        VARS.isRF_InTimeoutMode = true;
        setTimeout(function () {
            mopUpTheReelFeed('self')
        }, 1000);
    }


    // ** Mutations processor
    function bodyMutating(mutations) {
        for (const mutation of mutations) {
            if ((mutation.type === 'childList') && (mutation.addedNodes.length > 0)) {
                if (VARS.prevURL !== window.location.href) {
                    // - page url has changed ... refresh the bodyObserver.
                    runMO();
                }
                else if (VARS.isAF) {
                    // -- isAF := any feed
                    // -- nb: don't bother with looping through mutation.addedNodes.length - 99.5% of the time there's only one ...
                    const mnode = mutation.addedNodes[0]; // placed here for error trapping block
                    // try {
                    VARS.mutationsCount++;
                    // if (VARS.mutationsCount % 100 === 0) {
                    //     console.info(log+'bodyMutating(); mutationsCount:', VARS.mutationsCount);
                    // }
                    if (VARS.mutationsCount > VARS.mutationsInitSkip) {
                        if (['A', 'DIV', 'IMG', 'SPAN', '#text', 'svg', 'VIDEO'].indexOf(mnode.nodeName) > 0) {
                            if ((mnode.nodeType === Node.ELEMENT_NODE) && ((mnode.innerHTML.length < 129) || (mnode.textContent.length === 0))) {
                                // - skip these ...
                            }
                            else {
                                // console.info(log + 'bodyMutating();', VARS.isNF, VARS.isGF, VARS.isVF, VARS.isMF, VARS.isSF);
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
                                    mopUpTheReelFeed('mutations');
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    // ** Mutation Observer
    let bodyObserver = new MutationObserver(bodyMutating);
    // ** MO starter / restarter
    let firstRun = true;

    function runMO() {
        // -- run code soon as the elements HEAD, BDDY and variable Options are ready/available.
        // -- or when page url has changed ...
        if (document.head && document.body && VARS.optionsReady) {
            // console.info(log + 'runMO(); - ready ...');
            if (firstRun) {
                GM.registerMenuCommand(KeyWords.GM_MENU_SETTINGS[VARS.language], toggleDialog);
                addCSS();
                window.setTimeout(addExtraCSS, 150); // fb is sometimes laggy ...
                buildMoppingDialog();
                firstRun = false;
            }
            if (setFeedSettings()) {
                // - clear out mutations not yet processed ...
                let mutations = bodyObserver.takeRecords();
                bodyObserver.disconnect();
                // - and start up the osbserver again.
                bodyObserver.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: false
                });

                if (VARS.isRF) {
                    // -- mutations might not call mopUpTheReelFeed() when the URL changes, so call it now.
                    mopUpTheReelFeed('setFeedSettings');
                }
            }
        }
        else {
            // HEAD / BODY / Options not yet ready ...
            // console.info(log + 'runMO(); - not yet ready ...');
            setTimeout(runMO, 10);
        }
    }
    runMO();

})();
