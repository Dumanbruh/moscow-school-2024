"use client"

import React from 'react'
import Header from '../ui/header'
import Slider from '../ui/slider'
import { SwiperSlide } from 'swiper/react';
import Card from '../ui/card';

const Activities = () => {
    const activities = [
        {
            "title": "Настольный теннис",
            "desc": "Готовы ли вы погрузиться в мир быстрой и захватывающей игры? Приглашаем вас на нашу площадку настольного тенниса! Приготовьтесь к волнующим матчам, захватывающим рывкам и невероятным моментам соперничества. ",
            "img": "/images/desktop/home/activities/tennis.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Настольный теннис",
            "desc": "Готовы ли вы погрузиться в мир быстрой и захватывающей игры? Приглашаем вас на нашу площадку настольного тенниса! Приготовьтесь к волнующим матчам, захватывающим рывкам и невероятным моментам соперничества. ",
            "img": "/images/desktop/home/activities/tennis.png",
            "date": "1 ИЮНЯ"
        }
    ];

    return (
        <div className={"relative"}>
            <div className={"flex flex-col gap-16 my-20 overflow-visible"}>
                <Header text={"Активности фестиваля"} color='green' />
                <Slider id="activities" isLoading={false}>
                    {activities.map((activity, index) => (
                        <SwiperSlide key={index}>
                            <Card title={activity.title} desc={activity.desc} img={activity.img} date={activity.date} />
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
            {/* <div className={
                "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[700px] absolute bottom-[-45%] left-0 -z-10"
            } /> */}
        </div>
    )
}

export default Activities