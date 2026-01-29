import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

import Preview from "../components/ordinary/preview/Preview";
import ValidationInput from './../components/UI/validationInput/ValidationInput'
import Button from './../components/UI/button/Button'
import Textarea from './../components/UI/textarea/Textarea'

import map from './../assets/images/map.png'
import styles from './../assets/styles/Contacts.module.scss'
import classNames from "classnames";
function Contacts() {
    const [showMessage, setShowMessage] = useState(false)
    const schema = yup.object({
        name: yup.string().required('Required field'),
        email: yup.string().required("Required field").email('Wrong email address'),
        phone: yup.string().required("Required field").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Wrong phone number"),
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
        <Preview title="Contacts" />
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
                        <p className={styles.contacts__block_title}>Telephone</p>
                        <a href="tel:12345678" className={styles.contacts__block_link}>+48 111 222 333</a>
                    </div>
                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__block_title}>E-mail</p>
                        <a href="mailto:info@sitename.com" className={styles.contacts__block_link}>info@sitename.com</a>
                    </div>
                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__block_title}>Address</p>
                        <a href="https://www.google.com/maps?hl=ru&gl=pl&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x47165b120455da67:0xc3c7f5071b750d33" className={styles.contacts__block_link}>Krakow, 31-221, Rynek Główny</a>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.form}>
            <div className={styles.container}>
                <div className={styles.form__content}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className={styles.form__title}>Write to us</h3>
                        <ValidationInput
                            id="name"
                            type="text"
                            placeholder="Name"
                            register={{ ...register('name') }}
                            errorMessage={errors.name?.message}
                        />
                        <ValidationInput
                            id="email"
                            type="text"
                            placeholder="E-mail"
                            register={{ ...register('email') }}
                            errorMessage={errors.email?.message}
                        />
                        <ValidationInput
                            id="phone"
                            type="number"
                            placeholder="Tel"
                            register={{ ...register('phone') }}
                            errorMessage={errors.phone?.message}
                        />
                        <Textarea id="message" placeholder="Message" register={{ ...register('message') }}></Textarea>
                        <Button type="submit" style={{ marginTop: "30px" }}>Send</Button>
                    </form>
                    <span className={classNames(styles.form__message, { [`${styles.form__message_active}`]: showMessage })}>
                        Message sent successfully
                    </span>
                </div>
            </div>
        </section>
    </>
}

export default Contacts