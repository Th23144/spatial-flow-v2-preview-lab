# STEP_FOOTER_V2_PRELIMINARY_SOURCE_OWNERSHIP_AUDIT_20260914

Date: 2026-09-14
Project: Spatial Flow V2 / 项目二换皮工程
Subsystem: Main-site Footer V2
Status: PRELIMINARY AUDIT — production edit not authorized yet

## Trigger
Header V2 has been formally accepted and closed. User instructed to begin Footer V2.

## Standing acceptance frame
Footer is being re-audited as a production global-shell component, not merely against a literal static 1:1 target. The remaining concern is product maturity, information architecture, entry coverage, responsive behavior, and visual finish while preserving WordPress/backend ownership.

## Current ownership evidence confirmed

### WordPress menu ownership
Current functions source registers and preserves these Main-site Footer menu locations:
- `sf_footer_shop`
- `sf_footer_journal`
- `sf_footer_about`
- `sf_footer_customer`
- `sf_footer_legal`

Blog Footer remains a separate branch with its own menu locations and is outside the immediate Main-site Footer audit unless explicitly reopened.

### Editable Footer text ownership
Current functions source contains:
- `spatial_flow_footer_v2_defaults()`
- `spatial_flow_footer_v2_mod()`
- `spatial_flow_footer_v2_text()`
- `spatial_flow_footer_v2_customizer()`

Current Main-site editable groups include:
- Shop / Journal / About & Services / Customer Care headings
- trust-section kicker/title/body and three trust items
- region text
- copyright text
- shared social URLs

Therefore future production redesign must preserve or improve these editable owners rather than replace them with hardcoded static copy.

### Existing Main-site visual owner
Current CSS still contains the controlled block:
`Project2 Step 4B-R2-B — Main Footer Dark Editorial`

Confirmed current visual traits:
- dark `#1f1916` Main-site footer
- warm-paper text palette
- clay column headings
- large brand band
- four-column menu section
- trust section/cards
- legal links
- region display treated as informational, not a real selector

## Historical implementation evidence
Earlier Project 2 work already completed:
- Step 4B-R2-A — Footer top brand-region merge
- Step 4B-R2-B — Main Footer Dark Editorial

These were previously front-end functional/visual passes, but later user reopened Footer because the remaining issue class is maturity / IA / finish rather than basic rendering failure.

## Current preliminary design judgment
The existing Footer already has a valid backend architecture and a usable dark editorial base. A full destructive rewrite is not justified before seeing the current live composition.

The likely work class is:
1. audit the current desktop/mobile geometry and density;
2. audit whether all footer destinations are grouped coherently;
3. compare visual rhythm to the newly accepted Header V2;
4. decide whether current markup can be retained and restyled or whether bounded markup changes are needed;
5. preserve menu locations, Customizer/theme_mod owners, social owners, Main/Blog branch separation, and truthful region behavior.

Reference synthesis remains:
- FRAMA for information grouping and support/service separation;
- The Row for low-noise luxury restraint;
- TOTEME for footer clarity and category hierarchy.

## Missing evidence required before implementation
Current `footer.php` has not yet been recovered from the current File Library/source evidence in this audit, so exact markup ownership is not yet complete.

Runtime visual evidence is also missing for the current Main-site Footer after the Header V2 closure.

Required next evidence:
1. current complete `footer.php`;
2. one full desktop screenshot of the current Main-site Footer;
3. one full ~390px mobile screenshot of the current Main-site Footer.

Current `functions.php` and `spatial-flow.css` do not need to be re-sent at this point because their Footer ownership evidence is already available.

## Safety boundary
Do not modify production Footer files until the exact current `footer.php` and current runtime screenshots have been audited.
Do not touch Header V2.
Do not alter Blog Footer unless explicitly included.
Do not fabricate links, social handles, legal destinations, region controls, or trust claims.

## Next action
Receive `footer.php` + desktop Footer screenshot + mobile Footer screenshot, then perform the exact Footer source/runtime audit and decide whether to proceed directly to a coherent implementation batch or first produce a standalone HTML visual prototype for approval.
