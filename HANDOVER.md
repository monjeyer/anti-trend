# Handover → Michael Aroney

Hey Michael,

This is the working prototype we've been talking about. It's yours. Fork it, make it your own, have fun breaking it.

The thinking behind it — the DM thread origin, the five substrates, the whole "what won't change" frame — you already know all of that. This doc is the practical stuff: how to open it, how to customize it, how to get it online, and how to use Claude Code on it as a way of actually learning Claude Code.

---

## What you're getting

A single-page static website. No database, no server, no build step. Just HTML, CSS, JavaScript, and some data files. You can open `index.html` in any browser right now without installing anything.

The editorial content — the five substrates, the 54 mapped trends, the three-question methodology, the Bezos thesis frame — is hand-written and reflects what we worked out together. You should feel ownership over it and disagree with any of it you want.

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
4. Claude will automatically read `CLAUDE.md` and learn the project structure, the substrate taxonomy, and how to help you edit without breaking things.

That's it. No installs, no dependencies, no package managers.

---

## How to edit it without writing code

This is the part I think will be genuinely useful for you as a way of learning Claude Code. Almost every common edit can be done in plain English. Just ask:

- *"Add raw honey to the timeline as an Agency trend in 2024."*
- *"What substrate does pickleball fit under? Walk me through the diagnostic."*
- *"Change the pull quote for Status — I want something punchier."*
- *"The tagline for Coping doesn't feel right. Can you rewrite it?"*
- *"Deploy this to Netlify."*
- *"I want to change the color of Vitality from forest green to olive. What files need to change?"*

Three project-specific skills are installed in `.claude/skills/` to make this reliable:

- **`add-trend`** — handles adding a new trend to the timeline. It runs the three-question diagnostic first, classifies the substrate, assigns a weight, and updates both data files at once so they stay in sync.
- **`substrate-check`** — runs any candidate trend through the "what broke?" diagnostic before assigning a substrate. This is the part that's easy to skip and gets the classification wrong if you do.
- **`deploy-site`** — walks through the three deploy options and executes whichever one you pick.

You don't have to invoke the skills explicitly — Claude Code will reach for them when it detects the pattern. Just speak plainly.

---

## How to customize the substantive stuff

| If you want to... | Edit this file |
|---|---|
| Change a substrate name, color, or description | `substrates.yaml` + `script.js` + `index.html` + `style.css` (4 places, but Claude will keep them in sync for you) |
| Add or remove a trend | `script.js` (TRENDS array) + `data/trends.json` — both, same update |
| Rewrite the thesis essay, the method section, or any body copy | `index.html` |
| Tweak colors, typography, spacing, layout | `style.css` |
| Add a new substrate (go from 5 to 6) | This is a big edit. Ask Claude to walk you through it — it's ~4 files and adding a new deep-dive section. |

The canonical source of truth for the substrate taxonomy is `substrates.yaml`. If you ever get confused about what a substrate is supposed to be, look there first.

---

## How to deploy

See `DEPLOY.md`. The three options, in order of simplicity:

1. **Netlify Drop** — drag the entire folder onto [app.netlify.com/drop](https://app.netlify.com/drop). You get a public URL in 30 seconds. No account required for the basic version. Good for "is this thing live?" testing.
2. **GitHub Pages** — free, git-based, auto-deploys every time you push. Two clicks in your repo's Settings → Pages tab. URL will look like `yourusername.github.io/anti-trend/`.
3. **Vercel** — similar to GitHub Pages but prettier URLs and faster builds. Sign in with GitHub, select the repo, click Deploy.

All three are free. None of them require you to maintain a server, pay for hosting, or learn devops. Pick whichever feels least scary and upgrade later if you want.

---

## A note about the code

Jonny did not write this code. Claude Code did, in one evening, based on the editorial frame we developed together over a few days of DM back-and-forth. This means:

- **The code is reasonable but opinionated.** Claude picked the typography (Fraunces + Inter), the editorial palette, the iceberg metaphor, the three-question diagnostic, and the specific quote selections. You can push back on any of these and rewrite. The design is not sacred.
- **The substance is ours.** The five substrates, the "what broke?" methodology, the Bezos frame, the sweatworking-as-Connection read, the choice of Vitality over Health — all of that came out of our conversation. That part you should feel full ownership over.
- **The 54-trend classification in `data/trends.json` is Jonny's first pass.** You will disagree with several of the assignments. That disagreement is exactly what makes this a collaboration instead of a one-person report. Go open the file and start arguing with it.

---

## What's missing / what's next

1. **Automated quarterly updates.** The plan is to wire `mvanhorn/last30days-skill` into a pipeline that runs each quarter, pulls the freshest trend expressions across Reddit/X/TikTok/Instagram/etc., passes them through a substrate-classifier synthesis step, and appends them to the timeline. Not built yet. The Claude Code skill `add-trend` is the manual version of what that pipeline will automate.
2. **Backtest.** We wanted to test whether the substrates actually retrodict — whether you could have predicted, in 2016, that the substrate lens would catch the 2026 trends. That requires historical data we haven't pulled yet.
3. **Photo curation.** The deep-dive images use Unsplash placeholders that may not all be the right photos. Fallback gradients keep the design intact if any break. You'll want to pick photos with real pathos at some point.
4. **A better title.** "What Won't Change" is fine as a working title, but it may not be the final frame. Something we should keep thinking about.
5. **More trends.** 54 is a starter set. We should probably be at 100+ for the decade to feel fully mapped.

---

## The question underneath

Just to restate it, because it's the whole thing:

> I very frequently get the question: *"What's going to change in the next ten years?"* I almost never get the question: *"What's not going to change in the next ten years?"*
>
> — Jeff Bezos, 2012

You already know this. But go build the thing that does the second question. That's the job.

Have fun,

— Jonny (via Claude)
