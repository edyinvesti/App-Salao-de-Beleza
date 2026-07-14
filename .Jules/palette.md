## 2025-05-14 - [Carousel Accessibility]
**Learning:** Refactoring <div> elements to <button> for accessibility (like carousel dots) requires explicit CSS resets (border: none, padding: 0, display: block) to prevent visual regressions while enabling keyboard navigation.
**Action:** Always include a CSS reset block when converting non-semantic elements to buttons for interactivity.
