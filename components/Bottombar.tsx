import { navigations } from '@/lib/navigations'
import { Heart, House, Plus, Search, UserRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Bottombar = () => {
  return (
    <nav className='flex flex-row justify-around items-center h-7'> 
        <Link href={navigations.forYou}> <House />  </Link>
        <Link href={navigations.forYou}> <Search />  </Link>
        <Link href={navigations.forYou} className='p-2 bg-slate-800 rounded-md'> <Plus />  </Link>
        <Link href={navigations.forYou}> <Heart />  </Link>
        <Link href={navigations.forYou}> <UserRound /> </Link>
    </nav>
  )
}

export default Bottombar
