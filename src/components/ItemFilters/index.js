import React from 'react'
import "./ItemFilters.css"

const ItemFilters = () => {
    return (
        <section className="filter-section">
            <ul>
                <li className="filter-category-item">
                    <h4>Renk</h4>
                    <div className="filter-list">
                        <button>{`Lacivert (3)`}</button>
                        <button>{`Sarı (3)`}</button>
                        <button>{`Siyah (3)`}</button>
                        <button>{`Beyaz (3)`}</button>
                    </div>
                </li>
                <li className="filter-category-item">
                    <h4>Sıralama</h4>
                    <div className="filter-list">
                        <button>{`En Düşük Fiyat`}</button>
                        <button>{`En Yüksek Fiyat`}</button>
                        <button>{`En Yeniler (A>Z)`}</button>
                        <button>{`En Yeniler (Z>A)`}</button>
                    </div>
                </li>
                <li className="filter-category-item">
                    <h4>Marka</h4>
                    <div className="filter-list">
                        <button>{`Samsung (3)`}</button>
                        <button>{`Nokia (3)`}</button>
                        <button>{`Apple (3)`}</button>
                        <button>{`LG (3)`}</button>
                        <button>{`Huawei (3)`}</button>
                        <button>{`Xiaomi (3)`}</button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ItemFilters
