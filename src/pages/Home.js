import React from "react";

// import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

function Home() {
    return <>
        <div className="intro">
            <div className="intro__container container">
                <div className="intro__content">
                    <div className="intro__text">
                        <div className="intro__slider">
                            <div className="intro__slider-container">
                                <Swiper className="intro__slider-wrapper"
                                    modules={[Pagination]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                >
                                    <SwiperSlide>
                                        <h1 className="intro__text-title title-H1">Новые поступления в этом сезоне</h1>
                                        <p className="intro__text-subtitle large-text">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h1 className="intro__text-title title-H1">Что-то новенькое. Мы заждались тебя.</h1>
                                        <p className="intro__text-subtitle large-text">Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h1 className="intro__text-title title-H1">Включай новый сезон с WOMAZING</h1>
                                        <p className="intro__text-subtitle large-text">Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="intro__text-group">
                            <Button>Открыть магазин</Button>
                        </div>
                    </div>
                    <div className="intro__img">
                        <div className="intro__img-slider swiper">
                            <div className="intro__img-wrapper swiper-wrapper">
                                <div className="intro__img-slide swiper-slide">
                                    <img src={introImg} className="intro__img-pic" />
                                </div>
                            </div>
                        </div>
                        <img src={introPhotoTop} className="intro__img-photo photo-top" />
                        <img src={introPhotoBottom} className="intro__img-photo photo-bottom" />
                    </div>
                </div>
            </div>
        </div>
        <section className="products">
            <div className="products__container container">
                <h2 className="products__title title-H2">Новая коллекция</h2>
                <div className="products__content">
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__item-img">
                            <div className="products__item-bg">
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#FFF" />
                                </svg>
                            </div>
                            <img src={product} alt="" className="products__item-pic" />
                        </div>
                        <div className="products__item-descr">
                            <h4 className="products__item-title title-H4">Футболка</h4>
                            <p className="products__item-price">$129</p>
                        </div>
                    </div>
                </div>
                <ButtonTransparent>Открыть магазин</ButtonTransparent>
            </div>
        </section>
        <section className="quality">
            <div className="quality__container container">
                <h2 className="quality__title title-H2">Что для нас важно</h2>
                <div className="quality__content">
                    <div className="quality__block">
                        <img src={quality1} alt="" className="quality__block-img" />
                        <h3 className="quality__block-title title-H3">Качество</h3>
                        <p className="quality__block-info default-text">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                    </div>
                    <div className="quality__block">
                        <img src={quality2} alt="" className="quality__block-img" />
                        <h3 className="quality__block-title title-H3">Скорость</h3>
                        <p className="quality__block-info default-text">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                    </div>
                    <div className="quality__block">
                        <img src={quality3} alt="" className="quality__block-img" />
                        <h3 className="quality__block-title title-H3">Ответственность</h3>
                        <p className="quality__block-info default-text">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="about__container container">
                <h2 className="about__title title-H2">Команда мечты Womazing</h2>
                <div className="about__content">
                    <div className="about__slider">
                        <div className="about__slider-container">
                            <Swiper className="about__slider-wrapper"
                                modules={[Navigation, Pagination]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                            >
                                <SwiperSlide>
                                    <img src={about1} alt="" className="about__slider-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={about2} alt="" className="about__slider-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={about3} alt="" className="about__slider-img" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="about__info">
                        <h3 className="about__info-title title-H3">Для каждой</h3>
                        <p className="about__info-text default-text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                        <p className="about__info-text default-text">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                        <a href="" className="about__info-link default-link">Подробнее о бренде</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home