import React from 'react'
import Header from '../ui/header'
import Slider from '../ui/slider'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../ui/card';

interface ActivitiesProps {
    isMobile?: boolean
}

const Activities = ({ isMobile }: ActivitiesProps) => {
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
            <div className={"flex flex-col sm:mx-14 gap-8 md:gap-16 my-20 overflow-visible"}>
                <Header isMobile={isMobile} text={"Активности фестиваля"} color='green' />
            </div>
            <Swiper
                spaceBetween={48}
                slidesPerView={'auto'}
                style={{ overflow: "visible", paddingLeft: isMobile ? "50px" : "140px" }}
            >
                {activities.map((activity, index) => (
                    <SwiperSlide key={index} style={{ width: isMobile ? "400px" : "1100px" }}>
                        <Card isMobile={isMobile} title={activity.title} desc={activity.desc} img={activity.img} date={activity.date} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className={
                "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[700px] absolute bottom-[-45%] left-0 -z-10"
            } /> */}
        </div>
    )
}

export default Activities