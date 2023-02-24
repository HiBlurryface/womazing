import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

import classNames from "classnames";
import Button from "../../UI/button/Button";
import ButtonTransparent from "../../UI/buttonTransparent/ButtonTransparent";
import ValidationInput from "../../UI/validationInput/ValidationInput";

import styles from './Modal.module.scss'

function Modal({ modal, setModal }) {
    const [confirm, setConfirm] = useState(false)

    const schema = yup.object({
        name: yup.string().required('Обязательное поле'),
        email: yup.string().required("Обязательное поле").email('Неправильная почта'),
        phone: yup.string().required("Обязательное поле").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Неправильный номер телефона"),
    })

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        shouldFocusError: false,
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data) => {
        console.log(data)
        setConfirm(true)
        reset()
    };

    useEffect(() => {
        modal && setConfirm(false)
    }, [modal])

    return <div className={classNames(styles.modal, { [`${styles.modal_active}`]: modal })} onClick={() => setModal(false)}>
        <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
            {!confirm
                ? <div className={styles.form}>
                    <button className={styles.close} onClick={() => setModal(false)}></button>
                    <h3 className={styles.title}>Request a call back</h3>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>

                        <ValidationInput
                            id="name"
                            type="text"
                            placeholder="Имя"
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
                            placeholder="Телефон"
                            register={{ ...register('phone') }}
                            errorMessage={errors.phone?.message}
                        />

                        <Button type="submit" style={{ width: '100%' }}>Request a call</Button>
                    </form>
                </div>
                : <div className={styles.confirm}>
                    <h3 className={styles.title}>Great! We will call you back soon.</h3>
                    <ButtonTransparent style={{ margin: '0px auto' }} onClick={() => setModal(false)}>Close</ButtonTransparent>
                </div>}
        </div>
    </div>
}

export default Modal