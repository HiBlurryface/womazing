import React from "react";
import classNames from "classnames";

import Preview from "../components/ordinary/preview/Preview";
import ProductsItem from '../components/ordinary/productsItem/ProductsItem'
import buttonNext from './../assets/images/slider-arrow-next.svg'
import buttonPrev from './../assets/images/slider-arrow-prev.svg'

import product from './../assets/images/product.jpg'
import styles from './../assets/styles/Catalog.module.scss'

function Catalog() {
    return <>
        <Preview title="Магазин" />
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
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
                    <ProductsItem photo={product} />
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