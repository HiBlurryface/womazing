import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from "../store/cartReducer";
import * as yup from 'yup'

import Preview from "../components/ordinary/preview/Preview";
import ValidationInput from './../components/UI/validationInput/ValidationInput';
import Button from './../components/UI/button/Button';

import styles from './../assets/styles/Checkout.module.scss';
import Textarea from "../components/UI/textarea/Textarea";

function Checkout() {
    const dispatch = useDispatch();
    const checkout = useSelector(state => state.checkout);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate()

    const schema = yup.object({
        name: yup.string().required('Required field'),
        email: yup.string().required("Required field").email('Wrong email address'),
        phone: yup.string().required("Required field").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Wrong phone number"),
        country: yup.string().required('Required field'),
        city: yup.string().required('Required field'),
        street: yup.string().required('Required field'),
        house: yup.string().required('Required field'),
        apartment: yup.string().required('Required field'),
        message: yup.string(),
    })
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        shouldFocusError: false,
        resolver: yupResolver(schema)
    });
    const [paymentMethods, setPaymentMethods] = useState([
        {
            id: 1,
            type: "cash",
            title: 'Cash',
        },
        {
            id: 2,
            type: "PayPal",
            title: 'PayPal',
        },
    ])
    const [payment, setPayment] = useState('cash')
    const onSubmit = (form) => {
        const data = {
            data: form,
            paymentMethod: payment,
            order: checkout,
        }
        console.log(data)
        navigate('/checkout/success')
        dispatch(clearCart([]))
    };

    return checkout === null
        ? <Navigate to="/*" />
        : <>
            <Preview title="Checkout" />
            <section className={styles.order}>
                <div className={styles.container}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.order__form}>
                            <div className={styles.order__data}>
                                <div className={styles.order__block}>
                                    <h2 className={styles.order__title}>Recipient data</h2>
                                    <ValidationInput
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        register={{ ...register('name') }}
                                        errorMessage={errors.name?.message}
                                    />
                                    <ValidationInput
                                        id="email"
                                        type="text"
                                        placeholder="E-mail"
                                        register={{ ...register('email') }}
                                        errorMessage={errors.email?.message}
                                    />
                                    <ValidationInput
                                        id="phone"
                                        type="number"
                                        placeholder="Tel"
                                        register={{ ...register('phone') }}
                                        errorMessage={errors.phone?.message}
                                    />
                                </div>
                                <div className={styles.order__block}>
                                    <h2 className={styles.order__title}>Адрес получателя</h2>
                                    <ValidationInput
                                        id="country"
                                        type="text"
                                        placeholder="Country"
                                        register={{ ...register('country') }}
                                        errorMessage={errors.country?.message}
                                    />
                                    <ValidationInput
                                        id="city"
                                        type="text"
                                        placeholder="City"
                                        register={{ ...register('city') }}
                                        errorMessage={errors.city?.message}
                                    />
                                    <ValidationInput
                                        id="street"
                                        type="text"
                                        placeholder="Street"
                                        register={{ ...register('street') }}
                                        errorMessage={errors.street?.message}
                                    />
                                    <ValidationInput
                                        id="house"
                                        type="text"
                                        placeholder="House"
                                        register={{ ...register('house') }}
                                        errorMessage={errors.house?.message}
                                    />
                                    <ValidationInput
                                        id="apartment"
                                        type="text"
                                        placeholder="Apartment"
                                        register={{ ...register('apartment') }}
                                        errorMessage={errors.apartment?.message}
                                    />
                                </div>
                                <div className={styles.order__block}>
                                    <h2 className={styles.order__title}>Comments</h2>
                                    <Textarea id="message" placeholder="Message" register={{ ...register('message') }}></Textarea>
                                </div>
                            </div>
                            <div className={styles.order__total}>
                                <div className={styles.order__block}>
                                    <h2 className={styles.order__title}>Your order</h2>
                                    <ul className={styles.order__list}>
                                        <li className={styles.order__list_header}>Product<span>Total</span></li>
                                        {checkout.products.map(item => {
                                            return <li className={styles.order__list_item} key={item.id}>{item.title}<span>${item.totalPrice}</span></li>
                                        })}
                                        <li className={styles.order__list_price}>Subtotal:<span>${checkout.price}</span></li>
                                        {checkout.discount != null && <li className={styles.order__list_price} style={{ color: '#e50012' }}>Discount<span>{checkout.discount}%</span></li>}
                                        <li className={styles.order__list_total}>Total:<span>${checkout.discountedPrice}</span></li>
                                    </ul>
                                </div>
                                <div className={styles.order__block}>
                                    <h2 className={styles.order__title}>Payments methods</h2>
                                    <div className={styles.order__radio}>
                                        {paymentMethods.map(method => {
                                            return <label htmlFor={method.type} className={styles.order__radio_label} key={method.id} onClick={() => setPayment(method.type)}>
                                                <input type="radio" id={method.type} value={method.id} name="payment" className={styles.order__radio_input} checked={payment === method.type ? true : false} readOnly />
                                                <div className={styles.order__radio_mark}></div>
                                                {method.title}
                                            </label>
                                        })}
                                    </div>
                                    <Button type="submit">Place an order</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
}

export default Checkout;