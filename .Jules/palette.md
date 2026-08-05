## 2026-03-17 - Semantic Button Controls and Global Focus Outlines

**Learning:** When refactoring interactive elements like carousel dots from generic `<div>` tags to semantic `<button>` elements, browser default button stylings can completely break established flex/grid alignments. Explicitly resetting CSS properties (like `border: none; padding: 0; display: block;`) is critical to preventing layout regressions. Additionally, while global `:focus-visible` outline indicators are essential for keyboard accessibility (using variables like `--primary` and `--primary-glow`), micro-interactive components like small slider dots require custom, tighter `outline-offset` overrides to avoid visually detached focus outlines.

**Action:** Always pair semantic `<button>` conversions with explicit layout resets in CSS and utilize specific `:focus-visible` offset tuning on tiny elements to maintain a polished, high-fidelity aesthetic during keyboard navigation.
