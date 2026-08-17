# Step 4F · Step04 A/B Test — Manual Delivery Must Be Inline in Chat

Date: 2026-08-16

## User correction

For Method A / historical manual replacement, the user explicitly requires that replacement instructions and code be delivered directly in the chat. Do not package the manual OLD/NEW blocks into ZIP/download artifacts.

## Correction

The previously issued `STEP04_AB_A_MANUAL_PACKAGE.zip` delivery is withdrawn and must not be used as the user-facing manual deployment method. It is not counted in A-group timing.

Official Method A delivery format from this point:

```text
all manual replacement Parts for the coherent batch
→ OLD search block shown inline in chat
→ expected match count
→ NEW replacement block shown inline in chat
→ user performs all Parts
→ user uploads final modified files once
→ consolidated validation
```

No ZIP, no download package, no external README for manual replacement instructions unless the user explicitly asks for one.

Status: LOCKED.
