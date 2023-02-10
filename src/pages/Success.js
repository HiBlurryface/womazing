import React from "react";

import Preview from "../components/ordinary/preview/Preview";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";

import success from './../assets/images/success.svg';
import styles from './../assets/styles/Success.module.scss'
function Success() {
    return <>
        <Preview title="Заказ получен"/>
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