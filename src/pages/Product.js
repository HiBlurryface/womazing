import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductAction } from "../store/cartReducer";

import Preview from "../components/ordinary/preview/Preview";
import ProductsItem from "../components/ordinary/productsItem/ProductsItem";
import Button from "../components/UI/button/Button";

import styles from './../assets/styles/Product.module.scss'
import Toast from "../components/simple/toast/Toast";
function Product({ goods }) {
    const dispatch = useDispatch()
    const { id } = useParams()
    const product = goods.filter(item => item.id == id)[0];
    const [similarProducts, setSimilarProducts] = useState(goods.filter(item => (item.category === product.category && item.id != id)).sort(() => Math.random() - 0.5));
    const [productSettings, setProductSettings] = useState({});
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [count, setCount] = useState(1);
    const [toast, setToast] = useState({
        isActive: false,
        message: '',
    })
    const min = 1;
    const max = 99;
    useEffect(() => {
        if (product !== undefined) {
            setProductSettings({
                id: product.id,
                category: product.category,
                photo: product.photo,
                title: product.title,
                price: product.price,
                size: selectedSize,
                color: selectedColor,
                count: count,
                totalPrice: product.price * count
            })
        }
    }, [product, selectedSize, selectedColor, count]);
    useEffect(()=> {
        resetSettings();
        setSimilarProducts(goods.filter(item => (item.category === product.category && item.id != id)).sort(() => Math.random() - 0.5));
    }, [product])
    function resetSettings() {
        setSelectedSize(null);
        setSelectedColor(null);
        setCount(1);
    }
    function addToCart() {
        selectedSize === null && setSelectedSize(undefined);
        selectedColor === null && setSelectedColor(undefined);

        if (productSettings.size != undefined && productSettings.color != undefined) {
            dispatch(addProductAction(productSettings))
            setToast({ ...toast, isActive: true, message: 'Товар добавлен в корзину' })
            resetSettings();
        } else {
            setToast({ ...toast, isActive: true, message: 'Невыбраны все обязательные параметры' })
        }
    }

    return product === undefined
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
                                    ${product.price}
                                    {/* <span className={styles.item__price_second}>$450</span> */}
                                </h2>
                            </div>
                            <div className={styles.item__group}>
                                <p className={styles.item__option}>Выберите размер
                                    {selectedSize === undefined && <span className={styles.item__option_error}>Обязательный параметр</span>}
                                </p>
                                <div className={styles.item__size}>
                                    {product.sizes.map((size, index) => {
                                        return <button onClick={() => setSelectedSize(size)} key={index} className={classNames(styles.item__size_btn, { [`${styles.item__size_btn_active}`]: selectedSize === size })}>{size}</button>
                                    })}
                                </div>
                            </div>
                            <div className={styles.item__group}>
                                <p className={styles.item__option}>Выберите цвет
                                    {selectedColor === undefined && <span className={styles.item__option_error}>Обязательный параметр</span>}
                                </p>
                                <div className={styles.item__color}>
                                    {product.colors.map((color, index) => {
                                        return <button onClick={() => setSelectedColor(color)} key={index} className={classNames(styles.item__color_btn, { [`${styles.item__color_btn_active}`]: selectedColor === color })} style={{ backgroundColor: color }}></button>
                                    })}
                                </div>
                            </div>
                            <div className={styles.item__buy}>
                                <input type="number" value={count} onChange={e => setCount(Math.max(min, Math.min(max, Number(e.target.value))))} className={styles.item__count} />
                                <Button type="button" onClick={addToCart}>Добавить в корзину</Button>
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
                            if (index < 3) { return <ProductsItem data={product} key={product.id} /> }
                        })}
                    </div>
                </div>
            </section>
            <Toast toast={toast} setToast={setToast} />
        </>
}

export default Product