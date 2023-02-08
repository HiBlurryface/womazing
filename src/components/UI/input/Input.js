import React from "react";
import styles from './Input.module.scss'

function Input(props, style) {
    return <div className={styles.wrapper} style={style}>
        <input className={styles.input} {...props} placeholder=" "/>
        <label htmlFor={props.id} className={styles.label}>{props.placeholder}</label>
    </div>
}

export default Input