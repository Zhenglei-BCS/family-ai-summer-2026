# Example: Forest Key (text adventure)

A tiny **choose-your-path** game: rooms, buttons, inventory (brass key), one ending.

```text
docs/examples/text-adventure/
├── index.html
├── style.css
└── game.js
```

## Publishable after local play?

**Yes.** Same as Sky Catch — static files only. Open `index.html` locally, then copy to `games/forest-key/` on a GitHub Pages site and push.

## How to win

1. Check the bushes → take the brass key  
2. (Optional) Talk to the owl for a hint  
3. At the oak door → use the brass key  
4. Read the treasure note → play again  

If you try the door without the key, that choice stays locked.

## Add to a kid’s site

```powershell
New-Item -ItemType Directory -Force -Path games | Out-Null
Copy-Item -Recurse -Force ..\family-ai-summer-2026\docs\examples\text-adventure games\forest-key
```

Live URL pattern: `https://USER.github.io/SITE/games/forest-key/`

## Agent stretch ideas

- Add a 4th room (river / cabin)
- Second ending if you kick the door twice
- Show a map of visited rooms
- Replace story text with their own adventure

Edit the `rooms` object in `game.js` — that is the whole story engine.
