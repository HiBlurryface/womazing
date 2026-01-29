import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useNavigate, NavLink } from 'react-router-dom';
import classNames from "classnames";

// import goods from '../store/Goods';

import ProductsItem from "../components/ordinary/productsItem/ProductsItem";
import Button from "../components/UI/button/Button";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";

import introImg from './../assets/images/intro-img-1.jpg'
import introPhotoTop from './../assets/images/intro-img-4.jpg'
import introPhotoBottom from './../assets/images/intro-img-5.jpg'
import quality1 from './../assets/images/quality-img-1.svg'
import quality2 from './../assets/images/quality-img-2.svg'
import quality3 from './../assets/images/quality-img-3.svg'
import about1 from './../assets/images/about-img-1.jpg'
import about2 from './../assets/images/about-img-2.jpg'
import about3 from './../assets/images/about-img-3.jpg'

import 'swiper/css';
import './../assets/styles/swiper.scss'
import styles from './../assets/styles/Home.module.scss'

function Home({ goods }) {
    SwiperCore.use([Pagination]);
    const navigate = useNavigate()

    return <>
        <div className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.intro__content}>
                    <div className={styles.intro__text}>
                        <Swiper className={styles.intro__slider}
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                el: '.intro__slider_pagination',
                                clickable: true,
                            }}
                        >
                            <SwiperSlide>
                                <h1 className={styles.intro__text_title}>New arrivals this season</h1>
                                <p className={styles.intro__text_subtitle}>Refined combinations and velvet shades - that's what you've been looking for this season. Time to explore.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2 className={styles.intro__text_title}>Something new. We've been waiting for you.</h2>
                                <p className={styles.intro__text_subtitle}>Tired of looking for yourself in a gray city? It's time for new ideas, fresh colors and inspiration with Womazing!</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2 className={styles.intro__text_title}>Turn on the new season with WOMAZING</h2>
                                <p className={styles.intro__text_subtitle}>We have updated the assortment - legendary collections and novelties from domestic designers</p>
                            </SwiperSlide>
                            <div className='intro__slider_pagination'></div>
                        </Swiper>
                        <div className={styles.intro__text_group}>
                            <Button onClick={() => navigate('/womazing/catalog')}>Open shop</Button>
                        </div>
                    </div>
                    <div className={styles.intro__img}>
                        <div className={styles.intro__img_slider}>
                            <div className={styles.intro__img_wrapper}>
                                <div className={styles.intro__img_slider}>
                                    <img src={introImg} className={styles.intro__img_pic} />
                                </div>
                            </div>
                        </div>
                        <img src={introPhotoTop} className={classNames(styles.intro__img_photo, styles.intro__img_photo_top)} />
                        <img src={introPhotoBottom} className={classNames(styles.intro__img_photo, styles.intro__img_photo_bottom)} />
                    </div>
                </div>
            </div>
        </div>
        <section className={styles.products}>
            <div className={styles.container}>
                <h2 className={styles.products__title}>New goods</h2>
                <div className={styles.products__content}>
                    {goods.map((product, index) => {
                        if (index > goods.length - 4) { return <ProductsItem data={product} key={product.id} /> }
                    })}
                </div>
                <ButtonTransparent onClick={() => navigate('/womazing/catalog')}>Open shop</ButtonTransparent>
            </div>
        </section>
        <section className={styles.quality}>
            <div className={styles.container}>
                <h2 className={styles.quality__title}>What is important to us</h2>
                <div className={styles.quality__content}>
                    <div className={styles.quality__block}>
                        <img src={quality1} alt="" className={styles.quality__block_img} />
                        <h3 className={styles.quality__block_title}>Quality</h3>
                        <p className={styles.quality__block_info}>Our professionals work on the best equipment for tailoring clothes of unparalleled quality.</p>
                    </div>
                    <div className={styles.quality__block}>
                        <img src={quality2} alt="" className={styles.quality__block_img} />
                        <h3 className={styles.quality__block_title}>Velocity</h3>
                        <p className={styles.quality__block_info}>Thanks to the well-established system at Womazing, we can sew up to 20 pieces of products in our own workshops</p>
                    </div>
                    <div className={styles.quality__block}>
                        <img src={quality3} alt="" className={styles.quality__block_img} />
                        <h3 className={styles.quality__block_title}>Responsibility</h3>
                        <p className={styles.quality__block_info}>We care about people and the planet. Waste-free production and comfortable working conditions - all this is Womazing</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.about__title}>Dream Team Womazing</h2>
                <div className={styles.about__content}>
                    <div className={styles.about__slider}>
                        <div className={styles.about__slider_container}>
                            <Swiper className={styles.about__slider_wrapper}
                                modules={[Navigation]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                loop={true}
                                pagination={{
                                    el: '.about__slider_pagination',
                                    clickable: true,
                                }}
                            >
                                <SwiperSlide>
                                    <img src={about1} alt="" className={styles.about__slider_img} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={about2} alt="" className={styles.about__slider_img} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={about3} alt="" className={styles.about__slider_img} />
                                </SwiperSlide>
                                <div className='about__slider_pagination'></div>
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.about__info}>
                        <h3 className={styles.about__info_title}>For everyone</h3>
                        <p className={styles.about__info_text}>Every girl is unique. However, we are similar in a million little things.</p>
                        <p className={styles.about__info_text}>Womazing looks for these little things and creates beautiful things that emphasize the advantages of every girl.</p>
                        <NavLink to="/womazing/about-us" className={styles.about__info_link}>More about the brand</NavLink>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home