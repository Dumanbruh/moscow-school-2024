import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../ui/card';
import { Navigation } from 'swiper/modules';

interface ActivitiesProps {
    isMobile?: boolean
}

const Activities = ({ isMobile }: ActivitiesProps) => {
    const activities = [
        {
            "title": "Аэробика - фест",
            "desc": `Тебя ждёт широкий выбор направлений аэробики, включая степ-аэробику, хип-хоп, ритмическую гимнастику, фитбол аэробику и многое другое! Лучшие московские команды по аэробике сразятся за звание чемпионов, и каждый участник сможет почувствовать себя победителем!
            А также не упусти возможность принять участие в мастер-классе от знаменитой Евы Уваровой, участницы шоу “Танцы” на ТНТ`,
            "img": "/images/desktop/sports/1.png",
            "date": "1 ИЮНЯ",
            "url": "https://admin.patriot-sport.ru/admin/"
        },
        {
            "title": "Шахматы",
            "desc": `Чемпион против будущих гроссмейстеров. 
            Приглашаем всех любителей шахмат принять участие в незабываемом мероприятии! 
            Известный российский гроссмейстер, проведёт сеанс одновременной игры с победителями и призерами школьных соревнований. Любой желающий сможет понаблюдать за процессом игры, поболеть за своих фаворитов, а также ответить на вопрос - одолеет ли кто-то великого шахматиста?`,
            "img": "/images/desktop/sports/2.png",
            "date": "1 ИЮНЯ",
            "url": "https://mcvp.ru/city_events/festival-shkolnogo-sporta-shahmaty"
        },
        {
            "title": "Лазертаг",
            "desc": `Лазертаг - новый и высокотехнологичный Российский вид спорта. 
            В игре могут принимать участие мальчишки и девчонки в возрасте от 6 лет. В рамках фестиваля возможно сформировать команду компанией друзей или коллег. 
            В течение всего дня на площадке пройдут увлекательные состязания по лазерному бою состав команды 7 человек.`,
            "img": "/images/desktop/sports/3.png",
            "date": "1 ИЮНЯ",
            "url": "https://mcvp.ru/city_events/festival-shkolnogo-sporta-lazertag"
        },
        {
            "title": "Путь ниндзя",
            "desc": `Таков мой путь ниндзя! 
            Если ты готов бросить вызов самому себе и испытать свои силы, то приглашаем тебя и твою команду пройти свой Путь ниндзя на нашем фестивале. 
            Трасса с разнообразными препятствиями, незабываемые впечатления, масса положительных эмоций и настоящая командная работа - вот что ждет каждого участника нашей интерактивной зоны. 
            Будь готов к испытаниям и ярким эмоциям - до встречи!`,
            "img": "/images/desktop/sports/4.png",
            "date": "1 ИЮНЯ",
            "url": "https://mcvp.ru/city_events/festival-shkolnogo-sporta-put-nindzya"
        },
        {
            "title": "Ozon школьная лига по тэг-регби",
            "desc": `Более 1000 начинающих спортсменов сыграли групповые турниры в несколько этапов в Ozon школьной лиге по тэг-регби. На фестивале сильнейшие команды поборются за путевки на Всероссийские соревнования “Регбийная школьная лига”. 
            Кроме того в течении всего дня на площадке будут работать спортивные станции, приглашаем всех желающих поближе познакомиться с «регби».`,
            "img": "/images/desktop/sports/5.png",
            "date": "1 ИЮНЯ",
            "priduUrl": "https://gorizonty.mos.ru/events/5053"
        },
        // {
        //     "title": "Регбийные станции",
        //     "desc": `Целый день на площадке будут работать спортивные станции, приглашаем всех участников и гостей фестиваля поближе познакомиться с «регби» и попробовать свои навыки в прохождении препятствий.`,
        //     "img": "/images/desktop/sports/6.png",
        //     "date": "1 ИЮНЯ"
        // },
        {
            "title": "Битва школьников против студентов по волейболу",
            "desc": `Впервые в Москве пройдет матч по волейболу, который покажет кто же сильнее школьники или студенты колледжей. Лучшие команды школьных спортивных клубов сразятся против лучших команд студенческих спортивных клубов за звание сильнейших в Москве. 
            Приглашаем тебя на захватывающий матч поддержать свои команды! Присоединяйтесь к красочному спортивному событию!`,
            "img": "/images/desktop/sports/7.png",
            "date": "1 ИЮНЯ",
            "priduUrl": "https://gorizonty.mos.ru/events/5053"
        },
        {
            "title": "Турнир по волейболу",
            "desc": `Приглашаем всех на поединок между молодыми талантами волейбола!
            Ожидается, что матчи будут напряженными и захватывающими, поскольку каждая команда будет стремиться показать свою лучшую игру и выиграть турнир. Болельщики смогут насладиться яркими спортивными поединками и поддержать свои любимые команды. 
            Участники: девушки и юноши 13-15 лет.
            Приходите на игры поддержать свои команды!`,
            "img": "/images/desktop/sports/8.png",
            "date": "1 ИЮНЯ",
            "url": "https://mcvp.ru/city_events/turnir-po-volejbolu"
        },
        {
            "title": "Товарищеский турнир по волейболу",
            "desc": `На играх Фестиваля будет жарко не только школьникам, но и их родителям! 
            Впервые на Фестивале школьного спорта пройдет захватывающий волейбольный турнир среди трех лучших сборных команд родителей и сборной командой учителей.    
            Кто окажется сильнее, узнаем!`,
            "img": "/images/desktop/sports/9.png",
            "date": "1 ИЮНЯ",
            "url": "https://mcvp.ru/city_events/festival-shkolnogo-sporta-turnir-po-volejbolu-sredi-komand-roditelej"
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
                        <Card isMobile={isMobile} title={activity.title} desc={activity.desc} img={activity.img} date={activity.date} url={activity.url} priduUrl={activity.priduUrl} />
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