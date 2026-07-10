## 2025-05-14 - Carousel Dot Accessibility
**Learning:** Refactoring <div> indicators to <button> elements requires explicit CSS resets (border: none, padding: 0) to maintain visual consistency while gaining keyboard accessibility and screen reader support via aria-current and aria-label.
**Action:** Always use <button type="button"> for carousel indicators and manage state with aria-current.

## 2025-05-14 - Mobile Menu State Sync
**Learning:** When using anchor links in a mobile overlay menu, aria-expanded must be explicitly reset to "false" when a link is clicked, as the menu usually closes via JavaScript rather than a page reload.
**Action:** Sync aria-expanded state in the same click handler that closes the menu on navigation.
