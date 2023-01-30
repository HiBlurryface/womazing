import React from "react";
import styles from './ButtonTransparent.module.scss'

function ButtonTransparent({children, onClick}) {
    return <button type="button" className={styles.style} onClick={onClick}>{children}</button>
}

export default ButtonTransparent