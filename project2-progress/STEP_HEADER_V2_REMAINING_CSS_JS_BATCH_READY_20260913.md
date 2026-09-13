# Project 2 - Header V2 remaining CSS + JS batch ready - 2026-09-13

Status: READY TO APPLY as one coherent remaining Header V2 implementation batch.

Current state:
- functions.php Parts A/B/C already applied; final combined audit pending.
- header.php Part D already applied; final combined audit pending.
- Header V2 shell/progressive-drawer CSS safety repair PASS at commit 66f62feee227587432c08033614fe86cb39e2834.
- old Step 5H SAFE1 + SAFE2 Mega CSS still needs replacement.
- Header V2 JavaScript behavior is not yet applied.
- runtime/browser acceptance has not started.
- Main-site Header remains Not done.

Remaining batch:
1. CSS: replace the old Step 5H SAFE1 + SAFE2 Mega presentation with the new attached editorial Shop Mega owner. Applied offline to returned spatial-flow(20260913-211024).css, the resulting file validates at 615,917 bytes, 21,954 newline-terminated lines, SHA256 35ffe54928382072c135747071bff31b36b18f4ad3b53b9105ea9425e09a1347, braces 3443/3443, comments 278/278, parser errors 0.
2. JavaScript: add the progressive main mobile-menu branch while preserving the Journal legacy accordion path; add dynamic Header/Mega top synchronization; add its init call. The prepared JavaScript snippets pass node --check.

Locked boundaries remain unchanged: desktop sf_primary, mobile sf_mobile, real Woo taxonomy, real Search, YITH Saved/Wishlist, Woo Bag/count, Checkout omitted only from permanent mobile navigation, Journal Header kept on the legacy branch, and no Footer/Shop archive/Cart/Checkout/Thank You/Single Product implementation changes.

Apply CSS and JavaScript in the same feature batch. Preserve supplied indentation. After both are saved, return the final current files together for one combined Header V2 source audit before runtime testing.