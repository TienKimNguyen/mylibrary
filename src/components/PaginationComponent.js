import React from "react";

const PaginationPage = (props) => {
    const pageLinks = []
    for (let i = 1; i <= props.pages + 1; i++){
        // let active = props.currentPage === i ? 'active' : '';
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