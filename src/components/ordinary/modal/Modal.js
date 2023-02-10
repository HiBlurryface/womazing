import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Button from "../../UI/button/Button";
import ButtonTransparent from "../../UI/buttonTransparent/ButtonTransparent";
import Input from "../../UI/input/Input";

import styles from './Modal.module.scss'

function Modal({ modal, setModal }) {
    const [confirm, setConfirm] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const [validation, setValidation] = useState({
        nameError: false,
        emailError: false,
        phoneError: false,
    })

    function sendForm() {
        setConfirm(true)
    }

    useEffect(() => {
        if (modal) {
            setData({name: '',email: '', phone: ''})
            setConfirm(false)
        }
    }, [modal])

    return <div className={classNames(styles.modal, { [`${styles.modal_active}`]: modal })} onClick={() => setModal(false)}>
        <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
            {!confirm
                ? <div className={styles.form}>
                    <button className={styles.close} onClick={() => setModal(false)}></button>
                    <h3 className={styles.title}>Заказать обратный звонок</h3>
                    <form action="">
                        <Input type="text" id="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} error={validation.nameError ? "true" : "false"} placeholder="Имя"  message="Обязательное поле" />
                        <Input type="text" id="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} error={validation.emailError? "true" : "false"} placeholder="E-mail"  message="Неправильный e-mail" />
                        <Input type="text" id="phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} error={validation.phoneError? "true" : "false"} placeholder="Телефон"  message="Неправильный номер телефона" />
                        <Button style={{ width: '100%' }} onClick={sendForm}>Заказать звонок</Button>
                    </form>
                </div>
                : <div className={styles.confirm}>
                    <h3 className={styles.title}>Отлично! Мы скоро вам перезвоним.</h3>
                    <ButtonTransparent style={{ margin: '0px auto' }} onClick={() => setModal(false)}>Закрыть</ButtonTransparent>
                </div>}
        </div>
    </div>
}

export default Modal