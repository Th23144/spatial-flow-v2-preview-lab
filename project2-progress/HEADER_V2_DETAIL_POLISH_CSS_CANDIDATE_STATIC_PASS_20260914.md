# Header V2 Detail Polish CSS Candidate — Static PASS — 2026-09-14

Built against the user's latest returned `spatial-flow.css` after the hover-bridge fix.

Scope: CSS-only visual-detail pass. No PHP/JS ownership or behavior changes.

Validated replacement groups:

1. Masthead utility strip typography and tone.
2. Main-site progressive mobile drawer visual treatment, including Back/Close control reset, lighter typography, quieter spacing/separators, and CSS-drawn directional arrows so Windows/browser emoji-style blue-square glyphs are eliminated.
3. Attached desktop Shop Mega visual treatment, including page-matched surface color, lighter separators/shadow/type, and CSS-drawn `Shop all` arrow.

Offline candidate validation:

- bytes: 619,686
- lines: 22,123
- SHA256: `2b85ddc1e56be2e89330caf1867894f5adb8059c6190c9495f4704e74126619c`
- `{` / `}`: 3457 / 3457
- `/*` / `*/`: 278 / 278
- tinycss2 top-level syntax errors: 0

Execution remains manual bounded replacement in the user's current CSS. Apply the whole coherent polish batch, then return the complete CSS for source verification before runtime judgment.

Status: `STATIC CANDIDATE PASS / NOT YET RUNTIME VALIDATED / NOT YET USER ACCEPTED`.
