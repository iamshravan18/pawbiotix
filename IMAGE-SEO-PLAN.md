# PawBiotix — Image SEO & Asset Plan

**Primary keyword:** dog probiotics · **Secondary:** dog gut health supplement, canine probiotic, dog digestive supplement, natural dog supplement, dog microbiome support.

## Important scope note (why there are no scraped brand images here)
This plan intentionally does **not** include images downloaded from `getpawbiotix.com`. The product renders, ingredient photography, bonus e-covers, dog photos, guarantee seals and brand illustrations on that site are the vendor's copyrighted creative work. Being reachable over HTTP is not a license to re-host them in a clone — and the reference even ships `robots: noimageindex`, signalling it does not want its images copied. So every asset below is an **original SVG placeholder** dimensioned to the reference's slots, plus a complete, drop-in-ready metadata spec.

**Legitimate ways to get real imagery (any of these keeps the layout unchanged):**
1. **ClickBank vendor affiliate kit** — this is a ClickBank offer; vendors almost always provide an affiliate resource/"swipe" page with *licensed* banners, product shots and covers you're permitted to use. Request access from the vendor.
2. **Licensed stock** (dog photos, ingredient photography) from Shutterstock/Adobe Stock/iStock.
3. **Commission or AI-generate original** product/ingredient renders you own outright.

Drop any of those into the filenames below and the page renders identically — dimensions are already reserved.

---

## Directory structure (created)
```
assets/images/
├── hero/         pawbiotix-dog-probiotic-jar.(svg→webp)
├── ingredients/  <11 ingredient files — see table>
├── pricing/      single-bottle, 6-bottle-package
├── bonuses/      bonus-1..3 covers
├── guarantee/    60-day-money-back-guarantee
├── icons/        logo, logo-white, favicon, benefit icons
├── backgrounds/  (CSS gradients — no raster needed)
├── badges/       best-value (CSS-rendered — optional raster)
└── social/       pawbiotix-dog-probiotics-og
```

---

## Complete image inventory + SEO metadata

Legend: **W×H** = intrinsic px to reserve · **fmt** = recommended production format.

### Hero
| Slot | Filename | W×H | fmt | ALT | Title | Caption |
|---|---|---|---|---|---|---|
| Product jar | `hero/pawbiotix-dog-probiotic-jar.webp` | 360×420 | WebP (alpha) | "PawBiotix dog probiotic powder jar with five gut-friendly strains, a 60-day supply" | "PawBiotix dog probiotics" | "One daily scoop supports your dog's gut health." |

### Ingredients (extract/commission one per strain; sizes match the card icon slot 62×62, or 300×300 for photos)
| Slot | Filename | W×H | fmt | ALT |
|---|---|---|---|---|
| Bacillus coagulans | `ingredients/bacillus-coagulans-dog-probiotic.webp` | 300×300 | WebP | "Bacillus coagulans, a probiotic strain in PawBiotix for canine gut health" |
| Chicory root (inulin) | `ingredients/chicory-root-prebiotic-fiber-for-dogs.webp` | 300×300 | WebP | "Chicory root prebiotic fiber that feeds probiotics in a dog's gut" |
| L-Glutamine | `ingredients/l-glutamine-dog-gut-lining-support.webp` | 300×300 | WebP | "L-glutamine to support the gut lining in a dog digestive supplement" |
| Turmeric | `ingredients/turmeric-root-dog-health.webp` | 300×300 | WebP | "Turmeric root for a dog's digestive and immune health" |
| Fennel | `ingredients/fennel-seed-dog-digestive-support.webp` | 300×300 | WebP | "Fennel seed to ease gas and support dog digestion" |
| Flax seed | `ingredients/flax-seed-omega-for-dogs.webp` | 300×300 | WebP | "Flax seed providing omega fatty acids for dog skin and coat" |
| Beef liver | `ingredients/beef-liver-natural-dog-nutrition.webp` | 300×300 | WebP | "Beef liver for palatable, natural dog nutrition" |
| Organic kelp | `ingredients/organic-kelp-dog-mineral-support.webp` | 300×300 | WebP | "Organic kelp providing minerals in a natural dog supplement" |
| Chlorella | `ingredients/chlorella-detox-support-for-dogs.webp` | 300×300 | WebP | "Chlorella for detox and gut support in dogs" |
| Copper chlorophyllin | `ingredients/copper-chlorophyllin-dog-gut-health.webp` | 300×300 | WebP | "Copper chlorophyllin supporting dog gut health and freshness" |
| Hydrolyzed fish collagen | `ingredients/hydrolyzed-fish-collagen-for-dogs.webp` | 300×300 | WebP | "Hydrolyzed fish collagen for a dog's joints, skin and gut" |

### Benefits (icons — keep as inline SVG for performance; no HTTP requests)
Benefit icons are inline `<svg>` in the markup (firmer stools, less gas, calmer tummy, immune support, softer coat, steady energy, any age, simple to give). Inline SVG = zero requests, sharp at any DPI, and `aria-hidden="true"`. No raster needed. If you must use raster: 56×56 WebP, `alt=""` (decorative).

### Bonuses
| Slot | Filename | W×H | fmt | ALT |
|---|---|---|---|---|
| Bonus 1 cover | `bonuses/healthy-dog-gut-guide-bonus.webp` | 400×520 | WebP | "The Healthy Dog Gut Guide — free bonus with PawBiotix dog probiotics" |
| Bonus 2 cover | `bonuses/home-remedies-for-dogs-bonus.webp` | 400×520 | WebP | "Home Remedies for Common Dog Issues — free PawBiotix bonus guide" |
| Bonus 3 cover | `bonuses/happy-active-dog-handbook-bonus.webp` | 400×520 | WebP | "The Happy, Active Dog Handbook — free bonus with a 6-bottle order" |

