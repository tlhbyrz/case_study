import React, {useState, useEffect} from 'react'
import "./Header.css"
import { useSelector, useDispatch } from "react-redux";
import Modal from "../confirmModal"
import { changeSearchText } from '../../store/actions/productsActions';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [willDeleteId, setWillDeleteId] = useState(0);
    const [searchText, setSearchText] = useState("");
    
    const dispatch = useDispatch();
    const basketReducer = useSelector((state) => state.basketReducer);
    const { basket } = basketReducer

    function removeItem(id){
        setWillDeleteId(id);
        setShowModal(true);
    }

    function handleSearch(e){
        setSearchText(e.target.value)
    }

    useEffect(() => {
        const getText = setTimeout(() => {
            if(searchText.length > 2){
                dispatch(changeSearchText(searchText));
            }else if(searchText.length === 0){
                dispatch(changeSearchText(""));
            }
        }, 500)

        return () => {
            clearTimeout(getText)
        }
    }, [searchText])

    return (
        <header>
            <Modal show={showModal} removeItem={removeItem} setShowModal={setShowModal} productId={willDeleteId}/>
            <div className="container">
                <div className="header">
                    <img src="logo.svg" alt="logo" className="logo"/>
                    <div className="search-box">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="#333333"/>
                        </svg>
                        <input onChange={handleSearch} 
                            value={searchText}
                            type="text" className="search-input"
                            placeholder="25 milyon’dan fazla ürün içerisinde ara"/>
                    </div>
                    <div className="show-basket-btn" tabIndex="0" role="button">
                        <p> Sepetim <span className="counter-badge">{ basket.length }</span></p>
                        <ul className="basket-items">
                            {
                                basket.length > 0 ? (
                                    basket.map((item) =>(
                                        <li className="basket-item" key={item.id}>
                                            <img src={item.image} alt="" />
                                            <div className="basket-item-details">
                                                <span>{item.title}</span>
                                                <button onClick={() => removeItem(item.id)}>Kaldır</button>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <div className="no-items-in-basket">
                                        <p>Sepette ürün bulunmamaktadır.</p>
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
