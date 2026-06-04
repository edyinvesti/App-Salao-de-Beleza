## 2025-06-04 - Semantic Buttons for Carousel Controls
**Learning:** Using non-semantic elements like `div` for interactive controls (like carousel dots) breaks keyboard accessibility. Refactoring these to `button` elements with ARIA attributes is a high-impact, low-effort micro-UX win.
**Action:** Always check for non-semantic interactive elements and replace them with buttons, ensuring to reset browser-default button styles.

## 2025-06-04 - Global Focus Indicators
**Learning:** Adding a global `:focus-visible` style significantly improves navigation for keyboard users with minimal CSS, especially when using existing theme variables for consistency.
**Action:** Include `:focus-visible` styles in the global base styles of the project.
