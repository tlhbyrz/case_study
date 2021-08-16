import React, {useEffect} from 'react'
import PageBanner from "../components/PageBanner"
import ItemFilters from "../components/ItemFilters"
import ProductList from "../components/ProductList"
import Pagination from '../components/Pagination'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from '../store/actions/productsActions'

const Home = () => {
    let history = useHistory();
    const { page } = useParams();
    const dispatch = useDispatch();
    const productsReducer = useSelector((state) => state.productsReducer);
    const { totalPage } = productsReducer

    useEffect(() =>{
        const formattedPage = parseInt(page)
        if(page !== undefined){
            if(formattedPage > 0 && formattedPage <= totalPage){
                dispatch(changePageNumber(formattedPage))
            }else if(formattedPage > totalPage){
                dispatch(changePageNumber(totalPage))
            }else{
                history.push("/products/1")
            }
        }
    }, [page, totalPage])

    return (
        <div>
            <PageBanner />
            <div className="page-content">
                <ItemFilters />
                <ProductList />
            </div>
            <Pagination />
        </div>
    )
}

export default Home
