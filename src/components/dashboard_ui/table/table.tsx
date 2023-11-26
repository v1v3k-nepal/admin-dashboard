"use client"
import React from "react";
import Pagination from "../pagination/pagination";
import "./_table.scss";
import AnimatedTd from "./animated_td";

const Table = <T, K extends Extract<keyof T, string>>({
  data,
  columns,
  itemCount,
}: Com.TableProps<T, K>) => {

  return (
    <div className="table-container">
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
      <div className="pagination">
      <Pagination totalItem={itemCount}/>
      </div>
    </div>
  );
};

export default Table;
