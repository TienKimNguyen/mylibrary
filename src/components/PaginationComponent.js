import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationPage = () => {
    const changePage = () => {
        console.log("hi");
    }

    return (
        <div>
            <Pagination style={{display:"flex", justifyContent:"center"}} >
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item onClick={changePage}>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
      </div>
    );
}

export default PaginationPage;