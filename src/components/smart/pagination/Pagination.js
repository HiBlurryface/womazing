import React, {useState, useEffect} from "react";
import classNames from "classnames";

import buttonNext from './../../../assets/images/slider-arrow-next.svg'
import buttonPrev from './../../../assets/images/slider-arrow-prev.svg'
import styles from './Pagination.module.scss'
function Pagination({ itemsPerPage, items, currentPage, setCurrentPage }) {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentPageNumber, setCurrentPageNumber] = useState([])
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(items / itemsPerPage); i++) {
        pageNumber.push(i)
    }

    useEffect(() => {
        setCurrentButton(1)
    }, [items, itemsPerPage])

    useEffect(() => {
        let pageNumberList = [...currentPageNumber];
        pageNumberList = pageNumber.slice(0, 5)

        if (currentButton <= 3) {
            pageNumberList = pageNumber.slice(0, 5)
        } else if (pageNumber.length != 4 && currentButton > 3 && currentButton < pageNumber[pageNumber.length - 2]) {
            pageNumberList = pageNumber.slice(currentButton - 3, currentButton + 2)
        } else if (currentButton === pageNumber[pageNumber.length - 2]) {
            pageNumberList = pageNumber.slice(currentButton - 4, pageNumber[pageNumber.length - 1])
        } else if (pageNumber.length !== 4) {
            pageNumberList = pageNumber.slice(currentButton - 5, pageNumber[pageNumber.length - 1])
        }

        setCurrentPageNumber(pageNumberList)
        setCurrentPage(currentButton)
    }, [currentButton, items, itemsPerPage])

    return <>
        <div className={styles.wrapper}>
            <button
                type="button"
                onClick={() => setCurrentButton(currentButton - 1)}
                className={classNames(styles.prev, { [`${styles.prev__disabled}`]: currentPage === 1 })}
            >
                <img src={buttonPrev} alt="" />
            </button>
            {currentPageNumber.map(number => {
                return <button type="button"
                    className={classNames(styles.button, { [`${styles.button__active}`]: currentPage === number })}
                    onClick={() => setCurrentButton(number)}
                    key={number}>
                    {number}
                </button>
            })}
            <button
                type="button"
                onClick={() => setCurrentButton(currentButton + 1)}
                className={classNames(styles.next, { [`${styles.next__disabled}`]: currentPage === pageNumber.length })}
            >
                <img src={buttonNext} alt="" />
            </button>
        </div>
    </>
}

export default Pagination;