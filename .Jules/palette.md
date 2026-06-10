## 2026-03-17 - [Accessible Carousel Indicators & Global Focus Styles]
**Learning:** Carousel indicators using `<div>` are inaccessible via keyboard and lack semantic meaning. Refactoring them to `<button>` with `aria-label` and `aria-current` significantly improves accessibility. Additionally, the lack of `:focus-visible` styles makes navigation difficult for keyboard users.
**Action:** Always use semantic `<button>` for interactive indicators and include global `:focus-visible` styles with clear visual contrast.
