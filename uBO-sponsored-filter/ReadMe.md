JavaScript code for building a "Sponsored" filter rule for use in uBlock Origin.

How to use:
- Copy the contents of the "sponsored-filter-builder.js" file
- Switch to Facebook
- In Facebook, scroll down until you see at least 1 sponsored posts (more would be better) and keep it visible.
- DO NOT move the mouse over the "Sponsored" post - if you have by mistake, refresh the page.
- Press the key "F12" - this will bring up the DevTools window
- Switch to the "Console" tab in the DevTools
- Paste the contents of the "sponsored-filter-builder.js" file into the console.
- If the code is successful in finding at least one sponsored post, it'll display the filter rule ...
- If the code is _not_ successful in finding at least one sponsored post, then either the sponsored post is not there or it uses a different HTML pattern
