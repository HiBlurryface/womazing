import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import navigation from "../../../store/Navigation";
import Modal from "./../modal/Modal";

import logo from './../../../assets/images/logo.svg'
import shoppingCart from './../../../assets/images/shopping-cart.svg'

import styles from './Header.module.scss';

function Header() {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state)

    const navigate = useNavigate();
    const [isFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 1) {
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    });
    isOpen ? document.querySelector('body').classList.add("lock") : document.querySelector('body').classList.remove("lock");
    modal ? document.querySelector('body').style.overflow = 'hidden' : document.querySelector('body').style.overflow = 'unset'  

    return <>
        <header className={classNames(styles.header, {[`${styles.header_fixed}`]: isFixed})}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <NavLink to={"/"} className={styles.logo}>
                        <img src={logo} alt="" className={styles.logo_icon} />Womazing
                    </NavLink>
                    <nav className={classNames(styles.nav, { [`${styles.nav_active}`]: isOpen })}>
                        <ul className={styles.nav_body}>
                            {navigation.map((link, index) => {
                                return <li className={styles.nav_item} key={index}>
                                    <NavLink
                                        to={link.href}
                                        className={({isActive})=> isActive ? styles.nav_link + ' '+ styles.nav_link_active : styles.nav_link}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            })}
                        </ul>
                    </nav>
                    <button className={styles.contact} onClick={() => setModal(true)}>
                        <div className={styles.contact_icon}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7483 2.43548L11.8551 0.548828L7.92337 4.47402L9.44758 6.04816C9.19214 6.5016 8.6379 7.37025 7.69334 8.31482C6.74865 9.25953 5.87366 9.82006 5.41587 10.0796L3.87261 8.55598L0.0022583 12.4033L1.8851 14.2987C2.60485 15.0184 3.69998 15.2049 4.6102 14.7629C5.99921 14.0882 8.09546 12.8435 10.1943 10.7447C12.2931 8.64587 13.5379 6.54959 14.2125 5.16058C14.3723 4.83144 14.45 4.47822 14.45 4.12727C14.45 3.50755 14.2078 2.895 13.7483 2.43548ZM13.1977 4.66768C12.5609 5.97881 11.3845 7.959 9.39661 9.94693C7.40868 11.9349 5.42849 13.1113 4.11735 13.7481C3.63935 13.9802 3.06287 13.8809 2.6842 13.5023L1.59746 12.4083L3.87543 10.1439L5.19015 11.4419L5.5419 11.2852C5.59905 11.2598 6.95947 10.6442 8.49116 9.1125C10.0239 7.57982 10.6267 6.23089 10.6515 6.17422L10.8041 5.82718L9.50677 4.4874L11.8559 2.14213L12.9512 3.23362C13.3307 3.61365 13.4298 4.18987 13.1977 4.66768Z" fill="#6E9C9F" />
                            </svg>
                        </div>
                        <p className={styles.contact_text}>+7 (495) 823-54-12</p>
                    </button>
                    <NavLink to="/cart" className={styles.cart}>
                        <img src={shoppingCart} className={styles.cart_icon} />
                        {cart.length > 0 && <span className={styles.cart_items}>{cart.length}</span>}
                    </NavLink>
                    <button type="button" className={classNames(styles.burger, { [`${styles.burger_active}`]: isOpen })} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
        <Modal modal={modal} setModal={setModal}/>
    </>
}

export default Header