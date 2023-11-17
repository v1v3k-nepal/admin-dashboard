"use client"
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import "./_navbar.scss"
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='navbar-container'>
      <div className='nav-title'>{pathname.split("/").pop()}</div>
      <div className="menu">
        <div className="search">
          <MdSearch/>
          <input type="text" placeholder='Search...'/>
        </div>
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