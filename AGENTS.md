# Repository Guidelines

## Project Structure & Module Organization
- `pickle ui /`: static UI prototypes for core pages (`video_library`, `analysis`, `chat`, `admin_dashboard`, `login_page`, `signup_page`).
  - `code.html`: self‑contained HTML using Tailwind CDN (no build).
  - `screen.png`: reference screenshot to validate layout/visuals.
- Note: Folder name includes a trailing space. Quote paths (e.g., `"pickle ui /video_library/code.html"`).

## Product Surface & Flows (P0)
- Video Library: list my uploads with playback link.
- Analysis: render admin‑authored markdown per video.
- Chat: contextual Q&A limited to pickleball + the analysis notes.
- Admin Dashboard: see all uploads; post/edit analysis.
- Flows: Upload (15‑min 1080p; 90‑day retention), Review (presigned URL), Learn (read notes + chat).

## Build, Test, and Development Commands
- Serve locally: `python3 -m http.server 8000` → open `http://localhost:8000/pickle%20ui%20/video_library/code.html`.
- Open directly (macOS): `open "pickle ui /analysis/code.html"`.
- Devtools: check console/network for missing assets; validate links between pages.

## Coding Style & Naming Conventions
- HTML: 2‑space indent; semantic tags; accessible labels/alt text; minimal inline scripts.
- Tailwind: utility‑first; order by layout → spacing → color → effects; wrap long class lists.
- Files: page folders in `snake_case`; `code.html` as entry; `screen.png` as reference.

## Testing Guidelines
- Visual QA: compare to `screen.png`; update when UI changes.
- Flows: verify library list, playback link, analysis markdown rendering, chat UI presence, admin post form.
- Responsiveness: test mobile/desktop and container‑query states.
- Accessibility: focus outlines, contrast, labels; quick Lighthouse/Axe pass.

## Security & Configuration Tips
- Auth is lightweight (temp headers); no signup/reset here. Do not store secrets in HTML.
- CORS: open by default; plan to lock to this frontend.
- Content safety: treat user uploads/markdown as untrusted; avoid inline `innerHTML` without sanitization.
- Config placeholders: `API_URL`, `LLM_PROVIDER` (OpenAI/Claude) may be stubbed at top of `code.html` for demos.
- Keep binaries small; add `.DS_Store` to local `.gitignore`.

## Commit & Pull Request Guidelines
- Conventional Commits. Examples: `feat(video_library): add playback link`, `feat(admin): post analysis form`, `fix(chat): constrain prompts to notes`.
- PRs: concise summary, linked issues, before/after screenshots, test notes (browsers, breakpoints, a11y).
- Scope: one surface/feature slice per PR when possible.
