## 2026-03-02 - Feature Tab WAI-ARIA and Keyboard Navigation Pattern

**Learning:** When turning tab-styled buttons into fully accessible WAI-ARIA tablists, standard arrow key navigation (ArrowLeft/ArrowRight/Home/End) with roving `tabindex` is necessary so screen reader and keyboard users can seamlessly navigate between tab panels without extra tab stops.
**Action:** Always pair `role="tablist"`, `role="tab"`, and `role="tabpanel"` with keyboard keydown handlers updating `aria-selected` and `tabindex` dynamically.
