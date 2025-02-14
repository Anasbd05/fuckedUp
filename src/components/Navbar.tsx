import {getUser} from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {

  const user = await getUser()
  return (
    <nav className='flex py-2 px-10 border-b border-accent justify-between items-center '>
        <Link href={"/"}>
        <Image src={"/logo.png"} alt='' width={60} height={60} />
        </Link>
        <ul className='flex gap-8'>
            <Link href={"/"} className='font-medium hover:text-accent'>Home</Link>
            <Link href={"/"} className='font-medium hover:text-accent'>Features</Link>
            <Link href={"/"} className='font-medium hover:text-accent'>Pricing</Link>
        </ul>

      <div className=''>
        {user ? `logged in as ${user.email}` :
        <button className='py-1 px-5 bg-primary rounded-full duration-200 shadow-[3px_3px_#000] hover:shadow-[3px_4px_#000] '>Sign up</button> }
      </div>

    </nav>
  )
}

export default Navbar
