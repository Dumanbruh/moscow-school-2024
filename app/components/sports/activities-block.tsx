import React from 'react'
import Slider from '../ui/slider';
import { SwiperSlide } from 'swiper/react';
import Card from '../ui/card';

const Activities = () => {
    const activities = [
        {
            "title": "Аэробика - фест",
            "desc": `Тебя ждёт широкий выбор направлений аэробики, включая степ-аэробику, хип-хоп, ритмическую гимнастику, фитбол аэробику и многое другое! Лучшие московские команды по аэробике сразятся за звание чемпионов, и каждый участник сможет почувствовать себя победителем!
            А также не упусти возможность принять участие в мастер-классе от знаменитой Евы Уваровой, участницы шоу “Танцы” на ТНТ`,
            "img": "/images/desktop/sports/1.png",
            "date": "1 ИЮНЯ",
            "url": "https://patriotsport.moscow/festival-shkolnogo-sporta/"
        },
        {
            "title": "Шахматы",
            "desc": `Чемпион против будущих гроссмейстеров. 
            Приглашаем всех любителей шахмат принять участие в незабываемом мероприятии! 
            Известный российский гроссмейстер, проведёт сеанс одновременной игры с победителями и призерами школьных соревнований. Любой желающий сможет понаблюдать за процессом игры, поболеть за своих фаворитов, а также ответить на вопрос - одолеет ли кто-то великого шахматиста?`,
            "img": "/images/desktop/sports/2.png",
            "date": "1 ИЮНЯ",
            "url": "https://patriotsport.moscow/festival-shkolnogo-sporta/"
        },
        {
            "title": "Лазертаг",
            "desc": `Лазертаг - новый и высокотехнологичный Российский вид спорта. 
            В игре могут принимать участие мальчишки и девчонки в возрасте от 6 лет. В рамках фестивали возможно сформировать команду компанией друзей или коллег. 
            В течение всего дня на площадке пройдут увлекательные состязания по лазерному бою состав команды 7 человек.`,
            "img": "/images/desktop/sports/3.png",
            "date": "1 ИЮНЯ",
            "url": "https://patriotsport.moscow/festival-shkolnogo-sporta/"
        },
        {
            "title": "Путь ниндзя",
            "desc": `Таков мой путь ниндзя! 
            Если ты готов бросить вызов самому себе и испытать свои силы, то приглашаем тебя и твою команду пройти свой Путь ниндзя на нашем фестивале. 
            Трасса с разнообразными препятствиями, незабываемые впечатления, масса положительных эмоций и настоящая командная работа - вот что ждет каждого участника нашей интерактивной зоны. 
            Будь готов к испытаниям и ярким эмоциям - до встречи!`,
            "img": "/images/desktop/sports/4.png",
            "date": "1 ИЮНЯ",
            "url": "https://patriotsport.moscow/festival-shkolnogo-sporta/"
        },
        {
            "title": "Ozon школьная лига по тэг-регби",
            "desc": `78 команд московских школьников в течение учебного года принимали участие в Ozon школьной лиге по тэг-регби, более 1000 начинающих спортсменов сыграли групповые турниры в несколько этапов. На фестивале сильнейшие команды Ozon школьной лиги разыграют Золотые, Серебряные и Бронзовые кубки в 3-х возрастных категориях, а команды-финалисты поборются за путевки на Всероссийские соревнования “Регбийная школьная лига”. 
            Матчи начинающих спортсменов прокомментирует лучший регбист России, ведущий на каналах «Матч ТВ» и СТС Василий Артемьев`,
            "img": "/images/desktop/sports/5.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Регбийные станции",
            "desc": `Целый день на площадке будут работать спортивные станции, приглашаем всех участников и гостей фестиваля поближе познакомиться с «регби» и попробовать свои навыки в прохождении препятствий.`,
            "img": "/images/desktop/sports/6.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Битва школьников против студентов по волейболу",
            "desc": `Впервые в Москве пройдет матч по волейболу, который покажет кто же сильнее школьники или студенты колледжей. Лучшие команды школьных спортивных клубов сразятся против лучших команд студенческих спортивных клубов за звание сильнейших в Москве. 
            Приглашаем тебя на захватывающий матч поддержать свои команды! Присоединяйтесь к красочному спортивному событию!`,
            "img": "/images/desktop/sports/7.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Турнир по волейболу",
            "desc": `Приглашаем всех на поединок между молодыми талантами волейбола! 
            Сборные команды Москвы смогут попробовать свои навыки в новом формате игры в волейбол, ведь участникам предстоит сразиться на площадке в составе 4-х человек. Участники: девушки и юноши в возрасте 13 — 15 лет. 
            Приходите на игры поддержать свои команды!`,
            "img": "/images/desktop/sports/8.png",
            "date": "1 ИЮНЯ",
            "url": "https://patriotsport.moscow/festival-shkolnogo-sporta/"
        },
        {
            "title": "Товарищеский турнир по волейболу",
            "desc": `Настоящий накал страстей — иначе не скажешь! Здесь сойдутся команды не только школьников, но и их родителей, педагогов, а также 
            представителей Московской федерации волейбола, чтобы определить, кто же из них станет самым лучшим! Ощути дух настоящей командной борьбы, поддержи спортсменов и насладись незабываемой атмосферой фестиваля!
            Регистрация не нужна.`,
            "img": "/images/desktop/sports/9.png",
            "date": "1 ИЮНЯ"
        }
    ];

    return (
        <div className={"relative"}>
            <div className={"flex flex-col gap-16 mt-20 mb-40 overflow-visible"}>
                <Slider id="activities" isLoading={false}>
                    {activities.map((activity, index) => (
                        <SwiperSlide key={index}>
                            <Card title={activity.title} desc={activity.desc} img={activity.img} date={activity.date} url={activity.url} />
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Activities