# Project 2 — Site Hygiene Scope Correction

Date: 2026-09-16

## User clarification
The current plugin cleanup phase is **not** intended to become the final plugin-reduction / source-replacement program.

Current intent:
1. Temporarily clean obvious unused / globally inactive plugins and their clear low-risk residue so the WordPress environment is less cluttered.
2. Return to the Project 2 mainline visual / page-completion roadmap as soon as practical.
3. After the mainline is fully completed and stable, run a separate **Final Deep Cleanup / Plugin Replacement** phase.
4. In that later phase, evaluate active plugins one by one or by functional group and replace any plugin whose functionality can be safely implemented in maintained source code, with the explicit goal of reducing runtime weight, plugin count, update surface, and long-term maintenance burden.

## Revised current Site Hygiene boundary
Current phase should now be intentionally narrow.

### Continue now
- Finish only obvious globally inactive candidates where ownership can be proven quickly.
- Quarantine rather than permanently delete plugin files.
- Remove only clearly plugin-owned low-risk residue when needed.
- Preserve backups.
- Run a concise runtime smoke test after meaningful cleanup.

### Defer until post-mainline final cleanup
- Deep dependency audits of currently active plugins.
- Replacing Elementor / Header Footer Elementor / Astra Sites / form / shortcode / slider / search / Woo helper plugins with source code.
- Large-scale WPCode consolidation.
- Large CSS/JS/PHP architectural consolidation driven specifically by plugin removal.
- Aggressive database minimization tied to active-plugin retirement.
- Plugin-count optimization as an end in itself.

## Revised near-term sequence
1. Close current temporary cleanup after the remaining obvious globally inactive candidates are handled.
2. Return immediately to Project 2 mainline:
   - Shop strict 1:1 re-audit
   - Home
   - remaining utility / brand / support pages
   - Blog page family
   - global CSS consolidation only after page-level stability
   - full-site regression / release
3. After mainline completion, open a new dedicated phase:
   **Final Deep Cleanup / Plugin-to-Source Replacement**.

## Final Deep Cleanup / Plugin-to-Source Replacement goals
- Inventory every active plugin by real runtime owner/function.
- Classify each as KEEP / REPLACE WITH SOURCE / MERGE INTO EXISTING CUSTOM CODE / REMOVE.
- Replace only when the replacement is simpler, testable, maintainable, backend-editable where required, and does not recreate fragile plugin functionality badly.
- Prefer eliminating builders, wrappers, display helpers, injectors, and narrow utility plugins before attempting to replace complex payment, WooCommerce core, or compliance-sensitive functions.
- Preserve WooCommerce core ownership for commerce logic and avoid needless reinvention of mature transactional subsystems.

## Decision
The earlier plan to continue broad active/shared plugin dependency auditing during the current Site Hygiene phase is superseded by this narrower scope.

Status: ACCEPTED / ACTIVE ROADMAP CORRECTION
