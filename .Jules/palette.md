## 2026-07-20 - [Carousel Dot Accessibility and Stylings]
**Learning:** When refactoring interactive elements (like custom carousel indicator divs) into native `<button>` elements for standard keyboard reachability, default browser button stylings must be completely reset. Explicitly setting `type="button"` ensures no accidental form submissions, and `aria-current="true"` provides screen readers with precise slider location context.
**Action:** Always refactor interactive pseudo-buttons to `<button type="button">`, explicitly reset their CSS styles, and manage `aria-current` dynamically.
