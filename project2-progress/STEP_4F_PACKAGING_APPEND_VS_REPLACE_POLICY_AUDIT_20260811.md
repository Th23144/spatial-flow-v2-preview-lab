# Step 4F · Product Packaging · Append vs Replace Policy Audit

Date: 2026-08-11  
Status: AUDITED · CURRENT A/B/C/D INSTALL METHOD COMPLIES · FUTURE APPEND FROZEN

## Trigger

The user explicitly reasserted the Project 2 maintenance requirement:

> Do not grow the live source through unlimited append-only patches. Prefer precise replacement / merge of existing owners.

This audit checks whether Product Packaging Parts A–D violated that rule.

## Governing repository policy

`PROJECT2_CSS_MAINTENANCE_POLICY.md` states the priority:

1. replace an existing selector block in place;
2. merge overlapping / duplicate blocks;
3. delete understood obsolete blocks;
4. append a new block only when the component is genuinely new, or for an explicitly temporary validation layer.

Product Packaging is a genuinely new live SAFE5 component. There was no previous live Packaging runtime/UI/controller/CSS owner in the submitted SAFE5 baseline.

## Part A · functions.php

Verdict: JUSTIFIED NEW OWNER, NOT PATCH-PILE BEHAVIOR.

Changes:

- exact replacement: `SPATIAL_FLOW_CHILD_VERSION` 2.7.8 -> 2.7.9;
- one new bounded `SAFE5 Product Packaging Runtime Ownership START/END` module inserted after the existing SAFE5 backend-copy ownership boundary.

Reason:

The submitted baseline had no live Product Packaging runtime owner to replace. Session state, fee authority, cart-unit mapping, order metadata, Customizer controls and sanitization therefore require a new PHP owner.

Future rule:

Do not add a second Packaging PHP patch block. Future Packaging PHP changes must edit/replace/merge inside the existing Product Packaging Runtime Ownership block unless a genuinely separate subsystem is introduced and documented.

## Part B · form-checkout.php

Verdict: PRECISE STRUCTURAL INSERTION, NOT APPEND-ONLY PATCHING.

Changes:

- Packaging template bootstrap inserted at its exact data-owner location near the existing SAFE5 template variables;
- Packaging Step-02 markup inserted exactly between the existing native Shipping card and existing Step-02 navigation actions.

The original template was not duplicated or overridden later in the file. Deep verification showed the authorized Part-B change consisted of additions only because no prior Packaging DOM existed; the existing Checkout owners were preserved.

Future rule:

Modify the existing Packaging markup in place. Do not append a second Packaging section later in the template.

## Part C · checkout-safe5.js

Verdict: PRECISE CONTROLLER INSERTION, NOT APPEND-ONLY PATCHING.

Changes:

- one `initPackaging(root)` controller inserted immediately before the existing `bindNavigation(root)` function;
- one `initPackaging(root);` call inserted in `init()`.

Reverse-removal of exactly those two authorized additions restores the original SAFE5 JS byte-for-byte.

Future rule:

All Packaging JS corrections must edit/replace functions inside the existing `initPackaging(root)` controller. Do not add `initPackagingV2`, bottom-of-file hotfixes, duplicate Woo event handlers, or overlay controllers.

## Part D · checkout-safe5.css

Verdict: JUSTIFIED FIRST-TIME NEW COMPONENT BLOCK. THIS IS THE ONLY TRUE EOF APPEND IN A–D.

Submitted baseline before Product Packaging:

```text
88,922 bytes
2,713 logical lines
SHA256 8dcf35e6b850f861bc02c060936ba775ab73ef855d264d6342cfe49860788659
```

Audit of the baseline prefix before the new START marker:

```text
`sf-safe5-packaging` selector/name occurrences: 0
Product Packaging Visual Ownership markers: 0
```

Submitted Part-D file:

```text
118,905 bytes
3,818 logical lines
SHA256 3f16c8cb31ab33be64257e36dee1b085e4ca76b313aa980d76a5e83348a077bd
CRLF
no final newline
Packaging START marker: 1
Packaging END marker: 1
braces: 454 / 454
comments: 24 / 24
```

Removing the one Product Packaging Visual Ownership block plus its insertion separator restores the accepted baseline byte-for-byte:

```text
88,922 bytes
2,713 logical lines
SHA256 8dcf35e6b850f861bc02c060936ba775ab73ef855d264d6342cfe49860788659
```

Therefore the new CSS block is not overriding an older Packaging block and is not a duplicate patch layer. A new canonical Packaging visual owner is required because no such selectors existed before.

### Location nuance

Adding a new Packaging CSS owner is necessary. Placing it physically at EOF is not the only technically possible location; it could instead be placed near the existing Step-02 Shipping section. EOF was chosen to provide an explicit ownership/rollback boundary during first live integration, not to defeat existing rules through specificity stacking.

No functional rewrite is required solely to relocate it.

## Hard rule from this point forward

The first-time addition exception is now consumed.

```text
Product Packaging PHP: existing owner only — replace/merge in place.
Product Packaging template: existing section only — replace/merge in place.
Product Packaging JS: existing initPackaging controller only — replace/merge in place.
Product Packaging CSS: existing START/END block only — replace/merge in place.
```

Do NOT add:

- Packaging FIX1/FIX2/FIX3 blocks at the end of CSS;
- a second Packaging CSS owner;
- a second Packaging JS controller / overlay;
- duplicate PHP hooks for the same Packaging state/fee authority;
- duplicate Packaging markup below the accepted Step-02 section.

If visual or runtime corrections are required during acceptance, modify the current owned block directly and keep one canonical implementation.

## Conclusion

Parts A–D are justified first-time integration additions for a genuinely new Product Packaging component and do not constitute the prohibited endless append pattern.

The user's maintenance rule remains active and is now explicitly locked for all subsequent Product Packaging corrections: **precise replacement/merge inside the existing Packaging ownership blocks; no further append-only Packaging patches.**