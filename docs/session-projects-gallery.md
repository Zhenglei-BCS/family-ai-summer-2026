# Session: Projects page + photo gallery

**Part 2 of 2** — after your [mini-game with Agent](session-agent-minigame.md)

**Goal:** Add a **Projects** page that features your game (and optionally a photo gallery).

**Time:** about 60–90 minutes  
**Who:** Jiahe (16) and Jiahan (14)  
**Where:** work in **your own** `jiahe-site` / `jiahan-site` repo  
**Prerequisite:** a playable game under `games/` on your live site (Part 1)

**Big picture:** [Game first → Projects](session-game-then-projects.md)

---

## Definition of done

By the end of this session you should have:

- [ ] A new page: `projects.qmd` (or `projects/index.qmd`)
- [ ] A **project card for your mini-game** (title + 1–2 sentences + link to `games/…`)
- [ ] At least **one more** project card (hobby, school, or “coming soon”) — or a short “More projects later” note
- [ ] Optional: a **photo gallery** section with **3–5 images** and short captions
- [ ] Link in the **navbar** and on the **home page**
- [ ] Theme choice checked (keep or change — see [Theme change](#theme-change))
- [ ] Changes **pushed** and visible on your **live** GitHub Pages URL
- [ ] One note: what AI got wrong (or what you changed)

---

## Before you start (5 min)

1. Open your site repo in Cursor.
2. Confirm Part 1 is done: you can open your game on the **live** site (e.g. `/games/forest-key/` or `/games/sky-catch/`).
3. Check remotes — `origin` should be **your** GitHub user:

```bash
git remote -v
```

4. Optional gallery: create an images folder if you will add photos:

```text
images/
  projects/     ← put gallery photos here
```

**Photo rules** (only if you add a gallery)

- Use your own photos, or royalty-free images.
- No private photos of other people without permission.
- Prefer small files (under ~1 MB each) so the site stays fast.
- Filenames: lowercase, no spaces — e.g. `summer-bike.jpg`, `lego-build.png`.

---

## Step 1 — Sketch (10 min)

On paper or in a note, fill this in:

| Item | Your answer |
|------|-------------|
| Page title | Projects |
| **Project 1 (your game)** | name + one sentence + URL path (`games/…`) |
| Project 2 | hobby / school / “next idea” |
| Optional project 3 | … |
| Gallery? | yes / no — if yes, theme + 3–5 filenames |

Jiahan ideas for project 2: games, sports, crafts, pets.  
Jiahe ideas: coding experiments, school projects, music, sports.

---

## Step 2 — Ask Cursor for a plan (5 min)

Paste this prompt (edit the bits in brackets):

```text
I have a Quarto website and a finished mini-game at [games/forest-key/ or games/sky-catch/].

Help me add a Projects page that FEATURES the game first.

Requirements:
- Create projects.qmd at the site root (or projects/index.qmd if that fits better)
- First project card = my mini-game (title, 1–2 sentences I will write, link to the game)
- Second project card = placeholder I will fill in
- Optional: Photo gallery section using images/projects/
- Add Projects to the navbar in _quarto.yml
- Add a link to Projects from index.qmd
- Keep my existing theme
- Show the plan first; wait for my OK before editing files
```

Read the plan. Say OK only if the **game is the first featured project**.

---

## Step 3 — Build (30–40 min)

1. Let Cursor create/edit the files.
2. **You** write the real text for the game card, for example:

```markdown
## Sky Catch

A canvas dodge-and-catch game I built with Cursor Agent.
I designed the rules; the agent helped write the JavaScript.

[Play Sky Catch →](games/sky-catch/index.html)
```

3. Fill in project 2 yourself (not “Project 2 placeholder”).
4. If you want a gallery, drop images into `images/projects/` and use markdown images:

```markdown
## Photo gallery

![Caption for photo one](images/projects/summer-bike.jpg)
```

5. Preview locally:

```bash
quarto preview
```

Click: Home → Projects → **Play game** → back → navbar. Fix anything broken.

---

## Step 4 — Ship to the live site (10–15 min)

```bash
git status
git add projects.qmd index.qmd _quarto.yml images/projects/
# also add any other files Cursor changed
git commit -m "Add Projects page with photo gallery"
git push
```

Then:

1. Open the **Actions** tab (if you use GitHub Actions) — wait for green.
2. Or run `quarto publish gh-pages` if that is how you deploy.
3. Hard-refresh your live URL on your phone.
4. Confirm **Projects** appears and photos load.

If images are missing live: check paths (relative to the `.qmd` file) and that image files were committed (`git status` should be clean).

---

## Step 5 — Sibling review (10 min)

Swap phones. Each person:

1. Opens the other’s **live** Projects page.
2. Says **one** specific compliment.
3. Suggests **one** small improvement (e.g. “add alt text”, “make captions shorter”, “link Project 1 to a journal entry”).

Optional: spend 5 minutes applying the sibling’s suggestion and push again.

---

## Step 6 — Short retrospective

Add 3 bullets to today’s journal entry, or create `FEATURE.md` in your site root:

```markdown
# Feature: Projects + gallery

- Built:
- AI got wrong / I fixed:
- Next idea:
```

---

## Theme change

Your Quarto site has one **main theme** in `_quarto.yml`. That theme styles **every** page (Home, Journal, and the new Projects page) unless you override it.

### What you already have

| Person | Typical setting today | Look |
|--------|----------------------|------|
| **Jiahan** | `theme: journal` | Bootswatch **journal** — lighter, “magazine” feel. The whole site (including Journal) uses these colors. |
| **Jiahe** | `theme: darkly` | Dark background, high contrast. |

If Jiahan’s site “looks different on Journal,” that is usually because:

1. The site theme is already named **`journal`** (Bootswatch), so Journal pages feel “on brand,” and/or  
2. Journal entries use headings, quotes, or images that make the same theme *feel* different from Home.

**Important:** Adding Projects does **not** automatically get a new color scheme. Projects will match Home/Journal until you change the theme or add CSS.

### Option A — Change the whole site theme (simplest)

1. Open `_quarto.yml`.
2. Find:

```yaml
format:
  html:
    theme: journal    # Jiahan example — Jiahe may see darkly
```

3. Try another Bootswatch name, for example:

| Theme | Vibe |
|-------|------|
| `flatly` | Clean, flat, bright |
| `darkly` | Dark mode |
| `minty` | Soft green |
| `cosmo` | Modern blue |
| `litera` | Simple reading |
| `journal` | Soft serif / blog (Jiahan’s current) |
| `sketchy` | Hand-drawn (fun, less “serious”) |

4. Preview:

```bash
quarto preview
```

5. Click Home → Journal → Projects. Pick the theme that still feels like *you* on all three.

Cursor prompt:

```text
Open _quarto.yml. List 3 Bootswatch themes that would fit a teen projects + photo gallery site.
Change theme: to the one I pick. Do not change navbar links.
```

### Option B — Keep site theme, tweak colors in CSS

Good if Jiahan wants to **keep** `journal` but make Projects (or the whole site) a bit more personal.

Edit `styles.css`, for example:

```css
/* Soft accent for links and buttons */
a { color: #2c6e49; }

.navbar {
  border-bottom: 3px solid #2c6e49;
}
```

Preview after every small change. Prefer tiny edits over rewriting the whole theme.

### Option C — Different look on one page only (optional / advanced)

Most pages should share one theme. If you really want Projects to differ slightly, you can set format in that page’s YAML:

```markdown
---
title: "Projects"
format:
  html:
    theme: minty
---
```

Use this sparingly — mixed themes can feel random. Prefer Option A or B for this session.

### Theme checklist for today

- [ ] I know which `theme:` is in my `_quarto.yml`
- [ ] I either **kept** it on purpose or **changed** it and re-checked Home + Journal + Projects
- [ ] Projects page does not look “broken” (readable text, visible navbar)
- [ ] Pushed the `_quarto.yml` / `styles.css` change with the Projects feature

### Jiahan-specific note

You already chose **`journal`**. For today’s feature you can:

1. **Keep `journal`** and focus on Projects + gallery content, **or**
2. **Switch** to another theme if you want the new Projects page to feel fresher — then confirm Journal still looks good.

Do not fight the theme with huge custom CSS unless the gallery layout needs a small fix.

---

## Cursor prompts if you get stuck

**Navbar not updating**

```text
Read _quarto.yml and add a navbar link to projects.qmd. Show the diff only for that file.
```

**Images 404 on GitHub Pages**

```text
My gallery images work in quarto preview but 404 on GitHub Pages.
Check image paths in projects.qmd and whether files under images/projects/ are tracked by git.
```

**Make gallery look better on phone**

```text
Improve the photo gallery layout in projects.qmd for mobile.
Keep it simple — prefer Quarto/markdown over custom JavaScript.
```

**Theme / colors**

```text
Read _quarto.yml and styles.css. Explain my current theme in one sentence.
I want [brighter | darker | greener] colors but keep the same navbar.
Suggest either a new theme: name or 5 lines of CSS — show the plan first.
```

---

## Parent coach notes

- Same structure for both kids → easier to help; content differs.
- **First card must be the game** from Part 1 — that is the point of this order.
- Gallery is optional; do not block shipping Projects on photos.
- Jiahan may already use Bootswatch `journal` — keep or change on purpose (see Theme change).
- Block scope creep (no Hugo, no APIs, no lightbox libraries unless finished early).
- Success = **live URL shows Projects + working game link**, not a perfect design.
- If someone finishes early: link projects to journal entries, theme polish, or a third card.

---

## After this session

You already shipped the game (Part 1) and featured it on Projects (Part 2). Next options:

1. Improve the gallery layout / captions (if you added one).
2. Git: branch + pull request for the next change (Week 4 skill).
3. Improve the game (new room, high score, harder levels) with Agent again.
4. Jiahe only: start optional Hugo track later — not required yet.
