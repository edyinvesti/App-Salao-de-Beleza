## 2026-03-17 - [Accessibility: ARIA Tab Pattern Implementation]
**Learning:** Standardizing tab components with WAI-ARIA roles (tablist, tab, tabpanel) and implementing arrow-key navigation dramatically improves the UX for keyboard and screen reader users in static landing pages.
**Action:** Always check for missing ARIA roles in custom UI components and implement the corresponding keyboard interaction patterns (e.g., arrow keys for tabs).

## 2026-03-17 - [Visual: Universal Focus Indicators]
**Learning:** Adding a global `:focus-visible` style using existing primary brand colors ensures accessibility compliance with minimal effort and no impact on mouse-driven UI aesthetics.
**Action:** Use `:focus-visible` with `outline-offset` to create non-intrusive yet clear focus states.
