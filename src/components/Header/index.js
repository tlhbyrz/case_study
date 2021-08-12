import React from 'react'
import "./Header.css"
import AppleImg from "../../assets/apple1.png"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <img src="logo.svg" alt="logo" className="logo"/>
                    <div className="search-box">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="#333333"/>
                        </svg>
                        <input type="text" className="search-input" placeholder="25 milyon’dan fazla ürün içerisinde ara"/>
                    </div>
                    <button>
                        Sepetim <span className="counter-badge">4</span>
                        <ul className="basket-items">
                            {
                                Array(3).fill("").map((item, index) =>(
                                    <li className="basket-item" key={index}>
                                        <img src={AppleImg} alt="" />
                                        <div className="basket-item-details">
                                            <span>iPhone 11 Kırmızı Kılıflı Garantili Telefon</span>
                                            <button>Kaldır</button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
