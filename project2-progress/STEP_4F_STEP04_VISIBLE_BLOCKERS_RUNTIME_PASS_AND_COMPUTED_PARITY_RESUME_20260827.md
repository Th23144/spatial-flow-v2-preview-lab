# Step 4F · Step04 visible blockers runtime PASS · computed parity resume · 2026-08-27

## User runtime result

The user confirmed the three narrow post-fix runtime checks all PASS:

1. white horizontal band below the accepted header is gone;
2. Cancelled order no longer renders `Our Bank Details` / gateway-specific payment instructions;
3. On-hold order still renders `Our Bank Details`, proving the state gate did not remove valid manual-payment instructions.

## Consequence

Both previously reopened visible blockers are now CLOSED.

This does **not** mean Step04 strict 1:1 is complete. The user explicitly reports that many smaller visual/details deltas are still visible. Therefore the correct next phase is to resume the code-first computed parity audit rather than rely on screenshots or subjective visual acceptance.

## Next action

Resume the same eight computed captures, using the same diagnostic script and the same viewport pairs as the first computed audit:

- Confirmed reference desktop
- Processing production desktop
- Confirmed reference mobile 390×844
- Processing production mobile 390×844
- Pending reference desktop
- Pending production desktop
- Pending reference mobile 390×844
- Pending production mobile 390×844

Then perform a programmatic selector/property diff over `getComputedStyle()` and `getBoundingClientRect()` output.

Strict 1:1 remains FAIL/PENDING until remaining deterministic deltas are enumerated and corrected.

Do not rerun the full 17-step runtime matrix.
