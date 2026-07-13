# Step 4E-B2-R5-B3 · Live Cascade Diagnosis for Disappearing Mobile Remove Glyph

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B2 source correction：Applied by user.
Observed result：black × flashes during hard refresh, then disappears after full load.
Diagnosis mode：Active / no code changes.
Current blocker：final post-load style/state owner unknown.
Historical Cart CSS deletion：Blocked.
Cart page status：Not done.
```

## Key conclusion

The brief black glyph proves the canonical `a.remove::after` pseudo-element is valid and can render. The defect occurs after initial rendering.

Therefore the next action is not another blind CSS edit. The final active cascade/state must be captured after the page completes loading.

Possible classes of cause:

```text
- later CSS source or inline rule
- post-load class/state selector
- WooCommerce fragment replacement
- Astra/WPCode/customizer rule loaded after the child stylesheet
- final position/transform moving the pseudo-element outside the clipped shell
```

No single cause is accepted until DevTools identifies the winning rule/source.

## Required evidence

After the × disappears:

```text
1. Select the white remove circle with DevTools element picker.
2. Confirm the node is <a class="remove" ...>.
3. Capture the Styles panel pseudo-element rules for a.remove::after.
4. Capture Computed values for content, display, visibility, opacity, color,
   -webkit-text-fill-color, font-size, position, transform and z-index.
5. Upload the current spatial-flow.css for exact validation.
```

Do not modify CSS again before this evidence is reviewed.

## Gate

R5-B3 ends only when the exact final declaration/source hiding or displacing the glyph is identified. The subsequent correction must be an in-place replacement or removal of that owner, not an appended override.