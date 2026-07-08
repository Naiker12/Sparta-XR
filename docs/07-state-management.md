# State Management

## Server State (TanStack Query)

All API data is managed through TanStack Query for caching, refetching, and mutations.

```typescript
const { data: projects } = useQuery({
  queryKey: ['projects'],
  queryFn: () => api.projects.list(),
})
```

## Client State

- **Theme**: Managed by `next-themes`
- **Auth**: Token stored in localStorage, managed via auth service
- **UI State**: Local React state or URL search params
