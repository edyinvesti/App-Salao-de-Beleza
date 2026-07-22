# Palette's Micro-UX and Accessibility Journal

This journal tracks critical UX and accessibility learnings discovered during development.

## 2024-07-22 - Accessible Carousel Indicators and Focus Management
**Learning:** When building custom carousel indicators (dots), using non-semantic elements like `div` strips them of screen-reader support, keyboard focusability, and interactive state signaling. Refactoring them to `<button type="button">` with `aria-label` and `aria-current="true"` dramatically improves accessibility. When refactoring `div` elements to buttons, we must explicitly reset button styles in CSS to prevent layout/flex alignment regressions.
**Action:** Always use `<button type="button">` for custom dynamic indicators, provide explicit CSS resets (border: none; padding: 0; display: block;), use Portuguese (pt-BR) matching the page's primary language for labels, and ensure clear `:focus-visible` indicators are defined site-wide with fallback variables.
