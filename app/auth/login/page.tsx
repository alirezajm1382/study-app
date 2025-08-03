import { Metadata } from 'next'
import LoginCard from '@/components/login-card'

export const metadata: Metadata = {
  title: 'Log In | Study App',
}

const LoginRoute = () => {
  return <LoginCard />
}

export default LoginRoute
