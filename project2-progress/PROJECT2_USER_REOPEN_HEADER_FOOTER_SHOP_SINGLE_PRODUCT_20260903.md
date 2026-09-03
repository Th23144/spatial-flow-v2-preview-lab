# Project 2 · User status correction: Header / Footer / Shop / Single Product reopened · 2026-09-03

## Trigger
After Checkout reached `Completed 1:1`, the user corrected the page inventory and supplied a historical screenshot of the deferred/missing-item audit.

The user's later explicit correction overrides the earlier post-Checkout inventory reconciliation that had classified Header, Footer, Shop and Single Product as completed.

## Binary status correction
Project 2 allows only:

```text
Completed 1:1
Not done
```

Therefore the current authoritative status is:

```text
Main-site Header: Not done
Main-site Footer: Not done
Shop archive: Not done
Single Product: Not done
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / WooCommerce Order Result: Completed 1:1
```

All other previously unfinished pages/families remain `Not done`.

## Header
The user explicitly states that Header still has adjustments to make. The exact defect list may be in the user's own notes and is not fully represented in the repository.

Do not invent missing details. Treat Header as reopened / `Not done` until a fresh strict audit and user closure occur.

## Footer
The user explicitly states that Footer still has adjustments to make.

Historical material proves dynamic/footer editability sources exist, but the supplied historical audit notes that final backend-editability evidence was insufficient/incomplete. Presence of `spatial_flow_footer_v2_text`, `spatial_flow_footer_v2_mod` and menu ownership is not itself proof of final strict closure.

Footer is therefore `Not done` pending fresh strict review.

## Shop
The user explicitly states Shop is not complete.

Repository evidence also preserves at least one known intentionally unimplemented reference layer: the static Shop product-card Editorial Place Note. The controlled Shop rework explicitly avoided fabricating this text because no dedicated per-product backend field existed; a future implementation must use real backend-editable product data rendered through `content-product.php`.

This known omission plus the user's later correction means Shop is `Not done`.

## Single Product
The user is not certain of the full remaining scope but explicitly believes the page still has omissions/deferred work and further adjustments.

Repository + supplied historical audit identify:

```text
The Piece: implemented
Story Behind: deferred
Care Ritual: deferred
Quiet Notes / Reviews: deferred
Closing Editor's Note: present in static reference but historically not cleanly registered as either implemented or formally deferred
whole long-page strict 1:1 closure: historically ambiguous because several large reference sections were deferred
```

Earlier records treated Story Behind / Care Ritual / Reviews as optional non-blocking deferrals, but the user has now explicitly reopened the page and questioned whether the whole page should still count as `Completed 1:1`.

Under the binary-status rule, uncertainty + known remaining adjustments means:

```text
Single Product: Not done
```

Do not automatically implement fake editorial content. First distinguish intentional optional deferral from actual missing structural/visual work.

## Protected completed systems
Do not let this correction reopen unrelated completed work:

```text
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / Order Result: Completed 1:1
```

Checkout/Step04 final closure and WPCode 1706 boundary remain unchanged.

## Sequence correction
The previously announced next step `Step 4G-A · Home current live source + ownership audit` is suspended.

Do not start Home yet.

Recommended next order:

```text
1. Single Product whole-page strict re-audit
   - reconcile Story Behind / Care Ritual / Quiet Notes / Reviews
   - audit Closing Editor's Note
   - determine which items remain legitimately optional vs which are actual 1:1 omissions
   - inspect current live page before any implementation

2. Main-site Header strict re-audit
   - incorporate user's own recorded adjustments when supplied

3. Main-site Footer strict re-audit
   - include actual backend-editability validation, not source-presence assumptions only

4. Shop strict re-audit
   - include per-product Editorial Place Note decision/implementation path
   - include any additional user-recorded adjustments

5. Home strict 1:1 work
```

This sequence may be reordered only by a later explicit user decision.
