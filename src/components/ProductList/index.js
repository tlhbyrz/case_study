import React from 'react'
import "./ProductList.css"
import Modal from "../confirmModal"
import AppleImg1 from "../../assets/apple1.png"

const ProductList = () => {
    return (
        <section className="productlist-section">
            <Modal show={false} />
            <ul className="product-list">
                {
                    Array(7).fill("1").map((item, index) => (
                        <li className="product" key={index}>
                            <div className="image-wrapper">
                                <img src={AppleImg1} alt="phone-product" />
                            </div>
                            <ul className="product-details">
                                <li className="product-title">
                                    <span>
                                        Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...
                                    </span>
                                </li>
                                <li className="product-brand">
                                    <p>
                                        <span>Marka:</span> Apple 
                                    </p>
                                    <p>
                                        <span>Renk:</span> Siyah 
                                    </p>
                                </li>
                                <li className="product-price">
                                    <h5 className="product-new-price">90,85 TL</h5>
                                    <h6 className="product-old-price">
                                        <span>124,00 TL</span> 12%
                                    </h6>
                                </li>
                            </ul>
                            <div className="product-hover-showcase">
                                <button className="add-to-basket-btn">Sepete Ekle</button>
                                <div className="info-message">
                                    <p>Bu ürünü sepete ekleyemezsiniz.</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ProductList
