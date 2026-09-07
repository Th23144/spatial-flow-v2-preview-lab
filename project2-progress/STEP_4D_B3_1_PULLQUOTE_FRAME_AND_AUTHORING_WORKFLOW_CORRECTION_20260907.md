# Step 4D B3.1 — Pull Quote Frame + Authoring Workflow Correction — 2026-09-07

## User finding
After converting the bilingual line into semantic `<blockquote>`, the live Single Product Section 01 shows an unwanted inherited left-side quote bar / framed treatment that is not present in the reference. User also asked whether future product prose must be entered as raw HTML/code.

## Root cause / correction
- The B3.1 scoped blockquote CSS already owns top/bottom editorial rules, but WordPress/Astra/global blockquote styling can still contribute a left border / pseudo decoration unless explicitly reset in the scoped selector.
- This should be fixed in the canonical Single Product Section 01 blockquote selector by explicitly removing left/right borders, background, box-shadow, and quote pseudo-elements while preserving the reference top/bottom rules.
- Future product prose must remain backend-editable. Raw HTML is not the intended operating workflow. Product long description remains the content owner; users should author in the Visual editor using normal paragraphs plus a Quote/Blockquote element, with the English translation italicized. Section 01 metadata remains in the dedicated Material / Edition / Made / Studio fields.

## Status
B3.1 remains OPEN. Left typography is accepted; right editorial structure is close but pull-quote decoration needs one scoped CSS cleanup. Authoring workflow must be documented as Visual-editor-first, not code-first.
