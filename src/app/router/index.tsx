import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingLayout } from '@/app/layouts/LandingLayout'
import { DashboardLayout } from '@/app/layouts/DashboardLayout'
import { AuthLayout } from '@/app/layouts/AuthLayout'

const LandingPage = lazy(() => import('@/pages/landing').then(m => ({ default: m.LandingPage })))
const FeaturesPage = lazy(() => import('@/pages/landing/FeaturesPage').then(m => ({ default: m.FeaturesPage })))
const PricingPage = lazy(() => import('@/pages/pricing').then(m => ({ default: m.PricingPage })))
const DocsPage = lazy(() => import('@/pages/docs').then(m => ({ default: m.DocsPage })))
const LoginPage = lazy(() => import('@/pages/auth/LoginPage').then(m => ({ default: m.LoginPage })))
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage').then(m => ({ default: m.RegisterPage })))
const DashboardPage = lazy(() => import('@/pages/dashboard').then(m => ({ default: m.DashboardPage })))
const ProjectsPage = lazy(() => import('@/pages/projects').then(m => ({ default: m.ProjectsPage })))
const ProjectDetailPage = lazy(() => import('@/pages/projects/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })))
const UploadPage = lazy(() => import('@/pages/projects/UploadPage').then(m => ({ default: m.UploadPage })))
const ModelsPage = lazy(() => import('@/pages/models').then(m => ({ default: m.ModelsPage })))
const QRPage = lazy(() => import('@/pages/qr').then(m => ({ default: m.QRPage })))
const ViewerPage = lazy(() => import('@/pages/viewer').then(m => ({ default: m.ViewerPage })))
const SettingsPage = lazy(() => import('@/pages/settings').then(m => ({ default: m.SettingsPage })))
const AccountPage = lazy(() => import('@/pages/account').then(m => ({ default: m.AccountPage })))

function PageLoader() {
  return (
    <div className="flex h-96 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="docs" element={<DocsPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="qr" element={<QRPage />} />
          <Route path="viewer" element={<ViewerPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
