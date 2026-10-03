# Runtime Acceptance — Comparison Link Requirement + Preview Isolation Clarification

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## User requirement

During every runtime visual acceptance step, provide the direct comparison link to the accepted static authority so the user can open the reference side-by-side with Local.

For Wishlist, authority link:
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-wishlist-harmonized-v1.html

## Repository architecture clarification

The accepted task/info designs are stored as independent static preview authorities in the repository (main/preview or temp-preview branches/files).

They are NOT automatically merged into the current WordPress page/template implementation merely because the static preview is accepted.

Production integration is a separate phase:
- each accepted preview remains an isolated visual authority;
- production mapping selectively ports that authority into the current child-theme owner (template, renderer, CSS, JS, Woo/YITH/plugin integration);
- protected existing pages are not globally replaced;
- only the page currently being mapped is integrated into the live/local WordPress source.

Current example:
- Wishlist static authority remains an independent repo preview;
- Wishlist H03 is the first active production adapter being mapped into the real child theme;
- Search / Contact / Policy / Services / FAQ / Track Order / Care Guide authorities remain independent until their own production mapping steps begin.

## Status

COMPARISON LINK AT ACCEPTANCE = REQUIRED.
STATIC AUTHORITIES = ISOLATED.
PRODUCTION MAPPING = PAGE-BY-PAGE / OWNER-AWARE.