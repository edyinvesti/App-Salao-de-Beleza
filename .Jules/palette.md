# Palette's UX & Accessibility Journal

## 2026-03-05 - Carousel Dot Accessibility and Keyboard Navigation
**Learning:** Custom interactive elements like carousel indicators are frequently built using non-semantic `div` tags. This completely breaks keyboard navigation (users cannot tab to them) and hides their purpose from assistive technologies. Refactoring them to semantic `<button>` elements with clear `aria-label` and `aria-current` attributes restores proper accessibility behavior. Explicitly resetting CSS button styles avoids layout regressions.
**Action:** When implementing or refactoring carousel indicators or interactive dots, always use `<button type="button">` and apply the proper ARIA signaling (`aria-label`, `aria-current`) and keyboard focus indicators.
