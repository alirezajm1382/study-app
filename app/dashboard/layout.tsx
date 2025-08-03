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
        <SidebarInset className=' max-h-12 h-12'>
          <header className='flex shrink-0 items-center gap-2 transition-[width,height] ease-linear h-12'>
            <div className='flex items-center gap-2 px-4 '>
              <AppNavbar>
                <SidebarTrigger className='-ml-1' />
              </AppNavbar>
            </div>
          </header>
          <SidebarSeparator className='mx-0'/>
        </SidebarInset>
        <main className='grow-1'>{children}</main>
      </div>
    </SidebarProvider>
  )
}
