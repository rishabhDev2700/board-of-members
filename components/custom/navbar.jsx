import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '../ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ModeToggle } from '../theme-toggler'
export default function NavBar() {
  return (
    <div className='w-full sticky top-0 bg-white dark:bg-neutral-900 border border-b-neutral-300 p-4 px-8 z-50 flex lg:grid lg:grid-cols-4'>
      <Sheet>
        <SheetTrigger className="lg:hidden"><HamburgerMenuIcon size={64} /></SheetTrigger>
        <SheetContent side="left">
          <nav className='flex flex-col p-4 text-center text-neutral-500 dark:text-white text-2xl'>
            <Link className="py-4 hover:text-black" href="/dashboard/projects">Projects</Link>
            <Link className="py-4 hover:text-black" href="/dashboard/tasks">Tasks</Link>
            <ModeToggle />
            <Link className="py-4 hover:text-black" href="/logout"><Button className="w-full" variant="destructive">Logout</Button></Link>
          </nav>
        </SheetContent>
      </Sheet>
      <header className='text-4xl w-36 lg:w-24 mx-auto lg:col-start-2 lg:mx-0 uppercase font-thin'><Link href="/dashboard">Master</Link></header>
      <nav className='hidden lg:col-start-3 lg:mr-auto lg:flex justify-start'>
        <Button className="mx-4"><Link href="/dashboard">Dashboard</Link></Button>
        <Button className="mx-4"><Link href="/dashboard/projects">Projects</Link></Button>
        <Button className="mx-4"><Link href="/dashboard/myprojects">My Projects</Link></Button>
        <Button className="mx-4"><Link href="/dashboard/chat">Chat</Link></Button>
        <ModeToggle />
      </nav>
    </div>
  )
}
