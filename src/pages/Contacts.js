import React from "react";

import Input from './../components/UI/input/Input'
import Button from './../components/UI/button/Button'
import Textarea from './../components/UI/textarea/Textarea'

import map from './../assets/images/map.png'
import styles from './../assets/styles/Contacts.module.scss'
function Contacts() {
    return <>
        <div className={styles.preview}>
            <div className={styles.container}>
                <div className={styles.preview__content}>
                    <h1 className={styles.preview__title}>Контакты</h1>
                    <div className={styles.preview__breadcrumbs}>
                        <a href="" className={styles.preview__breadcrumbs_item}>Главная</a>
                        <span className={styles.preview__breadcrumbs_separation}></span>
                        <a className={styles.preview__breadcrumbs_item_active}>Контакты</a>
                    </div>
                </div>
            </div>
        </div>
        <section className={styles.map}>
            <div className={styles.container}>
                <a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,89.9y,288.4h,72.03t/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656" className={styles.map__link}>
                    <img src={map} alt="" className={styles.map__img} />
                </a>
            </div>
        </section>
        <section className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contacts__content}>
                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__block_title}>Телефон</p>
                        <a href="" className={styles.contacts__block_link}>+7 (495) 823-54-12</a>
                    </div>
                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__block_title}>E-mail</p>
                        <a href="" className={styles.contacts__block_link}>info@sitename.com</a>
                    </div>
                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__block_title}>Адрес</p>
                        <a href="" className={styles.contacts__block_link}>г. Москва, 3-я улица Строителей, 25</a>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.form}>
            <div className={styles.container}>
                <div className={styles.form__content}>
                    <form action="">
                        <h3 className={styles.form__title}>Напишите нам</h3>
                        <Input placeholder="Имя" />
                        <Input placeholder="E-mail" />
                        <Input placeholder="Телефон" />
                        <Textarea placeholder="Сообщение"></Textarea>
                        <Button>Отправить</Button>
                    </form>
                    <span className={styles.form__message}>
                        Сообщение успешно отправлено
                    </span>
                </div>
            </div>
        </section>
    </>
}

export default Contacts