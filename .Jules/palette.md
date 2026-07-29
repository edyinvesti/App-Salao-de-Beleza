# Palette's Journal - Critical Learnings Only

## 2026-03-17 - Carousel Dot Accessibility and Styling
**Learning:** When refactoring interactive elements like carousel dots from `div`s to semantic `<button>` elements, standard browser button stylings (like borders, padding, and alignments) can introduce visual regressions if not properly reset. Additionally, for a static-themed dark site, a clean, high-visibility global focus indicator (e.g., using `:focus-visible` with `outline-offset`) ensures excellent keyboard navigation accessibility.
**Action:** Explicitly reset default button styles (border: none; padding: 0; background: none; display: block;) for `.t-dot` carousel dot elements, and implement site-wide `:focus-visible` outline indicators with fallback styles.
