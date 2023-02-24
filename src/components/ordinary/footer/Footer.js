import React from "react";
import { NavLink } from "react-router-dom";

import navigation from "./../../../store/Navigation";

import logo from './../../../assets/images/logo.svg'
import instagramm from './../../../assets/images/instagramm.svg'
import facebook from './../../../assets/images/facebook.svg'
import twitter from './../../../assets/images/twitter.svg'
import paymentMethods from './../../../assets/images/visa-mastercard.svg'

import styles from './Footer.module.scss'

function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <NavLink to="/" className={styles.logo}>
                        <img src={logo} alt="" className={styles.logo_icon} />Womazing
                    </NavLink>
                    <nav className={styles.nav}>
                        <ul className={styles.nav_body}>
                            {navigation.map((link, index) => {
                                return <li className={styles.nav_item} key={index}>
                                    <NavLink
                                        to={link.href}
                                        className={styles.nav_link}>
                                        {link.title}
                                    </NavLink>
                                </li>
                            })}
                        </ul>
                    </nav>
                    <div className={styles.contact}>
                        <a href="tel:12345678" className={styles.contact_text}>+7 (495) 823-54-12</a>
                        <a href="mailto:hello@womazing.com" className={styles.contact_text}>hello@womazing.com</a>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rights}>
                        <p className={styles.rights_text}>Alexandr Ksenz © hiblurryface</p>
                        <p className={styles.rights_text}>Privacy Policy</p>
                        <p className={styles.rights_text}>Public offer</p>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/hiblurryface__/" className={styles.social_link}>
                                <img src={instagramm} alt="" className={styles.social_icon} />
                            </a>
                            <a href="#" className={styles.social_link}>
                                <img src={twitter} alt="" className={styles.social_icon} />
                            </a>
                            <a href="#" className={styles.social_link}>
                                <img src={facebook} alt="" className={styles.social_icon} />
                            </a>
                        </div>
                        <div className={styles.payment}>
                            <img src={paymentMethods} alt="" className={styles.payment_icon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer