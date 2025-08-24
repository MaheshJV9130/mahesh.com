'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

import { FaBars } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai';
import MobileMenu from './MobileMenu'
const Nav = () => {
  const [isMenu, setIsMenu] = useState(false)
  const componentRef = useRef(0);
  


  const handleClickOutside = (event) => {

    if (componentRef.current && !componentRef.current.contains(event.target)) {
     setIsMenu(false);
    }
  };
   useEffect(() => {
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className='sticky top-0 z-20 block'>
        <nav className='h-16 flex justify-between relative items-center px-5 z-10 bg-white ' >
            <div className='logo cursor-pointer text-blue-950'>
                <p>&lt; Mahesh Vispute / &gt;</p>
            </div>
            <ol className='flex justify-center gap-10 '>
                <li className='links'><Link href='#home'>Home</Link></li>
                <li className='links'><Link href='#about'>About</Link></li>
                <li className='links'><Link href='#skills'>Skill</Link></li>
                <li className='links'><Link href='#eduction'>Eduction</Link></li>
                <li className='links'><Link href='#projects'>Projects</Link></li>
                <li className='links'><Link href='#contact'>Contact</Link></li>
                <li className='md:hidden'>
                  <button onClick={()=>setIsMenu((prev)=>!prev)}>
                    {isMenu ? <AiOutlineClose size={20}/> :<FaBars size={20}/>}
                  </button>
                </li>
            </ol>
        </nav>
        {isMenu&&<MobileMenu ref={componentRef} onclick={()=>setIsMenu(false)}/>}
    </header>
  )
}

export default Nav
