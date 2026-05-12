# styles/

Reserved for split CSS modules. The current `app/globals.css` is 67 KB and should
be broken up here over time, e.g.:

- `tokens.css` — colors, typography, spacing variables
- `reset.css` — base/reset rules
- `utilities.css` — helper classes
- per-component CSS modules colocated with the component instead

Then `app/globals.css` would only `@import` the pieces it needs.
