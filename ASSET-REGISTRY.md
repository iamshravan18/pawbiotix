# PawBiotix — Asset Registry

Authoritative registry of every placeholder asset. All assets are **original placeholders** (generated from original SVGs via `sips`/`cwebp`). Replace any file at the **same path + dimensions** and the layout is unchanged — no HTML/CSS/JS edits.

**Formats per slot:** AVIF (preferred) → WebP → PNG fallback, at the listed widths (1× + 2×).
**Machine-readable version:** `IMAGE-MANIFEST.json` (39 assets: 20 rendered, 19 staged; 228 raster files).

## Legend
- **Rendered** = wired into `index.html` now via `<picture>`.
- **Staged** = files + metadata ready on disk, *not* injected because the current locked layout has no slot for them (adding one would be a layout change). Ready-to-paste snippet in `IMAGE-REPLACEMENT-GUIDE.md`.

---

## Rendered assets (live `<picture>` in the page)

| Asset | Purpose | Recommended replacement | Dimensions (1× / 2×) | Aspect | Export | Transparency | SEO filename | Licensing |
|---|---|---|---|---|---|---|---|---|
| Hero jar | Above-fold product hero (LCP) | Custom 3D jar render | 360×420 / 720×840 | 6:7 | AVIF+WebP, PNG | Yes | `hero/pawbiotix-dog-probiotic-jar-*` | Vendor kit / commissioned |
| 2-bottle pack | Pricing card art | 2-bottle bundle render | 140×163 / 280×326 | 6:7 | AVIF+WebP, PNG | Yes | `pricing/pawbiotix-dog-probiotic-2-bottle-package-*` | Vendor kit |
| 6-bottle pack | Best-value card art | 6-bottle + bonuses render | 200×143 / 400×286 | 7:5 | AVIF+WebP, PNG | Yes | `pricing/pawbiotix-dog-probiotic-6-bottle-package-*` | Vendor kit |
| 3-bottle pack | Pricing card art | 3-bottle bundle render | 140×163 / 280×326 | 6:7 | AVIF+WebP, PNG | Yes | `pricing/pawbiotix-dog-probiotic-3-bottle-package-*` | Vendor kit |
| Guarantee seal | Guarantee badge | Original 60-day seal | 220×220 / 440×440 | 1:1 | AVIF+WebP, PNG | Yes | `guarantee/pawbiotix-60-day-money-back-guarantee-*` | Original design |
| 6× strain icons | Ingredient card icons | Custom icon set or macro photo | 48×48 / 96×96 | 1:1 | AVIF+WebP, PNG | Yes | `ingredients/<strain>-dog-probiotic-*` | Original / icon license |
| 8× benefit icons | Benefit card icons (decorative, `alt=""`) | Cohesive line-icon set | 48×48 / 96×96 | 1:1 | AVIF+WebP, PNG | Yes | `icons/benefit-*-*` | Original / icon license |
| OG image | Social share (meta) | Branded OG card | 1200×630 | 1.91:1 | SVG/WebP | No | `social/pawbiotix-dog-probiotics-og.svg` | Original |

**Compression targets (when real assets land):** hero < 120 KB; pricing/ingredient photo < 60 KB; icons < 4 KB AVIF; WebP q≈80–84, AVIF q≈50–60.

---

## Staged assets (on disk, ready to wire when layout is intentionally extended)

### Ingredient photography (11) — `assets/images/ingredients/` — 300×300 / 600×600, 1:1, AVIF+WebP+PNG
`bacillus-coagulans-dog-probiotic` · `chicory-root-prebiotic-fiber-for-dogs` · `l-glutamine-dog-gut-lining-support` · `turmeric-root-dog-health` · `fennel-seed-dog-digestive-support` · `flax-seed-omega-for-dogs` · `beef-liver-natural-dog-nutrition` · `organic-kelp-dog-mineral-support` · `chlorella-detox-support-for-dogs` · `copper-chlorophyllin-dog-gut-health` · `hydrolyzed-fish-collagen-for-dogs`
*Replacement:* original macro photography on clean backdrop. *Transparency:* no (photo). *License:* stock/commissioned.

### Bonus covers (3) — `assets/images/bonuses/` — 260×338 / 520×676, ~3.9:5, AVIF+WebP+PNG
`healthy-dog-gut-guide-bonus` · `home-remedies-for-dogs-bonus` · `happy-active-dog-handbook-bonus`
*Replacement:* original in-brand e-book covers. *Transparency:* no. *License:* original design.

### Footer / trust badges (4) — `assets/images/badges/` — 120×60 / 240×120, 2:1, AVIF+WebP+PNG
`gmp-certified-dog-supplement` · `third-party-lab-tested` · `secure-checkout` · `free-shipping`
*Replacement:* only display badges you are certified/entitled to use. *Transparency:* yes. *License:* per certifying body.

### Testimonials (1 sample) — `assets/images/testimonials/` — 96×96 / 192×192, 1:1, AVIF+WebP+PNG
`customer-avatar`
*Replacement:* consented customer photos (profile / dog / optional before-after). *Transparency:* yes. *License:* signed release required.

---

## Why some slots are staged, not rendered
The current layout is locked (per instructions). Bonus **cover images**, a **testimonials section**, and a **footer badge row** do not exist as slots in that layout, so injecting images there would change the visual design. Their assets and metadata are fully prepared; a ready-to-paste `<picture>` snippet is in `IMAGE-REPLACEMENT-GUIDE.md` for when the layout is intentionally opened up.

## Universal image component (reference pattern)
```html
<picture>
  <source type="image/avif" sizes="SIZES" srcset="/assets/images/FOLDER/NAME-W1.avif W1w, /assets/images/FOLDER/NAME-W2.avif W2w">
  <source type="image/webp" sizes="SIZES" srcset="/assets/images/FOLDER/NAME-W1.webp W1w, /assets/images/FOLDER/NAME-W2.webp W2w">
  <img src="/assets/images/FOLDER/NAME-W1.png" width="W1" height="H1" alt="DESCRIPTIVE ALT" loading="lazy" decoding="async">
</picture>
```
Above-the-fold only: drop `loading="lazy"`, add `fetchpriority="high"`.
