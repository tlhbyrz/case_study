import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterByColor, filterByBrand, sortProducts } from '../../store/actions/productsActions';
import { SORT_TYPES } from '../../data/constants';
import "./ItemFilters.css"

const ItemFilters = () => {
    const [colors, setColors] = useState([])
    const [brands, setBrands] = useState([])
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedBrand, setSelectedBrand] = useState("")
    const [selectedSort, setSelectedSort] = useState("")

    const dispatch = useDispatch();
    const productsReducer = useSelector((state) => state.productsReducer);
    const { allProducts, filteredProducts, filteredColor, filteredBrand } = productsReducer;

    function changeColorFilter(color){
        if(selectedColor === color){
            setSelectedColor("")
            dispatch(filterByColor(""));
            return
        }
        setSelectedColor(color)
        dispatch(filterByColor(color));
    }

    function changeBrandFilter(brand){
        if(selectedBrand === brand){
            setSelectedBrand("")
            dispatch(filterByBrand(""));
            return
        }
        setSelectedBrand(brand)
        dispatch(filterByBrand(brand));
    }

    function handleSort(type){
        setSelectedSort(type)
        dispatch(sortProducts(type))
    }
    
    useEffect(() => {
        let tempColors = [];
        let tempBrandss = [];
        let colorIndex = -1
        let brandIndex = -1

        allProducts.forEach(product =>{
            if(tempColors.filter(colorItem => colorItem.color === product.color).length === 0){
                tempColors.push({
                    color: product.color,
                    count: 1
                })
            }else{
                colorIndex = tempColors.findIndex(colorItem => colorItem.color === product.color)
                tempColors[colorIndex].count = tempColors[colorIndex].count + 1;
            }

            if(tempBrandss.filter(brandItem => brandItem.brand === product.brand).length === 0){
                tempBrandss.push({
                    brand: product.brand,
                    count: 1
                })
            }else{
                brandIndex = tempBrandss.findIndex(brandItem => brandItem.brand === product.brand)
                tempBrandss[brandIndex].count = tempBrandss[brandIndex].count + 1;
            }
        })

        setColors(tempColors);
        setBrands(tempBrandss);
    }, [allProducts, filteredColor])

    return (
        <section className="filter-section">
            <ul>
                <li className="filter-category-item">
                    <h4>Renk</h4>
                    <div className="filter-list">
                        {
                            colors.map(item =>(
                                <button className={`${selectedColor === item.color && "active-filter-btn"}`} 
                                onClick={() => changeColorFilter(item.color)} key={item.color}>{`${item.color} (${item.count})`}</button>
                            ))
                        }
                    </div>
                </li>
                <li className="filter-category-item">
                    <h4>Sıralama</h4>
                    <div className="filter-list">
                        <button className={`${selectedSort === SORT_TYPES.LowestPrice && "active-filter-btn"}`}
                        onClick={() => handleSort(SORT_TYPES.LowestPrice)}>{`En Düşük Fiyat`}</button>
                        <button className={`${selectedSort === SORT_TYPES.HighestPrice && "active-filter-btn"}`}
                        onClick={() => handleSort(SORT_TYPES.HighestPrice)}>{`En Yüksek Fiyat`}</button>
                        <button className={`${selectedSort === SORT_TYPES.NewlyAdded && "active-filter-btn"}`}
                        onClick={() => handleSort(SORT_TYPES.NewlyAdded)}>{`En Yeniler (A>Z)`}</button>
                        <button className={`${selectedSort === SORT_TYPES.OldAdded && "active-filter-btn"}`}
                        onClick={() => handleSort(SORT_TYPES.OldAdded)}>{`En Yeniler (Z>A)`}</button>
                    </div>
                </li>
                <li className="filter-category-item">
                    <h4>Marka</h4>
                    <div className="filter-list">
                        {
                            brands.map(item =>(
                                <button className={`${selectedBrand === item.brand && "active-filter-btn"}`} 
                                onClick={() => changeBrandFilter(item.brand)} key={item.brand}>{`${item.brand} (${item.count})`}</button>
                            ))
                        }
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ItemFilters
