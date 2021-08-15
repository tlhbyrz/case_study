import React from 'react'
import "./PageBanner.css"
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from '../../store/actions/productsActions';

const PageBanner = () => {
    const dispatch = useDispatch();
    const productsReducer = useSelector((state) => state.productsReducer);
    const {sortType } = productsReducer;

    function handleSort(e){
        if(e.target.value !== "Sıralama"){
            dispatch(sortProducts(e.target.value))
        }
    }

    return (
        <section className="page-banner">
            <div className="page-info">
                <h1>iPhone iOS cep telefonu</h1>
                <p className="page-info-desc">
                   <span>Aranan Kelime:</span>  iphone 11
                </p>
            </div>
            {<select id="filter-selectbox" value={sortType} onChange={handleSort}>
                <option defaultValue={true}>Sıralama</option>
                <option  value="lowest_price">En Düşük Fiyat</option>
                <option  value="highest_price">En Yüksek Fiyat</option>
                <option  value="new_product">{`En Yeniler (A>Z)`}</option>
                <option  value="old_product">{`En Yeniler (Z>A)`}</option>
            </select>}
        </section>
    )
}

export default PageBanner
