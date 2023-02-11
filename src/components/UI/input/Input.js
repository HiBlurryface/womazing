import React, { forwardRef } from "react";
import styles from './Input.module.scss'

const Input = ({id, type, placeholder, register, errorMessage}) => {
    return <div className={styles.wrapper}>
        <input className={styles.input} id={id} type={type} placeholder=" " {...register}/>
        <label htmlFor={id} className={styles.label}>{placeholder}</label>
        <span className={styles.error}>{errorMessage}</span>
  </div>
}

export default Input