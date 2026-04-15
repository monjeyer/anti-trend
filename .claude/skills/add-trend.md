---
name: add-trend
description: Add a new trend to The Anti-Trend Report timeline. TRIGGER when the user says "add [trend name]", "include [X] on the timeline", "put [trend] in [year]", or otherwise asks to include a new cultural trend in the decade study. This skill runs the substrate diagnostic before classifying, then updates both data files (script.js TRENDS array and data/trends.json) so they stay in sync.
---

# Add Trend

When the user asks to add a trend to The Anti-Trend Report, follow this procedure exactly. Do not shortcut it.

## 1. Run the substrate diagnostic out loud

Before you classify, walk through the three questions in a brief message to the user. This is the editorial core of the project — skipping it is the failure mode the whole thing critiques.

> **What broke?** [Name the historic container for this need that degraded or lost legitimacy. If nothing broke, this isn't a substrate expression — it's a fashion cycle, and it doesn't belong on the timeline. Gently push back and ask the user whether they still want it.]
>
> **What enduring need got rerouted?** [Name the primary substrate carrying the demand. One of: Connection, Coping, Agency, Vitality, Status.]
>
> **What new container is carrying it?** [Name the new vessel — and note whether it's actually serving the need or just signaling the problem.]

End with a one-sentence substrate assignment: "Primary: Connection. Secondary: Vitality."

## 2. Sanity-check secondary substrate

Many trends have a co-driver. A few reference classifications:

- **Sweatworking** → Connection (primary) + Vitality (secondary). The third-space collapse is the structural driver. The discipline-performance is real but secondary.
- **Raw milk** → Agency (primary) + Vitality (secondary). The distrust of industrial food is the driver. The health claim is real but downstream.
- **Ozempic** → Vitality (primary). No meaningful secondary — it's almost pure Vitality substrate expression.
- **Labubu collecting** → Status (primary) + Connection (secondary). Tribal signaling is the driver; collecting communities are a real but secondary social layer.
- **Sourdough starters** → Coping (primary) + Agency (secondary). The nervous-system ritual is primary; the "I made this myself" is a real co-driver.

If the trend has a clear secondary, name it. If not, leave it out — forcing one is worse than leaving it blank.

## 3. Assess cultural weight

Default weight is `1` (omitted). Give a higher weight only when the trend is category-reshaping:

- `1.5` — reshapes an entire substrate's container landscape (e.g., Ozempic)
- `1.4` — defines the decade's tone for a substrate (e.g., Sweatworking, Great Resignation)
- `1.3` — a major moment but not reshaping (e.g., Run clubs explode, Quiet luxury emerges)
- `1.2` — meaningfully larger than a typical trend (e.g., Return of the dinner party)
- `1` (default) — normal cultural motion

Err toward the lower weight. Over-weighting floods the timeline with dominance.

## 4. Update BOTH files

Add the trend to **both** of these locations, identically. They must stay in sync.

### `script.js` — the `TRENDS` const

Find the array and add your new entry in year order within the correct substrate group. Format:

```js
{ year: 2025, sub: 'connection', name: 'Sweatworking', w: 1.4 },
```

- `year` — the year the trend peaked or became mainstream (not when it was invented)
- `sub` — lowercase substrate id (`connection`, `coping`, `agency`, `vitality`, `status`)
- `name` — display label for the tooltip
- `w` — optional weight, omit if 1

### `data/trends.json` — the canonical data mirror

Add the same trend to the `trends` array:

```json
{ "year": 2025, "substrate": "connection", "name": "Sweatworking", "weight": 1.4, "secondary": "vitality" }
```

Note the field names are slightly different (`sub` vs `substrate`, `w` vs `weight`) — preserve each file's convention. The JSON version also accepts a `secondary` field for co-drivers; script.js does not (the timeline only renders by primary substrate).

## 5. Show your work and offer to redeploy

After the edit, tell the user:
- Which year column the new dot will appear in on the timeline
- Roughly where in the lane (position depends on other trends that year — if multiple trends share a year+substrate, they're stacked with small vertical jitter)
- Whether it affects the dot count shown in the hero ("54 Trends Mapped" → will need to become the new count eventually)
- Offer to redeploy if the site is already live

---

## Worked example

User: *"Add dumbphones as a 2024 Status trend"*

Claude:

> Running the diagnostic first.
>
> **What broke?** The assumption that a smartphone is the default adult communication tool, and that continuous digital availability is a professional norm. Attention started getting defended as a finite resource, not a cost of being a functional person.
>
> **What enduring need?** Status (primary) — dumbphones signal *"I am secure enough not to need the firehose."* Reverse-status via conspicuous non-participation. Coping is a real co-driver (they're also a tool for reducing ambient anxiety from notifications), but the public-facing move is about legibility to a tribe of people who are opting out.
>
> **What new container?** Light Phone II, Nokia flip-phone revivals, "digital detox" retreats, iPhone Focus mode as aesthetic.
>
> Adding as **Status primary, Coping secondary, weight 1** — the cultural visibility is louder than the actual adoption numbers warrant, so default weight is right.
>
> [makes edits to `script.js` and `data/trends.json`]
>
> Done. It'll appear in the 2024 column on the Status lane (bronze, bottom row), between Labubu collecting and Sprinter vans. The two data files are now in sync. Want me to redeploy?
