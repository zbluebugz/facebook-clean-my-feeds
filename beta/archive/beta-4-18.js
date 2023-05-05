// ==UserScript==
// @name         FB - Clean my feeds
// @description  Hide Sponsored and Suggested posts in FB's News Feed, Groups Feed, Watch Videos Feed and Marketplace Feed
// @namespace    https://greasyfork.org/users/812551
// @supportURL   https://github.com/zbluebugz/facebook-clean-my-feeds/issues
// @version      4.18
// @author       zbluebugz (https://github.com/zbluebugz/)
// @match        https://*.facebook.com/*
// @noframes
// @grant        GM.registerMenuCommand
// @license      MIT; https://opensource.org/licenses/MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAanSURBVHic5ZtpjBVFEMd/u8vthsCi3OcGxQWBKJdEDEbuDypqNoGgxGgkWY8YDaIYFQ9MRCOJJ0Y80JhgVESiRpCVIAYIIAQPCEoQZCOIyuIB667IPj/8qzPzhveANzPvvX3LP5nMVHdPT1V3VVd1zQwUNroDK4A/gB3A1Pyyk1sUA18DCeBPoBH4FxiRT6ZyiXFI+C+AFsAdRj+TSSfF8fOVM0y281LgP+BwHnnJC75FM15u9BtGV+aNoxyiG7L5H3xlNUgTyjLpqFBNYDJQBKw0ejDQE9gC1GbSUaEOwCQ7r0pDN2sUA78CDUCpla1G9j86X0zlEqOQsJ8b3RaoQ6pfkmlnhWgCQXW/Ag1CNXAi086awwCcVfbfATgOHEReAGAXMone+WIql7geCbvE6F5G7wjbYaGZQFDdpwToZo99aKHrbPQypAGT0t3QnFCBhN1idAlyff8A7cJ2WkgmEFT/S4GOwDoUB4RCIQ3ARDt/ZudL7LwyRdtmhzbAMZT5aWll5wGzgfb5YiqXmIDsf3ncHReKCQTtfwDwGtA1P+zkHi7708/o142ekvaOZoQeKPvzva8sVPYnFQrBBCahuN+pf+jsTyoUygDAWbr7KwF+J4vZnxZxdJICFYQLTxvQzi5h9HCgE7AGOGp9jgGOAJujs5kd3IAECHvc7+vrYSubY/QUo9+Ni9lsrAG97LwN+NiuDwPvAVuN/s7oA0avBjbatdvpQYHa/1w0S1Xo7W0CT7hZRj9o9IdGX4yX7FhodTnJ/jRlLzAerVGrkNC9UAS4A9gf10Oa8gDkJPvTlAdgIooAXf4/K/YflxssBc5HA9rdynoDQ+z6HGAYnu12N7qD0RUo5AXoAlxtbb9Cb4FaAFeidFid3XschccNMckQGpXIR0dxfemO+faMy9LUH0RvikIjqga0QdvS1sBHQH3E/hzGo3RX0P1twlsAy9BXIq8AQ2N6bsa4CM1EnHaZKvuzyZ4zMNB2P1onWhISURdBp0Fx2uHlKORdg+y8E7L5GmBnoG09ihFCyxHVBH6280jgRsKbwGbgJ7sOrvbj0aaohuTPXzoCfYHfyPNC+CrRF7tdvv7SZX/SHfdEYb7o9E3OqI9K9JHidBTnf5JhH+vsXAE8DexGUV8Rmvmu6PO3BNK07sCzaK9RHY39+DAUMZip8AB3kzyrK5Dwg43e4Gu7By18baIwmw2UIWa/yfC+3iiOqAfeRsGO20AttutHrG2RtTsUnd3s4ChnlqfrjFT5MWA9EvIJqxuFIkC/Royzui5Gb6WJwm1XS9PUlyFbriNZwEa8V18gt1aF8ggJ5G3KUYYogbbRTRLViMGKFHW98AboLxTBzQJewhuEJWiWHc7Fyxk8ihbaBPBCVriPAe5z1QmB8g7Aj1a3DAnm0Bt98Oy04QhwJ/L9RXgmMsPKE8B9WZMgIh5HDN4cKH8e792e+5StL/IY6fz7duApu95m9y3AG4xYEHdWuMbOPX1lA4Bb0QJ5O1rlxyIfXorc2jIkJGjnNw251aHoDdBtdp/LN7rnNDm4rO1io8fiqb6L2AaiPzwSSGNap+hnttXvRKGww5dWXp7inryhGH28vAjvD46jaKFz6vwmnrY5tZ+Xoq9StBdwqv9+oH4vWixTDVpeMA5vZQ8etSjEnYYXco+wut0km18nZN/HAn34w9xi9EvML9kRJXPMRbORANYCM4E+QKs07VuhAUkAN/nKL0T7eqc5y/G8yQe+dt2sbAtNAC52/5tT/6FRhgSsxEtqbMWb/XKU80ugMNjFADM42d+PxPMkecUwpIp1nJyPKwKuRTPnojj/sZHkNz/uReeLJO9MX7bymb6y66zsuZjkCI2VxkhVoHwQml0nbB3a269GMzmVZCHddz970dfeDm1RMOQixlo73Ppwb6zSZIh+xsQekhexCXgMrgeu4tQr9RiU0U1YWz/m4Q1gre9osPLpUYWIgipj4klf2RDEbCPwAMn5ueHI17+FNKEaeQCnJQtJxnD05Wc9cEGg7lO7Z0wMcoSGy8q4ha8EL4U1x9duLMoLpHKPjSheCIazg9A+P4EW2SC2W13f6GKEh0tQuK2rW63X4tn3Ajz3uAFtYEYD/dGq77d3kMbcgvdyZVGaZx9C4XDoFHgcuAsxudQYcWrpdn/zjT4MXHOavvqj312dBp1AW95UecqWVn8gRV0kZJoUbY9Uuw+KAdohM9hHcia3FsX7qdAK+fvgTNaTXsBipPqbifgqLA70AN5B+fhTpavjPhqBh+IW5n827DI9G+eQwwAAAABJRU5ErkJggg==
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAanSURBVHic5ZtpjBVFEMd/u8vthsCi3OcGxQWBKJdEDEbuDypqNoGgxGgkWY8YDaIYFQ9MRCOJJ0Y80JhgVESiRpCVIAYIIAQPCEoQZCOIyuIB667IPj/8qzPzhveANzPvvX3LP5nMVHdPT1V3VVd1zQwUNroDK4A/gB3A1Pyyk1sUA18DCeBPoBH4FxiRT6ZyiXFI+C+AFsAdRj+TSSfF8fOVM0y281LgP+BwHnnJC75FM15u9BtGV+aNoxyiG7L5H3xlNUgTyjLpqFBNYDJQBKw0ejDQE9gC1GbSUaEOwCQ7r0pDN2sUA78CDUCpla1G9j86X0zlEqOQsJ8b3RaoQ6pfkmlnhWgCQXW/Ag1CNXAi086awwCcVfbfATgOHEReAGAXMone+WIql7geCbvE6F5G7wjbYaGZQFDdpwToZo99aKHrbPQypAGT0t3QnFCBhN1idAlyff8A7cJ2WkgmEFT/S4GOwDoUB4RCIQ3ARDt/ZudL7LwyRdtmhzbAMZT5aWll5wGzgfb5YiqXmIDsf3ncHReKCQTtfwDwGtA1P+zkHi7708/o142ekvaOZoQeKPvzva8sVPYnFQrBBCahuN+pf+jsTyoUygDAWbr7KwF+J4vZnxZxdJICFYQLTxvQzi5h9HCgE7AGOGp9jgGOAJujs5kd3IAECHvc7+vrYSubY/QUo9+Ni9lsrAG97LwN+NiuDwPvAVuN/s7oA0avBjbatdvpQYHa/1w0S1Xo7W0CT7hZRj9o9IdGX4yX7FhodTnJ/jRlLzAerVGrkNC9UAS4A9gf10Oa8gDkJPvTlAdgIooAXf4/K/YflxssBc5HA9rdynoDQ+z6HGAYnu12N7qD0RUo5AXoAlxtbb9Cb4FaAFeidFid3XschccNMckQGpXIR0dxfemO+faMy9LUH0RvikIjqga0QdvS1sBHQH3E/hzGo3RX0P1twlsAy9BXIq8AQ2N6bsa4CM1EnHaZKvuzyZ4zMNB2P1onWhISURdBp0Fx2uHlKORdg+y8E7L5GmBnoG09ihFCyxHVBH6280jgRsKbwGbgJ7sOrvbj0aaohuTPXzoCfYHfyPNC+CrRF7tdvv7SZX/SHfdEYb7o9E3OqI9K9JHidBTnf5JhH+vsXAE8DexGUV8Rmvmu6PO3BNK07sCzaK9RHY39+DAUMZip8AB3kzyrK5Dwg43e4Gu7By18baIwmw2UIWa/yfC+3iiOqAfeRsGO20AttutHrG2RtTsUnd3s4ChnlqfrjFT5MWA9EvIJqxuFIkC/Royzui5Gb6WJwm1XS9PUlyFbriNZwEa8V18gt1aF8ggJ5G3KUYYogbbRTRLViMGKFHW98AboLxTBzQJewhuEJWiWHc7Fyxk8ihbaBPBCVriPAe5z1QmB8g7Aj1a3DAnm0Bt98Oy04QhwJ/L9RXgmMsPKE8B9WZMgIh5HDN4cKH8e792e+5StL/IY6fz7duApu95m9y3AG4xYEHdWuMbOPX1lA4Bb0QJ5O1rlxyIfXorc2jIkJGjnNw251aHoDdBtdp/LN7rnNDm4rO1io8fiqb6L2AaiPzwSSGNap+hnttXvRKGww5dWXp7inryhGH28vAjvD46jaKFz6vwmnrY5tZ+Xoq9StBdwqv9+oH4vWixTDVpeMA5vZQ8etSjEnYYXco+wut0km18nZN/HAn34w9xi9EvML9kRJXPMRbORANYCM4E+QKs07VuhAUkAN/nKL0T7eqc5y/G8yQe+dt2sbAtNAC52/5tT/6FRhgSsxEtqbMWb/XKU80ugMNjFADM42d+PxPMkecUwpIp1nJyPKwKuRTPnojj/sZHkNz/uReeLJO9MX7bymb6y66zsuZjkCI2VxkhVoHwQml0nbB3a269GMzmVZCHddz970dfeDm1RMOQixlo73Ppwb6zSZIh+xsQekhexCXgMrgeu4tQr9RiU0U1YWz/m4Q1gre9osPLpUYWIgipj4klf2RDEbCPwAMn5ueHI17+FNKEaeQCnJQtJxnD05Wc9cEGg7lO7Z0wMcoSGy8q4ha8EL4U1x9duLMoLpHKPjSheCIazg9A+P4EW2SC2W13f6GKEh0tQuK2rW63X4tn3Ajz3uAFtYEYD/dGq77d3kMbcgvdyZVGaZx9C4XDoFHgcuAsxudQYcWrpdn/zjT4MXHOavvqj312dBp1AW95UecqWVn8gRV0kZJoUbY9Uuw+KAdohM9hHcia3FsX7qdAK+fvgTNaTXsBipPqbifgqLA70AN5B+fhTpavjPhqBh+IW5n827DI9G+eQwwAAAABJRU5ErkJggg==
// @run-at       document-start
// ==/UserScript==
/*
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
    v4.13 :: December 2022
        Updated News Feed Suggestion/Recommendation posts rule (FB changed structure)
        Updated Groups Feed Suggestion/Recommendation posts rule (FB changed structure)
        Updated News Feed blocked text filter (excluding comments)
        Updated Groups Feed blocked text filter (excluding comments)
        Code tweaks
    v4.12 :: December 2022
        Added @noframes directive
        Added Marketplace text filter
        Added option to share text filter between feeds
        Added post's image's ALT text in text-filtering
        Fixed bug with certain sections not hidden when <no message> was been enabled.
        Code tweaks
    v4.11 :: November 2022
        Updated News Feed suggested/recommended rule
    v4.10 :: November 2022
        Updated selection rule for News Feed posts
        Code tweaks
    v4.09 :: October 2022
        Fixed bug in previous fix for News Feed sponsored posts
    v4.08 :: October 2022
        Updated News Feed sponsored posts rule
        Updateds News Feed suggestion posts rule
        Code tweaks
    v4.07 :: October 2022
        Updated News Feed selection rule
        Reduced false-positive hits for News Feed sponsored rule
        Updated Friends you may know rule
    v4.06 :: October 2022
        Updated News Feed rules
        Updates News Feed side columnn's Suggested rule
    v4.05 :: October 2022
        Updated News Feed Sponsored rule
        Updated News Feed suggestion/recommended rule
        Revised Group suggestion/recommendation rule
        Updated Chinese text
        Revised information boxes rule
        Revised hidden post info/note
        Added Events you may like rule (News feed)
        Added Menu item "Settings" to the User Script Commands menu
        Added option to hide Stories (top of feed)
        Added option to hide Create Room (top of feed)
    v4.04 :: October 2022
        Previous changes did not go through
    v4.03 :: October 2022
        Updated news feed selection code
    v4.02 :: September 2022
        Removed invalid UserScript tag
    v4.01 :: September 2022
        Major rewrite - less dependent on language text for matching component/posts
        Various Suggestions/Recommendations combined into one option
        Added 简体中文 (Chinese Simplified)
        Added 繁體中文 (Chinese Traditional)
        Added 日本 (Japan)
        Added Sumoi (Finland)
        Added Türkçe (Turkey)
    v3.28 :: September 2022
        Code tweaks
    v3.27 :: August 2022
        Keywords and code tweaks

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
        ],

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
        },

        // *** News Feed ::

        // - "Stories | Reels | Rooms" tablist box
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
            'defaultEnabled': false
        },
        // - "Stories" box (same area as the tablist box, standalone)
        NF_STORIES: {
            'en': 'Stories',
            'pt': 'Stories',
            'de': 'Stories',
            'fr': 'Stories',
            'es': 'Historias',
            'cs': 'Stories',
            'vi': 'Tin',
            'it': 'Storie"',
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
            'defaultEnabled': false
        },
        // - "Create Room" - near top of News Feed, below "What's on your mind, <name>?"
        NF_CREATE_ROOM: {
            'en': 'Create room',
            'pt': 'Criar sala',
            'de': 'Room erstellen',
            'fr': 'Créer un salon',
            'es': 'Crear sala',
            'cs': 'Vytvořit místnost',
            'vi': 'Tạo phòng họp mặt',
            'it': 'Crea stanza',
            'lv': 'Izveidot istabu',
            'pl': 'Utwórz pokój',
            'nl': 'Ruimte maken',
            // -- needs translation
            'he': 'צור חדר',
            'ar': 'إنشاء غرفة',
            'id': 'Buat ruangan',
            'zh-Hans': '创建房间',
            'zh-Hant': '創建房間',
            'ja': 'ルームを作成',
            'fi': 'Luo huone',
            'tr': 'Oda yarat',
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
            'defaultEnabled': false
        },

        // *** Watch Videos Feed ::

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
            'defaultEnabled': ['1', '0', '0'],
        },


        // *** Miscellaneous/Other items ::

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
            'defaultEnabled': false,
            'pathMatch': '/support/',
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
        },

        // - label for Miscellaneous/Other items:
        DLG_OTHER: {
            'en': 'Miscellaneous items',
            'pt': 'Itens miscelâneos',
            'de': 'Sonstige Gegenstände',
            'fr': 'Articles divers',
            'es': 'Artículos diversos',
            'cs': 'Různé položky',
            'vi': 'Những thứ linh tinh',
            'it': 'Articoli vari',
            'lv': 'Dažādas vienumus',
            'pl': 'Różne pozycje',
            'nl': 'Diversen',
            'he': 'פריטים שונים',
            'ar': 'عناصر متنوعة',
            'id': 'Barang lain-lain',
            'zh-Hans': '杂件',
            'zh-Hant': '雜項',
            'ja': 'その他のアイテム',
            'fi': 'Sekalaiset tavarat',
            'tr': 'Diğer öğeler',
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
        },

        // - dailog's action buttons:
        DLG_BUTTONS: {
            'en': ['Save', 'Close', 'Export', 'Import'],
            'pt': ['Salvar', 'Fechar', 'Exportar', 'Importar'],
            'de': ['Speichern', 'Schließen', 'Exportieren', 'Importieren'],
            'fr': ['Sauvegarder', 'Fermer', 'Exporter', 'Importer'],
            'es': ['Guardar', 'Cerrar', 'Exportar', 'Importar'],
            'cs': ['Uložit', 'Zavřít', 'Export', 'Import'],
            'vi': ['Lưu', 'Đóng', 'Xuất', 'Nhập'],
            'it': ['Salva', 'Chiudi', 'Esportare', 'Importare'],
            'lv': ['Saglabājiet', 'Aizveriet', 'Eksportēt', 'Importēt'],
            'pl': ['Zapisz', 'Zamknij', 'Eksport', 'Import'],
            'nl': ['Opslaan', 'Sluiten', 'Exporteren', 'Importeren'],
            'he': ['שמור', 'סגור', 'ייצא', 'ייבא'],
            'ar': ['حفظ', 'قريب', 'يصدّر', 'يستورد'],
            'id': ['Simpan', 'Tutup', 'Ekspor', 'Impor'],
            'zh-Hans': ['节省', '关', '出口', '进口'],
            'zh-Hant': ['儲存', '關閉', '匯出', '匯入'],
            'ja': ['セーブ', 'クローズ', '輸出する', '輸入'],
            'fi': ['Tallentaa', 'Sulkea', 'Vienti', 'Tuonti'],
            'tr': ['Kaydetmek', 'Kapat', 'İhracat', 'İçe aktarmak'],
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
        }
    };

    // *** *** end of language components *** ***

    // - console log "label" - used for filtering console logs.
    const log = '-- fbcmf :: ';

    // - idb-keyval - indexedDB wrapper
    // -- needs the "@require https://unpkg.com/idb-keyval@6.0.3/dist/umd.js" entry.
    // -- which functions do we want to use from the idb-keyval?
    const { get, set, createStore } = idbKeyval;
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
    const postAtt = 'cmfr';
    // - post attribute - consecutive posts id
    const postAttCPID = 'cmfcpid';
    // - post property - # of light dusting duties done
    const postPropDS = 'cmfDusted';

    // - Feed Details variables
    // -- nb: setFeedSettings() adjusts some of these settings.
    const VARS = {
        // - mutations counter
        mutationsCount: 0,
        // - how many mutations to ignore @ start (usually non-feed elements)
        mutationsInitSkip: 75,
        // - how many times to scan a post
        scanCountStart: 0,
        scanCountMaxLoop: 12,

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

    // -- generate a string of random charcters
    // -- used for css classes
    // -- used for postAttCPID
    function generateRandomString() {
        // - generate random names (first letter must be an alphabet)
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let str = chars.charAt(Math.floor(Math.random() * (chars.length - 10)));
        for (let i = 0; i < 12; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    }

    // -- stylesheet builder
    VARS.tempStyleSheetCode = ''; // holds the SS code while it is being built.
    function addToSS(classes, styles) {
        // -- formats and builds the StyleSheet code
        // -- parameters: classes (separated by comma), styles (separated by semicolon)
        // -- array actions: .filter - remove empties, .map - trim (or pad + trim)
        let tClasses = classes.split(',').filter(function (e) { return e.trim() }).map(e => e.trim());
        let tStyleLines = styles.split(';').filter(function (e) { return e.trim() });
        tStyleLines = tStyleLines.map(function (e) { let temp = e.split(':'); return '    ' + temp[0].trim() + ':' + temp[1].trim() });
        let temp = tClasses.join(',\n') + ' {\n';
        temp += tStyleLines.join(';\n') + ';\n';
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

            // - remember class names (for other functions to use)
            VARS.cssHide = generateRandomString(); // - the parent element - hides the nth level down element
            VARS.cssHideEl = generateRandomString(); // - the element to hide - where there's no child element
            VARS.cssHideStories = generateRandomString(); // - stories have an odd setup for hide & show with border ...
            VARS.cssHideNumberOfShares = generateRandomString(); // - hide "# shares" on posts.
            VARS.cssEcho = generateRandomString();
        }
        VARS.tempStyleSheetCode = ''; // reset temp CSS code.

        // - insert Styles (as classes)
        // - NF/GF/VF
        // -- remove margins
        addToSS(
            `.${VARS.cssHide},` +
            `.${VARS.cssHideEl}`,
            'margin:0 !important;'
        );

        // -- post wrapper (mainly for news, groups and video feeds posts)
        //classes = `.${VARS.cssHide} > div:not([${postAtt}]) > div[class],`;
        classes = `.${VARS.cssHide} > div:not([${postAtt}]) > div,`;
        classes += `.${VARS.cssHide} > span,`;
        // - stories, hide at upper level, border at few level down
        classes += `.${VARS.cssHideStories}, `;
        // -- non n/f & g/f wrappers (mainly for marketplace posts + some aside boxes)
        classes += `.${VARS.cssHideEl}`;
        // -- which styles to apply?
        // --- (display:block is for those span tags being a nth-of-child element.)
        styles = 'display:none !important;';
        addToSS(classes, styles);

        // -- # shares
        addToSS(
            `.${VARS.cssHideNumberOfShares}`,
            'display:none !important;'
        );

        // - echo msg
        addToSS(
            `.${VARS.cssHide} > div[${postAtt}]`,
            'display:flex; margin:1.5rem auto; padding:0.5rem 1rem 0.5rem 0; border-radius:0.55rem; width:85%; font-style:italic; cursor:pointer;' +
            ((VARS.Options.VERBOSITY_MESSAGE_COLOUR === '') ? '' : `  color: ${VARS.Options.VERBOSITY_MESSAGE_COLOUR}; `) +
            `background-color:${(VARS.Options.VERBOSITY_MESSSAGE_BG_COLOUR === '') ? KeyWords.VERBOSITY_MESSAGE_BG_COLOUR.defaultValue : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR};`
        );
        // - echo msg flex boxes
        addToSS(
            `.${VARS.cssHide} > div[${postAtt}] > div`,
            'display:flex; align-items: center;'
        );
        // - echo msg's button
        addToSS(
            `.${VARS.cssHide} > div[${postAtt}] > div.wbtn`,
            'flex:0 0 3rem; justify-content: center;'
        );
        // - echo msg's text
        addToSS(
            `.${VARS.cssHide} > div[${postAtt}] > div.wtxt`,
            'flex:1;'
        );
        // - echo msg hover
        addToSS(
            `.${VARS.cssHide} > div[${postAtt}]:hover`,
            'text-decoration: underline; background-color:white; color:black;'
        );
        addToSS(
            `.${VARS.cssHide} > div[${postAtt}] button:hover`,
            'cursor:pointer;'
        );
        // - echo msg's button's default state
        addToSS(
            `.${VARS.cssHide} > div[${postAtt}] > div.wbtn > button`,
            'transform: rotate(180deg);transition: transform 0.15s linear;'
        );
        // - flagged post's mini-tab
        addToSS(
            `.${VARS.cssHide} > div:not([${postAtt}]) > div > div > h6[${postAtt}]`,
            'border-radius: 0.55rem 0.55rem 0 0; width:75%; margin:0 auto; padding: 0.45rem 0.25rem; font-style:italic; text-align:center; font-weight:normal;' +
            ((VARS.Options.VERBOSITY_MESSAGE_COLOUR === '') ? '' : `  color: ${VARS.Options.VERBOSITY_MESSAGE_COLOUR}; `) +
            `background-color:${(VARS.Options.VERBOSITY_MESSSAGE_BG_COLOUR === '') ? KeyWords.VERBOSITY_MESSAGE_BG_COLOUR.defaultValue : VARS.Options.VERBOSITY_MESSAGE_BG_COLOUR}; `
        );

        // - 'show' - reveal a hidden post
        addToSS(
            `.${VARS.cssHideStories}.show`,
            'display:block !important; '
        );
        addToSS(
            `.${VARS.cssHide}.show > div:not([${postAtt}]) > div, ` +
            `.${VARS.cssHideStories}.show > div > div > div, ` +
            `.${VARS.cssHideNumberOfShares}.show`,
            'display:block !important; ' +
            `border:3px dotted ${VARS.Options.CMF_BORDER_COLOUR} !important; border-radius:8px; padding:0.2rem 0.1rem 0.1rem 0.1rem;` // 4px
        );
        // - echo msg show state
        addToSS(
            `.${VARS.cssHide}.show > div[${postAtt}] `,
            'margin-top:0.5rem; margin-bottom:0.5rem;'
        );
        // - echo msg's button show state
        addToSS(
            `.${VARS.cssHide}.show > div[${postAtt}] > div.wbtn > button`,
            'transform: rotate(360deg);transition: transform 0.15s linear;'
        );
        // - non-standard post's show state
        addToSS(
            `.${VARS.cssHideEl}.show `,
            `display: block; border:3px dotted ${VARS.Options.CMF_BORDER_COLOUR} !important; border-radius:8px; padding:0.1rem;` // 4px
        );
        // - dailog box CSS
        // --- dialog box; position + flex
        let bColour = (VARS.Options.CMF_BORDER_COLOUR === '') ? KeyWords.CMF_BORDER_COLOUR.defaultValue : VARS.Options.CMF_BORDER_COLOUR;
        let tColour = ((VARS.Options.CMF_DIALOG_COLOUR === '') || (VARS.Options.CMF_DIALOG_COLOUR === undefined)) ? 'var(--primary-text)' : VARS.Options.CMF_DIALOG_COLOUR;
        // - left / right done in fn addExtraCSS()
        addToSS(
            '.fb-cmf ',
            'position:fixed; top:0.15rem; bottom:0.15rem; display:flex; flex-direction:column; max-width:30rem; padding:0 1rem; z-index:5;' +
            `border:2px solid ${bColour}; border-radius:1rem; opacity:0; color:${tColour};`
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
            '.fb-cmf footer.buttons',
            'padding:1rem; text-align:center;'
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
        // -- footer - buttons
        addToSS(
            '.fb-cmf .buttons button',
            'margin-left: 1rem; margin-right:1rem;'
        );
        // -- footer - file input
        addToSS(
            '.fb-cmf .fileInput',
            'display:none;'
        );
        // -- footer - import results
        addToSS(
            '.fb-cmf .fileResults',
            'font-style:italic; margin-top: 1rem;'
        );
        // -- show dialog box (default is not to show)
        addToSS(
            '.fb-cmf.show',
            'opacity:1; transform:scale(1);'
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
            addToSS('.fb-cmf-toggle.show', 'display:block;');
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
            'transition:transform .45s ease, opacity .25s ease;'
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
            VARS.Options.NF_SPONSORED = true;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('GF_SPONSORED')) {
            VARS.Options.GF_SPONSORED = true;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('VF_SPONSORED')) {
            VARS.Options.VF_SPONSORED = true;
            changed = true;
        }
        if (!VARS.Options.hasOwnProperty('MP_SPONSORED')) {
            VARS.Options.MP_SPONSORED = true;
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
        }

        // -- final list of text for each feed
        let nfBlockedTextList = '';
        let gfBlockedTextList = '';
        let vfBlockedTextList = '';
        let mpBlockedTextList = '';

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
        VARS.Filters.MP_BLOCKED_ENABLED = false;
        if (VARS.Options.MP_BLOCKED_ENABLED && mpBlockedTextList.length > 0) {
            VARS.Filters.MP_BLOCKED_ENABLED = true;
            VARS.Filters.MP_BLOCKED_TEXT = mpBlockedTextList.split(VARS.SEP);
            VARS.Filters.MP_BLOCKED_TEXT_LC = VARS.Filters.MP_BLOCKED_TEXT.map(btext => btext.toLowerCase());
        }

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
            fs.appendChild(createSingleCB('NF_SPONSORED', true));
            for (const key in KeyWords) {
                if (key.slice(0, 3) === 'NF_' && key.slice(0, 8) !== 'NF_BLOCK') {
                    fs.appendChild(createSingleCB(key));
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
            fs.appendChild(createSingleCB('GF_SPONSORED', true));
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
            fs.appendChild(createSingleCB('VF_SPONSORED', true));
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
            fs.appendChild(createSingleCB('MP_SPONSORED', true));

            // -- Keywords to block - Marketplace Feed
            fs.appendChild(document.createElement('br'));
            l = document.createElement('strong');
            l.textContent = KeyWords.DLG_BLOCK_TEXT_FILTER_TITLE[VARS.language] + ':';
            fs.appendChild(l);

            createMultipeCBs('MP_BLOCKED_FEED', 0).forEach(el => {
                fs.appendChild(el);
            });

            fs.appendChild(createSingleCB('MP_BLOCKED_ENABLED'));
            s = document.createElement('small');
            s.appendChild(document.createTextNode(KeyWords.DLG_BLOCK_NEW_LINE[VARS.language]));
            fs.appendChild(s);
            ta = document.createElement('textarea');
            ta.name = 'MP_BLOCKED_TEXT';
            ta.textContent = VARS.Options.MP_BLOCKED_TEXT.split(VARS.SEP).join('\n');
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

            // -- Actions (buttons)
            footer = document.createElement('footer');
            footer.classList.add('buttons');
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
            // -- file input field is hidden, but triggered by the Import button.
            let fileImport = document.createElement('input');
            fileImport.setAttribute('type', 'file');
            fileImport.setAttribute('id', `FI${postAtt}`);
            fileImport.classList.add('fileInput');
            footer.appendChild(fileImport);
            // -- import results
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
                    if (VARS.Options.hasOwnProperty[inp.name]) {
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
                // -- "purge" notifications
                let elements = Array.from(document.querySelectorAll(`div[${postAtt}="0"]`));
                if (elements.length > 0) {
                    elements.forEach(el => {
                        let elParent = el.parentElement;
                        elParent.removeChild(el);
                    });
                }
                // -- remove attribute
                elements = Array.from(document.querySelectorAll(`[${postAtt}]`));
                if (elements.length > 0) {
                    elements.forEach(el => {
                        if (el.tagName === "H6") {
                            let elParent = el.parentElement;
                            elParent.removeChild(el);
                        }
                        else {
                            el.removeAttribute(postAtt);
                            el.classList.remove(VARS.cssHide);
                            el.classList.remove(VARS.cssHideEl);
                            el.classList.remove('show');
                        }
                    });
                }
                // -- check that the classes have been removed
                elements = Array.from(document.querySelectorAll(`.${VARS.cssHide}`));
                if (elements.length > 0) {
                    elements.forEach(el => {
                        el.classList.remove(VARS.cssHide);
                        el.classList.remove(VARS.cssHideEl);
                        el.classList.remove('show');
                    });
                }
                elements = Array.from(document.querySelectorAll(`.${VARS.cssHideEl}`));
                if (elements.length > 0) {
                    elements.forEach(el => {
                        el.classList.remove(VARS.cssHideEl);
                        el.classList.remove(VARS.cssHide);
                        el.classList.remove('show');
                    });
                }
                elements = Array.from(document.querySelectorAll(`.${VARS.cssHideNumberOfShares}`));
                if (elements.length > 0) {
                    elements.forEach(el => {
                        el.removeAttribute(postAtt);
                        el.classList.remove(VARS.cssHideNumberOfShares);
                        el.classList.remove('show');
                    });
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
            }
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
        let dlg = document.getElementById('fbcmf');
        dlg.classList.toggle('show');
    }

    // adjust some settings - if URL has changed.
    function setFeedSettings(forceUpdate = false) {
        if ((VARS.prevURL !== window.location.href) || forceUpdate) {
            // - remember current page's URL
            VARS.prevURL = window.location.href;
            VARS.prevPathname = window.location.pathname;
            VARS.prevQuery = window.location.search;
            // - reset feeds flags
            VARS.isNF = false;
            VARS.isGF = false;
            VARS.isVF = false;
            VARS.isMF = false;
            VARS.isSF = false;
            if ((VARS.prevPathname === '/') || (VARS.prevPathname === '/home.php')) {
                // -- news feed
                VARS.isNF = true;
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
                    VARS.mpType = 'marketplace';
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

            VARS.isAF = (VARS.isNF || VARS.isGF || VARS.isVF || VARS.isMF || VARS.isSF);

            // when to display the cmf button
            if (VARS.isAF) {
                if (VARS.btnToggleEl) {
                    VARS.btnToggleEl.classList.add('show');
                }
            }
            else {
                if (VARS.btnToggleEl) {
                    VARS.btnToggleEl.classList.remove('show');
                }
            }

            // - reset consecutive count of hidden posts
            VARS.echoCount = 0;

            // console.info(`${log}setFeedSettings() :: isAF: ${VARS.isAF}; isNF: ${VARS.isNF}; isGF: ${VARS.isGF}; isVF: ${VARS.isVF}; isMF: ${VARS.isMF}; isSF: ${VARS.isSF};`);
            return true;
        }
        else {
            return false;
        }
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
            let dustySpots = Array.from(post.querySelectorAll('[data-0="0"]'));
            if (dustySpots.length > 0) {
                let len = dustySpots.length - 1;
                for (let i = len; i >= 0; i--) {
                    dustySpots[i].parentElement.removeChild(dustySpots[i]);
                }
            }
            scanCount++;
            post[postPropDS] = scanCount;
        }
    }

    function scanTreeForText(theNode) {
        let arrayTextValues = [];
        let n,
            walk = document.createTreeWalker(theNode, NodeFilter.SHOW_TEXT, null, false);
        while ((n = walk.nextNode())) {
            let val = n.textContent.trim();
            if ((val !== '') && (val.length > 1) && (val.toLowerCase() !== 'facebook')) {
                // - keep 2+ char strings.
                arrayTextValues.push(val);
            }
        }
        return arrayTextValues;
    }
    function scanImagesForAltText(theNode) {
        let arrayAltTextValues = [];
        Array.from(theNode.querySelectorAll('img[alt]')).forEach(img => {
            if (img.alt.length > 0) {
                if (img.width && img.width < 33) {
                    // -- emojis usually have widths < 32 ... skip them.
                }
                else {
                    if (arrayAltTextValues.indexOf(img.alt) < 0) {
                        arrayAltTextValues.push(img.alt);
                    }
                }
            }
        });
        return arrayAltTextValues;
    }

    function extractTextContent(post, selector, maxBlocks) {
        // - get the text node values of the regular feed posts
        // - get the alt-text values of any images in the feed posts
        // -- scan the top portion of the posts (first maxBlocks blocks)
        // -- parameters:
        //    post: post to scan
        //    selector: querySelector's query
        //    maxBlocks: max number of blocks to scan
        let blocks = Array.from(post.querySelectorAll(selector));
        // console.info(log+'extractTC:', selector, maxBlocks, blocks, post);
        let arrayTextValues = [];
        if (blocks.length) {
            // - process first maxBlocks blocks
            // - block 0 = Suggested headings, block 1 = title/heading, block 2 = content, block 3 = info box / comments, block 4 = comments
            // - nb: some suggested posts only have one block ...
            let bL = Math.min(maxBlocks, blocks.length);
            for (let b = 0; b < bL; b++) {
                if (blocks[b].innerHTML.length > 0) {
                    arrayTextValues = arrayTextValues.concat(scanTreeForText(blocks[b]));
                    let imgAltText = scanImagesForAltText(blocks[b]);
                    if (imgAltText.length > 0) {
                        arrayTextValues = arrayTextValues.concat(imgAltText);
                    }
                }
            }
        }
        return arrayTextValues;
    }

    function createInfoNote(reason) {
        let echoEl = document.createElement('div');
        echoEl.setAttribute(postAtt, '0');

        let echoBtnBox = document.createElement('div');
        let echoBtn = document.createElement('button');
        let echoTxt = document.createElement('div');

        echoBtn.textContent = '___';
        echoBtn.addEventListener('click', togglePost, false);
        echoBtnBox.appendChild(echoBtn);
        echoBtnBox.className = 'wbtn';

        echoTxt.className = 'wtxt';
        echoTxt.innerText = KeyWords.VERBOSITY_MESSAGE[VARS.language][0] + reason;

        echoEl.appendChild(echoBtnBox);
        echoEl.appendChild(echoTxt);

        echoEl.addEventListener('click', togglePost, false);
        return echoEl;
    }
    function createMiniTab(reason) {
        let elMiniTab = document.createElement('h6');
        elMiniTab.setAttribute(postAtt, '0');
        elMiniTab.innerText = reason;
        return elMiniTab;
    }

    function hideFeature(post, reason, isStories = false) {
        // -- hide something - keep it out of the regular feed stuff.
        // -- no counter
        if ((parseInt(VARS.Options.VERBOSITY_LEVEL, 10) > 0) && (reason !== '')) {
            // -- add info tab
            let echoEl = createInfoNote(reason);
            let postFirstChild = post.querySelector(':scope > :first-child');
            if (postFirstChild) {
                postFirstChild.before(echoEl);
            }
            else {
                // -- post has been changed while being processed (very rare)
            }
        }

        if (!isStories) {
            post.classList.add(VARS.cssHide);
            post.setAttribute(postAtt, reason);
        }
        else {
            post.classList.add(VARS.cssHideStories);
            post.setAttribute(postAtt, reason);
        }

        // - add mini-tab (indicates why post is hidden)
        let elTabSpot = post.querySelector(`:scope > div:not([${postAtt}]) > div > div > div:first-child`);
        if (elTabSpot) {
            elTabSpot.before(createMiniTab(reason));
        }

        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            post.classList.add('show');
        }
    }

    function toggleHiddenElements() {
        // -- for debugging mode
        if (VARS.Options.VERBOSITY_DEBUG) {
            // -- show the hidden posts (if not already showing)
            let flaggedContainers = Array.from(document.querySelectorAll('.' + VARS.cssHide));
            if (flaggedContainers.length > 0) {
                for (let elContainer of flaggedContainers) {
                    if (elContainer.classList.contains('show') === false) {
                        elContainer.classList.add('show');
                    }
                    let elNote = elContainer.querySelector(`:scope > div[${postAtt}]`);
                    if (elNote) {
                        elNote.classList.add('show');
                    }
                }
            }
            // -- show the hidden stories
            let storiesBlock = Array.from(document.querySelectorAll('.' + VARS.cssHideStories));
            if (storiesBlock.length > 0) {
                for (let elStory of storiesBlock) {
                    if (elStory.classList.contains('show') === false) {
                        elStory.classList.add('show');
                    }
                }
            }
            // -- show the hidden blocks
            let flaggedBlocks = Array.from(document.querySelectorAll('.' + VARS.cssHideEl));
            if (flaggedBlocks.length > 0) {
                for (let elBlock of flaggedBlocks) {
                    if (elBlock.classList.contains('show') === false) {
                        elBlock.classList.add('show');
                    }
                }
            }
            // -- show the hidden shares
            let shares = Array.from(document.querySelectorAll('.' + VARS.cssHideNumberOfShares));
            if (shares.length > 0) {
                for (let elShare of shares) {
                    if (elShare.classList.contains('show') === false) {
                        elShare.classList.add('show');
                    }
                }
            }
        }
        else {
            // -- remove the .show class ...
            // -- hide the posts
            let flaggedContainers = Array.from(document.querySelectorAll('.' + VARS.cssHide));
            if (flaggedContainers.length > 0) {
                for (let elContainer of flaggedContainers) {
                    if (elContainer.classList.contains('show')) {
                        elContainer.classList.remove('show');
                    }
                    let elNote = elContainer.querySelector(`:scope > div[${postAtt}]`);
                    if (elNote) {
                        elNote.classList.remove('show');
                    }
                }
            }
            // -- hide the hidden stories
            let storiesBlock = Array.from(document.querySelectorAll('.' + VARS.cssHideStories));
            if (storiesBlock.length > 0) {
                for (let elStory of storiesBlock) {
                    if (elStory.classList.contains('show')) {
                        elStory.classList.remove('show');
                    }
                }
            }
            // -- hide the hidden blocks
            let flaggedBlocks = Array.from(document.querySelectorAll('.' + VARS.cssHideEl));
            if (flaggedBlocks.length > 0) {
                for (let elBlock of flaggedBlocks) {
                    if (elBlock.classList.contains('show')) {
                        elBlock.classList.remove('show');
                    }
                }
            }
            // -- hide the hidden shares
            let shares = Array.from(document.querySelectorAll('.' + VARS.cssHideNumberOfShares));
            if (shares.length > 0) {
                for (let elShare of shares) {
                    if (elShare.classList.contains('show')) {
                        elShare.classList.remove('show');
                    }
                }
            }
        }
    }

    function togglePost(ev) {
        ev.stopPropagation();
        // -- grab the note container
        let elInfoNote = ev.target.closest(`div[${postAtt}]`);
        // -- grab the note's parent (post)
        let elPost = elInfoNote.parentElement;
        // -- then toggle the 'show' class on the post.
        if (!elInfoNote.hasAttribute(postAttCPID)) {
            // -- single post being hidden
            elPost.classList.toggle('show');
        }
        else {
            // -- multiple consecutive posts being hidden
            let cpid = elInfoNote.getAttribute(postAttCPID);
            let flaggedPosts = Array.from(document.querySelectorAll(`[${postAttCPID}=${cpid}]`));
            if (flaggedPosts.length > 0) {
                // -- cannot use classList.toggle() while posts are still being loaded ...
                if (elPost.classList.contains('show')) {
                    for (let fPost of flaggedPosts) {
                        fPost.classList.remove('show');
                    }
                }
                else {
                    for (let fPost of flaggedPosts) {
                        fPost.classList.add('show');
                    }
                }
            }
        }
    }

    function hidePost(post, reason) {
        // -- hide something ..
        // -- if requested, echo post is hidden ..
        // -- (separate function for marketplace)
        // -- Verbosity_Level: 0 = hide; 1 = single info note; 2 = consecutive info notes

        // console.info(log + 'hidePost(); v_L:', VARS.Options.VERBOSITY_LEVEL, VARS.echoEl, VARS.echoCount, reason, post);

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

                VARS.echoEl = createInfoNote(reason);

                let postFirstChildEl = post.querySelector(':scope > :first-child');
                if (postFirstChildEl) {
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

                // - add mini-tab (indicates why post is hidden)
                let elTabSpot = post.querySelector(`:scope > div:not([${postAtt}]) > div > div > div:first-child`);
                if (elTabSpot) {
                    elTabSpot.before(createMiniTab(reason));
                }
            }
        }

        // - flag & hide the post
        post.setAttribute(postAtt, reason);
        post.classList.add(VARS.cssHide);

        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            post.classList.add('show');
        }

        //console.info(log+'hidePost():', VARS.echoElFirst);
    }

    function nf_dropTags(post) {
        // -- remove cmf's attributes/classes from empty posts.
        post.removeAttribute(postAtt);
        post.classList.remove(VARS.cssHide);
        post.classList.remove(VARS.cssHideEl);
        post.classList.remove('show');
        // -- remove the notification tab.
        if (post.querySelectorAll('div, h6').length > 0) {
            post.removeChild(post.firstElementChild);
        }
        post[postPropDS] = 1; // -- reset scanning count
    }

    function hideBlock(block, link, reason) {
        block.classList.add(VARS.cssHideEl);
        link.setAttribute(postAtt, reason);
        // - in debugging mode?
        if (VARS.Options.VERBOSITY_DEBUG) {
            block.classList.add('show');
        }
    }

    function cleanText(text) {
        // - fb is using ASCII code 160 for whitespace ...
        return text.replaceAll(String.fromCharCode(160), String.fromCharCode(32));
    }

    function isSponsored(post) {
        // Is it a sponsored post?
        // -- applies to News feed, Groups feed, Videos Feed
        // -- mopUpTheMarketplaceFeed() looks after marketplace feed sponsored posts/items.

        let isSponsoredPost = false;
        const PARAM_FIND = '__cft__[0]=';
        const PARAM_MIN_SIZE = 299;

        let elLinks = [];
        if (!VARS.isVF) {
            // -- news feed
            // -- and possibly groups feed (haven't seen a sponsored post in groups for ages!)
            // -- May 2023 update
            elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] h4 span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            if (elLinks.length === 0) {
                // -- try again, some users don't have the aria-posinet attribute.
                elLinks = Array.from(post.querySelectorAll(`div[aria-describedby] h4 span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            }

            // -- March 2023 udpate (disabled - May 2023 takes care of March's fix.)
            // elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] h4 > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
            // if (elLinks.length === 0) {
            //     // -- try again, some users don't have the aria-posinet attribute.
            //     elLinks = post.querySelectorAll(`div[aria-describedby] h4 > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`);
            // }

            // -- April 2023, possible sponsored video post in News Feed ("LIVE")
            if (elLinks.length === 0) {
                elLinks = Array.from(post.querySelectorAll(`div[aria-posinset] h4 > span > strong > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`));
                if (elLinks.length === 0) {
                    // -- try again, some users don't have the aria-posinet attribute.
                    elLinks = post.querySelectorAll(`div[aria-describedby] h4 > span > strong > span > a[href*="${PARAM_FIND}"]:not([href^="/groups/"]):not([href*="section_header_type"])`);
                }
            }
        }
        else if (VARS.isVF) {
            // -- watch videos feed has a slightly different html structure for sponsored posts.
            elLinks = Array.from(post.querySelectorAll(`div > div > div > div > span > span > div > a[href*="${PARAM_FIND}"]`));
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
        return isSponsoredPost;
    }

    function querySelectorAllNoChildren(container = document, query, minText = 0) {
        if (query === '') {
            return [];
        };
        let elements = container.querySelectorAll(query);
        if (elements) {
            return Array.from(elements).filter((el) => {
                return ((el.children.length === 0) && (el.textContent.length >= minText));
            });
        }
        else {
            return [];
        }
    }

    function nf_isSuggested(post) {
        // - check if any of the suggestions / recommendations type post
        // -- nb: <name> commented / <name> replied to a commment posts have similar structure - but have extra elements ...
        // -- nb: x people recently commented posts have similar structure - suggested/recommended posts don't start with a number ...

        // -- May 2023 - structure change
        let query =  'div[aria-posinset] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > span, ' + 
                     'div[aria-describedby] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > span';
        let elSuggestion = querySelectorAllNoChildren(post, query, 1);

        if (elSuggestion.length === 0) {
            // -- December 2022 - structure change - variation #2
            query = ':scope div[aria-posinset] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div > div > span, ' +
                        ':scope div[aria-describedby] > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div > div > span';
            elSuggestion = querySelectorAllNoChildren(post, query, 1);
            // console.info(log + 'nf_isSuggested; try #1:', elSuggestion.length, elSuggestion);
        }
        if (elSuggestion.length === 0) {
            // -- December 2022 - structure change - variation #1
            query = ':scope > div > div > div > div > div > div > div > div > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div > div > span';
            elSuggestion = querySelectorAllNoChildren(post, query, 1);
            // console.info(log + 'nf_isSuggested; try #2:', elSuggestion.length, elSuggestion);
        }
        if (elSuggestion.length === 0) {
            query = ':scope > div > div > div > div > div > div > div > div > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div > div > div > div > span';
            elSuggestion = querySelectorAllNoChildren(post, query, 1);
            // console.info(log + 'nf_isSuggested; try #3:', elSuggestion.length, elSuggestion);
        }
        if (elSuggestion.length === 0) {
            query = ':scope > div > div > div > div > div > div > div > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div > div > div > div > span';
            elSuggestion = querySelectorAllNoChildren(post, query, 1);
            // console.info(log + 'nf_isSuggested; try #4:', elSuggestion.length, elSuggestion);
        }

        if (elSuggestion.length > 0) {
            if (nf_isReelsAndShortVideos(post).length > 0) {
                // -- false-positive hit.
                // -- let nf_isReelsAndShortVideos() take care of this post.
                return '';
            }
            const pattern = /([0-9]|[\u0660-\u0669])/;
            let firstCharacter = cleanText(elSuggestion[0].textContent).trim().slice(0, 1);
            // console.info(log+'isSuggested - match test:', firstCharacter, pattern.test(firstCharacter), pattern.test(firstCharacter) ? 'No': 'Yes' );
            return (pattern.test(firstCharacter)) ? '' : KeyWords.NF_SUGGESTIONS[VARS.language];
        }
        else {
            return '';
        }
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
        let query = 'a[href*="/friends/suggestions/"][role="link"]';
        let pymk = post.querySelectorAll(query);
        return (pymk.length === 0) ? '' : KeyWords.NF_PEOPLE_YOU_MAY_KNOW[VARS.language];
    }

    function nf_isPaidPartnership(post) {
        let query = 'span[dir] > span[id] a[href^="/business/help/"]';
        let paidPartnership = post.querySelector(query);
        return (paidPartnership === null) ? '' : KeyWords.NF_PAID_PARTNERSHIP[VARS.language];
    }

    function nf_isSponsoredPaidBy(post) {
        let query = 'div:nth-child(2) > div > div:nth-child(2) > span[class] > span[id] > div:nth-child(2)';
        let sponsoredPaidBy = querySelectorAllNoChildren(post, query, 1);
        return (sponsoredPaidBy.length === 0) ? '' : KeyWords.NF_SPONSORED_PAID[VARS.language];
    }

    function nf_isReelsAndShortVideos(post) {
        // -- reels and short videos (multiple)
        let query = 'div a[href="/reel/?s=ifu_see_more"]';
        let rasv = post.querySelector(query);
        return (rasv === null) ? '' : KeyWords.NF_REELS_SHORT_VIDEOS[VARS.language];
    }

    function nf_isShortReelVideo(post) {
        // -- reel/short video post (single)
        // -- post must have only one reel link
        let query = 'a[href*="/reel/"]';
        let rsv = Array.from(post.querySelectorAll(query));
        return (rsv.length !== 1) ? '' : KeyWords.NF_SHORT_REEL_VIDEO[VARS.language];
    }

    function gf_isShortReelVideo(post) {
        // -- reel/short video post (single)
        // -- post must have only one reel link
        let query = 'a[href*="/reel/"]';
        let rsv = Array.from(post.querySelectorAll(query));
        return (rsv.length !== 1) ? '' : KeyWords.NF_SHORT_REEL_VIDEO[VARS.language];
    }

    function nf_isEventsYouMayLike(post) {
        // -- events you may linke posts
        let query = ':scope > div:nth-of-type(2) > div > div >  h3 > span';
        let events = querySelectorAllNoChildren(post, query, 0);
        return (events.length === 0) ? '' : KeyWords.NF_EVENTS_YOU_MAY_LIKE[VARS.language];
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
            // try again .. (December 2022 change)
            blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div > div';
        }
        let ptexts = extractTextContent(post, blocksQuery, 3);
        // console.info(log+'nf_isBlockedText:', ptexts, post);
        ptexts = ptexts.join(' ').toLowerCase();
        let blockedText = '';
        let btL = VARS.Filters.NF_BLOCKED_TEXT_LC.length;
        for (let b = 0; b < btL; b++) {
            if (ptexts.indexOf(VARS.Filters.NF_BLOCKED_TEXT_LC[b]) >= 0) {
                // before breaking out, get the text that matched.
                blockedText = VARS.Filters.NF_BLOCKED_TEXT[b];
                break;
            }
        }
        // if (blockedText.length > 0) console.info(log + 'isBlockedText():', blockedText, post, ptexts);
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
            blocksQuery = 'div[aria-posinset] > div > div > div > div > div > div > div > div > div, div[aria-describedby] > div > div > div > div > div > div > div > div > div';
        }
        let ptexts = extractTextContent(post, blocksQuery, 3);
        // console.info(log+'gf_isBlockedText:', ptexts, post);
        ptexts = ptexts.join(' ').toLowerCase();
        let blockedText = '';
        let btL = VARS.Filters.GF_BLOCKED_TEXT_LC.length;
        for (let b = 0; b < btL; b++) {
            if (ptexts.indexOf(VARS.Filters.GF_BLOCKED_TEXT_LC[b]) >= 0) {
                // before breaking out, get the text that matched.
                blockedText = VARS.Filters.GF_BLOCKED_TEXT[b];
                break;
            }
        }
        return blockedText;
    }

    function vf_isBlockedText(post, queryBlocks) {
        // - check for blocked text - partial text match
        // -- regular videos feed post's blocks (have 1-3 blocks)
        // -- scan 1st block only
        let ptexts = extractTextContent(post, queryBlocks, 1);
        // console.info(log+'vf_isBlockedText:', ptexts, post);
        ptexts = ptexts.join(' ').toLowerCase();
        let blockedText = '';
        let btL = VARS.Filters.VF_BLOCKED_TEXT_LC.length;
        for (let b = 0; b < btL; b++) {
            if (ptexts.indexOf(VARS.Filters.VF_BLOCKED_TEXT_LC[b]) >= 0) {
                // before breaking out, get the text that matched.
                blockedText = VARS.Filters.VF_BLOCKED_TEXT[b];
                break;
            }
        }
        return blockedText;
    }

    function mp_isBlockedText() {
        let query = `div[style]:not([${postAtt}]) > div > div > span > div > div > a[href*="/marketplace/item/"]`;
        let items = document.querySelectorAll(query);
        items.forEach(item => {
            let queryTextBlock = ':scope > div > div:nth-of-type(2) > div'
            // a[href*="/marketplace/item"] > div > div:nth-of-type(2) > div > div > span > span > span
            let blocksOfText = item.querySelectorAll(queryTextBlock);
            if (blocksOfText.length > 0) {
                let blockedText = '';
                // - first block, has prices and sometimes old price. we ignore 2nd price (old one).
                // - compare as exact match
                let itemPrices = scanTreeForText(blocksOfText[0]);
                let itemPrice = itemPrices[0].toLowerCase();
                let idx = VARS.Filters.MP_BLOCKED_TEXT_LC.indexOf(itemPrice);
                if (idx >= 0) {
                    blockedText = VARS.Filters.MP_BLOCKED_TEXT[idx];
                }
                else {
                    // - second + subsequent blocks of text ...
                    //  - compare as partial match (description/location of item)
                    for (let i = 1; i < blocksOfText.length; i++) {
                        let ptexts = scanTreeForText(blocksOfText[i]);
                        if (ptexts.length > 0) {
                            let ptext = ptexts.join(' ').toLowerCase();
                            let btL = VARS.Filters.MP_BLOCKED_TEXT_LC.length;
                            for (let b = 0; b < btL; b++) {
                                if (ptext.indexOf(VARS.Filters.MP_BLOCKED_TEXT_LC[b]) >= 0) {
                                    // -- before breaking out, get the text that matched.
                                    blockedText = VARS.Filters.MP_BLOCKED_TEXT[b];
                                    break;
                                }
                            }
                        }
                        if (blockedText.length > 0) {
                            break;
                        }
                    }
                }
                let box = item.closest('div[style]');
                //console.info(log + 'isBlockedText():', blockedText, ptexts, box);
                if (blockedText.length > 0) {
                    // -- hide the item
                    mp_hideBox(box, blockedText);
                }
                else {
                    // -- flag the item not to be scanned again
                    box.setAttribute(postAtt, '');
                }
            }
        });
    }

    function vf_scrubSponsoredBlock(post) {
        // - some videos have a sponsored block beneath the video block/section
        // - includes "watch more ___ videos by ___"
        let query = `:scope > div > div > div > div > div:nth-of-type(2) > div`;
        let blocks = post.querySelectorAll(query);
        if (blocks.length > 3) {
            let block = blocks[2]; // -- 3rd block
            let isJunk = block.querySelector(`:scope > div > div > div > div > div > div > span > a:not([${postAtt}])`);
            if (isJunk !== null) {
                hideBlock(block, isJunk, KeyWords.SPONSORED[VARS.language]);
            }
        }
    }

    function swatTheMosquitos(post) {
        // - scan the post for any gifs that is animating (pausing them once)
        let query = `div[role="button"][aria-label*="GIF"]:not([${postAtt}]) > i:not([data-visualcompletion])`;
        let agifs = Array.from(post.querySelectorAll(query));
        // console.info('pausing, agifs::', agifs);
        if (agifs.length > 0) {
            agifs.forEach(gif => {
                // mimic user clicking on animating gif
                // - which will trigger fb's click event.
                // - grab the A tag that is displayed when paused (uses Opacity)
                let gpar = gif.parentElement.parentElement.parentElement;
                let sib = gpar.querySelector(':scope > a');
                if (sib) {
                    let sibCS = window.getComputedStyle(sib);
                    if (sibCS.opacity === '0') {
                        // 0 = animating; 1 = paused;
                        gif.parentElement.click();
                        // console.info(log + 'swatTheMosquitos() - paused', gif);
                    }
                    gif.parentElement.setAttribute(postAtt, '1');
                }
            });
        }
    }

    function nf_scrubTheTabbies() {
        // - tablist : stories | reels | rooms
        // -- appears at top of NF
        let query = `div[role="main"] > div > div > div > div > div > div > div > div[role="tablist"]:not([${postAtt}])`;
        let tabLists = Array.from(document.querySelectorAll(query));
        if (tabLists.length > 0) {
            for (let tabList of tabLists) {
                // - parent is 4 levels up.
                let par = tabList.parentElement.parentElement.parentElement.parentElement;
                tabList.setAttribute(postAtt, 'tab list');
                hideFeature(par, KeyWords.NF_TABLIST_STORIES_REELS_ROOMS[VARS.language]);
            }
        }
    }

    function nf_scrubTheStories() {
        // - stories only
        // -- appears at top of NF
        //let query = `span[id="ssrb_stories_start"] ~ div > div:not([${postAtt}]) a[href*="/stories/create"]`;
        let query = `span[id="ssrb_stories_start"] ~ div:not([${postAtt}]) a[href*="/stories/create"]`;
        let stories = document.querySelector(query);
        if (stories !== null) {
            // - parent is a few levels up.
            //let par = stories.closest('span[id] ~ div > div');
            let par = stories.closest('span[id] ~ div');
            hideFeature(par, KeyWords.NF_STORIES[VARS.language], true);
        }
    }

    function nf_scrubTheRoom() {
        // - Create Room
        // -- appears below "What's on your mind, <name>?" box at top of News Feed
        let query = `div${postAtt} > div > div:not([${postAtt}]) > div[data-visualcompletion="ignore-dynamic"] div > i[data-visualcompletion="css-img"]`
        let createRoom = document.querySelector(query);
        if (createRoom !== null) {
            let par = createRoom.closest('div > div > div > div[data-visualcompletion="ignore-dynamic"]');
            par = par.parentElement.parentElement;
            hideFeature(par, KeyWords.NF_CREATE_ROOM[VARS.language]);
        }
    }

    function nf_cleanTheConsoleTable(item = 'Sponsored') {
        // -- mopping up the news feed aside panel. item values: Sponosored | Suggestions
        // let query = `div[role="complementary"] > div > div > div > span ~ div:first-of-type > div:not([data-visualcompletion])`; // pre Nov 2022
        // let query = 'div[role="complementary"] > div > div > div > div > div > div:not([data-visualcompletion])';
        let query = 'div[role="complementary"] > div > div > div > div > div:not([data-visualcompletion])';
        let asideBoxes = Array.from(document.querySelectorAll(query));
        // console.info(log + 'aside:', asideBoxes);
        if (asideBoxes.length > 0) {
            // -- only interested in the first container.
            if (asideBoxes[0].childElementCount > 0) {
                let elItem = null;
                let reason = '';
                if (item === 'Sponsored') {
                    elItem = asideBoxes[0].querySelector(`:scope > span:not([${postAtt}])`);
                    if (elItem && elItem.innerHTML.length > 0) {
                        reason = KeyWords.SPONSORED[VARS.language];
                    }
                }
                else if (item === 'Suggestions') {
                    elItem = asideBoxes[0].querySelector(`:scope > div:not([${postAtt}])`);
                    if (elItem && elItem.innerHTML.length > 0) {
                        // -- check for birthdays
                        let birthdays = Array.from(elItem.querySelectorAll('a[href="/events/birthdays/"]')).length > 0;
                        // -- check for "your pages and profiles"
                        // -- suggested groups only have 1 i[..] attribute
                        let pagesAndProfiles = Array.from(elItem.querySelectorAll('div > i[data-visualcompletion="css-img"]')).length > 1;

                        if (birthdays === false && pagesAndProfiles === false) {
                            reason = KeyWords.NF_SUGGESTIONS[VARS.language];
                        }
                    }
                }
                if (reason.length > 0) {
                    hideFeature(elItem, reason);
                }
            }
        }
    }

    function gf_cleanTheConsoleTable(item = 'Suggestions') {
        // mopping up the groups feed aside panel - suggested
        if (item === 'Suggestions') {
            let query = `a[href*="/groups/discover"]:not([${postAtt}]) > span > span`;
            let asideBoxes = querySelectorAllNoChildren(document, query, 1);
            // console.info(log + 'aside:', asideBoxes);
            if (asideBoxes.length > 0) {
                for (let asideBox of asideBoxes) {
                    // parent is 21 levels up ...
                    let par = asideBox;
                    for (let i = 0; i < 21; i++) {
                        par = par.parentElement;
                    }
                    asideBox.closest('a').setAttribute(postAtt, KeyWords.GF_SUGGESTIONS[VARS.language]);
                    hideFeature(par, KeyWords.GF_SUGGESTIONS[VARS.language]);
                }
            }
        }
    }

    function gf_setPostLinkToOpenInNewTab(post) {
        // -- open a group post in a new window from the groups feed
        // -- overcomes the fb bug in not listing the comments properly
        // -- (there's no equivalent function for news feed posts - no quick way of getting the post's URL)

        try {
            // - parts of the post's link can be found in the first link
            let postLink = Array.from(post.querySelectorAll('div > div > a[href*="/groups/"][role="link"]'))[0];
            if (postLink) {

                // -- get the container for the lower part of the header block.
                let header = postLink.parentElement.parentElement.parentElement.parentElement;
                let blockOfIcons = header.querySelector(':scope > div:nth-of-type(2) > div > div:nth-of-type(2) > span > span');

                if (blockOfIcons && blockOfIcons.querySelector('.cmf-link-new') === null) {
                    // -- need to create the group post's link
                    // -- nb: last post may not be a post - it could be the "You've completely caught up. Check again later for more updates" post.
                    // --     it doesn't have a set of icons ...

                    let newLink;
                    if (postLink.href.split('multi_permalinks').length > 1) {
                        // -- sample link: https://www.facebook.com/groups/424532172574012/?hoisted_section_header_type=recently_seen&multi_permalinks=720886619605231&__cft__[0]=AZV1vpwA0h21cVRZoS_GM3Q7H_Ul77iObEbYu2EA4oL7XyM-C78sQp5KIEpPooBCQZ2dmAMTvpCi1qYt5VxSTiCQCBkTmv8_Ra77OyacW2l685TVbttwb4qwKUm6AVr0zIapBxKODmLHgnNcYaSkXeCEOMEMdxQajQX8NTcniWYUA7OuVNY5C4F-ETSuab37Azw&__tn__=%3C%3C%2CP-R
                        // -- .. converted to: https://www.facebook.com/groups/424532172574012/posts/720886619605231/
                        // -- post link structure: https://www.facebook.com/groups/<group id>/posts/<post id>/
                        let postID = new URLSearchParams(postLink.href).get('multi_permalinks');
                        newLink = postLink.href.split('?')[0] + 'posts/' + postID + '/'
                    }
                    else {
                        // -- hmm, we don't have the info to reconstruct a group post link.
                        return;
                    }

                    // -- put in fb's spacer between icons.
                    let spacerWdot = '<span><span style="position:absolute;width:1px;height:1px;">&nbsp;</span><span aria-hidden="true"> · </span></span>'
                    let spanSpacer = document.createElement('span');
                    spanSpacer.innerHTML = spacerWdot;
                    blockOfIcons.appendChild(spanSpacer);

                    let container = document.createElement('span');
                    container.className = 'link-new';
                    let span2 = document.createElement('span');
                    let linkNew = document.createElement('a');
                    linkNew.setAttribute('href', newLink);
                    linkNew.innerHTML = VARS.iconNewWindow;
                    linkNew.setAttribute('target', '_blank');
                    span2.appendChild(linkNew);
                    container.appendChild(span2);

                    blockOfIcons.appendChild(container);
                }
            }
        }
        catch (error) {
            console.error(log + 'gf_setPostLinkToOpenInNewTab(); Error:', post, error);
        }
    }

    function scrubInfoBoxes(post) {
        // hide the "truth" info boxes that appear in posts having a certain topic.

        // - previous version of this code looked for "blocks"
        // - however, structure has change
        // - now using a more "heavy handed" approach

        let hiding = false;

        if (VARS.Options.OTHER_INFO_BOX_CLIMATE_SCIENCE) {
            let link = post.querySelector(`a[href*="${KeyWords.OTHER_INFO_BOX_CLIMATE_SCIENCE.pathMatch}"]:not([${postAtt}])`);
            if (link !== null) {
                // - block @ 5 levels up.
                let block = link.parentElement.parentElement.parentElement.parentElement.parentElement;
                hideBlock(block, link, KeyWords.OTHER_INFO_BOX_CLIMATE_SCIENCE[VARS.language]);
                hiding = true;
            }
        }
        //console.info(log+'scrubInfoBoxes():', hiding, VARS.Options.OTHER_INFO_BOX_CORONAVIRUS, KeyWords.OTHER_INFO_BOX_CORONAVIRUS.pathMatch, post);
        if (!hiding && VARS.Options.OTHER_INFO_BOX_CORONAVIRUS) {
            let link = post.querySelector(`a[href*="${KeyWords.OTHER_INFO_BOX_CORONAVIRUS.pathMatch}"]:not([${postAtt}])`);
            link = post.querySelector(`a[href*="/coronavirus_info/"]`);
            if (link !== null) {
                // - block @ 5 levels up.
                let block = link.parentElement.parentElement.parentElement.parentElement.parentElement;
                hideBlock(block, link, KeyWords.OTHER_INFO_BOX_CORONAVIRUS[VARS.language]);
                hiding = true;
            }
        }
        if (!hiding && VARS.Options.OTHER_INFO_BOX_SUBSCRIBE) {
            let link = post.querySelector(`a[href*="${KeyWords.OTHER_INFO_BOX_SUBSCRIBE.pathMatch}"]:not([${postAtt}])`);
            if (link !== null) {
                // - block @ 5 levels up.
                let block = link.parentElement.parentElement.parentElement.parentElement.parentElement;
                hideBlock(block, link, KeyWords.OTHER_INFO_BOX_SUBSCRIBE[VARS.language]);
                hiding = true;
            }
        }
    }

    function nf_hideNumberOfShares(post) {
        let query = `div[data-visualcompletion="ignore-dynamic"] > div:not([class]) > div:not([class]) > div:not([class]) > div[class] > div:nth-of-type(1) > div > div > span > div:not([id]) > span[dir]:not(${postAtt})`;
        let shares = Array.from(post.querySelectorAll(query));
        if (shares.length > 0) {
            for (let share of shares) {
                share.classList.add(VARS.cssHideNumberOfShares);
                if (VARS.Options.VERBOSITY_DEBUG) {
                    share.classList.add('show');
                }
                share.setAttribute(postAtt, 'Shares');
            }
        }
    }
    function gf_hideNumberOfShares(post) {
        // -- groups feed posts have same '# shares' html structure as news feed posts.
        // -- .. hence calling nf_hideNumberOfShares(...)
        nf_hideNumberOfShares(post);
    }

    function mopUpTheNewsFeed() {
        // mopping up the news feed page

        // -- aside's sponsored
        nf_cleanTheConsoleTable('Sponsored');

        // -- aside's suggestions
        if (VARS.Options.NF_SUGGESTIONS) {
            nf_cleanTheConsoleTable('Suggestions');
        }

        // -- tab list - not part of the general news feed stream
        if (VARS.Options.NF_TABLIST_STORIES_REELS_ROOMS) {
            nf_scrubTheTabbies();
        }

        // -- stories - not part of the general news feed stream
        if (VARS.Options.NF_STORIES) {
            nf_scrubTheStories();
        }

        // -- create room - not part of the general news feed stream
        if (VARS.Options.NF_CREATE_ROOM) {
            nf_scrubTheRoom();
        }

        // -- news feed stream ...
        // -- February 2023 - fb tweaked the structure
        let query = 'h3[dir="auto"] ~ div:not([class]) > div[class]';
        let posts = Array.from(document.querySelectorAll(query));
        if (posts.length < 2) {
            query = 'span[id="ssrb_feed_start"] ~ div > h3 ~ div';
            posts = Array.from(document.querySelectorAll(query));
            if (posts.length < 2) {
                // -- 21-22/10/2022 - fb tweaked the structure
                posts = Array.from(document.querySelectorAll(query + ' > div'));
            }
            if (posts.length < 2) {
                // -- December 2022 - try the [data-pagelet] attribute
                query = 'span[id="ssrb_feed_start"] ~ div > div div[data-pagelet]';
                posts = Array.from(document.querySelectorAll(query));
            }
            if (posts.length < 2) {
                // -- 31/10/2022 - fb tweaked the structure
                query = 'h3[dir="auto"] ~ div:not([class]) > div[class] > div';
                posts = Array.from(document.querySelectorAll(query));
            }
        }
        if (posts.length > 0) {
            // console.info(log+'---> mopUpTheNewsFeed()');
            // -- fb clears out "older" posts as the user scrolls ... so, only process the last X posts.
            let count = posts.length;
            let start = (count < 50) ? 0 : (count - 50);

            // for (let post of posts) {
            for (let i = start; i < count; i++) {
                let post = posts[i];

                if (post.innerHTML.length > 0) {

                    let hideReason = '';

                    if (post.hasAttribute(postAtt)) {
                        // -- already flagged ...
                        hideReason = 'hidden';
                        // -- however, fb is clearing out the posts as the user scrolls ...
                        if (post.querySelectorAll(':scope a').length === 0) {
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
                        if (hideReason === '' && VARS.Options.NF_SPONSORED_PAID) {
                            hideReason = nf_isSponsoredPaidBy(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_EVENTS_YOU_MAY_LIKE) {
                            hideReason = nf_isEventsYouMayLike(post);
                        }
                        if (hideReason === '' && VARS.Options.NF_BLOCKED_ENABLED) {
                            hideReason = nf_isBlockedText(post);
                        }
                        // -- placed here due to "overlaps" between this rule and at least 1 of the above rule.
                        if (hideReason === '' && isSponsored(post)) {
                            hideReason = KeyWords.SPONSORED[VARS.language];
                        }
                    }

                    if (hideReason.length > 0) {
                        // -- increment hidden count
                        VARS.echoCount++;
                        if (hideReason !== 'hidden') {
                            // -- post not yet hidden, hide it.
                            hidePost(post, hideReason);
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
                else {
                    // -- post.innerHTML.length === 0
                    if (post.hasAttribute(postAtt)) {
                        // -- fb is clearing out the posts as the user scrolls ...
                        nf_dropTags(post);
                    }
                }
            }
            // console.info(log+'<--- mopUpTheNewsFeed()');
        }
    }

    function mopUpTheGroupsFeed() {
        // mopping up the groups feed page

        // console.info(log+'mopUpTheGroupsFeed(), gfType:', VARS.gfType, '; hide an info box:', VARS.hideAnInfoBox);

        if (VARS.gfType === 'groups' || VARS.gfType === 'search') {
            // - main groups feed.
            // - search groups (same layout as groups feed)

            // -- aside's suggestions (also appears above feed on narrow pages)
            if (VARS.Options.GF_SUGGESTIONS) {
                gf_cleanTheConsoleTable('Suggestions');
            }

            // -- groups feed stream ...
            let query = 'div[role="feed"] > div';
            let posts = Array.from(document.querySelectorAll(query));
            if (posts.length) {
                // console.info(log+'---> mopUpTheGroupsFeed() - multiple groups');
                for (let post of posts) {

                    if (post.innerHTML.length > 0) {

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

                            if (hideReason === '' && isSponsored(post)) {
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
                                hidePost(post, hideReason)
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
                    // console.info(log+'mopUpTheGroupsFeed:', hideReason, VARS.echoCount, post);
                }
                // console.info(log+'<--- mopUpTheGroupsFeed() - multiple groups');
            }
        }
        else {
            // - single group ...
            let query = 'div[role="feed"] > div';
            let posts = Array.from(document.querySelectorAll(query));
            if (posts.length) {
                // console.info(log+'---> mopUpTheGroupsFeed() - single group');
                for (let post of posts) {

                    if (post.innerHTML.length > 0) {

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
                                hidePost(post, hideReason)
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
                }
                // console.info(log+'<--- mopUpTheGroupsFeed() - single group');
            }
        }
    }

    function mopUpTheWatchVideosFeed() {
        // mopping up the watch videos feed page

        let query;
        let queryBlocks;
        if (VARS.vfType === 'videos') {
            // -- normal feed
            query = 'div[id="watch_feed"] > div > div > div > div > div > div';
            queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
        }
        else if (VARS.vfType === 'search') {
            // -- videos --> search
            query = 'div[role="feed"] > div[role="article"]';
            queryBlocks = ':scope > div > div > div > div > div > div > div:nth-of-type(2)';
        }
        else if (VARS.vfType === 'item') {
            // -- videos --> search --> item (videos being listed below the video of interest)
            // -- vidoe - via link
            query = 'div[id="watch_feed"] > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div > div > div';
            queryBlocks = ':scope > div > div > div > div > div:nth-of-type(2) > div';
        }
        else {
            return;
        }
        if (VARS.vfType !== 'search') {
            let posts = Array.from(document.querySelectorAll(query));
            if (posts.length) {
                // console.info(log+'---> mopUpTheWatchVideosFeed()');
                for (let post of posts) {

                    if (post.innerHTML.length > 0) {

                        let hideReason = '';

                        if (post.hasAttribute(postAtt)) {
                            // -- already hidden
                            hideReason = 'hidden';
                        }
                        else if ((post[postPropDS] !== undefined) && (parseInt(post[postPropDS]) >= VARS.scanCountMaxLoop)) {
                            // -- skip these - already been scanned a few times
                        }
                        else {
                            doLightDusting(post);

                            if (isSponsored(post)) {
                                hideReason = KeyWords.SPONSORED[VARS.language];
                            }
                            if (hideReason === '' && VARS.Options.VF_BLOCKED_ENABLED) {
                                hideReason = vf_isBlockedText(post, queryBlocks);
                            }
                        }

                        if (hideReason.length > 0) {
                            // -- increment hidden count
                            VARS.echoCount++;
                            if (hideReason !== 'hidden') {
                                // -- post not yet hidden, hide it.
                                hidePost(post, hideReason)
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
                            // -- hide sponsored blocks (appears between video & comments)
                            vf_scrubSponsoredBlock(post);
                        }
                    }
                }
                // console.info(log+'<--- mopUpTheWatchVideosFeed()');
            }
        }
        else {
            // -- search videos
            // -- structure is different from regular video feed
            // -- thumbnail on left, text on right
            let posts = Array.from(document.querySelectorAll(query));
            if (posts.length) {
                // console.info(log+'---> mopUpTheWatchVideosFeed()');
                for (let post of posts) {

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
                            hidePost(post, hideReason)
                        }
                    }
                    else {
                        // -- not a hidden post
                        // -- reset hidden count
                        VARS.echoCount = 0;
                    }
                }
                // console.info(log+'<--- mopUpTheWatchVideosFeed()');
            }
        }
    }

    function mp_hideBox(box, reason) {
        box.classList.add(VARS.cssHideEl);
        box.setAttribute(postAtt, reason);
        if (VARS.Options.VERBOSITY_DEBUG) {
            box.classList.add('show');
        }
    }

    function mopUpTheMarketplaceFeed() {
        // mopping up parts of the Marketplace ...

        if (VARS.mpType === 'marketplace' || VARS.mpType === 'item') {
            // - standard marketplace page
            // - on the item page, there's listing of items to sell ... (similar structure to standard marketplace page)
            // -- "sponsored" is _not_ obfuscated;
            // -- nb: adguard base filter hides the label, but not the item/product ...
            let queryHeadings = `div:not([${postAtt}]) > a[href="/ads/about/?entry_product=ad_preferences"]`;
            // let queryItems = `div[style]:not([${postAtt}]) > span > div > div > div > a:not([href*="marketplace"])`;
            // let queryItems = `div[style]:not([${postAtt}]) > span > div > div > div:first-of-type > a:not([href*="marketplace"])`;
            let queryItems = `div[style]:not([${postAtt}]) > span > div:first-of-type > a:not([href*="marketplace"])`;
            let headings = document.querySelectorAll(queryHeadings);
            let items = document.querySelectorAll(queryItems);
            if ((headings.length > 0) && (items.length > 0)) {
                for (let heading of headings) {
                    // heading = heading.parentElement;
                    mp_hideBox(heading.parentElement, KeyWords.SPONSORED[VARS.language]);
                }
                for (let item of items) {
                    //item = item.closest('span').parentElement;
                    // item = item.closest('div[style]');
                    // let parItem = item.parentElement.parentElement.parentElement.parentElement.parentElement;
                    let parItem = item.parentElement.parentElement.parentElement;
                    mp_hideBox(parItem, KeyWords.SPONSORED[VARS.language]);
                }
            }
            if (VARS.Options.MP_BLOCKED_ENABLED) {
                mp_isBlockedText();
            }
        }
        if (VARS.mpType === 'item') {
            // -- viewing a marketplace item - a small sponsored box often shows up on the right.
            let query = `a[href*="/ads/"]:not([${postAtt}])`;
            let elements = Array.from(document.querySelectorAll(query));
            // console.info(`${log}MPItem() - elements:`, query, elements);
            if (elements.length > 0) {
                for (let element of elements) {
                    if (element.closest('div[data-pagelet^="BrowseFeedUpsell"]') === null) {
                        // -- found the sponsored box inside the mp item box.
                        // -- mp item do not have a parent element having data-pagelet attribute.
                        let spbox = element.parentElement.closest('h2');
                        if (spbox) {
                            spbox = spbox.closest('span');
                            mp_hideBox(spbox, KeyWords.SPONSORED[VARS.language]);
                            element.setAttribute(postAtt, KeyWords.SPONSORED[VARS.language]);
                            // (there's only one sponsored box - so break out)
                            break;
                        }
                    }
                }
            }
        }
        else if ((VARS.mpType === 'category') || (VARS.mpType === 'search')) {
            // - viewing a markplace category or marketplace search results
            // - (both have similar layout)
            let query = `a[href*="/ads/"]:not([${postAtt}])`;
            let elements = document.querySelectorAll(query);
            if (elements.length > 0) {
                for (let element of elements) {
                    // console.info(log + 'mp-clean:', element);
                    element.setAttribute(postAtt, element.innerHTML.length);
                    let itemBox = element.parentElement.closest('a').parentElement.parentElement.parentElement;
                    mp_hideBox(itemBox, KeyWords.SPONSORED[VARS.language]);
                }
            }
            if (VARS.Options.MP_BLOCKED_ENABLED) {
                mp_isBlockedText();
            }
        }
    }

    function mopUpTheSearchFeed() {
        // mopping up the search feed / results
        // -- (nb: has similar layout to news feed stream)
        // -- "borrow" news feed's text filter.
        if (VARS.Options.NF_BLOCKED_ENABLED) {
            let query = 'div[role="feed"] > div';
            let posts = Array.from(document.querySelectorAll(query));
            if (posts.length) {
                // console.info(log + '---> mopUpTheSearchFeed()');
                for (let post of posts) {

                    if (post.innerHTML.length > 0) {

                        let hideReason = '';

                        if (post.hasAttribute(postAtt)) {
                            hideReason = 'hidden';
                        }
                        else {
                            if (isSponsored(post)) {
                                hideReason = KeyWords.SPONSORED[VARS.language];
                            }
                            else {
                                if (VARS.NF_BLOCKED_ENABLED) {
                                    hideReason = nf_isBlockedText(post);
                                }
                            }
                        }

                        if (hideReason.length > 0) {
                            // -- increment hidden count
                            VARS.echoCount++;
                            if (hideReason != 'hidden') {
                                // -- post not yet hidden, hide it.
                                hidePost(post, hideReason);
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
        }
    }

    // ** Mutations processor
    function bodyMutating(mutations) {
        for (let mutation of mutations) {
            if ((mutation.type === 'childList') && (mutation.addedNodes.length > 0)) {
                if (VARS.prevURL !== window.location.href) {
                    // - page url has changed ... refresh the bodyObserver.
                    runMO();
                }
                else if (VARS.isAF) {
                    // -- isAF := any feed
                    // -- nb: don't bother with looping through mutation.addedNodes.length - 99.5% of the time there's only one ...
                    let mnode = mutation.addedNodes[0]; // placed here for error trapping block
                    // try {
                    VARS.mutationsCount++;
                    // if (VARS.mutationsCount % 100 === 0) {
                    //     console.info(log+'bodyMutating(); mutationsCount:', VARS.mutationsCount);
                    // }
                    if (VARS.mutationsCount > VARS.mutationsInitSkip) {
                        //if (['A', 'DIV', 'I', 'IMG', 'OBJECT', 'SPAN', 'svg', '#text'].indexOf(mnode.nodeName) > 0) {
                        if (['A', 'DIV', 'IMG', 'SPAN', '#text', 'svg'].indexOf(mnode.nodeName) > 0) {
                            if ((mnode.nodeType === Node.ELEMENT_NODE) && ((mnode.innerHTML.length < 129) || (mnode.textContent.length === 0))) {
                                // - skip these ...
                            }
                            else if (VARS.isNF) {
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
                        }
                    }
                    // }
                    // catch (error) {
                    //     console.error(log + 'fn bodyMutating() :: Error! mnode:', mnode);
                    //     console.error(log + 'fn bodyMutating() :: Error! message:', error.message);
                    //     console.error(log + 'fn bodyMutating() :: Error! stack:', error.stack);
                    // }
                }
            }
        }
    };

    // ** Mutation Observer
    let bodyObserver = new MutationObserver(bodyMutating);
    // ** MO starter / restarter
    let firstRun = true;

    function runMO() {
        // run code soon as the elements HEAD, BDDY and variable Options are ready/available.
        // or when page url has changed ...
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
            }
        }
        else {
            // HEAD / BODY / Options not yet ready ...
            // -- try again ...
            // console.info(log + 'runMO(); - not yet ready ...');
            setTimeout(runMO, 10);
        }
    }
    runMO();

})();
