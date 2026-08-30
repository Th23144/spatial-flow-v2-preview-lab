# Project 2 · Step03 Sidebar Sticky Diagnostic Result + Runway Hypothesis · 2026-08-30

## Trigger

User ran the consolidated production Step03 desktop sticky diagnostic on `/checkout-2-2/` at 1920×991, DPR1, scale1.

## Reference contract

Static Step03 reference owns sticky at the whole right-column wrapper:

```css
.checkout-side {
  position: sticky;
  top: 136px;
}

.checkout-side .order-summary {
  position: static;
  top: auto;
}
```

Production architecture correctly mirrors this ownership:

```text
.sf-safe5-shell
└─ aside.sf-safe5-summary   <-- actual sticky owner
   ├─ payment context card
   └─ summary card
      └─ #order_review     <-- static child
```

## Runtime diagnostic facts

Actual owner:
`aside.sf-safe5-summary`

Computed:
```text
position: sticky
top: 136px
align-self: start
overflow: visible
transform: none
contain: none
height: 1012.047px
```

Child `#order_review`:
```text
position: static
top: auto
height: 322.266px
```

Containing shell `.sf-safe5-shell`:
```text
height: 1166.047px
overflow: visible
transform: none
contain: none
```

Root overflow:
```text
body: overflow-x clip / overflow-y visible
html: overflow-x hidden / overflow-y auto
```

All intermediate ancestors from owner through shell/form/Woo/Astra wrappers are static, overflow-visible, transform-none, contain-none.

Scroll samples:
```text
scrollY 0    -> ownerTop 628.375
scrollY 378  -> ownerTop 250.375
scrollY 512  -> ownerTop 116.375
scrollY 800  -> ownerTop -171.625
scrollY 1137 -> ownerTop -508.625
scrollY 716  -> ownerTop -87.625
```

No sample locked to 136px. The owner moves one-for-one with document/shell motion despite computed sticky.

## Important conclusion

Step03 is NOT currently failing for the same immediate reason that originally blocked Step04.

The 2.7.21-style body ancestor unlock condition is already present on Step03:
```text
body = clip visible
```

Also, sticky ownership itself is correct and matches the reference: the whole right-side wrapper is sticky and the inner order review remains static.

Therefore do not reapply the Step04 body-overflow fix and do not move sticky ownership into `#order_review`.

## Leading differential

The standout geometry is the available containing-block runway:

```text
sticky owner height: 1012.047px
shell height:        1166.047px
shell-owner delta:    154.000px
viewport height:      991px
top inset:             136px
nominal viewport below top: 855px
```

Production Step03 is structurally different from Step01/02 in content balance: the left Payment column is short while the right Context + Order Summary stack is tall. The shell is therefore only ~154px taller than the sticky owner.

This creates very little vertical runway for a whole-column sticky wrapper. This is now the leading hypothesis for why computed sticky never visibly enters its locked phase.

However this is not yet sufficient causal proof. Before any CSS/source change, run one reversible console-only A/B diagnostic that increases only the `.sf-safe5-shell` vertical runway while preserving the same owner, top, body overflow, child positions and content.

## Required A/B test

Baseline:
- current source untouched
- measure owner lock behavior

Temporary test only:
- add a large `min-height` to `.sf-safe5-shell` in DevTools/inline style
- do not alter owner `position`, `top`, overflow, order-review, or content
- rerun scroll samples
- restore original inline style at the end automatically

Interpretation:
- if the same `.sf-safe5-summary` begins locking at ~136px when shell runway is enlarged, containing-block runway is proven causal;
- if it still does not lock, reject the runway hypothesis and continue diagnostics without source changes.

## Current classification

```text
Step03 reference sticky ownership: CORRECT
Step03 production sticky ownership: CORRECT
Step03 body ancestor unlock: ALREADY CORRECT
Step03 ancestor overflow/transform/contain blockers: NONE FOUND
Step03 runtime sticky activation: FAIL
Leading cause: insufficient shell-vs-sidebar vertical runway
Causation: NOT YET LOCKED; A/B console proof required
Source modification: NOT AUTHORIZED YET
```
