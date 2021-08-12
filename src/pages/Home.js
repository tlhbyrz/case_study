import React from 'react'
import PageBanner from "../components/PageBanner"
import ItemFilters from "../components/ItemFilters"
import ProductList from "../components/ProductList"

const Home = () => {
    return (
        <div>
            <PageBanner />
            <div className="page-content">
                <ItemFilters />
                <ProductList />
            </div>
        </div>
    )
}

export default Home
