# Project 2 · Manual Replacement and File Size Audit Policy

Date locked: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User-mandated implementation method

For Project 2 live-site changes, the default delivery method is manual anchored replacement.

```text
identify one bounded change
→ state the exact target file
→ provide the exact old code to search
→ state the expected match count
→ provide the exact replacement code
→ user replaces it manually
→ save
→ run immediate size/syntax validation
→ stop for confirmation
```

A downloadable ZIP, complete-file replacement, or broad overwrite instruction must not be used unless the user explicitly requests that method for the current step.

## 2. Required format for each replacement part

Every part must include:

```text
Part name and purpose
Exact runtime file path
Current file bytes / lines / SHA256
Exact old code block to search
Expected number of matches
Instruction to stop if the count differs
Exact replacement code
Expected byte delta and line delta
Save instruction
Actual post-edit bytes / lines / SHA256
Syntax/parser/structure validation
Rollback code or exact reverse replacement
Stop point before the next part
```

## 3. File-size audit rule

File size is a mandatory integrity signal, not optional metadata.

Before every change:

```text
- record current byte size
- record logical line count
- record SHA256
- record syntax/parser state
```

Before issuing replacement code:

```text
- calculate expected byte delta
- calculate expected line delta
- explain the source of any material growth or shrinkage
```

After the user saves:

```text
- re-check byte size
- re-check line count
- re-check SHA256
- compare actual delta with expected delta
- stop immediately if the delta is materially different
```

A large unexplained size change blocks deployment and browser testing.

## 4. Growth and shrinkage review

The following always require explicit explanation before application:

```text
- a page-specific CSS file grows by more than 15%
- a JavaScript or PHP file loses more than 10% of its lines
- a bounded replacement changes substantially more text than its stated scope
- a file becomes smaller because unrelated code may have been removed
- a file becomes larger because duplicate selectors, temporary patches, or reference-only styles may have been added
```

These thresholds are review triggers, not automatic approval or rejection rules.

## 5. CSS-specific rule

Project 2 is not an append-only patch project.

```text
- replace existing selector blocks in place
- merge overlapping rules
- do not append a new full visual layer to the bottom as the routine method
- identify exact START/END anchors
- keep temporary append blocks only with a named cleanup trigger
- run brace balance, comment balance and CSS parser checks after each part
```

This policy supplements and does not replace `PROJECT2_CSS_MAINTENANCE_POLICY.md`.

## 6. Large-file prohibition

For `functions.php`, `spatial-flow.css`, `spatial-flow.js`, Checkout templates and page-specific asset files:

```text
- no blind whole-file overwrite
- no routine replacement ZIP
- no broad delete-and-replace operation without exact anchors
- no multi-file package deployment instruction
- no proceeding when the user cannot confirm a unique match
```

A generated complete candidate may exist only as an internal comparison artifact. It is not the user-facing deployment method.

## 7. R1 correction

The previously generated artifact:

```text
project2-checkout-r1-candidate-20260802.zip
```

is withdrawn as a deployment method.

```text
Do not use it to overwrite runtime files.
Do not instruct the user to apply it.
It may remain only as an internal diff/audit artifact.
```

R1 must be reissued as bounded manual search-and-replace parts with mandatory before/after file-size review.

## 8. Status

```text
Policy: locked
Applies to: all Project 2 live implementation work
Overrides: prior package/whole-file deployment wording
Checkout: Not done
```
