# Shop V2 — Frozen feature centered adaptive CSS reset IMPLEMENTATION READY

Date: 2026-09-18

## Scope

Temporary visual cleanup only for the frozen legacy Editor's Pick block.

Do not change its semantics, data ownership, CTA logic or mobile visibility.

Restore the earlier centered adaptive right-column layout that looked cleaner while the future DIY/Custom Studio replacement is deferred.

## Exact target

Current legacy state uses:
- __main max-width: 640px;
- __copy grid with align-content: space-between;
- stretched top/bottom distribution.

Restore the earlier 2026-09-17 21:24 centered variant:
- __copy display:flex;
- flex-direction:column;
- justify-content:center;
- align-items:stretch;
- __main width:100%; max-width:none;
- footer normal flow with margin-top:34px;
- preserve current typography/body/place/button rules unless already matching.

## Boundaries

- keep 5fr / 7fr desktop columns;
- keep current Shop page width;
- no bottom anchoring;
- no min-height spacer;
- mobile Editor's Pick remains hidden for the current frozen state;
- no DIY implementation.

## Status

IMPLEMENTATION READY.