# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-03-17 - Carousel Dots Accessibility and Refactoring Button Styles
**Learning:** When refactoring interactive `<div>` or indicator elements to semantic `<button type="button">` elements for accessibility, browsers apply default user-agent button styles (like border, padding, background, and display properties). These defaults can cause visual regressions or misalignment in flex containers. Explicitly resetting these button styles in CSS (e.g., `border: none; padding: 0; display: block; background: none;`) ensures consistent cross-browser styling while satisfying accessibility guidelines.
**Action:** Always include a complete reset of standard button properties whenever transforming custom non-semantic HTML elements into `<button>` elements, and apply `:focus-visible` outline offsets suitable for the element's visual footprint.
