## 2025-05-15 - Accessible Carousel Dots
**Learning:** When refactoring `div` elements to `button` elements for accessibility (e.g., carousel dots), explicitly reset button styles in CSS (`border: none; padding: 0; display: block;`) to prevent visual regressions and ensure correct alignment in flex containers.
**Action:** Always include a CSS reset when converting non-semantic elements to buttons for interactive components.
