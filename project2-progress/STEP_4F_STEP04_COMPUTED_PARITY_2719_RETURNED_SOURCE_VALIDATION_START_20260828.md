# Step 4F · Step04 computed parity 2.7.19 returned-source validation — START

User returned the two manually edited source files after applying the bounded computed-parity correction batch:

- `functions.php` expected version: `2.7.19`
- `assets/css/spatial-flow.css`

Validation scope before any runtime rerun:

1. bytes / logical lines / SHA256
2. PHP syntax for `functions.php`
3. `SPATIAL_FLOW_CHILD_VERSION` exact ownership
4. CSS brace / comment balance
5. CSS parser errors
6. exact presence of Parts A-H correction anchors
7. absence of the corresponding old blocks where applicable
8. compare actual file deltas against the previously issued expected baseline

No runtime JSON rerun and no new source edit will be instructed until returned-source validation completes.
