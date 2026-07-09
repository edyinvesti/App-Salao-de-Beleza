## 2025-05-15 - Enhancing Keyboard Accessibility and Focus Indicators

**Learning:** Interactive elements implemented with non-semantic tags (like `div` for carousel dots) are invisible to keyboard and screen reader users. Additionally, without explicit `:focus-visible` styles, keyboard users cannot track their position on the page.

**Action:** Always use semantic `<button type="button">` for interactive controls. When refactoring from `div` to `button`, include CSS resets (`border: none`, `padding: 0`, `display: block`) to maintain the design while gaining accessibility. Implement global `:focus-visible` styles using the design system's primary color and `outline-offset` for clear visibility.
