## 2026-06-24 - [Accessibility] Refactoring div-based indicators to buttons
**Learning:** When refactoring non-interactive <div> elements to semantic <button> elements for accessibility (like carousel dots), default browser button styles can break existing flex/grid layouts.
**Action:** Always apply a CSS reset (border: none; padding: 0; background: none; display: block;) to these buttons to maintain visual parity with the original design.
