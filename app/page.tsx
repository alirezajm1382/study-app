import Link from 'next/link'

// components
import DecryptedTextClient from '@/components/bits/DecryptedText/DecryptedTextClient'
import SquaresClient from '@/components/bits/Squares/SquaresClient'
import { Button } from '@/components/ui/button'

// types
import { Metadata } from 'next'

// metadata
export const metadata: Metadata = {
  title: 'Home | Study App',
  description: 'For better self-improvement',
}

export default function Home() {
  return (
    <div className='flex justify-center items-center h-dvh'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-black z-0'>
        <SquaresClient
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#333'
          hoverFillColor='#222'
        />
      </div>
      <div className='flex flex-col gap-8 z-1'>
        <DecryptedTextClient
          parentClassName='text-6xl font-black font-mono text-white'
          text={`Study App.`}
          animateOn='view'
          speed={100}
          revealDirection='start'
          sequential={true}
        />
        <Link href='/auth' className='flex justify-center' prefetch>
          <Button variant='secondary'>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}
