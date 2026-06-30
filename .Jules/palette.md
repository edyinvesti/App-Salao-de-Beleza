## 2025-05-14 - [Carousel Accessibility Refactor]
**Learning:** Refactoring carousel indicator <div> elements to semantic <button> elements requires a CSS reset (border: none; padding: 0;) to prevent visual regressions while enabling keyboard focus. Adding 'aria-current' and 'aria-label' in the site's primary language (pt-BR) significantly improves the screen reader experience.
**Action:** Always use <button> for interactive elements that are not links, and remember to reset their default UA styles in the project's CSS.
