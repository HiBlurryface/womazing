import React from "react";
import styles from './Button.module.scss'

function Button({children, onClick, style}) {
    return <button style={style} type="button" className={styles.style} onClick={onClick}>{children}</button>
}

export default Button