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

## Changelog

### v5.04 – October 2025
- Fixed hidden post gaps by fully collapsing hidden containers
- Updated toggle button styling to match Simplified UI branch

### v5.03 – October 2025
- Improved follow filtering defaults and detection
- Updated default hide options and feed selectors
- Updated metadata (authors, license)
- Pulled in menu styling from Simplified UI branch

<details>
  <summary>Older releases</summary>

### v5.02 – November 2024
- Updated News Feed Sponsored detection rules

### v5.01 – October 2024
- Changed the detect-changes-engine component
- Updated dialog-box
- Users can change dialog-box's ui language
- Updated label for post has been hidden component
- Added Animated GIFs post detection component (News Feed + Groups Feed) (gif/mp4)
- Removed consecutive hidden posts facility from Watch Videos (FB keeps a few posts as you scroll)
- Added Duplicate Video detection component (Watch Videos feed)
- Added Instagram Video detection component (Watch Videos feed)
- Added code to remove "incomplete" Watch Video posts (posts with no content)
- Added icon to open a Watch Videos Feed post in a new window
- Updated News Feed's detection rule
- Updated Group Feed's dection rule
- Updated Marketplace detection rules
- Updated Search posts detection rule
- Updated News Feed's Sponsored posts detection rule
- Added option to Disable looping videos in Reels
- Fix bug with showing/hiding the FB-CMF button
- Updated nf_isSuggested filter rules
- Updated nf_isPeopleYouMayKnow filter rule
- Added RegExp option to text filters
- Code tweaks

### v4.31 – June 2024
- Reels and Videos - added extra detection rule (dictionary base)
- Survey - updated detection rule
- Reels - option to stop looping

### v4.30 – March  2024
- Hot fix
- Updated Marketplace feed detection component

### v4.29 – February 2024
- !!! Hot fix !!!
- Issues with FB, Adblockers and FB-CMF - all clashing
- Adjusted News Feed's query rules
- Temporarily disabled News Feed's message/notification tab (will be restored in next version)

### v4.28 – January 2024
- Enabled option to toggle Sponsored post detection rule (for uBO compatibility)
- Added Video's "Live" detection rule
- Enabled Reels' video controls
- Added Ukrainian (Україна)
- Added Bulgarian (български)
- Dialog box - reworded "Miscellaneous items" to "Supplementary / information section"
- Dialog box - added "Reset" button to reset the options
- Fixed bug with Survey detection component
- Fixed bug with Importing settings from a file
- Revised message/notification tab for News feed
- Revised Create Stories detection rule
- Add option to filter posts by number of Likes
- Fixed bug with function scanTreeForText() - failing to detect "Anonymous participant"
- Updated Groups Feed filter rules - new HTML structure via (Feeds > Groups)
- Added display of script's version number to dialog box

### v4.27 – December 2023
- Added Russian (Русский) - supplied by github user Kenya-West

### v4.26 – November 2023
- Added web.facebook.com to @match conditions
- Added Survey detection component (Home / News feed)
- Added Follow detection component (Home / News feed)
- Added Participate detection component (Home / News feed)
- Updated Marketplace detection rules

### v4.25 – November 2023
- Added extra filter rule for nf_isSuggested() (for "Suggested for you" posts) - fix supplied by opello (via github)
- Added News Feed's Stories post detection rule.
- Revised function scanTreeForText() to include other elements for scanning
- Fixed bug with Marketplace prices' filter
- Reduce possible conflicts with uBlock Origin / other adblockers
- Code tweaks

### v4.24 – September 2023
- Fixed issues with v4.23 (selection/detection rules)
- Code tweaks

### v4.23 – August 2023
- Fixed bug with showing Marketplace's hidden items
- Updated Marketplace detection rules
- Split Marketplace's text filter into two - prices and description
- Merged "Stories" with "Stories | Reels | Rooms" detection rules.
- Fixed bug with CMF's hidden dialog box's text being included in CTRL+F search (now excluded)
- Dropped "Create room" detection component (no longer listed in FB)

### v4.22 – July 2023
- Updated News Feed posts selection rule (FB changed structure)
- Updated Events you may like detection rule

### v4.21 – June 2023
- Updated news feed detection rules - for older HTML structures
- Updated watch videos feed detection rules
- Added Greek (Ελληνικά)
- Updated various functions

### v4.20 – May 2023
- Added "Feeds (most recent)" to the clean up rules (FB recently introduced the "Feeds (most recent)" feature)
- Updated Search Feed sponsored posts rule

### v4.19 – May 2023
- Updated News Feed posts selection rule (FB changed structure)

### v4.18 – May 2023
- Updated News Feed sponsored posts rule
- Added News Feed sponsored video posts rule
- Updated News Feed suggested posts rule

### v4.17 – March 2023
- Fixed issue with GreaseMonkey & FireMonkey not able to run userscript
- Updated News Feed sponsored posts rule
- Updated Videos Feed sponsored posts rule
- Added option to hide "# shares" on posts (news + groups)

### v4.16 – February 2023
- Fixed issue with <no message> setting breaking FB
- Code tweaks

### v4.15 – February 2023
- Updated News Feed sponsored posts rule (FB changed structure)
- Updated Marketplace Feed > Item page posts rules
- Code tweaks

### v4.14 – January 2023
- Updated News Feed Suggestion/Recommendation posts rule (FB changed structure)
- Updated News Feed verbosity behaviour. FB limits 40 posts in News Feed. Show either no notification or 1 post hidden. 2+ posts hidden notification disabled.
- Groups Feed posts - added icon to open post in new window (fix annoying FB bug with not showing comments properly)

</details>

