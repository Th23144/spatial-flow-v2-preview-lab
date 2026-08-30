# Project 2 · Step03 Sidebar Sticky Diagnostic Start · 2026-08-30

## Trigger

Step04 full-state visual/runtime regression is formally closed. Per user direction, the next active task is the previously deferred Step03 desktop right-sidebar sticky issue.

## Reference audit

Authoritative Step03 static reference:
- `preview/spatial-flow-checkout-payment-v1.html`
- `preview/spatial-flow-checkout-context-v1.css`
- `preview/spatial-flow-checkout-flow-v1.css`

The Step03 reference is structurally different from Step01/02.

Step01/02 base contract uses `.order-summary { position: sticky; top:136px; }`.

Step03 adds a right-side context wrapper containing both context and order summary:

```text
.checkout-shell
├─ .checkout-main
└─ aside.checkout-side
   ├─ .context-card
   └─ .order-summary
```

The Step03 context stylesheet explicitly changes the sticky owner:

```css
.checkout-side {
  position: sticky;
  top: 136px;
  display: grid;
  gap: 14px;
  min-width: 0;
}

.checkout-side .order-summary {
  position: static;
  top: auto;
}
```

Therefore the intended Step03 desktop behavior is that the whole right-side stack (context card + order summary) is the sticky object, not the order-summary subsection alone.

## Diagnostic rule

Do not assume the current production Step03 DOM/owner matches the static reference or that its root cause matches Step04. First inspect live production runtime.

The diagnostic must capture in one pass:
- current Step03 URL/body classes
- all plausible right-side candidates
- actual computed sticky owner, if any
- context-card/order-summary relationship
- checkout shell bounds
- body/html overflow
- ancestor overflow/transform/contain/position/alignment
- element heights versus viewport
- scroll samples proving whether the candidate locks to 136px or moves one-for-one with the page

No source modification is authorized before this runtime result.
