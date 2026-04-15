# Deploying The Anti-Trend Report

Three options, ordered from easiest to most permanent. All three are free. None require you to run your own server.

---

## Option 1 — Netlify Drop (30 seconds, zero config)

The fastest way to get a public URL. No account required for the basic version.

1. Go to [**app.netlify.com/drop**](https://app.netlify.com/drop).
2. Drag the entire `anti-trend` folder onto the page.
3. Wait about 10 seconds.
4. Netlify gives you a random public URL like `peaceful-mendelev-a1b2c3.netlify.app`. Share it, test it, show it to people.

**Downside:** no git-based redeploys. If you edit a file, you have to drag-and-drop the folder again. Good for "is this thing working?" but not for ongoing iteration.

**Upgrade path:** create a free Netlify account, connect the GitHub repo, and Netlify will auto-deploy on every push. Same drag-and-drop site becomes continuous deployment.

---

## Option 2 — GitHub Pages (2 minutes, git-based, recommended)

The best default if you want a permanent URL that rebuilds automatically every time you push to the repo. Free. No separate account needed — it comes with GitHub.

1. On your GitHub repo page, go to **Settings → Pages** (left sidebar).
2. Under "Source", select **"Deploy from a branch"**.
3. Branch: `main`, folder: `/ (root)`.
4. Click **Save**.
5. Wait ~1 minute. GitHub will show a banner at the top of the Pages settings with your live URL, typically:
   ```
   https://YOUR-USERNAME.github.io/anti-trend/
   ```
6. Open that URL. Everything works.

**From here on, every time you `git push`, the site rebuilds automatically.** No deploy command, no SSH, no configuration. This is usually what you want.

**Custom domain:** if you own a domain (like `your-name.com`) and want to use it instead of the `github.io` URL, GitHub Pages supports custom domains via DNS CNAME records. Ask Claude to walk you through it.

---

## Option 3 — Vercel (2 minutes, git-based, faster builds)

Similar to GitHub Pages but with a slightly nicer developer experience and faster rebuilds.

1. Go to [**vercel.com**](https://vercel.com) and sign in with your GitHub account.
2. Click **New Project** → select your `anti-trend` repo.
3. Keep all the defaults. This is a static site — no framework, no build command, no root directory changes.
4. Click **Deploy**.
5. In about 20 seconds, you get a URL like `anti-trend-yourusername.vercel.app`.

Vercel also auto-deploys on every git push. The main reason to use Vercel over GitHub Pages: Vercel lets you preview pull requests on their own URLs, which is nice if you ever start collaborating with someone on the code.

---

## After deploy — verify

Whichever option you pick, open the deployed URL and check:

- [ ] **Hero animation plays** — the three words "What / Won't / Change." should rise in sequence on load
- [ ] **Iceberg diagram shows up** — big SVG with labels above and below the waterline
- [ ] **Substrate cards render** — 5 cards in a row (or 2x3 on smaller screens)
- [ ] **Timeline renders** — dots appear along 5 lanes across years 2016–2026
- [ ] **Timeline tooltips work** — hover any dot and a dark tooltip should appear with the trend name and year
- [ ] **Deep-dive photos load** — each of the 5 deep dives has a colored photo panel. If a photo doesn't load, the gradient fallback should still show — you should never see a broken image icon
- [ ] **Footer renders** — dark section at the bottom with credits

If anything doesn't work, open your browser's developer tools (right-click → Inspect → Console tab) and look for red errors. Claude Code can debug what you see there.

---

## Which should you pick?

- **First-time testing?** → Netlify Drop. Get a URL in 30 seconds, make sure the thing actually works in the wild before committing to a workflow.
- **Going to iterate on this regularly?** → GitHub Pages. It's git-native, free forever, and you never have to think about it.
- **Want nice features like PR previews?** → Vercel.

Can't decide? GitHub Pages.
