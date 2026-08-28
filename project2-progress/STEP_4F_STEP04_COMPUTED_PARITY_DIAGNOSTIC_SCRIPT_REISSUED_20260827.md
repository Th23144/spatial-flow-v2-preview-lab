# Step 4F · Step04 computed-parity diagnostic script reissued · 2026-08-27

User requested the exact diagnostic code again after visible blockers passed.

Current gate:
- visible blockers runtime recheck: PASS;
- full 17-step matrix: do not rerun;
- next action: regenerate the same eight Step04 computed-parity JSON captures using one fixed diagnostic script;
- comparison remains code-first: reference source + `getComputedStyle()` + `getBoundingClientRect()` + numeric diff;
- screenshots remain residual visual evidence only.

Required capture set:
1. Confirmed reference desktop
2. Processing production desktop
3. Confirmed reference mobile 390x844
4. Processing production mobile 390x844
5. Pending reference desktop
6. Pending production desktop
7. Pending reference mobile 390x844
8. Pending production mobile 390x844

Use the same diagnostic script for all eight captures and return all eight JSON files together for one consolidated diff pass.
