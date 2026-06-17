## 2025-05-14 - Carousel Dot Accessibility
**Learning:** Using `<div>` for interactive elements like carousel dots prevents keyboard navigation and screen reader support. Converting them to `<button>` with `aria-label` and `aria-current` provides native focusability and state communication.
**Action:** Use semantic `<button>` elements for indicators and apply CSS resets (`border: none`, `padding: 0`) to maintain visual consistency.
