## 2026-03-05 - WAI-ARIA Tab Navigation Pattern
**Learning:** Feature tab navigation components require explicit WAI-ARIA roles (`tablist`, `tab`, `tabpanel`), synchronized `aria-selected` state, and arrow key listeners with roving `tabindex` to support assistive technology and full keyboard accessibility.
**Action:** When implementing interactive tab controls, pair `aria-selected` and `tabindex` updates with keydown handlers (ArrowLeft, ArrowRight, Home, End) and distinct `:focus-visible` outline styles.
