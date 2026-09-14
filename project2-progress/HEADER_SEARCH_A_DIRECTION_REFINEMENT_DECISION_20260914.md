# Header Search — A Direction Refinement Decision — 2026-09-14

## User decision
The user prefers Direction A (Header inline transform) over B/C/D, but explicitly rejects the current A execution as not visually mature enough.

## Current interpretation
The product direction is now narrowed to: Search should remain inside the Header itself rather than render as a detached card/band/overlay. The next task is not production implementation yet; it is visual exploration within the A family.

## Required next step
Create a standalone, non-production HTML comparison of refined A variants. Do not write preview HTML into the repository. Do not generate images unless the user explicitly requests image generation.

## Design problem to solve
The initial A prototype was conceptually correct but visually weak because the right side became too utilitarian and the input felt inserted rather than architecturally integrated. Refined variants must preserve the true centered wordmark, keep the left navigation stable, and make the Search transition feel native to the Header system.

## Project status
Main-site Header remains Not done. No production source changes are authorized by this decision.
