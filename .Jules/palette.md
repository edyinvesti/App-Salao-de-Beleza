## 2026-06-01 - Accessible Tab Patterns & Focus Visibility
**Learning:** Standard tab-switching logic often neglects keyboard users and screen readers. Implementing a WAI-ARIA compliant tab pattern (roles: tablist, tab, tabpanel) with arrow key navigation and a roving tabindex ensures the feature is truly accessible. Additionally, missing global focus indicators is a common barrier for keyboard-only users.
**Action:** Always implement ARIA roles and arrow-key listeners for tab components, and include a global `:focus-visible` style using the app's primary brand colors.
