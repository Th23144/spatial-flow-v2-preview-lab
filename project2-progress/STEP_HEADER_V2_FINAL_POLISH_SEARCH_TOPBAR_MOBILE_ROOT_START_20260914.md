# Header V2 Final Polish — Search + Topbar Responsive + Mobile Root

Status: LIVE IMPLEMENTATION START

User accepted the overall Header V2 direction after the first visual-polish pass and authorized one final narrow refinement batch.

Scope is intentionally limited to the remaining high-value visual gaps identified from the user-supplied runtime screenshots:

1. Desktop Search panel still reads as an older rounded utility card and does not match the flatter editorial Header/Mega language.
2. Topbar needs responsive simplification so narrow widths remain legible rather than merely shrinking all three messages.
3. Mobile Root menu is structurally correct but still reads slightly like a settings panel; refine hierarchy/rhythm without changing IA, menu ownership, URLs, or progressive behavior.

Implementation boundary:
- CSS only.
- No PHP changes.
- No JS changes.
- Preserve Search action `/search/` and current form behavior.
- Preserve `sf_mobile` ownership and progressive drawer logic.
- Preserve Header/Mega runtime behavior already validated.
- Preserve Journal branch behavior.

Header remains `Not done` until the user reviews the final runtime appearance.
