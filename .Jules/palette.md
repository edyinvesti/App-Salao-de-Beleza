## 2026-09-11 - Carousel Indicator Button Refactoring
**Learning:** When refactoring non-semantic `<div>` elements to `<button>` elements in carousel indicators, native browser defaults (borders, padding, alignment) must be explicitly reset in CSS, and `aria-current="true"` along with descriptive `aria-label` attributes must be dynamically toggled for screen reader users.
**Action:** Always generate `<button type="button">` for interactive dots with explicitly reset styles (`border: none; padding: 0; outline-offset: 2px`) and manage `aria-current` state changes.
