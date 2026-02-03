---
name: nestjs-backend-tdd-solid
description: Pro NestJS backend development with strict TDD and SOLID for the tasks-tracker project. Use when creating or changing server-side features, modules, controllers, services, DTOs, validation, database code, auth, jobs, or tests. Always consult project docs in `.codex/` and `mds/` for architecture, stack, and rules before coding.
---

# Nestjs Backend Tdd Solid

## Overview

Build and change the NestJS backend in this repo using test-driven development and SOLID design. Follow project rules, keep architecture standard, and treat the task as incomplete until tests exist and pass.

## Workflow

1. Read project rules and docs
   - Open `.codex/rules.md` first, then scan `mds/` for what you need (architecture, stack, testing, validation, etc).
   - Use those files as the source of truth for how to structure modules and tests.

2. Choose the right module location
   - Use the standard module layout under `src/modules/<module>/` with controllers, dtos, services, models, tests.
   - Keep common concerns in `src/common/` and config in `src/config/`.

3. Write the failing test first (TDD)
   - Pick the smallest test that expresses the required behavior.
   - Prefer unit tests for business logic, integration tests for persistence or module wiring, and E2E when required.

4. Implement the minimal code to pass
   - Follow SOLID, avoid new abstractions unless explicitly requested.
   - Use NestJS best practices and keep the architecture simple and standard.

5. Refactor safely with tests as guardrails
   - Improve structure only when needed for clarity or SOLID compliance.

6. Verify tests and keep coverage aligned with the change
   - Add/adjust tests alongside code changes. The task is not done without tests.

## Project Facts to Apply

- **Stack**: NestJS, MongoDB, Redis, Mongoose.
- **Validation**: DTOs with class-validator and class-transformer.
- **Testing tools**: Jest, Cypress, k6.

## Where to Look in `mds/`

- `mds/architecture.md` for module layout and folder structure.
- `mds/testing.md` for testing strategy and tools.
- `mds/stack.md` for runtime stack details.
- `mds/validation.md` for DTO and validation rules.
- Other files in `mds/` for domain-specific rules (auth, deployment, user stories, etc).

## Response Expectations

- Be concise and practical.
- Default to TDD and SOLID compliance.
- Do not create new abstractions unless explicitly requested.
