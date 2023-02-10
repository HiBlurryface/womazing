import React from "react";

import Preview from "../components/ordinary/preview/Preview";
import Input from './../components/UI/input/Input';
import Button from './../components/UI/button/Button';

import styles from './../assets/styles/Checkout.module.scss';
import Textarea from "../components/UI/textarea/Textarea";
function Checkout() {
    return <>
        <Preview title="Оформление заказа"/>
        <section className={styles.order}>
            <div className={styles.container}>
                <div className={styles.order__form}>
                    <div className={styles.order__data}>
                        <div className={styles.order__block}>
                            <h2 className={styles.order__title}>Данные получателя</h2>
                            <Input placeholder="Имя" />
                            <Input placeholder="E-mail" />
                            <Input placeholder="Телефон" />
                        </div>
                        <div className={styles.order__block}>
                            <h2 className={styles.order__title}>Адрес получателя</h2>
                            <Input placeholder="Страна" />
                            <Input placeholder="Город" />
                            <Input placeholder="Улица" />
                            <Input placeholder="Дом" />
                            <Input placeholder="Квартира" />
                        </div>
                        <div className={styles.order__block}>
                            <h2 className={styles.order__title}>Комментарии</h2>
                            <Textarea placeholder="Страна" />
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
                                    <input type="radio" id="cash" name="radio-group" className={styles.order__radio_input} checked/>
                                    <div className={styles.order__radio_mark}></div>
                                    Оплата наличными
                                </label>
                            </div>
                            <Button>Разместить заказ</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Checkout;