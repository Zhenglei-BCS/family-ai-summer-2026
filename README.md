# Family AI Summer 2026

A summer learning project for **Jiahe Yu (16)** and **Jiahan Yu (14)** to explore what AI can do — by **building real things**, not just chatting.

## What you'll learn

1. **Markdown** — write journals, READMEs, and site content in plain text
2. **Quarto** — turn markdown into a personal website (recommended)
3. **AI tools** — Cursor, GitHub Copilot, Claude Code
4. **Git & GitHub** — commit, branch, pull request, publish
5. **AI literacy** — when to trust output, when to verify

## Learning path (recommended)

```
Week 1–2: Markdown writing
    ↓
Week 2–3: Quarto site + journal
    ↓
Week 4+:  Git collaboration, deploy, optional Hugo for Jiahe (16)
```

| Step | Guide |
|------|-------|
| 1. Write markdown | [docs/markdown-basics.md](docs/markdown-basics.md) |
| 2. Pick a site builder | [docs/choosing-a-site-builder.md](docs/choosing-a-site-builder.md) |
| 3. Build with Quarto | [docs/quarto-setup.md](docs/quarto-setup.md) |
| 4. Publish your own site | [docs/own-your-site.md](docs/own-your-site.md) |
| 5. Next session: Projects + gallery | [docs/session-projects-gallery.md](docs/session-projects-gallery.md) |

## Flagship project: Journal site (markdown → Quarto)

Each person gets a folder under `sites/`:

```
sites/
├── jiahe-yu/    ← Jiahe (16) — Quarto now; Hugo optional in week 5+
│   ├── _quarto.yml
│   ├── index.qmd
│   └── journal/*.qmd
└── jiahan-yu/   ← Jiahan (14)
```

You write `.qmd` files (markdown + a small header). Run `quarto preview` — you have a website.

**Why not hand-written HTML?** Markdown lets them focus on writing and thinking. Quarto handles layout. HTML/CSS is optional later ([docs/optional-html-starter/](docs/optional-html-starter/)).

## Per-account options

Both kids have forked this repo. To go **separate paths** and deploy
`jiahe-site` / `jiahan-site`:

→ **[docs/own-your-site.md](docs/own-your-site.md)** — recommended path: make fork public → rename to `*-site` → deploy Pages

(This family repo is **public**, so their forks can be public too.)

Background on Quarto vs Hugo: [docs/choosing-a-site-builder.md](docs/choosing-a-site-builder.md).

## Other project ideas

See [PROJECT-IDEAS.md](PROJECT-IDEAS.md) — study tools, games, automation, and more.

## 8-week plan

[CURRICULUM.md](CURRICULUM.md) — updated for markdown-first learning.

## AI tools

| Tool | Guide |
|------|-------|
| Cursor | [docs/ai-tools/cursor.md](docs/ai-tools/cursor.md) |
| GitHub Copilot | [docs/ai-tools/github-copilot.md](docs/ai-tools/github-copilot.md) |
| Claude Code | [docs/ai-tools/claude-code.md](docs/ai-tools/claude-code.md) |

## Ground rules

1. **AI helps you learn — it doesn't replace thinking.**
2. **No secrets in prompts or commits.**
3. **You write the journal; AI polishes — not invents.**
4. **One folder per person** under `sites/`.
5. **Have fun.**

## Quick start

```bash
git clone https://github.com/Zhenglei-BCS/family-ai-summer-2026.git
cd family-ai-summer-2026

# Install Quarto: https://quarto.org/docs/download/
cd sites/jiahe-yu   # or sites/jiahan-yu
quarto preview
```

Open [docs/markdown-basics.md](docs/markdown-basics.md) and do Exercise 1.

---

Built with curiosity. Summer 2026.
