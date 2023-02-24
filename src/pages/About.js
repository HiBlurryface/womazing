import React from "react";
import { useNavigate } from "react-router";

import Preview from '../components/ordinary/preview/Preview'
import Button from "../components/UI/button/Button";

import about1 from './../assets/images/about1.jpg'
import about2 from './../assets/images/about2.jpg'
import styles from './../assets/styles/About.module.scss'
function About() {
    const navigate = useNavigate()
    return <>
        <Preview title="About us"/>
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.about__content}>
                    <div className={styles.about__block}>
                        <div className={styles.about__block_img}>
                            <img src={about1} alt="" className={styles.about__block_pic} />
                        </div>
                        <div className={styles.about__block_text}>
                            <h2 className={styles.about__block_title}>Idea and woman</h2>
                            <p className={styles.about__block_info}>Womazing was founded in 2010 and has become one of the most successful companies in our country. Like many Italian firms, Womazing remains a family company, although none of the family members are fashion designers.</p>
                            <p className={styles.about__block_info}>We follow a successful formula, using the services of well-known fashion designers to create our collections. The method has been described by fashion critic Colin McDowell as a form of design co-creation characteristic of a number of Italian prêt-a-porter companies.</p>
                        </div>
                    </div>
                    <div className={styles.about__block}>
                        <div className={styles.about__block_img}>
                            <img src={about2} alt="" className={styles.about__block_pic} />
                        </div>
                        <div className={styles.about__block_text}>
                            <h2 className={styles.about__block_title}>The magic is in the details</h2>
                            <p className={styles.about__block_info}>The first Womazing store was opened in a small town in the north of the country in 2010. The first collection consisted of two coats and a suit, which were copies of Parisian models.</p>
                            <p className={styles.about__block_info}>Despite the fact that the founder was a lawyer by training, her family has always been closely associated with sewing (the founder's great-grandmother made clothes for women, and her mother founded a professional school of tailoring). The desire to produce clothes for the masses carried great promise, especially at a time when high fashion still dominated and the market for quality prêt-a-porter simply did not exist.</p>
                        </div>
                    </div>
                    <Button onClick={()=>navigate('/catalog')} style={{ margin: '0px auto' }}>Go to store</Button>
                </div>
            </div>
        </section>
    </>
}

export default About