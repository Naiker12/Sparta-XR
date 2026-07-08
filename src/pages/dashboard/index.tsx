import { Card } from '@/components/ui/card'
import { FolderKanban, Box, QrCode, Eye } from 'lucide-react'

const stats = [
  { label: 'Projects', value: '0', icon: FolderKanban },
  { label: 'Models', value: '0', icon: Box },
  { label: 'QR Codes', value: '0', icon: QrCode },
  { label: 'Views', value: '0', icon: Eye },
]

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your Sparta XR workspace.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
