import React from 'react'
import type { Metadata } from 'next'

// components
import SquaresClient from '@/components/bits/Squares/SquaresClient'
import AuthLayoutIconButton from '@/components/AuthLayoutIconButton'

// metadata
export const metadata: Metadata = {
  title: 'Auth | Study App',
  description: 'For better self-improvement',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex justify-center items-center h-dvh'>
      <AuthLayoutIconButton />
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <SquaresClient
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#000'
          hoverFillColor='#bbb'
        />
      </div>
      {children}
    </div>
  )
}
