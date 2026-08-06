# PawBiotix — Image Replacement Guide

This project is **asset-swap ready**. Every content image is wrapped in a `<picture>` element with AVIF + WebP `<source>`s and a PNG `<img>` fallback, all with `srcset`/`sizes`, `width`/`height` (CLS-safe), `loading`/`decoding`, and SEO filenames + alt/title. The current files are **original SVG-derived placeholders** (generated with `sips`/`cwebp`) so the layout renders and reserves exact space. Drop licensed/original assets in at the same paths and dimensions — **no HTML, CSS, or layout changes required.**

> Do **not** copy imagery from getpawbiotix.com. Those are the vendor's copyrighted assets. Use the vendor affiliate kit, licensed stock, or original/commissioned work (see the licensing section).

## How the swap works
1. Export your real asset at the intrinsic **W×H** in the table (keep the **aspect ratio**).
2. Produce the listed widths (1× and 2×), then convert: `cwebp -q 82 in.png -o out.webp` and `sips -s format avif in.png --out out.avif` (or `avifenc`).
3. Save over the **exact filenames** below (folder + name + `-<width>.<ext>`).
4. Reload — done. Re-run Lighthouse to confirm.

---

## Replacement table

| Section | Current file (fallback + sources) | Dimensions (intrinsic) | Aspect ratio | Recommended replacement type | Transparency | Export format | Notes |
|---|---|---|---|---|---|---|---|
| Hero | `assets/images/hero/pawbiotix-dog-probiotic-jar-{360,720}.{avif,webp,png}` | 360×420 (1×), 720×840 (2×) | ~6:7 | Custom 3D product render of the jar | **Yes** (cut-out) | AVIF+WebP, PNG fallback | LCP candidate — keep `fetchpriority="high"`, no lazy. Provide on transparent bg. |
| Pricing · 2-bottle | `assets/images/pricing/pawbiotix-dog-probiotic-2-bottle-package-{140,280}.*` | 140×163, 280×326 | ~6:7 | 2-bottle bundle render | **Yes** | AVIF+WebP, PNG | Below fold → `loading="lazy"`. |
| Pricing · 6-bottle (best value) | `assets/images/pricing/pawbiotix-dog-probiotic-6-bottle-package-{200,400}.*` | 200×143, 400×286 | ~7:5 | 6-bottle bundle + 3 bonus covers render | **Yes** | AVIF+WebP, PNG | Widest card art; can include bonus fan. |
| Pricing · 3-bottle | `assets/images/pricing/pawbiotix-dog-probiotic-3-bottle-package-{140,280}.*` | 140×163, 280×326 | ~6:7 | 3-bottle bundle render | **Yes** | AVIF+WebP, PNG | Below fold → lazy. |
| Guarantee | `assets/images/guarantee/pawbiotix-60-day-money-back-guarantee-{220,440}.*` | 220×220, 440×440 | 1:1 | Original guarantee seal/badge | **Yes** | AVIF+WebP, PNG | Circular badge; keep transparent bg. |
| Header logo | `assets/img/logo-white.svg` | 168×37 | ~4.5:1 | Brand wordmark (white) | **Yes** | **SVG** (keep vector) | Logos stay SVG — crisp, tiny, no raster needed. |
| Footer logo | `assets/img/logo-white.svg` | 168×37 | ~4.5:1 | Brand wordmark (white) | Yes | SVG | Same file as header. |
| Favicon | `assets/img/favicon.svg` | 32×32 | 1:1 | Brand mark | Yes | SVG (+ `.ico` optional) | — |
| Social share | `assets/images/social/pawbiotix-dog-probiotics-og.svg` | 1200×630 | 1.91:1 | Branded OG card | No | WebP/PNG (or keep SVG) | Referenced by OG/Twitter meta. |
| Ingredients (×11) | `assets/images/ingredients/<name>.webp` (icons currently inline SVG) | 300×300 (photo) or 62×62 (icon) | 1:1 | Original ingredient photography **or** custom icon set | Photo: No · Icon: Yes | AVIF+WebP, PNG | Benefit/ingredient glyphs are inline SVG today (0 requests). Swap to photos only if desired; keep 1:1. |
| Benefits (×8 icons) | inline `<svg>` in markup | 56×56 | 1:1 | Custom line-icon set | Yes | inline SVG | Decorative (`aria-hidden`); no HTTP request. Keep inline for performance. |
| Bonuses (×3 covers) | `assets/images/bonuses/<name>.webp` (currently text cards) | 400×520 | ~4:5 | Original e-book/guide covers | No | AVIF+WebP, PNG | Present as flat covers; provide 260/400/520 widths. |
| Testimonials (optional) | `assets/images/testimonials/` | 96×96 (avatar) | 1:1 | Licensed/consented customer photos | Yes | AVIF+WebP, PNG | Folder scaffolded; not currently used in layout. |

**Ingredient filenames (pre-named, SEO-friendly):** `bacillus-coagulans-dog-probiotic`, `chicory-root-prebiotic-fiber-for-dogs`, `l-glutamine-dog-gut-lining-support`, `turmeric-root-dog-health`, `fennel-seed-dog-digestive-support`, `flax-seed-omega-for-dogs`, `beef-liver-natural-dog-nutrition`, `organic-kelp-dog-mineral-support`, `chlorella-detox-support-for-dogs`, `copper-chlorophyllin-dog-gut-health`, `hydrolyzed-fish-collagen-for-dogs`.

