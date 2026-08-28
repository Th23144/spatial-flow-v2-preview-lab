# Step 4F · Step04 BACS Bank Details Presentation Decision · 2026-08-28

## Trigger

During the final Step04 2.7.20 runtime capture pass, the user reviewed an On-hold Direct Bank Transfer (BACS) result and asked whether the gateway-owned `Our Bank Details` block / account-name presentation should be modified now. The user confirmed this Direct Bank Transfer method is only a temporary test payment method and will be disabled before the real production payment stack is enabled.

## Decision

**Do not change Step04 theme/template/CSS to restyle, rename, or suppress this BACS block.**

Reason:

- the block is gateway-owned WooCommerce BACS output, not Step04-owned canonical content;
- On-hold is exactly a state where payment instructions may still be required, so preserving the block is semantically correct;
- the project already validated the opposite boundary: Cancelled must not show payment instructions, while On-hold must preserve them;
- this payment method is temporary and will be disabled before public launch, so code-level visual work here would be throwaway work and would risk interfering with gateway ownership;
- gateway-owned Thank You output is an allowed dynamic deviation from the static S7 Step04 1:1 reference.

## Account-name wording

If the configured BACS account-name value is literally an admin-centric placeholder such as `我的账户` / `测试账户`, that value is not ideal customer-facing production copy. For a real BACS payment method, the account-name field should normally be the actual beneficiary/account-holder legal/business name.

Because this gateway is test-only, no source-code change is required now. If cleaner test presentation is desired, change the BACS **WooCommerce payment settings value** only (for example to a neutral test label such as `Spatial Flow Test Account`) rather than modifying Step04 code.

## Production launch boundary

Before public launch:

1. disable Direct Bank Transfer/BACS so new customers cannot select it;
2. if test orders or staging data could remain reachable, replace/remove any test-only BACS account details as part of launch hygiene rather than relying solely on visual hiding;
3. do not carry test-specific BACS presentation work into the production Step04 visual contract.

## Strict 1:1 classification

`Our Bank Details` in the current On-hold capture is classified as **state-appropriate gateway-owned dynamic output**, therefore it is excluded from strict static S7 computed-style parity scoring except for the surrounding Step04-owned container/boundary behavior.

## Current execution effect

No source modification is authorized from this finding. The four new 2.7.20 production JSON captures remain valid and should be audited against the retained reference baseline.
