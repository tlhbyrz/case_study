import React from 'react'
import PageBanner from "../components/PageBanner"
import ItemFilters from "../components/ItemFilters"
import ProductList from "../components/ProductList"
import Pagination from '../components/Pagination'

const Home = () => {
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
