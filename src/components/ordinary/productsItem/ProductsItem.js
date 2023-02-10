import React from "react";


import styles from './ProductsItem.module.scss'
function ProductsItem({photo}) {
    return <a href="" className={styles.block}>
        <div className={styles.img}>
            <div className={styles.bg}>
                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                </svg>
            </div>
            <img src={photo} alt="" className={styles.photo} />
        </div>
        <div className={styles.info}>
            <h4 className={styles.title}>Футболка</h4>
            <p className={styles.price}>$129</p>
        </div>
    </a>
}

export default ProductsItem;