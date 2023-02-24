import React from "react";
import styles from './Input.module.scss'

const Input = (props) => {
  return <div className={styles.wrapper}>
    <input className={styles.input} {...props} placeholder=" " />
    <label htmlFor={props.id} className={styles.label}>{props.placeholder}</label>
  </div>
}

export default Input