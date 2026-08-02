# Step 4F · Live Checkout Bounded Reconstruction Plan

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
Live Checkout ownership audit: closed
Exact source-backed ownership matrix: issued
Bounded reconstruction plan: completed in this document
Live implementation: not started
Plugin/workspace integration: not started
Checkout: Not done
```

This document is planning only. It does not authorize any PHP, JavaScript, CSS, WordPress, WooCommerce, WPCode, CartFlows or Crypto-plugin runtime change.

## 2. Locked outcome

The real WooCommerce Checkout must reproduce the accepted Project 2 static flow while preserving native commerce authority:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Rules:

```text
- Steps 01–03 are Checkout.
- Step 04 is the WooCommerce-owned order result.
- Review is not a fourth input step.
- Place Order remains the native WooCommerce control and belongs in Step 03.
- WooCommerce remains authoritative for fields, shipping, totals, coupons, gateways, validation, order creation, stock, emails and statuses.
- Browser code may improve presentation and early validation, but may not decide payment success or order status.
- Dynamic gateway rendering must remain native.
- CartFlows and Elementor must not become Checkout owners.
- WPCode snippets remain unchanged and excluded.
- Current Spatial Flow Crypto Pay Trial V0.2.5 remains untouched during the initial theme reconstruction.
```

## 3. Current live baseline

### Page and ownership

```text
WooCommerce Checkout page: ID 623
URL: /checkout-2-2/
Page content: [woocommerce_checkout]
CartFlows: active plugin, no Flow exists
WPCode: no Checkout/payment/Crypto ownership
```

### Current child-theme owners

```text
woocommerce/checkout/form-checkout.php
woocommerce/checkout/thankyou.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
```

### Current live conflicts

```text
1. form-checkout.php implements Information → Shipping → Payment → Review.
2. checkout-safe5.js moves native .place-order into Review and blocks submission until Step 4.
3. thankyou.php gives pending/on-hold the same success-like composition as paid non-failed statuses.
4. current SAFE5 hardcodes visible copy while many Checkout Customizer controls are orphaned.
5. checkout-safe5.js and spatial-flow.js overlap on updated_checkout / checkout_error notice handling.
6. spatial-flow.css retains historical Checkout rules beneath checkout-safe5.css.
```

### Current Crypto baseline

```text
Plugin: Spatial Flow Crypto Pay Trial V0.2.5
ZIP SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
Gateway ID: spatial_flow_crypto
Asset/network: fixed USDT / TRON-TRC20
Current supplied mode: Nile Testnet + Sandbox enabled
```

Current legacy path:

```text
Step 03 selects spatial_flow_crypto
→ WooCommerce creates on-hold order
→ /crypto-pay/
→ invoice creation / reuse
→ customer submits transaction hash
→ server-side TronGrid verification
→ payment_complete(tx_hash)
→ canonical WooCommerce order-received result
```

V0.2.5 does not contain the accepted future order-pay Workspace, REST routes, form-pay replacement, Workspace flag, token or epoch.

## 4. Global implementation rules

Every implementation group must:

```text
- start from the latest current local file, never an older copy
- record current size, line count and SHA256 for every changed file
- create an independently restorable snapshot before editing
- define exact START/END anchors for large-file changes
- prefer in-place replacement over append-only patches
- preserve native WooCommerce hooks and dynamic data
- preserve backend editability
- perform syntax/parser checks before browser validation
- stop after its own acceptance gate
- not begin the next group without explicit user authorization
```

Large-file delivery prohibition:

```text
- no blind whole-file overwrite of functions.php or spatial-flow.css
- no broad delete-and-replace operation without exact anchors
- no routine bottom-of-file CSS patch
- no combined multi-group patch package
```

## 5. Implementation sequence

# Group R0 · Baseline capture and rollback package

## Purpose

Create a verified rollback boundary before any live Checkout modification.

## Allowed changes

```text
Documentation and local backup artifacts only.
No runtime source change.
```

## Required captures

```text
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
woocommerce/checkout/form-checkout.php
woocommerce/checkout/thankyou.php
current Spatial Flow Crypto Pay Trial V0.2.5 plugin directory or verified ZIP
current WordPress theme-mod values for sf_checkout_* and sf_order_received_*
current WooCommerce Checkout page assignment
current enabled payment gateway list/order
```

For each source file record:

```text
- path
- byte size
- line count
- SHA256
- PHP/JS/CSS parser or syntax result
```

## Baseline functional smoke test

Before editing, verify and record:

```text
- Cart reaches /checkout-2-2/
- Step 01 fields render
- shipping options and totals update
- payment methods render dynamically
- current Place Order works through the legacy Review step
- Crypto Sandbox can create an on-hold order and enter /crypto-pay/
- current order-received page loads
```

This is not acceptance of the current design. It is a rollback baseline.

## Rollback

No runtime change exists. Failure to capture a complete baseline blocks R1.

## Stop point

```text
R0 evidence complete
R1 not started
Checkout: Not done
```

---

# Group R1 · Rebuild the live Checkout shell as Step 01–03

## Purpose

Replace the rejected four-view live shell with the accepted three-step Checkout structure while preserving native WooCommerce output and the existing V0.2.5 payment path.

## Allowed files

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

No other file may change in R1.

## Required template changes

`form-checkout.php`:

```text
- keep WooCommerce Checkout page and shortcode host unchanged
- preserve woocommerce_before_checkout_form and all native customer/order-review/payment hooks
- render only Step 01, Step 02 and Step 03 as Checkout views
- remove Review as a navigation/input view
- remove Review summary blocks that duplicate native order-review data
- keep WooCommerce billing output in Step 01
- keep WooCommerce shipping output in Step 02
- keep WooCommerce payment output in Step 03
- keep native order review/summary dynamic and server-backed
- keep coupon requests server-backed
- keep the real .place-order / #place_order inside Step 03
- do not clone, replace or synthesize #place_order
```

## Required JavaScript changes

`checkout-safe5.js`:

```text
- replace four-step state with three-step state
- delete Review-state population and Review-only selectors
- delete movement of .place-order to a Step-4 target
- delete the rule that blocks submit until Step 4
- preserve Step 01/02/03 back/next navigation
- preserve early UX validation only as a non-authoritative guard
- preserve native WooCommerce submit event, nonce and processing lifecycle
- preserve shipping-method synchronization and update_checkout triggering
- preserve dynamic gateway switching and gateway-provided fields
- keep coupon requests on WooCommerce wc-ajax
- on server validation errors, route presentation back to the owning Step 01/02/03 without hiding the server message
```

## Required CSS changes

`checkout-safe5.css`:

```text
- convert the step indicator from four columns to three
- remove Review-only visual blocks and Place Order target styles
- implement the accepted static Step 01–03 geometry
- preserve native field, payment-box, terms and button usability
- preserve sticky summary only where it remains safe
- implement 1366×768, 390×844 and 360×800 responsive behavior
- make no broad shared-page changes
```

The existing relevant blocks must be replaced in place. A temporary appended validation block is allowed only if explicitly documented with a cleanup trigger inside R1; it may not survive R1 closure.

## Preconditions

```text
- R0 complete
- exact current file hashes recorded
- current Step 01–03 approved static references available
- no gateway/plugin update underway
```

## Functional tests

```text
- Step 01 required fields and malformed email
- Step 01 → Step 02 only after acceptable client fields
- country/state changes trigger WooCommerce recalculation
- Step 02 displays one or multiple shipping methods correctly
- selected shipping method persists through updated_checkout
- Step 02 → Step 03 preserves customer/shipping state
- all configured native gateways render dynamically
- gateway switching preserves native payment boxes/nonces
- terms/privacy links work after repeated updated_checkout
- native Place Order appears once in Step 03
- one click creates at most one order
- server validation errors remain visible
- successful non-Crypto submit follows native gateway redirect
- Crypto selection still creates on-hold order and redirects to legacy /crypto-pay/
```

## Visual acceptance

Compare the live page against accepted static Step 01–03 at:

```text
1366×768
390×844
360×800
browser zoom 100%
```

Inspect:

```text
frame width, gutters, grid ratio, spacing, headings, summary, field geometry,
gateway clipping, sticky behavior, notices, buttons, touch targets and horizontal overflow
```

## Rollback

Restore all three R1 files as one atomic unit. Never roll back only the template or only the script because their DOM/state contract is coupled.

## Stop point

```text
R1 implemented and awaiting user functional/visual acceptance
R2 not started
Checkout remains Not done
```

---

# Group R2 · Consolidate Checkout notice and error ownership

## Purpose

Ensure every server/validation/coupon/payment notice appears once, remains visible and maps to the correct Step 01/02/03.

## Allowed files

```text
assets/js/checkout-safe5.js
assets/js/spatial-flow.js
assets/css/checkout-safe5.css
assets/css/spatial-flow.css
```

No template, functions.php, Thank You or plugin change is allowed in R2.

## Required decisions

```text
- checkout-safe5.js becomes the sole step-aware Checkout notice presentation owner
- spatial-flow.js must skip SAFE5 notice relocation while retaining unrelated shared behavior
- obsolete spatial-flow.css rules that hide .woocommerce-NoticeGroup-checkout must be removed or narrowly neutralized
- native WooCommerce notice text and server authority remain untouched
- no notice may be duplicated, suppressed or replaced with browser-authored success text
```

## CSS maintenance rule

For `spatial-flow.css`:

```text
- record exact current size/lines/hash
- identify exact START/END anchors for each obsolete Checkout notice block
- remove or replace only those bounded blocks
- do not append a new global override at file end
- preserve Cart, Shop, Single Product, Header, Footer and Thank You selectors
```

## Tests

```text
- missing required billing field
- malformed email
- unavailable/missing shipping method
- invalid/expired coupon
- terms not accepted
- no payment method selected
- gateway-declined/server error
- repeated updated_checkout
- repeated checkout_error
- desktop and phone placement
- each notice appears once and remains readable
```

## Rollback

Restore the exact R2 blocks/files together. R1 remains intact.

## Stop point

```text
R2 accepted
R3 not started
Checkout remains Not done
```

---

# Group R3 · Restore active backend-editable Checkout copy

## Purpose

Reconnect live Step 01–03 presentation copy to WordPress theme settings without changing operational WooCommerce data.

## Allowed files

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js only if a visible label is currently JavaScript-generated
```

