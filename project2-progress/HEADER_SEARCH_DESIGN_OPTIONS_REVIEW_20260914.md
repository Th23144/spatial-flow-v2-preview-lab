# Header Search Design Options Review — 2026-09-14

Status: DESIGN DECISION PENDING

User feedback after the latest Search polish:
- Search is visually cleaner than before, but still feels like a pasted-on layer / sticker.
- Do not implement another fix yet.
- Present multiple design directions first so the user can choose.

Design diagnosis:
- Current Search panel is still perceived as a separate object because it opens as a detached rectangular slab under the Header.
- The Search trigger remains in the Header while the search UI appears in a different visual plane.
- Even after removing rounded corners and shadow, the panel still lacks a strong structural relationship to the Header.

Candidate directions to present:
1. Header Inline Morph — clicking SEARCH transforms the right-side utility zone into the search field, with no dropdown panel.
2. Full-width Attached Search Band — Header unfolds a full-width editorial search strip directly beneath itself, visually consistent with the attached Shop Mega.
3. Header Row Expansion — Header itself gains a second integrated row for search, keeping the same background and border system.
4. Full-screen Editorial Search — larger takeover treatment; visually strong but likely too dominant for current Spatial Flow hierarchy.

Recommendation:
- Primary recommendation: Full-width Attached Search Band.
- Secondary recommendation: Header Inline Morph if the user prefers maximum minimalism.

No code changes are authorized in this step.
