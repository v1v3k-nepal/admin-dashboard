"use client"
import React, {useState, useEffect} from "react";
import { MdArrowForwardIos, MdArrowBackIosNew} from "react-icons/md";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import "./_pagination.scss"
// import { usersData } from "@/app/lib/data";

const Pagination = ({data, onPageChange}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [updatedData, setUpdatedData] = useState(data)
  const lastIndex = currentPage*rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1
  const numberOfPages = Math.ceil(data.length/rowsPerPage)

  useEffect(()=>{
    setUpdatedData(data.slice(firstIndex, lastIndex+1))
    onPageChange(updatedData)
  },[currentPage, rowsPerPage])

  return (
    <div className="pagination-container">
      <div className="rows-per-page">
        <p>Rows Per Page:</p>
        <select name="rowsPerPage" id="rowsPerPage"  
        // onChange={(e)=> setRowsPerPage(Number(e.target.value))}
        >
          {/* <option value={rowsPerPage}>2</option> */}
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
      <span className="rows-details">{firstIndex}-{lastIndex} of {data.length}</span>
      <div className="btn-container">
        <FiSkipBack onClick={()=>setCurrentPage(1)}/>
        <MdArrowBackIosNew onClick={()=>setCurrentPage((prev)=> prev > 1 ? prev - 1 : 1)}/>
        <MdArrowForwardIos onClick={()=> setCurrentPage((prev)=> prev < numberOfPages ? prev + 1: prev)}/>
        <FiSkipForward onClick={()=>setCurrentPage(numberOfPages)}/>
        <p>{currentPage}</p>
      </div>
    </div>
  );
};

export default Pagination;

//setCurrentPage((prev)=> prev > 1 ? prev - 1 : 1)}
//setCurrentPage((prev)=> prev < numberOfPages ? prev + 1: prev)}
//setCurrentPage(numberOfPages)}
