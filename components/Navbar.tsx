'use client' 
import React from 'react'
import Link from 'next/link'
import { BookOpenText } from 'lucide-react'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname(); 
    const forYouLink = '/forYou'
    const followingLink = '/following'
    return (
        <div className='flex flex-col justify-center items-center p-2 gap-4 h-[90px]'>
            <BookOpenText className='pt-1' />
            <nav className='flex flex-row justify-around w-full items-center gap-0'>
                <Link href={forYouLink} className={`w-1/2  hover:no-underline text-center pb-1 ${pathname == forYouLink ? 'border-b rounded-none border-b-slate-200' : ''}`}>for you</Link>
                <Link href={followingLink} className={`w-1/2  hover:no-underline text-center pb-1 ${pathname == followingLink ? 'border-b rounded-none border-b-slate-200' : ''}`}>Following</Link>
            </nav>
        </div>
    )
}

export default Navbar
