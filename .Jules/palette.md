## 2026-06-27 - Accessible Carousel Indicators
**Learning:** Using non-semantic elements like `<div>` for interactive carousel dots makes them unreachable via keyboard and invisible to screen readers as actionable controls. Refactoring to `<button>` with `aria-label` and `aria-current` provides standard accessibility.
**Action:** Always prefer semantic `<button>` elements for custom interactive components and remember to reset default button styles in CSS to avoid layout shifts or visual regressions.
