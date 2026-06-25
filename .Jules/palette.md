## 2025-03-24 - Accessible Carousel Indicators
**Learning:** Carousel indicators built with <div> elements are not keyboard accessible or perceivable by screen readers. Refactoring them to <button> elements with aria-label and aria-current makes them interactive and informative for all users.
**Action:** When creating custom carousel indicators, always use <button> elements, reset their default styling in CSS, and manage their aria-current state in JavaScript.
