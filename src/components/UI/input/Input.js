import React from "react";
import styles from './Input.module.scss'

function Input(props) {
    return <div className={styles.wrapper} style={props.style}>
        <input className={styles.input} {...props} placeholder=" "/>
        <label htmlFor={props.id} className={styles.label}>{props.placeholder}</label>
        {props.error==='true' && <span className={styles.error}>{props.message}</span>}
    </div>
}

export default Input