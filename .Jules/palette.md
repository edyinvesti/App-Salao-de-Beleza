## 2026-03-24 - [Semantic Carousel Dots]
**Learning:** Refactoring carousel pagination from generic `div` to `button` elements significantly improves keyboard accessibility and screen reader support. However, it requires explicit CSS resets (border, padding, display) to avoid visual regressions caused by browser default styles.
**Action:** Always use `<button type="button">` for interactive elements like dots or tabs, and include a CSS reset for these components in the base or component styles.
