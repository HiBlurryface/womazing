import React from "react";
import { NavLink } from "react-router-dom";

import navigation from "./../../store/Navigation";

import logo from './../../assets/images/logo.svg'
import instagramm from './../../assets/images/instagramm.svg'
import facebook from './../../assets/images/facebook.svg'
import twitter from './../../assets/images/twitter.svg'
import paymentMethods from './../../assets/images/visa-mastercard.svg'

function Footer() {
    return <footer className="footer">
        <div className="footer__container container">
            <div className="footer__content">
                <div className="footer__row">
                    <a href="" className="footer__logo">
                        <img src={logo} alt="" className="footer__logo-icon" />Womazing
                    </a>
                    <nav className="footer__nav">
                        <ul className="footer__nav-body">
                            {navigation.map(link => {
                                return <li className="footer__nav-item">
                                    <NavLink
                                        to={link.href}
                                        className="footer__nav-link">
                                        {link.title}
                                    </NavLink>
                                </li>
                            })}
                        </ul>
                    </nav>
                    <a href="" className="footer__contact">
                        <p className="footer__contact-text">+7 (495) 823-54-12</p>
                        <p className="footer__contact-text">hello@womazing.com</p>
                    </a>
                </div>
                <div className="footer__row">
                    <div className="footer__rights">
                        <p className="footer__rights-text">Alexandr Ksenz © hiblurryface</p>
                        <p className="footer__rights-text">Политика конфиденциальности</p>
                        <p className="footer__rights-text">Публичная оферта</p>
                    </div>
                    <div className="footer__group">
                        <div className="footer__social">
                            <a href="" className="footer__social-link">
                                <img src={instagramm} alt="" className="footer__social-icon" />
                            </a>
                            <a href="" className="footer__social-link">
                                <img src={twitter} alt="" className="footer__social-icon" />
                            </a>
                            <a href="" className="footer__social-link">
                                <img src={facebook} alt="" className="footer__social-icon" />
                            </a>
                        </div>
                        <div className="footer__payment">
                            <img src={paymentMethods} alt="" className="footer__payment-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer