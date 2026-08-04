# Step 4F · R1-D2A Shell Cascade Specificity Root Cause and Correction

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

The user supplied a read-only live CSS-cascade enumeration at `360px` for `.sf-safe5-shell`.

Initial observed geometry:

```text
viewport: 360px
left: 0
right: 360
width: 360px
computed max-width: 100%
margin-left: 0
margin-right: 0
```

This proved that the shell itself—not the descendant cards—was full viewport width.

## 2. Actual winning legacy rules

Source:

```text
assets/css/spatial-flow.css?ver=2.7.8
@media (max-width: 767px)
```

Higher-specificity selector:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > *
```

Winning declarations:

```css
width: 100% !important;
max-width: 100% !important;
margin-left: 0 !important;
margin-right: 0 !important;
```

A second matching shared rule also enforced:

```css
width: 100% !important;
max-width: 100% !important;
min-width: 0 !important;
```

All competing rules were `!important`, but the legacy wildcard selector had higher specificity than the former SAFE5 `.sf-safe5-shell` selector. Therefore it won despite the SAFE5 stylesheet loading later.

Confirmed root cause:

```text
legacy shared mobile Checkout rule in spatial-flow.css
+ higher selector specificity
+ !important
```

The prior `content-box` diagnosis was disproved as the gutter root cause.

## 3. R1 ownership decision

R1 did not edit the large shared `spatial-flow.css` file. Removal of the broad legacy rule remains assigned to the later bounded shared-CSS cleanup phase.

R1-D2A used a stronger narrow selector only for the actual SAFE5 shell direct child:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > .sf-safe5-shell
```

## 4. Applied correction

The mobile rule was changed from a grouped low-specificity Intro/Shell selector to separate Intro and direct-shell selectors:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-intro {
  width: min(calc(100% - 44px), 1180px) !important;
  max-width: 1180px !important;
}

body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > .sf-safe5-shell {
  width: min(calc(100% - 44px), 1180px) !important;
  max-width: 1180px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
```

## 5. Installed integrity state

```text
File: assets/css/checkout-safe5.css
Bytes: 24,022
Lines: 688
SHA256: 5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b
```

Static validation before issue:

```text
CSS parse errors: 0
Braces: 92 / 92
Comments: 12 / 12
Bottom append: no
New breakpoint: no
Shared spatial-flow.css edit: no
```

## 6. Runtime acceptance

Authoritative evidence record:

```text
project2-progress/STEP_4F_R1D2A_360PX_GUTTER_RUNTIME_ACCEPTANCE.md
```

The user-supplied live `360px` screenshot confirms:

```text
- Address/form warm panel now sits inside the expected mobile gutter
- Continue and Return actions align to the same gutter
- Order Summary aligns to the same gutter
- form-before-summary order remains correct
- primary-before-secondary action order remains correct
- no visible horizontal overflow is introduced
```

Classification:

```text
Shell specificity root cause: confirmed
Correction application: passed
Mobile body gutter: passed
R1-D2A: closed
```

## 7. Remaining work

```text
R1-D2B: Step-01 form/panel and field-surface migration
R1-D2C+: Order Summary internals, trust surfaces and desktop body geometry
Checkout: Not done
```
