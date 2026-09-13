# Project 2 · Header V2 2.7.47 package RETRACTED / specification correction · 2026-09-13

## Status

`SPATIAL_FLOW_HEADER_V2_2.7.47_PATCH.zip` is **RETRACTED AS A DEPLOYMENT METHOD**.

Do not apply the package to the live child theme.

This later correction supersedes the deployment instruction in:

```text
project2-progress/STEP_HEADER_V2_SOURCE_PACKAGE_READY_20260913.md
```

The generated files may remain only as an internal comparison/diff artifact.

## Why this correction is required

### 1. Deployment-policy violation

The prior handoff told the user to replace four full child-theme files with a ZIP package.

That was not valid under the current Project 2 deployment policies because the user did not explicitly request a whole-file/ZIP deployment for this Header step, and the delivery did not first provide all mandatory full-file replacement gates:

```text
- exact current-live baseline manifest for every target file;
- full audited diff boundary showing every hunk belongs to the authorised Header scope;
- byte/line deltas with explanations;
- timestamped rollback backup instruction/state;
- preflight verification that live SHA256 still equals the candidate base immediately before overwrite;
- atomic multi-file replacement procedure;
- postflight identity/syntax procedure;
- rollback trigger.
```

Therefore the previous `replace these four files` instruction is withdrawn.

Default live implementation returns to bounded anchored replacement unless a later step separately requalifies a full-file deployment under `PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md`.

### 2. Mobile backend-ownership regression in the locked specification

The earlier IA audit explicitly established:

```text
Desktop primary owner: sf_primary
Mobile navigation owner: sf_mobile (independent WordPress menu)
```

and locked the requirement to preserve `sf_mobile` backend editability.

The later production specification/package incorrectly changed the new Main mobile root so that its Primary section is sourced from `sf_primary`, while `sf_mobile` is used only to mine selected Support links.

That conflicts with the already-recorded ownership rule and with the Project 2 backend-editability principle.

The visual grouping decision (Primary / Shopping / Support and deeper Shop navigation) remains a valid accepted direction, but it must be implemented without silently discarding the independent `sf_mobile` menu as the editable mobile navigation owner.

### 3. User acceptance was over-read

The user's `可以，还不错` accepted the visual/progressive-disclosure direction as a useful candidate direction. It did not constitute source/runtime acceptance of a production implementation.

The following `开始` authorized proceeding into the implementation-specification step. It should not have been interpreted as permission to skip from specification directly to a four-file deployment package in the same action chain.

## What remains valid

The following Header direction remains active unless later user feedback changes it:

```text
- Main-site Header is still Not done;
- near-full-width desktop masthead;
- true centered Spatial Flow wordmark;
- integrated editorial Shop discovery layer instead of the floating white rounded mega card;
- explicit tablet middle state;
- grouped mobile navigation instead of ten equal cards;
- Checkout removed from permanent global navigation by default;
- progressive Shop navigation on mobile;
- real WooCommerce taxonomy/filter authority preserved;
- Search / Saved / Bag authority preserved;
- hardcoded masthead copy should gain backend-editable ownership;
- Journal Header remains a separate surface;
- WordPress Pages/Menu admin clutter remains a separate later audit/cleanup step.
```

## Live-site state

No live-source application has been confirmed by the user after the package handoff.

Therefore the safe project assumption is:

```text
Live child theme remains on the user's last supplied baseline:
SPATIAL_FLOW_CHILD_VERSION = 2.7.46
```

If the user later states that the 2.7.47 package was already applied, stop and perform an immediate rollback/source-identity audit before any other Header work.

## Corrected current stop point

Header V2 visual/IA direction is accepted as a candidate direction, but the production implementation specification must be corrected before any live edit.

## Exact next action

1. revise the implementation mapping so `sf_mobile` remains the editable mobile-menu owner;
2. separate visual grouping/presentation logic from WordPress menu data ownership;
3. define exact bounded source deltas against the current 2.7.46 files;
4. issue only the first anchored manual replacement part with current bytes/lines/SHA256, unique old-code anchor, expected match count, expected byte/line delta, rollback block, and stop point;
5. verify the returned file before issuing the next part.

No live replacement package is currently authorized.