"use client";
import React, {useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import "./_pagination.scss";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type PaginationProps = {
  // onPageChange: (
  //   newPage: number,
  //   dataPerPage?: number,
  //   firstIndex: number,
  //   lastIndex: number
  // ) => void;
  // itemsPerPage: number,
  // currentPage: number;
  totalItem: number;
};

const Pagination = ({
  // onPageChange,
  // currentPage,
  // itemsPerPage,
  totalItem,
}:PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [lastIndex, setLastIndex] = useState(2);
  const [firstIndex, setFirstIndex] = useState(1);
  const numberOfPages = Math.ceil(totalItem / itemsPerPage);

  const searchparams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  // const handlePageChange = (newPage: number, itemsPerPage?: number) => {
  //   itemsPerPage && setRowsPerPage(itemsPerPage);
  //   setLastIndex(Math.min(newPage * rowsPerPage, totalItem));
  //   setFirstIndex(Math.min(newPage * rowsPerPage, totalItem) - rowsPerPage + 1);
  //   // onPageChange(newPage, firstIndex, lastIndex);
  //   console.log("i am rowsPerPage", rowsPerPage);
  // };

  useEffect(()=>{
    setLastIndex(Math.min(currentPage * itemsPerPage, totalItem));
    setFirstIndex(currentPage * itemsPerPage - itemsPerPage + 1);
  }, [itemsPerPage, totalItem, currentPage])

  const handlePageChange =(pageNumber:number, dataPerPage?:number)=>{
    setCurrentPage(pageNumber);
    dataPerPage && setItemsPerPage(dataPerPage);

    const params = new URLSearchParams(searchparams);
    dataPerPage && params.set("itemsPerPage", dataPerPage.toString());
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params}`);
  }

  return (
    <div className="pagination-container">
      <div className="rows-per-page">
        <span>Rows Per Page:</span>
        <select
          name="rowsPerPage"
          id="rowsPerPage"
          onChange={(e) =>{
            handlePageChange(1, Number(e.target.value))}
          }
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
      <span className="rows-details">
        Items {firstIndex}-{lastIndex} of {totalItem}
      </span>
      <div className="btn-container">
        <button disabled={currentPage == 1} onClick={() => handlePageChange(1)}>
          <FiSkipBack />
        </button>
        <button
          disabled={currentPage == 1}
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
        >
          <MdArrowBackIosNew />
        </button>
        <button
          disabled={currentPage == numberOfPages}
          onClick={() =>
            handlePageChange(
              currentPage < numberOfPages ? currentPage + 1 : currentPage
            )
          }
        >
          <MdArrowForwardIos />
        </button>
        <button
          disabled={currentPage == numberOfPages}
          onClick={() => handlePageChange(numberOfPages)}
        >
          <FiSkipForward />
        </button>
      </div>
      <div>
        <span>
          Page {currentPage} of {numberOfPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
