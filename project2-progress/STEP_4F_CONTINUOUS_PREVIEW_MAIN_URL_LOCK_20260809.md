# Step 4F · Continuous Preview Main URL Lock

Date: 2026-08-09
Status: LOCKED BY USER
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User decision

For all continuing Project-2 static preview work, the user will use only this stable development entry URL:

```text
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-v1.html
```

## Rule

- `main/preview/spatial-flow-v1.html` is the canonical continuous test entry during active development.
- Newly accepted static pages must be consolidated back into the normal linked site flow on `main` before the user is asked to test the full journey.
- Commit-SHA URLs are historical/frozen snapshots only.
- Do not require the user to replace the commit SHA during normal iterative testing.
- Candidate pages may exist temporarily during design exploration, but once accepted they must be integrated into the canonical linked flow.
- Product Packaging accepted authority remains original Item-centric B; rejected B2 remains historical only.

## Current full-flow expectation

```text
Home
→ Bag
→ Checkout 01 Address
→ Checkout 02 Shipping + Product Packaging
→ Checkout 03 Payment
→ Checkout 04 Woo result later
```

## Live SAFE5 status

The user has paused actual code editing momentarily to correct the static-flow testing process. Live SAFE5 Product Packaging implementation remains authorized but not yet installed.

The next live-code action is to re-issue the bounded manual modification tutorial against the verified four-file SAFE5 baseline before any file is edited.
