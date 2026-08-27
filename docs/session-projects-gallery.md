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

---

## Parent coach notes

- Same feature for both kids → easier to help; content differs.
- Block scope creep (no Hugo, no APIs, no lightbox libraries unless finished early).
- Success = **live URL shows the page**, not a perfect design.
- If someone finishes early: link each project to a journal entry, or add a third project card.

---

## After this session

Next options:

1. Improve the gallery layout / captions.
2. Git: branch + pull request for the next change (Week 4 skill).
3. Jiahe only: start optional Hugo track later — not today.