---

## Vendor / affiliate-resource asset checklist
Request these from the ClickBank vendor's affiliate resource center (they are normally licensed for affiliate use). **Do not scrape them from the live site.** Mark where each belongs:

- [ ] **Product bottle render** → `hero/` + `pricing/*single/2/3-bottle*`
- [ ] **Bundle renders** (2, 3, 6-bottle) → `pricing/`
- [ ] **6-bottle + bonuses render** → `pricing/*6-bottle-package*`
- [ ] **Guarantee badge** → `guarantee/`
- [ ] **Bonus covers** (×3) → `bonuses/`
- [ ] **Ingredient illustrations/photos** (×11) → `ingredients/`
- [ ] **Brand logos** (color + white) → `icons/`
- [ ] **Promotional banners** (if running display) → `assets/images/badges/` or a new `banners/`
- [ ] **Certification/lab badges** (GMP, third-party tested) → `badges/`
- [ ] **Customer testimonial photos** (with consent) → `testimonials/`

## Original / licensed replacement recommendations (style-matched, not copied)
- **Product & bundles:** commission a **custom 3D render** of a green-capped jar/bottle on transparent bg — matches the green/cream palette without copying the reference render.
- **Ingredients:** **original macro photography** on a clean white/mint backdrop, or a cohesive **custom flat-icon set** (single style, 2-color green). Photography reads more premium; icons are lighter and already partially in place.
- **Guarantee seal:** **original badge** — circular, green `#008d65`/`#00a536`, "60-Day Money-Back" (already provided as SVG placeholder; a designer can refine).
- **Bonus covers:** **original e-book covers** designed in-brand (green/cream, El Messiri-style display) so the value stack looks bespoke.
- **Dog imagery (optional hero/testimonials):** **licensed stock** (Adobe Stock / Shutterstock) or original photography of happy, healthy dogs — ensure model/property releases.
- **Icons (benefits/trust):** keep the **inline SVG** set (fast, accessible) or license a consistent icon pack (e.g. Lucide/Phosphor — permissive licenses).

## Licensing recommendations
- **Affiliate kit assets:** use only within the vendor's stated affiliate terms; keep a copy of the permission.
- **Stock:** buy standard/extended licenses as needed; retain invoices; respect editorial-only limits.
- **Commissioned/AI-generated:** ensure you own or have full commercial rights; avoid outputs that mimic a specific competitor's copyrighted art.
- **Icon fonts/sets:** confirm MIT/CC-BY/SIL license and include attribution where required.
- **Never** reuse getpawbiotix.com's product/ingredient/bonus/guarantee imagery.

---

## Responsive image implementation (in place)
- `<picture>` with `type="image/avif"` then `type="image/webp"` sources, PNG `<img>` fallback.
- `srcset` at 1× and 2× per slot; `sizes` set per display context (hero `(max-width:992px) 82vw, 360px`; pricing `~40–55vw` → fixed desktop px; guarantee `(max-width:992px) 40vw, 220px`).
- Hero is eager + `fetchpriority="high"` (LCP); all below-fold images `loading="lazy"` + `decoding="async"`.
- Explicit `width`/`height` on every `<img>` → reserved space, **CLS ≈ 0**.

## Performance optimization summary
- AVIF/WebP first with graceful PNG fallback (browser picks the smallest it supports). Sample savings on placeholders: hero **44 KB PNG → 5.4 KB WebP → 6.6 KB AVIF**.
- No layout shift (dimensions reserved), no render-blocking images, minimal bytes on mobile via `srcset`/`sizes`.
- Logos/icons remain **vector SVG** (tiny, resolution-independent) — no raster requests.
- Targets when real assets land: hero < 120 KB, pricing/ingredient < 60 KB each, WebP q≈80–84 / AVIF q≈50–60.

## Image SEO summary
- **Filenames:** lowercase, hyphenated, keyword-first (`pawbiotix-dog-probiotic-*`, `bacillus-coagulans-dog-probiotic`, `pawbiotix-60-day-money-back-guarantee`).
- **Alt text:** natural, descriptive, primary keyword ("dog probiotic") used once where truthful; decorative icons `aria-hidden`/`alt=""`.
- **Title attributes** added to hero and guarantee (meaningful, non-duplicative).
- **Structured data** `Product.image` points to the canonical product asset.
- No keyword stuffing; secondary keywords (canine probiotic, dog gut health, dog digestive supplement) used across the set, not repeated in one alt.

## Folder structure (final)
```
assets/images/
├── hero/         pawbiotix-dog-probiotic-jar-{360,720}.{avif,webp,png}
├── ingredients/  (drop 11 named files — icons inline today)
├── pricing/      2-bottle / 3-bottle {140,280}; 6-bottle {200,400} — each .{avif,webp,png}
├── bonuses/      (drop 3 named covers)
├── guarantee/    pawbiotix-60-day-money-back-guarantee-{220,440}.{avif,webp,png}
├── icons/        pawbiotix-logo.svg, pawbiotix-logo-white.svg, pawbiotix-favicon.svg
├── badges/       (certifications / best-value raster if desired — ribbon is CSS)
├── backgrounds/  (section gradients are CSS — no raster needed)
├── testimonials/ (optional customer avatars)
└── social/       pawbiotix-dog-probiotics-og.svg
```
