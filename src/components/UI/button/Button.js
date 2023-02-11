import React from "react";
import styles from './Button.module.scss'

function Button({children, onClick, style, type}) {
    return <button style={style} type={type} className={styles.style} onClick={onClick}>{children}</button>
}

export default Button