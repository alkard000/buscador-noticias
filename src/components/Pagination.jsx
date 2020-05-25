import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (  
        <ul className="pagination">
            <li className={(currentPage <= 1 ) ? "disabled" : "waves-effect"}>
                <a 
                    href="#!"
                    onClick={(currentPage <= 1) ?  null : () => paginate(currentPage - 1)}
                >
                    <FontAwesomeIcon icon={faArrowCircleLeft}/>
                </a>
            </li>
            {pageNumbers.map(number => (
                <li className={(currentPage === number ) ? "active" : "waves-effect"} key={number}>
                <a
                    onClick={() => paginate(number)}
                    href="#!"
                >
                    {number}
                </a>
                </li>
            ))}
            <li className={(currentPage >= pageNumbers.length ) ? "disabled" : "waves-effect"}>
                <a
                    href="#!"
                    onClick={(currentPage >= pageNumbers.length) ?  null : () => paginate(currentPage + 1)}
                >
                    <FontAwesomeIcon icon={faArrowCircleRight}/>
                </a>
            </li>
        </ul>
    );
}
 
export default Pagination;