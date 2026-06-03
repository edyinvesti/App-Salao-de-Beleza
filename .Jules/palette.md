## 2025-05-15 - Accessible Tabs and Carousel Dots
**Learning:** Standard interactive components like tabs and carousels are often implemented using only click listeners and non-semantic elements, leaving keyboard and screen reader users behind.
**Action:** Always implement WAI-ARIA patterns for tabs (roles, aria-selected, roving tabindex) and use `<button>` elements for carousel indicators with `aria-label` and `aria-current`. Ensure clear `:focus-visible` states are present for all interactive elements.
