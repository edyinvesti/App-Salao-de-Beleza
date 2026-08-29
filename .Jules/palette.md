## 2026-08-29 - Accessible Tablist Keyboard Navigation
**Learning:** When implementing tablist navigation using buttons, adding `role="tablist"`, `role="tab"`, and `role="tabpanel"` along with roving `tabindex` and `ArrowLeft`/`ArrowRight`/`Home`/`End` listeners allows screen reader and keyboard users to navigate seamless tabbed interfaces standardly.
**Action:** Always pair `role="tablist"` on container with `role="tab"` and `aria-controls` on tab buttons, managing `aria-selected` and roving `tabindex` dynamically.
