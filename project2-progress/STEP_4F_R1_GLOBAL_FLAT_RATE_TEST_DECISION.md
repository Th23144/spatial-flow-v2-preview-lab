# Step 4F · R1 Global Flat-Rate Test Decision

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User-supplied business configuration

The user confirmed the current WooCommerce shipping configuration is:

```text
Global flat rate: $8.99
All supported destinations use the same shipping amount
Only one currently visible shipping method
```

## 2. Corrected acceptance logic

The previously proposed test expected a destination change to produce a different shipping amount.

That expectation is invalid for the current configuration.

```text
United States → Canada
Expected shipping under current business rule: $8.99 → $8.99
```

Therefore an unchanged amount does not prove failure and a changed amount would actually contradict the locked business configuration.

## 3. R1 decision

The following are removed as R1 blocking requirements:

```text
- forcing a country/address change solely to obtain a different shipping amount
- requiring visible shipping-price change as proof of updated_checkout
- requiring shipping-method persistence testing when only one globally available method exists
```

Reason:

```text
The current single global flat-rate configuration makes these checks non-discriminating.
```

Existing R1 evidence already confirms:

```text
- Step 02 renders the WooCommerce shipping method
- displayed shipping is $8.99
- subtotal $36.00 + shipping $8.99 = total $44.99
- Step 02 advances to Step 03
- Step 03 retains the $44.99 total
- normal and Crypto submissions both preserve the total
```

## 4. Deferred full-commerce gate

Address-driven AJAX refresh, alternative-rate selection persistence and multi-rate behavior remain valid WooCommerce concerns, but they belong to:

```text
R7 full WooCommerce regression
```

They must be tested if any of the following later becomes true:

```text
- more than one shipping method is enabled
- shipping rates vary by country, zone, state, postcode, weight or cart total
- taxes vary by destination
- free-shipping thresholds are introduced
- a shipping plugin dynamically injects or replaces rates
```

## 5. Current status

```text
Global flat-rate amount test: not required in R1
Selected-rate persistence test with one available rate: not required in R1
R1 interaction gates remaining: responsive review and strict V2 visual migration
Checkout: Not done
```
