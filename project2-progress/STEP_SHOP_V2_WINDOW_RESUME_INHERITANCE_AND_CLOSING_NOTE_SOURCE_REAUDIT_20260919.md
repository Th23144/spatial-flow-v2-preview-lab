# Shop V2 — Window resume inheritance + Closing Note current-source re-audit

Date: 2026-09-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Inheritance method

This window resumed Project 2 from repository evidence rather than conversational memory alone.

Directly re-read in this window:
- current root Project-2 authority / index / policy / state documents;
- the formal full-document inheritance records from 2026-08-16 and the 2026-09-01 inheritance reconfirm;
- current Shop / Closing Note progress lineage through HEAD `f5792346d3d9cc3aedfbe2dd563b5395d44a0bf7`;
- the latest available Shop source snapshots needed to identify the current Closing Note owner, markup and CSS.

Historical continuity follows the repository's established inheritance mechanism:
- the 2026-08-16 full-document audit is the inherited historical corpus;
- later explicit correction / rejection / rollback overrides older plans;
- later formal source/runtime/user acceptance overrides older snapshots;
- this window does not relabel superseded historical records as current truth.

No production source file was modified during this inheritance/re-audit.

## Current Shop state inherited

- Header / Footer remain closed for the current Shop task unless a concrete regression appears.
- Non-frozen Shop mobile review is closed through Mobile 05.
- Normal phone product grid remains two columns; <=360px may fall back to one column.
- User-approved wider production width remains intentional and must not be forced back to the static-reference width.
- DIY / Custom Studio Signature Feature remains frozen/deferred and must not block the rest of Shop.
- Closing Note is no longer governed by strict static-reference 1:1.
- The latest user correction is authoritative: the present two-column idea is acceptable; the visual defect is weak typographic hierarchy/grouping, making the section look like two text blocks pasted onto the page.

## Closing Note current source ownership

Current Shop template structure remains:
- one `.sf-shop-v2-closing-note`;
- left `.sf-shop-v2-closing-note__left`;
- right `.sf-shop-v2-closing-note__right`;
- one `.sf-shop-v2-closing-note__btn`;
- the lower duplicate product contact band has already been removed in the latest validated archive source.

Current left markup still flattens three independent backend fields into one paragraph:
- Closing Note Intro -> `strong`;
- Closing Note Emphasis -> `em`;
- Closing Note Body -> `span`.

Current CSS then explicitly makes `strong`, `em`, and `span` all inline and inherit the same 28–44px serif typography. This is the concrete source-level cause of the "one wall of large text" effect.

The stored Closing Note Kicker still exists as a backend-editable Customizer owner but is not currently rendered by the Shop template.

Right side remains:
- one backend-editable Side Text paragraph;
- one backend-editable CTA text;
- backend-editable CTA URL owner `sf_shop_v2_closing_button_url` with the existing fallback chain.

## Current CSS facts

Latest available uploaded Shop CSS source remains structurally healthy per the previously recorded validation.

Closing Note base layout:
- two equal columns;
- 80px gap;
- 80px top / 120px bottom padding;
- right paragraph max-width 48ch;
- no card/background/shadow shell.

The recovered latest uploaded CSS snapshot contains a desktop-only right-column inset experiment. Later runtime history also tested a larger inset. Neither offset is now design authority; the new hierarchy pass should remove the offset experiment rather than continue tuning 96/120px.

## Corrected diagnosis

Do not redesign the Closing Note into another module.

The smallest justified change is:
1. restore the existing backend-owned Kicker as a restrained section label;
2. expose Intro / Emphasis / Body as visibly distinct typographic layers instead of one inherited type size;
3. keep Emphasis as the principal serif/italic anchor;
4. reduce Body to a quieter supporting level;
5. give the right Side Text a subtle local anchor and tighter grouping with the CTA;
6. preserve the open two-column composition, warm paper surface, backend ownership, CTA routing, and already-passed mobile behavior;
7. avoid cards, large background blocks, giant CTA treatments, Micro Bar, remove-section direction, and further one-axis offset tuning.

## Current stop point

STATUS: INHERITANCE COMPLETE / CURRENT SOURCE OWNERSHIP RECONFIRMED / NO PRODUCTION CODE CHANGED.

Exact next action:
prepare one narrow typography-hierarchy proposal for the existing two-column Closing Note. Do not issue production CSS yet. If a visual preview is needed, use an external standalone HTML study and do not write it into the repository.
