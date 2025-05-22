'use client'
import React from 'react'

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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginPage: React.FunctionComponent = () => {
  // login form schema
  const LoginSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(1, { message: 'Password is required.' }),
  })

  // form definition
  const loginForm = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  //TODO: handle login

  return (
    <Card className='w-full max-w-sm bg-base-100 shadow-xl m-2 z-1 bg-background'>
      <CardHeader>
        <CardTitle className='flex flex-row items-center'>
          <DecryptedText
            parentClassName='text-4xl font-bold font-mono z-1'
            text={`Login.`}
            animateOn='view'
            speed={100}
            revealDirection='start'
            sequential={true}
          />
        </CardTitle>
        <CardDescription>
          <p>Self-improvement awaits in Study App!</p>
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Form {...loginForm}>
          <form
            className='w-full flex flex-col gap-4'
            onSubmit={loginForm.handleSubmit((data) => console.log(data))}
          >
            <FormField
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='leomessi' {...field} />
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

export default LoginPage
