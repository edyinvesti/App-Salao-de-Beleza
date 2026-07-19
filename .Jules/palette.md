# Palette's Journal - Critical Learnings

## 2026-03-17 - Initial Palette Entry
**Learning:** Carousel controls require full keyboard support, visible focus indicator, and ARIA attributes for a truly accessible experience.
**Action:** When implementing any navigation/controls (tab navigators, carousel dots, etc.), use native `<button>` tags with `aria-label`/`aria-current` instead of bare `div` or `span` elements.
