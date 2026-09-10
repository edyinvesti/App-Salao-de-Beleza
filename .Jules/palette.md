## 2026-03-31 - Calendar Mockup Button Accessibility
**Learning:** Mockup controls (like calendar navigation arrows) in hero/feature sections are rendered as interactive `<button>` elements and must include `type="button"` and `aria-label` attributes to ensure screen reader clarity and avoid accidental form submission defaults.
**Action:** When adding mockup interactive controls or icon-only navigation buttons in HTML overlays, explicitly add `type="button"` and informative `aria-label`s in Portuguese.
