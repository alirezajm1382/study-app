import { Metadata } from 'next'
import SignupCard from '@/components/signup-card'

export const metadata: Metadata = {
  title: 'Sign Up | Study App',
}

const SignupRoute = () => {
  return <SignupCard />
}

export default SignupRoute
