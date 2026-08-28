# Step 4F · Step04 · 2.7.19 Reference JSON Reuse / Production-only Rerun · 2026-08-28

## Decision

The Step04 static reference page has not changed since the prior strict-parity V2 capture batch. Therefore the previously captured four reference JSON files remain the authoritative comparison baseline for the next 2.7.19 runtime audit.

Do not regenerate unchanged reference captures unnecessarily.

## Reused reference captures

```text
Confirmed Reference Desktop
Confirmed Reference Mobile 390×844 DPR3
Pending Reference Desktop
Pending Reference Mobile 390×844 DPR3
```

These were captured with diagnostic version:

`STEP04_STRICT_PARITY_V2_20260827`

and valid viewport conditions:

```text
Desktop: 1920×991, document client width 1905, DPR1, visualViewport scale1
Mobile: 390×844, DPR3, visualViewport scale1
```

## Required 2.7.19 rerun

Only the changed production side must be regenerated after hard-refreshing the live Step04 page and confirming `spatial-flow.css?ver=2.7.19` is loaded:

```text
1. Processing Production Desktop
2. Processing Production Mobile 390×844
3. Pending-family Production Desktop
4. Pending-family Production Mobile 390×844
```

If the real Woo pending-family order is `on-hold`, that is acceptable for the shared Pending-family visual CSS contract; state-specific copy and gateway output remain excluded from direct equality checks.

## Audit method

Pair the four new production JSON files against the retained four reference JSON files and first verify the eight deterministic 2.7.19 correction targets, then enumerate any residual computed/geometric differences.

No source changes before this production-only rerun.
