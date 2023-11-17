"use client"
import React from 'react'
import "./_menuLink.scss"
import Link from 'next/link'
import { TmenuLink } from '@/types/types'
import { usePathname } from 'next/navigation'

type Props = {
    item: TmenuLink
}

const MenuLink = (props: Props) => {
  const pathname = usePathname();
  return (
    <Link href={props.item.path} className={`menu-links ${pathname== props.item.path? 'active': ''}`}>
        {props.item.icon}
        {props.item.title}
    </Link>
  )
}

export default MenuLink