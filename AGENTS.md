<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project structure

Routes live in `app/`. Everything else lives at the project root.

```
app/                    # ROUTES ONLY
  (marketing)/          # public marketing pages — group does not appear in URL
  layout.tsx            # root layout (Navbar + Footer)
  page.tsx              # /
  globals.css

components/             # reusable UI
  ui/                   # generic primitives (FilterTabs, CountUpNumber, ScrollAnimator)
  layout/               # Navbar, Footer
  sections/             # page sections (PageHero, FullCta, StatsBanner, StepsFlow, SectionHeader)
  forms/                # ContactForm, InquiryLayout

features/               # page-specific complex pieces with their own state
  gallery/              # GalleryClient, Lightbox
  directors/            # DirectorsGrid

data/                   # static content, split by domain — never one big file
  navigation.ts contact.ts team.ts home.ts plantation.ts
  gallery.ts events.ts investments.ts microfinance.ts

lib/                    # pure utility functions, no React
hooks/                  # custom React hooks
types/                  # shared TS types
constants/              # site config, env keys
styles/                 # split css (TODO: break up globals.css)
public/                 # static assets
```

# Import rules

- Always use the `@/` alias (e.g. `@/components/ui/FilterTabs`). Never `../../`.
- `app/` may import from anywhere outside `app/`.
- `components/` may import from `lib/`, `hooks/`, `types/`, `constants/`, `data/`. Never from `app/` or `features/`.
- `features/` may import from anything except `app/`.
- `data/` is a leaf — only TS types and other `data/` files.
- One feature per folder in `features/`. Each dev owns their feature folder to minimize merge conflicts.

# Adding a new page

1. Create `app/(marketing)/<slug>/page.tsx`.
2. Put any page-only complex client component in `features/<slug>/`.
3. Put static content in a new file `data/<slug>.ts` — do not append to existing data files unless the data is the same domain.
