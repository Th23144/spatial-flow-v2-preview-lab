# Step 4E-B2-R5-E6-N1-A · Cart Notice CSS Source Ownership Audit

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Uploaded current CSS alias: spatial-flow(40).css.
Exact identity against the deployed CSS baseline: Passed.
Current Notice CSS source audit: Complete at selector/ownership level.
Live DOM classification: Pending.
Source changes authorized or performed: None.
Notice replacement design: Not selected or user-approved.
Current executable substep: R5-E6-N1-B live DOM and computed-style capture.
Cart page status: Not done.
```

## 1. Exact uploaded-file identity

```text
Required server path: assets/css/spatial-flow.css
Uploaded alias: spatial-flow(40).css
Size: 700,208 bytes
Logical lines: 23,469
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
Opening / closing braces: 3,645 / 3,645
Opening / closing comments: 338 / 338
Final newline: present
Exact match to the locked deployed CSS identity: Yes
```

The upload is the current accepted server baseline previously deployed from `spatial-flow(39).css`; the alias number does not represent a source change.

## 2. Audit boundary

This audit inspected the current uploaded `assets/css/spatial-flow.css` content only.

It did not:

```text
- edit CSS
- append a temporary fix
- change PHP or JavaScript
- change WooCommerce notice generation
- choose a replacement design
- deploy any file
```

The exact live DOM still must be captured before a correction is designed.

## 3. Broad global WooCommerce Notice owner

The current stylesheet contains an early global rule applying to all three WooCommerce notice classes:

```css
.woocommerce-error,
.woocommerce-info,
.woocommerce-message {
  list-style: none !important;
  border-top: 0 !important;
  border-radius: 18px;
  background: #fff !important;
  color: var(--sf-ink) !important;
  padding: 16px 18px !important;
  box-shadow: 0 10px 24px rgba(31,25,22,.055);
}
```

This rule is the confirmed source-level owner capable of producing the observed large white rounded notice surface:

```text
- white filled background
- 18px radius
- 16px / 18px internal padding
- soft shadow
```

It is global rather than Cart-only and therefore affects any WooCommerce notice state not explicitly reset later with a stronger selector.

## 4. Current Cart-specific Notice block

Later in the stylesheet, the `Step 4E Cart Notice Toast` block resets only Cart success-message elements matching:

```css
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))
```

That block currently applies:

```text
- border-radius: 0
- background: transparent
- box-shadow: none
- zero panel border except a bottom divider
- compact typography
- native Restore / Undo link preservation
```

The same block hides add-to-cart messages containing `.wc-forward`.

## 5. Confirmed selector gap

The current Cart-specific reset does not include:

```text
.woocommerce-info
.woocommerce-error
```

Therefore a Cart notice rendered as `.woocommerce-info` continues to inherit the broad global white rounded treatment.

The screenshot of `Shipping costs updated.` is source-consistent with this gap. However, this remains a supported inference rather than a final DOM finding until the live element class is captured.

## 6. Why both reported states are not yet assumed identical

The two reported visual defects are:

```text
A. Cart quantity/update success notice.
B. Shipping costs updated notice.
```

The source currently proves only that different WooCommerce classes receive different treatments:

```text
.woocommerce-message without .wc-forward -> Cart-specific transparent reset
.woocommerce-info -> broad global white rounded rule unless another specific rule applies
.woocommerce-error -> broad global rule plus any error-specific overrides
```

Therefore the audit must not yet claim that A and B share the same runtime class or exact owner.

If the Cart update notice is visibly white despite being a `.woocommerce-message`, possible explanations requiring runtime evidence include:

```text
- the live element is actually `.woocommerce-info`
- the notice is inserted in a different wrapper/class structure
- another later rule wins in the live cascade
- the page is loading a different cached CSS artifact
- the notice contains markup that changes the current `:has()` selector match
```

No one explanation is accepted without DOM and computed-style evidence.

## 7. Prior design-direction attribution remains corrected

The current CSS contains a prior assistant-authored treatment described in source comments as quiet editorial text.

This proves only that the treatment exists in the deployed CSS history. It does not make that treatment a user-selected or user-approved final design.

The user has approved only the defect finding, not the replacement design.

## 8. Runtime states to classify

N1-B must capture, where available:

```text
1. Cart quantity/update success notice.
2. Shipping costs updated notice.
3. Coupon applied success notice.
4. Coupon removed notice.
5. Removed-item notice with Restore / Undo.
6. Invalid Coupon error state.
```

For each state record:

```text
- element tag and exact class list
- parent wrapper class
- whether `.wc-forward` exists inside
- whether `.restore-item` exists inside
- computed background color
- computed border radius
- computed box shadow
- computed padding
- display and position
```

## 9. Current conclusion

```text
Exact current CSS identity: Passed.
Broad white rounded source owner: Confirmed.
Cart-specific `.woocommerce-message` reset: Confirmed.
Cart-specific `.woocommerce-info` reset: Absent.
Shipping notice likely class gap: Supported inference / runtime confirmation pending.
Cart-update exact class and winning owner: Pending.
Shared owner across all notices: Not yet proven.
Source correction: Not authorized.
```

## 10. Boundaries

```text
- no source edit during N1-B
- no permanent Console CSS
- read-only DOM/computed-style inspection only
- preserve native errors and Restore / Undo
- no PHP or JavaScript change
- no Cart template override
- no plugin addition
- no version bump
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
