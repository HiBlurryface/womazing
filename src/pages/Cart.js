import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { removeProductAction } from "../store/cartReducer";
import { getData } from "../store/checkoutReducer";

import Preview from '../components/ordinary/preview/Preview'
import Button from "../components/UI/button/Button";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";
import Input from "../components/UI/input/Input";

import styles from './../assets/styles/Cart.module.scss';
function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0);
    const [data, setData] = useState({
        products: cart,
        price: totalPrice,
    });
    useEffect(() => {
        cart.length > 0 && setTotalPrice(cart.map(item => item.totalPrice).reduce((a, b) => a + b))
    }, [cart])

    function confirm() {
        dispatch(getData({
            products: cart,
            price: totalPrice,
        }))
        navigate('/checkout');
    }
    return <>
        <Preview title="Корзина" />
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.header}>
                        <h2 className={styles.header__title}>Товар</h2>
                        <h2 className={styles.header__title}>Цена</h2>
                        <h2 className={styles.header__title}>Количество</h2>
                        <h2 className={styles.header__title}>Всего</h2>
                    </div>
                    {cart.length === 0
                        ? <h2 className={styles.cart}>Корзина пустая</h2>
                        : cart.map((item, index) => {
                            return <div className={styles.item} key={index}>
                                <div className={styles.item__details}>
                                    <button className={styles.item__details_delete} onClick={() => dispatch(removeProductAction(item.id))}></button>
                                    <img src={item.photo} alt="Photo" className={styles.item__details_photo} />
                                    <h3 className={styles.item__details_title}>{item.title}</h3>
                                </div>
                                <p className={styles.item__cost}>${item.price}</p>
                                <div className={styles.item__count}>
                                    <p className={styles.item__count_text}>{item.count}</p>
                                </div>
                                <p className={styles.item__totalPrice}>${item.totalPrice}</p>
                            </div>
                        })
                    }
                </div>
                <div className={styles.group}>
                    <Input placeholder="Введите купон" style={{ maxWidth: '255px' }} />
                    <ButtonTransparent>Применить купон</ButtonTransparent>
                    <ButtonTransparent onClick={() => navigate('/catalog')}>Обновить корзину</ButtonTransparent>
                </div>
                <div className={styles.info}>
                    <p className={styles.info__price}>Подытог: ${totalPrice}</p>
                    <div className={styles.info__group}>
                        <div className={styles.info__total}>
                            <h3 className={styles.info__total_title}>Итого:</h3>
                            <p className={styles.info__total_price}>${totalPrice}</p>
                        </div>
                        <Button onClick={() => confirm()}>Оформить заказ</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Cart