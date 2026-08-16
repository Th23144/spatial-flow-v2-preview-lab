# Project 2 · Runtime Test Batching Policy

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User instruction

For future Project-2 runtime acceptance work, do not unnecessarily split one coherent test batch into multiple user-feedback rounds such as B1 -> wait -> B2 -> wait -> B3 when the tests can safely be executed together.

The preferred delivery pattern is:

```text
one coherent acceptance batch
-> one consolidated checklist
-> user executes the whole safe sequence
-> user returns one consolidated result set
-> Project 2 records the result in GitHub
```

## Default rule

Give all non-destructive, logically compatible checks for the same acceptance cycle at once.

Do not artificially serialize them merely because they belong to different subgroups in an internal test plan.

## When splitting is still justified

A test sequence may still be divided when a real dependency or safety gate requires it, for example:

```text
a failed earlier step would invalidate later evidence
later action is destructive or settles/changes an order irreversibly
a rollback sample must remain unpaid until prior evidence is collected
a security/auth failure must be diagnosed before mutations continue
a production-like payment action could incur money/fees or external side effects
```

Even in those cases, minimize the number of required user round trips.

## Recording rule remains unchanged

This batching preference does NOT remove the Project-2 audit rule:

```text
meaningful action -> GitHub record -> next meaningful action
```

The assistant may record intermediate gates internally in GitHub while still giving the user one consolidated execution checklist whenever it is safe to do so.

## Practical objective

Reduce wasted user time and repetitive back-and-forth while preserving:

```text
runtime safety
traceable evidence
rollback integrity
source/configuration discipline
```
