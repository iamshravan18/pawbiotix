# PawBiotix — MASTER IMPLEMENTATION SPECIFICATION (Single Source of Truth)

> **Planning only. No HTML/CSS/JS/schema/metadata/image/file changes are made in this phase.**
> Foundation documents (read + incorporated, not superseded except where noted): `CONTENT-SEO-CRO-BLUEPRINT.md` (Part 1), `CONTENT-SEO-CRO-BLUEPRINT-PART2.md` (Part 2).
> This document consolidates both, resolves conflicts, fills gaps, and is detailed enough to implement from directly.
> Skills applied: seo-audit, ai-seo, schema, copywriting, marketing-psychology, content-strategy, cro, pricing, competitors, analytics, programmatic-seo, launch, ads, ad-creative, popups, lead-magnets, emails, social (channel skills scoped to §17 ecosystem, not the money page).

---

## 0. ACCURACY GATE (mandatory — blocks all product-specific implementation)

Do not write, change, or mark up any product-specific claim until verified against **official PawBiotix / ClickBank affiliate-kit sources**. Status legend: ✅ verified · ⚠️ **Requires verification before implementation** · ❌ known-unresolved.

| Detail | Current on page | Status | Note |
|---|---|---|---|
| Product **form** (liquid dropper vs powder) | powder jar | ❌ **Conflict** | 3rd-party reviews say liquid dropper w/ bacon flavor. Resolve first — drives imagery, "What Is", Dosage, How-It-Works. |
| Flavor / palatability | none stated | ⚠️ | reviews mention bacon flavor |
| Full ingredient list (13) | 13 names (from supplied assets) | ⚠️ | confirm names + order match official label |
| Strains + **CFU count** | not stated | ⚠️ | needed for Ingredients + Comparison + schema `additionalProperty` |
| Directions / dosage by weight | not stated | ⚠️ | needed for Dosage section + HowTo schema |
| Safety / contraindications | generic disclaimer only | ⚠️ | needed for Safety section |
| **Pricing** (2/3/6 bottle) | $69/$59/$49 placeholders | ⚠️ | must match live ClickBank checkout |
| **Ratings / reviews** | 4.8 / 1,024 placeholder | ⚠️ | use real data or REMOVE AggregateRating (never fabricate) |
| Guarantee | 60-day money-back | ⚠️ | confirm exact terms/window |
| Shipping times/fees | US free 5–7d; intl $15.95 10–15d | ⚠️ | confirm current policy |
| ClickBank **HopLink** | `clkbank.com/#!/` placeholder | ⚠️ | insert real affiliate HopLink on all CTAs |

**Rule:** if a detail can't be verified, mark it ⚠️ in the build ticket and either omit it or use a clearly-labeled placeholder — never invent CFU counts, strains, ratings, or vet endorsements. Accuracy > optimization.

---

## PHASE 1 — Blueprint reconciliation (gaps, duplicates, conflicts resolved)

**Conflict resolved — section order:** Part 1 §3 (Bonuses→Pricing→Comparison→Reviews) is **superseded** by Part 2 §10 (Reviews→Comparison→Pricing→Bonuses). **§4 of this doc is the authoritative order.**

**Duplicates consolidated (single home now in this doc):** keyword universe → §2; entity map → §3; intent matrix → §6; PAA → §10; per-H2 semantic depth + AI answer design → merged into §8/§11.

**Gaps this master doc newly fills:**
- Featured-snippet target **type** per section (Phase 9) — was absent. → §9
- Concrete **anchor-ID slugs** (Phase 12) — only illustrative before. → §12
- **Analytics / conversion-tracking** event plan (analytics skill) — absent. → §13b
- **Per-section content depth** guidance (Phase 17) — absent. → §17
- Roadmap re-numbered to **Phase 0–9** incl. a dedicated **Performance** phase. → §19
- Entities added that were missing: **beneficial bacteria, pet wellness, canine nutrition, microbiome (generic)**. → §3
- Navigational intent for **"official website / where to buy"** explicitly owned. → §6
- Optional **exit-intent popup + email capture / lead magnet** for non-buyers (popups/lead-magnets/emails) — scoped so they don't clutter the money page. → §13c

