# Palette's Journal

## 2025-05-18 - Synchronized ARIA state management for mobile menus
**Learning:** Mobile navigation menus with multiple close handlers (anchor links, backdrop clicks, key presses) can easily lead to out-of-sync `aria-expanded` attributes if state isn't centralized.
**Action:** Always route all menu toggle and close events through a single state update function that synchronizes both DOM classes and ARIA attributes (e.g., `aria-expanded`).