No CSS cleanup, Thank You status mapping or Crypto-plugin change is allowed in R3.

## Required work

```text
- inventory all existing sf_checkout_* theme mods and current saved values
- map compatible existing settings to the new Step 01–03 shell
- add clearly named new settings only where no safe existing setting exists
- preserve saved values and define safe defaults
- reconnect page title, kicker, intro, step labels, section labels, summary labels, coupon copy, trust copy and privacy/support copy where appropriate
- keep customer data, product data, shipping, totals, gateway labels, validation messages and status truth dynamic and non-editable as static copy
- do not expose settings that could falsely claim payment success
- mark any obsolete old setting as deprecated only after its value has been mapped or intentionally retained
```

## Required admin validation

For each editable field:

```text
- change value in Customizer
- publish
- confirm live Checkout changes only the intended copy
- confirm blank value uses a safe fallback
- confirm no payment/shipping/order data becomes static
```

## Rollback

```text
- restore functions.php and template/script changes
- restore exported theme-mod values if migration changed option names
- do not delete historical theme-mod values during R3
```

## Stop point

```text
R3 accepted
R4 not started
Checkout remains Not done
```

---

# Group R4 · Server-authoritative Step-04 result mapping

## Purpose

Implement the accepted Confirmed/Pending result semantics on the real WooCommerce order-received page.

