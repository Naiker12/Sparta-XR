import {
  AudioWaveform,
  Box,
  Command,
  Eye,
  FolderKanban,
  GalleryVerticalEnd,
  LayoutDashboard,
  QrCode,
  Settings,
  User,
} from 'lucide-react'
import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'John Doe',
    email: 'john@spartaxr.com',
    avatar: '',
  },
  teams: [
    {
      name: 'Sparta XR',
      logo: GalleryVerticalEnd,
      plan: 'Free',
    },
    {
      name: 'Sparta XR Pro',
      logo: AudioWaveform,
      plan: 'Pro',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: FolderKanban,
    },
    {
      title: 'Models',
      url: '/models',
      icon: Box,
    },
    {
      title: 'QR Codes',
      url: '/qr',
      icon: QrCode,
    },
    {
      title: 'Viewer',
      url: '/viewer',
      icon: Eye,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
    },
    {
      title: 'Account',
      url: '/account',
      icon: User,
    },
  ],
  projects: [
    {
      name: 'Architecture Demo',
      url: '/projects/1',
      icon: Command,
    },
    {
      name: 'Product Viewer',
      url: '/projects/2',
      icon: Box,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
