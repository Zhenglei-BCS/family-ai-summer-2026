# Example: Sky Catch (canvas dodge / catch)

A tiny **static** browser game: move the paddle, catch green orbs, avoid pink spikes.

```text
docs/examples/canvas-dodge/
├── index.html
├── style.css
└── game.js
```

## Will it publish after it works locally?

**Yes.** This is only HTML + CSS + JavaScript. No server, no database, no build step.

| Where | How |
|-------|-----|
| Local | Open `index.html` in a browser, or run any static server |
| GitHub Pages | Copy the folder into your site repo and push — same files go live |

If your Quarto site deploys with GitHub Actions / `quarto publish`, include this folder in the repo (e.g. `games/sky-catch/`). Pages will serve `games/sky-catch/index.html` as a normal URL.

## Try locally

1. Open `index.html` in Chrome/Edge (double-click is fine for this demo).
2. Click **Start**. Use ← → or A/D, or the on-screen buttons on a phone.

## Add to a kid’s Quarto site

```bash
# from their site repo root
mkdir -p games
cp -r path/to/family-ai-summer-2026/docs/examples/canvas-dodge games/sky-catch
```

On Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force -Path games | Out-Null
Copy-Item -Recurse -Force ..\family-ai-summer-2026\docs\examples\canvas-dodge games\sky-catch
```

Optional Quarto wrapper `games/sky-catch.qmd`:

```markdown
---
title: "Sky Catch"
---

Catch green orbs. Avoid pink spikes.

<a href="sky-catch/index.html" class="btn btn-primary" target="_blank">Play full screen</a>

```{=html}
<iframe src="sky-catch/index.html" width="100%" height="720" style="border:0;border-radius:12px;"></iframe>
```
```

Link it from Projects / navbar, then `git push` — after Actions finishes, open:

`https://YOUR-USERNAME.github.io/YOUR-SITE/games/sky-catch/`

## Agent stretch ideas

Ask Cursor Agent (after they play it):

- Faster spawn as score increases (already partly there — tune it)
- Sound-free screen shake on hit
- Two-player high-score label
- Replace circles with emoji or simple sprites

Keep changes small; playtest after every agent edit.
