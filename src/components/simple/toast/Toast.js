import React from "react";
import classNames from "classnames";
import styles from './Toast.module.scss';
function Toast({children, show}) {
    return <p className={classNames(styles.wrapper, {[`${styles.wrapper_show}`]: show === true})}>
        {children}
    </p>
}

export default Toast;