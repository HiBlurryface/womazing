import classNames from "classnames";
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({title}) => {
    const location = useLocation();
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            return <div key={crumb} style={{display:'flex', alignItems:'center'}}>
                <span className={styles.separation}></span>
                <NavLink to={`/${crumb}`} className={classNames(styles.item, styles.item__active)}>{title}</NavLink>
            </div>
        })

    return <div className={styles.wrapper}>
        <NavLink to="/" className={styles.item}>Home</NavLink>
        {crumbs}
    </div>
}

export default Breadcrumbs;