import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

import Preview from "../components/ordinary/preview/Preview";
import Input from './../components/UI/input/Input'
import Button from './../components/UI/button/Button'
import Textarea from './../components/UI/textarea/Textarea'

import map from './../assets/images/map.png'
import styles from './../assets/styles/Contacts.module.scss'
import classNames from "classnames";
function Contacts() {
    const [showMessage, setShowMessage] = useState(false)
    const schema = yup.object({
        name: yup.string().required('Обязательное поле'),
        email: yup.string().required("Обязательное поле").email('Неправильная почта'),
        phone: yup.string().required("Обязательное поле").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Неправильный номер телефона"),
        message: yup.string(),
    })

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        shouldFocusError: false,
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
        reset()
        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 5000);
    };

    return <>
        <Preview title="Контакты" />
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
                        <a href="tel:12345678" className={styles.contacts__block_link}>+7 (495) 823-54-12</a>
                    </div>
                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__block_title}>E-mail</p>
                        <a href="mailto:info@sitename.com" className={styles.contacts__block_link}>info@sitename.com</a>
                    </div>
                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__block_title}>Адрес</p>
                        <a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,89.9y,288.4h,72.03t/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656" className={styles.contacts__block_link}>г. Москва, 3-я улица Строителей, 25</a>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.form}>
            <div className={styles.container}>
                <div className={styles.form__content}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className={styles.form__title}>Напишите нам</h3>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Имя"
                            register={{ ...register('name') }}
                            errorMessage={errors.name?.message}
                        />
                        <Input
                            id="email"
                            type="text"
                            placeholder="E-mail"
                            register={{ ...register('email') }}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            id="phone"
                            type="number"
                            placeholder="Телефон"
                            register={{ ...register('phone') }}
                            errorMessage={errors.phone?.message}
                        />
                        <Textarea id="message" placeholder="Сообщение" register={{ ...register('message') }}></Textarea>
                        <Button type="submit">Отправить</Button>
                    </form>
                    <span className={classNames(styles.form__message, { [`${styles.form__message_active}`]: showMessage })}>
                        Сообщение успешно отправлено
                    </span>
                </div>
            </div>
        </section>
    </>
}

export default Contacts