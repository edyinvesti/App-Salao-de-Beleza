# Palette's Journal

Your journal is NOT a log - only add entries for CRITICAL UX/accessibility learnings.

## 2026-08-06 - [Semantic Interactive Elements and Global Keyboard Focus Indicators]
**Learning:** Carousel navigation controls and mobile interactive toggles often default to non-semantic elements (`div`) or miss essential state attributes (`aria-expanded`, `aria-current`), rendering them completely invisible to keyboard users and assistive technologies. By converting these to semantic `<button type="button">` elements with explicit ARIA state tracking and defining a cohesive site-wide `:focus-visible` outline utilizing native design variables (`--primary` and `--primary-glow`), we ensure keyboard-only navigation is functional, intuitive, and visually delightful.
**Action:** When implementing or refactoring custom control panels (such as carousels, tabs, or toggles), always prioritize semantic interactive tags over generic ones, reset default button styles to prevent visual regressions, and pair them with explicit ARIA attributes and focus-visible indicators.
