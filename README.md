# EE Portfolio — 3D Portfolio for Electrical Engineering Students

A distinctive, opinionated 3D portfolio built with Next.js, React Three Fiber, and Tailwind CSS. Designed specifically for electrical engineering students who want to showcase PCB design, embedded systems, and power electronics work without looking like a generic SaaS template.

## Design Philosophy

Following the [Frontend Design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design):

- **Grounded in the subject matter** — the aesthetic draws from EE vernacular: PCB traces, circuit nodes, component footprints, power-flow diagrams. No generic "tech" clichés.
- **Typography carries personality** — one deliberate type family, line lengths under 80 characters, no ALL-CAPS eyebrows or single-word accenting.
- **Restraint** — one memorable 3D moment (the hero circuit canvas); everything else stays quiet and disciplined.
- **Accessibility floor** — responsive, keyboard-navigable, `prefers-reduced-motion` respected, high-contrast palettes.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| 3D | React Three Fiber + Drei + Three.js |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Language | TypeScript |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

### Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout + metadata
    page.tsx        # Assembles all sections
    globals.css     # Tailwind + EE design tokens
  components/
    Navbar.tsx      # Sticky navigation
    Footer.tsx      # Contact links + credits
    Hero.tsx        # Hero section with 3D circuit canvas
    CircuitCanvas.tsx  # Three.js PCB scene (nodes, traces, components)
    MotionCurve.tsx    # Animated signal curve
    About.tsx       # About + background
    Projects.tsx    # Project grid
    ProjectCard.tsx # Individual project card
    Skills.tsx      # Toolbox by category
    Experience.tsx  # Timeline of roles
    Contact.tsx     # Contact form + links
  lib/
    utils.ts        # cn() className helper
```

## Customizing

### Your info
Edit `src/app/page.tsx` section order if needed, then update each component:

- **Hero**: name, tagline, CTA links in `src/components/Hero.tsx`
- **About**: your bio, tools, location in `src/components/About.tsx`
- **Projects**: replace `PROJECTS` array in `src/components/Projects.tsx` with your real work (add `image` URLs if you have PCB renders/photos)
- **Skills**: update categories/items in `src/components/Skills.tsx`
- **Experience**: edit `EXPERIENCE` array in `src/components/Experience.tsx`
- **Contact**: email, GitHub, LinkedIn in `src/components/Contact.tsx`

### Colors
The EE palette lives in `tailwind.config.js` under `theme.extend.colors.ee`:

- `ee-dark` — deep navy background
- `ee-panel` — card/surface color
- `ee-cyan` — primary accent (trace color)
- `ee-copper` — secondary accent
- `ee-amber` — tertiary accent
- `ee-slate` — body text

### 3D scene
Edit `src/components/CircuitCanvas.tsx` to adjust node count, colors, trace density, or component shapes. The scene uses `icosahedronGeometry` for nodes, `boxGeometry` for components, and `TubeGeometry` for traces — all declarative via R3F.

## Accessibility & Performance

- `prefers-reduced-motion` is respected (3D canvas still renders but motion is minimal)
- Keyboard focus styles on all interactive elements
- Canvas uses `powerPreference: 'high-performance'` and lazy-renders only in the hero
- Fallback: if WebGL is unsupported, the canvas area remains empty but content stays readable

## License

MIT — see LICENSE in the root of the monorepo (this project reuses the Apache-2.0 skill terms from the source skill repository).
