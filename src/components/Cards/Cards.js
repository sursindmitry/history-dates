import React from 'react';
import "./Cards.scss"
import Card from "./Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const arr = [
    {
        year: 2015,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
    },
    {
        year: 2016,
        description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
    },
    {
        year: 2017,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        year: 2019,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        year: 2022,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
]

const Cards = () => {
    const swiperParams = {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: {
            nextEl: '.my-swiper-button-next', // указываем класс кнопки "следующий слайд"
            prevEl: '.my-swiper-button-prev' // указываем класс кнопки "предыдущий слайд"
        },
        pagination: {clickable: true},
        onSwiper: (swiper) => console.log(swiper),
        onSlideChange: () => console.log('slide change')
    };

    return (
        <div className="cards">
            <div className="my-swiper-button-prev">
                <button>
                    <i className="arrowLeft"></i>
                </button>
            </div>
            <Swiper{...swiperParams}
            >
                {arr.map((obj) => (
                    <SwiperSlide>
                        <Card year={obj.year} description={obj.description}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="my-swiper-button-next">
                <button>
                    <i className="arrowRight"></i>
                </button>

            </div>

        </div>
    )
}

export default Cards;