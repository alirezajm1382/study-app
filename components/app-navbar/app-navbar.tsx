import { NavigationMenu } from '@/components/ui/navigation-menu'
import { AppNavbarProps } from './@types/app-navbar.type'
import DecryptedTextClient from '@/components/bits/DecryptedText/DecryptedTextClient'

const AppNavbar: React.FunctionComponent<AppNavbarProps> = ({ children }) => {
  return (
    <NavigationMenu>
      {children}
      <DecryptedTextClient
        text='Study App'
        parentClassName='text-lg font-semibold z-1 ml-2'
        animateOn='view'
        speed={100}
        revealDirection='start'
        sequential={true}
      />
    </NavigationMenu>
  )
}

export default AppNavbar
