import React from "react";
import styles from './Textarea.module.scss'

const Textarea = ({id, placeholder, register}) => {
    return <div className={styles.wrapper}>
        <textarea className={styles.textarea} id={id} placeholder=" " cols="30" rows="6" {...register}/>
        <label htmlFor={id} className={styles.label}>{placeholder}</label>
    </div>
}

export default Textarea