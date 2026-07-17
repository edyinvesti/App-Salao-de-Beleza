# Palette's UX and Accessibility Journal

This journal contains critical UX and accessibility learnings for the Glam landing page repository.

## 2026-03-17 - Carousel and Focus Accessibility
**Learning:** When using custom layouts with interactive elements like carousel indicators, standard styling of HTML `div`s as indicators excludes keyboard-only and screen-reader users. Replacing indicators with semantically correct `<button>` elements, adding appropriate `aria-label` and `aria-current` attributes, and styling `:focus-visible` states explicitly ensures complete keyboard navigability and standard compliant accessibility without any visual regression.
**Action:** Always refactor interactive static elements to semantic controls, reset their default browser styles carefully, and apply highly visible `:focus-visible` outlines.
