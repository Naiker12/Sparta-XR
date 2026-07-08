# Components

## UI Components (shadcn/ui)

Located in `src/components/ui/`. Built on Radix UI primitives with Tailwind CSS.

| Component | Status |
|-----------|--------|
| Button | ✅ |
| Card | ✅ |
| Input | ✅ |

More components can be added via:
```bash
pnpm dlx shadcn@latest add [component-name]
```

## Layout Components

| Component | File | Purpose |
|-----------|------|---------|
| Navbar | `layout/Navbar.tsx` | Top navigation for public pages |
| Footer | `layout/Footer.tsx` | Footer for public pages |
| Sidebar | `layout/Sidebar.tsx` | Side navigation for dashboard |
| Topbar | `layout/Topbar.tsx` | Top bar for dashboard |

## Shared Components

| Component | File | Purpose |
|-----------|------|---------|
| ModeToggle | `shared/ModeToggle.tsx` | Dark/light mode toggle |
