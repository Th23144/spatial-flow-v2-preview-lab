# Final Production Wishlist — H03 Runtime Frame Correction Start

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Trigger
Six-item screenshot differential audit shows the Wishlist item system is structurally aligned, but the Local first fold still sits lower than the static authority.

## Diagnosis
Current Wishlist H03 resets `.ast-container`, `#primary`, `.content-area`, and `.entry-content`, but does not explicitly take ownership of Astra `.site-main` and `article.ast-article-single` frame width/margins/padding.

The accepted Cart production mapping already demonstrates the child theme's canonical Astra frame reset pattern.

## Scope
CSS-only, Wishlist-scoped frame correction.

Target:
- add `.site-main` and `article.ast-article-single` to Wishlist frame ownership;
- force full width / max-width none;
- neutralize Astra article/site-main outer margin/padding that can shift the first fold;
- keep Header/Footer protected;
- keep H03 item geometry untouched;
- keep PHP/JS/YITH/Woo untouched;
- keep palette harmonization deferred.

Status: ACTIVE.