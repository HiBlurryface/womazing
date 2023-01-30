import React from "react";
import styles from './TitleH1.module.scss'

function TitleH1({children}) {
    return <h1 className={styles.style}>{children}</h1>
}

export default TitleH1