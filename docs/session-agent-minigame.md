# Session: Build a small interactive game with an AI agent

**Goal:** Use **Cursor Agent** (not just chat autocomplete) to ship a **tiny playable game** on your site.

**Time:** about 90–120 minutes (can split across two days)  
**Who:** Jiahe (16) and Jiahan (14)  
**Best after:** Projects page + gallery is live  
**Where:** your own `jiahe-site` / `jiahan-site` repo

---

## Why use an *agent* for this?

| Mode | Good for |
|------|----------|
| Inline Copilot / Tab | One function, small CSS |
| Chat (“explain this”) | Learning concepts |
| **Agent** | Multi-file feature: HTML + CSS + JS, then fix bugs from errors |

A game needs several files and a few rounds of “it broke → fix it.” That is agent territory — **you** stay in charge of the design and of accepting diffs.

---

## Pick one game (do not invent a new genre)

Choose **one** from this list. Same session structure for both kids; story/art differs.

| Game | Difficulty | Why it works with agents |
|------|------------|---------------------------|
| **A. Clicker / cookie-style** | Easiest | One button, a score, maybe an upgrade |
| **B. Text adventure** (3–5 rooms) | Easy–medium | Mostly buttons + story text; great for writers |
| **C. Number / word guess** | Easy | Input + feedback loop |
| **D. Simple canvas dodge / catch** | Harder | Needs a game loop — good stretch for Jiahe |

**Recommendation**

- **Jiahan (14):** A or B  
- **Jiahe (16):** B or D (or C if short on time)

**Out of scope today:** multiplayer, accounts, physics engines, Unity, downloading big assets.

---

## Definition of done

- [ ] Playable in the browser (you can win or “game over” somehow)
- [ ] Lives on your site, e.g. `games/my-game.qmd` or `games/clicker.html`
- [ ] Linked from **Projects** and/or navbar
- [ ] You can explain in one sentence what the agent wrote vs what you decided
- [ ] Pushed and working on the **live** URL
- [ ] Short note: one bug the agent introduced and how you caught it

---

## Parent setup (5 min before kids start)

1. Cursor → Agent mode (not Ask-only).
2. Agree: **plan first, then edit** — kids must type “OK” before big changes.
3. Rule on the whiteboard: *Never paste API keys. Never `rm -rf`. Reject mystery diffs.*

---

## Step 1 — Design on paper (10–15 min)

Fill this in **before** opening Agent:

| Prompt | Your answer |
|--------|-------------|
| Game name | |
| Goal (how do you win?) | |
| Player action (click / type / arrow keys) | |
| What appears on screen | |
| One stretch feature if early | e.g. high score in `localStorage` |

Example (text adventure):

- Rooms: Forest → Cave → Treasure  
- Actions: Go north / Open chest / Talk to owl  
- Win: find the key  

---

## Step 2 — Agent brief (plan only)

Paste into Agent. Edit brackets.

```text
You are helping me build a SMALL browser game for my Quarto personal site.

Constraints:
- One game only: [clicker | text adventure | guess number | canvas catch]
- Keep it to a few files under games/[short-name]/
- Prefer plain HTML + CSS + JavaScript (or one .qmd that includes HTML+JS)
- Mobile-friendly enough to play on a phone
- No frameworks (no React, no Phaser) unless I ask
- No external paid APIs

My design:
- Name:
- Goal:
- Controls:
- Screens / rooms:

First: write a short PLAN (file list + how the game loop / clicks work).
Do NOT edit files until I say OK.
```

**Kid job:** read the plan. Cross out anything extra (sound libraries, particle effects, login).

Say: `OK — implement the plan. Stop after the first playable version.`

---

## Step 3 — First playable version (30–40 min)

1. Let the agent create files.
2. Open the game locally:

```bash
# if HTML file:
# open games/clicker/index.html in the browser
# or
quarto preview
```

