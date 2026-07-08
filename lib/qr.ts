export function getArUrl(slug: string): string {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/ar/${slug}`
  }
  return `/ar/${slug}`
}
