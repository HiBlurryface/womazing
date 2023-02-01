import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button";
import ButtonTransparent from "../UI/buttonTransparent/ButtonTransparent";

function Modal({ modal, setModal }) {
    const [confirm, setConfirm] = useState(false)

    return <div className={`modal ${modal ? 'active' : ''}`} onClick={() => setModal(false)}>
        <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
            {!confirm
            ? <div className="modal__form">
                <button className="modal__close" onClick={() => setModal(false)}></button>
                <h3 className="modal__title title-H3">Заказать обратный звонок</h3>
                <input type="text" className="modal__input default-text" placeholder="Имя" />
                <input type="text" className="modal__input default-text" placeholder="E-mail" />
                <input type="text" className="modal__input default-text" placeholder="Телефон" />
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