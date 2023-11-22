"use client";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import "./_pagination.scss";

type PaginationProps = {
  onPageChange: (
    newPage: number,
    firstIndex: number,
    lastIndex: number
  ) => void;
  currentPage: number;
  totalItem: number;
};

const Pagination = ({
  onPageChange,
  currentPage,
  totalItem,
}: PaginationProps) => {
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [lastIndex, setLastIndex] = useState(2);
  const [firstIndex, setFirstIndex] = useState(1);
  const numberOfPages = Math.ceil(totalItem / rowsPerPage);

  const handlePageChange = (newPage: number, itemsPerPage?: number) => {
    itemsPerPage && setRowsPerPage(itemsPerPage);
    setLastIndex(Math.min(newPage * rowsPerPage, totalItem));
    setFirstIndex(Math.min(newPage * rowsPerPage, totalItem) - rowsPerPage + 1);
    onPageChange(newPage, firstIndex, lastIndex);
    console.log("i am rowsPerPage", rowsPerPage);
  };

  return (
    <div className="pagination-container">
      <div className="rows-per-page">
        <span>Rows Per Page:</span>
        <select
          name="rowsPerPage"
          id="rowsPerPage"
          onChange={(e) =>
            handlePageChange(currentPage, Number(e.target.value))
          }
        >
          <option value={2}>2</option>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
          <option value={12}>12</option>
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
