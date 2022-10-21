### JavaScript code for building a "Sponsored" filter rule for use in uBlock Origin

#### How to use:
- Copy the contents of the "sponsored-filter-builder.js" file
- Switch to Facebook
- In Facebook, scroll down until you see at least 1 sponsored posts (more would be better) and keep it visible
- DO NOT move the mouse over the "Sponsored" post - if you did by mistake, refresh the page and look for a sponsored post
- Press the key "__F12__" - this will bring up the __DevTools__ window
- Switch to the "__Console__" tab in the __DevTools__
- Paste the contents of the "__sponsored-filter-builder.js__" file into the __Console__
- If the code is _successful_ in finding at least one sponsored post, it'll display a filter rule
- If the code is _not_ successful in finding at least one sponsored post, then either the sponsored post is not there or it uses a different HTML pattern
 
#### What do I do with this rule?
- __Copy__ the new rule into __uBlock Origin__ (My filters' tab)
- Reload Facebook and look for posts having a __pink dotted border__
- If only the sponsored posts have the pink border, then update the rule as follows:
  - replace __:style(border:5px dotted pink !important; width:66% !important;)__ with __:style(width:0 !important; height:0 !important;)__
- If non-sponsored posts also have the pink border, then the rule needs to be "_tightened_" up - look for the 6 numbers in this format __(##|##|##|##|##|##)__ and remove the first number, save, reload FB, check again. If non-sponsored posts still being marked, remove the last number and try again. Repeat one more time for first and last, until the middle 2 numbers remain. When done, follow the previous step in updating the rule.

#### Last updated ####
2022-10-21:
- Updated News Feed sponsored detection code
2022-10-19:
- Updated News Feed Sponsored detection code
- Disabled Suggested detection code - too many false-positive hits. Waiting for FB to give me some suggestions (in news feed).
