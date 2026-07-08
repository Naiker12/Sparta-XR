import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Grid infiniteGrid />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hsl(var(--primary))" />
      </mesh>
    </>
  )
}

export function ViewerPage() {
  return (
    <div className="h-[calc(100vh-8rem)] w-full rounded-xl border bg-card">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
