import React from "react";
import styles from './LargeText.module.scss'

function LargeText({children}) {
    return <p className={styles.style}>{children}</p>
}

export default LargeText