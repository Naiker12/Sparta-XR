# Routing

## Public Routes

| Path | Page | Layout |
|------|------|--------|
| `/` | Landing | LandingLayout |
| `/features` | Features | LandingLayout |
| `/pricing` | Pricing | LandingLayout |
| `/docs` | Documentation | LandingLayout |

## Auth Routes

| Path | Page | Layout |
|------|------|--------|
| `/login` | Login | AuthLayout |
| `/register` | Register | AuthLayout |

## Protected Routes

| Path | Page | Layout |
|------|------|--------|
| `/dashboard` | Dashboard | DashboardLayout |
| `/projects` | Projects | DashboardLayout |
| `/projects/:id` | Project Detail | DashboardLayout |
| `/upload` | Upload | DashboardLayout |
| `/models` | Models | DashboardLayout |
| `/qr` | QR Codes | DashboardLayout |
| `/viewer` | 3D Viewer | DashboardLayout |
| `/settings` | Settings | DashboardLayout |
| `/account` | Account | DashboardLayout |

## Route Configuration

Defined in `src/app/router/index.tsx` using React Router v7 with nested layouts.
