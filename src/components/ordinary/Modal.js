import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button";
import ButtonTransparent from "../UI/buttonTransparent/ButtonTransparent";
import Input from "../UI/Input";

function Modal({ modal, setModal }) {
    const [confirm, setConfirm] = useState(false)
    useEffect(()=>{
        modal && setConfirm(false)
    }, [modal])
    
    return <div className={`modal ${modal ? 'active' : ''}`} onClick={() => setModal(false)}>
        <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
            {!confirm
            ? <div className="modal__form">
                <button className="modal__close" onClick={() => setModal(false)}></button>
                <h3 className="modal__title title-H3">Заказать обратный звонок</h3>
                <Input type="text" id="name" placeholder="Имя"/>
                <Input type="text" id="email" placeholder="E-mail"/>
                <Input type="text" id="phone" placeholder="Телефон"/>
                <Button style={{ width: '100%' }} onClick={()=>setConfirm(true)}>Заказать звонок</Button>
            </div>
            : <div className="modal__confirm">
                <h3 className="modal__title title-H3">Отлично! Мы скоро вам перезвоним.</h3>
                <ButtonTransparent style={{ margin: '0px auto' }} onClick={() => setModal(false)}>Закрыть</ButtonTransparent>
            </div>}
        </div>
    </div>
}

export default Modal