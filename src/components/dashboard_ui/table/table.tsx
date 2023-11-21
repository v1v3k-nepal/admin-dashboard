import React from "react";
import Search from "../search/search";
import Link from "next/link";
import Pagination from "../pagination/pagination";
import "./_table.scss";
import AnimatedTd from "./animated_td";

const Table = <T, K extends Extract<keyof T, string>>({
  data,
  columns,
}: Com.TableProps<T, K>) => {
  return (
    <div className="table-container">
      <div className="top">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button>Add New</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th key={index}>{item.thead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <AnimatedTd key={col.field} id={index}>
                  {col.render?.(obj[col.field], obj)}
                </AnimatedTd>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Table;

{
  /* <td>
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
              </td> */
}
