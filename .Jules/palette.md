# Palette's Journal 🎨

## 2026-03-27 - [Carousel Accessibility]
**Learning:** Carousel indicators implemented as `div` elements are not keyboard-accessible and lack semantic meaning for screen readers. Using `button` elements with `aria-label` and `aria-current` is the standard for accessible carousels.
**Action:** Refactor carousel dots from `div` to `button` and ensure they have descriptive labels and state indicators.
