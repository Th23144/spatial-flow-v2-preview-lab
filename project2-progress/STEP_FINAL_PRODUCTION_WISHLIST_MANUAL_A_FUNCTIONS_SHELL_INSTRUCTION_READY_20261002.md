# Final Production Wishlist — Manual Step A / functions.php Shell Instruction Ready

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Target

`functions.php`

Fresh baseline:
- bytes: 637,183
- logical lines: 12,174
- SHA256: `c790b631f0ad205ea2581abdd52fffde21a8b744e68c19f0824005ae0fbe3da4`

## Replacement boundary

Start anchor — expected 1 match:
`if ( ! function_exists( 'spatial_flow_wishlist_page_shell' ) ) {`

End anchor — expected 1 match:
`add_filter( 'the_content', 'spatial_flow_wishlist_page_shell', 99 );`

The exact bounded block between those anchors is:
- old bytes: 9,506
- old logical lines: 149
- exact block occurrence count: 1

## New block

Prepared new shell:
- new bytes: 6,429
- new logical lines: 113

Purpose:
- remove the old V3/Notes/Empty-preview composition from active Wishlist shell;
- retain live YITH output untouched;
- introduce accepted Harmonized page skeleton:
  - editorial intro;
  - live count toolbar;
  - Collection Index mount;
  - mobile jump-selector mount;
  - live YITH room;
  - truthful empty state;
- no CSS/JS mapping yet.

## Expected file after Step A

- bytes: 634,106
- logical lines: 12,138
- SHA256: `515e250d206043fb4e4b1af4d6977e4fa7b1190b38c3672597aa1c9744e805fb`
- byte delta: -3,077
- line delta: -36

Static validation against simulated replacement:
- `php -l`: PASS

## Runtime warning

After Step A alone the Wishlist is NOT ready for visual review because the new shell has not yet received its canonical CSS / JS mapping.

Do not judge page appearance after Step A.

## Verification gate

User must return the modified `functions.php`.

Required checks before Step B:
- bytes;
- logical lines;
- SHA256;
- PHP syntax;
- start/end anchor count;
- presence of new H02 shell markers.

Only after PASS may CSS mapping begin.

## Rollback

Rollback unit is the same bounded shell function:
replace the new H02 shell block from the same start/end anchors with the original v2.7.50 shell block.

## Status

MANUAL STEP A INSTRUCTION = READY.
WAITING FOR USER EDIT / RETURNED FILE.
