# 3D Viewer

## Features

- WebGL rendering via React Three Fiber
- Orbit controls (rotate, pan, zoom)
- Grid helper
- Lighting presets
- Measurement tools
- Screenshot capture
- Fullscreen mode
- AR mode (WebXR)

## Architecture

```typescript
<Canvas>
  <Scene />        // 3D scene with lighting
  <Model />        // Loaded 3D model
  <Controls />     // Orbit controls
  <UI />           // Overlay controls
</Canvas>
```

## Viewer Controls

- Rotate: Click + drag
- Pan: Right-click + drag
- Zoom: Scroll wheel
- Reset: Double-click
