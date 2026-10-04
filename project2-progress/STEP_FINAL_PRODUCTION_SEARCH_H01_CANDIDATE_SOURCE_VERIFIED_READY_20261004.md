# Final Production Search — H01 Candidate Source Verified / Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Authority

Accepted Search authority:
- branch: `temp-search-green-italic-03`
- file: `temp-preview/Spatial-Flow-Search-Harmonized-01.html`
- Search normal + 1024px state previously user accepted.

Mapping architecture was locked in:
`STEP_FINAL_PRODUCTION_SEARCH_DOM_AUTHORITY_AUDIT_AND_MAPPING_DECISION_20261004.md`

## Production baselines

### page-templates/global-search.php
- bytes: 13,038
- logical lines: 220
- SHA256: `303feaf8afa7efdbec45f8b91ccebc2a93514da11bb79896dc329115c0b663a7`
- PHP syntax: PASS

### functions.php
- file: `functions(20261004-105306).php`
- bytes: 641,971
- logical lines: 12,307
- SHA256: `c65af1fc79fe8407477e109b35fe6e3ac16e2e095371cce881af30939010ed91`
- child version: 2.7.55
- PHP syntax: PASS

### spatial-flow.css
- file: `spatial-flow(20261004-104548).css`
- bytes: 610,831
- logical lines: 21,721
- SHA256: `776760cf5f96c1f27b693063d7d90f787edaa4709e72add9670a22dc222e56e0`
- brace delta: 0

## H01 candidate

### global-search.php
Candidate:
`global-search(20261004-H01-candidate).php`

- bytes: 17,391
- logical lines: 287
- SHA256: `df3f752f39e59e501b3ee19c53949a7692b59330f15a6ba4ae8939e910f7d54e`
- PHP syntax: PASS
- inline JavaScript syntax: PASS

Preserved:
- `q=` server-side search route;
- split main / Journal context;
- real product/article/page/topic result arrays;
- real URLs, images, price HTML and excerpts;
- Header/Footer owners.

Presentation mapping:
- accepted open editorial hero;
- accepted rule-based Search field;
- editable suggested directions;
- editorial results head and filter tabs;
- products mapped to object spreads;
- articles mapped to editorial rows;
- real pages/topics retained as truthful editorial text-row extensions;
- prototype-only fake quick-view is not implemented.

### functions.php
Candidate:
`functions(20261004-SEARCH-H01-2.7.56-candidate).php`

- bytes: 644,206
- logical lines: 12,339
- physical newline count: 12,338
- trailing newline: absent
- SHA256: `ed1ba9d79c9020a8ba6069267bf80a160cb2a1f388c281d841ca4e1f7b2c6db9`
- child version: 2.7.56
- PHP syntax: PASS

Approved change scope:
- version bump 2.7.55 -> 2.7.56;
- accepted Search default hero/search copy;
- title accent / clear label / search tip;
- four editable suggested-search labels/queries;
- editable result-tab labels;
- corresponding Customizer controls;
- product visible action/meta fallback wording.

No existing Search query/result function was replaced.

Reverse reconstruction of only the approved H01 Search changes restores the exact functions baseline SHA256:
`c65af1fc79fe8407477e109b35fe6e3ac16e2e095371cce881af30939010ed91`.

### spatial-flow.css
Candidate:
`spatial-flow(20261004-SEARCH-H01-candidate).css`

- bytes: 611,696
- logical lines: 21,793
- SHA256: `6bd0ba12f4a5eeb67296408d2cb191281d01d0d7eed0d9d0d5a124df4b59f846`
- opening braces: 3,438
- closing braces: 3,438
- brace delta: 0
- top-level CSS parse errors: 0

Maintenance result:
- old Step 5C-B-C Search card block removed;
- obsolete Step 5C-B-E1 mobile card-fix block removed;
- one canonical block now owns Search:
  `Spatial Flow Final Production Search H01 · Accepted Authority Mapping`
- no bottom-of-file Search patch stack added.

Reverse reconstruction of the H01 block restores the exact CSS baseline SHA256:
`776760cf5f96c1f27b693063d7d90f787edaa4709e72add9670a22dc222e56e0`.

## Important ownership note

Existing saved Customizer values remain authoritative. New defaults do not silently overwrite prior saved Search values.

Therefore runtime may legitimately show older user-saved Search copy until the user chooses to edit/reset those fields. That is backend-owner preservation, not a source failure.

## User-facing deployment method correction

The generated H01 full-file candidates are **internal comparison artifacts only**.
They must NOT be used as the user-facing deployment method.

Per `PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md`:
- default delivery = bounded manual anchored replacement;
- no downloadable ZIP / complete-file replacement / broad overwrite unless the user explicitly requests that method for the current step;
- large files such as `functions.php` and `spatial-flow.css` must not be routine whole-file overwrites;
- one coherent multi-file feature should still be issued as one complete bounded multi-file batch.

For this Search H01 step, the next user-facing output must therefore be:
1. exact target file path for every part;
2. exact old code / START-END anchors;
3. expected match count;
4. exact replacement code;
5. expected byte and line delta;
6. stop-on-mismatch instruction;
7. combined post-edit source gate after the user returns all modified files.

No Search JavaScript file change is required.

## Runtime acceptance batch

After exact deployment:
1. `/search/` no-query state;
2. `/search/?q=stone` or another real-result query;
3. verify real product, page/topic, and article results when available;
4. verify Search submit and suggested-search links;
5. verify result filter tabs;
6. verify result destination links;
7. desktop strict visual comparison at 100% zoom;
8. 1024px accepted-state regression;
9. 390–430px mobile review;
10. confirm no Header/Footer or protected-commerce regression.

Status: H01 CANDIDATE SOURCE VERIFIED AS INTERNAL AUDIT ARTIFACT / USER-FACING MANUAL ANCHORED BATCH REQUIRED.
