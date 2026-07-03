## 2026-03-17 - Improved Keyboard Navigation and Carousel Accessibility
**Learning:** When refactoring interactive elements (like carousel dots) from divs to buttons for accessibility, it is crucial to explicitly reset default button styles (border, padding, etc.) and manage ARIA states (aria-current, aria-label) dynamically via JavaScript to ensure both screen reader compatibility and visual consistency.
**Action:** Always use semantic <button> for indicators and provide a global :focus-visible strategy with sensible offsets for different component sizes.
