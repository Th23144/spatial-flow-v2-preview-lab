# Step 4F · Product Packaging · Live Install Part D · checkout-safe5.css

Date: 2026-08-11  
Status: PART C ACCEPTED · PART D MANUAL INSTALL READY · USER ACTION REQUIRED

## Accepted prerequisites

- Part A `functions.php`: ACCEPTED
- Part B `form-checkout.php`: ACCEPTED
- Part C `checkout-safe5.js`: ACCEPTED

Accepted Part C identity:

```text
51,307 bytes
1,520 logical lines
SHA256 385bba50fdfa65ddfdef9cfa9b0b8febfd8c1681b524da469238cbf711141dd9
CRLF
no final newline
node --check: passed
```

Part C reverse-reconstruction to the original SAFE5 JS baseline was exact.

## Part D original submitted baseline

```text
assets/css/checkout-safe5.css
88,922 bytes
2,713 logical lines
SHA256 8dcf35e6b850f861bc02c060936ba775ab73ef855d264d6342cfe49860788659
CRLF
no final newline
braces: 330 / 330
comments: 22 / 22
```

## Part D edit boundary

Part D adds one new bounded feature block only, at the physical end of the existing stylesheet:

```text
/* === SAFE5 Product Packaging Visual Ownership START === */
...
/* === SAFE5 Product Packaging Visual Ownership END === */
```

This is a new-selector feature ownership block, not an append-only override of existing Packaging selectors. No pre-existing SAFE5 selector is replaced or edited.

## Visual contract represented

The block maps the accepted static Product Packaging B contract into the real SAFE5 DOM:

- Standard and Gift remain two stacked primary choices;
- desktop grouping modes remain three columns;
- mobile grouping modes remain vertically stacked rather than compressed;
- Custom keeps original B item-centric breathing room on phones;
- item assignment uses Package 01/02/03 chips, with additional slots wrapping instead of forcing a denser one-line B2 layout;
- only non-empty packages render package-style rows;
- package-level Standard/Gift and Details controls remain compact;
- Standard name and Gift message fields remain collapsed behind Details where applicable;
- selected state uses the accepted stone/paper commerce language and Shipping parity on mobile;
- Gift package-tier selection retains the clay accent where appropriate;
- focus-visible treatment is included;
- no arbitrary `+ New package` UI is introduced.

## Specificity audit

The existing SAFE5 stylesheet has global Checkout textarea/input surface rules. The Packaging detail-field selectors therefore deliberately include `.sf-safe5-checkout` in their selector chain so square Packaging fields are not overridden by the older generic textarea surface.

## Exact offline Part D target

The final block was appended to the exact submitted CSS baseline using CRLF and no final newline.

```text
checkout-safe5.css
118,905 bytes
3,818 logical lines
SHA256 3f16c8cb31ab33be64257e36dee1b085e4ca76b313aa980d76a5e83348a077bd
CRLF
no final newline
braces: 454 / 454
comments: 24 / 24
CSS parser errors: 0
```

Delta:

```text
+29,983 bytes
+1,105 logical lines
```

The exact target assumes the issued block is pasted verbatim after exactly one blank line and the editor preserves CRLF. If the editor reformats whitespace, source-level acceptance will use bounded-diff reconstruction and parser checks instead of forcing the byte target.

## Safety gate

After Part D is saved, do not immediately begin feature acceptance from appearance alone. Upload the resulting CSS for source audit first. Once Part D passes, the coordinated A-D source set is eligible for browser/runtime Packaging QA.
