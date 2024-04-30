"use client"

import React from 'react'
import Slider from '../ui/slider';
import Card from '../ui/card';
import { SwiperSlide } from 'swiper/react';

const Activities = () => {
    const activities = [
        {
            "title": "Всей семьей на старт",
            "desc": `Семейный фестиваль «Всей семьей на старт» прошел в несколько этапов, в отборочном туре приняли участие более 5 000 пап, мам и ребят. В финальном туре среди 34 сильнейших семейных команд города Москвы определится самая спортивная семья нашей столицы.
            Участникам предстоит соревноваться в спортивных эстафетах, проявляя ловкость, меткость, скорость и силу.`,
            "img": "/images/desktop/activities/1.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Путь ниндзя",
            "desc": "Если ты готов бросить вызов самому себе и испытать свои силы, то приглашаем тебя и твою команду пройти свой Путь ниндзя на нашем фестивале. Трасса с разнообразными препятствиями, незабываемые впечатления, масса положительных эмоций и настоящая командная работа — вот что ждет каждого участника нашей интерактивной зоны.",
            "img": "/images/desktop/activities/2.png",
            "date": "1 ИЮНЯ",
            "url": "https://patriotsport.moscow/festival-shkolnogo-sporta/"
        },
        {
            "title": "Игры ГТО",
            "desc": `Все мы знаем, что такое комплекс ГТО, но же такое Игры ГТО? Рассказываем! Игры ГТО — это новый зрелищный вид спорта на базе нормативов ГТО. На отдельных дорожках для каждого участника установлены спортивные снаряды, которые необходимо пройти всей команде. Тут и упражнения на скорость, силу, гибкость и даже киберспорт.
            
            К участию приглашаются:
            семейные команды в составе 3-х человек
            (2 родителя и 1 ребенок)`,
            "img": "/images/desktop/activities/3.png",
            "date": "1 ИЮНЯ",
            "url": "https://patriotsport.moscow/festival-shkolnogo-sporta/"
        },
        {
            "title": `Любительский турнир
            по тэг-регби`,
            "desc": "Самые преданные болельщики — это родители спортсменов. Мы приглашаем пап и мам юных участников Ozon школьной лиги сыграть в тэг-регби с профессиональными спортсмена Регби-клуба ЦСКА. Любительский турнир среди родителей пройдет во второй половине дня.",
            "img": "/images/desktop/activities/4.png",
            "date": "1 ИЮНЯ"
        }
    ];

    return (
        <div className={"relative"}>
            <div className={"flex flex-col gap-16 mt-20 mb-40 overflow-visible"}>
                <Slider id="activities" isLoading={false}>
                    {activities.map((activity, index) => (
                        <SwiperSlide key={index}>
                            <Card title={activity.title} desc={activity.desc} url={activity.url} img={activity.img} date={activity.date} />
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Activities