# Palette's Journal

## 2026-03-24 - Carousel dots accessibility
**Learning:** Carousel dots implemented as `<div>` elements are not keyboard accessible or recognized by screen readers. Refactoring them to `<button type="button">` elements with proper `aria-label` and `aria-current` attributes improves accessibility. When refactoring `<div>` to `<button>`, button styles must be explicitly reset in CSS (border: none; padding: 0; display: block;) to avoid layout shifts.
**Action:** Always use `<button type="button">` with `aria-label` (translated to the site's primary language, e.g. Portuguese "Ir para o slide X") and toggle `aria-current="true"` on the active slide dot.
