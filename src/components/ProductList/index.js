import React from 'react'
import "./ProductList.css"
import { useDispatch, useSelector } from "react-redux";
import { addItemTobasket } from '../../store/actions/basketActions';
import Modal from "../confirmModal"
import { products } from '../../data/products'

const ProductList = () => {
    const dispatch = useDispatch();
    const basketReducer = useSelector((state) => state.basketReducer);
    const { basket } = basketReducer

    function addItem(item){
        dispatch(addItemTobasket(item))
    }


    return (
        <section className="productlist-section">
            <Modal show={false} />
            <ul className="product-list">
                {
                    products.map((item, index) => (
                        <li className="product" key={item.id}>
                            <div className="image-wrapper">
                                <img src={item.image} alt="phone-product" />
                            </div>
                            <ul className="product-details">
                                <li className="product-title">
                                    <span>
                                        {item.title}
                                    </span>
                                </li>
                                <li className="product-brand">
                                    <p>
                                        <span>Marka:</span> {item.brand} 
                                    </p>
                                    <p>
                                        <span>Renk:</span> {item.color} 
                                    </p>
                                </li>
                                <li className="product-price">
                                    <h5 className="product-new-price">{item.price}</h5>
                                    <h6 className="product-old-price">
                                        <span>{item.oldPrice}</span> {item.discount}
                                    </h6>
                                </li>
                            </ul>
                            <div className="product-hover-showcase">
                                <button className="add-to-basket-btn" onClick={() => addItem(item)}>Sepete Ekle</button>
                                {/* <div className="info-message">
                                    <p>Bu ürünü sepete ekleyemezsiniz.</p>
                                </div> */}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ProductList