**No unresolved conflicts remain** beyond the product-accuracy items in §0.

---

## PHASE 2 — Complete keyword architecture (clustered)

**Primary:** `dog probiotics`.
**Secondary (commercial):** best dog probiotic · dog gut supplement · dog digestive supplement · natural dog probiotic · canine probiotic · dog microbiome support · dog gut health supplement · probiotic for dogs.

| Cluster | Keywords | Search intent | Purchase intent | Comp. | Topical relevance |
|---|---|---|---|---|---|
| **Branded – core** | PawBiotix, PawBiotix for dogs, PawBiotix dog gut health | Navigational/Transactional | High | Low | Core |
| **Branded – trust** | PawBiotix review, PawBiotix reviews, PawBiotix customer reviews, is PawBiotix legit, PawBiotix scam | Commercial Inv. | High | Low–Med | Core |
| **Branded – product** | PawBiotix ingredients, PawBiotix benefits, PawBiotix dosage, PawBiotix side effects | Informational/Commercial | Med–High | Low | Core |
| **Branded – transactional** | PawBiotix price, PawBiotix cost, PawBiotix discount, PawBiotix coupon, PawBiotix official website, PawBiotix where to buy, PawBiotix refund | Transactional/Navigational | Very High | Low | Core |
| **Category – commercial** | best dog probiotic, dog gut supplement, dog digestive supplement, natural dog probiotic, canine probiotic, dog microbiome support | Commercial Inv. | High | High | Core |
| **Long-tail commercial** | best probiotic for dogs with diarrhea, probiotic for senior dogs, probiotic for puppies, dog probiotics for gas and bloating, dog probiotics for itchy skin/allergies, vet-recommended dog probiotic | Commercial Inv. | Med–High | Med | Adjacent |
| **Informational** | do probiotics work for dogs, what do probiotics do for dogs, dog gut health, canine digestive health, dog microbiome | Informational | Low–Med | Med | Adjacent |
| **Question** | how long do dog probiotics take to work, how many CFUs should a dog probiotic have, are dog probiotics safe, can I give my dog human probiotics, when to give a dog probiotics | Informational | Low–Med | Med | Adjacent |
| **Semantic / LSI** | gut microbiome, gut flora, beneficial bacteria, prebiotics, inulin, CFU, bacterial strains, digestive enzymes, stool quality, dysbiosis, nutrient absorption, immune support, coat & skin | — | — | — | Support |
| **Voice** | "what's the best probiotic for my dog", "how do I fix my dog's loose stool", "is PawBiotix worth it" | Info/Commercial | Med | Low | Support |
| **AI-search (conversational)** | "best dog probiotic for sensitive stomach", "natural probiotic for dogs that works", "PawBiotix vs [competitor]" | Commercial Inv. | High | Med | Core/Adjacent |

Density guidance unchanged (primary 0.8–1.2%; secondaries 0.2–0.4%; entity variety > repetition; stuffing reduces AI citation ~10%).

---

## PHASE 3 — Entity graph (extended)

Full graph + placement table live in **Part 2 §1**. Additions/confirmations for completeness:

| Entity | Type | Relationship | Primary placement |
|---|---|---|---|
| Beneficial bacteria | Concept | ≈ probiotics; product delivers | How It Works, Ingredients |
| Microbiome (generic) | Concept | canine microbiome is-a | Why Gut Health |
| Canine nutrition / pet nutrition | Domain | context for product | Ingredients, References |
| Pet wellness | Domain | outcome umbrella | Benefits, Who Should Use |
| Digestive enzymes | Concept | complementary/contrast | Comparison, FAQ |
| Prebiotics | Concept | feeds probiotics | Ingredients, How It Works |
| Immune system | Concept | gut supports it | Benefits, Why Gut Health |
| Puppy / Senior dog | Audience | suitable-for | Who Should Use |

Truthful `sameAs` anchors (Knowledge Graph): Probiotic, Gut microbiota, Prebiotic, Lactobacillus, Bifidobacterium, Bacillus coagulans, Inulin, Dog. Named strains + CFU only after §0 verification.

