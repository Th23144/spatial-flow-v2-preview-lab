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

# Part A · Open Microsoft Edge / Chrome DevTools Console

Use the Cart page that reproduces the problem:

```text
http://spatialflow.local/cart-2/
```

Keep the browser at the mobile width where the white remove circles are visible.

## A1. Wait for the final broken state

```text
1. Force-refresh the Cart page.
2. Watch the black × flash briefly.
3. Wait until the page finishes loading and the × disappears again.
4. Do not click a remove button yet.
```

The diagnostic must run after the glyph has disappeared, not during the brief loading flash.

## A2. Open the Console directly

On Windows, press:

```text
Ctrl + Shift + J
```

This opens DevTools directly on the Console tab in Microsoft Edge and Chrome.

Alternative route:

```text
1. Press F12.
2. On some laptops use Fn + F12.
3. In the DevTools tab row click “控制台” / “Console”.
4. If Console is hidden, click the `>>` overflow button and choose “控制台”.
```

Expected result:

```text
- DevTools appears on the right or bottom of the browser.
- The Console panel contains a line beginning with `>` near the bottom.
- The Cart page remains visible beside it.
```

## A3. Click the Console input line

Click once immediately to the right of the bottom `>` symbol.

A blinking text cursor should appear. Do not paste into the browser address bar, Elements panel, Styles panel or page itself.

## A4. Handle Chromium paste protection if it appears

The first time code is pasted into DevTools, Edge/Chrome may show a warning similar to:

```text
Warning: Don’t paste code into the DevTools Console...
Please type 'allow pasting' below and press Enter.
```

When that warning appears:

```text
1. Do not paste `allow pasting`.
2. Manually type these exact English words with the keyboard:
   allow pasting
3. Press Enter.
4. Click the `>` input line again.
5. Paste the diagnostic code normally.
```

This is Chromium's self-XSS protection. The diagnostic below only reads the selected element's computed styles and copies the result to the clipboard. It does not change files, submit an order, delete a product or send data to a remote site.

# Part B · Paste and run the diagnostic

## B1. Copy the complete code block

Copy everything from `(() => {` through the final `})();`:

```javascript
(() => {
  const el = document.querySelector(
    'body.woocommerce-cart form.woocommerce-cart-form td.product-remove a.remove'
  );

  if (!el) {
    console.error('没有找到 WooCommerce remove 链接');
    return;
  }

  const link = getComputedStyle(el);
  const after = getComputedStyle(el, '::after');

  const data = {
    after_content: after.content,
    after_display: after.display,
    after_visibility: after.visibility,
    after_opacity: after.opacity,
    after_color: after.color,
    after_text_fill: after.webkitTextFillColor,
    after_font_family: after.fontFamily,
    after_font_size: after.fontSize,
    after_font_weight: after.fontWeight,
    after_line_height: after.lineHeight,
    after_position: after.position,
    after_top: after.top,
    after_right: after.right,
    after_bottom: after.bottom,
    after_left: after.left,
    after_transform: after.transform,
    after_z_index: after.zIndex,
    after_width: after.width,
    after_height: after.height,
    after_overflow: after.overflow,
    after_clip: after.clip,
    after_clip_path: after.clipPath,
    after_filter: after.filter,
    after_mix_blend_mode: after.mixBlendMode,
    link_display: link.display,
    link_visibility: link.visibility,
    link_opacity: link.opacity,
    link_overflow: link.overflow,
    link_position: link.position,
    link_color: link.color,
    link_font_size: link.fontSize,
    link_text_indent: link.textIndent,
    link_transform: link.transform,
    link_width: link.width,
    link_height: link.height
  };

  console.log('REMOVE ELEMENT:', el.outerHTML);
  console.table(data);

  copy(JSON.stringify({
    remove_element: el.outerHTML,
    computed: data
  }, null, 2));

  console.log('✅ 诊断完成：结果已复制到剪贴板，请回到 ChatGPT 直接粘贴。');
})();
```

## B2. Paste it into Console

```text
1. Return to the DevTools Console.
2. Click beside the bottom `>` prompt.
3. Press Ctrl + V once.
4. Confirm the first visible text is `(() => {`.
5. Press Enter once to execute.
```

Do not press `Shift + Enter`; that only adds another line. A normal Enter executes the complete pasted block.

## B3. Confirm successful execution

A successful run shows:

```text
REMOVE ELEMENT: <a href="..." class="remove" ...>
```

followed by a table, and finally:

```text
✅ 诊断完成：结果已复制到剪贴板，请回到 ChatGPT 直接粘贴。
```

No website setting or file is changed by this command.

# Part C · Return the result

## Preferred method

Because the command copies the diagnostic JSON automatically:

```text
1. Click back into the ChatGPT message box.
2. Press Ctrl + V.
3. Send the pasted JSON text.
```

## Fallback method

If the final “已复制到剪贴板” line does not appear:

```text
1. Take one screenshot showing the entire console table.
2. Include the REMOVE ELEMENT line.
3. Upload that screenshot.
```

If the Console displays:

```text
没有找到 WooCommerce remove 链接
```

stop and upload a screenshot of the Cart page plus Console. Do not modify CSS.

# Part D · Evidence still required after Console output

After the computed output is reviewed, the next diagnostic may require the Styles source and line number:

```text
1. select the white remove circle with the DevTools element picker
2. confirm the selected node is `<a class="remove" ...>`
3. capture all matched `a.remove::after` rules in Styles
4. capture source file names and line numbers for the winning declarations
```

Do not perform Part D until the Console output has been supplied and reviewed, unless specifically instructed.

## File evidence

Upload the current `spatial-flow.css` after R5-B2 for exact validation.

Expected state if R5-B1 and R5-B2 were applied exactly:

```text
Size: 812,142 bytes
Logical lines: 27,098
SHA256: de6ddce6c42cf9fc50fb583caa3d3f5ea46931f75f4d805cdf74ab158f61196d
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
```

## Gate

Do not modify CSS again before the Console evidence is reviewed.

R5-B3 ends only when the exact final declaration/source hiding or displacing the glyph is identified. The subsequent correction must be an in-place replacement or removal of that owner, not an appended override.