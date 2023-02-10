import React from "react";

import styles from './Breadcrumbs.module.scss'
function Breadcrumbs() {
    return <div className={styles.wrapper}>
        <a href="" className={styles.item}>Главная</a>
        <span className={styles.separation}></span>
        <a className={styles.item}>Магазин</a>
        <span className={styles.separation}></span>
        <a className={styles.item__active}>Продукт</a>
    </div>
}

export default Breadcrumbs;