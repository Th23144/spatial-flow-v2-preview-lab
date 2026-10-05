# Final Production Search — H01 Desktop Runtime Pass / Customizer Title Note

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Runtime review

User reviewed the Search H01 desktop runtime and stated that, aside from the two hero title lines, the page appears acceptable.

Functionality was reported as working.

## Arrow fallback fix

Returned file:
- `global-search(3).php`

Verified:
- 17,463 bytes
- 287 logical lines
- SHA256 `78f791fedba5ef51a0e74251b509ad8319d2da1bdabb57def3f4c9204f6ad5dc`
- trailing LF present
- 6 text-presentation arrow entities present
- 0 literal U+2197 arrow glyphs remain
- PHP syntax PASS

Arrow source gate: PASS.

## Hero title diagnosis

Accepted static authority uses:
- title lead: `What are you`
- title accent: `looking for?`
- font: Cormorant Garamond
- lead weight 400
- accent weight 300 italic
- size: `clamp(40px,5.2vw,64px)`
- line-height: .95
- letter-spacing: -.03em

Current production CSS uses the same font family/weights/size/line-height/letter-spacing.

The runtime screenshot instead renders:
- `Find What You're Looking For.`
- `Looking For?`

This is not a CSS font-owner mismatch. It is evidence that older saved Customizer values still override the new H01 defaults.

Current H01 defaults are:
- `main_title = What are you`
- `main_title_accent = looking for?`

`spatial_flow_global_search_mod()` reads saved `sf_global_search_*` theme mods first, so existing saved values remain authoritative by design.

Therefore no CSS font correction should be made merely to force the visual shape of the longer saved title.

## Journal article search

The main-site Search intentionally does not return Journal articles.

Current split-search contract:
- main-site `/search/?q=...`:
  - products: yes
  - articles: intentionally empty
  - main-site pages: yes
  - main-site topics: yes
- Journal-site `/search/?q=...`:
  - products: intentionally empty
  - Journal articles: yes
  - Journal pages: yes
  - Journal topics: yes

Therefore “main Search cannot find Journal articles” is expected behavior, not a bug.

## Next action

For strict visual authority parity, update/reset only the two saved Customizer hero title fields to:
- Main site — hero title lead: `What are you`
- Main site — hero title accent: `looking for?`

Do not change Search CSS.

After that, recheck the hero against the accepted static authority. If visually accepted, close desktop and continue to 1024/mobile regression.

Status: FUNCTION PASS / ARROW SOURCE PASS / HERO COPY OVERRIDE IDENTIFIED / NO CSS TITLE FIX REQUIRED.
