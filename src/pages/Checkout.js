import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

import Preview from "../components/ordinary/preview/Preview";
import Input from './../components/UI/input/Input';
import Button from './../components/UI/button/Button';

import styles from './../assets/styles/Checkout.module.scss';
import Textarea from "../components/UI/textarea/Textarea";

function Checkout() {
    const navigate = useNavigate()
    const schema = yup.object({
        name: yup.string().required('Обязательное поле'),
        email: yup.string().required("Обязательное поле").email('Неправильная почта'),
        phone: yup.string().required("Обязательное поле").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Неправильный номер телефона"),
        country: yup.string().required('Обязательное поле'),
        city: yup.string().required('Обязательное поле'),
        street: yup.string().required('Обязательное поле'),
        house: yup.string().required('Обязательное поле'),
        apartment: yup.string().required('Обязательное поле'),
        message: yup.string(),
    })

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        shouldFocusError: false,
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
        navigate('/success')
    };

    return <>
        <Preview title="Оформление заказа" />
        <section className={styles.order}>
            <div className={styles.container}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.order__form}>
                        <div className={styles.order__data}>
                            <div className={styles.order__block}>
                                <h2 className={styles.order__title}>Данные получателя</h2>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Имя"
                                    register={{ ...register('name') }}
                                    errorMessage={errors.name?.message}
                                />
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="E-mail"
                                    register={{ ...register('email') }}
                                    errorMessage={errors.email?.message}
                                />
                                <Input
                                    id="phone"
                                    type="number"
                                    placeholder="Телефон"
                                    register={{ ...register('phone') }}
                                    errorMessage={errors.phone?.message}
                                />
                            </div>
                            <div className={styles.order__block}>
                                <h2 className={styles.order__title}>Адрес получателя</h2>
                                <Input
                                    id="country"
                                    type="text"
                                    placeholder="Страна"
                                    register={{ ...register('country') }}
                                    errorMessage={errors.country?.message}
                                />
                                <Input
                                    id="city"
                                    type="text"
                                    placeholder="Город"
                                    register={{ ...register('city') }}
                                    errorMessage={errors.city?.message}
                                />
                                <Input
                                    id="street"
                                    type="text"
                                    placeholder="Улица"
                                    register={{ ...register('street') }}
                                    errorMessage={errors.street?.message}
                                />
                                <Input
                                    id="house"
                                    type="text"
                                    placeholder="Дом"
                                    register={{ ...register('house') }}
                                    errorMessage={errors.house?.message}
                                />
                                <Input
                                    id="apartment"
                                    type="text"
                                    placeholder="Квартиира"
                                    register={{ ...register('apartment') }}
                                    errorMessage={errors.apartment?.message}
                                />
                            </div>
                            <div className={styles.order__block}>
                                <h2 className={styles.order__title}>Комментарии</h2>
                                <Textarea id="message" placeholder="Сообщение" register={{ ...register('message') }}></Textarea>
                            </div>
                        </div>
                        <div className={styles.order__total}>
                            <div className={styles.order__block}>
                                <h2 className={styles.order__title}>Ваш заказ</h2>
                                <ul className={styles.order__list}>
                                    <li className={styles.order__list_header}>Товар<span>Всего</span></li>
                                    <li className={styles.order__list_item}>Футболка УСА<span>$123</span></li>
                                    <li className={styles.order__list_price}>Подытог<span>$123</span></li>
                                    <li className={styles.order__list_total}>Итого<span>$123</span></li>
                                </ul>
                            </div>
                            <div className={styles.order__block}>
                                <h2 className={styles.order__title}>Способы оплаты</h2>
                                <div className={styles.order__radio}>
                                    <label htmlFor="cash" className={styles.order__radio_label}>
                                        <input type="radio" id="cash" name="radio-group" className={styles.order__radio_input} checked readOnly/>
                                        <div className={styles.order__radio_mark}></div>
                                        Оплата наличными
                                    </label>
                                </div>
                                <Button type="submit">Разместить заказ</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
}

export default Checkout;