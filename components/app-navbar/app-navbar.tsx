import { NavigationMenu } from '@/components/ui/navigation-menu'
import { AppNavbarProps } from './@types/app-navbar.type'
import DecryptedTextClient from '@/components/bits/DecryptedText/DecryptedTextClient'
import { ToggleDarkMode } from './components/toggle-dark-mode'
import { SidebarInset, SidebarSeparator, SidebarTrigger } from '../ui/sidebar'

const AppNavbar: React.FunctionComponent<AppNavbarProps> = ({ children }) => {
  return (
    <SidebarInset className='max-h-14'>
      <div className='flex flex-row items-center justify-between mx-2'>
        <NavigationMenu className='flex flex-row grow-1 shrink-0 items-center gap-2 transition-[width,height] ease-linear h-14'>
          <div className='flex flex-row items-center'>
            <SidebarTrigger className='-ml-1' />
            <DecryptedTextClient
              text='Study App'
              parentClassName='text-lg font-semibold z-1 ml-2'
              animateOn='view'
              speed={100}
              revealDirection='start'
              sequential={true}
            />
            {children}
          </div>
        </NavigationMenu>
        <ToggleDarkMode />
      </div>
      <SidebarSeparator className='mx-0' />
    </SidebarInset>
  )
}

export default AppNavbar
