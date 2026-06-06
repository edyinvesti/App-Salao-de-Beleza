## 2026-03-03 - [Carousel Dots Accessibility]
**Learning:** Refactoring non-interactive navigation elements (like `<div>` dots) to `<button>` elements is essential for keyboard and screen reader accessibility. It's also important to reset default button styles (border, padding) to maintain visual consistency.
**Action:** Always use `<button>` for interactive controls and include `aria-label` and `aria-current`.

## 2026-03-03 - [Global Focus Indicators]
**Learning:** Adding a global `:focus-visible` style ensures that keyboard users have a clear visual indicator of where they are on the page without cluttering the UI for mouse users.
**Action:** Include `:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }` in the global stylesheet.
