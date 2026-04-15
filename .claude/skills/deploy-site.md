---
name: deploy-site
description: Deploy The Anti-Trend Report to a public URL. TRIGGER when the user says "deploy", "publish", "put this live", "push to production", "get this online", or otherwise asks how to share the site publicly. Walks through the three options in DEPLOY.md and executes the one the user picks.
---

# Deploy Site

When the user wants to deploy, reference `DEPLOY.md` and walk them through the three options. **Always ask which they prefer before executing anything.** Deployment is reversible but public — confirmation is cheap insurance.

## The three options (in order of simplicity)

### 1. Netlify Drop — 30 seconds, zero config

For first-time testing. No git required, no account required.

- User goes to https://app.netlify.com/drop
- Drags the project folder onto the page
- Gets an instant public URL like `peaceful-mendelev.netlify.app`
- Downside: no git-based redeploys, each update requires another drag-and-drop

**Best for:** *"Is this thing even working in the wild?"* first-check.

### 2. GitHub Pages — 2 minutes, git-based, free forever

The default answer if the user is going to iterate on this. Comes with GitHub, no separate account needed.

- User goes to their repo on GitHub → Settings → Pages
- Sets Source to "Deploy from a branch" → main / (root)
- Clicks Save
- Waits ~1 minute
- Gets URL `USERNAME.github.io/anti-trend/`
- Every `git push` from now on rebuilds automatically

**Best for:** ongoing iteration, permanent project URL, no maintenance.

### 3. Vercel — 2 minutes, git-based, pretty URLs

Similar to GitHub Pages but with slightly nicer developer experience.

- User goes to vercel.com, signs in with GitHub
- Clicks "New Project" → selects the repo
- Keeps all defaults (it's static, no build command)
- Clicks Deploy
- Gets URL `anti-trend-username.vercel.app`

**Best for:** users who want PR previews or a nicer URL than github.io.

## Ask before acting

The user should pick the option. Default recommendation if they can't decide: **GitHub Pages.** It's git-native, free forever, and requires zero maintenance.

Do NOT suggest SSH / rsync / custom-server deploys. Those are in the project's private history for one specific deploy target and are not relevant to forks. Keep the user in the "no server to maintain" zone.

## After deploy — verify

Once the URL is live, tell the user to open it and check:

- Hero animation plays (three words rise in sequence)
- Iceberg diagram renders as an SVG with labels above and below the waterline
- Five substrate cards appear in a row (or 2x3 on smaller screens)
- Timeline renders with dots along 5 lanes across 11 years
- Hovering any timeline dot shows a dark tooltip with the trend name, year, and substrate
- Five deep-dive sections render with photos (or gradient fallbacks if a photo URL is broken)
- Footer is dark (cream on ink) with credits

If anything breaks, ask the user to open browser devtools → Console tab and share any red errors. Most deployment failures are simple (relative path issues, missing files) and visible in the console immediately.

## What not to do

- **Do not deploy without asking first.** Even a simple redeploy is something the user should explicitly greenlight.
- **Do not run `deploy.sh` unless you know the user understands what it does.** If a `.deploy/` directory exists in the repo, it contains the original author's (Jonny Meyer's) private deploy script to their own infrastructure — irrelevant to forks and not something to invoke for someone else's project.
- **Do not recommend a build tool.** The site is deliberately static. No Next.js, no Astro, no Vite, no build step. Deployment does not require any of that — all three options above serve the raw files directly.
