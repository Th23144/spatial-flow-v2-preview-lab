# Project 2 — Blog Editorial Block Reconciliation / Concept 03 — 2026-10-09

## User decision
User confirmed the revised understanding: historical Ink & East blocks should **not** be deleted solely because their former platform functions are absent. Assess independent visual value, current WordPress ownership, content-supply truth, role overlap, and the editorial rhythm. User specifically agreed with the analysis that Reading Room and Dispatch deserve retained/adapted positions and Reader Letters are conditional. The Custom Ebook service is obsolete for this blog.

## About earlier proposals
Concept 01 is expressly user-REJECTED. Concept 02 preserved original geometry but removed too much of the narrative sequence. **Neither is current approval authority.**

## Current review candidate — Concept 03
Preview: https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/2875709c7d9d49fc8ec803c325b05c7c72b4acac/temp-preview/Spatial-Flow-Journal-Editorial-Adaptation-03.html

GitHub source: `temp-blog-editorial-adaptation-03/temp-preview/Spatial-Flow-Journal-Editorial-Adaptation-03.html`
- Source reference: Project3 `Th23144/ink-east-planning/preview/ink-east-v1.html`, Project3 READ ONLY.
- Maintains byte-for-byte the original 44,191-character main CSS stylesheet from the source V02 preserved prototype, with a separate limited responsive/functional adaptation stylesheet.
- Preserves full-viewport 2-column cover and photo, Chinese annotation/seal, colophon, curated TOC, large quote, original four-question grid architecture, original Reading Room glyph/art and left editorial presentation, category spine, dark Dispatch, and paper-colophon Footer.
- Revised page sections: Cover → TOC/editor note → Public articles → Quote → Public editorial questions → Reading Room/public reading paths → Category/Archive → Journal Dispatch → Footer.
- Reader Letters visual layout repurposed as **editorial questions pointing only to public articles and category links**. No private Dispatch entries, purported real reader submissions, fabricated personal letters or real-reader bylines.
- Reading Room visual preserved, but content now means **public curated reading paths**, not a paid membership, reader account, VIP tiers or gated materials.
- Custom Ebook Studio service block remains deleted, but its layout remains available as optional inspiration later; its non-existent service must not be created for the sake of fidelity.
- Original Dispatch visual restored, with email + topic fields corresponding to **existing actual WordPress subsite template `template-parts/journal-dispatch-band.php`**; browser prototype prevents submitting any data; it does not promise subscription emails or automation.
- Underlying live functions retain `spatial_flow_journal_dispatch_submit`, nonce, source URL, honeypot and WP AJAX handler; production mapping must preserve those via original PHP template, not use the inert static form.
- Static article titles, topics and URLs are merely illustrative; production content must come from actual Posts, categories and Customizer, and production menus must use existing WordPress menu slots.
- Blog Header/Footer concept in the prototype is part of holistic visual review, **not** yet approved for 1:1 implementation.
- Neither Project3 nor production child theme changed.

## Source-level candidate verification
- Temp HTML source present and retrievable at pinned commit `2875709c7d9d49fc8ec803c325b05c7c72b4acac`.
- Eight top-level section openings / eight closings; no older paid/custom studio visual sections.
- Main CSS still exactly matches Concept 02 which directly inherited original Ink & East CSS.
- The two actual Dispatch form field names and labelled inputs are present; their preview submission is intentionally inert.
- No candidate V03 live browser screenshot or actual WordPress runtime test has been completed. **Do not claim visual pass**.

## Next gate
Await user's visual assessment against original; amend the static source while preserving narrative integrity, then only after visual approval undertake scoped WordPress mapping with fresh live theme files and full source gate.
