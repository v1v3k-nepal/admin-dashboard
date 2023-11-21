"use client"
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import {motion} from "framer-motion"
import "./_navbar.scss"
import { usePathname } from 'next/navigation'
import Search from '../search/search'


const Navbar = () => {
  const pathname = usePathname();
  return (
    <motion.div className='navbar-container'
    initial={{opacity: 0, scale: 0.6}}
    animate={{opacity: 1, scale: 1}}
    transition={{
      delay: 0.5,
      ease: "easeIn"
    }}
    >
      <div className='nav-title'>{pathname.split("/").pop()}</div>
      <div className="menu">
        <Search placeholder='Search...'/>
        <div className="icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar