## 2026-03-08 - WAI-ARIA Tablist Pattern with Roving Tabindex
**Learning:** Adding `role="tablist"`, `role="tab"`, `role="tabpanel"`, and `aria-selected` is essential for screen readers, but keyboard users expect arrow key navigation (ArrowLeft, ArrowRight, Home, End) with a roving tabindex mechanism rather than standard Tab key navigation across all tabs.
**Action:** Always implement `tabindex="0"` for active tabs and `tabindex="-1"` for inactive tabs, updating focus and `aria-selected` dynamically on arrow key events.
