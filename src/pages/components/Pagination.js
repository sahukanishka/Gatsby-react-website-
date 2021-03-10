import React from 'react'
import {Link }from "gatsby"


function Pagination(props){
    const { currentPage, numofPages } = props.query
    console.log(currentPage,numofPages)
    const isFirst = currentPage === 1
    const isLast = currentPage === numofPages
    const prevPage = currentPage - 1 === 1 ? "/" :"/"+ (currentPage - 1).toString()
    const nextPage = "/"+ (currentPage + 1).toString()

    return (
        <div>{ !isFirst && (<Link to={prevPage} rel="prev"> Previous Page</Link>)}
        {!isLast && (<Link to={nextPage} rel="next">Next Page</Link>)}
      </div>
    )
}

export default Pagination ;