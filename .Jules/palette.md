## 2026-03-18 - Testimonial Carousel Dot Button Refactoring
**Learning:** Replacing non-semantic `<div>` elements used as carousel dot indicators with standard `<button type="button">` elements allows assistive technologies and keyboard users to navigate slides via tab sequence. Resetting default button CSS (`border: none; padding: 0; display: block;`) is critical to avoid layout distortion in flex containers.
**Action:** Always build interactive carousel indicators as `<button type="button">` with `aria-label` and `aria-current="true|false"` and reset default button styles in CSS.
