# Palette's Journal - Critical Learnings

## 2026-03-30 - Carousel Navigation Accessibility
**Learning:** Carousel indicators rendered as non-interactive `<div>` elements are inaccessible to keyboard and screen reader users. Refactoring them to `<button type="button">` with proper `aria-label` and `aria-current` attributes makes carousel navigation fully accessible.
**Action:** When creating or dynamically generating carousel dots/indicators, always use `<button type="button">` elements with CSS resets, localized `aria-label` text, and `aria-current="true"` state management.
