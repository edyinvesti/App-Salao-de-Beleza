## 2026-03-17 - [Accessible Tab Pattern]
**Learning:** Implementing WAI-ARIA tabs requires coordinating roles (`tablist`, `tab`, `tabpanel`), state attributes (`aria-selected`), and keyboard management (roving tabindex and arrow-key navigation). Using `:focus-visible` ensures clear indicators for keyboard users while keeping the UI clean for mouse users.
**Action:** Always use the `roving tabindex` pattern for tab buttons and set `tabindex="0"` on tab panels to ensure they are reachable by keyboard users.
