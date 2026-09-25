## 2026-09-25 - [Accessible Carousel Dot Indicators]
**Learning:** Carousel pagination dots rendered as non-semantic `<div>` elements prevent keyboard navigation and screen reader awareness. Refactoring them to `<button type="button">` with descriptive `aria-label` and dynamic `aria-current="true"|"false"` attributes makes carousel navigation fully accessible while resetting native button styles prevents visual layout shifts.
**Action:** Always create interactive indicator elements as native `<button>` elements with `type="button"`, explicit ARIA labels, and `aria-current` state management.
