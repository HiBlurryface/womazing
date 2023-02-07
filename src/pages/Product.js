import classNames from "classnames";
import React from "react";
import Button from "../components/UI/button/Button";

import product from './../assets/images/product.jpg'
import styles from './../assets/styles/Product.module.scss'
function Product() {
    return <>
        <div className={styles.preview}>
            <div className={styles.container}>
                <div className={styles.preview__content}>
                    <h1 className={styles.preview__title}>Магазин</h1>
                    <div className={styles.preview__breadcrumbs}>
                        <a href="" className={styles.preview__breadcrumbs_item}>Главная</a>
                        <span className={styles.preview__breadcrumbs_separation}></span>
                        <a className={styles.preview__breadcrumbs_item}>Магазин</a>
                        <span className={styles.preview__breadcrumbs_separation}></span>
                        <a className={styles.preview__breadcrumbs_item_active}>Продукт</a>
                    </div>
                </div>
            </div>
        </div>
        <section className={styles.item}>
            <div className={styles.container}>
                <div className={styles.item__content}>
                    <div className={styles.item__img}>
                        <img src={product} alt="" className={styles.item__photo} />
                    </div>
                    <div className={styles.item__info}>
                        <div className={styles.item__group}>
                            <h2 className={styles.item__price}>
                                $311
                                <span className={styles.item__price_second}>$450</span>
                            </h2>
                        </div>
                        <div className={styles.item__group}>
                            <p className={styles.item__option}>Выберите размер</p>
                            <div className={styles.item__size}>
                                <button className={classNames(styles.item__size_btn, styles.item__size_btn_active)}>S</button>
                                <button className={styles.item__size_btn}>M</button>
                                <button className={styles.item__size_btn}>L</button>
                                <button className={styles.item__size_btn}>XL</button>
                                <button className={styles.item__size_btn}>XL</button>
                            </div>
                        </div>
                        <div className={styles.item__group}>
                            <p className={styles.item__option}>Выберите цвет</p>
                            <div className={styles.item__color}>
                                <button className={classNames(styles.item__color_btn, styles.item__color_btn_active)} style={{ backgroundColor: '#927876' }}></button>
                                <button className={styles.item__color_btn} style={{ backgroundColor: '#D5D5D5' }}></button>
                                <button className={styles.item__color_btn} style={{ backgroundColor: '#FD9696' }}></button>
                                <button className={styles.item__color_btn} style={{ backgroundColor: '#FDC796;' }}></button>
                            </div>
                        </div>
                        <div className={styles.item__buy}>
                            <input value="1" type="number" className={styles.item__count} min="1" max="99" />
                            <Button>Добавить в корзину</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.catalog}>
            <div className={styles.container}>
                <h2 className={styles.catalog__title}>Связанные товары</h2>
                <div className={styles.catalog__content}>
                    <div className={styles.catalog__item}>
                        <div className={styles.catalog__item_img}>
                            <div className={styles.catalog__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.catalog__item_pic} />
                        </div>
                        <div className={styles.catalog__item_descr}>
                            <h4 className={styles.catalog__item_title}>Футболка</h4>
                            <p className={styles.catalog__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.catalog__item}>
                        <div className={styles.catalog__item_img}>
                            <div className={styles.catalog__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.catalog__item_pic} />
                        </div>
                        <div className={styles.catalog__item_descr}>
                            <h4 className={styles.catalog__item_title}>Футболка</h4>
                            <p className={styles.catalog__item_price}>$129</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Product