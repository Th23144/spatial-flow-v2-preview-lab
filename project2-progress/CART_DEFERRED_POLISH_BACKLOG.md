# Project 2 · Cart Deferred Polish Backlog

Last updated: 2026-07-29  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status rule

This file records non-blocking Cart polish items that were explicitly approved for later implementation. Items in this file must not be treated as already implemented.

## Open item 1 — Mobile removed-item Notice copy and rhythm

```text
Status: Open / approved direction / not implemented
Scope: Cart page mobile Notice only
Trigger: removed-item feedback with a long native product title
Current runtime: native full product title + removed. + Undo?
Approved future visible-copy direction: Item removed. Undo?
Mainline impact: non-blocking; do not interrupt the current Cart acceptance sequence
```

Observed problem:

```text
A long native product title produces unattractive wrapping and weak visual rhythm in the 390px removed-item Notice.
```

Approved implementation intent:

```text
- shorten the visible mobile copy to `Item removed. Undo?`
- improve mobile text hierarchy and spacing
- keep the page-level transparent editorial Notice band
- do not reintroduce a white rounded card or shadow
```

Required behavior preservation:

```text
- native WooCommerce removal state
- native `.restore-item` URL
- nonce and Undo lifecycle
- product restoration behavior
- quantity, Header BAG, Your Bag count, Subtotal and Total synchronization
```

Implementation boundaries:

```text
- do not represent this direction as current runtime behavior before implementation
- do not replace WooCommerce removal logic
- do not break desktop Remove / Undo output
- do not broaden the copy rewrite to unrelated WooCommerce pages
- validate 390px and 360px after implementation
```

Source record:

```text
project2-progress/STEP_4E_B2_R5_E6_N2_C_360PX_RESPONSIVE_ACCEPTANCE_AND_DEFERRED_NOTICE_POLISH.md
Commit: faf832d8c646ca23285fcef41d945a928ceeb022
```
