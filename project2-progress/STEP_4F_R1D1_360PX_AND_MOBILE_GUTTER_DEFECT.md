# Step 4F · R1-D1 360px Evidence and Mobile Gutter Defect

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

The user supplied:

```text
- current live Checkout at 360px
- accepted V2 Checkout reference at 390px
- accepted V2 Checkout reference at 360px
```

The user correctly identified a shared mobile mismatch: the live content sits too close to, and in the body panels appears to touch, the viewport edges, while the accepted references preserve a consistent outer gutter.

## 2. 360px structural observations

The current live 360px screenshot confirms:

```text
- the Intro remains single-column
- Secure checkout · Step 01 of 04 remains visible
- the Checkout title and explanatory copy remain readable
- all four stages remain visible
- no stage label is clipped
- no obvious horizontal page overflow is present
```

These observations prove structural containment only. They do not establish strict visual 1:1.

## 3. Confirmed strict-V2 gutter mismatch

Accepted V2 mobile references preserve a visible gutter around the Checkout body.

The accepted source uses a mobile gutter equivalent to:

```css
--gutter: 22px;
```

The current R1-D1 mobile Intro rule uses:

```css
width: min(100% - 32px, 1180px);
```

which provides only 16px nominal space per side before other live cascade effects.

Screenshot comparison shows:

```text
- live Intro/progress is closer to the viewport edge than the accepted reference
- live Order Summary outer card appears flush or nearly flush to the viewport
- live Address/form outer card appears flush or nearly flush to the viewport
- accepted 390px and 360px references keep a clear, consistent outer gutter
```

Classification:

```text
Mobile outer-gutter mismatch: confirmed
Horizontal overflow: not required for this to be a defect
Strict V2 1:1: failed at 390px and 360px until corrected
```

## 4. Scope classification

The visible symptom spans two bounded groups:

### D1 responsibility

```text
Intro and progress outer gutter
```

Because the live Intro/progress spacing is also too narrow, R1-D1 mobile cannot be fully closed yet.

### D2 responsibility

```text
Address/form panel outer gutter
Order Summary outer gutter
mobile body order
panel/card surface redesign
```

The existing mobile body still renders:

```text
Intro → Order Summary → Address form
```

instead of the accepted:

```text
Intro → Address form → Order Summary
```

The body-order and card/panel corrections remain R1-D2 work.

## 5. Superseded classification

The earlier classification:

```text
R1-D1 390px: passed
```

is narrowed and superseded as follows:

```text
390px structural containment: passed
390px strict visual 1:1: not passed because of gutter mismatch
360px structural containment: passed
360px strict visual 1:1: not passed because of gutter mismatch
```

Desktop D1 remains passed.

## 6. Correct next action

Before R1-D2 begins, perform one bounded mobile layout-foundation correction:

```text
- align Intro/progress outer gutter to the accepted mobile reference
- audit the live shell/card cascade that produces edge-touching body panels
- preserve no-horizontal-overflow behavior
- retain all four progress labels
```

Then R1-D2 must:

```text
- restore form-before-Order-Summary mobile order
- apply the same accepted gutter to the body
- migrate panels, fields, actions and Order Summary to the accepted V2 surfaces
```

## 7. Current status

```text
R1-D1 desktop: passed
R1-D1 390px structural containment: passed
R1-D1 360px structural containment: passed
R1-D1 mobile strict visual acceptance: failed/pending gutter correction
R1-D2: not started
Checkout: Not done
```
