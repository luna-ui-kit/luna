# Copilot / AI Agent Instructions — Luna UI Kit

Purpose: Give an AI coding agent the essential, actionable knowledge to be immediately productive in this repository.

- **Big picture**: This is a Next.js (app-router) design system and example site. The UI library lives in the `luna/` folder and the demo site lives in `app/`.

- **Build / run / lint**: See [package.json](package.json)
  - Dev: `npm run dev` (runs `next dev --turbopack`)
  - Build: `npm run build` (runs `next build`)
  - Start: `npm run start` (runs `next start`)
  - Lint: `npm run lint` (runs `eslint .`)

- **Key directories & files**
  - Design system entry: [luna/components/index.ts](luna/components/index.ts) — components are exported here for consuming code.
  - Theme & overrides: [luna/theme/ThemeComponent.tsx](luna/theme/ThemeComponent.tsx), [luna/theme/ThemeOptions.ts](luna/theme/ThemeOptions.ts), [luna/theme/styleOverrides/index.ts](luna/theme/styleOverrides/index.ts)
  - Pre-built blocks/examples: [luna/blocks/](luna/blocks/) — many blocks use `__data` folders for example content (e.g., [luna/blocks/\_accordion/\_accordion_001](luna/blocks/_accordion/_accordion_001)).
  - Public demo pages: [app/](app/) (Next.js app router). Top-level demo page: [app/page.tsx](app/page.tsx) and layout: [app/layout.tsx](app/layout.tsx).

- **Patterns & conventions (explicit, discoverable)**
  - Path alias: `@/*` maps to repo root (see `tsconfig.json` paths). Use `import { X } from '@/luna/components'` when adding or updating examples.
  - Client components: Many UI components include `'use client'` at the top — preserve server vs client boundaries when moving code into `app/`.
  - Component wrapping: Most components are thin wrappers around MUI using `styled(...)` from `@mui/material/styles`. Example: `luna/components/button/index.tsx` defines a `Button` via `styled(MuiButton)`.
  - Re-exports: `luna/components/index.ts` re-exports subfolders — add new components by creating the folder and adding an export line here.
  - Blocks naming: blocks and variants follow an underscore + numeric convention (e.g., `_accordion_001`) and export from parent index files. Follow that pattern for new block variants.

- **Styling & theme**
  - Central theme: `ThemeComponent` uses `createTheme({...themeOptions})` and applies `StyleOverrides`. Edit `luna/theme/*` to change global tokens (colors, typography, shadows).
  - MUI overrides live in [luna/theme/styleOverrides/index.ts](luna/theme/styleOverrides/index.ts) and `shadows`.

- **Environment / integrations**
  - Uses Vercel analytics and speed insights (`@vercel/analytics`, `@vercel/speed-insights`). See [app/layout.tsx](app/layout.tsx).
  - The Clarity snippet reads `process.env.NEXT_PUBLIC_PROJECT_ID` — don't remove or rename without updating environment config.

- **TypeScript / tooling notes**
  - `tsconfig.json` has `noEmit: true` and `moduleResolution: bundler`. Code is TypeScript-first; keep types intact and prefer editing `.tsx`/`.ts` files.
  - Linting via `eslint .` — the repo uses `eslint-config-next`.

- **Code-modification guidance for agents**
  - Preserve `use client` boundaries. If migrating a component to server-side, remove `use client` intentionally and validate usage.
  - When adding a new component: create `luna/components/<name>/index.tsx`, export it from `luna/components/index.ts`, and add any demo under `luna/blocks` or `app/` as appropriate.
  - When changing theme tokens, update both `ThemeOptions.ts` and `styleOverrides/index.ts` to keep appearance consistent.
  - Use path imports with the `@/` alias for consistency in examples and pages.

- **Examples**
  - Import example for pages and blocks:

    ```ts
    import { Button } from '@/luna/components'
    import { BlockWrapper } from '@/luna/components'
    ```

  - Block data pattern: blocks read example data from `__data` sibling folders (see `luna/blocks/_accordion/__data`).

- **What not to change without human sign-off**
  - Global theme token names and public env vars (e.g., `NEXT_PUBLIC_PROJECT_ID`).
  - Major exports in `luna/components/index.ts` — adding is fine, removing or renaming is breaking.

If anything here is ambiguous or you want coverage for other folders, tell me which area to expand (blocks, specific components, or deployment). Ready to iterate on any section.
