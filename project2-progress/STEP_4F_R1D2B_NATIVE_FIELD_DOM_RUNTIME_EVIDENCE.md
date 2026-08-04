# Step 4F · R1-D2B Native Field DOM Runtime Evidence

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

The user supplied the complete read-only DOM-map JSON generated on the live Checkout Step 01 page.

Viewport during capture:

```text
innerWidth: 1210
clientWidth: 1195
```

## 2. Native node uniqueness

Every inspected operational node exists exactly once:

```text
#billing_email_field: 1
#billing_first_name_field: 1
#billing_last_name_field: 1
#billing_country_field: 1
#billing_address_1_field: 1
#billing_address_2_field: 1
#billing_city_field: 1
#billing_state_field: 1
#billing_postcode_field: 1
#billing_phone_field: 1
#ship-to-different-address: 1
#ship-to-different-address-checkbox: 1
.woocommerce-shipping-fields: 1
.shipping_address: 1
#order_comments_field: 1
.woocommerce-additional-fields: 1
.woocommerce-additional-fields__field-wrapper: 1
```

There are no duplicate operational IDs or duplicate posted field nodes in the current DOM.

## 3. Current ownership and location

All inspected customer fields currently belong to:

```text
data-sf-safe5-view="1"
```

They are inside the active Step-01 section and inside the same current `.sf-safe5-section-card`.

### Billing rows

All billing rows are children of:

```text
.woocommerce-billing-fields__field-wrapper
→ .woocommerce-billing-fields
→ .sf-safe5-billing
→ #customer_details
→ .sf-safe5-section-card
→ Step 01
```

Current billing row order:

```text
1. billing_first_name
2. billing_last_name
3. billing_country
4. billing_address_1
5. billing_address_2
6. billing_city
7. billing_state
8. billing_postcode
9. billing_phone
10. billing_email
```

The accepted reference requires email in the Contact panel and requires postcode before state in the delivery composition.

### Shipping relationship and hidden shipping address

The unique native `.woocommerce-shipping-fields` node is also inside Step 01:

```text
.woocommerce-shipping-fields
→ .sf-safe5-billing
→ #customer_details
→ Step 01
```

Observed state:

```text
#ship-to-different-address: visible
#ship-to-different-address-checkbox: visible
.shipping_address: present but display:none
```

This confirms the native relationship control and hidden alternate shipping fields can be moved together as one native node without exposing or duplicating the hidden shipping form.

### Order comments

The unique native order-comments node is inside:

```text
#order_comments_field
→ .woocommerce-additional-fields__field-wrapper
→ .woocommerce-additional-fields
→ .sf-safe5-billing
→ #customer_details
→ Step 01
```

It can therefore be moved by moving the complete `.woocommerce-additional-fields` node into the Optional note panel.

## 4. Safe implementation boundary confirmed

The runtime evidence authorizes this exact method:

```text
- create three empty semantic mounts in form-checkout.php
- move #billing_email_field to Contact
- move the existing billing rows to Delivery in the accepted order
- move any unknown/plugin-added billing rows to the end of Delivery
- move the complete .woocommerce-shipping-fields node to Delivery
- move the complete .woocommerce-additional-fields node to Optional note
- never clone or recreate an input/select/textarea
- keep all original IDs, names, values, required classes and WooCommerce event ownership
```

Required accepted delivery order:

```text
first name
last name
country
address 1
address 2
city
postcode
state
phone
unknown/plugin-added billing rows
native shipping relationship/alternate-address block
```

## 5. Event boundary

The placement routine must be idempotent and rerun after:

```text
initial DOM ready
updated_checkout
country_to_state_changed
```

This protects native country/state replacement while avoiding duplicate nodes.

## 6. Functional constraints

The implementation must preserve:

```text
WooCommerce field IDs and names
required/validation classes
country/state behavior
ship-to-different-address behavior
hidden shipping_address state
order_comments posting
Step-01 client validation
server validation
Step-02 shipping-method ownership
```

## 7. Classification

```text
Runtime DOM audit: passed
Duplicate native fields: not found
Native movement boundary: confirmed
D2B implementation: authorized as bounded node movement
Checkout: Not done
```
