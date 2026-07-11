# Step 4E-B1-B · Cart Unhooked Heading + Live Count Renderer

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-A：Passed.
Step 4E-B1-B：Passed.
User manual edit：Validated.
Cart frontend unchanged：Passed.
SAFE5 Checkout unchanged：Passed.
Next：Step 4E-B1-C · Heading hook switch.
Cart page status：Not done.
```

## 1. Purpose

Add the new Cart heading and live item-count renderer beside the existing Cart code without hooking it yet.

## 2. Validated uploaded file

```text
Uploaded name: functions(3).php
Operational path: functions.php
SPATIAL_FLOW_CHILD_VERSION: 2.7.8
Size: 550,221 bytes
Lines: 10,215
SHA256: e6bb2759bb3ac25ef12a2379ba29995243fe8554f2e93b3fd82b3b4c29158578
Opening braces: 1,187
Closing braces: 1,187
PHP syntax: Passed
```

This exactly matches the predicted B1-B file result.

## 3. Exact content validation

```text
B1-B START marker count：1
B1-B END marker count：1
spatial_flow_cart_v2_heading() definition count：1
New heading add_action() count：0
Existing legacy intro add_action() count：1
Version drift：None
Additional hidden file drift：None; exact SHA matched
```

The new renderer:

```text
- reads sf_cart_heading_lead and sf_cart_heading_emphasis
- reads singular/plural count formats from the Customizer
- reads the live WooCommerce cart contents count
- escapes all rendered text
- replaces only the literal %s token
- remains dormant in B1-B because it is not hooked
```

## 4. Browser validation

The user confirmed:

```text
Cart frontend unchanged：Passed.
SAFE5 Checkout unchanged：Passed.
```

This is the required dormant-renderer behavior.

## 5. Preserved behavior

```text
- legacy spatial_flow_cart_visual_2_intro() remains intact
- legacy intro hook remains active in the validated B1-B baseline
- service cards remain unchanged
- trust cards remain unchanged
- recommendations remain unchanged
- CSS and JavaScript remain unchanged
```

## 6. Authoritative baseline for B1-C

```text
functions.php
Version: 2.7.8
Size: 550,221 bytes
Lines: 10,215
SHA256: e6bb2759bb3ac25ef12a2379ba29995243fe8554f2e93b3fd82b3b4c29158578
PHP syntax: Passed
Braces: 1,187 / 1,187
```

B1-C must use this uploaded file as its only source of truth.

## 7. Next step

```text
Step 4E-B1-C · Heading Hook Switch
Record: project2-progress/STEP_4E_B1_C_HEADING_HOOK_SWITCH.md
```

B1-C changes only the active `woocommerce_before_cart` callback from the legacy intro renderer to the validated new heading/count renderer.