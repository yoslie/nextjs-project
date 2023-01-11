import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () =>{
  return (
    <nav className='flex items-center justify-between w-screen h-12 fixed top-0 z-50 bg-transparent sm:h-16 lg:h-20 transition-colors ease-brand duration-250 p-12'>
      <div className='flex'>
        <Image
          alt="Yoslie logo"
          width={24}
          height={24}
          src='/image/logo-black.svg'
        />
        <span className='pl-2 text-white'>
          Personal Portofolio
        </span>
      </div>
      <div className='flex gap-6 text-white'>
        <Link className='hover:text-gray-600' href='/'>Home</Link>
        <Link className='hover:text-gray-600' href='#experience'>Experience</Link>
        <Link className='hover:text-gray-600' href='#skills'>Skills</Link>
        <Link className='hover:text-gray-600' href='#project'>Project</Link>
        <Link className='hover:text-gray-600' href='#contact'>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;