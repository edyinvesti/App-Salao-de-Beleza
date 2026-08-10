# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-03-17 - Accessible Carousel Navigation and CSS Focus Outlines
**Learning:** Carousel indicators built using standard `div` elements lack accessibility semantics, screen reader announcements, and keyboard reachability. Refactoring them to `<button type="button">` with standard `aria-label` (in pt-BR matching language of user site, e.g. "Ir para o slide X") and explicit focus-visible states ensures screen reader compatibility and standard keyboard accessibility.
**Action:** Always generate `<button type="button">` for dynamic carousel controls, add `aria-current="true"` on the active item, and use explicit ARIA labels in the site's primary language.
