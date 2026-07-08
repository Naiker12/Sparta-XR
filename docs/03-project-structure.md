# Project Structure

```
sparta-xr/
├── public/
├── src/
│   ├── app/
│   │   ├── providers/        # React context providers
│   │   ├── router/           # Route definitions
│   │   └── layouts/          # Page layouts
│   ├── pages/                # Route pages
│   │   ├── landing/          # Public landing page
│   │   ├── auth/             # Login / Register
│   │   ├── dashboard/        # Main dashboard
│   │   ├── projects/         # Project management
│   │   ├── models/           # Model management
│   │   ├── qr/               # QR code generation
│   │   ├── viewer/           # 3D viewer
│   │   ├── account/          # Account settings
│   │   ├── settings/         # App settings
│   │   ├── pricing/          # Pricing page
│   │   └── docs/             # Documentation
│   ├── components/           # Reusable components
│   │   ├── ui/               # shadcn/ui primitives
│   │   ├── layout/           # Layout components
│   │   ├── landing/          # Landing page components
│   │   ├── dashboard/        # Dashboard components
│   │   ├── viewer/           # 3D viewer components
│   │   ├── qr/               # QR-related components
│   │   ├── forms/            # Form components
│   │   ├── charts/           # Chart components
│   │   └── shared/           # Shared utilities
│   ├── features/             # Feature modules
│   ├── hooks/                # Custom hooks
│   ├── services/             # API & services
│   ├── lib/                  # Utilities
│   ├── store/                # State management
│   ├── assets/               # Static assets
│   ├── styles/               # Global styles
│   ├── types/                # TypeScript types
│   ├── utils/                # Helper functions
│   └── constants/            # Constants
├── docs/                     # Documentation
├── components.json           # shadcn/ui config
├── vite.config.ts
├── tsconfig.json
└── package.json
```
