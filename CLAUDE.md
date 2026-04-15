# CLAUDE.md — The Anti-Trend Report

You are working on **The Anti-Trend Report**, a static web experience that studies five enduring human needs — *substrates* — and how they expressed themselves through a decade of cultural trends (2016–2026).

This file is auto-loaded by Claude Code when the user opens this project. It gives you project context, the substrate taxonomy, the file map, and guidance for the most common tasks the user will ask for. **Read it in full before your first edit.**

---

## The user

The user is learning Claude Code by working on this project. Assume **not an expert coder**. When the user asks for something, prefer:

- **Plain language over jargon.** Say "the file that controls colors" not "the CSS custom-properties block in :root."
- **Small, explained edits over sprawling rewrites.** Make one clear change, tell them what you did, let them verify before you keep going.
- **Confirming before destructive changes.** Do not delete files, rewrite data, or run deploy commands without naming them first and waiting for an okay.
- **Showing your work.** If you modify `substrates.yaml`, also say which other files needed to change to stay in sync (script.js, index.html, style.css).

When in doubt: ask, don't guess.

---

## The thesis (read this first)

Trend forecasting describes surface. This project describes structure. Instead of asking *what's next*, it asks *what's old* — what human needs have been driving behavior so reliably that every trend of the last decade can be traced back to one of them.

**Trends are the weather. Substrates are the climate.**

The opening quote is from Jeff Bezos, 2012:

> I very frequently get the question: *"What's going to change in the next ten years?"* I almost never get the question: *"What's not going to change in the next ten years?"* And I submit to you that that second question is actually the more important of the two.

That question is the whole project.

---

## The five substrates

| # | Name | Tagline | Color |
|---|---|---|---|
| 01 | **Connection** | How we find each other when the old containers break | `#C65F3E` terracotta |
| 02 | **Coping** | Nervous-system infrastructure for an overwhelming century | `#2E4373` indigo |
| 03 | **Agency** | Authorship over a life the systems can't be trusted with | `#A14A26` rust |
| 04 | **Vitality** | The body as the thing that has to still work | `#4A6B3E` forest |
| 05 | **Status** | Becoming legible to your tribe without having to explain yourself | `#8F6E24` bronze |

These five are the editorial core. They were arrived at after considering six candidates and dropping "Presence" (too recent) and "Beauty" / "Ease" (too broad). "Vitality" was deliberately chosen over "Health" because it names the felt need rather than the outcome domain. **Do not rename or drop a substrate casually.** If the user asks, confirm they're sure and walk through the implications.

Substrate data is duplicated across four files for clarity. They MUST stay in sync:

1. `substrates.yaml` — canonical data, the source of truth
2. `script.js` — `SUBSTRATES` const (drives the timeline SVG rendering)
3. `index.html` — hardcoded in the substrate card grid and the 5 deep-dive sections
4. `style.css` — CSS variables `--connection`, `--coping`, `--agency`, `--vitality`, `--status`

If the user changes a substrate color, **update all four places.** A mismatch will leave the page visibly inconsistent.

---

## The methodology (do not skip this)

For every trend, the diagnostic runs in this exact order:

1. **What broke?** What historic container for this need has degraded, disappeared, or lost legitimacy? If no container broke, the "trend" is probably a fashion cycle, not a substrate expression, and doesn't belong here.
2. **What enduring need got rerouted?** Which of the five substrates is carrying the demand the broken container used to serve?
3. **What new container is carrying it?** What's the new vessel — and is it actually *serving* the need, or just *signaling* the problem? (Cottagecore often signals the Agency need without delivering any real agency. Worth naming when this is happening.)

**Aesthetic comes last.** This is the defining editorial move of the project. If the user asks you to classify a trend and you skip the three questions and jump straight to pattern-matching on aesthetic, you are doing exactly what conventional trend forecasting does — which is the thing this project critiques.

### A worked example

**Sweatworking.** Aesthetic lens says: discipline-signaling, status-performance → classify as *Status*. The substrate lens says: third spaces collapsed (Oldenburg), drinking declined (~30% less in Gen Z vs. millennials at the same age), so the bedrock need for belonging routed itself through a new container → classify as *Connection*, with *Vitality* as a secondary co-driver.

The substrate lens is correct. The aesthetic lens is a failure mode.

---

## File map

