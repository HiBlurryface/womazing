import React from "react";
import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import TitleH1 from "../components/simple/titleH1/TitleH1";
import LargeText from "../components/simple/largeText/LargeText";
import Button from "../components/UI/button/Button";
import ButtonTransparent from "../components/UI/buttonTransparent/ButtonTransparent";

import introImg from './../assets/images/intro-img-1.jpg'
import introPhotoTop from './../assets/images/intro-img-4.jpg'
import introPhotoBottom from './../assets/images/intro-img-5.jpg'
import product from './../assets/images/product.jpg'

function Home() {
    return <>
        <div className="intro">
            <div className="intro__container container">
                <div className="intro__content">
                    <div className="intro__text">
                        {/* <TitleH1>Новые поступления в этом сезоне</TitleH1>
                        <LargeText>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</LargeText>
                        <Button>Открыть магазин</Button> */}
                        <div className="intro__text-slider swiper">
                            <div className="intro__text-wrapper swiper-wrapper">
                                <div className="intro__text-slide swiper-slide">
                                    <h1 className="intro__text-title title-H1">Новые поступления в этом сезоне</h1>
                                    <p className="intro__text-subtitle large-text">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                                </div>
                                {/* <div className="intro__text-slide swiper-slide">
                                    <h1 className="intro__text-title title-H1">Что-то новенькое. Мы заждались тебя.</h1>
                                    <p className="intro__text-subtitle large-text">Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</p>
                                </div>
                                <div className="intro__text-slide swiper-slide">
                                    <h1 className="intro__text-title title-H1">Включай новый сезон с WOMAZING</h1>
                                    <p className="intro__text-subtitle large-text">Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
                                </div> */}
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
    </>
}

export default Home