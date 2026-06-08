## 2025-05-14 - Carousel Dot Accessibility
**Learning:** Using `<div>` for carousel dots makes them inaccessible to keyboard and screen reader users. Converting them to `<button>` with `aria-label` and `aria-current` significantly improves accessibility.
**Action:** Always use semantic `<button>` elements for interactive pagination indicators and reset default browser button styles in CSS.

## 2025-05-14 - Global Focus Indicators
**Learning:** Modern sites often lack clear focus indicators for keyboard navigation. `:focus-visible` allows for high-contrast indicators without affecting the mouse-driven UI.
**Action:** Implement a global `:focus-visible` style using the project's brand colors (e.g., `--primary` and `--primary-glow`) to ensure consistent accessibility.
