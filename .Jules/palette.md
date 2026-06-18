# Palette Journal - UX & Accessibility Learnings

This journal tracks critical UX and accessibility learnings discovered during the development of this project.

## 2026-03-17 - Carousel Dot Accessibility
**Learning:** Using `<div>` for carousel indicators makes them inaccessible to keyboard and screen reader users. Refactoring them to `<button>` with appropriate `aria-label` and `aria-current` attributes ensures they are interactive and correctly announced.
**Action:** Always use `<button>` for carousel dots and manage `aria-current` for the active state.

## 2026-03-17 - Mobile Menu State Management
**Learning:** Screen readers need to know the state of a toggleable menu. `aria-expanded` and `aria-controls` on the hamburger button provide this context.
**Action:** Implement `aria-expanded` and `aria-controls` on all hamburger menus and keep them in sync with the menu visibility.
