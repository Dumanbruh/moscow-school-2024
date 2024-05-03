"use client"

import React from 'react'
import Card from '../ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface ActivitiesProps {
    isMobile?: boolean
}

const Activities = ({ isMobile }: ActivitiesProps) => {
    const activities = [
        {
            "title": "Всей семьей на старт",
            "desc": `Семейный фестиваль «Всей семьей на старт» прошел в несколько этапов, в отборочном туре приняли участие более 5 000 пап, мам и ребят. В финальном туре среди 34 сильнейших семейных команд города Москвы определится самая спортивная семья нашей столицы.
            Участникам предстоит соревноваться в спортивных эстафетах, проявляя ловкость, меткость, скорость и силу.`,
            "img": "/images/desktop/activities/1.jfif",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Путь ниндзя",
            "desc": "Если ты готов бросить вызов самому себе и испытать свои силы, то приглашаем тебя и твою команду пройти свой Путь ниндзя на нашем фестивале. Трасса с разнообразными препятствиями, незабываемые впечатления, масса положительных эмоций и настоящая командная работа — вот что ждет каждого участника нашей интерактивной зоны.",
            "img": "/images/desktop/activities/2.jfif",
            "date": "1 ИЮНЯ",
            "url": "https://mcvp.ru/city_events/festival-shkolnogo-sporta-put-nindzya"
        },
        {
            "title": "Игры ГТО",
            "desc": `Все мы знаем, что такое комплекс ГТО, но же такое Игры ГТО? Рассказываем! Игры ГТО — это новый зрелищный вид спорта на базе нормативов ГТО. На отдельных дорожках для каждого участника установлены спортивные снаряды, которые необходимо пройти всей команде. Тут и упражнения на скорость, силу, гибкость и даже киберспорт.
            
            К участию приглашаются:
            семейные команды в составе 3-х человек
            (2 родителя и 1 ребенок)`,
            "img": "/images/desktop/activities/3.jfif",
            "date": "1 ИЮНЯ",
            "url": "https://mcvp.ru/city_events/festival-shkolnogo-sporta-igry-gto"
        },
        {
            "title": `Любительский турнир
            по тэг-регби`,
            "desc": "Самые преданные болельщики — это родители спортсменов. Мы приглашаем пап и мам юных участников Ozon школьной лиги сыграть в тэг-регби с профессиональными спортсмена Регби-клуба ЦСКА. Любительский турнир среди родителей пройдет во второй половине дня.",
            "img": "/images/desktop/activities/4.jfif",
            "date": "1 ИЮНЯ"
        }
    ];

    return (
        <div className={"relative mb-14 pt-16"}>
            <Swiper
                spaceBetween={48}
                slidesPerView={'auto'}
                modules={[Navigation]}
                navigation={{
                    nextEl: `.next-btn`,
                    prevEl: `.prev-btn`,
                }}
                style={{ overflow: "visible", paddingLeft: isMobile ? "50px" : "140px" }}
            >
                {activities.map((activity, index) => (
                    <SwiperSlide key={index} style={{ width: isMobile ? "400px" : "1100px" }}>
                        <Card isMobile={isMobile} title={activity.title} url={activity.url} desc={activity.desc} img={activity.img} date={activity.date} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`next-btn absolute z-10 right-[10%]`}
                style={{
                    display: isMobile ? "none" : "block",
                    top: "50%",
                    transform: "translateY(-50%)"
                }}>
                <img src={"/images/desktop/slider/right-arrow.png"} />
            </div>
            <div className={`prev-btn absolute z-10 left-[10%]`}
                style={{
                    display: isMobile ? "none" : "block",
                    top: "50%",
                    transform: "translateY(-50%)"
                }}>
                <img src={"/images/desktop/slider/left-arrow.png"} />
            </div>
        </div>
    )
}

export default Activities