import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

export function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your 3D projects.</p>
        </div>
        <Link to="/upload">
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> New Project
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex h-48 items-center justify-center border-dashed">
          <Link to="/upload" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground">
            <Plus className="h-8 w-8" />
            <span className="text-sm font-medium">Create your first project</span>
          </Link>
        </Card>
      </div>
    </div>
  )
}
