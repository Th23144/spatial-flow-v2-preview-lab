# Post-Footer Site Hygiene — Airwallex Residual Audit Start — 2026-09-15

## Trigger
User confirmed Airwallex will not be used and the Airwallex plugin has already been uninstalled. Six published WordPress pages titled `Payment` remain, each reported to show the same Quick Edit metadata including slug `airwallex_payment_method_all`.

## Classification
This is part of the post-Footer plugin/site hygiene cleanup stage, not a Footer task and not a Checkout redesign task.

## Source-history findings
Repository history confirms Airwallex previously existed as a live WooCommerce payment gateway and that Checkout CSS intentionally preserved Airwallex-specific currency-switch suppression while that gateway was present. These compatibility rules now become cleanup candidates because the plugin is no longer part of the intended stack.

## Cleanup scope
Airwallex cleanup must be dependency-led and may include:
- orphaned WordPress pages created by the plugin;
- menu references to those pages;
- WooCommerce/payment settings/options;
- plugin-specific transients, scheduled actions, logs, custom tables or metadata if present;
- source-level CSS/JS compatibility rules kept only for Airwallex;
- WPCode snippets or theme conditionals referencing Airwallex;
- plugin files/cache/upload artifacts if any remain.

## Safety rule
Do not delete the six Payment pages or any source rule solely because the names look duplicated. First prove that no current checkout/payment/menu/plugin owner depends on them. Current accepted Checkout ownership remains WooCommerce page ID 623 at `/checkout-2-2/`; the six Airwallex-named pages are not the current Checkout Step-03 owner.

## Next action
Perform a bounded Airwallex residual audit before any destructive cleanup. Separate evidence into: active dependency / historical compatibility residue / database residue / safe-delete candidate / requires further verification.
