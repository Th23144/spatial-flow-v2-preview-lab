# Step 4E-B2-R5-E5-FIX1 · Runtime Rejection + FIX2

Last updated: 2026-07-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime result

```text
Deployed artifact: spatial-flow(31).css
Source validation: Passed.
Runtime frame removal: Failed / still perceptible.
Notice redesign: not closed by this result.
Current executable phase: R5-E5-FIX2 remove the BlockUI wash completely while preserving native blocking and the restrained loader.
Cart page status: Not done.
```

## Exact reason

The FIX1 source still explicitly paints the complete rectangular BlockUI bounds:

```css
background: rgba(246, 241, 235, .78) !important;
opacity: 1 !important;
```

for the Cart form, and:

```css
background: rgba(237, 231, 223, .78) !important;
opacity: 1 !important;
```

for Cart totals.

FIX1 changed the native white wash to warm colors, but did not eliminate the rectangular wash itself. Therefore the user can still perceive the form boundary as a picture frame during update.

This is not a width defect and does not justify rolling back the accepted 7fr / 5fr geometry.

## FIX2 bounded correction

Start from the exact validated `spatial-flow(31).css` artifact.

Inside `Native Cart loading state`, replace only these two declarations:

```css
background: rgba(246, 241, 235, .78) !important;
```

with:

```css
background: transparent !important;
```

and:

```css
background: rgba(237, 231, 223, .78) !important;
```

with:

```css
background: transparent !important;
```

Keep the overlay elements, `opacity: 1`, pointer blocking, restrained 18px spinner and all notice rules unchanged.

## Predicted exact artifact

```text
Size: 697,616 bytes
Logical lines: 23,387
SHA256: 2fa292d96e7e35a3d633dbe5bd8334e73fdb2432bbd6c8e6576a1424e170f55d
Braces: 3,636 / 3,636
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Runtime gate

```text
1. no rectangular wash appears over the Cart form during quantity update
2. no rectangular wash appears over Order Summary during refresh
3. native update blocking remains functional
4. only the small restrained loader remains visible
5. normal Cart surface remains transparent and borderless
6. editorial notice and native Undo remain functional
7. live counts, geometry, breadcrumb, recommendations, Header and Footer remain unchanged
8. phone loading state has no overflow or flash panel
```