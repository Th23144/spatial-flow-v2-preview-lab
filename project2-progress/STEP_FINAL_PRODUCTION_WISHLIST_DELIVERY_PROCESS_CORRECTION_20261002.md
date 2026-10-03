# Final Production Wishlist — Delivery Process Correction

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Correction

The previously prepared v2.7.51 Wishlist replacement ZIP is NOT an authorized deployment method.

The Project 2 production-edit workflow requires manual anchored replacement, not blind whole-file / whole-package overwrite.

## Authoritative deployment rule

For production theme changes:

1. Work from the user's freshly uploaded current source only.
2. Before each edit, record the exact current target file baseline:
   - bytes;
   - logical lines;
   - SHA256.
3. Provide the exact old block / selector to search for.
4. State the expected match count.
5. If the match count differs, STOP.
6. Provide the complete replacement block.
7. State expected byte / line deltas.
8. User performs the bounded replacement manually.
9. User returns the modified file / evidence for verification.
10. Re-check:
    - bytes;
    - lines;
    - SHA256;
    - PHP / JS syntax where applicable;
    - CSS brace / structural checks;
    - runtime result.
11. Only after that bounded step is accepted may the next code-edit step begin.
12. Provide an independent rollback block / restore instruction for each replacement.

## Explicitly prohibited unless the user separately authorizes it

- blind complete-file overwrite;
- telling the user to replace full functions.php / CSS / JS files;
- installing a generated whole-theme ZIP as the default deployment path;
- jumping from one unverified code-edit step into the next.

## v2.7.51 package status

The generated:
`spatial-flow-astra-child-v1.2-main-journal-v2.7.51-wishlist-batch1.zip`

is reclassified as:
- INTERNAL STUDY / DIFF REFERENCE ONLY;
- NOT FOR DEPLOYMENT;
- NOT THE USER'S REQUIRED DELIVERY FORMAT.

No user runtime acceptance exists for it.

## Next correct action

Restart Wishlist production mapping from the fresh 2.7.50 source using the manual anchored replacement protocol.

Do not proceed to Search.
