# The Anti-Trend Report

**A ten-year study of the five enduring human needs that drove every cultural trend of the last decade.**

A collaboration between **Jonny Meyer** and **Michael Aroney**. Prototype v0.1, April 2026.

---

## The thesis

Trend forecasting describes surface. Substrates describe structure. Instead of asking *what's next*, we ask *what's old* — what human needs have been driving behavior so reliably that every trend of the last decade can be traced back to one of them.

Trends are the weather. Substrates are the climate.

## The five substrates

1. **Connection** — belonging, intimacy, being witnessed
2. **Coping** — metabolizing uncertainty and overwhelm
3. **Agency** — authorship over one's own life
4. **Vitality** — feeling embodied, energized, alive
5. **Status** — legibility to one's tribe

## The methodology

For every trend, ask three questions in order:

1. **What broke?** What historic container for this need has degraded or lost legitimacy?
2. **What enduring need got rerouted?** Which substrate is carrying the demand?
3. **What new container is carrying it?** Is it serving the need, or just signaling the problem?

Only then ask what the trend looks like. Aesthetic comes last.

---

## Repo structure

```
anti-trend/
├── index.html         # The site
├── style.css          # All styling
├── script.js          # Timeline rendering, scroll reveal, data
├── substrates.yaml    # Substrate taxonomy (data mirror)
├── data/
│   └── trends.json    # 50+ trends mapped 2016—2026
├── deploy.sh          # Rsync to meyer.land/anti-trend
└── README.md
```

## Local development

No build step. It's a single HTML file with linked CSS and JS. Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

```bash
./deploy.sh
```

Rsyncs to `meyer.land/anti-trend` via the Digital Ocean droplet. Requires `~/.ssh/meyerland_new`.

## What this is not (yet)

- Not automated. The trend corpus is hand-curated from the DMs between Jonny and Michael. Future quarterly updates will use `mvanhorn/last30days-skill` as the collection engine, passing results through the five-substrate filter via a synthesis step.
- Not backtested rigorously. The 2016—2026 trend list is an editorial first pass. A proper retrospective would pull Google Trends, Reddit activity, and TikTok/Instagram engagement data for each trend and compare dates.
- Not a client pitch. This is a public marketing stunt — a research-led demonstration of an anti-trend thesis.

## Origin

This project began on April 13, 2026, in a Google Chat DM between Jonny Meyer and Michael Aroney, the day after a trend session that had left both of them dissatisfied with how trend reports get made. It reached working-prototype state the next evening. The foundational move was Aroney's observation that "all new trends are just old trends in past clothes" and his push to identify five to seven "enduring ways that things change." That list became the substrates.

The prompt underneath everything remains the one from Jeff Bezos: *what's not going to change in the next ten years?*

## License

MIT. Take what's useful.