| File | What it contains | When you'd edit it |
|---|---|---|
| `index.html` | Hero, thesis, iceberg SVG, 5 substrate cards, timeline container, 5 deep dives, method section, footer | Copy changes, pull quotes, trend lists in deep dives, method text |
| `style.css` | Cream palette (`--bg: #FAF5ED`), serif display (Fraunces), sans body (Inter), substrate color variables, section layouts, responsive breakpoints | Colors, typography, spacing, responsive tweaks |
| `script.js` | Substrate definitions (`SUBSTRATES` const), trend definitions (`TRENDS` array), timeline SVG rendering, scroll reveal IntersectionObserver, nav scroll state | Adding/removing trends, modifying substrate metadata |
| `substrates.yaml` | Canonical substrate taxonomy — names, taglines, definitions, broken/new containers, pull quotes, colors | When substrate metadata changes |
| `data/trends.json` | Canonical trends list (2016–2026, 50+ items) mirrored from the `TRENDS` array in script.js | Adding/removing trends (must stay in sync with script.js) |
| `README.md` | Public-facing repo readme — concept, methodology, structure | Rarely |
| `HANDOVER.md` | Welcome + how-to for new collaborators | When onboarding flow changes |
| `DEPLOY.md` | GitHub Pages / Netlify / Vercel instructions | When a new deploy target is added |
| `CLAUDE.md` | This file. | When the project architecture or conventions change. |
| `.claude/skills/` | Project-specific Claude Code skills: add-trend, substrate-check, deploy-site | When you need a new repeatable task automation |

---

## Common tasks

### Adding a trend

The user will say something like *"add raw honey as a 2024 Agency trend"* or *"can you include dumbphones?"* When they do:

1. If they didn't specify a substrate, run the three-question diagnostic out loud before classifying.
2. If they did specify a substrate, sanity-check it. If it feels wrong, gently push back with the substrate lens.
3. Update **both** `script.js` (the `TRENDS` array) and `data/trends.json`. They must stay in sync. The loose-coupling is intentional (script.js is the runtime source, json is the data mirror), but you still have to mirror manually.
4. If the trend is category-reshaping, give it a `weight` between 1.2 and 1.5 so its dot is larger in the timeline. Ozempic is `1.5`, Sweatworking is `1.4`, Great Resignation is `1.4`. Default is `1` (omitted).
5. If it has a clear secondary substrate, note it in `trends.json` with a `secondary` field.
6. After the edit, tell the user which year column on the timeline the new dot will appear in and offer to redeploy if the site is live.

The `.claude/skills/add-trend.md` skill encodes this procedure. Use it.

### Modifying a substrate

This is a 4-file edit (substrates.yaml, script.js, index.html, style.css). Walk through each file one at a time so the user can follow. Do **not** parallelize the edits — it's less auditable for someone learning the codebase.

### Changing copy

All editable text lives in `index.html`. The lead paragraphs, the force-dynamics diagrams, the pull quotes, and the trend lists are all hardcoded there. Let the user propose the exact wording, then make the edit.

### Deploying

Three options live in `DEPLOY.md`: GitHub Pages, Netlify, Vercel. Use the `.claude/skills/deploy-site.md` skill. Do **not** suggest SSH-to-server approaches unless the user explicitly asks — keep deployment in the "no server to maintain" zone.

---

## What NOT to do

- **Don't add dependencies.** This is intentionally a single HTML + single CSS + single JS project. No npm, no build step, no framework. If the user asks for React / Vue / Next.js / Astro, that's a major direction change — confirm it twice before agreeing.
- **Don't touch `.deploy/`** if it exists in the local working copy. That directory is gitignored and holds the original author's private deploy scripts to their own infrastructure. It will not be in forks and is not relevant to anyone else.
- **Don't rewrite the substrates casually.** See the "do not rename or drop a substrate casually" note above.
- **Don't use the Edit tool on `.claude/skills/*.md` without reading them first.** Standard read-before-edit hygiene.
- **Don't skip the three-question diagnostic.** Classifying by aesthetic is the failure mode the whole project is critiquing. If you find yourself about to say "this trend feels like Status," stop and ask "what broke?" first.

---

## Editorial voice

When you write new copy for the site — new deep-dive paragraphs, new taglines, new pull quotes — match the existing voice. It is:

- **Confident.** No hedging, no "it might be argued that."
- **Literary.** Serif-y, slight pleasure in a well-turned sentence.
- **Quietly annoyed with conventional trend reporting.** That's the project's POV.
- **Dry humor.** No exclamation points. No emojis. No "!!" enthusiasm.
- **Warm but not friendly.** This isn't a personal blog; it's a report.

Read the Connection and Vitality deep dives in `index.html` for the reference voice. Match it.

---

## Origin (for context)

This project began in a Google Chat DM between Jonny Meyer and Michael Aroney in April 2026, the day after a trend session that left both of them dissatisfied with how trend reports get made. It reached working-prototype state the next evening. The foundational move was Aroney's observation that *"all new trends are just old trends in past clothes"* and his push to identify five to seven "enduring ways that things change." That list became the substrates.

The prompt underneath everything remains the one from Jeff Bezos: *what's not going to change in the next ten years?*
