import React from 'react';
import classnames from 'classnames';
import { usePagination } from './usePagination';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if( currentPage < lastPage){
    onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if(currentPage > 1){
    onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav className="pagination-nav">
          <ul className="pagination pagination-sm">
       {/* Left navigation arrow */}
       {currentPage !== 1 ?
       <li className={classnames("page-item", {disabled:currentPage === 1})} >
              <a className={classnames("page-link" )}   onClick={onPrevious} aria-label="Previous">
                <span>&laquo;</span>
              </a>
            </li>:''}
      {paginationRange.map((pageNumber,index) => {
        console.log(currentPage,"currentpage");
        // Render our Page Pills
        return (
            <li key={index} className={classnames( pageNumber === currentPage ? "page-item active" : "page-item" )}>
              <a className="page-link"  onClick={() => onPageChange(pageNumber)} >{pageNumber}</a>
              </li>
        );
      })}
      {/*  Right Navigation arrow */}
      {currentPage !== lastPage ?
      <li className={ classnames("page-item",{disabled : currentPage === lastPage})}  >
              <a className={classnames("page-link")} onClick={onNext}  aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
:''}
    </ul>
    </nav>
  );
};

export default Pagination;