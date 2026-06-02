## 2025-05-15 - Carousel Dot Accessibility
**Learning:** Using non-semantic `div` elements for carousel indicators prevents keyboard navigation and screen reader access. Refactoring them to `button` elements requires a CSS reset to maintain the original design.
**Action:** Always use `<button>` for interactive indicators and include `aria-label` and `aria-current` for proper state communication.

## 2025-05-15 - Global Focus Indicators
**Learning:** Many landing pages lack clear focus indicators for keyboard users.
**Action:** Implement global `:focus-visible` styles early in the project to ensure consistent accessibility across all interactive components.