## Allowed files

```text
woocommerce/checkout/thankyou.php
functions.php
one isolated result stylesheet only if the current result styles cannot be safely maintained in their existing owner
```

No main Checkout shell, gateway or Crypto-plugin change is allowed in R4.

## Required status mapping

```text
processing / completed
→ Confirmed
→ payment received/confirmed language
→ fulfillment may proceed

pending / on-hold
→ Pending / unpaid
→ order received but payment not confirmed
→ fulfillment not started
→ safe payment recovery when a valid WooCommerce payment URL exists, otherwise support

failed
→ Failed
→ retry payment using WooCommerce payment URL when available
→ no success language

cancelled
→ Cancelled
→ no success language
→ support or safe restart guidance

refunded
→ Refunded / support-oriented result
→ no fulfillment-success claim
```

The exact classification must use the real WooCommerce order object and server status. Browser query parameters must never select the real state.

## Required preservation

```text
woocommerce_before_thankyou
woocommerce_thankyou_{gateway}
woocommerce_thankyou
real order number/date/email/total/items/addresses
WooCommerce guest-order access checks
payment/recovery URLs generated by WooCommerce
existing sf_order_received_* editable values where semantically safe
```

## Backend editability

```text
- keep existing Order Received Customizer values
- add explicit Confirmed/Pending/Failed/Cancelled copy fields only where needed
- defaults must use safe status-specific language
- no editable field may override the server status classification
```

