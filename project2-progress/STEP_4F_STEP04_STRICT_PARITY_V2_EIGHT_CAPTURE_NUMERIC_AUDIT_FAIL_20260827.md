# Step 4F · Step04 strict parity V2 · eight-capture numeric audit FAIL · 2026-08-27

## Result

The user returned all eight `STEP04_STRICT_PARITY_V2_20260827` JSON captures. Programmatic comparison is complete.

Strict 1:1 remains **FAIL**. The major page frame is now aligned, but a bounded set of deterministic CSS/cascade deltas remains.

## Capture pairing

```text
Confirmed reference desktop  ↔ Processing production desktop
Confirmed reference mobile   ↔ Processing production mobile
Pending reference desktop    ↔ On-hold production desktop
Pending reference mobile     ↔ On-hold production mobile
```

The On-hold production captures are used only for the shared Pending-family visual contract. State-specific copy/content differences are excluded from CSS parity scoring.

## Environment parity

Desktop pairs:

```text
inner viewport: 1920 × 991
client width: 1905
DPR: 1
visualViewport scale: 1
```

Mobile pairs:

```text
390 × 844
DPR: 3
visualViewport scale: 1
```

Step04 design variables (`--bg`, `--bg-2`, `--ink`, `--soft`, `--line`, `--clay`, `--stone`, serif/sans/mono, `--max`, `--gutter`) match the reference.

The accepted live header and the static reference header have different absolute heights, so Step04 geometry is normalized relative to the breadcrumb. Absolute page Y before the breadcrumb is not scored as a Step04 delta.

## Core geometry already matching

The major contract is correct at the tested viewports:

- desktop 1440px frame;
- Intro `1.02fr / .98fr`, 72px gap, 62/56/54 padding;
- desktop shell column architecture and 72px gap;
- mobile 390px gutter = 22px;
- major title, lede, status shell, panel headings, action controls, main summary padding/grid rules are aligned where content is comparable.

## Deterministic remaining blockers

### 1. Overview strong typography

All four pairs:

```text
Reference: 18px / line-height 20.88px
Production: 22.4px / line-height 33.6px
```

This increases desktop Overview row height from 102px to about 118.062px. Current Step5F source declares 18px/1.16, but Woo order-details styling still wins at runtime. A stronger Step04 owner is required.

### 2. Payment Facts `dt` weight

All four pairs:

```text
Reference font-weight: 400
Production font-weight: 600
```

Current Step5F source does not explicitly own `font-weight` on `.result-facts dt`.

### 3. Timeline `h3` typography

Desktop:

```text
Reference: 23px / 24.84px
Production: 15.4px / 16.632px
```

Mobile:

```text
Reference: 23px / 24.84px
Production: 14.0448px / 15.1684px
```

The current Step5F declaration is losing runtime ownership for font-size/line-height.

### 4. Address-card `h3` typography

Desktop:

```text
Reference: 8px / 12.4px / letter-spacing 1.44px
Production: 15.4px / 17.71px / 2.772px
```

Mobile:

```text
Reference: 8px / 12.4px / 1.44px
Production: 14.0448px / 16.1515px / 2.52806px
```

Font family, uppercase transform, weight, margin and color already match. The wrong font-size and inherited heading line-height are the blockers.

### 5. Receipt Summary heading line-height

All four pairs:

```text
Reference `.result-summary__head h3`: 48.05px
Production: 35.65px
```

Font family, 31px size and weight 300 already match. Reference inherits the root 1.55 line-height; production is receiving a tighter heading line-height. Step04 must own `line-height:1.55` here.

### 6. Result-panel max-width leakage

All four pairs:

```text
Reference max-width: none
Production max-width: 800px
```

It does not reduce width at the currently tested main-column sizes, but it is a deterministic production-theme leak and violates the strict contract.

### 7. Mobile final Overview cell grid-column

At 390px:

```text
Reference last Overview item: grid-column 1 / -1
Production: auto
```

Current production Step5F explicitly resets this to `auto` at <=420px while the S7 reference leaves the <=780 rule active. It is visually equivalent in a one-column grid but not computed-contract equal, so strict micro parity requires removing/resetting this production-only divergence.

### 8. Summary price white-space

All four pairs:

```text
Reference: white-space normal
Production: white-space nowrap
```

The current Step5F source has a production-only `white-space: nowrap`. No prior approved deviation exists for this property. Under strict 1:1 it should be removed unless runtime evidence later proves a required production safety exception.

## Non-blocking / excluded differences

The following are **not** treated as strict CSS failures:

- static reference has 3 products; production order has 1 real Woo product;
- real product name/meta wraps differently from static sample copy;
- real Woo totals include Gift Packaging and Refund rows; reference has a different static financial row set;
- reference Payment Facts labels/assets/networks differ from the real non-Crypto test order;
- production payment summary includes a real Shipping row;
- production uses the real product image instead of the static radial-gradient placeholder;
- On-hold gateway output legitimately adds runtime content;
- Pending-family copy length differences change some heights;
- table column widths change because real product text and totals differ;
- LTR `text-align:left` vs logical `start` is visually equivalent and is not promoted to a blocker in this batch unless it remains as the only final residual.

The extra spans observed in the production Overview TOTAL item are Woo currency markup (`$ 0.00`, `$`) and are not a Step04 label-style failure.

## Gate

Do not declare Step04 strict 1:1 PASS.

Next action is one consolidated **manual anchored CSS correction batch** plus cache version bump. No `thankyou.php` change is required by this numeric audit.

After returned-source validation, rerun the same eight captures only. Do not rerun the 17-step functional matrix.
