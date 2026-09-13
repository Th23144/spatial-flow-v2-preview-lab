# Project 2 · Header V2 CSS truncation safety repair block READY · 2026-09-13

## Status

READY for the one-off CSS safety repair only.

This is the exception explicitly allowed after the user corrected the workflow: the currently broken/incomplete CSS must first be restored to a structurally valid state. It is **not** a new normal for splitting one feature by file. After this repair, future coherent feature changes must be delivered as one multi-file batch when multiple files are required.

## Current source evidence

The returned current CSS contains the Header V2 block marker once, but the block is physically truncated at:

```css
.sf-mobile-back,
.sf-mobile-drawer--main .sf-mobile-close {
  min-width:

/* === Spatial Flow Step 3.0 Header / Footer Replica END === */
```

Therefore the current file is structurally invalid before repair.

## Safety-repair boundary

Replace only the region beginning at:

```text
/* === Project2 Header V2 Production — Main-site shell + progressive drawer START ===
```

and ending immediately **before**:

```text
/* === Spatial Flow Step 3.0 Header / Footer Replica END === */
```

The Step 3.0 END marker itself remains untouched.

## Repair block purpose

The reconstructed complete block restores the already-started Header V2 main-site shell/progressive-drawer CSS only:

- main-site near-full-width Header shell;
- WordPress admin-bar sticky offset;
- tablet/mobile main Menu trigger behavior;
- main-site progressive drawer panel geometry;
- progressive drawer header / Back / Close controls;
- root / Shop / taxonomy panel typography and rows;
- tablet <=1100 main-site Header state;
- mobile <=767 main-site Header state;
- compact <=430 state;
- Journal Header remains on the legacy branch.

No Step 5H Mega consolidation is included in this safety repair. No JS is started here.

## Offline structural validation against the user's returned CSS

After substituting the repair block into the exact returned `spatial-flow(20260913-205221).css` baseline:

```text
bytes: 613,572
newline-terminated lines: 21,851
SHA256: 294e2734b8af9bb5cf7867fc1d3f90220e77bd36abf5b068a0d2becfd68f10f4
opening braces: 3431
closing braces: 3431
opening comments: 281
closing comments: 281
```

Structural gate: PASS.

Repair-block identity:

```text
bytes: 9,784
newline-terminated lines: 478
SHA256: 681d7a85b86c672f56559c88a7172740bf83231770a17b9de2db8b8ef53ed925
```

## Important limits

This PASS means only that the broken CSS block has been reconstructed into a balanced source state against the returned baseline.

It does **not** mean:

- Header V2 CSS is final;
- Step 5H SAFE1 + SAFE2 Mega CSS has been consolidated;
- `spatial-flow.js` has been changed;
- browser/runtime behavior has passed;
- Header V2 is accepted.

## Required next gate

1. User applies this bounded CSS repair only.
2. User returns the repaired CSS.
3. Verify exact source identity / brace and comment balance.
4. Only after repair PASS, continue the remaining Header V2 implementation work under the corrected multi-file batching rule.
