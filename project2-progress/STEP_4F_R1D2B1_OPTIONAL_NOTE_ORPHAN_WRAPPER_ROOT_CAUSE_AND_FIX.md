# Step 4F · R1-D2B1 Optional-note Orphan Wrapper Root Cause and Fix

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Runtime evidence

The user supplied a read-only DOM/computed-style map for:

```text
.sf-safe5-native-fields--note
```

Observed child structure:

```text
mount childCount: 2

1. .woocommerce-additional-fields
   width: 254px
   height: 38px
   background: white
   border: 1px solid rgba(32, 25, 22, 0.06)
   border-radius: 24px
   padding: 18px
   margin-bottom: 14px
   field-wrapper height: 0px

2. #order_comments_field
   direct child of .sf-safe5-native-fields--note
   visible native label + textarea
```

This proves that the visible blank white surface is the now-empty native wrapper:

```text
.woocommerce-additional-fields
```

The native posted field remains:

```text
#order_comments / name=order_comments
```

No plugin field or duplicate native field is involved.

## 2. Exact root cause

The D2B1 JavaScript currently contains:

```javascript
if (
  additionalFields &&
  additionalFields.parentElement !== noteMount
) {
  noteMount.appendChild(additionalFields);
} else {
  var commentsRow = q("#order_comments_field", customerDetails);
  ...
  noteMount.appendChild(commentsRow);
}
```

First execution:

```text
- moves .woocommerce-additional-fields into the Optional note mount
- native #order_comments_field remains inside the wrapper
```

Second idempotent execution (`updated_checkout` or `country_to_state_changed`):

```text
- additionalFields exists and is already inside noteMount
- outer if condition becomes false
- else branch executes
- #order_comments_field is moved out of the native wrapper
- empty .woocommerce-additional-fields remains and receives legacy white rounded-card styling
```

Classification:

```text
Confirmed defect: non-idempotent else branch
Visible artifact: orphaned native wrapper
WooCommerce field ownership: preserved, but wrapper hierarchy broken
```

## 3. Correction boundary

Files:

```text
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

No PHP change is required.

Correction:

```text
1. Make the additional-fields branch truly idempotent.
2. Use the direct-row fallback only when .woocommerce-additional-fields does not exist.
3. Keep #order_comments_field inside its native wrapper on repeated events.
4. Neutralize only the Optional-note instance of the native wrapper's legacy card surface.
```

## 4. Verified current baseline

```text
checkout-safe5.js
24,682 bytes
819 lines
SHA256: 7dc849b92771b2dc3092f4faea77022b4dd558b9695df59edd59b521b75b9dde
CRLF / no terminal newline

checkout-safe5.css
26,979 bytes
817 lines
SHA256: 42e45a5fe4ecfd78b976c43efef47dd974a3c8e7b2f67b2a70001ccb586c3b1c
CRLF / no terminal newline
```

## 5. Audited JavaScript replacement

Replace the current `additionalFields` conditional with:

```javascript
    var additionalFields = q(
      ".woocommerce-additional-fields",
      customerDetails
    );

    if (additionalFields) {
      if (additionalFields.parentElement !== noteMount) {
        noteMount.appendChild(additionalFields);
      }
    } else {
      var commentsRow = q(
        "#order_comments_field",
        customerDetails
      );

      if (
        commentsRow &&
        commentsRow.parentElement !== noteMount
      ) {
        noteMount.appendChild(commentsRow);
      }
    }
```

Expected result:

```text
24,683 bytes
818 lines
SHA256: 368ed12b7f6771d532c25bd54b65cf3276ce297bc9d2390a62bd45eec6fa1e4d
Delta: +1 byte / -1 line
```

## 6. Audited CSS replacement

After the existing Step-01 grid-column rule, add the narrowly scoped wrapper normalization:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-native-fields--note
  > .woocommerce-additional-fields {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  overflow: visible !important;
}
```

Expected result:

```text
27,327 bytes
829 lines
SHA256: e807b1b63e225d991832e1490c4dfadcec842aeaec6171c85688d58fbe633937
Delta: +348 bytes / +12 lines
```

## 7. Static validation

```text
JavaScript syntax: passed
CSS parse errors: 0
CSS braces: 113 / 113
CSS comments: 13 / 13
new breakpoint: no
bottom append: no
PHP change: no
```

## 8. Expected runtime result

After refresh and repeated WooCommerce update events:

```text
.sf-safe5-native-fields--note childCount: 1
only .woocommerce-additional-fields remains as direct child
#order_comments_field remains inside .woocommerce-additional-fields__field-wrapper
no blank white rounded surface appears above Order notes
native order_comments id/name/value remain unchanged
```

## 9. Current status

```text
Root cause: confirmed
Fix: source-audited
Runtime application: pending
D2B1: blocked pending visual and DOM verification
D2B2: blocked
Checkout: Not done
```
