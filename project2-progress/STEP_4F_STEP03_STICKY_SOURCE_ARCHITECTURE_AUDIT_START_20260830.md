# Project 2 · Step03 Sticky Source / Architecture Audit START · 2026-08-30

## Trigger

The reversible Step03 shell-runway A/B proved causation:

- current production `.sf-safe5-summary` sticky owner is correct;
- `position: sticky; top: 136px; align-self: start` is present;
- `#order_review` remains static;
- body overflow and intermediate ancestors are not the blocker;
- baseline shell height 1166.047px vs sticky owner height 1012.047px leaves only 154px of containing-block vertical runway;
- temporarily enlarging only `.sf-safe5-shell` causes the same owner to lock at 136px repeatedly, then release at the containing boundary.

Therefore Step03 sticky failure is caused by insufficient real containing-block runway, not by a missing sticky rule.

## Current task

Audit the latest live production theme source to identify the correct fix without manufacturing fake blank height and without changing payment business logic.

Primary source required from the user, all from the current live child theme version:

1. `functions.php`
2. `assets/css/spatial-flow.css`
3. `assets/js/spatial-flow.js`

Request all three in one batch to avoid drip-fed source review. Do not request ZIP or unrelated templates initially.

## Audit targets

- locate creation/ownership of `.sf-safe5-checkout`, `.sf-safe5-form`, `.sf-safe5-shell`, `.sf-safe5-summary`, payment context card and summary card;
- locate desktop grid/height/min-height/sticky rules and Step03-specific overrides;
- determine why Step03 left/main content is shorter than the right grouped summary and whether production diverges from the static Step03 content/flow contract;
- inspect JS only for DOM relocation, class toggles, checkout fragments, payment method expansion/collapse or other runtime operations that materially change shell/main/sidebar height;
- preserve reference architecture: whole right-side wrapper sticky; inner order review static;
- preserve Woo gateway ownership, native Place Order, Terms/privacy and current Step03 business logic;
- do not solve by arbitrary large `min-height` or fake spacer.

## Current accepted known fingerprints before new upload validation

From the last locked Step04 2.7.21 source state:

### `functions.php`
- bytes: 612013
- SHA256: `82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f`
- version: 2.7.21

### `assets/css/spatial-flow.css`
- bytes: 589104
- SHA256: `45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6`

These fingerprints are comparison baselines only. The newly uploaded live files must be treated as source of truth and re-audited before any edit instruction.

## Stop point

Await all three latest live source files in one batch. No source modification is authorized before returned-file/source audit.
