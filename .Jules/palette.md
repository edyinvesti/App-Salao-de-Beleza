## 2026-03-30 - Feature Tabs Keyboard Navigation & Focus Visible
**Learning:** Adding WAI-ARIA tab attributes (`role="tablist"`, `role="tab"`, `role="tabpanel"`) along with roving `tabindex` and arrow key listener enables seamless, accessible tab navigation for keyboard and screen-reader users without affecting visual layout.
**Action:** Always pair tab components with `role="tablist"`/`tab`/`tabpanel` and arrow key event handling (`ArrowRight`, `ArrowLeft`, `Home`, `End`) to support standard accessibility tab patterns.
