## 2026-03-20 - Accessible Carousel Indicators
**Learning:** Using non-semantic <div> elements for interactive controls like carousel dots prevents keyboard navigation and screen reader access. Refactoring them to <button> elements is necessary, but requires explicit CSS resets (border: none; padding: 0; display: block;) to maintain the original visual design without regressions.
**Action:** Always use semantic <button> or <a> for interactive elements and include appropriate ARIA labels and focus-visible states.
