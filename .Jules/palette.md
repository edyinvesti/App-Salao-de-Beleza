## 2026-03-01 - Testimonial Carousel Indicator Accessibility
**Learning:** Carousel pagination dots rendered as `<div>` elements are inaccessible via keyboard navigation and screen readers. Replacing them with `<button type="button">` elements with `aria-label` and `aria-current="true|false"` while adding `aria-live="polite"` to the carousel track provides standard, accessible screen reader feedback.
**Action:** Always construct carousel pagination indicators using standard HTML `<button type="button">` elements with explicit ARIA labels and state attributes.
