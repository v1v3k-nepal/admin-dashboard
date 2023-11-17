import Navbar from '@/components/dashboard_ui/navbar/navbar'
import Sidebar from '@/components/dashboard_ui/sidebar/sidebar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = (props:Props) => {
  return (
    <div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Navbar/>
            {props.children}
        </div>
    </div>
  )
}

export default Layout