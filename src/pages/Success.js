import React from "react";
import { useSelector } from 'react-redux';
import { Navigate,useNavigate } from "react-router";

import Preview from "../components/ordinary/preview/Preview";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";

import success from './../assets/images/success.svg';
import styles from './../assets/styles/Success.module.scss'
function Success() {
    const checkout = useSelector(state => state.checkout);
    const navigate = useNavigate()

    return checkout === null
        ? <Navigate to="/womazing/*" />
        : <>
            <Preview title="Order received" />
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <img src={success} alt="" className={styles.block__icon} />
                        <div className={styles.block__text}>
                            <h2 className={styles.block__text_title}>Order successfully completed</h2>
                            <p className={styles.block__text_info}>We will contact you shortly!</p>
                        </div>
                        <ButtonTransparent onClick={() => navigate('/womazing/')}>To Home</ButtonTransparent>
                    </div>
                </div>
            </section>
        </>
}

export default Success;