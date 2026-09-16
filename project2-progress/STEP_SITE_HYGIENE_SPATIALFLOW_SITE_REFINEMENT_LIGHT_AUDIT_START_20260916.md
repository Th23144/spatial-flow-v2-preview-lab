# Site Hygiene — spatialflow-site-refinement light audit start

Date: 2026-09-16

## Scope correction
Current Site Hygiene is a temporary cleanup pass only. The goal is to remove clearly unused/inactive plugins, then return to the Project 2 build mainline. Active-plugin replacement/source consolidation is deferred to the final deep-clean phase after page/function work is complete.

## Current target
- Plugin: `spatialflow-site-refinement`
- Version previously observed: `0.2.0`
- Main site: inactive
- Blog site: inactive
- Network active: none

## Method
Use a lightweight read-only audit before any write:
1. confirm shared plugin folder exists and both sites remain inactive;
2. inspect plugin source to identify its own option/meta/table/cron identifiers and any runtime hooks;
3. search current child theme/custom plugins for explicit dependency on this plugin;
4. inspect only the identifiers actually owned by this plugin in DB/Cron/Action Scheduler;
5. if no live dependency is found, quarantine plugin and clean only proven plugin-owned residue;
6. quick runtime regression;
7. close and proceed to `woocommerce-gateway-stripe`.

## Safety boundary
Do not touch active plugins, current theme functionality, shared generic WordPress options, or unrelated records during this pass.

Status: READ-ONLY AUDIT STARTED.
