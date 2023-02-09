import React from "react";

import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";

import success from './../assets/images/success.svg';
import styles from './../assets/styles/Success.module.scss'
function Success() {
    return <>
        <div className={styles.preview}>
            <div className={styles.container}>
                <div className={styles.preview__content}>
                    <h1 className={styles.preview__title}>Заказ получен</h1>
                    <div className={styles.preview__breadcrumbs}>
                        <a href="" className={styles.preview__breadcrumbs_item}>Главная</a>
                        <span className={styles.preview__breadcrumbs_separation}></span>
                        <a className={styles.preview__breadcrumbs_item}>Оформление заказа</a>
                        <span className={styles.preview__breadcrumbs_separation}></span>
                        <a className={styles.preview__breadcrumbs_item_active}>Заказ получен</a>
                    </div>
                </div>
            </div>
        </div>
        <section className={styles.content}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <img src={success} alt="" className={styles.block__icon} />
                    <div className={styles.block__text}>
                        <h2 className={styles.block__text_title}>Заказ успешно оформлен</h2>
                        <p className={styles.block__text_info}>Мы свяжемся с вами в ближайшее время!</p>
                    </div>
                    <ButtonTransparent>Перейти на главную</ButtonTransparent>
                </div>
            </div>
        </section>
    </>
}

export default Success;