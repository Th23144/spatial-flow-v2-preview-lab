# Wishlist Body Width — restore 1480px user correction

Date: 2026-09-23
Project: Spatial Flow V2 / 项目二换皮工程

## Trigger

The user explicitly corrected the latest width-direction record and requested that Wishlist body width return to the prior 1480px baseline.

This later explicit user correction supersedes the temporary 1360px Wishlist/Search shared-body-lane candidate as the current authority for Wishlist.

## Corrected current understanding

Wishlist uses two different width systems:

- Header / Footer: 1720px system / broad global shell.
- Wishlist body content — Intro / Toolbar / Collection Index / product body:
  `--max: 1480px` plus its internal horizontal padding.

The user-provided correction is:

> Wishlist 的 Header / Footer 已经是 1720px 体系了，
> 但 Wishlist 的 Intro / Toolbar / Collection Index / 商品主体 还在用旧的：
> `--max: 1480px` + 内边距
>
> 所以在宽屏下，Wishlist 主体确实会比 Search 收进去一截。这个是我上一轮中和时没有把宽度彻底统一干净。

## Supersession

- The 1360px Wishlist body candidate is no longer the current direction.
- The 1360px Wishlist/Search pair is no longer the active project decision gate.
- The rejected 1720px full Wishlist-body experiment remains rejected and must not be merged.
- This correction does NOT establish 1480px as a universal width token for every Project-2 page.
- This correction restores the Wishlist body baseline specifically to 1480px while preserving the broader Header / Footer shell.
- Search width is not redefined by this record; the observed visual relationship remains that Wishlist body is narrower on wide screens.

## Production boundary

This is a design-state / documentation correction only.

Wishlist production mapping to WordPress + YITH + WooCommerce has still NOT started.

Status:

WISHLIST BODY WIDTH = 1480px BASELINE RESTORED.
WISHLIST HEADER / FOOTER = 1720px SYSTEM PRESERVED.
1360px WISHLIST BODY CANDIDATE = SUPERSEDED.
