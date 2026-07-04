## 2025-07-04 - [Accessibility] Semantic Button Refactoring
**Learning:** When refactoring non-semantic elements like `div` to `button` for keyboard accessibility (e.g., carousel indicators), default browser styles (borders, padding, backgrounds) can cause visual regressions if not explicitly reset in the CSS.
**Action:** Always include a CSS reset for refactored `button` elements (e.g., `border: none; padding: 0; background: none;`) and ensure they inherit the intended layout properties.
