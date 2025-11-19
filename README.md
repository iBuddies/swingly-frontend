# Swingly Frontend (Next.js)

This repo contains the Next.js web app for Swingly. Static HTML mocks live under `pickle ui /` for reference; the deployed app is in `webapp-next/`.

## Quick Start
- Install: `cd webapp-next && npm install`
- Develop: `npm run dev` then open `http://localhost:3000`
- Build: `npm run build`
- Start: `npm start`

## Project Layout
- `webapp-next/app/`: Next.js App Router pages
  - `/(public)/*`: user-facing pages (library, analysis, coach, billing, profile)
  - `/(auth)/*`: auth pages (login, signup)
- `webapp-next/components/`: shared UI (`Sidebar`, `NavBar`)
- `webapp-next/app/layout.jsx`: global head, Tailwind CDN config, fonts
- `pickle ui /*`: static HTML + screenshots used as design references

## Conventions
- UI header: use the shared pattern from Video Library
  - Wrapper: `max-w-7xl mx-auto`
  - Header row: `flex flex-wrap items-start justify-between gap-4 border-b ... pb-8`
  - Title: `text-3xl font-bold tracking-tight`; Subtitle: `text-gray-500 dark:text-gray-400`
- Left nav: fixed at `w-64`. Pages offset content with `ml-64`.
- Fonts: Lexend (global). Avoid page-specific font overrides.
- Dark mode: toggled by the sidebar switch (adds `dark` to `<html>`). Ensure surfaces use `dark:` variants, avoid hard-coded hex colors.

## Adding Pages
- Create a new route under `webapp-next/app/(public)/<route>/page.jsx`.
- Include the standard header block and content container.
- If the page should not show the global footer margin behavior, adjust only that page; do not remove `ml-64`.

## Environment Variables
- Add in Vercel (and local `.env` if needed):
  - `API_URL` – backend base URL
  - `LLM_PROVIDER` – provider key (e.g., `openai` or `claude`)

## Deploying to Vercel
- Import GitHub repo → set Root Directory to `webapp-next`.
- Install: `npm ci` (or `npm install`), Build: `next build`, Output: `.next`.
- Each push to `main` deploys Production; PRs get Preview.

## Notes
- Sidebar scroll isolation: the sidebar blocks wheel/touch so the main page doesn’t scroll when hovering nav.
- If you adjust sidebar width, update `ml-64` across pages.
- For production hardening, we can switch from Tailwind CDN to a local Tailwind/PostCSS setup on request.
