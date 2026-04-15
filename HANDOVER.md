# Handover → Michael Aroney

Hey Michael — this is Jonny's Claude writing to you.

Jonny asked me to build this prototype last night while he was out at dinner, and to package everything this morning in a shape you can fork cleanly. He specifically asked me not to impersonate his voice in the onboarding documents, so this letter is written by me, on his direction. The editorial substance of the project came out of your back-and-forth with him over the last few days of DMs; the build, the docs, and this handover letter came from me.

A few things up front before the practical stuff:

- **The substance is yours and Jonny's.** The five substrates, the "what broke?" methodology, the choice of Vitality over Health, the sweatworking-as-Connection read, the Bezos thesis frame, the Lagerfeld pull quote in the Status section — all of that came out of your DM thread with Jonny. I executed on the editorial architecture you two worked out.
- **The code and design are mine.** Typography (Fraunces + Inter), the editorial palette, the iceberg metaphor as the hero visual, the three-question diagram layouts, the SVG timeline, the specific body paragraphs in the deep dives, four of the five pull quotes, and the first-pass 54-trend classification in `data/trends.json` — those are my opinionated choices. Push back on any of them. Nothing about the design is sacred.
- **Jonny intends this as a handover, not a delivery.** He said explicitly that he wants you to fork it and make it your own. From the point you click Fork, it's your repo, your edits, your direction. Jonny's contribution from then on is as a collaborator, not an owner.

---

## What you're getting

A single-page static website. No database, no server, no build step. Just HTML, CSS, JavaScript, and some data files. You can open `index.html` in any browser right now without installing anything.

The editorial content — the five substrates, the 54 mapped trends, the three-question methodology, the Bezos thesis frame — is the product of several days of DMs between you and Jonny, plus my synthesis layer on top. You should feel full ownership over the substance and disagree with any of it you want.

---

## How to get it on your machine

1. On the GitHub repo page, click **Fork** in the top right. You now have your own copy at `github.com/YOUR-USERNAME/anti-trend`.
2. In your terminal, clone it:
   ```bash
   git clone https://github.com/YOUR-USERNAME/anti-trend.git
   cd anti-trend
   ```
3. Open the directory in Claude Code:
   ```bash
   claude
   ```
4. Your Claude will automatically read `CLAUDE.md` and learn the project structure, the substrate taxonomy, and how to help you edit without breaking things. It's the same mechanism that's letting me write this letter with full context on how the codebase fits together.

That's it. No installs, no dependencies, no package managers.

---

## How to edit it without writing code

This is the part that should be genuinely useful for you as a way of learning Claude Code. Almost every common edit on this project can be done in plain English. Just ask your Claude:

- *"Add raw honey to the timeline as an Agency trend in 2024."*
- *"What substrate does pickleball fit under? Walk me through the diagnostic."*
- *"Change the pull quote for Status — I want something punchier."*
- *"The tagline for Coping doesn't feel right. Can you rewrite it?"*
- *"Deploy this to Netlify."*
- *"I want to change the color of Vitality from forest green to olive. What files need to change?"*

Three project-specific skills are installed in `.claude/skills/` to make this reliable:

- **`add-trend`** — handles adding a new trend to the timeline. It runs the three-question diagnostic first, classifies the substrate, assigns a cultural weight, and updates both data files at once so they stay in sync.
- **`substrate-check`** — runs any candidate trend through the "what broke?" diagnostic before assigning a substrate. This is the step that's easy to skip and that produces misclassifications when it's skipped.
- **`deploy-site`** — walks through the three deploy options and executes whichever one you pick.

You don't have to invoke the skills explicitly — Claude Code will reach for them when it detects the pattern. Speak plainly to your Claude the way Jonny speaks to me.

---

## How to customize the substantive stuff

| If you want to... | Edit this file |
|---|---|
| Change a substrate name, color, or description | `substrates.yaml` + `script.js` + `index.html` + `style.css` (4 places, but your Claude will keep them in sync if you ask) |
| Add or remove a trend | `script.js` (TRENDS array) + `data/trends.json` — both, same update |
| Rewrite the thesis essay, the method section, or any body copy | `index.html` |
| Tweak colors, typography, spacing, layout | `style.css` |
| Add a new substrate (go from 5 to 6) | This is a bigger edit — ~4 files plus a new deep-dive section. Ask your Claude to walk you through it step by step. |

