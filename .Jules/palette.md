## 2025-05-18 - Accessible Carousel Dot Navigation

**Learning:** Dynamic carousel indicators rendered as `<div>` elements are inaccessible to keyboard and screen reader users. Replacing them with `<button type="button">` requires resetting browser button styles (`border: none; padding: 0; display: block;`) to preserve flex alignment, adding descriptive Portuguese ARIA labels (`aria-label="Ir para o slide X"`), maintaining `aria-current="true"` on the active slide, and ensuring `aria-live="polite"` on the scroll track for screen reader updates.
**Action:** When creating dynamic carousel indicators, always use `<button type="button">` with CSS resets, `aria-label`, `aria-current="true"` on active state, and apply `aria-live="polite"` to dynamic slide tracks.
