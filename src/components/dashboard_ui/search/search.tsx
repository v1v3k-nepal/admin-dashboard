import React from 'react'
import "./_search.scss"
import { MdSearch } from 'react-icons/md'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

type Props = {
    placeholder: string
}

const Search = (props:Props) => {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const params = new URLSearchParams(searchparams);
    if(e.target.value){
      (e.target.value).length > 2 &&  params.set("q", e.target.value);
    }else{
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }

  return (
    <div className="search">
    <MdSearch />
    <input type="text" placeholder={props.placeholder} onChange={(e)=>handleSearch(e)}/>
  </div>
  )
}

export default Search