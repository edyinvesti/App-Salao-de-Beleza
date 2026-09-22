## 2026-03-22 - Feature Tabs WAI-ARIA & Roving Tabindex Pattern
**Learning:** Adding WAI-ARIA roles (`tablist`, `tab`, `tabpanel`) along with roving `tabindex` and arrow key navigation (`ArrowLeft`, `ArrowRight`, `Home`, `End`) transforms static tab lists into standard accessible web widgets for keyboard and screen reader users.
**Action:** Always pair `role="tablist"` on the tab container with `aria-controls` on each tab button and `aria-labelledby` on each panel, while managing `aria-selected` dynamically alongside focus movement.