### Pricing
| Slot | Filename | W×H | fmt | ALT |
|---|---|---|---|---|
| 2-bottle | `pricing/pawbiotix-dog-probiotic-2-bottle-package.webp` | 214×250 | WebP | "PawBiotix 2-bottle dog probiotic package, 120-day supply" |
| 6-bottle (best value) | `pricing/pawbiotix-dog-probiotic-6-bottle-package.webp` | 200×143 | WebP | "PawBiotix 6-bottle dog probiotic package with three free bonus guides and free shipping" |
| 3-bottle | `pricing/pawbiotix-dog-probiotic-3-bottle-package.webp` | 214×250 | WebP | "PawBiotix 3-bottle dog probiotic package, 180-day supply" |
| Best-value ribbon | CSS-rendered (`.price-box__badge`) | 100×100 | — | decorative |
| Card payment icons | inline SVG (Visa/Mastercard/Amex) | 40×26 | — | `aria-hidden` |

### Guarantee
| Slot | Filename | W×H | fmt | ALT |
|---|---|---|---|---|
| 60-day seal | `guarantee/pawbiotix-60-day-money-back-guarantee.webp` | 220×220 | WebP (alpha) | "60-day 100% money-back guarantee seal for PawBiotix dog probiotics" |

### Icons / Footer / Social
| Slot | Filename | W×H | fmt | ALT |
|---|---|---|---|---|
| Header logo | `icons/pawbiotix-logo-white.svg` | 168×37 | SVG | "PawBiotix" |
| Footer logo | `icons/pawbiotix-logo-white.svg` | 168×37 | SVG | "PawBiotix" |
| Favicon | `icons/pawbiotix-favicon.svg` | 32×32 | SVG | — |
| OG/Twitter share | `social/pawbiotix-dog-probiotics-og.svg` | 1200×630 | WebP/PNG | "PawBiotix natural dog probiotics for gut health" |

---

## Responsive image / `srcset` recommendations
For each raster asset, generate 1×/2× (and a mobile width) and serve with `srcset`/`sizes`. Templates:

**Hero jar** (displayed ≤360px wide):
```html
<img src="/assets/images/hero/pawbiotix-dog-probiotic-jar-360.webp"
     srcset="/assets/images/hero/pawbiotix-dog-probiotic-jar-360.webp 360w,
             /assets/images/hero/pawbiotix-dog-probiotic-jar-720.webp 720w"
     sizes="(max-width: 992px) 82vw, 360px"
     width="360" height="420" alt="PawBiotix dog probiotic powder jar with five gut-friendly strains, a 60-day supply"
     fetchpriority="high" decoding="async">
```
**Ingredient/bonus/pricing (below fold)** — add `loading="lazy"`:
```html
<img src="/assets/images/pricing/pawbiotix-dog-probiotic-6-bottle-package-200.webp"
     srcset="…-200.webp 200w, …-400.webp 400w"
     sizes="(max-width: 992px) 60vw, 200px"
     width="200" height="143" loading="lazy" decoding="async" alt="…">
```
Recommended widths per group: hero 360/720 · ingredients 150/300 · pricing 214/428 · bonuses 260/400/520 · guarantee 220/440 · OG single 1200×630.

---

## Image optimization report (what to apply)
1. **Format:** WebP for all photos/renders (AVIF as an optional `<picture>` source for ~20% more savings); keep **SVG** for logo/icons/badges (already resolution-independent, tiny).
2. **Transparency:** preserve alpha on jar, bottles, seal, bonus covers (WebP supports alpha).
3. **Compression:** WebP quality ~80 (photos) / ~90 (product renders on flat bg); target < 60 KB per pricing/ingredient image, < 120 KB hero.
4. **Dimensions:** always ship explicit `width`/`height` (already reserved in the layout) → **CLS ≈ 0**.
5. **Loading:** hero eager + `fetchpriority="high"`; everything below the fold `loading="lazy"` + `decoding="async"` (already wired in `index.html`).
6. **Responsive:** generate the widths above; use `srcset`/`sizes` so mobile never downloads desktop-scale bytes.
7. **Filenames:** all lowercase, hyphenated, keyword-first, no generic `imgN` names (done above).
8. **Alt text:** descriptive and natural, primary/secondary keyword used once where truthful, never stuffed; decorative graphics use `alt=""` + `aria-hidden`.
9. **`<picture>` pattern** for AVIF→WebP→fallback:
```html
<picture>
  <source type="image/avif" srcset="…-360.avif 360w, …-720.avif 720w" sizes="…">
  <source type="image/webp" srcset="…-360.webp 360w, …-720.webp 720w" sizes="…">
  <img src="…-360.webp" width="360" height="420" alt="…" decoding="async">
</picture>
```

## Placeholder-swap checklist (zero layout change)
- [ ] Obtain licensed/original assets (vendor kit / stock / original).
- [ ] Export at the intrinsic W×H listed, plus 2× and mobile widths.
- [ ] Convert to WebP/AVIF; keep alpha where noted.
- [ ] Save under the SEO filenames above.
- [ ] Update the `src`/`srcset` in `index.html` (dimensions already match — no CSS edits needed).
- [ ] Re-run Lighthouse to confirm Performance/CLS unaffected.
