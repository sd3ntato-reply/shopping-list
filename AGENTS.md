# AGENTS.md

## Commands
- `npm install` — install dependencies
- `npm test` — run the test suite (vitest)
- `npm run lint` — typecheck (tsc --noEmit)

## Project structure
- `src/` — application logic
- `__tests__/` — tests, mirroring `src/` structure

## Code style
- TypeScript, strict mode. No implicit any.
- Functions over classes for pure logic (see `src/list.ts`).

## Git workflow
- Feature branches, PR against `main`. CI (lint + test) must pass before merge.

## Testing
- Every exported function in `src/` has a corresponding `describe` block in `__tests__/`.

## Boundaries
- No backend/persistence in this scaffold — in-memory list operations only.
