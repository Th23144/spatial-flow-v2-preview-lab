# Step 4F · Step04 Computed Parity Audit FAIL + CSS Correction Gate · 2026-08-26

## Inputs

Eight user-supplied runtime JSON captures were sorted into four same-viewport pairs:

1. Confirmed static reference desktop ↔ Processing production desktop
2. Confirmed static reference mobile 390×844 ↔ Processing production mobile 390×844
3. Pending static reference desktop ↔ Pending production desktop
4. Pending static reference mobile 390×844 ↔ Pending production mobile 390×844

Production `processing` is the server-authoritative implementation of the static Confirmed visual family.

## Environment parity

Desktop pairs:
- inner viewport 1920×991
- document client width 1905
- DPR 1
- visualViewport scale 1

Mobile pairs:
- 390×844
- DPR 3
- visualViewport scale 1

All Step04 design variables match exactly in all four pairs:
- bg / bg2 / ink / soft / faint / line / line-soft / clay / stone
- serif / sans / mono
- max 1440px
- gutter 56px desktop / 22px mobile

Major intended geometry also matches at the contract level:
- 1440px main frame
- desktop Result Intro columns 640.547px / 615.453px
- Result Intro 72px gap and reference padding
- title explicit font metrics
- Result Shell desktop ratio/gap
- mobile one-column breakpoint behavior

## Strict 1:1 result

**FAIL — deterministic computed-style mismatches remain.**

These are not dynamic WooCommerce-content differences and are not screenshot judgement.

### A. Root inherited font-size / line-height mismatch

Static reference body computes to 16px / 24.8px.

Production `.sf-order-result-v3` does not explicitly own `font-size`, therefore Astra/Woo inheritance produces:
- desktop 14px / 21.7px
- mobile 12.768px / 19.7904px

This propagates to many Step04 containers.

### B. Woo order-details font metrics leak into `.result-overview li`

Reference: 16px / 24.8px.
Production:
- desktop 10.01px / 10.01px
- mobile 9.12912px / 9.12912px

### C. Heading `text-transform` leak

Reference: `none`.
Production: `capitalize` on `.result-title` and `.result-panel__head h2`.

### D. Paragraph bottom-margin leakage

Reference reset produces zero bottom margin.
Production receives theme paragraph margins on owned Step04 copy, including:
- `.result-lede`: 43.2px desktop / 30.4px mobile
- `.result-authority-note`: 16px
- one `.result-panel__copy`: 17.6px
- `.result-summary__note`: 24px

This causes real vertical geometry drift.

### E. First Receipt panel font-family leak

The first `.result-panel` is also `.woocommerce-order-details`; production resolves its family to the theme/system stack instead of the Step04 Inter stack. This changes `ch`-based copy width and text geometry.

### F. Order-table footer Woo typography leak

Production footer cells retain Woo/system family and weight 500 instead of reference Inter / 400. The total-row value also inherits excess weight unless explicitly reclaimed.

### G. Result action line-height source mismatch

Reference `.result-action` inherits `1.55`, yielding 12.4px at 8px.
Production explicitly sets `line-height: 1.2`, yielding 9.6px.
This is a direct source divergence, not merely cascade interference.

## Allowed / excluded differences

Do not classify as strict failures by themselves:
- real Woo order item count and values versus static samples;
- real totals / refund ledger / addresses;
- gateway-owned Thank You output;
- already-accepted production header/footer;
- absolute page Y offset caused by logged-in admin toolbar when relative component geometry is otherwise identical.

## Ownership conclusion

All established deterministic mismatches A–G are CSS-owned.

No PHP business logic or `thankyou.php` semantic change is required.

Target source:
`assets/css/spatial-flow.css`

A cache/version bump in `functions.php` is allowed only after the bounded CSS correction.

## Mandatory next action

Prepare one consolidated manual anchored replacement batch that:
- reclaims 16px / 1.55 root typography;
- reclaims overview list font metrics;
- clears theme heading capitalization;
- removes leaked paragraph bottom margins without disturbing required component top margins;
- reclaims Inter family for the Woo-owned receipt panel/table and weight 400 for footer totals;
- restores `.result-action` line-height to 1.55;
- bumps cache version after CSS only.

After source validation, rerun the same eight computed diagnostic captures. Do **not** rerun the full 17-step status matrix and do not use screenshots as the primary strict-parity gate.
