import React from 'react'
import "./_search.scss"
import { MdSearch } from 'react-icons/md'

type Props = {
    placeholder: string
}

const Search = (props:Props) => {
  return (
    <div className="search">
    <MdSearch />
    <input type="text" placeholder={props.placeholder} />
  </div>
  )
}

export default Search