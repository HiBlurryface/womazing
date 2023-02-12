import React from "react";
import classNames from "classnames";

import buttonNext from './../../../assets/images/slider-arrow-next.svg'
import buttonPrev from './../../../assets/images/slider-arrow-prev.svg'
import styles from './Pagination.module.scss'
function Pagination({ itemsPerPage, items, currentPage, setCurrentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return <>
        <div className={styles.wrapper}>
            <button
                type="button"
                onClick={() => setCurrentPage(currentPage - 1)}
                className={classNames(styles.prev, { [`${styles.prev__disabled}`]: currentPage === 1 })}
            >
                <img src={buttonPrev} alt="" />
            </button>
            {pageNumbers.map(number => {
                return <button type="button"
                    className={classNames(styles.button, { [`${styles.button__active}`]: currentPage === number })}
                    onClick={() => setCurrentPage(number)}
                    key={number}>
                    {number}
                </button>
            })}
            <button
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
                className={classNames(styles.next, { [`${styles.next__disabled}`]: currentPage === pageNumbers.length })}
            >
                <img src={buttonNext} alt="" />
            </button>
        </div>
    </>
}

export default Pagination;