import React from "react";
import classNames from "classnames";

import Preview from "../components/ordinary/preview/Preview";
import ProductsItem from "../components/ordinary/productsItem/ProductsItem";
import Button from "../components/UI/button/Button";

import product from './../assets/images/product.jpg'
import styles from './../assets/styles/Product.module.scss'
function Product() {
    return <>
        <Preview title="Футболка USA"/>
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
        {/* <section className={styles.catalog}>
            <div className={styles.container}>
                <h2 className={styles.catalog__title}>Связанные товары</h2>
                <div className={styles.catalog__content}>
                    <ProductsItem photo={product}/>
                    <ProductsItem photo={product}/>
                </div>
            </div>
        </section> */}
    </>
}

export default Product