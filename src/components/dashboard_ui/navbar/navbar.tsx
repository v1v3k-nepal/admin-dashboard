"use client"
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import "./_navbar.scss"
import { usePathname } from 'next/navigation'
import Search from '../search/search'


const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='navbar-container'>
      <div className='nav-title'>{pathname.split("/").pop()}</div>
      <div className="menu">
        <Search placeholder='Search...'/>
        <div className="icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar