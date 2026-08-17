# Step 4F · Step04 A/B Deployment Method — FINAL DECISION: MANUAL

Date: 2026-08-16

## User decision

The user explicitly selected the previous/manual deployment method after completing the A/B test.

Final standing choice:

```text
DEFAULT DEPLOYMENT METHOD FOR PROJECT 2:
Manual anchored replacement in chat
```

The automated Patch/PowerShell method is NOT adopted as the default Project 2 workflow.

## A/B result summary

### Method A — Manual anchored replacement

- user execution time: approximately 5 minutes
- delivery style: all coherent replacement Parts provided directly in chat in one batch
- user performed the replacements manually
- functional/logic result: PASS
- CSS target: exact
- remaining differences in PHP files were formatting-only whitespace / EOF newline differences and were ruled non-functional and not required
- functional rework: 0

### Method B — Automated Patch + two-stage verification

- mature V2 execution time: under 1 minute
- PRECHECK: PASS
- APPLY/POSTFLIGHT: PASS
- exact candidate SHA identity: 3/3 PASS
- PHP lint: PASS
- CSS brace/comment structure: PASS
- automatic backup: PASS
- rollback used: NO
- V1 tool defect: 1 package defect (runtime LOGS directory absent after ZIP extraction); fixed in V2

Despite Method B being materially faster in the test, the user explicitly prefers Method A.

## Standing execution rules from this decision

Unless the user explicitly changes this decision later:

1. Manual replacement code must be delivered directly in the chat.
2. Do not package ordinary manual replacement code in ZIP/download bundles.
3. For one coherent file/batch with no real dependency, provide all replacement Parts at once.
4. User performs the whole batch once and uploads the resulting files once for consolidated validation.
5. Split only where a genuine destructive/state dependency requires an earlier validation gate.
6. Keep exact anchors, expected unique match counts, STOP conditions, scope boundaries, expected deltas, validation, and rollback instructions.
7. Large files such as `functions.php` and `spatial-flow.css` remain manual anchored replacements by default.
8. Automated Patch/VFR remains an archived optional mechanism only; do not use it unless the user explicitly re-authorises it for a future step.

## A/B test safety state

The A/B test changed only test copies. It did not deploy Step04 to the live theme.

Therefore the authoritative live theme baseline remains the verified pre-Step04 state (2.7.13 baseline) until the manual live deployment is performed and validated.

## Next action

Resume Step04 production deployment using the selected manual method:

```text
verified live 2.7.13 baselines
→ consolidated manual anchored replacement batch in chat
→ user edits live files
→ one consolidated returned-file validation
→ runtime Step04 status matrix
→ strict 1:1 acceptance
→ then fix/revalidate the reopened Crypto V0.3.0 transfer-button typography defect
```

Status: FINAL / USER-SELECTED.
