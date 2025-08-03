'use client'

// components
import { Button } from '@/components/ui/button'
import DecryptedText from '@/components/bits/DecryptedText/DecryptedText'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// hooks and utils
import z from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/lib/hooks/auth.hook'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

// props

import { useUserStore } from '@/lib/stores/auth.store'
import { AuthFormProps } from '@/lib/types/auth.type'

const LoginCard: React.FunctionComponent = () => {
  const { login } = useAuth()
  const { user } = useUserStore()
  const router = useRouter()
  // login form schema
  const LoginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z.string().min(1, { message: 'Password is required.' }),
  })

  // form definition
  const loginForm = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // redirect and handle login state
  const handleLogin = (formData: AuthFormProps) => {
    login(formData)
      .then(() => {
        toast.success('Welcome back!', { description: 'Enjoy your session!' })
        console.log(user)
        setTimeout(() => {
          router.push('/')
        }, 3000)
      })
      .catch((error) => {
        toast.error('Something went wrong!', {
          description: 'Try again in a little bit!',
        })
      })
  }

  return (
    <Card className='w-full max-w-sm bg-base-100 shadow-xl m-2 z-1 bg-background'>
      <CardHeader>
        <CardTitle className='flex flex-row items-center'>
          <DecryptedText
            parentClassName='text-4xl font-bold font-mono z-1'
            text={`Log In.`}
            animateOn='view'
            speed={100}
            revealDirection='start'
            sequential={true}
          />
        </CardTitle>
        <CardDescription>
          <p>Self-improvement awaits!</p>
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Form {...loginForm}>
          <form
            className='w-full flex flex-col gap-4'
            onSubmit={loginForm.handleSubmit(handleLogin)}
          >
            <FormField
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='joedoe@email.com'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='********' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' variant='default'>
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginCard
