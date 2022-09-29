JavaScript code for building a "Sponsored" filter rule for use in uBlock Origin.

How to use:
- Copy the contents of the "sponsored-filter-builder.js" file
- Switch to Facebook
- In Facebook, scroll down until you see at least 1 sponsored posts (more would be better) and keep it visible.
- DO NOT move the mouse over the "Sponsored" post - if you have by mistake, refresh the page.
- Press the key "F12" - this will bring up the DevTools window
- Switch to the "Console" tab in the DevTools
- Paste the contents of the "sponsored-filter-builder.js" file into the console.
- If the code is successful in finding at least one sponsored post, it'll display the filter rule ... copy the results into uBlock Origin
- If the code is _not_ successful in finding at least one sponsored post, then either the sponsored post is not there or it uses a different HTML pattern
 
What do I do with this rule?
- Copy the new filter into uBlock Origin (My filters' tab)
- Reload Facebook and look for posts having a pink dotted border
- If only the sponsored posts have the pink border, then you can update the rule by removing the _:style(....)_ code from the rule.
- If non-sponsored posts also have the pink border, then the rule needs to be "tightened" up - look for the 6 numbers in this format _(##|##|##|##|##|##)_ and remove the first number, save, reload FB, check again. If non-sponsored posts still being marked, remove the last number and tray again. Repeat one more time for first and last, until the middle 2 numbers remain.
