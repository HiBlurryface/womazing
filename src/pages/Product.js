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
    const [similarProducts, setSimilarProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({})
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState({
        show: false,
        text: '',
    })
    const min = 1;
    const max = 100;
    
    useEffect(() => {
        setSimilarProducts(goods.filter(item => (item.category === product.category && item.id != id)).sort(() => Math.random() - 0.5));
    }, [goods])

    useEffect(()=> {
        product != undefined && setNewProduct({
            id: product.id,
            category: product.category,
            photo: product.photo,
            title: product.title,
            price: product.price,
            size: null,
            color: null,
            count: count,
            totalPrice: product.price * count
        })
    }, [product, count])

    function onChange(e) {
        const value = Math.max(min, Math.min(max, Number(e.target.value)));
        setCount(value);
    }

    function addToCart() {
        if(newProduct.color != null && newProduct.size != null) {
            dispatch(addProductAction(newProduct))
            setNewProduct({...newProduct, size: null, color: null})
            setCount(1)
            setMessage({...message, show:true, text: 'Товар добавлен в корзину'})
            setTimeout(() => {
                setMessage({...message, show:false, text: 'Товар добавлен в корзину'})
            }, 2000);
        } else {
            setMessage({...message, show:true, text: 'Невыбраны обязательные параметры'})
            setTimeout(() => {
                setMessage({...message, show:false, text: 'Невыбраны обязательные параметры'})
            }, 2000);
        }
    }

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
                                    ${product.price}
                                    {/* <span className={styles.item__price_second}>$450</span> */}
                                </h2>
                            </div>
                            <div className={styles.item__group}>
                                <p className={styles.item__option}>Выберите размер {newProduct.size === null && <span className={styles.item__option_error}>Обязательный параметр</span>}</p>
                                <div className={styles.item__size}>
                                    {product.sizes.map((size, index) => {
                                        return <button onClick={()=>setNewProduct({...newProduct, size: size})} key={index} className={classNames(styles.item__size_btn, { [`${styles.item__size_btn_active}`]: newProduct.size === size })}>{size}</button>
                                    })}
                                </div>
                            </div>
                            <div className={styles.item__group}>
                                <p className={styles.item__option}>Выберите цвет {newProduct.color === null && <span className={styles.item__option_error}>Обязательный параметр</span>}</p>
                                <div className={styles.item__color}>
                                    {product.colors.map((color, index) => {
                                        return <button onClick={()=>setNewProduct({...newProduct, color: color})} key={index} className={classNames(styles.item__color_btn, { [`${styles.item__color_btn_active}`]: newProduct.color === color })} style={{ backgroundColor: color }}></button>
                                    })}
                                </div>
                            </div>
                            <div className={styles.item__buy}>
                                <input type="number" className={styles.item__count} min={min} max={max} value={count} onChange={e => onChange(e)}/>
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
            <Toast show={message.show}>{message.text}</Toast>
        </>
}

export default Product