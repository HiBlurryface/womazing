import React from "react";
import Button from "../components/UI/button/Button";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";

import Input from "../components/UI/input/Input";

import product from './../assets/images/product.jpg'
import styles from './../assets/styles/Cart.module.scss';
function Cart() {
    return <>
        <div className={styles.preview}>
            <div className={styles.container}>
                <div className={styles.preview__content}>
                    <h1 className={styles.preview__title}>Корзина</h1>
                    <div className={styles.preview__breadcrumbs}>
                        <a href="" className={styles.preview__breadcrumbs_item}>Главная</a>
                        <span className={styles.preview__breadcrumbs_separation}></span>
                        <a className={styles.preview__breadcrumbs_item_active}>Корзина</a>
                    </div>
                </div>
            </div>
        </div>
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.header}>
                        <h2 className={styles.header__title}>Товар</h2>
                        <h2 className={styles.header__title}>Цена</h2>
                        <h2 className={styles.header__title}>Количество</h2>
                        <h2 className={styles.header__title}>Всего</h2>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item__details}>
                            <button className={styles.item__details_delete}></button>
                            <img src={product} alt="" className={styles.item__details_photo} />
                            <h3 className={styles.item__details_title}>Футболка USA</h3>
                        </div>
                        {/* <div className={styles.item__group}> */}
                        <p className={styles.item__cost}>123$</p>
                        <div className={styles.item__count}>
                            <p className={styles.item__count_text}>1</p>
                        </div>
                        <p className={styles.item__totalPrice}>123$</p>
                        {/* </div> */}
                    </div>
                </div>
                <div className={styles.group}>
                    <Input placeholder="Введите купон" style={{ maxWidth: '255px' }} />
                    <ButtonTransparent>Применить купон</ButtonTransparent>
                    <ButtonTransparent>Обновить корзину</ButtonTransparent>
                </div>
                <div className={styles.info}>
                    <p className={styles.info__price}>Подытог: $123</p>
                    <div className={styles.info__group}>
                        <div className={styles.info__total}>
                            <h3 className={styles.info__total_title}>Итого:</h3>
                            <p className={styles.info__total_price}>$123</p>
                        </div>
                        <Button>Оформить заказ</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Cart