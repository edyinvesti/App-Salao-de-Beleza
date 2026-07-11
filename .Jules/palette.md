## 2025-05-14 - Carousel Accessibility Refactoring
**Learning:** When refactoring <div> elements to <button> elements for accessibility (e.g., carousel dots), it is crucial to explicitly reset button styles in CSS (border: none; padding: 0; display: block;) to prevent visual regressions. Additionally, ARIA labels should match the primary language of the site content (in this case, Portuguese) for a consistent user experience.
**Action:** Always include a CSS reset for refactored interactive elements and ensure ARIA labels are localized correctly.
