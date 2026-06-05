## 2025-05-14 - [Carousel Accessibility & Global Focus States]
**Learning:** Refactoring interactive `<div>` elements to `<button>` significantly improves accessibility but requires explicit CSS resets (border, padding, background) to maintain visual consistency. Global `:focus-visible` styles are essential for keyboard navigation clarity.
**Action:** Always check for non-semantic interactive elements and replace them with buttons. Include `:focus-visible` styles early in the styling phase.

## 2025-05-14 - [Playwright Focus Verification]
**Learning:** `element.focus()` in Playwright doesn't always trigger `:focus-visible` styles.
**Action:** Use `page.keyboard.press("Tab")` to navigate to elements when verifying focus-visible indicators.
