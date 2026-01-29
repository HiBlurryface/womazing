import React from "react";
import { NavLink } from "react-router-dom";
import styles from './ProductsItem.module.scss'

function ProductsItem({ data }) {
    return <NavLink to={`/womazing/product/${data.id}`} className={styles.block}>
        {data.fullPrice && <div className={styles.sale}>
            <p className={styles.sale__text}>-{100 - (data.price / data.fullPrice * 100).toFixed()}%</p>
        </div>}
        {data.isBestseller === true && <p className={styles.bestseller}>BESTSELLER</p>}
        <div className={styles.img}>
            <div className={styles.bg}>
                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                </svg>
            </div>
            <img src={data.photo} alt="" className={styles.photo} />
        </div>
        <div className={styles.info}>
            <h4 className={styles.title}>{data.title}</h4>
            <p className={styles.price}>{data.fullPrice && <span className={styles.price__full}>${data.fullPrice}</span>}  ${data.price}</p>
        </div>
    </NavLink>
}

export default ProductsItem;