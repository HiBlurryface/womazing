import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Button from "../../UI/button/Button";
import ButtonTransparent from "../../UI/buttonTransparent/ButtonTransparent";
import Input from "../../UI/input/Input";

import styles from './Modal.module.scss'

function Modal({ modal, setModal }) {
    const [confirm, setConfirm] = useState(false)
    useEffect(()=>{
        modal && setConfirm(false)
    }, [modal])
    
    return <div className={classNames(styles.modal, {[`${styles.modal_active}`]: modal})} onClick={() => setModal(false)}>
        <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
            {!confirm
            ? <div className={styles.form}>
                <button className={styles.close} onClick={() => setModal(false)}></button>
                <h3 className={styles.title}>Заказать обратный звонок</h3>
                <Input type="text" id="name" placeholder="Имя"/>
                <Input type="text" id="email" placeholder="E-mail"/>
                <Input type="text" id="phone" placeholder="Телефон"/>
                <Button style={{ width: '100%' }} onClick={()=>setConfirm(true)}>Заказать звонок</Button>
            </div>
            : <div className={styles.confirm}>
                <h3 className={styles.title}>Отлично! Мы скоро вам перезвоним.</h3>
                <ButtonTransparent style={{ margin: '0px auto' }} onClick={() => setModal(false)}>Закрыть</ButtonTransparent>
            </div>}
        </div>
    </div>
}

export default Modal