---

## PHASE 4 — Final section order + complete H1–H4 hierarchy (AUTHORITATIVE)

Order (supersedes Part 1 §3):

| # | Section | Anchor ID | H-level |
|---|---|---|---|
| 1 | Hero | `#top` | H1 |
| 2 | What Is PawBiotix? | `#what-is-pawbiotix` | H2 |
| 3 | Why Gut Health Matters for Dogs | `#dog-gut-health` | H2 |
| 4 | How PawBiotix Works | `#how-pawbiotix-works` | H2 |
| 5 | What's Inside PawBiotix: Ingredients | `#ingredients` | H2 |
| 6 | Benefits of a Daily Dog Probiotic | `#benefits` | H2 |
| 7 | Who Should Use PawBiotix? | `#who-should-use` | H2 |
| 8 | PawBiotix Dosage & Directions | `#dosage` | H2 |
| 9 | PawBiotix Safety & Side Effects | `#safety` | H2 |
| 10 | PawBiotix Customer Reviews | `#reviews` | H2 |
| 11 | PawBiotix vs Other Dog Probiotics | `#comparison` | H2 |
| 12 | Pricing & Packages | `#pricing` | H2 |
| 13 | Free Bonuses | `#bonuses` | H2 |
| 14 | 60-Day Money-Back Guarantee | `#guarantee` | H2 |
| 15 | Limited-Availability note (scarcity) | `#availability` | H2 |
| 16 | Frequently Asked Questions | `#faq` | H2 |
| 17 | Shipping & Delivery | `#shipping` | H2 |
| 18 | Footer (EEAT: reviewer, references, disclosures) | `#disclaimer` | — |

