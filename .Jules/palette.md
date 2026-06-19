# Palette's Journal - Glam Project

## 2025-05-14 - Semantic Carousel Indicators and Global Focus States
**Learning:** Refactoring <div> indicators to <button> elements is essential for keyboard accessibility but requires explicit CSS resets (border: none, padding: 0, display: block) to avoid breaking existing flex/grid layouts. Additionally, global :focus-visible styles using existing brand variables (--primary, --primary-glow) provide a cohesive feel for keyboard users without affecting mouse users.
**Action:** Always check for non-semantic interactive elements (like divs used as buttons) and replace them with <button>, ensuring a visual style reset is included in the CSS.

## 2025-05-14 - Localization of ARIA Labels
**Learning:** For a site localized in pt-BR, all ARIA labels must also be in Portuguese to provide a consistent experience for screen reader users. Pattern: "Ir para o slide X" for carousel dots.
**Action:** Match ARIA label language to the primary language of the document (lang="pt-BR").
