# Final Production Contact — H01 Desktop Visual Delta Audit

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Evidence

User supplied five annotated desktop screenshots plus the full-page Contact screenshot after functional runtime passed.

Functional state remains:
- success submit PASS;
- backend Contact Message record PASS;
- invalid-email rejection PASS;
- success/error modal PASS.

Desktop visual remains OPEN.

## User-identified visual defects

1. Hero right-side negative space is too tall below the side note before the toolbar rule.
2. Toolbar text links (Track Order / FAQ Help) show an extra underline.
3. Right-side support-route rail feels too compressed / crowded; route action links also show the same extra-line defect.
4. Left form composition sits too far to the right, similar to the previously observed Wishlist alignment issue.

## Audit diagnosis

### A. Link underline leakage

The H01 CSS already removes generic text decoration, but Astra / entry-content link decoration is winning in runtime.

For route actions H01 intentionally owns one bottom rule via `border-bottom`; runtime adds a second text-decoration line.

For toolbar links H01 intends no persistent underline, but runtime still shows a text-decoration line.

This is a theme/global cascade leak, not an accepted-design feature.

Fix owner: Contact H01 CSS only, with stronger Contact-scoped resets.

### B. Main content lane compression

The left-form offset and the right-rail crowding are two manifestations of the same geometry problem.

The accepted Contact/Wishlist-led system is based on the 1480 task/info body lane. In runtime, the effective main-grid lane is visually narrower than the hero/toolbar shell, causing:
- the left form to begin too far inward;
- the right support rail to lose breathing room;
- route copy/action columns to compress.

Do not fix this with per-field negative margins or by moving each route independently.

Fix owner: the Contact main-grid container geometry, preserving the accepted two-column ratio.

### C. Hero vertical rhythm

The production hero leaves visibly more dead space below the two-line side note than needed.

This should be corrected by a small Contact-owned vertical-rhythm adjustment, not by moving the toolbar independently.

### D. Route vertical rhythm

Even after restoring the usable main-grid width, the three support rows need a small increase in vertical breathing room so heading, description and action no longer read as compressed.

Do not create boxed action buttons or widen only the action column.

## Additional audit findings

No new defect requiring correction was found in:
- Header;
- Footer;
- hero typography;
- form title typography;
- field typography;
- textarea depth;
- production privacy/context note;
- success modal;
- error modal.

The success/error modals should remain untouched.

## Recommended correction batch

One bounded CSS correction plus asset-version bump only.

Do not alter:
- AJAX;
- CPT;
- Order Number persistence;
- Contact Message backend;
- template DOM;
- Customizer copy;
- modal JS.

Correction batch should target:
1. hero bottom rhythm;
2. main-grid usable lane/alignment;
3. Contact-scoped anchor-decoration hard reset;
4. modest support-route spacing increase.

After source gate, recheck one fresh desktop full screenshot before responsive review.

Status: USER DELTAS CONFIRMED / ROOT CAUSE GROUPED / CSS-ONLY CORRECTION NEXT.
