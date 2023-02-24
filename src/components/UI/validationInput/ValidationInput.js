import React from "react";
import styles from './ValidationInput.module.scss'

const ValidationInput = ({id, type, placeholder, register, errorMessage}) => {
    return <div className={styles.wrapper}>
        <input className={styles.input} id={id} type={type} placeholder=" " {...register}/>
        <label htmlFor={id} className={styles.label}>{placeholder}</label>
        <span className={styles.error}>{errorMessage}</span>
  </div>
}

export default ValidationInput