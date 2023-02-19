import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from './Toast.module.scss';
function Toast({ toast, setToast }) {
    useEffect(() => {
        toast.isActive === true && setTimeout(() => {
            setToast({...toast, isActive: false})
        }, 2000);
    }, [toast])
    return <p className={classNames(styles.wrapper, { [`${styles.wrapper_show}`]: toast.isActive === true })}>
        {toast.message}
    </p>
}

export default Toast;