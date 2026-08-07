# Step 4F · R1 Step-02 Multi-Shipping-Method Scalability Lock

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user clarified an important production requirement after the Step-02 runtime baseline was captured:

```text
The store currently has only one shipping method, but that does not mean it will remain the only method.
Step 02 must leave room for future shipping methods.
```

This requirement is now a locked implementation constraint for the Step-02 Shipping V2 migration.

## Correct interpretation

"Leave room" does **not** mean hardcoding several empty visual slots or pre-creating a fixed number of cards.

The correct production architecture is:

```text
WooCommerce shipping configuration remains the source of truth.
The SAFE5 Step-02 presentation enumerates every currently returned real shipping_method input/rate.
One real WooCommerce method = one synchronized visible Shipping option card.
The number of cards is dynamic.
```

Therefore:

```text
1 configured method  -> 1 visible Shipping card
2 configured methods -> 2 visible Shipping cards
3 configured methods -> 3 visible Shipping cards
N configured methods -> N visible Shipping cards
```

No theme/template code change should be required merely because the merchant later adds or removes WooCommerce shipping methods.

## JavaScript implementation lock

The Step-02 shipping mirror must:

```text
- query/enumerate the complete current set of native WooCommerce shipping_method inputs
- rebuild the visible SAFE5 method list from that complete set
- never assume the current count is one
- preserve a 1:1 mapping between each visible card and its native WooCommerce input
- relay card selection to the corresponding real native input
- preserve WooCommerce-selected state
- rebuild safely after updated_checkout because available rates may change with address, zone, cart contents or WooCommerce configuration
- remove stale visible cards when WooCommerce removes a method from the current response
- add new visible cards automatically when WooCommerce returns new methods
```

The mirror must not invent shipping availability, IDs, prices, labels or selected state.

## Template implementation lock

`form-checkout.php` must provide one dynamic method-list host only.

It must **not** contain:

```text
- fixed shipping method cards
- fixed method IDs
- fixed prices
- a fixed maximum method count
- placeholder cards for methods that are not currently returned by WooCommerce
```

The accepted static methods remain visual examples only.

## CSS/layout implementation lock

The Shipping method surface must be a repeatable list/grid that remains valid for one or many methods.

Required behavior:

```text
Desktop:
- cards stack cleanly within the Step-02 Shipping panel
- each card has enough width for method name/detail/price hierarchy
- additional methods expand the panel vertically instead of overflowing or overlapping

Mobile:
- each method remains a full-width selectable card
- additional methods stack vertically
- no horizontal clipping or fixed-height container
- selected-state treatment remains unambiguous
```

No CSS rule may depend on there being exactly one method.

## Backend and commerce ownership

The merchant continues to add/remove/configure shipping methods through WooCommerce shipping zones/settings.

SAFE5 does not create a second shipping-method administration system.

Editable SAFE5 Customizer fields may control presentation copy such as headings or explanatory text, but they do not own:

```text
shipping method availability
shipping method names configured by WooCommerce
shipping prices
shipping taxes
zone matching
selected shipping method
```

## Current live baseline

The current site happens to return one worldwide flat-rate method at `$8.99`.

That is only the current runtime test case, not an architectural limit.

The two user-supplied source baselines were rechecked and match the already accepted rollback identity:

```text
functions.php
575,903 bytes
SHA256: 48fb027223df748a23c33cff312fb45fd5437ec197a539d70eae71ac37f21fb8

assets/css/checkout-safe5.css
47,086 bytes
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
```

## Acceptance implications

The immediate live visual acceptance can use the currently configured single method, but source review must verify that the implementation is count-agnostic.

Before Checkout can be considered complete, multi-rate behavior must remain part of the shipping regression requirement:

```text
- one returned method works
- multiple returned methods can render without source changes when such a configuration is available for testing
- selected method persists through WooCommerce recalculation
- rate additions/removals after updated_checkout do not leave stale cards
- totals remain WooCommerce-authoritative
```

## Status

```text
Step-02 dynamic method-count requirement: locked
Current one-method runtime state: test fixture only
Hardcoded single-method implementation: prohibited
WooCommerce shipping settings: authoritative
Step-02 source implementation: may proceed under this constraint
Checkout: Not done
```
