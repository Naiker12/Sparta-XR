import { useParams } from 'react-router-dom'

export function ProjectDetailPage() {
  const { id } = useParams()
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Project {id}</h1>
      <p className="text-muted-foreground">Project details and management.</p>
    </div>
  )
}
