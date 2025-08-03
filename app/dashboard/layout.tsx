// components
import AppNavbar from '@/components/app-navbar/app-navbar'
import AppSidebar from '@/components/app-sidebar/app-sidebar'

// providers
import { SidebarProvider } from '@/components/ui/sidebar'

// types
import { Metadata } from 'next'

// metadata
export const metadata: Metadata = {
  title: 'Dashboard | Study App',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='flex flex-col w-full'>
        <AppNavbar />
        <main className='grow-1'>{children}</main>
      </div>
    </SidebarProvider>
  )
}
