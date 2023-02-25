import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { removeProductAction } from "../store/cartReducer";
import { getData } from "../store/checkoutReducer";
import { getPromocode } from "../store/promocodeReducer";

import Toast from "../components/simple/toast/Toast";
import Preview from '../components/ordinary/preview/Preview'
import Button from "../components/UI/button/Button";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";
import Input from "../components/UI/input/Input";

import styles from './../assets/styles/Cart.module.scss';
function Cart({ promocodes }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [promocode, setPromocode] = useState(useSelector(state => state.promocode))
    const [discount, setDiscount] = useState(null)
    const [toast, setToast] = useState({
        isActive: false,
        message: '',
    })

    // set total price
    useEffect(() => {
        cart.length === 0
            ? setTotalPrice(Number(0).toFixed(2))
            : setTotalPrice((cart.map(item => item.totalPrice).reduce((a, b) => a + b)).toFixed(2))
    }, [cart])

    // use promocode
    useEffect(() => {
        promocodes.find(item => item.title === promocode) === undefined
            ? setDiscount(null)
            : setDiscount(promocodes.find(item => item.title === promocode).discount)
    }, [])

    // set discounted price
    useEffect(() => {
        discount === null
            ? setDiscountedPrice(totalPrice)
            : setDiscountedPrice((totalPrice - (totalPrice * discount / 100)).toFixed(2))
    }, [totalPrice, discount])

    function addPromocode() {
        if (promocodes.find(item => item.title === promocode) === undefined) {
            setDiscount(null)
            dispatch(getPromocode(''));
            setToast({ ...toast, isActive: true, message: 'Promocode not found' })
        } else {
            setDiscount(promocodes.find(item => item.title === promocode).discount)
            dispatch(getPromocode(promocode));
            setToast({ ...toast, isActive: true, message: 'Added promocode' })
        }
    }

    function confirm() {
        if (cart.length === 0) {
            setToast({ ...toast, isActive: true, message: 'Корзина пустая' })
        } else {
            dispatch(getData({
                products: cart,
                price: totalPrice,
                discount: discount,
                discountedPrice: discountedPrice
            }))
            navigate('/checkout');
        }
    }

    return <>
        <Preview title="Cart" />
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.header}>
                        <h2 className={styles.header__title}>Product</h2>
                        <h2 className={styles.header__title}>Price</h2>
                        <h2 className={styles.header__title}>Amount</h2>
                        <h2 className={styles.header__title}>Total</h2>
                    </div>
                    {cart.length === 0
                        ? <h2 className={styles.cart}>Cart is empty</h2>
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
                    <Input
                        placeholder="Add promocode"
                        id="promocode"
                        type="text"
                        value={promocode}
                        onChange={e => setPromocode(e.target.value)}
                        style={{ maxWidth: '255px' }}
                    />
                    <ButtonTransparent onClick={() => addPromocode()}>Use promocode</ButtonTransparent>
                    <ButtonTransparent onClick={() => navigate('/catalog')}>Update cart</ButtonTransparent>
                </div>
                <div className={styles.info}>
                    <p className={styles.info__price}>Subtotal: ${totalPrice}</p>
                    <div className={styles.info__group}>
                        <div className={styles.info__total}>
                            <h3 className={styles.info__total_title}>Total:</h3>
                            <p className={styles.info__total_price}>${discountedPrice}</p>
                        </div>
                        <Button onClick={() => confirm()}>Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
        <Toast toast={toast} setToast={setToast} />
    </>
}

export default Cart