import React from 'react'
import "./ProductList.css"
import { useDispatch, useSelector } from "react-redux";
import { addItemTobasket } from '../../store/actions/basketActions';

const ProductList = () => {
    const dispatch = useDispatch();
    const basketReducer = useSelector((state) => state.basketReducer);
    const { basket } = basketReducer
    const productsReducer = useSelector((state) => state.productsReducer);
    const { filteredProducts } = productsReducer

    function addItem(item){
        dispatch(addItemTobasket(item))
    }


    return (
        <section className="productlist-section">
            {
                filteredProducts.length > 0 ? (
                    <ul className="product-list">
                        {
                            filteredProducts.map((item, index) => (
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
                                            <h5 className="product-new-price">{item.price} TL</h5>
                                            <h6 className="product-old-price">
                                                <span>{item.oldPrice}</span> {item.discount}
                                            </h6>
                                        </li>
                                    </ul>
                                    <div className="product-hover-showcase">
                                        {
                                            basket.includes(item) ? (
                                                <div className="info-message">
                                                    <p>Bu ürünü sepete ekleyemezsiniz.</p>
                                                </div>
                                            ) : (
                                                <button className="add-to-basket-btn" onClick={() => addItem(item)}>Sepete Ekle</button>
                                            )
                                        }
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <div className="no-product-found">
                        <p>Seçtiğiniz kriterlere uygun ürün bulunmamaktadır!</p>
                    </div>
                )
            }
            
        </section>
    )
}

export default ProductList
