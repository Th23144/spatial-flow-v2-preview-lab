# Project 2 · Mandatory Step Recording Policy

Last updated: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Core rule

Every meaningful Project 2 step must be written into this repository so that a long ChatGPT conversation or a new conversation window cannot erase the execution line.

**A step is not considered formally advanced until its state is recorded in GitHub.**

This is an execution gate, not an end-of-session documentation preference.

```text
Meaningful action
→ record that action/state/result in GitHub
→ only then begin the next meaningful action
```

Do not perform a chain of meaningful project actions and retroactively summarize them only at the end.

## What counts as a meaningful action

Create or update a repository record whenever any of the following happens:

```text
- a new step, batch, sub-step or diagnostic phase starts
- source files are audited or a source baseline is established
- exact manual-edit instructions are issued
- the user's manually edited files are verified or rejected
- a browser/runtime/visual/function test is performed and changes the decision state
- an implementation is created, installed, enabled, disabled or replaced
- a package/plugin version or candidate is built or adopted
- a step is completed or accepted by the user
- a step is rejected, corrected, reopened, paused, blocked or deferred
- a rollback is ordered, performed or validated
- the user changes a requirement, UX/product decision or ownership rule
- a static reference candidate is created or revised
- a live implementation is authorized or stopped
- a bug is discovered, fixed or explicitly accepted
- an acceptance result changes the next action
- subsystem/window ownership overlaps or a handoff is created
- the next planned action changes
```

A purely read-only lookup that does not change project interpretation, state, next action or acceptance does not require a separate commit for every individual file read. A bounded read/audit phase must, however, be recorded at its start and at each meaningful conclusion/phase boundary before implementation advances.

## Required minimum content

Each step record must state at least:

```text
Date / step name
Current project stage
What changed or was verified
Why it changed / what evidence was found
Files/subsystem affected
What was intentionally NOT changed
User feedback / acceptance status
Current stop point
Exact next action
Any rollback or deferred item that must survive a window change
```

When file identity matters, record available bytes / logical lines / SHA256 / syntax or parser result.

## Manual-edit and post-edit rule

When the user performs a manual source edit:

```text
1. record the intended bounded delta or its already-recorded governing plan
2. user performs the edit
3. verify the returned source identity and syntax before browser acceptance
4. record PASS / FAIL / correction state
5. only then move to the next runtime step
```

Do not silently treat a syntactically valid file as an accepted implementation if semantic/runtime review rejects the design.

## Static candidate versus live implementation

Records must explicitly distinguish:

```text
STATIC CANDIDATE
LIVE IMPLEMENTATION
SOURCE VALIDATED
RUNTIME VALIDATED
USER ACCEPTED
REJECTED / ROLLED BACK
NOT YET ACCEPTED
```

A static candidate must never be described as if the real WooCommerce site has already been modified.

## Central inheritance rule

When resuming Project 2 in a new conversation window, read the repository documentation and the latest relevant `project2-progress/*.md` records before continuing.

For a full-inheritance request, historical failure/rejection/rollback records must also be read so that already disproved approaches are not rediscovered as new ideas.

Do not rely on conversational memory alone.

When historical records conflict, use this precedence unless a later document explicitly says otherwise:

```text
1. later explicit correction / rejection / rollback
2. later formal runtime or source acceptance / closure
3. standing policy
4. older candidate / plan / progress snapshot as historical evidence
```

## Progress-log rule

For bounded exploratory revisions, a dedicated `project2-progress/*.md` record is sufficient while the candidate is still being reviewed.

When the revision changes the official project stop point or next action, also synchronize the relevant central status/index document or `project2-progress/PROGRESS_LOG.md` when that central document is still an active source of current truth.

Do not rewrite old historical snapshots merely to make them look current; later dated closure/correction records may supersede them while they remain valid history.

## Cross-window rule

When Project 2 materially overlaps a subsystem owned by another long-running window, the overlap and its handoff are themselves meaningful actions and must be recorded before the owner window resumes from the new baseline.

External owner windows are governed by `PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md` and should receive a self-contained standalone handoff rather than being required to broadly read this repository.

## Hard boundary

Do not silently advance to a later batch because a local visual fix looks successful.

Before entering the next meaningful stage, confirm that:

```text
- the current step/action has an explicit repository record
- source/runtime/visual status is distinguished correctly
- user acceptance status is known when user acceptance is required
- rejected and deferred items are preserved
- rollback identity is known when the step changes live code
- the documented next action matches the actual next action
```

If these conditions are not satisfied, the project has not formally advanced.
