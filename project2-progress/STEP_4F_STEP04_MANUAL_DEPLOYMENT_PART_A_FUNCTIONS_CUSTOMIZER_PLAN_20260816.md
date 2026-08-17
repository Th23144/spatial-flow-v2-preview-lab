# Step 4F · Step04 Manual Deployment · Part A · functions.php Customizer Block · 2026-08-16

## Scope

One bounded replacement only: replace the existing Step-5F Order Received / Thank You Customizer owner block in `functions.php` with the strict-1:1 Step04 V3 Customizer block.

Do **not** change `SPATIAL_FLOW_CHILD_VERSION` in this part. The cache/version bump is intentionally deferred until the visual/template/CSS deployment is complete.

## Current verified baseline

Runtime path:

`wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/functions.php`

Uploaded source:

`functions(20260816-205325).php`

- bytes: 609,465
- logical lines: 11,657
- SHA256: `62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631`
- PHP syntax: PASS
- version remains: `2.7.13`

## Exact bounded owner

START anchor, expected count = 1:

`/* === Spatial Flow Step 5F: Order Received / Thank You Native Page Controls START ===`

END anchor, expected count = 1:

`add_action( 'customize_register', 'spatial_flow_order_received_customizer', 54 );`

Current owner block:

- start line: 7,978
- end line: 8,109
- bytes: 8,480
- lines: 132
- SHA256: `b28ddc185e77f041ea7514852273024f8d4649352be238e9643a3d225064b237`

Replacement owner block:

- bytes: 11,030
- lines: 166
- SHA256: `709c17bdcba97d140362f05657656e72885cfaece0f120bf886c565d5cedad2f`

Expected delta:

- +2,550 bytes
- +34 logical lines

The growth is explained entirely by the Step04 V3 Customizer namespace, status-family copy controls and heading sanitizer support. No unrelated function family is added or removed.

## Expected post-Part-A file

If and only if the user replaces exactly the bounded owner block and leaves version `2.7.13` untouched:

- bytes: 612,015
- logical lines: 11,691
- SHA256: `b1824ea4f41f7515c03ecaf4326f18b5a64d29aedfa6e63353298c6f81d04dee`
- PHP syntax: PASS
- version: `2.7.13`

A local hybrid construction from the verified baseline plus this single owner-block replacement passed `php -l`.

## Safety / rollback

If either anchor count is not exactly 1, STOP and do not edit.

Rollback is the exact reverse replacement: replace the new Step-5F owner block with the original 8,480-byte / 132-line block from the verified baseline.

## Next gate

After the user saves Part A, require the returned current `functions.php` for immediate bytes / lines / SHA256 / PHP syntax validation before moving to Part B.
