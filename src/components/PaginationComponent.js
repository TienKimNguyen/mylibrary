import React from "react";
// import { Pagination } from "react-bootstrap";

const PaginationPage = (props) => {
    const pageLinks = []
    for (let i = 1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(<li className="pageNum"  key={i} onClick={() => props.nextPage(i)}>
            <a href="#" className="pageNum">{i}</a>
        </li>)
    }

    return (
        <div className="pagination-container">
                <div className="pagination">
                    {props.currentPage > 1 ? <li className="pageNum" onClick={() => props.nextPage(props.currentPage - 1)}><a href="#" className="pageNum">Prev</a></li> : ''}
                    {pageLinks}
                    {props.currentPage < props.pages + 1 ? <li className="pageNum" onClick={() => props.nextPage(props.currentPage + 1)}><a href="#" className="pageNum">Next</a></li> : ''}
                </div>
            
        </div>
    )

    // return (
    //     <div>
    //         <Pagination style={{display:"flex", justifyContent:"center"}} >
    //             {/* <Pagination.First /> */}
    //             <Pagination.Prev onClick={props.prevPage}/>
    //             <Pagination.Item disabled>{"Prev"}</Pagination.Item>
    //             <Pagination.Item disabled>{"..."}</Pagination.Item>
    //             <Pagination.Item disabled>{"Next"}</Pagination.Item>


    //            {/*} <Pagination.Ellipsis />

    //             <Pagination.Item>{10}</Pagination.Item>
    //             <Pagination.Item>{11}</Pagination.Item>
    //             <Pagination.Item>{12}</Pagination.Item>
    //             <Pagination.Item>{13}</Pagination.Item>
    //             <Pagination.Item>{14}</Pagination.Item>
                
    //             <Pagination.Ellipsis />
    //             <Pagination.Item>{20}</Pagination.Item> */}
    //             <Pagination.Next onClick={props.nextPage} />
    //             {/* <Pagination.Last /> */}
    //         </Pagination>
    // //   </div>
    // );
}

export default PaginationPage;