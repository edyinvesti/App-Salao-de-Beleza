## 2025-10-29 - Accessible Carousel Navigation Dots
**Learning:** Carousel indicators generated as plain `<div>` tags are invisible and unreachable to keyboard navigation and screen readers. Converting them to `<button type="button">` with `aria-label="Ir para o slide N"` and dynamic `aria-current` values enables full accessibility without changing the visual layout.
**Action:** Always use `<button type="button">` with CSS style resets (`border: none; padding: 0; display: block;`) and proper ARIA labels for dynamic carousel indicators.
