import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to handle clicking on the next page button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Function to handle clicking on the previous page button
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Function to render the page numbers in the pagination component
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3; // Maximum number of pages to show in pagination
    const range = Math.floor(maxPagesToShow / 2);

    let startPage = currentPage - range;
    let endPage = currentPage + range;

    // Adjust start and end page numbers based on the range and total pages
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Add ellipsis or page numbers based on the range and current page
    if (startPage > 1) {
      pageNumbers.push(
        <span
          key={1}
          className="pageNumber px-3 py-1 mx-2 rounded-md shadow-md cursor-pointer"
          onClick={() => onPageChange(1)}
        >
          1
        </span>
      );

      if (startPage > 2) {
        pageNumbers.push(
          <span
            key="ellipsisStart"
            className="pageNumber px-3 py-1 mx-2 rounded-md shadow-md cursor-pointer"
          >
            .....
          </span>
        );
      }
    }

    // Render page numbers within the visible range
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`pageNumber px-3 py-1 mx-2 rounded-md shadow-md cursor-pointer ${
            currentPage === i ? "bg-white" : ""
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </span>
      );
    }

    // Add ellipsis or last page number if applicable
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span
            key="ellipsisEnd"
            className="pageNumber px-3 py-1 mx-2 rounded-md shadow-md cursor-pointer"
          >
            .....
          </span>
        );
      }

      pageNumbers.push(
        <span
          key={totalPages}
          className="pageNumber px-3 py-1 mx-2 rounded-md shadow-md cursor-pointer"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="paginationRow flex justify-between bg-blue-100 rounded-lg shadow-md p-4 mt-4">
      <div className="pageCount">
        {/* Display current page count and total pages count */}
        <span>{currentPage}</span> form <span>{totalPages}</span>
      </div>
      {/* Navigation buttons and page numbers */}
      <div className="paginatonNav flex justify-center">
        <span>
          {/* Previous page button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "" : "bg-white cursor-pointer"
            } pageNext px-3 py-2 mx-2 rounded-md shadow-md`}
          >
            <FaArrowLeft />
          </button>
        </span>
        {/* Render page numbers */}
        {renderPageNumbers()}
        <span>
          {/* Next page button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages ? "" : "bg-white cursor-pointer"
            } pageNext px-3 py-2 mx-2 rounded-md shadow-md`}
          >
            <FaArrowRight />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
