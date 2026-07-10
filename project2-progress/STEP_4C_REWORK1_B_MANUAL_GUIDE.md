# Step 4C-REWORK1-B · Manual Shop CSS Replacement Guide

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

```text
Manually replace only the old Shop visual CSS in the current local `assets/css/spatial-flow.css`.
Do not overwrite the whole file.
Do not use the generated full candidate or patch as the normal workflow.
```

## Important correction

The old Shop visual CSS is not one single continuous block. It is split into three ranges.
All three old ranges must be removed before the new controlled Shop block is inserted.

## Stage 1 · Remove old Shop CSS ranges

Open:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/spatial-flow.css
```

Delete these three complete ranges, including their START and END comments:

### Range A

```text
START: /* === Phase Shop Visual 1 START === */
END:   /* === Phase Shop Visual 2.1 FIX END === */
```

This removes the three adjacent blocks:

```text
Phase Shop Visual 1
Phase Shop Visual 2
Phase Shop Visual 2.1 FIX
```

Current uploaded file approximate lines:

```text
2022–2875
```

### Range B

```text
START: /* === Product Archive Visual Scope Fix START ===
END:   /* === Product Archive Visual Scope Fix END === */
```

Current uploaded file approximate lines:

```text
4484–4991
```

### Range C

```text
START: /* === Project2 Step 4C-B — Shop Hero Editorial START ===
END:   /* === Project2 Step 4C-B — Shop Hero Editorial END === */
```

Current uploaded file approximate lines:

```text
15962–16532
```

## Stage 1 validation

After deleting the three ranges, search the file for these terms:

```text
Phase Shop Visual 1
Phase Shop Visual 2
Phase Shop Visual 2.1 FIX
Product Archive Visual Scope Fix
Project2 Step 4C-B — Shop Hero Editorial
```

Expected result:

```text
No matches remain for those old Shop blocks.
```

Do not save a new production release or test the page yet. The new controlled Shop block must be inserted in Stage 2 first.

## Stage 2

```text
Insert one new controlled Shop CSS block at the former Range C location.
```

The new block must be supplied separately and checked before use. It must not contain selector typos and must not be appended blindly to the end of the file.
