# Project 2 — New Window Inheritance Audit / Current Stop Point

Date: 2026-09-23
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

This record captures the new-window inheritance audit requested by the user.

No production page code, WordPress source, WooCommerce source, CSS, JavaScript, PHP, preview baseline, or accepted design artifact is modified by this step.

## Sources reconciled

The audit used the repository's own precedence rule:

```text
later explicit user correction / rejection / rollback
> later formal runtime/source/user acceptance / closure
> standing policy
> older candidate / plan / snapshot as historical evidence
```

Read/reconciled:
- root Project-2 resume/status/index documents;
- current execution policies;
- page-status/backlog reconciliation records;
- later Header / Footer / Shop closure records;
- 2026-09-19 through 2026-09-23 Home / Shop-light-home / Wishlist / task-page design records;
- rejected/withdrawn Wishlist design history as historical negative evidence;
- latest temporary preview branches relevant to Search / Wishlist width validation;
- full `project2-progress` markdown inventory for chronology and supersession checks.

Older snapshots such as the 2026-09-04 Single Product active-stop text remain historical and do not override later closure records.

## Protected completed / closed surfaces

Current protected state:
- Main-site Header V2: USER ACCEPTED / CLOSED.
- Main-site Footer V2: USER ACCEPTED / CLOSED.
- Single Product: Completed 1:1.
- Cart: Completed 1:1.
- Checkout: Completed 1:1.
- Thank You / WooCommerce Order Result: Completed 1:1.

Do not reopen these without concrete regression evidence or an explicit user request.

## Shop current state

The existing non-frozen Shop archive work is closed/protected:
- Filter / Sort;
- Product Grid;
- Pagination;
- Closing Note;
- desktop/mobile archive behavior;
- WooCommerce dynamic ownership.

Still frozen/deferred:
- Shop light commercial-entry / Shop Landing + Product Archive hybrid redesign;
- Shop-side DIY / Custom Studio Signature Feature.

Therefore ordinary Shop archive work must not be casually reopened, while binary whole-Shop closure remains deferred around the frozen future feature layer.

## Global Home

Global / shared Spatial Flow Home remains deferred.

It is not the current active mainline.

## Wishlist current state

Accepted visual authority:
`preview/spatial-flow-wishlist-harmonized-v1.html`

Status:
- composition / visual language: USER ACCEPTED / LOCKED baseline;
- production WordPress + YITH + WooCommerce implementation: NOT STARTED.

Dynamic ownership remains mandatory:
- YITH owns Wishlist state;
- WooCommerce owns product / price / stock / URL / add-to-cart;
- production must use accepted Main Header V2 / Footer V2;
- prototype-only local state / fake Bag behavior must not become production authority.

Historical Wishlist V2–V8 rejected directions remain negative evidence and must not be recycled as new proposals.

## Task / information page design batch

Design-first scope:
1. Search
2. 404
3. Contact
4. Utility / Policy
5. light harmonization of Services
6. light harmonization of FAQ / Help
7. light harmonization of Track Order

Account remains optional / future-only.
About remains a separate brand-expression candidate and does not block this batch.

Production mapping remains deferred until this visual batch is locked.

## Width-system correction — current latest authority

The temporary universal 1720px body-width assumption is withdrawn.

Current width hierarchy:
1. Header / Footer = near-full-width global shell.
2. Standard task / information body lane = 1360px candidate for visual validation.
3. Specialized commerce/task geometry = Cart / Checkout retain purpose-specific widths.
4. Shop = controlled wider exception where already explicitly accepted.

The temporary 1720-wide Wishlist body experiment must NOT be merged.

Current validation artifacts exist on branch:
`temp-task-width-audit-01`

- `temp-preview/Spatial-Flow-Wishlist-Width-Audit-1360.html`
- `temp-preview/Spatial-Flow-Search-Width-Audit-1360.html`

## Exact current stop point

The project is currently stopped at:

```text
VISUAL VALIDATION OF THE SHARED 1360px TASK / INFORMATION BODY LANE
→ compare Wishlist 1360 and Search 1360
→ do not merge the withdrawn 1720 experiment
→ if the shared lane is visually accepted, lock the width tier
→ continue Search / 404 / Contact / Utility-Policy design harmonization
→ then lightly harmonize Services / FAQ / Track Order
→ only after the visual batch is locked, begin production mapping
```

Production mapping has NOT started for Wishlist or Search.

## Execution boundaries preserved

- fresh current-live/local source is required before production edits;
- audit actual DOM/template/plugin ownership before mapping;
- preserve backend editability;
- preserve WordPress / WooCommerce / YITH authority;
- do not fabricate dynamic commercial/editorial data;
- CSS should use canonical in-place ownership rather than patch stacking;
- mobile is an independent production-quality state;
- meaningful implementation/state changes must be recorded before advancing;
- coherent runtime checks should be batched where safe.

## Inheritance result

NEW WINDOW INHERITANCE AUDIT = COMPLETE.

CURRENT ACTIVE DECISION GATE = USER VISUAL REVIEW OF THE 1360px WISHLIST / SEARCH WIDTH-AUDIT PAIR.

No implementation action is authorized by this inheritance record alone.
