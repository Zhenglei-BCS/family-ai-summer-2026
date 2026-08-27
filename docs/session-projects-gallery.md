# Session: Projects page + photo gallery

**Goal:** Add one new feature to your live site — a **Projects** page that includes a small **photo gallery**.

**Time:** about 60–90 minutes  
**Who:** Jiahe (16) and Jiahan (14)  
**Where:** work in **your own** `jiahe-site` / `jiahan-site` repo (not the family curriculum folder, unless that is still how you deploy)

---

## Definition of done

By the end of this session you should have:

- [ ] A new page: `projects.qmd` (or `projects/index.qmd`)
- [ ] At least **2 project cards** (title + 1–2 sentences + optional link)
- [ ] A **photo gallery** section with **3–5 images** and short captions
- [ ] Link in the **navbar** and on the **home page**
- [ ] Theme choice checked (keep or change — see [Theme change](#theme-change))
- [ ] Changes **pushed** and visible on your **live** GitHub Pages URL
- [ ] One note: what AI got wrong (or what you changed)

---

## Before you start (5 min)

1. Open your site repo in Cursor.
2. Check remotes — `origin` should be **your** GitHub user:

```bash
git remote -v
```

3. Confirm the live site loads on your phone.
4. Create a folder for images if you do not have one:

```text
images/
  projects/     ← put gallery photos here
```

**Photo rules**

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
| Project 1 | name + one sentence |
| Project 2 | name + one sentence |
| Optional project 3 | … |
| Gallery theme | e.g. “summer hobbies”, “builds”, “trips” |
| 3–5 photo filenames | … |

Jiahan ideas: games, sports, crafts, pets, summer outings.  
Jiahe ideas: coding experiments, school projects, music, sports, portfolio pieces.

---

## Step 2 — Ask Cursor for a plan (5 min)

Paste this prompt (edit the bits in brackets):

```text
I have a Quarto website. Help me add a Projects page with a small photo gallery.

Requirements:
- Create projects.qmd at the site root (or projects/index.qmd if that fits our layout better)
- Include 2–3 project sections with headings and short descriptions I will fill in
- Include a Photo gallery section that shows images from images/projects/ with captions
- Add the page to the navbar in _quarto.yml
- Add a link to Projects from index.qmd
- Keep my existing theme and style
- Show me the plan first; wait for my OK before editing files
```

Read the plan. Say OK only if it matches your sketch.

---

## Step 3 — Build (30–40 min)

1. Let Cursor create/edit the files.
2. **You** write the real project text — do not leave “Project 1 placeholder” forever.
3. Drop your images into `images/projects/`.
4. In the gallery, use markdown images, for example:

```markdown
## Photo gallery

![Caption for photo one](images/projects/summer-bike.jpg)

![Caption for photo two](images/projects/lego-build.png)
```

Or ask Cursor for a simple Quarto-friendly gallery layout (columns / grid) that still works on phones.

5. Preview locally:

```bash
quarto preview
```

Click: Home → Projects → each image → navbar link. Fix anything broken.

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

- Same feature for both kids → easier to help; content differs.
- Jiahan already on Bootswatch `journal` — validate whether they keep it or switch; don’t assume Journal needs a separate theme file.
- Block scope creep (no Hugo, no APIs, no lightbox libraries unless finished early).
- Success = **live URL shows the page**, not a perfect design.
- If someone finishes early: link each project to a journal entry, theme polish, or a third project card.

---

## After this session

Next options:

1. Improve the gallery layout / captions.
2. Git: branch + pull request for the next change (Week 4 skill).
3. **Build a tiny game with Cursor Agent:** [session-agent-minigame.md](session-agent-minigame.md)
4. Jiahe only: start optional Hugo track later — not required yet.
