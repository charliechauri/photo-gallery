/**
 * @name Pagination
 * @description Pagination component with Bootstrap UI
 * @param {number} totalItemsLength
 * @param {number} numberOfItemsToDisplay
 * @param {number} currentPage The number of the current page
 * @param {function} changePage Callback function to change the current page
 * @param {number} numberOfPagesToDisplay Max number of displayed pages
 * @author Carlos Echauri
 */

import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  totalItemsLength, numberOfItemsToDisplay, currentPage, changePage, numberOfPagesToDisplay,
}) => {
  const numberOfPages = Math.ceil(totalItemsLength / numberOfItemsToDisplay);
  const previousButtonClasses = ['page-item'];
  const nextButtonClasses = ['page-item'];
  const pages = [];

  if (currentPage === 1) { // First page
    previousButtonClasses.push('disabled');
  }

  if (currentPage === numberOfPages) { // Last page
    nextButtonClasses.push('disabled');
  }

  if (numberOfPages < numberOfPagesToDisplay) {
    previousButtonClasses.push('d-none');
    nextButtonClasses.push('d-none');
  }

  let i = 1;

  while (numberOfPages > 0 && i <= numberOfPages) { // Built an array of total pages size
    pages.push(i);
    i += 1;
  }

  const minDisplayedPage = Math.floor((currentPage / numberOfPagesToDisplay)) * numberOfPagesToDisplay;
  let maxDisplayedPage = (Math.ceil((currentPage / numberOfPagesToDisplay)) * numberOfPagesToDisplay);

  if (maxDisplayedPage === minDisplayedPage) {
    maxDisplayedPage += numberOfPagesToDisplay;
  }

  const displayedPages = pages
    .filter(page => page < maxDisplayedPage && page >= minDisplayedPage)
    .map((page) => {
      const pageButtonClasses = ['page-item'];
      if (page === currentPage) {
        pageButtonClasses.push('active');
      }

      return (
        <li key={page} className={pageButtonClasses.join(' ')}>
          <button className="page-link" onClick={() => { changePage(page); }}>
            {page}
          </button>
        </li>
      );
    });

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {/** Navigate to first page */
          <li className={previousButtonClasses.join(' ')}>
            <button
              className="page-link"
              aria-label="Previous"
              onClick={() => { changePage(1); }}
            >
              1...
            </button>
          </li>
        }

        {/** Navigate to previous pages */
          <li className={previousButtonClasses.join(' ')}>
            <button
              className="page-link"
              aria-label="Previous"
              onClick={() => {
                changePage((minDisplayedPage - numberOfPagesToDisplay) !== 0 ? minDisplayedPage - numberOfPagesToDisplay : 1);
              }}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>
        }

        {/** Display dynamic pages buttons */
          displayedPages
        }

        {/** Navigate to next pages */
          <li className={nextButtonClasses.join(' ')}>
            <button
              className="page-link"
              aria-label="Next"
              onClick={() => { changePage(maxDisplayedPage); }}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        }

        {/** Navigate to last page */
          <li className={nextButtonClasses.join(' ')}>
            <button
              className="page-link"
              aria-label="Next"
              onClick={() => { changePage(numberOfPages); }}
            >
              {`...${numberOfPages}`}
            </button>
          </li>
        }
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalItemsLength: PropTypes.number.isRequired,
  numberOfItemsToDisplay: PropTypes.number.isRequired,
  numberOfPagesToDisplay: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  changePage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
};

export default Pagination;
