import AppNavbar from '@/components/app-navbar/app-navbar'
import { AppSidebar } from '@/components/app-sidebar/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar'
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
