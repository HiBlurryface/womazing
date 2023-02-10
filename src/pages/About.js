import React from "react";

import Preview from '../components/ordinary/preview/Preview'
import Button from "../components/UI/button/Button";

import about1 from './../assets/images/about1.jpg'
import about2 from './../assets/images/about2.jpg'
import styles from './../assets/styles/About.module.scss'
function About() {
    return <>
        <Preview title="О Бренде"/>
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.about__content}>
                    <div className={styles.about__block}>
                        <div className={styles.about__block_img}>
                            <img src={about1} alt="" className={styles.about__block_pic} />
                        </div>
                        <div className={styles.about__block_text}>
                            <h2 className={styles.about__block_title}>Идея и женщина</h2>
                            <p className={styles.about__block_info}>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
                            <p className={styles.about__block_info}>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                        </div>
                    </div>
                    <div className={styles.about__block}>
                        <div className={styles.about__block_img}>
                            <img src={about2} alt="" className={styles.about__block_pic} />
                        </div>
                        <div className={styles.about__block_text}>
                            <h2 className={styles.about__block_title}>Магия в деталях</h2>
                            <p className={styles.about__block_info}>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
                            <p className={styles.about__block_info}>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.</p>
                        </div>
                    </div>
                    <Button style={{ margin: '0px auto' }}>Перейти в магазин</Button>
                </div>
            </div>
        </section>
    </>
}

export default About