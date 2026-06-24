# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A monorepo containing a personal homepage — a single-page React app with a minimal black-and-white design, built with Vite + Tailwind CSS v4 and deployed to GitHub Pages.

## Common commands

All commands run from `personal-homepage/`:

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (Vite HMR)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run lint         # Run oxlint (React-aware linter)
```

## Architecture

**Single-page sections** — `App.jsx` composes one `<main>` with five sections in order: `Hero` → `About` → `Projects` → `Experience` → `Contact`, plus `Navbar` and `Footer`. Each section is a standalone component with its own layout.

**Data layer** — `src/data/profile.js` is the single source of truth for all content. Every section component imports from it directly. To update the homepage, edit only this file:
- `name` / `tagline` / `subtitle` → Hero
- `about.bio[]` / `about.skills[]` → About
- `projects[]` (title, description, tech[], link, github) → Projects
- `experience[]` (role, company, period, description) → Experience (rendered as timeline)
- `social` (github, email, twitter, linkedin) → Hero links + Contact section

**Animation system** — `ScrollReveal` wraps content in `framer-motion`'s `whileInView` with a shared easing curve (`EASE_OUT` from `Icons.jsx`). Every section uses it for staggered entrance animations. `viewport: { once: true }` so animations only play once.

**Icons** — `Icons.jsx` exports inline SVG components (no icon library). `SOCIAL_ICONS` is a shared mapping object (`{ github, twitter, linkedin, email }`) used by both `Hero` and `Contact`. Icons are assigned to the object at module level after all component definitions.

**Styling** — Tailwind CSS v4 with `@theme` defining a custom `--color-neutral-*` palette (50–950). Global styles in `index.css` handle smooth scrolling, custom scrollbar, selection colors, and focus ring.

## CI/CD

`.github/workflows/deploy.yml` (root level) builds from `personal-homepage/` and deploys `personal-homepage/dist/` to GitHub Pages on pushes to `main`/`master`. The `vite.config.js` sets `base: '/qingtianClaudeCode/'` for GitHub Pages project-site URL paths. When deploying to a different repo, update the `base` path accordingly.
