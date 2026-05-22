# Company Web Agent Instructions

These instructions apply to all Copilot work in this repository.

## Product Guardrails

- Preserve the existing brand, theme, and visual language unless the user explicitly requests a redesign.
- Keep spacing, typography, color, and motion consistent with the current design system.
- Prefer extending existing components over creating new patterns.
- Do not introduce new colors, fonts, animations, or layout systems without checking the current UI first.
- Keep UI changes responsive, accessible, and performant by default.

## Next.js Front-End Standards

- Use the App Router patterns already established in the project.
- Prefer server components unless interactivity requires `use client`.
- Keep TypeScript types explicit and avoid `any`.
- Reuse the existing component folders: `components/layout`, `components/sections`, `components/forms`, and `components/ui`.
- Validate styling changes against the current theme tokens in `app/globals.css` and existing Tailwind utilities.

## UI/UX Standards

- Preserve visual hierarchy, touch targets, and focus states.
- Make sure hover, focus, active, loading, and disabled states stay consistent.
- Respect `prefers-reduced-motion` for any animation or transition work.
- Maintain WCAG AA accessibility for color contrast, keyboard navigation, and semantic markup.

## Review Rule

- If a requested change would break the current design system, theme, or interaction model, stop and confirm the direction before implementing it.
