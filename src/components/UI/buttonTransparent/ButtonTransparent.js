import React from "react";
import styles from './ButtonTransparent.module.scss'

function ButtonTransparent({children, onClick, style}) {
    return <button style={style} type="button" className={styles.style} onClick={onClick}>{children}</button>
}

export default ButtonTransparent