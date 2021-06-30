import React from "react";

/**
 * 
 * @param {*} props variables and functions passed from Home.js
 * @returns a pagination area showing numbered links leading to different pages
 */
const PaginationPage = (props) => {
    const pageLinks = [];
    
    for (let i = 1; i <= props.pages + 1; i++){
        pageLinks.push(<li className="pageNum"  key={i} onClick={() => {
            props.nextPage(i)}}>
            <a href="#" className="pageNum">{i}</a>
        </li>)
    }

    return (
        <div className="container">
            <div className="pagination">
                {props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href="#" className="page-nav">Prev</a></li> : ''}
                {pageLinks}
                {props.currentPage < props.pages + 1 ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href="#" className="page-nav">Next</a></li> : ''}
            </div>
        </div>
    )
}

export default PaginationPage;