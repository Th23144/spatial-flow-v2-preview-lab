# Step 4E-B2-R5-E5-S2-F · Test Results and S2-F2 Axis Diagnostic

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
S2-E deployed CSS: Confirmed.
Incognito-browser reproduction: Confirmed.
S2-F Test A heading divider: No effect.
S2-F Test B phone row bottom padding: No effect.
S2-F Test C final row divider: Slight improvement only.
Cart page status: Not done.
Current executable substep: S2-F2 zero-source shared-axis diagnostic.
```

## 1. Interpretation

The three initial live tests reject all single-owner explanations:

```text
- The heading divider alone is not the frame owner.
- The inherited phone row bottom padding alone is not the frame owner.
- The final product divider contributes to the perception, but removing it alone does not eliminate the defect.
```

Therefore no source edit is authorized from Test A, B or C.

The current hypothesis is narrower: the heading divider and product divider share the same full-width axis, and the product divider's full-width geometry may preserve the rectangular composition even after card fill/radius/shadow removal.

## 2. Locked deployed state

```text
functions.php SHA256:
5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js SHA256:
7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css SHA256:
4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6

Version: 2.7.8
```

## 3. S2-F2 Test D — remove both horizontal boundaries together

DevTools/Console only. Reload before and after the test.

```javascript
(() => {
  const heading = document.querySelector('.sf-cart-v2-heading');
  const row = document.querySelector('tr.woocommerce-cart-form__cart-item');

  if (heading) heading.style.setProperty('border-bottom', '0', 'important');
  if (row) row.style.setProperty('border-bottom', '0', 'important');
})();
```

Question:

```text
Does the implied frame disappear only when both aligned boundaries are absent together?
```

Interpretation:

```text
- Yes: the defect is a combined shared-axis composition problem.
- No: the frame is produced by another live DOM geometry owner; do not edit source.
```

## 4. S2-F2 Test E — retain an inset final divider

Reload to restore Test D before running Test E.

This test removes the full-width row border and redraws a temporary divider from the product-text column to the right edge. The final divider remains present, but it no longer completes the same full-width rectangle as the heading divider.

```javascript
(() => {
  const old = document.getElementById('sf-cart-test-e');
  if (old) old.remove();

  const style = document.createElement('style');
  style.id = 'sf-cart-test-e';
  style.textContent = `
    @media (max-width: 767px) {
      body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item {
        border-bottom: 0 !important;
      }

      body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item::after {
        content: "" !important;
        position: absolute !important;
        left: 100px !important;
        right: 0 !important;
        bottom: 0 !important;
        height: 1px !important;
        background: var(--sf-cart-border-soft) !important;
        pointer-events: none !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
```

Question:

```text
Does the frame disappear or materially weaken while a visible final divider is still retained?
```

Interpretation:

```text
- Yes: S2-G may replace the phone full-width border with an inset divider, subject to strict reference reconciliation.
- No: the lower line's width is not the main owner; proceed to a live DOM-outline diagnostic instead of guessing.
```

## 5. Boundaries

```text
- No source file change during S2-F2.
- No CSS upload or deployment.
- No PHP or JavaScript change.
- Do not change version 2.7.8.
- Do not execute cancelled FIX4.
- Refreshing the page removes both temporary tests.
```

## 6. Required user report

```text
Test D: disappeared / improved / no change
Test E: disappeared / improved / no change
```

No S2-G source candidate will be authored until these results are recorded.
