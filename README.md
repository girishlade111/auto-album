# Auto Album

A sleek, modern web showcase for car enthusiasts — browse iconic cars, explore detailed car pages with image galleries, and learn about the collection through a polished, responsive interface.

## Features

- **Car gallery** — browse a curated collection of iconic cars with rich cards
- **Car detail pages** — dedicated pages per car with images, specs, and history
- **Responsive design** — mobile-first layout built with Tailwind CSS and shadcn/ui components
- **Smooth navigation** — client-side routing (react-router-dom) with dedicated routes for Home, Cars, About, and 404
- **Modern UI kit** — Radix-based components (dialogs, tooltips, carousels, toasts) with animations

## Tech stack

- **Frontend:** React 18 + TypeScript, Vite 5
- **Styling:** Tailwind CSS, shadcn/ui, Radix UI primitives
- **Routing:** react-router-dom v6
- **State/data:** TanStack React Query
- **Extras:** embla carousels, recharts, sonner toasts

## Quick start

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/girishlade111/auto-album.git
cd auto-album
npm install
npm run dev        # start dev server at http://localhost:8080
```

Build for production:

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build
```

## Project structure

```
auto-album/
├── index.html            # entry HTML
├── public/               # static assets (car images, favicon)
├── src/
│   ├── App.tsx           # routes: /, /cars, /car/:id, /about
│   ├── main.tsx          # React entry
│   ├── pages/            # Index, Cars, CarDetail, About, NotFound
│   ├── components/       # Hero, Navbar, Footer, CarCard, CarGallery
│   └── components/ui/   # shadcn/ui primitives
├── supabase/             # supabase config (optional backend hookup)
└── vite.config.ts        # Vite config (base path set for GitHub Pages)
```

## Environment variables

None required — the app runs fully client-side. An optional Supabase client stub exists under `src/integrations/supabase/` if you want to wire up a backend; add your own project URL and publishable key.

## Deploy notes

The app is fully static (no server code), so it deploys anywhere static hosting is available. It is deployed on **GitHub Pages**: the production `vite build` output is published to the `gh-pages` branch, with `base: "/auto-album/"` configured in `vite.config.ts` and matching `basename` in the router.

---

Built by Girish Lade — https://ladestack.in
