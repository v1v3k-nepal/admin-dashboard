import React from 'react'
import Search from '../search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../pagination/pagination'
import "./_table.scss"
import { TproductData, TuserData } from '@/types/types'

type Props = {
  theadData: string[],
  tbodyData: TproductData | TuserData,
}

const Table = ({theadData, tbodyData}:Props) => {
  return (
    <div className="table-container">
    <div className="top">
      <Search placeholder="Search for a user..."/>
      <Link href="/dashboard/users/add">
        <button>Add New</button>
      </Link>
    </div>
    <table>
      <thead>
        <tr>
            {theadData.map((item, index)=>(
                <th key={index}>{item}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="details">
                <Image
                  src={item?.userImg || item?.productImg}
                  alt="image icon"
                  height={40}
                  width={40}
                  className="img"
                ></Image>
                <span>{item.userName || item.product}</span>
              </div>
            </td>
            <td>{item?.email || item?.desc}</td>
            <td>{item?.createdAt}</td>
            <td>{item?.role || item?.price}</td>
            <td>{item?.status || item?.stock}</td>
            <td>
              <div className="btn-container">
                <Link href={`/dashboard/users/${item.id}`}>
                  <button className="view">View</button>
                </Link>
                <button className="delete">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination/>
  </div>
  )
}

export default Table