## 2025-05-14 - Accessible Carousel Dots
**Learning:** When refactoring <div> elements to <button> elements for accessibility (e.g., carousel dots), explicitly reset button styles in CSS (border: none; padding: 0; display: block;) to prevent visual regressions and ensure correct alignment in flex containers.
**Action:** Always include a CSS reset for custom interactive elements when moving from non-semantic to semantic HTML.
