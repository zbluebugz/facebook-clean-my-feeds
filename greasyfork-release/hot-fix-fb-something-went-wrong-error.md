# 10th December 2023.

When facebook-clean-my-feeds userscript is used with uBO, it can cause the following error message to show up "Something went wrong" in FB.

Source of this issue is with one of uBlock Origin's filter-rule for sponsored posts.

To fix this, you need to tweak's uBO filter-rule.
  
In uBO "My filters" add the following:
```
! - undo uBO's sponsored post detection rule - it is too destructive when used with the fb-cmf script.
facebook.com#@#div[aria-posinset] :is(h3, h4) span > a[href]:not([href^="/groups/"]):not([href*="section_header_type"]):matches-attr(href="/__cft__\[0\]=[-\w]{270,}/"):upward(div[aria-posinset]):remove()
```

If you want to retain uBO's sponsored post detection rule and have it work with fb-cmf script, use this in "My filters" (above rule is required!)
```
! - uBO's sponsored post detection rule (not destructive) - works with fb-cmf script.
facebook.com##div[aria-posinset] :is(h3, h4) span > a[href]:not([href^="/groups/"]):not([href*="section_header_type"]):matches-attr(href="/__cft__\[0\]=[-\w]{270,}/"):upward(div[aria-posinset])
```
