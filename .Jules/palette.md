## 2026-03-30 - Carousel Dots and Mobile Hamburger ARIA Accessibility
**Learning:** Dynamic UI components like carousel dots generated as `<div>`s exclude keyboard users. Refactoring them to `<button type="button">` with `aria-label` and `aria-current="true"` enables standard tab-stop accessibility, while explicit CSS button resets (`border: none; padding: 0`) prevent visual regressions.
**Action:** Always create interactive dynamic indicators using `<button type="button">`, manage `aria-current` dynamically, and apply explicit CSS resets when replacing `<div>` containers.
