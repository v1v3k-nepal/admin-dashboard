import React from 'react'
import Search from '../search/search'
import Link from 'next/link'
import "./_tableTopPart.scss"

type Props = {
    path: string,
    placeholder: string,
}

export const TableTopPart = ({path, placeholder}:Props) => {
  return (
    <div className="top">
    <Search placeholder={placeholder} />
    <Link href={path}>
      <button>Add New</button>
    </Link>
  </div>
  )
}
