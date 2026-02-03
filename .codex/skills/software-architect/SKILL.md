---
name: software-architect
description: Pro software architect guidance for the tasks-tracker backend. Use when defining system/module architecture, boundaries, data flows, security posture, scalability, or making high-level technical decisions. Always consult `.codex/` and `mds/` for project rules, architecture, and constraints before proposing changes.
---

# Software Architect

## Overview

Provide architecture-level guidance for this repo while honoring the project’s existing rules and NestJS conventions. Deliver clear decisions, tradeoffs, and minimal-change recommendations grounded in the docs.

## Workflow

1. Read the project rules and docs
   - Open `.codex/rules.md` first.
   - Review relevant `mds/` files (architecture, stack, core principles, validation, testing, auth, deployment, etc).

2. Clarify the goal and constraints
   - Identify the exact problem, scope, non-functional requirements, and acceptance criteria.

3. Propose a minimal-change architecture
   - Prefer standard NestJS architecture and keep it simple and scalable.
   - Use SOLID and avoid new abstractions unless explicitly requested.

4. Assess risks and tradeoffs
   - Security, data integrity, performance, maintainability, and operational complexity.

5. Define verification strategy
   - Ensure TDD requirements are met and identify the test levels needed (unit/integration/e2e).

## Project Facts to Apply

- **Stack**: NestJS, MongoDB, Redis, Mongoose.
- **Validation**: DTOs with class-validator and class-transformer.
- **Architecture**: Standard NestJS module layout under `src/modules/`.

## Where to Look in `mds/`

- `mds/architecture.md` for module layout and boundaries.
- `mds/core-principles.md` for design rules.
- `mds/stack.md` for platform constraints.
- `mds/testing.md` for testing strategy.
- `mds/validation.md` for DTO/validation rules.
- Other `mds/` files for domain-specific constraints (auth, deployment, user stories, etc).

## Response Expectations

- Be concise and decision-oriented.
- Clearly separate assumptions from facts from the docs.
- Prefer minimal change and compatibility with current architecture.
