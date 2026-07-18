# Palette's Journal — Critical Learnings

## 2026-03-08 - Divs to Buttons CSS Reset
**Learning:** When refactoring interactive `div` elements into semantic `<button>` elements for accessibility, browsers will apply user-agent button styles (like default borders, backgrounds, padding, and alignments) which can cause visual layout regressions.
**Action:** Always include CSS reset rules specifically targeting the custom button classes (e.g., setting `border: none; background: none; padding: 0; outline: none;`) when converting elements to buttons.
