import React from "react";
import styles from './Textarea.module.scss'

function Textarea(props) {
    return <div className={styles.wrapper}>
        <textarea className={styles.textarea} {...props} placeholder=" " cols="30" rows="6"/>
        <label htmlFor={props.id} className={styles.label}>{props.placeholder}</label>
    </div>
}

export default Textarea