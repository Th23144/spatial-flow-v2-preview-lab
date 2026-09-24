# Page Width System Audit — withdraw universal 1720 assumption

Date: 2026-09-23
Project: Spatial Flow V2 / 项目二换皮工程

## Trigger

During Search / Wishlist harmonization, the user correctly identified that page width must be checked against the rest of Project 2 rather than widened mechanically because narrow layouts are disliked.

The temporary idea of using a universal 1720px page-content cap is withdrawn.

## Evidence reviewed

### Existing Project-2 static references
- Services: `--max: 1440px`
- FAQ / Help: `--max: 1440px`
- Track Order: `--max: 1440px`
- Utility / Policy: `--max: 1440px`
- Single Product: `--max: 1440px`
- Cart static reference: `--max: 1440px`

Those references commonly also use about 56px internal horizontal padding, producing an effective content lane around 1328px at the 1440px cap.

### External-AI task-page batch
The supplied external batch consistently uses:
- Search: `--max: 1360px`
- 404: `--max: 1360px`
- Contact: `--max: 1360px`
- Policy: `--max: 1360px`
- About: `--max: 1360px`
- Account: `--max: 1360px`
- Wishlist Edition 03: `--max: 1360px`

Therefore the external batch itself was internally consistent before harmonization.

### Accepted / protected production exceptions
- Main Header V2 intentionally uses a near-full-width shell with roughly 40px desktop gutters; it is not the ordinary content-width owner.
- Main Footer V2 follows the same near-full-width global-shell direction.
- Shop has an explicit user-approved wider-than-static-reference frame and must remain a controlled exception.
- Cart has task-specific strict geometry and should not be forced to share an editorial page width.
- Checkout / order flow are task-focused layouts and likewise keep their own functional geometry.

## Conclusion

Project 2 should NOT use one universal max-width for every page.

Use a width hierarchy:

1. GLOBAL SHELL — Header / Footer:
   near-full-width, aligned to the accepted global chrome; not the owner of body content width.

2. STANDARD TASK / INFORMATION CONTENT LANE:
   target around the external batch's 1360px content lane, which is also close to the old Project-2 1440px outer shell after its 56px internal gutters.

3. SPECIALIZED COMMERCE / TASK GEOMETRY:
   Cart, Checkout and similar pages keep purpose-specific widths.

4. CONTROLLED WIDE EXCEPTION:
   Shop remains wider where explicitly user-approved.

## Immediate correction

- The temporary `temp-wishlist-harmonized-03-width` 1720-wide body experiment is NOT an accepted direction.
- Do not merge that width experiment into main.
- Re-test Search and Wishlist with the standard 1360px body content lane while keeping global Header / Footer conceptually broader.
- No already completed production page should be reopened merely to force a new universal width token.

Status:
WIDTH SYSTEM AUDIT = COMPLETE.
UNIVERSAL 1720 CONTENT WIDTH = WITHDRAWN.
STANDARD TASK / INFO BODY LANE = 1360px CANDIDATE FOR VISUAL VALIDATION.
