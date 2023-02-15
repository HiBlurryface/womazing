import React from "react";
import classNames from "classnames";
import { useParams } from 'react-router-dom';

import Preview from "../components/ordinary/preview/Preview";
import ProductsItem from "../components/ordinary/productsItem/ProductsItem";
import Button from "../components/UI/button/Button";

import styles from './../assets/styles/Product.module.scss'
function Product({ goods }) {
    const { id } = useParams()
    const product = goods.filter(item => item.id == id)[0];
    const similarProducts = goods.filter(item => (item.category === product.category && item.id != id)).sort(() => Math.random() - 0.5);

    const [productSettings, setProductSettings] = useState({
        id: '',
        category: '',
        title: '',
        price: '',
        size: '',
        color: '',
        count: ''
    })

    return goods.length === 0
        ? <Preview title="Загрузка..." />
        : <>
            <Preview title={product.title} />
            <section className={styles.item}>
                <div className={styles.container}>
                    <div className={styles.item__content}>
                        <div className={styles.item__img}>
                            <img src={product.photo} alt="Фотограция товара" className={styles.item__photo} />
                        </div>
                        <div className={styles.item__info}>
                            <div className={styles.item__group}>
                                <h2 className={styles.item__price}>
                                    {product.price}
                                    {/* <span className={styles.item__price_second}>$450</span> */}
                                </h2>
                            </div>
                            <div className={styles.item__group}>
                                <p className={styles.item__option}>Выберите размер</p>
                                <div className={styles.item__size}>
                                    {product.sizes.map((size, index) => {
                                        return <button key={index} className={classNames(styles.item__size_btn)}>{size}</button>
                                    })}
                                </div>
                            </div>
                            <div className={styles.item__group}>
                                <p className={styles.item__option}>Выберите цвет</p>
                                <div className={styles.item__color}>
                                    {product.colors.map((color, index) => {
                                        return <button key={index} className={classNames(styles.item__color_btn)} style={{ backgroundColor: color }}></button>
                                    })}
                                </div>
                            </div>
                            <div className={styles.item__buy}>
                                <input type="number" className={styles.item__count} min="1" max="99" />
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
                        {similarProducts.map((product, index) => {
                            if(index < 3) {return <ProductsItem data={product} key={product.id} />}
                        })}
                    </div>
                </div>
            </section>
        </>
}

export default Product