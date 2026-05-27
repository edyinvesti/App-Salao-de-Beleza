# Palette's Journal - Glam UX & Accessibility

## 2026-03-27 - [Tabs Accessibility Pattern]
**Learning:** For tabbed interfaces, simply toggling visibility isn't enough for screen readers. Using the WAI-ARIA Tabs pattern (role="tablist", role="tab", role="tabpanel") provides the necessary context and navigation cues.
**Action:** Always implement role="tablist" on the container, role="tab" on buttons with aria-selected, and role="tabpanel" on the content areas with aria-labelledby linked to the tabs.

## 2026-03-27 - [Focus Indicators for Dark Mode]
**Learning:** In dark-themed applications, default browser focus rings often have poor contrast. Global :focus-visible styles with a brand-aligned color and offset improve accessibility without cluttering the UI for mouse users.
**Action:** Add a global :focus-visible rule using a high-contrast variable (like --primary) and an outline-offset to ensure clear visibility on all interactive elements.

## 2026-03-27 - [Semantic Interactive Elements]
**Learning:** Using divs for interactive elements like carousel indicators breaks keyboard navigation and screen reader expectations.
**Action:** Always use <button> elements for interactive controls, providing descriptive aria-labels when they are icon-only or dot-style indicators.
