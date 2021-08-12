import React from 'react'
import "./PageBanner.css"

const PageBanner = () => {
    return (
        <section className="page-banner">
            <div className="page-info">
                <h1>iPhone iOS cep telefonu</h1>
                <p className="page-info-desc">
                   <span>Aranan Kelime:</span>  iphone 11
                </p>
            </div>
            <select id="">
                <option defaultValue={true}>Sıralama</option>
                <option value="lowest-price">En Düşük Fiyat</option>
                <option value="highest-price">En Yüksek Fiyat</option>
                <option value="newest-from-a">{`En Yeniler (A>Z)`}</option>
                <option value="newest-from-z">{`En Yeniler (Z>A)`}</option>
            </select>
        </section>
    )
}

export default PageBanner
