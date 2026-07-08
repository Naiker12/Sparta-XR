# UI Guidelines

## Design Principles

1. **Minimalist**: Clean layouts with ample whitespace
2. **Consistent**: Reuse components and patterns
3. **Responsive**: Mobile-first approach
4. **Accessible**: ARIA labels, keyboard navigation, focus states
5. **Performant**: Code splitting, lazy loading, optimized assets

## Component Conventions

- Use TypeScript with proper types
- Forward refs where appropriate
- Use `cn()` for conditional classes
- Follow shadcn/ui patterns
- Add `displayName` to components

## Animation Guidelines

- Use `framer-motion` for animations
- Subtle transitions (150-300ms)
- Stagger children for lists
- Fade up for scroll reveals
- Smooth page transitions

## Accessibility

- Semantic HTML elements
- Focus indicators (ring-2)
- Screen reader text (sr-only)
- Keyboard navigation support
- Color contrast compliance
