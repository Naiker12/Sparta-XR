# Design System

## Colors

Defined as CSS variables in `src/styles/globals.css`:

- **Background** / **Foreground**
- **Primary** / **Primary Foreground**
- **Secondary** / **Secondary Foreground**
- **Muted** / **Muted Foreground**
- **Accent** / **Accent Foreground**
- **Destructive** / **Destructive Foreground**
- **Card** / **Card Foreground**
- **Popover** / **Popover Foreground**
- **Border** / **Input** / **Ring**
- **Sidebar** variants

## Typography

- Font: System font stack (default Tailwind)
- Sizes: Tailwind typography scale
- Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Spacing

- Uses Tailwind spacing scale (4px base)
- Component padding: `p-6` for cards
- Section spacing: `py-24` for large sections

## Border Radius

- Default: `0.5rem` (8px)
- Small: `calc(var(--radius) - 4px)`
- Large: `calc(var(--radius) + 4px)`

## Shadows

- Cards use `shadow-sm` by default
- Elevated states use `shadow-lg`

## Dark Mode

- Controlled via `next-themes` with `class` strategy
- Toggle available in dashboard topbar
- CSS variables automatically switch
