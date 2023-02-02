import React from "react";

import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";
import product from './../assets/images/product.jpg'

import buttonNext from './../assets/images/slider-arrow-next.svg'
import buttonPrev from './../assets/images/slider-arrow-prev.svg'

function Catalog() {
    return <>
        <div className="preview">
            <div className="preview__container container">
                <div className="preview__content">
                    <h1 className="preview__title title-H1">Магазин</h1>
                    <div className="preview__breadcrumbs">
                        <a href="" className="preview__breadcrumbs-item default-text">Главная</a>
                        <span className="preview__breadcrumbs-separation"></span>
                        <a className="preview__breadcrumbs-item default-text active">Магазин</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="filters">
            <div className="filters__container container">
                <div className="filters__content">
                    <button className="filters__item active default-text">Все</button>
                    <button className="filters__item default-text">Пальто</button>
                    <button className="filters__item default-text">Свитшоты</button>
                    <button className="filters__item default-text">Кардиганы</button>
                    <button className="filters__item default-text">Толстовки</button>
                </div>
            </div>
        </div>
        <section className="products">
            <div className="products__container container">
                <p className="products__text default-text">Показано 9 из 12 товаров</p>
                <div className="products__content">
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                </div>
                <p className="products__text default-text">Показано 9 из 12 товаров</p>
            </div>
        </section>
        <div className="pagination">
            <div className="pagination__container container">
                <div className="pagination__content">
                    <button className="pagination__prev">
                        <img src={buttonPrev} alt="" />
                    </button>
                    <button className="pagination__button default-text active">1</button>
                    <button className="pagination__button default-text">2</button>
                    <button className="pagination__next">
                        <img src={buttonNext} alt="" />
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Catalog