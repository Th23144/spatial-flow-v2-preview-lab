# Shop V2 — Closing Note reference rollback IMPLEMENTATION READY

Date: 2026-09-18

## Scope

Return the desktop Closing Note to the static reference geometry and remove the temporary horizontal-offset experiment.

## CSS rollback

Delete the temporary desktop-only rule:

`@media (min-width: 1101px) {`
`  body.post-type-archive-product.woocommerce-shop .sf-shop-v2-closing-note__right {`
`    padding-left: 80px !important;`
`  }`
`}`

Keep the base reference-aligned rule:
`body.post-type-archive-product.woocommerce-shop .sf-shop-v2-closing-note__right { padding-top: 14px !important; }`

Do not change:
- 1fr / 1fr columns;
- 80px gap;
- section padding;
- 48ch right paragraph;
- mobile/tablet rules.

## Backend copy calibration

Use the existing Shop V2 Customizer Closing Note fields.

Set the left statement back to the reference-length copy:
- Closing Note Intro: `Don't see it here?`
- Closing Note Emphasis: `The studios we work with make a few things a year.`
- Closing Note Body: `Tell us what room you're trying to settle, and we'll write back.`

Do not blindly copy the reference Side Text phrase about a Lisbon studio unless that statement is factually true for the live business.

Keep the current working:
- Closing Note Side Text, unless the user separately wants to rewrite it;
- Closing Note Button Text;
- Closing Note Button URL.

## Validation

After the CSS rollback and left-copy edit:
- desktop screenshot only;
- compare optical balance before any further layout changes;
- no further Closing Note redesign unless a demonstrated delta remains.

Status: IMPLEMENTATION READY.