## Tests

```text
processing order
completed order
pending order
on-hold Crypto order without confirmed payment
failed order with pay URL
cancelled order
refunded order if supported
Sandbox Crypto success after payment_complete()
gateway-specific thank-you output
guest order access
```

## Rollback

Restore `thankyou.php`, related functions block and optional isolated stylesheet as one R4 unit; restore exported `sf_order_received_*` values if migrated.

## Stop point

```text
R4 accepted
R5 not started
Checkout remains Not done
```

---

# Group R5 · Historical Checkout CSS ownership cleanup

## Purpose

Remove obsolete shared Checkout cascade only after R1–R4 have proven replacement ownership.

## Allowed files

```text
assets/css/spatial-flow.css
assets/css/checkout-safe5.css only for in-place consolidation, not new features
```

No PHP, JavaScript, template or plugin change is allowed in R5.

## Required workflow

```text
1. Record latest file size, line count, SHA256, brace balance, comment balance and parser result.
2. Locate every historical Checkout selector group in spatial-flow.css.
3. Classify each group as shared-required, obsolete, or migrated to checkout-safe5.css.
4. Remove obsolete blocks in small independently reversible batches.
5. Merge overlapping SAFE5 rules in place.
6. Remove any temporary R1 validation block before R5 closure.
7. Re-run parser and cross-page regression after every batch.
```

## Protected surfaces

```text
Header
Footer
Shop archive
Single Product
Cart
Wishlist
Search
Thank You/result
Blog surfaces
```

## Tests

```text
Checkout computed styles have one clear owner
no stale Review selector remains active
no hidden native notice group
Cart 1:1 remains unchanged
Shop and Single Product remain unchanged
Header/Footer remain unchanged
1366/390/360 Checkout remains accepted
```

## Rollback

Each deleted selector group must have an exact before-copy and commit boundary. Do not use whole-file rollback unless multiple bounded restores fail.

## Stop point

```text
R5 accepted
Theme-side reconstruction stable
Crypto integration decision gate next
Checkout remains Not done
```

---

# Group R6 · Crypto integration decision gate

## Purpose

Decide whether to keep the current V0.2.5 legacy `/crypto-pay/` path for this Checkout release or begin a separately authorized plugin upgrade toward the accepted dedicated Workspace.

## R6A · Mandatory legacy regression, no code change

Using the unchanged V0.2.5 plugin verify:

```text
- Step 03 dynamically renders spatial_flow_crypto
- one Checkout submission creates one on-hold order
- redirect reaches /crypto-pay/ with valid order authorization
- invoice creation/reuse works
- invalid transaction hash fails safely
- receiver mismatch fails safely
- amount mismatch fails safely
- old transaction handling remains correct
- Sandbox success calls payment_complete() once
- successful result reaches canonical WooCommerce Step 04
- unpaid/on-hold result uses R4 Pending semantics
```

No QR, wallet connection, operational countdown, automatic monitoring or confirmation tracker may appear.

## R6B · Decision options

```text
Option A — keep V0.2.5 legacy path for current Checkout release
- no plugin source change
- accepted Step 01–03 and Step-04 result go live around the existing /crypto-pay/ bridge
- dedicated Workspace remains deferred

Option B — separately authorize plugin upgrade/integration
- first produce a plugin-specific ownership and migration plan
- back up the exact V0.2.5 installed directory
- verify old-path regression before and after upgrade
- do not combine plugin upgrade with theme shell work
- do not activate future flags until Sandbox and recovery gates pass
```

