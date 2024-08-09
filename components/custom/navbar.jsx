import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '../ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ModeToggle } from '../theme-toggler'
export default function NavBar() {
  return (
    <div className='w-full sticky top-0 bg-white dark:bg-neutral-900 border border-b-neutral-300 p-4 px-8 z-50 flex '>
      <Sheet>
        <SheetTrigger className=""><HamburgerMenuIcon size={64} /></SheetTrigger>
        <SheetContent side="left">
          <nav className='flex flex-col p-4 text-center text-neutral-500 dark:text-white text-2xl'>
            <Link className='px-4 py-2 border-b-2 border-transparent hover:border-black/50 duration-200' href="/dashboard">Dashboard</Link>
            <Link className='px-4 py-2 border-b-2 border-transparent hover:border-black/50 duration-200' href="/dashboard/projects">Projects</Link>
            <Link className='px-4 py-2 border-b-2 border-transparent hover:border-black/50 duration-200' href="/dashboard/myprojects">My Projects</Link>
            <Link className='px-4 py-2 border-b-2 border-transparent hover:border-black/50 duration-200' href="/dashboard/chat">Chat</Link>
          </nav>
        </SheetContent>
      </Sheet>
      <header className='text-4xl w-36 lg:w-24 mx-auto lg:mx-0 uppercase font-thin'><Link href="/dashboard">Master</Link></header>
    </div>
  )
}
