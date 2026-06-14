## 2026-06-14 - [Accessible Carousel Dots]
**Learning:** Carousel dots implemented as <div> elements are not keyboard accessible or screen reader friendly. Converting them to <button> elements with aria-label and aria-current significantly improves the UX for assistive technology users.
**Action:** Always use semantic <button> elements for interactive controls like carousel indicators and ensure they have appropriate ARIA attributes.

## 2026-06-14 - [Global Focus Indicators]
**Learning:** Static landing pages often lack explicit focus states, making them difficult to navigate for keyboard users. A global :focus-visible style provides a clear visual cue without affecting mouse users' experience.
**Action:** Include global :focus-visible styles using the project's primary color palette in the initial CSS setup.
