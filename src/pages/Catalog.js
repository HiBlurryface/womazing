import React from "react";
import classNames from "classnames";

import product from './../assets/images/product.jpg'

import buttonNext from './../assets/images/slider-arrow-next.svg'
import buttonPrev from './../assets/images/slider-arrow-prev.svg'

import styles from './../assets/styles/Catalog.module.scss'

function Catalog() {
    return <>
        <div className={styles.preview}>
            <div className={styles.container}>
                <div className={styles.preview__content}>
                    <h1 className={styles.preview__title}>Магазин</h1>
                    <div className={styles.preview__breadcrumbs}>
                        <a href="" className={styles.preview__breadcrumbs_item}>Главная</a>
                        <span className={styles.preview__breadcrumbs_separation}></span>
                        <a className={styles.preview__breadcrumbs_item_active}>Магазин</a>
                    </div>
                </div>
            </div>
        </div>
        <section className={styles.filters}>
            <div className={styles.container}>
                <div className={styles.filters__content}>
                    <button className={classNames(styles.filters__item, styles.filters__item_active)}>Все</button>
                    <button className={styles.filters__item}>Пальто</button>
                    <button className={styles.filters__item}>Свитшоты</button>
                    <button className={styles.filters__item}>Кардиганы</button>
                    <button className={styles.filters__item}>Толстовки</button>
                </div>
            </div>
        </section>
        <section className={styles.products}>
            <div className={styles.container}>
                <p className={styles.products__text}>Показано 9 из 12 товаров</p>
                <div className={styles.products__content}>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                </div>
                <p className={styles.products__text}>Показано 9 из 12 товаров</p>
                <div className={styles.pagination}>
                    <button className={styles.pagination__prev}>
                        <img src={buttonPrev} alt="" />
                    </button>
                    <button className={classNames(styles.pagination__button, styles.pagination__button_active)}>1</button>
                    <button className={styles.pagination__button}>2</button>
                    <button className={styles.pagination__next}>
                        <img src={buttonNext} alt="" />
                    </button>
                </div>
            </div>
        </section>
    </>
}

export default Catalog