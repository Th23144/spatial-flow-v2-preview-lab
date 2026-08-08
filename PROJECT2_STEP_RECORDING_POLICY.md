# Project 2 · Mandatory Step Recording Policy

Last updated: 2026-08-08
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Core rule

Every meaningful Project 2 step must be written into this repository so that a long ChatGPT conversation or a new conversation window cannot erase the execution line.

A step is not considered formally advanced until its state is recorded in GitHub.

## What must be recorded

Create or update a repository record whenever any of the following happens:

```text
- a new step starts
- a step is completed or accepted by the user
- a step is paused, blocked or deferred
- the user changes a requirement or UX/product decision
- a static reference candidate is created or revised
- a live implementation is authorized or stopped
- a bug is discovered, fixed or explicitly accepted
- an acceptance result changes the next action
- the next planned action changes
```

## Required minimum content

Each step record must state at least:

```text
Date / step name
Current project stage
What changed
Why it changed
Files affected
What was intentionally NOT changed
User feedback / acceptance status
Current stop point
Exact next action
Any rollback or deferred item that must survive a window change
```

## Static candidate versus live implementation

Records must explicitly distinguish:

```text
STATIC CANDIDATE
LIVE IMPLEMENTATION
USER ACCEPTED
NOT YET ACCEPTED
```

A static candidate must never be described as if the real WooCommerce site has already been modified.

## Central inheritance rule

When resuming Project 2 in a new conversation window, read the repository documentation and the latest relevant `project2-progress/*.md` records before continuing.

Do not rely on conversational memory alone.

## Progress-log rule

For bounded exploratory revisions, a dedicated `project2-progress/*.md` record is sufficient while the candidate is still being reviewed.

When the revision changes the official project stop point or next action, also synchronize the relevant central status/index document or `project2-progress/PROGRESS_LOG.md`.

## Hard boundary

Do not silently advance to a later batch because a local visual fix looks successful.

Before entering the next stage, confirm that:

```text
- the current step has an explicit repository record
- user acceptance status is known
- deferred items are preserved
- the documented next action matches the actual next action
```
