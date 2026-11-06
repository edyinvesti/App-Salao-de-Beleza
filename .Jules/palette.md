## 2026-03-30 - Global Keyboard Focus Indicators
**Learning:** In dark mode interfaces, relying on default browser focus outlines often leads to invisible focus states or jarring contrast issues. Applying a global `:focus-visible` rule using the design system's `--primary` and `--primary-glow` tokens creates a high-contrast, visually cohesive keyboard navigation experience without impacting mouse clicks.
**Action:** Always include global `:focus-visible` styles with CSS variable fallbacks to ensure keyboard accessibility across all interactive elements.