3. Play it yourself. Write down bugs:

```text
- Clicking Upgrade does nothing
- Score resets on refresh (OK for v1 / not OK if we wanted save)
- Buttons too small on phone
```

4. Feed bugs back to the agent **one at a time**:

```text
Bug: the Upgrade button does not increase score.
Expected: each click adds +1 to cookies-per-second.
Do not refactor unrelated files. Show the diff.
```

**Teaching moment:** agents often “fix” things by rewriting everything. Reject huge rewrites; ask for a **minimal** patch.

---

## Step 4 — Hook it to your Quarto site (15 min)

Options (pick one):

**A. Quarto page that embeds the game**

`games/clicker.qmd`:

```markdown
---
title: "Cookie Clicker (tiny)"
---

My summer mini-game. Built with Cursor Agent — I designed the rules.

```{=html}
<iframe src="clicker/index.html" width="100%" height="520" style="border:1px solid #ccc;border-radius:8px;"></iframe>
```
```

**B. Link out to a static HTML file** in `games/clicker/index.html` (simpler debugging).

Then:

- Add **Games** or link under **Projects**
- Update navbar in `_quarto.yml` if you want a top-level link

Agent prompt:

```text
Link my game into the Quarto site: add games/clicker.qmd (or a Projects card)
and a navbar or Projects link. Keep theme unchanged. Plan first.
```

---

## Step 5 — Ship (10 min)

```bash
git add games/ projects.qmd _quarto.yml
git commit -m "Add mini-game built with Cursor Agent"
git push
```

Play on the **phone** live URL. Touch targets matter — if buttons are tiny, that is the next agent bug ticket.

---

## Step 6 — Retro: “Who did what?” (10 min)

Write in the journal or `games/README.md`:

```markdown
# Mini-game retrospective

- Game:
- I decided (rules, story, art direction):
- Agent wrote (files / features):
- Bug agent caused:
- How I caught it:
- Would I trust Agent on a bigger game? Why / why not?
```

This is the real AI lesson — not the cookie counter.

---

## Agent habits to practice

| Do | Don't |
|----|-------|
| Plan → OK → implement | “Build me a cool game” with no rules |
| One bug per message | Paste a stack of 10 issues at once |
| Read every diff | Accept All without scrolling |
| Playtest yourself | Assume green = done |
| Ask “explain this function in 3 sentences” | Ship code you cannot describe |

---

## Stretch (only if the game already works)

- **Jiahan:** second ending in the text adventure; or a reset button + sound-free animation  
- **Jiahe:** `localStorage` high score; simple canvas enemy; keyboard controls  
- Either: sibling plays the other’s game and files **one** bug as an Agent ticket  

---

## If Agent goes off the rails

```text
Stop. Revert the last change to games/clicker/app.js only.
Explain what went wrong in 2 sentences.
Then apply the smallest fix for: [bug].
```

Or use git:

```bash
git checkout -- games/clicker/app.js
```

---

## Parent coach notes

- Agent session ≠ unsupervised coding. Sit nearby for the first plan acceptance.
- Prefer **text adventure** if someone freezes at JavaScript — story is the product; JS is buttons + state.
- Cap scope: 3 rooms or 1 clicker loop. Expanding is next weekend.
- Success = **playable on live site** + honest retrospective, not polished art.
- Tie back to Projects: add a project card “Mini-game (Agent-built)” with link.

---

## Related ideas

- Curriculum Tier 2: [PROJECT-IDEAS.md](../PROJECT-IDEAS.md) — text adventure  
- After this: Week 4 git branch/PR for a game improvement  
- Jiahe later: same agent workflow for a Hugo experiment — still not required here  

---

## Quick start checklist

1. [ ] Paper design filled  
2. [ ] Agent plan approved  
3. [ ] Playable locally  
4. [ ] Linked from site  
5. [ ] Live on phone  
6. [ ] Retrospective written  
