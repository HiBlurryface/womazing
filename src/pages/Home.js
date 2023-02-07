import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper";

import Button from "../components/UI/button/Button";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";

import introImg from './../assets/images/intro-img-1.jpg'
import introPhotoTop from './../assets/images/intro-img-4.jpg'
import introPhotoBottom from './../assets/images/intro-img-5.jpg'
import product from './../assets/images/product.jpg'
import quality1 from './../assets/images/quality-img-1.svg'
import quality2 from './../assets/images/quality-img-2.svg'
import quality3 from './../assets/images/quality-img-3.svg'
import about1 from './../assets/images/about-img-1.jpg'
import about2 from './../assets/images/about-img-2.jpg'
import about3 from './../assets/images/about-img-3.jpg'

import 'swiper/css';
import './../assets/styles/swiper.scss'
import styles from './../assets/styles/Home.module.scss'
import classNames from "classnames";

function Home() {
    SwiperCore.use([Pagination]);

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
                                <h1 className={styles.intro__text_title}>Новые поступления в этом сезоне</h1>
                                <p className={styles.intro__text_subtitle}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2 className={styles.intro__text_title}>Что-то новенькое. Мы заждались тебя.</h2>
                                <p className={styles.intro__text_subtitle}>Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2 className={styles.intro__text_title}>Включай новый сезон с WOMAZING</h2>
                                <p className={styles.intro__text_subtitle}>Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
                            </SwiperSlide>
                            <div className='intro__slider_pagination'></div>
                        </Swiper>
                        <div className={styles.intro__text_group}>
                            <Button>Открыть магазин</Button>
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
                <h2 className={styles.products__title}>Новая коллекция</h2>
                <div className={styles.products__content}>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                    <div className={styles.products__item}>
                        <div className={styles.products__item_img}>
                            <div className={styles.products__item_bg}>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className={styles.products__item_pic} />
                        </div>
                        <div className={styles.products__item_descr}>
                            <h4 className={styles.products__item_title}>Футболка</h4>
                            <p className={styles.products__item_price}>$129</p>
                        </div>
                    </div>
                </div>
                <ButtonTransparent>Открыть магазин</ButtonTransparent>
            </div>
        </section>
        <section className={styles.quality}>
            <div className={styles.container}>
                <h2 className={styles.quality__title}>Что для нас важно</h2>
                <div className={styles.quality__content}>
                    <div className={styles.quality__block}>
                        <img src={quality1} alt="" className={styles.quality__block_img} />
                        <h3 className={styles.quality__block_title}>Качество</h3>
                        <p className={styles.quality__block_info}>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                    </div>
                    <div className={styles.quality__block}>
                        <img src={quality2} alt="" className={styles.quality__block_img} />
                        <h3 className={styles.quality__block_title}>Скорость</h3>
                        <p className={styles.quality__block_info}>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                    </div>
                    <div className={styles.quality__block}>
                        <img src={quality3} alt="" className={styles.quality__block_img} />
                        <h3 className={styles.quality__block_title}>Ответственность</h3>
                        <p className={styles.quality__block_info}>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.about__title}>Команда мечты Womazing</h2>
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
                        <h3 className={styles.about__info_title}>Для каждой</h3>
                        <p className={styles.about__info_text}>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                        <p className={styles.about__info_text}>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                        <a href="" className={styles.about__info_link}>Подробнее о бренде</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home