The user must explicitly choose Option A or Option B after R6A evidence. The plan does not preselect or silently install V0.2.6.1.

## Stop point

```text
R6A evidence complete
User selects A or B
No plugin change without separate authorization
Checkout remains Not done
```

---

# Group R7 · Full commerce regression

## Purpose

Prove that the reconstructed live page preserves real WooCommerce operations.

## Code changes

None by default. Any discovered defect must reopen the smallest owning group rather than create an unplanned broad patch.

## Required matrix

### Customer and field flow

```text
guest checkout
required fields
malformed email
country/state changes
ship-to-different-address
browser refresh/back behavior
```

### Shipping and totals

```text
single shipping method
multiple shipping methods
address-driven rate change
subtotal/shipping/tax/total refresh
selected method persistence
```

### Coupon

```text
valid
invalid
expired
removed
repeated application
notice placement
```

### Gateways

```text
all currently enabled WooCommerce gateways render dynamically
switching methods
missing selection
provider field/nonces
provider error
successful redirect
```

### Order safety

```text
single order per submission
duplicate-click protection
processing overlay
server validation
stock behavior
order notes
emails where local environment permits
```

### Crypto

```text
V0.2.5 legacy path or separately approved upgraded path
Sandbox success
unpaid on-hold
invalid hash
receiver/amount mismatch
duplicate verification
canonical result
```

### Result semantics

```text
Confirmed
Pending/on-hold
Failed
Cancelled
Refunded if supported
payment recovery link
support link
```

## Stop point

```text
R7 functional evidence complete
R8 visual/final acceptance next
Checkout remains Not done
```

---

# Group R8 · Final strict desktop/mobile acceptance and closure

## Purpose

Determine whether the real Checkout and result family qualify for Project 2 `Completed 1:1`.

## Required comparison conditions

```text
browser zoom 100%
same viewport for live and static references
no stale cache
fully loaded page
full-page screenshots
real dynamic WooCommerce data
```

## Required viewport families

```text
1366×768
390×844
360×800
```

## Required surfaces

```text
Step 01 Contact / Address
Step 02 Shipping
Step 03 Payment with every enabled gateway family
validation/coupon/payment notices
processing state
Crypto legacy or separately approved Workspace state
Step-04 Confirmed
Step-04 Pending/on-hold
Step-04 Failed/Cancelled recovery states
Footer and complete phone flow
```

## Acceptance rule

```text
- geometry, typography, spacing, hierarchy and responsive composition match the accepted static contract
- permitted differences are limited to real dynamic commerce data, native behavior, accessibility and documented production-safe mobile corrections
- backend copy is verifiably editable
- no horizontal overflow, clipping, hidden controls or duplicate notices
- WooCommerce remains authoritative
- all R7 regression tests pass
- user explicitly approves the real live page
```

Only then may the page status change:

```text
Checkout: Completed 1:1
```

Any unresolved functional, visual, semantic or editability defect keeps:

```text
Checkout: Not done
```

## 6. Explicitly excluded from the first implementation group

```text
- V0.2.6.1 installation
- new REST/order-pay Crypto Workspace
- QR code
- wallet connection
- automatic chain monitoring
- operational countdown
- confirmation-progress tracker
- CartFlows Flow creation
- Elementor rebuild
- Checkout page ID/URL change
- WPCode snippet changes
- broad global CSS cleanup
- Thank You status rewrite before R4
```

## 7. Immediate next action after plan acceptance

```text
User reviews and accepts this bounded plan.
Then begin R0 baseline capture only.
Do not begin R1 code modification in the same step as plan acceptance unless the user explicitly authorizes R1 after R0 closure.
```

## 8. Current stop point

```text
Bounded reconstruction plan: issued
Plan acceptance: waiting for user decision
R0 baseline capture: not started
R1 live code modification: not authorized and not started
Plugin/workspace integration: not started
Checkout: Not done
```
