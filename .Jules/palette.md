# Palette's Journal — Critical UX & Accessibility Learnings

## 2025-03-10 - Accessible Carousel Indicators
**Learning:** Using generic `<div>` elements for carousel indicators makes them invisible to keyboard and screen reader users. Simply switching to `<button>` is not enough; one must also explicitly reset browser-default button styles (border, background, padding) to prevent layout shifts.
**Action:** Always use `<button type="button">` for interactive indicators, add `aria-label` and `aria-current`, and include CSS resets for consistent styling.
