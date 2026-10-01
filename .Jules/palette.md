## 2026-03-31 - Global Focus Visibility & Dynamic Menu ARIA States
**Learning:** Adding explicit `:focus-visible` ring styling using CSS variables (`--primary` and `--primary-glow`) and dynamically syncing `aria-expanded` strings on toggle elements ensures WCAG 2.1 compliance and seamless screen reader navigation without visual regressions.
**Action:** Always include `:focus-visible` global styles in base CSS and explicitly convert boolean states to strings when managing `aria-expanded` attributes on disclosure buttons.