**Hierarchy:**
- **H1 (one):** `PawBiotix Dog Probiotics — Natural Gut Health Support for Dogs`
- **H2s:** the 16 section titles above (brand-natural where it reads well; broad-intent for #3, #6, #16 per the balance rule).
- **H3s:** each ingredient; each benefit card; life-stage cards (Puppies / Adult Dogs / Senior Dogs); each package (2/3/6 bottles); each review title; each FAQ question; comparison competitor columns.
- **H4s:** How-It-Works step labels; Safety "When to talk to your vet"; Dosage "By weight" sub-labels; ingredient sub-notes (CFU/strain, once verified).

---

## PHASE 5 — Section architecture (each justified)

New/upgraded sections and their justification (implementation preserves the existing green design system, progressive disclosure, and repeated CTAs — no redesign):

| Section | New? | Justification (search + CRO + AI) | Depends on §0 |
|---|---|---|---|
| What Is PawBiotix | new | AI definition block; brand entity; "what is" intent | ⚠️ form |
| How PawBiotix Works | new | mechanism; solution-aware; AI-liftable 3-step | ⚠️ form/strains |
| Who Should Use | new | life-stage/breed long-tails; fan-out coverage | — |
| Dosage & Directions | new | "PawBiotix dosage"; HowTo rich result | ⚠️ directions |
| Safety & Side Effects | new | "side effects"/"are dog probiotics safe"; objection removal; EEAT | ⚠️ safety |
| Customer Reviews | upgrade | branded "reviews"; social proof before price | ⚠️ real reviews |
| Comparison | new | "best dog probiotics"; most-cited AI format; decision lever | ⚠️ CFU/strains |
| References | new (footer) | EEAT + AI citation sourcing | — |
| Vet reviewer byline | new | #1 EEAT gap vs all competitors | needs real DVM |

Sections kept as-is: Hero, Why Gut Health, Ingredients grid, Benefits, Bonuses, Pricing, Guarantee, Scarcity, FAQ, Shipping, Footer.

---

## PHASE 6 — Search-intent map
Full matrix in **Part 2 §5**. Confirmations: **Navigational** ("PawBiotix official website / where to buy / login") is owned by Hero + Pricing + FAQ ("Where can I buy PawBiotix — official site"). All four intents satisfied; transactional concentrated in #12–14/#17, informational front-loaded (#2–#9) for research + AI.

---

## PHASE 7 — User-journey (awareness) map
Full mapping in **Part 2 §6** (Unaware→Most-aware). Implementation implication restated: educational answer-blocks up top (problem/solution-aware), proof mid-page (product-aware), persistent + repeated CTA so most-aware users jump to `#pricing`.

---

## PHASE 8 — AI SEO per H2 (answer-first)
Per-H2 answer/evidence/CTA table is in **Part 2 §3**; AI-citation tactics in **Part 2 §8**. Build rule for every H2: **40–60 word concise answer first → expanded explanation → evidence block (cited) → bullet summary → contextual CTA.** Each section must stand alone as an extractable answer. Add `/pricing.md`, keep `llms.txt` fresh, keep AI bots allowed (already in robots.txt).

---

## PHASE 9 — Featured-snippet target per section (NEW)

| Section | Snippet type to target | Structure to build |
|---|---|---|
| What Is PawBiotix | **Definition** | 1-sentence "PawBiotix is…" + 40–60w para |
| Why Gut Health | **Paragraph** | direct answer + stat w/ source |
| How PawBiotix Works | **Numbered list** | 3 steps |
| Ingredients | **Table / List** | ingredient · role · (CFU⚠️) |
| Benefits | **Bulleted list** | 6–8 outcome bullets |
| Who Should Use | **List** | by life-stage + symptom |
| Dosage | **Table (HowTo)** | dog weight → serving⚠️ |
| Safety | **Paragraph + list** | tolerability + "talk to vet" bullets |
| Reviews | **Review snippet** | rating + quotes (real) |
| Comparison | **Comparison table** | PawBiotix vs typical probiotic |
| Pricing | **Table** | package · price · per-day · supply |
| Guarantee | **Paragraph** | 60-day terms |
| FAQ | **FAQ / Q&A** | question-form H3 + 40–60w answers |

---

## PHASE 10 — PAA strategy
De-duplicated question→single-location map is in **Part 2 §4** (16 questions, each placed once). Schema `FAQPage` mirrors only FAQ-block questions to avoid duplicate markup. No changes needed; treat Part 2 §4 as final.

---

## PHASE 11 — Complete keyword mapping (per section)

| Section | Primary keyword | Secondary keywords | Semantic keywords | Entities | Search intent |
|---|---|---|---|---|---|
| Hero / H1 | dog probiotics | PawBiotix, natural dog probiotic | gut health, daily | PawBiotix, probiotic | Transactional/Nav |
| What Is | PawBiotix | dog probiotic supplement | canine, natural, all ages | PawBiotix, dietary supplement | Informational/Nav |
| Why Gut Health | dog gut health | canine digestive health | microbiome, immunity, dysbiosis | gut microbiota, immune system | Informational |
| How It Works | canine probiotics | how probiotics work for dogs | colonize, balance, beneficial bacteria | Lactobacillus, Bifidobacterium | Informational |
| Ingredients | dog digestive supplement | dog probiotic ingredients, CFU | prebiotic, inulin, superfood, potency | Bacillus coagulans, chicory, kelp | Commercial Inv. |
| Benefits | dog digestive support | probiotic benefits for dogs | stool, gas, coat, energy, absorption | nutrient absorption, immune system | Commercial Inv. |
| Who Should Use | probiotic for puppies / senior dogs | dog probiotics by breed | life stage, sensitive stomach | puppies, senior dogs, breeds | Commercial/Info |
| Dosage | PawBiotix dosage | dog probiotic dosage, directions | serving by weight, daily | (product) | Info/Transactional |
| Safety | PawBiotix side effects | are dog probiotics safe | tolerability, contraindication, vet | veterinary medicine | Informational |
| Reviews | PawBiotix reviews | PawBiotix customer reviews | results, testimonial, before/after | Review, AggregateRating | Commercial Inv./Nav |
| Comparison | best dog probiotic | dog probiotic alternatives, vs enzymes | strain count, CFU, form | digestive enzymes, category | Commercial Inv. |
| Pricing | PawBiotix price | PawBiotix cost/discount, buy dog probiotics | package, per-day, supply | Offer, ClickBank | Transactional |
| Bonuses | free dog probiotic bonuses | — | value stack, guide | (bonus guides) | Transactional |
| Guarantee | PawBiotix refund | money-back guarantee | 60-day, risk-free | MerchantReturnPolicy | Transactional |
| FAQ | dog probiotics questions | is PawBiotix legit | (question KWs) | FAQPage | Info/Commercial/Nav |
| Shipping | PawBiotix shipping | delivery time | free shipping, working days | (policy) | Transactional/Nav |

---

## PHASE 12 — Internal anchor architecture (NEW — concrete)

**Canonical anchor IDs** (final; reuse existing where present): `#top`, `#what-is-pawbiotix`, `#dog-gut-health`, `#how-pawbiotix-works`, `#ingredients`, `#benefits`, `#who-should-use`, `#dosage`, `#safety`, `#reviews`, `#comparison`, `#pricing`, `#bonuses`, `#guarantee`, `#availability`, `#faq`, `#shipping`, `#references`, `#disclaimer`.

**Header jump-nav (keep concise, ~5 items):** Ingredients (`#ingredients`) · Benefits (`#benefits`) · Reviews (`#reviews`) · Pricing (`#pricing`) · FAQ (`#faq`) + primary "Order Now" → `#pricing`.

**In-content descriptive anchors (examples):** "see the full ingredient list" → `#ingredients`; "compare PawBiotix vs other probiotics" → `#comparison`; "read the dosage guide" → `#dosage`; "check the 60-day guarantee" → `#guarantee`; "read real reviews" → `#reviews`; primary CTAs → `#pricing` (label consistent: "Order Now").

**Buy anchor:** keep `#pricing` as the single buy target (avoid a separate `#buy` to prevent duplicate scroll targets). Ensure `scroll-padding-top` accounts for sticky header (already set).

---

## PHASE 13 — CRO strategy

### 13a. Funnel-stage → section map (persuasion architecture)
| Funnel stage | Section(s) | Primary psychology lever |
|---|---|---|
| Curiosity | Hero headline + stars | Novelty, mimetic desire |
| Problem | Why Gut Health | Loss aversion, problem-agitation |
| Education | How It Works, Ingredients | Authority, clarity |
| Trust | Safety, References, vet byline | Authority, EEAT |
| Authority | cited studies, CFU/strains | Expertise |
| Social proof | Reviews, "42,000+ owners" | Bandwagon, availability heuristic |
| Comparison | vs Other Dog Probiotics | Contrast effect, decoy |
| Risk reversal | Guarantee | Regret aversion, zero-risk |
| Offer | Pricing + Bonuses | Anchoring, value stack, zero-price effect |
| Scarcity | Availability note | Scarcity (only if genuine) |
| CTA | repeated `#pricing` buttons | Default effect, reduced friction |

### 13b. Analytics / conversion tracking (analytics skill — NEW)
- **GTM** container (already present on reference) → GA4. Define events on existing `[data-cta]` hooks: `cta_click` (params: `location` = nav/hero/pricing/guarantee/sticky, `package` = 2/3/6).
- **Scroll-depth** (25/50/75/100%) and **section_view** (IntersectionObserver) for `#pricing`, `#reviews`, `#comparison`.
- **Outbound checkout click** → `begin_checkout` (to ClickBank HopLink); ClickBank sale confirmation via its postback/pixel for `purchase`.
- **FAQ open**, **accordion**, **video (if added)** as engagement events.
- Consent: add a GDPR/CCPA consent banner + GTM consent mode before firing non-essential tags. (Compliance requirement.)
- North-star: checkout-click-through rate and ClickBank conversion; guardrail: bounce/scroll on new informational sections (ensure they don't push the offer too far — mitigated by repeated CTAs + sticky bar).

### 13c. Optional non-buyer capture (popups / lead-magnets / emails — scoped, off the critical path)
- **Exit-intent popup** (desktop) / scroll-triggered (mobile) offering a free lead magnet: "Free Dog Gut-Health Checklist" → email capture. Keep frequency-capped; never block content; dismissible; respects reduced-motion. (popup-cro)
- **Lead magnet**: the same "Healthy Dog Gut Guide" concept already used as a bonus → gate a lite version for email. (lead-magnets)
- **Email sequence** for captured non-buyers: education → social proof → objection handling → offer/discount → last-call. (emails)
- These are **additive channel assets**, not money-page redesigns; implement in Phase 8 ecosystem, A/B tested so they don't depress primary conversion.

All money-page CRO items remain copy/placement only — no layout or visual-identity change.

---

## PHASE 14 — EEAT strategy
Core plan in **Part 1 §11**. Consolidated requirements:
- **Reviewer placement:** "Reviewed by Dr. ___, DVM — [date]" near top of editorial sections + in footer; `reviewedBy` in schema. **Requires a real, credentialed reviewer — do not fabricate.**
- **Veterinary/medical references:** `#references` section linking NIH/PMC, MDPI 2025, AKC (outbound, `rel` as appropriate). Cite inline where claims are made.
- **Editorial + review policy:** short "How we research / How we handle reviews" statement (footer or `/editorial-policy` page) — transparency signal.
- **Last updated:** visible date near top of informational content + footer; quarterly refresh cadence.
- **Evidence blocks:** each mechanism/safety claim paired with a source.
- **Transparency:** brand identity, contact, affiliate disclosure (present), FDA/vet disclaimer (present).
- **Author/reviewer pages:** create `/about` + reviewer bio page (future) for entity/authorship signals.

---

## PHASE 15 — Schema strategy (truthful only)
Detailed plan in **Part 1 §9**. Final target `@graph`: Organization (+sameAs, ContactPoint), WebSite (+SearchAction), WebPage (+`reviewedBy` once real), BreadcrumbList, Product (+ `additionalProperty` CFU/strains ⚠️, `audience` Dog, `sku`/`gtin` if available), Offer/AggregateOffer (price ⚠️ synced to ClickBank; `hasMerchantReturnPolicy`), FAQPage (expanded, mirrors on-page FAQ only), HowTo (Dosage ⚠️), Review (real only). **Never fabricate ratings, reviews, medical claims, or vet endorsements.** If real ratings/reviews aren't available, omit `AggregateRating`/`Review` entirely. Validate in Rich Results Test (renders JS) pre-launch.

---

## PHASE 16 — Information-gain analysis
Full comparison table in **Part 2 §9**. Net: add vet byline, CFU, named clinical strains, cited studies, dosage-by-weight, safety profile, life-stage guidance, honest comparison, real reviews, verified form/flavor, and a "how to choose a dog probiotic" checklist. Do **not** duplicate generic "what is a probiotic" content PetMD/AKC already own — link out and go deeper on PawBiotix-specific specifics (the unique information gain a brand-owned page can provide).

---

## PHASE 17 — Content depth per section (NEW — intent-driven, not word-count-driven)

| Section | Depth target | Rationale |
|---|---|---|
| Hero | Minimal, punchy | Most-aware conversion; clarity > length |
| What Is | 60–120w + definition | Enough to define + AI-lift; not a blog post |
| Why Gut Health | Moderate (2–3 short paras + 1 stat) | Problem framing + 1 citation; don't out-write PetMD |
| How It Works | Moderate (3 steps + short intro) | Mechanism clarity for solution-aware |
| Ingredients | Deep (all items + role + CFU⚠️) | Commercial proof; competitors list strains/CFU — match + exceed with specificity |
| Benefits | Concise (6–8 bullets) | Scannable outcomes |
| Who Should Use | Moderate (3 life-stage cards + symptoms) | Long-tail capture without bloat |
| Dosage | Deep-ish (weight table + steps)⚠️ | HowTo eligibility; high-value branded query |
| Safety | Moderate (para + bullets + vet note) | Objection removal + EEAT; be precise, not padded |
| Reviews | Moderate (rating + 4–8 real quotes) | Proof; real data only |
| Comparison | Deep (table + short verdict) | Highest-competition commercial term + most-cited AI format |
| Pricing/Bonuses/Guarantee | Concise, high-clarity | Decision zone; reduce cognitive load |
| FAQ | Deep (12–15 Q&As, 40–60w each) | PAA + AI + objections |
| Shipping | Minimal (table) | Logistics transparency |

Principle: depth follows **search intent × competition × commercial value × information gain** — go deep where it differentiates (Ingredients, Comparison, Dosage, FAQ), stay lean in the decision zone.

---

## PHASE 18 — Future content ecosystem
Full 5-pillar hub-and-spoke map + build order + interlink rules in **Part 2 §2** (and Part 1 §10/§12). Summary: Pillars = Dog Gut Health · Dog Probiotics · PawBiotix (brand) · Life-stage/Breed · Pet Nutrition; build revenue-closest first (Probiotics + PawBiotix), ~25–30 interlinked pieces over 2–3 quarters; every spoke links to its pillar + money page; pursue third-party presence (Reddit/Quora/YouTube/review sites/editorial roundups) because recommendation ≠ citation.

---

## PHASE 19 — Definitive implementation roadmap (Phase 0–9)

| Phase | Name | Scope | Gate/Depends |
|---|---|---|---|
| **0** | **Accuracy verification** | Confirm every §0 item from official/affiliate sources; resolve powder-vs-liquid; obtain real reviews/prices/HopLink | **Blocks all below** |
| **1** | **SEO (on-page)** | Apply final section order (§4), anchor IDs (§12), H1–H4, titles/meta (already strong), keyword mapping (§11), PAA H3s (§10) | Phase 0 |
| **2** | **Content expansion** | Build What Is, How It Works, Who For, Dosage, Safety, Comparison, Reviews with answer-first blocks (§8) + depth (§17); preserve design | Phase 0–1 |
| **3** | **EEAT** | Real DVM reviewer byline + `reviewedBy`; `#references`; editorial/review policy; last-updated; author/about page | real vet |
| **4** | **Schema** | Expand FAQPage; add HowTo, Review, AggregateOffer, `additionalProperty`; sync Offer price; validate Rich Results | Phase 2–3 |
| **5** | **AI SEO** | 40–60w blocks, comparison table, checklists, `/pricing.md`, refresh `llms.txt`, cited evidence, freshness stamps | Phase 2–4 |
| **6** | **CRO** | Per-day pricing, social-proof lines, risk-reversal, CTA verb consistency, trust-near-price; real HopLink; A/B test | Phase 0 (HopLink) |
| **7** | **Performance** | Re-verify LCP/INP/CLS after content additions; lazy-load new imagery; ensure new sections don't add render-blocking or CLS; re-check Lighthouse | Phase 2 |
| **8** | **Blog ecosystem** | Build §18 pillars/spokes; internal links to money page; consent-gated popup + lead magnet + email sequence (§13c); off-page presence | ongoing |
| **9** | **Final QA + measure** | Rich Results Test, PageSpeed, WCAG 2.2 AA re-audit, link check; GA4 + `[data-cta]` events (§13b); monthly AI-visibility tracking (ChatGPT/Perplexity/AI Overviews) | all |

Sequencing logic: **0 gates everything** (accuracy + legal). 1–2 unlock ranking/AI with highest ROI. 3–5 layer trust + structured/AI signals on verified data. 6 monetizes. 7 protects Core Web Vitals after content grows. 8 compounds authority. 9 verifies + measures continuously.

---

## FINAL DELIVERABLE — index of the single source of truth
Final section order → §4 · H1–H4 → §4 · Keyword architecture → §2 · Keyword mapping → §11 · Entity map → §3 (+Part 2 §1) · Search-intent map → §6 (+Part 2 §5) · AI SEO → §8 (+Part 2 §3/§8) · PAA → §10 (Part 2 §4) · Featured snippets → §9 · Internal anchors → §12 · Schema → §15 (Part 1 §9) · CRO → §13 · EEAT → §14 (Part 1 §11) · Topical authority → §18 (Part 2 §2) · Information gain → §16 (Part 2 §9) · Content depth → §17 · Future ecosystem → §18 · Roadmap → §19 · Accuracy gate → §0.

**Status: planning complete. No code changed. Implementation may proceed from this document beginning at Phase 0 (accuracy verification), then Phase 1.**
