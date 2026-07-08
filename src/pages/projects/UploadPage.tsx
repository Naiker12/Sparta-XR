import { Card } from '@/components/ui/card'
import { Upload } from 'lucide-react'

export function UploadPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Upload Model</h1>
        <p className="text-muted-foreground">Upload your 3D model to Sparta XR.</p>
      </div>

      <Card className="flex min-h-[300px] items-center justify-center border-dashed">
        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          <Upload className="h-12 w-12" />
          <div className="text-center">
            <p className="font-medium">Drop your model here</p>
            <p className="text-sm">or click to browse files</p>
          </div>
          <p className="text-xs text-muted-foreground">
            Supports: .glb, .gltf, .obj, .fbx (max 100MB)
          </p>
        </div>
      </Card>
    </div>
  )
}
