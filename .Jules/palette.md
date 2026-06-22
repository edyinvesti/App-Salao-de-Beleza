## 2026-06-22 - Carousel Accessibility Refactoring
**Learning:** When refactoring `div` elements to `button` elements for accessibility (e.g., carousel dots), explicitly resetting button styles (border, padding, and display) is essential to prevent visual regressions, especially within flex containers where default button margins/paddings might displace elements.
**Action:** Always include a CSS reset block when converting non-semantic interactive elements to buttons.
