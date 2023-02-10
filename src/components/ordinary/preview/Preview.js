import React from "react";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

import styles from './Preview.module.scss'
function Preview({title}) {
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <Breadcrumbs />
            </div>
        </div>
    </div>
}

export default Preview;