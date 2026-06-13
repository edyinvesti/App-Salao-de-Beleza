## 2026-03-23 - [Accessibility] Semantic Elements and ARIA for Interactive Components
**Learning:** Replacing `<div>` with `<button>` for interactive elements like carousel dots is essential for keyboard accessibility. Combined with `aria-current` and `aria-expanded`, it provides necessary context to screen readers that simple visual states (like `.active` classes) do not.
**Action:** Always use semantic HTML (`<button>`) for clickable UI components and manage ARIA states (`aria-expanded`, `aria-current`) alongside CSS classes.
