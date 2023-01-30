import React from "react";
import styles from './Button.module.scss'

function Button({children, onClick}) {
    return <button type="button" className={styles.style} onClick={onClick}>{children}</button>
}

export default Button