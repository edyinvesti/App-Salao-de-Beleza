## 2025-05-14 - Carousel Accessibility & Global Focus States
**Learning:** Carousel navigation dots implemented as `div` elements are invisible to screen readers and keyboard users. Converting them to `button` elements with `type="button"` (to prevent form submission) and adding `aria-label` and `aria-current` makes them fully accessible. Additionally, a global `:focus-visible` style provides necessary visual feedback for keyboard navigation without cluttering the UI for mouse users.
**Action:** Always use semantic `button` elements for interactive indicators and implement global focus-visible indicators.

## 2025-05-14 - Navigation Overlap Prevention
**Learning:** Fixed headers often obscure section headings when navigating via internal anchor links because the browser scrolls to the top of the element, which then sits under the fixed header.
**Action:** Apply `scroll-margin-top` to all `section` elements (or target elements) equivalent to the header's height to ensure they are fully visible after scrolling.
