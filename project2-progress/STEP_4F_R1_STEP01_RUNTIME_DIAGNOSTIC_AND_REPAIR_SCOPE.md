# Step 4F · R1 Step 01 Runtime Diagnostic and Repair Scope

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user supplied the requested read-only 1365px Step-01 runtime diagnostic after the strict 1:1 omission audit.

## Diagnostic source state

```text
viewport: 1365 × 991
checkout-safe5.css live bytes: 46,623
expected shared shell signature: present
desktop nominal 18px row rule: present
mobile nominal 11px row rule: present
mobile checkbox 14px padding rule: present
```

This confirms the current live page is loading the audited shared-shell CSS rather than a stale file.

## Confirmed root cause A · Field-row vertical rhythm

Measured live gaps:

```text
First/Last control -> Country label: 0px
Country control -> Street label: 0px
Address line 1 -> Address line 2: 18px
Address line 2 -> City/ZIP labels: 18px
City/ZIP controls -> State/Phone labels: 0px
State/Phone controls -> checkbox row: 8px
```

Computed row margins:

```text
billing_first_name_field: 0px
billing_last_name_field: 0px
billing_country_field: 0px
billing_city_field: 0px
billing_postcode_field: 0px
billing_state_field: 0px
billing_phone_field: 0px

billing_address_1_field: 18px
billing_address_2_field: 18px
```

The generic D2B2 rule exists in the loaded file, but is not winning the final cascade for normal rows. The address-line rules use a later, higher-specificity Checkout-only selector and do win. Therefore the safe repair is not to increase the nominal spacing value; it is to promote the all-row rule to the same narrow Checkout-only specificity. The same promotion is required for the mobile 11px rule.

The prior diagnostic script returned an empty `matchingRules` array because its CSSOM traversal treated empty `cssRules` collections as nested rules. That omission does not invalidate the computed geometry above, but it means the exact older selector name was not captured. The selective computed result is sufficient to prove the specificity conflict and define the bounded repair.

## Confirmed root cause B · Warm Checkout canvas

The background chain proves:

```text
html: #f6f1eb
body: #f6f1eb
#primary: transparent
#main.site-main: #ffffff
all descendants from article through SAFE5 shell: transparent
```

Therefore `#main.site-main` is the sole opaque white painter underneath the live Checkout. A Checkout-only override on that exact Astra owner is sufficient. No shell-width rollback is required.

## Newly confirmed omission · Order notes textarea height

The accepted reference requires:

```text
desktop textarea min-height: 112px
mobile textarea min-height: 94px
```

The live diagnostic reports:

```text
#order_comments computed min-height: 52px
rendered height: 56px
```

The current 112px declaration exists but is not winning the final cascade. This is a separate strict D2B2 miss that was not identified in the earlier re-audit. It requires a narrow ID-backed Checkout-only selector on the native `#order_comments` textarea, with a 94px phone override.

## Confirmed mobile checkbox mismatch

The current phone rule still applies:

```text
margin-top: 5px
padding-top: 14px
```

The accepted reference rhythm is:

```text
margin-top: 8px
padding-top: 0
```

The mobile rule must be corrected in the same bounded CSS repair.

## Reviewed runtime geometry retained

The diagnostic independently confirms the accepted shared geometry remains installed:

```text
shell max-width: 1440px
shell padding: 58px 56px 96px
shell columns at 1365 viewport: 621.25px / 443.75px
shell column gap: 80px
intro column gap: 80px
```

No width/column rollback is authorized.

## Additional wrapper observation

Astra still contributes:

```text
#primary margin-top / margin-bottom: 56px
#main padding-top / padding-bottom: 20px / 44px
.entry-content padding-top / padding-bottom: 20px / 44px
```

These values are recorded for the final whole-page vertical-geometry comparison. They are not changed in the immediate repair because the supplied diagnostic proves the background owner, but does not by itself prove that every wrapper spacing value is visually wrong after the accepted Intro/Shell stages.

## Copy mismatch remains separately tracked

The following strict content differences remain outside this CSS repair:

```text
sentence case in the three Step-01 panel headings
reference delivery explanatory copy
Back to Bag versus Return to cart
```

They require source/copy ownership review rather than a CSS patch.

## Immediate repair boundary

One bounded replacement group in:

```text
assets/css/checkout-safe5.css
```

It will correct only:

```text
1. #main.site-main warm Checkout canvas
2. desktop 18px native row rhythm with sufficient specificity
3. mobile 11px native row rhythm with sufficient specificity
4. native Order notes textarea 112px / 94px heights
5. mobile checkbox 8px margin and zero top padding
```

No change to:

```text
shared 1440px / 7fr:5fr / 80px geometry
field order or WooCommerce ownership
Select2 behavior
alternate Shipping geometry
Step 02 or Step 03
Order Summary internals
PHP or JavaScript
```

## Status

```text
Runtime diagnostic: complete
D2B2: open
Shared warm-canvas defect: open
Immediate next action: issue one audited CSS repair group
Step 02 Shipping V2: blocked
Checkout: Not done
```
