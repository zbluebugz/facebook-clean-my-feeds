# FB - Clean My Feeds

Mainly hides sponsored and certain suggested posts in Facebook's News Feed, Groups Feed, Watch (Videos) Feed and Marketplace. Also filters out posts and videos using partial text match.

Works with most languages (i.e. not 100% reliant on dictionary of words)

User-interface languages supported:
- English
- Português (Portugal & Brazil)
- Deutsch (Germany)
- Français (France)
- Espanol (Spain)
- Čeština (Czech)
- Tiếng Việt (Vietnam)
- Italino (Italy)
- Latviešu (Latvia)
- Polski (Poland)
- Nederlands (Netherlands)
- עִברִית (Hebrew)
- العربية (Arabic)
- Bahasa Indonesia (Indonesia)
- 简体中文 (Chinese Simplified)
- 繁體中文 (Chinese Traditional)
- 日本 (Japan)
- Sumoi (Finland)
- Türkçe (Turkey)
- Ελληνικά (Greece)
- Русский (Russia)
- Україна (Ukraine)
- България (Bulgaria)

JavaScript code to use with Tampermonkey, Greasemonkey, Violentmonkey, Firemonkey, etc to hide certain parts of FB.

Files in the "greasyfork-release" folder are the versions released to [Greasy Fork](https://greasyfork.org/en/scripts/431970-fb-clean-my-feeds) for other people to use.

Files in the "beta" folder are the backup of previous versions

Versions 3.01 - 3.11: 
- Change options via the Script manager.

Versions 3.12+ & 4.xx: 
- Change options via the Clean My Feeds button in Facebook.


Currently, mobile devices, Safari and Internet Explorer are not supported.

## Tip
fb-cmf userscript does _not_ block video ads (begin-roll, mid-roll, end-roll), however there's a work-around.
1) Install [uBlock Origin](https://github.com/gorhill/uBlock) in your browser(s)
2) In uBO, goto "My filters" tab and paste in the following rule: `facebook.com##+js(set, Object.prototype.scrubber, undefined)`

Note: I have not tested this in other content/ad-blockers.
