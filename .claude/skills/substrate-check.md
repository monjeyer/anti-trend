---
name: substrate-check
description: Classify a candidate trend against the five enduring substrates (Connection, Coping, Agency, Vitality, Status) using the "what broke" diagnostic. TRIGGER when the user says "does [X] fit?", "what substrate is [Y]?", "classify [Z]", "where does [trend] go?", or asks you to think through whether a trend belongs on the timeline.
---

# Substrate Check

When the user wants to classify a trend, run the three-question diagnostic in order. **Do not shortcut to aesthetic pattern-matching.** That is the exact failure mode this project critiques. If you find yourself about to say "this feels like Status because it's about signaling," stop and ask "what broke?" first.

## The diagnostic (in order — do not skip, do not reorder)

### 1. What broke?

What historic container for this need has degraded, disappeared, or lost legitimacy? This is the most important question, because it points at the structural driver rather than the surface form.

**If nothing broke, the "trend" is probably a fashion cycle, not a substrate expression.** Gently tell the user and ask whether they still want to track it.

Reference examples:

- **Sweatworking**: third spaces (Oldenburg collapse) + alcohol-based networking (Gen Z drinks ~30% less than millennials at same age)
- **Ozempic**: the willpower frame on weight loss; the assumption that metabolism was a moral problem
- **Raw milk / seed oil discourse**: trust in the industrial food system; faith that federal agencies are optimizing for citizen health
- **Quiet luxury**: universal-legibility logo-as-status (the shared mass-media playing field fragmented in the 2010s)
- **Cottagecore**: the post-war promise that modernization would keep feeling like progress
- **Cold plunge culture**: the assumption that exercise alone would deliver the body you wanted

### 2. What enduring need got rerouted?

Which of the five substrates is carrying the demand the broken container used to serve?

| Substrate | What it is |
|---|---|
| **Connection** | Belonging, intimacy, being witnessed by another human being |
| **Coping** | Metabolizing uncertainty, anxiety, overwhelm — calming the nervous system |
| **Agency** | Authorship over one's own life; acting on the world rather than being acted upon |
| **Vitality** | Feeling embodied, energized, alive in a body that works |
| **Status** | Legibility to one's tribe — signaling who you are without having to explain |

### 3. What new container is carrying it?

What's the new vessel? Then, an important follow-up: is it actually *serving* the need, or just *signaling* the problem?

This distinction matters a lot. Cottagecore often signals the need for Agency without delivering any real agency — it's aesthetic nostalgia, not a life change. Sweatworking genuinely delivers Connection (you remember the conversations; you leave with actual friendships) in a way a happy-hour network often doesn't. The "signaling vs. serving" distinction separates trends that will stick from trends that will cycle out once a louder aesthetic arrives.

## Primary + secondary substrate

Trends usually map to a primary substrate and one or two secondary co-drivers. Always name both when both are present — the single-substrate simplification is crude and misses the interaction effects.

- **Sweatworking** → Connection (primary) + Vitality (secondary)
- **Raw milk** → Agency (primary) + Vitality (secondary)
- **Sourdough starters** → Coping (primary) + Agency (secondary)
- **Ozempic** → Vitality (primary, no meaningful secondary)
- **Labubu collecting** → Status (primary) + Connection (secondary)
- **Cottagecore** → Coping (primary) + Agency (secondary, signaling-only)

If a trend has no clear secondary, leave it out. Forcing one is worse than leaving it blank.

## The methodology principle

**Ask "what broke?" before you ask "what does this signal?"**

The broken-thing lens catches the structural driver — the force that created demand for the new trend. The signaling lens catches the surface form — the aesthetic the market is currently wrapping the demand in. They are not the same, and they do not always point at the same substrate.

The sweatworking case is the canonical example of the difference. Surface lens (discipline performance) → Status. Structural lens (third-space collapse + drinking decline) → Connection. The structural lens is right. That one misclassification, repeated across 50 trends, is how conventional trend forecasting produces reports that describe the weather without ever mentioning the climate.

## Output format

When you classify a trend, end with a clear summary:

> **[Trend Name]** — Primary: **[Substrate]**. Secondary: [Substrate or "none"]. Weight: [1 / 1.2 / 1.3 / 1.4 / 1.5]. [One-sentence reasoning.]
>
> Do you want me to add it to the timeline? (I can do it via the `add-trend` skill.)
