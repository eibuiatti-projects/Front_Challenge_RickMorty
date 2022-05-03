import React, { useEffect } from "react";
import {
  fetchPageNumbers,
  LEFT_PAGE,
  RIGHT_PAGE,
} from "../helpers/range.helpers";
import "./PaginationModule.css";

const PaginationModule = ({ object, onPageChanged }) => {
  const { totalPages, totalItems, currentPage } = object;

  useEffect(() => {
    gotoPage(1);
  }, [totalPages]);

  const gotoPage = (page) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));

    onPageChanged(currentPage);
  };

  const handleClick = (page) => (evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage - 1);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage + 1);
  };

  if (!totalItems || totalPages === 1) return null;

  const pages = fetchPageNumbers(totalPages, currentPage);

  return (
    <ul className="pagination">
      {pages?.map((page, index) => {
        if (page === LEFT_PAGE && page !== 2)
          return (
            <li key={index} className="pagItem">
              <span onClick={handleMoveLeft}>
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
          );

        if (page === RIGHT_PAGE && page !== totalPages - 1)
          return (
            <li key={index} className="pagItem">
              <span onClick={handleMoveRight}>
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
          );

        return (
          <li
            key={index}
            className={`pagItem ${currentPage === page ? "active" : ""}`}
          >
            <span onClick={handleClick(page)}>{page}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default PaginationModule;
