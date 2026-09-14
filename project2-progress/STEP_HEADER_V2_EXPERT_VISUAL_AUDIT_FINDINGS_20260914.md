# Project 2 — Header V2 Expert Visual Audit Findings — 2026-09-14

Status: Header remains NOT DONE. Structure/runtime are stable; this record covers visual-quality review only.

## Evidence reviewed
- Desktop normal header
- Desktop Shop mega open
- Desktop Search open
- Tablet/header state
- Mobile Root drawer
- Mobile Shop second level
- Mobile By Purpose third level

## Findings

### Overall
The Header has crossed from functional/generic into a coherent editorial brand system. The core desktop masthead, centered logo, primary navigation balance, mobile progressive IA, and Shop mega are directionally strong enough to preserve.

### MUST FIX
1. Search open state is visually inconsistent with the new Header system.
   - Current floating rounded white pill/card + dark pill submit button reads like an older generic component.
   - It conflicts with the flat editorial, line-based, warm-paper visual language used by Header V2 and Shop mega.
   - Recommendation: redesign Search as a restrained attached editorial panel/rail using the same warm surface, square/near-square geometry, thin rules, light typography, minimal shadow, and a quieter submit affordance.

### WORTH POLISHING
2. Responsive top information bar becomes too tiny / compressed around tablet and narrow widths.
   - Desktop proportion is acceptable.
   - Tablet/mobile should simplify visibility rather than retain three ultra-small messages.

3. Mobile Root screen is the weakest mobile state.
   - Second- and third-level screens are stronger because the serif heading creates a clear editorial hierarchy.
   - Root currently feels more like a clean navigation/settings list than a finished luxury-brand navigation surface.
   - Do not change IA; refine hierarchy/spacing/copy prominence only if necessary.

4. Desktop Shop mega is good enough to preserve structurally.
   - Surface color integration now works.
   - Four-column architecture is mature and calm.
   - Potential final polish only: slightly improve contrast/hierarchy of tiny eyebrow/footer copy and avoid over-fading supporting text.

### KEEP / DO NOT REWORK
- Desktop masthead composition and centered wordmark.
- Main nav / Search-Saved-Bag balance.
- Mega column architecture and current warm-paper surface.
- Mobile progressive navigation structure.
- Mobile Shop and taxonomy deeper panels; these are visually stronger than Root.
- Current CSS-drawn arrows and lightweight Back/Close treatment.

## Priority
Next visual batch should be narrow and intentional:
1. Search redesign (required).
2. Topbar responsive simplification (recommended).
3. Mobile Root micro-polish only if needed after Search/topbar change.

Do not reopen the Header architecture, menu ownership, Woo/YITH/Search logic, or progressive navigation behavior.
