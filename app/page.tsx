import SquaresClient from '@/components/bits/Squares/SquaresClient'

import { Metadata } from 'next'

// metadata
export const metadata: Metadata = {
  title: 'Home | Study App',
  description: 'For better self-improvement',
}

export default function Home() {
  return (
    <div className='flex justify-center items-center h-dvh'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-black'>
        <SquaresClient
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#333'
          hoverFillColor='#222'
        />
      </div>
    </div>
  )
}
