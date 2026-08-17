## 2026-03-30 - Carousel Dots Button Styling Reset & Navigation ARIA State Sync
**Learning:** When refactoring non-semantic `<div>` elements to `<button>` for carousel pagination, CSS button defaults (`border`, `padding`) must be explicitly reset to preserve alignment and flex dimensions. Additionally, when mobile menus automatically close on smooth-scroll anchor clicks, `aria-expanded` must be reset to `"false"` alongside class list updates.
**Action:** Always include CSS resets for dynamic button generation and explicitly reset ARIA state flags on all menu dismissal paths.
