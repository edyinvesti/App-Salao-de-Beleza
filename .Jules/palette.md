# Palette's Journal 🎨

## 2026-03-17 - Carousel Dots Accessibility Refactoring
**Learning:** When using <div> elements as interactive carousel dots, they lack keyboard accessibility and screen reader announcement. Refactoring them to <button type="button"> elements requires resetting default CSS button styles to prevent visual layout breakage, while managing 'aria-current' and 'aria-label' ensures robust screen reader behavior.
**Action:** Always use semantic <button> elements for dots/indicators, explicitly set `type="button"`, and use CSS rules to reset default margins, borders, and paddings.
