import React from 'react';
import "./Cards.scss"
import Card from "./Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const arr = [
    {
        id: 1,
        year: 1925,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
    },
    {
        id: 1,
        year: 1925,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
    },
    {
        id: 1,
        year: 1926,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
    },
    {
        id: 1,
        year: 1927,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
    },
    {
        id: 2,
        year: 2000,
        description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
    },
    {
        id: 2,
        year: 2001,
        description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
    },
    {
        id: 2,
        year: 2002,
        description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
    },
    {
        id: 3,
        year: 2003,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 3,
        year: 2004,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 3,
        year: 2005,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 4,
        year: 2019,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 4,
        year: 2020,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 4,
        year: 2021,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 5,
        year: 2022,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 5,
        year: 2023,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 5,
        year: 2024,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 6,
        year: 2025,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 6,
        year: 2026,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 6,
        year: 2026,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
    {
        id: 6,
        year: 2027,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    }
]

const Cards = ({currentId}) => {
    const swiperParams = {
        modules: [Navigation, Pagination, Scrollbar],
        spaceBetween: 80,
        slidesPerView: 1,
        breakpoints:{
            1285:{
                spaceBetween: 60,
                slidesPerView: 3
            },
            740:{
                spaceBetween: 300,
                slidesPerView: 3
            },
        },

        navigation: {
            nextEl: '.my-swiper-button-next', // указываем класс кнопки "следующий слайд"
            prevEl: '.my-swiper-button-prev' // указываем класс кнопки "предыдущий слайд"
        },
        pagination: {clickable: true},
    };

    const filteredArr = arr.filter((obj) => obj.id === currentId);

    return (
        <div className="cards">
            <div className="my-swiper-button-prev">
                <button>
                    <i className="arrowLeft"></i>
                </button>
            </div>
            <Swiper{...swiperParams}
            >
                {filteredArr.map((obj) => (
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