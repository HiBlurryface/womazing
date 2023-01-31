import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import navigation from "./../../store/Navigation";

import logo from './../../assets/images/logo.svg'
import shoppingCart from './../../assets/images/shopping-cart.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return <header className={`header ${isOpen ? 'active' : ''}`}>
        <div className="header__container container">
            <div className="header__content">
                <a href="" className="header__logo">
                    <img src={logo} alt="" className="header__logo-icon" />Womazing
                </a>
                <nav className="header__nav">
                    <ul className="header__nav-body">
                        {navigation.map((link, index) => {
                            return <li className="header__nav-item" key={index}>
                                <NavLink
                                    to={link.href}
                                    className="header__nav-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </nav>
                <a href="" className="header__contact">
                    <div className="header__contact-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7483 2.43548L11.8551 0.548828L7.92337 4.47402L9.44758 6.04816C9.19214 6.5016 8.6379 7.37025 7.69334 8.31482C6.74865 9.25953 5.87366 9.82006 5.41587 10.0796L3.87261 8.55598L0.0022583 12.4033L1.8851 14.2987C2.60485 15.0184 3.69998 15.2049 4.6102 14.7629C5.99921 14.0882 8.09546 12.8435 10.1943 10.7447C12.2931 8.64587 13.5379 6.54959 14.2125 5.16058C14.3723 4.83144 14.45 4.47822 14.45 4.12727C14.45 3.50755 14.2078 2.895 13.7483 2.43548ZM13.1977 4.66768C12.5609 5.97881 11.3845 7.959 9.39661 9.94693C7.40868 11.9349 5.42849 13.1113 4.11735 13.7481C3.63935 13.9802 3.06287 13.8809 2.6842 13.5023L1.59746 12.4083L3.87543 10.1439L5.19015 11.4419L5.5419 11.2852C5.59905 11.2598 6.95947 10.6442 8.49116 9.1125C10.0239 7.57982 10.6267 6.23089 10.6515 6.17422L10.8041 5.82718L9.50677 4.4874L11.8559 2.14213L12.9512 3.23362C13.3307 3.61365 13.4298 4.18987 13.1977 4.66768Z" fill="#6E9C9F" />
                        </svg>
                    </div>
                    <p className="header__contact-text">+7 (495) 823-54-12</p>
                </a>
                <div className="header__cart">
                    <img src={shoppingCart} className="header__cart-icon" />
                    {/* <span className="header__cart-items">0</span> */}
                </div>
                <div className="header__burger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
}

export default Header