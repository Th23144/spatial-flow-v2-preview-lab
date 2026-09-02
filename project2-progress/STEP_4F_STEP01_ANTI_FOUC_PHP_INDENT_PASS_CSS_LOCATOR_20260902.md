# Step 4F — Step01 Anti-FOUC PHP Indent Pass / CSS Locator — 2026-09-02

## Returned PHP
User returned `form-checkout.php` after manually correcting indentation for the inline pre-paint guard.

Validation performed on the returned local file:

- bytes: 38,773
- logical lines: 699
- SHA256: `536722b93005af6b4fa5f36141bf9fca8f87988b914a34a92e7b7903b0fb4a26`
- `php -l`: PASS
- the inserted `<script>` block now follows the surrounding tab-based indentation hierarchy consistently
- `sf-safe5-native-customer-source` resumes at the correct sibling indentation level after `</script>`

Result: PHP formatting/structure PASS for this step.

## CSS locator clarification
The user's current restored `checkout-safe5.css` baseline still contains the original Step01 composition block beginning around line 270:

```css
/* Step 01 native-field panel composition + V2 field surfaces. */
.sf-safe5-address-panels {
  display: none;
}

.sf-safe5-customer-details.is-recomposed .sf-safe5-address-panels {
  display: block;
}

.sf-safe5-customer-details.is-recomposed .sf-safe5-native-customer-source {
  display: none;
}
```

Exact multi-line search can fail because copied snippets may include different indentation/whitespace. Reliable search anchors are:

- `Step 01 native-field panel composition`
- `.sf-safe5-customer-details.is-recomposed .sf-safe5-address-panels`

The block should be replaced only after locating it by one of these single-line anchors. No front-end testing should occur until the CSS anti-FOUC replacement has actually been applied and the returned CSS is revalidated.
