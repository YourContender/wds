import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/slider.scss';
import { dataSlider } from '../data/data';

export const Slider = () => {
    return (
        <div className="slider-wrapper" style={{ position: 'relative' }}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={30}
                className="custom-swiper"
            >   
                {dataSlider.map((item, idx) => (
                    <SwiperSlide key={idx} className="custom-slide">
                    <div className="card-swiper">
                        <div className="logo">{item.logo}</div>
                        <div className="tags">
                            {item.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                        <img className="card-image" src={item.img} alt="" />
                        <h2>{item.title}</h2>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
}
