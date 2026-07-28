# Palette's Journal 🎨

## 2026-03-17 - Button Refactoring and Anchor Offset Orchestration
**Learning:** Refactoring interactive elements from `div`s to `<button>`s for WAI-ARIA and keyboard-reachability compliance requires explicit style resets (border, padding, display) in CSS to prevent layout distortion within flex containers. Additionally, a global focus indicator (`:focus-visible`) must be accompanied by target `scroll-margin-top` to avoid header occlusion and maintain visual clarity during smooth anchor scrolling.
**Action:** When converting custom interactive nodes to native elements, always combine CSS resets with responsive focus ring tuning, and ensure scroll target offsets are coordinated.
