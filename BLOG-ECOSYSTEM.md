# PawBiotix — Blog Ecosystem & Internal-Linking Hub Strategy

> Planning artifact. **No thin stub pages are created** — publishing empty/near-empty article pages would be thin content and hurt SEO (and create broken-link risk). Build these as full articles when ready; the homepage is already structured to act as the commercial hub they link into.

## Why not stub them now
Google's helpful-content system penalizes thin, low-value pages site-wide. Ten empty stubs would drag down the money page. So this ecosystem is documented and ready to build; the homepage links **out** only to live authority sources today, and will link **in** to these posts as each is published.

## The homepage is the commercial hub
The live homepage (`/`) already covers: what dog probiotics are, gut health, how probiotics work (diagrams), ingredients, benefits, who-it-helps, buying guide, comparison, why-choose, pricing, guarantee, how-to-order, 22-question FAQ, references. Each future post targets an informational query and links **up** to the relevant homepage section + the pricing/`#pricing` CTA.

## Cluster (10 articles) → primary keyword → homepage link target

| # | Article (working title) | Primary keyword | Links into homepage section |
|---|---|---|---|
| 1 | Best Dog Probiotics: How to Choose (Buyer's Guide) | best dog probiotics | `#choosing`, `#comparison`, `#pricing` |
| 2 | Dog Gut Health: A Complete Guide | dog gut health | `#dog-gut-health`, `#how-it-works` |
| 3 | Can Dogs Take Probiotics? What Owners Should Know | can dogs take probiotics | `#what-are-dog-probiotics`, `#safety` |
| 4 | Dog Digestive Problems: Causes & When to Act | dog digestive problems | `#dog-gut-health`, `#benefits` |
| 5 | Puppy Gut Health: Building a Healthy Microbiome | puppy gut health | `#who-should-use` |
| 6 | Senior Dog Digestion: Supporting an Aging Gut | senior dog digestion | `#who-should-use` |
| 7 | The Dog Gut Microbiome, Explained | dog gut microbiome | `#dog-gut-health`, `#how-it-works` |
| 8 | Prebiotics vs Probiotics for Dogs | dog prebiotics vs probiotics | `#what-are-dog-probiotics`, `#ingredients` |
| 9 | Natural Dog Digestive Support: Ingredients That Help | natural dog digestive support | `#ingredients`, `#why-choose` |
| 10 | Signs of Poor Gut Health in Dogs | signs of poor gut health in dogs | `#dog-gut-health`, `#what-to-expect` |

## Hub-and-spoke architecture
```
                 [ / ]  Homepage = commercial hub (PawBiotix)
                   ▲  ▲  ▲
      links up ────┘  │  └──── links up
   ┌───────────────┐  │  ┌────────────────┐
   │ Pillar: Gut   │  │  │ Pillar: Probiotics│
   │ Health (2,7,10)│ │  │ (1,3,8,9)        │
   └───────┬───────┘  │  └───────┬──────────┘
           │   ┌───────┴───────┐  │
           └──▶│ Life stage    │◀─┘   (5 puppy, 6 senior)
               │ (4,5,6)       │
               └───────────────┘
```
- Every **spoke** links to: (a) its pillar peers, (b) the homepage hub, and (c) the `#pricing` CTA once, with descriptive anchor text (e.g., "compare PawBiotix packages").
- **Pillars** link laterally to each other.
- Homepage adds a "Dog gut health guides" links block **only after** ≥3 posts are live (avoids linking to nonexistent pages).

## Build order (revenue-first)
1 (best dog probiotics) → 3 (can dogs take) → 2 (gut health) → 8 (pre vs pro) → 9 (natural support) → 4/10 (problems/signs) → 5/6 (life-stage) → 7 (microbiome).

## URL + on-page conventions
- URLs: `/blog/<slug>/` (e.g., `/blog/best-dog-probiotics/`).
- Each article: single H1, answer-first intro (40–60w), evidence + citations, FAQ block with schema, 1 contextual CTA to `#pricing` (HopLink on the homepage), and a "last updated" date.
- Add each published post to `sitemap.xml` and interlink; keep accuracy gate (no fabricated product specifics).

## Status
Documented and ready. No article pages created yet (intentionally, to avoid thin content). Homepage already optimized as the hub.
