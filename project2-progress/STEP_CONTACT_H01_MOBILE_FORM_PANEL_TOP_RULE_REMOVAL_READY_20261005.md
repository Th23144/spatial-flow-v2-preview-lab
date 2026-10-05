# Contact H01 — Mobile Form Panel Top Rule Removal Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## User request

Remove the horizontal rule immediately above the mobile "MESSAGE FORM / Write with context." block.

## Root owner

The line is owned by:

```css
.sf-contact-form-panel {
  border-top: 1px solid var(--sf-contact-ink);
  padding-top: 24px;
}
```

This rule is valid on desktop, where the page has already been accepted.

Therefore the correction must be mobile-only and must not remove the desktop/1024 rule.

## Correction

Inside the existing Contact H01 `@media (max-width: 600px)` block, add:

```css
.sf-contact-form-panel {
  border-top: 0;
}
```

Keep the existing `padding-top:24px`; only remove the line.

## Verified baseline

functions.php:
- version 2.7.67
- SHA256 `ffa495cdecbd610a4d46a612ee0be9b9802ec4990ce0b5f95ac502223b4d29ba`

CSS:
- SHA256 `f490cd3e3c8c9255f3314423f3530e59526e489d15e7c6d0e16e2c049a8f9ea1`

## Verified target from that baseline

functions.php:
- version 2.7.68
- 658,030 bytes
- 12,558 lines
- SHA256 `29d61f83f9081568ed76459ae434419c4f7d9977998b6199c47e6791dd84677b`

CSS:
- 628,207 bytes
- 22,556 lines
- SHA256 `2a8a26a040d8bfe91a042b74572361e2d955286401b19f4f7c15695d3013f3c0`
- braces 3546 / 3546

Status: MOBILE-ONLY BORDER REMOVAL READY.
