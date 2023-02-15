import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Preview from "../components/ordinary/preview/Preview";
import ProductsItem from '../components/ordinary/productsItem/ProductsItem'

import styles from './../assets/styles/Catalog.module.scss'
import Pagination from "../components/smart/pagination/Pagination";

function Catalog({goods}) {
    const categories = ['Все','Футболки','Свитшоты', 'Пальто', 'Свитера'];
    const [currentCategory, setCurrentCategory] = useState(0);
    const [items,setItems] = useState(goods)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    useEffect(()=> {
        if(currentCategory===0) {
            setItems(goods)
        } else {
            setItems(goods.filter(product => product.category === currentCategory))
        }
        setCurrentPage(1)
    }, [goods, currentCategory])

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = items.slice(firstItemIndex, lastItemIndex)

    return <>
        <Preview title="Магазин" />
        <section className={styles.filters}>
            <div className={styles.container}>
                <div className={styles.filters__content}>
                    {categories.map((category, i) => {
                        return <button onClick={()=>setCurrentCategory(i)} type="button" className={classNames(styles.filters__item, {[`${styles.filters__item_active}`]: currentCategory === i})} key={i}>{category}</button>
                    })}
                </div>
            </div>
        </section>
        <section className={styles.products}>
            <div className={styles.container}>
                <p className={styles.products__text}>Показано {items.indexOf(currentItems[currentItems.length-1])+1} из {items.length} товаров</p>
                <div className={styles.products__content}>
                    {currentItems.map((product) => {
                        return <ProductsItem data={product} key={product.id} />
                    })}
                </div>
                <p className={styles.products__text}>Показано {items.indexOf(currentItems[currentItems.length-1])+1} из {items.length} товаров</p>
                <Pagination 
                itemsPerPage={itemsPerPage} 
                items={items.length} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            </div>
        </section>
    </>
}

export default Catalog