'use client'
// components
import DecryptedText from '@/components/bits/DecryptedText/DecryptedText'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

// hooks
import { useUserStore } from '@/lib/stores/auth.store'

const UserBadge: React.FunctionComponent = () => {
  const { user } = useUserStore()
  return (
    <div className='flex flex-row gap-2 ms-1 items-center'>
      {user ? (
        <>
          <Avatar className='size-8'>
            <AvatarFallback className='bg-blue-100 text-blue-950'>
              {user?.email?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <DecryptedText
            text={user?.email || ''}
            parentClassName='text-xs z-1'
            animateOn='view'
            speed={100}
            revealDirection='start'
            sequential={true}
          />
        </>
      ) : (
        <>
          <Skeleton className='size-8 rounded-full' />
          <div className='flex flex-col gap-2'>
            <Skeleton className='h-3 w-32' />
          </div>
        </>
      )}
    </div>
  )
}

export default UserBadge
