import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from '../../store/actions/productsActions';
import "./Pagination.css"

const Pagination = () => {
    const dispatch = useDispatch();
    const productsReducer = useSelector((state) => state.productsReducer);
    const { totalPage, currentPage } = productsReducer

    function changePage(page){
        if(page > totalPage || page === 0){
            return
        }
        dispatch(changePageNumber(page))
    }
    
    return (
        <section className="pagination">
            <button onClick={() => changePage(currentPage - 1)} className={`paginate-item ${currentPage === 1 && "cursor-disabled"}`}>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="#646464" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.24511 2.80548L4.30175 4.04083V4.99786L0.307614 3.14728V2.43439L4.30175 0.588684V1.54572L1.24511 2.80548Z" fill="#646464"/>
                </svg>
            </button>

            <div className="paginate-content">
                {
                    Array(totalPage).fill("").map((_, index) => (
                        <button onClick={() => changePage(index +1)} className={`paginate-item ${(currentPage === index +1) && "active-page"}`}>
                            <p>{ index + 1 }</p>
                        </button>
                    ))
                }
            </div>

            <button onClick={() => changePage(currentPage + 1)} className={`paginate-item ${currentPage === totalPage && "cursor-disabled"}`}>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="#646464" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.36954 2.77618L0.141997 1.51154V0.583801L4.31192 2.4295V3.1424L0.141997 4.99298V4.05548L3.36954 2.77618Z" fill="#646464"/>
                </svg>
            </button>
        </section>
    )
}

export default Pagination
