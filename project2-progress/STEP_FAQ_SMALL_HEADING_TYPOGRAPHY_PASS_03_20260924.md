# FAQ Small-heading Typography Pass 03

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## User feedback

The FAQ accordion question titles still looked wrong after the first typography correction.

## Diagnosis correction

The issue was not simply “serif vs sans”.

Pass 02 over-corrected by making FAQ question titles Inter 15px, which pushed them too close to ordinary body/interface text and weakened the editorial hierarchy.

## Pass 03

- FAQ question title returns to Cormorant Garamond
- desktop size = clamp(18px, 1.45vw, 21px)
- weight = 400
- line-height = 1.22
- mobile size = 19px
- no layout, spacing, accordion behavior, body copy, section title or shell geometry changed

Goal:
Question titles should read as small editorial subheads, not body text and not oversized display headings.

## Reference-status convention remains active

Every future page handoff should state:
- external ZIP reference: yes/no
- repository old page: yes/no
- exact baseline used
