# Step 4F · Step04 Computed-Style Parity Diagnostic Gate · 2026-08-26

## Purpose
Replace screenshot-only strict-parity judgement with deterministic browser-runtime evidence.

## Why screenshots alone are insufficient
The supplied full-page captures are rendering evidence, but capture pipelines may rescale the final long image. Therefore screenshot pixel dimensions are not guaranteed to equal CSS viewport dimensions and cannot be the sole micro-parity oracle.

## Diagnostic requirement
Run the same browser-console collector on the approved S7 reference and the production Step04 at the same browser zoom and viewport. Capture:

- viewport/client width, DPR, visualViewport scale;
- computed CSS custom properties;
- computed style values for Step04-owned selectors;
- getBoundingClientRect values;
- rect coordinates relative to the Step04 breadcrumb origin so allowed header differences do not contaminate the comparison.

Hard compare computed styles/property values. Rect tolerance is <= 0.5 CSS px where the content is equivalent. Dynamic Woo content may legitimately change heights/downstream Y positions and must be excluded from hard geometry equality where item counts/text differ.

## Target selectors

```text
.woocommerce-breadcrumb
.result-intro
.result-kicker
.result-title
.result-lede
.result-authority-note
.checkout-steps
.checkout-step
.result-shell
.result-main
.result-status
.result-status__mark
.result-status__badge
.result-overview
.result-overview li
.result-panel
.result-panel__head
.result-panel__head h2
.result-panel__copy
.result-order-table
.result-order-table th
.result-order-table td
.result-facts
.result-facts > div
.result-timeline
.result-timeline article
.result-addresses
.result-address-card
.result-side
.result-summary
.result-summary__head
.result-summary__item
.result-summary__note
.result-actions
.result-action
```

## Acceptance
No `Strict 1:1: PASS` until the runtime computed-style/geometry diff is reviewed. Paired screenshots are retained as final residual visual evidence only.
