# Header V2 Detail Polish Batch Start — 2026-09-14

User correction and execution rule:

- Do not generate preview/reference images unless the user explicitly authorizes image generation first.
- Current Header V2 state is structure/interaction accepted, but visual detail polish is still in progress; Header remains `Not done`.
- User explicitly approved one coherent polish batch rather than fragmenting fixes into many small rounds.
- User will judge the final browser result after applying the complete batch.

Current polish targets from the user's screenshots:

1. Desktop Shop Mega background tone does not harmonize with the page; current layer feels pasted-on and visually dirty.
2. `Shop all` directional mark renders as an unattractive colored/emoji-style square glyph.
3. Mobile menu external/directional marks render as unattractive colored/emoji-style square glyphs.
4. Mobile Back / Close controls feel like generic hard UI buttons and need a lighter editorial treatment.
5. Top masthead utility strip typography looks too heavy; bring weight/spacing closer to the approved reference language.
6. Mobile drawer overall needs a quieter, more editorial finish: lighter typography, refined spacing, thinner separators, cleaner hierarchy.

Implementation scope for this batch:

- CSS-only unless a concrete source limitation is discovered.
- Preserve the accepted Header information architecture and current runtime behavior.
- Preserve Woo/YITH/Search/Bag/menu/taxonomy ownership and Header V2 JS behavior.
- Replace existing rules in place / bounded replacements; do not create an append-only patch pile.
- Provide code directly in chat with indentation preserved; no downloadable code file as the default handoff.

Status after this record: `Header V2 Detail Polish — STARTED / NOT YET USER ACCEPTED`.
