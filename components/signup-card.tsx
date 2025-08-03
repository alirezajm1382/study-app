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
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/auth.hook'
import { zodResolver } from '@hookform/resolvers/zod'

// types
import { AuthFormProps } from '@/lib/types/auth.type'

const SignupCard: React.FunctionComponent = () => {
  const { signUp } = useAuth()
  const router = useRouter()
  // login form schema
  const SignupSchema = z.object({
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z.string().min(1, { message: 'Password is required.' }),
  })

  // form definition
  const signupForm = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // redirect and handle signup state
  const handleSignUp = async (formData: AuthFormProps) => {
    signUp(formData)
      .then((data) => {
        toast.success('Welcome', {
          description: `A confirmation email has been sent to ${data.data.user?.email}. Confirm and enjoy your stay!`,
        })
        setTimeout(() => {
          router.push('/')
        }, 3000)
      })
      .catch((error) => {
        toast('Something went wrong!', {
          description: `Try again in a little bit! ${error}`,
        })
      })
  }

  return (
    <Card className='w-full max-w-sm bg-base-100 shadow-xl m-2 z-1 bg-background'>
      <CardHeader>
        <CardTitle className='flex flex-row items-center'>
          <DecryptedText
            parentClassName='text-4xl font-bold font-mono z-1'
            text={`Sign Up.`}
            animateOn='view'
            speed={100}
            revealDirection='start'
            sequential={true}
          />
        </CardTitle>
        <CardDescription>
          <p>For the greater good!</p>
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Form {...signupForm}>
          <form
            className='w-full flex flex-col gap-4'
            onSubmit={signupForm.handleSubmit(handleSignUp)}
          >
            <FormField
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='messi@email.com'
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
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default SignupCard
