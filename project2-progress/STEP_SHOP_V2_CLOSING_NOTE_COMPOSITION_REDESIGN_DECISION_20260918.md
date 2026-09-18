# Shop V2 — Closing Note composition redesign decision

Date: 2026-09-18

## Runtime conclusion

The second desktop screenshot confirms the problem is no longer a simple horizontal-position issue.

The current Closing Note is structurally valid but optically weak on the user-approved wider production frame.

Primary causes:
- 1fr / 1fr columns give equal structural weight to two very unequal content masses;
- left editorial statement is large and multi-line, while the right copy + CTA is much smaller;
- 80px column gap plus additional right inset increases the perceived disconnect;
- section padding 80px top / 120px bottom creates too much dead paper around a relatively small right group;
- moving only the right group farther right does not solve the composition and can make the two halves feel more disconnected.

## Decision

Stop incremental right-shift tuning.

Replace the desktop Closing Note composition as one coherent layout while preserving all content and backend ownership.

Preferred desktop target:
- remove the extra 80px right inset;
- use asymmetric editorial columns: 7fr / 5fr;
- reduce column gap from 80px to approximately 64px;
- vertically center the right copy group against the left statement;
- constrain the right group to a readable max width and align it toward the outer edge;
- reduce desktop vertical padding from 80/120 to approximately 64/80;
- preserve the existing typography, CTA styling and editable text/URL owners;
- keep <=1100px tablet/mobile rules unchanged because mobile already passed.

## Rationale

This addresses hierarchy, density and negative-space distribution instead of continuing to compensate with offsets.

Status:
COMPOSITION REDESIGN APPROVED IN PRINCIPLE / DO NOT CONTINUE 80PX OFFSET TUNING.