## 2026-10-30 - Dynamic ARIA State Synchronizing in Vanilla JS Controls

**Learning:** Interactive controls constructed dynamically in vanilla JS (e.g., custom carousel indicators, tab triggers, mobile menus) often omit standard ARIA state attributes (`aria-expanded`, `aria-selected`, `aria-current`). Converting `div` wrappers to semantic `<button type="button">` elements with explicit Portuguese ARIA labels and updating `aria-current` or `aria-selected` dynamically during click/keyboard state changes provides critical accessibility signaling for screen reader users without requiring heavy UI frameworks.

**Action:** Whenever building or refactoring custom UI controls in vanilla JS, ensure interactive triggers are `<button type="button">` elements, reset default browser button styles in CSS, and explicitly update ARIA boolean/state strings (`aria-expanded`, `aria-selected`, `aria-current`) in JavaScript event listeners.
