# FB - Clean My Feeds


You should be in control of what you see online, but Facebook throws all kinds of garbage at you making it practically impossible to see updates from your friends and pages you care about. "FB - Clean My Feeds" is the mop bucket you roll in when you want control back.

Originally built by **[zbluebugz](https://github.com/zbluebugz)** and battle-tested since 2021.

Thank you to **[trinhquocviet](https://github.com/trinhquocviet)** for their [simplified_ui branch](https://github.com/trinhquocviet/facebook-clean-my-feeds/tree/simplified_ui), which has been merged here.

## Installation

1. Install a userscript manager such as **[Violentmonkey](https://violentmonkey.github.io/)**, **[Tampermonkey](https://www.tampermonkey.net/)**, or **[FireMonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/)**.
2. Add the script (your preference of method):
   - From this repo: open [`fb-clean-my-feeds.user.js`](https://raw.githubusercontent.com/Artificial-Sweetener/facebook-clean-my-feeds/main/fb-clean-my-feeds.user.js) and let your userscript manager import it.
   - Visit the [GreasyFork release page](https://greasyfork.org/en/scripts/552339-fb-clean-my-feeds-5-05) and click **install this script**.
3. Reload Facebook. The mop icon appears bottom-left by default. You can set it to appear in the top-right or hide it completely.

## What it does

### Kill the Sponsored Sludge
- Nukes "Sponsored" posts across News, Groups, Watch, Marketplace, Search, and Reels.
- Filters "Paid Partnership" and "Suggested for you" detours before they ever load.

### Control The Feed Types
- Pause or hide reels, reels-and-short-videos units, and those "Stories" stacks that eat half the viewport when you first load in.
- Toggle individual feeds on/off. Hate Marketplace? Bye. Love Watch but loathe live videos? Tweak it.

### Text & Phrase Filtering
- Build personal blocklists for words, phrases, or user-defined spam. Regular expression mode is there when you want surgical precision.
- Cap the maximum "Likes" a post can have before it gets swept. No more viral nonsense unless you allow it.

### Clean the Noise
- Strip share counts, info boxes, survey promos, "People You May Know", "Follow", and any "Participate" prompts trying to drag you into engagement traps.
- Optional pause button for autoplaying GIFs and videos so you're not ambushed by motion.

### Polished Controls
- A floating toggle button with the simplified-ui styling updates from trinhquocviet's branch.
- Dialog rewritten for clarity, with translated labels and dark-mode friendly theming. All configuration happens in one place, no menu maze.

## Using the Control Panel

- Click the **Clean My Feeds** mop icon (or open it from your userscript manager menu) to bring up the settings dialog.
- Options are grouped by feed (News, Groups, Watch, Marketplace, Profiles, Search, Reels). Flip the switches you want, save, and the script immediately re-sweeps the page.
- Toggle **Debug** to reveal hidden posts with dotted outlines so you can verify what's being filtered.
- Use **Export / Import** to back up your settings. The script stores preferences locally; incognito/private browsing wipes them when the session ends.

### Language Support

The dialog and detection dictionaries ship with many UI languages so localized feeds stay clean.

<details>
  <summary>Supported languages</summary>

- English
- Português (Portugal & Brazil)
- Deutsch
- Français
- Español
- Čeština
- Tiếng Việt
- Italiano
- Latviešu
- Polski
- Nederlands
- עברית
- العربية
- Bahasa Indonesia
- 中文（简体）
- 中文（繁體）
- 日本語
- Suomi
- Türkçe
- Ελληνικά
- Русский
- Українська
- Български

</details>

If you spot gaps or mistranslations, open an issue. I'd love to make this even friendlier for non-English feeds.

## Changelog

### v5.06 - October 2025
- Added an optional "Try Meta AI" News Feed filter to hide Meta AI promo cards.
- Merged language fallbacks so new options automatically inherit English copy.

### v5.05 - October 2025
- Promoted the userscript to the repo root and removed legacy beta/uBO folders
- Rewrote the README with new install docs, credits, and language toggle
- Bumped metadata to keep versioning honest
- New GreasyFork release
- Fixed support link in script

### v5.04 - October 2025
- Fixed hidden post gaps by fully collapsing hidden containers
- Updated toggle button styling to match Simplified UI branch

### v5.03 - October 2025
- Improved follow filtering defaults and detection
- Updated default hide options and feed selectors
- Updated metadata (authors, license)
- Pulled in menu styling from Simplified UI branch

<details>
  <summary>Older releases</summary>

### v5.02 - November 2024
- Updated News Feed Sponsored detection rules

### v5.01 - October 2024
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

### v4.31 - June 2024
- Reels and Videos - added extra detection rule (dictionary base)
- Survey - updated detection rule
- Reels - option to stop looping

### v4.30 - March  2024
- Hot fix
- Updated Marketplace feed detection component

### v4.29 - February 2024
- !!! Hot fix !!!
- Issues with FB, Adblockers and FB-CMF - all clashing
- Adjusted News Feed's query rules
- Temporarily disabled News Feed's message/notification tab (will be restored in next version)

### v4.28 - January 2024
- Enabled option to toggle Sponsored post detection rule (for uBO compatibility)
- Added Video's "Live" detection rule
- Enabled Reels' video controls
- Added Ukrainian (Українська)
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

### v4.27 - December 2023
- Added Russian (Русский) - supplied by github user Kenya-West

### v4.26 - November 2023
- Added web.facebook.com to @match conditions
- Added Survey detection component (Home / News feed)
- Added Follow detection component (Home / News feed)
- Added Participate detection component (Home / News feed)
- Updated Marketplace detection rules

### v4.25 - November 2023
- Added extra filter rule for nf_isSuggested() (for "Suggested for you" posts) - fix supplied by opello (via github)
- Added News Feed's Stories post detection rule.
- Revised function scanTreeForText() to include other elements for scanning
- Fixed bug with Marketplace prices' filter
- Reduce possible conflicts with uBlock Origin / other adblockers
- Code tweaks

### v4.24 - September 2023
- Fixed issues with v4.23 (selection/detection rules)
- Code tweaks

### v4.23 - August 2023
- Fixed bug with showing Marketplace's hidden items
- Updated Marketplace detection rules
- Split Marketplace's text filter into two - prices and description
- Merged "Stories" with "Stories | Reels | Rooms" detection rules.
- Fixed bug with CMF's hidden dialog box's text being included in CTRL+F search (now excluded)
- Dropped "Create room" detection component (no longer listed in FB)

### v4.22 - July 2023
- Updated News Feed posts selection rule (FB changed structure)
- Updated Events you may like detection rule

### v4.21 - June 2023
- Updated news feed detection rules - for older HTML structures
- Updated watch videos feed detection rules
- Added Greek (Ελληνικά)
- Updated various functions

### v4.20 - May 2023
- Added "Feeds (most recent)" to the clean up rules (FB recently introduced the "Feeds (most recent)" feature)
- Updated Search Feed sponsored posts rule

### v4.19 - May 2023
- Updated News Feed posts selection rule (FB changed structure)

### v4.18 - May 2023
- Updated News Feed sponsored posts rule
- Added News Feed sponsored video posts rule
- Updated News Feed suggested posts rule

### v4.17 - March 2023
- Fixed issue with GreaseMonkey & FireMonkey not able to run userscript
- Updated News Feed sponsored posts rule
- Updated Videos Feed sponsored posts rule
- Added option to hide "# shares" on posts (news + groups)

### v4.16 - February 2023
- Fixed issue with <no message> setting breaking FB
- Code tweaks

### v4.15 - February 2023
- Updated News Feed sponsored posts rule (FB changed structure)
- Updated Marketplace Feed > Item page posts rules
- Code tweaks

### v4.14 - January 2023
- Updated News Feed Suggestion/Recommendation posts rule (FB changed structure)
- Updated News Feed verbosity behaviour. FB limits 40 posts in News Feed. Show either no notification or 1 post hidden. 2+ posts hidden notification disabled.
- Groups Feed posts - added icon to open post in new window (fix annoying FB bug with not showing comments properly)

</details>

## Contributing & Support

- **Issues & Features:** Open an issue if something breaks or Facebook changes the markup again. I read them.
- **Pull Requests:** Yes please. Keep them focused and describe what you touched.
- **Translations:** If you can help keep the language dictionary sharp, I'm all ears.

## To Do...
- **This script is huge!** Let's split it up and then create a bundling pipeline so that the system is easier to build on, reason about, and maintain

## License & Credits

- **License:** GNU General Public License v3.0. You are free to share, tweak, and improve as long as you pass those freedoms on.
- **Original Project:** [facebook-clean-my-feeds](https://github.com/zbluebugz/facebook-clean-my-feeds) by [zbluebugz](https://github.com/zbluebugz)
- **Simplified UI & styling refresh:** [Simplified_UI branch](https://github.com/trinhquocviet/facebook-clean-my-feeds/tree/simplified_ui) by [trinhquocviet](https://github.com/trinhquocviet)
- **Current Maintainer:** [Artificial Sweetener](https://github.com/Artificial-Sweetener) - me!~

## From the Maintainer 💖

I hope this script helps you reclaim your feed. I promise to be your ally in the fight against stuff you don't wanna see online.

- **My Website & Socials**: See my art, poetry, and other dev updates at [artificialsweetener.ai](https://artificialsweetener.ai).
- **If you like this project**, it would mean a lot to me if you gave me a star here on Github!! ⭐
