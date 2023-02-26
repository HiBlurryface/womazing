import classNames from "classnames";
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ title }) => {
    const location = useLocation();
    const currentPage = location.pathname.split('/')[2];
    
    return <div className={styles.wrapper}>
        <NavLink to="/womazing/" className={styles.item}>Home</NavLink>
        <span className={styles.separation}></span>
        <NavLink to={location.pathname} className={classNames(styles.item, styles.item__active)}>{currentPage}</NavLink>
    </div>
}

export default Breadcrumbs;