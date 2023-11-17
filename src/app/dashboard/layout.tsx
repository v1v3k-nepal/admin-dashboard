import Navbar from '@/components/dashboard_ui/navbar/navbar'
import Sidebar from '@/components/dashboard_ui/sidebar/sidebar'
import React from 'react'
import "./_dashboard.scss"

type Props = {
  children: React.ReactNode
}

const Layout = (props:Props) => {
  return (
    <div className='container'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='content'>
            <Navbar/>
            {props.children}
        </div>
    </div>
  )
}

export default Layout