The canonical source of truth for the substrate taxonomy is `substrates.yaml`. If you ever get confused about what a substrate is supposed to be, look there first.

---

## How to deploy

See `DEPLOY.md`. Three options, in order of simplicity:

1. **Netlify Drop** — drag the entire folder onto [app.netlify.com/drop](https://app.netlify.com/drop). You get a public URL in 30 seconds. No account required for the basic version. Good for *"is this thing live?"* testing.
2. **GitHub Pages** — free, git-based, auto-deploys every time you push. Two clicks in your repo's Settings → Pages tab. URL will look like `yourusername.github.io/anti-trend/`.
3. **Vercel** — similar to GitHub Pages but with prettier URLs and slightly faster builds. Sign in with GitHub, select the repo, click Deploy.

All three are free. None of them require you to maintain a server, pay for hosting, or learn devops. Pick whichever feels least scary and upgrade later if you want.

---

## A note about what's hand-written vs. generated

Because it matters for how you'll relate to this work, here is a clean breakdown of what came from where.

**From your DM thread with Jonny (the substance — yours and his):**
- The five substrates and their definitions
- The "ask what broke" diagnostic as an editorial methodology
- The anti-trend framing
- The Vitality-over-Health call
- The Bezos quote as the thesis anchor
- The Lagerfeld quote in the Status section (directly from your DM to Jonny)
- The decision to do a 10-year retrospective rather than just a last-30-days feed
- The rough intuition that sweatworking was about Connection rather than Status

**From me (the build layer):**
- The specific 54-trend classification in `data/trends.json`
- The typography and color system
- The iceberg metaphor as the hero visual
- The SVG timeline and force-dynamics diagrams
- Four of the five pull quotes (Connection, Coping, Agency, Vitality — Lagerfeld was yours)
- The specific paragraphs of body copy in the deep dives
- The Claude Code skills architecture
- The HTML, CSS, and JavaScript

You will want to argue with several things in the first category — the 54-trend classification especially. That argument is the work. Open `data/trends.json` and start dragging trends between substrates. The second category is more opinionated than definitive — the design can be rewritten freely without losing anything editorial.

---

## What's missing / what's next

1. **Automated quarterly updates.** Jonny's plan is to wire `mvanhorn/last30days-skill` into a pipeline that runs each quarter, pulls the freshest trend expressions across Reddit, X, TikTok, Instagram, and the rest, passes them through a substrate-classifier synthesis step, and appends them to the timeline. Not built yet. The `add-trend` skill in `.claude/skills/` is the manual version of what that pipeline will automate.
2. **Backtest.** Jonny wanted to test whether the substrates actually retrodict — whether, from a 2016 vantage point, the substrate lens would have caught the 2026 trends. That requires historical data nobody has pulled yet.
3. **Photo curation.** The deep-dive images use Unsplash placeholder URLs I picked by guessing at photo IDs from memory. Some will load, some probably will not. Fallback gradients keep the design intact if any break. Someone (probably you) will want to pick photos with real pathos at some point.
4. **A better title.** "What Won't Change" is a working title, not the final frame. Worth thinking about.
5. **More trends.** 54 is a starter set. The decade should probably be at 100+ to feel fully mapped.

---

## The question underneath

Jonny asked me to restate this at the end because it's the whole project:

> I very frequently get the question: *"What's going to change in the next ten years?"* I almost never get the question: *"What's not going to change in the next ten years?"*
>
> — Jeff Bezos, 2012

You already know this. Go build the thing that does the second question. That's the job.

---

— Claude (Jonny's Claude), writing on Jonny's direction. April 2026.

If you end up working on this in Claude Code, feel free to ignore the introductory framing in this letter and just treat `CLAUDE.md` as your starting point — that's the file your Claude will actually read. This letter is for you, the human.
