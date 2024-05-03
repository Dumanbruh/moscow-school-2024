import React from 'react'
import Header from '../ui/header'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../ui/card';
import { Navigation } from 'swiper/modules';

interface ActivitiesProps {
    isMobile?: boolean
}

const Activities = ({ isMobile }: ActivitiesProps) => {
    const activities = [
        {
            "title": "Настольный теннис",
            "desc": "Готовы ли вы погрузиться в мир быстрой и захватывающей игры? Приглашаем вас на нашу площадку настольного тенниса! Приготовьтесь к волнующим матчам, захватывающим рывкам и невероятным моментам соперничества. ",
            "img": "/images/desktop/home/activities/tennis.png",
            "imgMobile": "/images/mobile/home/activities/tennis.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Аэрохоккей",
            "desc": "Внимание, любители азартных сражений и скоростных эмоций! Готовьтесь к захватывающим поединкам на нашей аэрохоккейной площадке!",
            "img": "/images/desktop/home/activities/hockey.png",
            "imgMobile": "/images/mobile/home/activities/hockey.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Панна-футбол",
            "desc": "Это арена для настоящих футбольных героев! Здесь каждый шаг, каждый финт наполнены энергией и страстью к игре. Присоединяйтесь к нам, чтобы почувствовать дыхание уличного футбольного азарта!",
            "img": "/images/desktop/home/activities/football.png",
            "imgMobile": "/images/mobile/home/activities/football.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Джампинг",
            "desc": "Ощутите адреналин и свободу полета вместе с нашей командой профессионалов, готовых сделать ваш опыт неповторимым. Приходите и совершайте прыжки, о которых вы мечтали!",
            "img": "/images/desktop/home/activities/jumping.png",
            "imgMobile": "/images/mobile/home/activities/jumping.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Гольф",
            "desc": "Присоединяйтесь к нам на площадке по snag-гольфу — увлекательной версии гольфа, идеальной для начинающих игроков!",
            "img": "/images/desktop/home/activities/golf.png",
            "imgMobile": "/images/mobile/home/activities/golf.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Настольные спортивные игры",
            "desc": "Хотите добавить разнообразия в свой досуг? Присоединяйтесь к нам на площадку настольных спортивных игр! Здесь вас ждут захватывающие соревнования и незабываемое веселье!",
            "img": "/images/desktop/home/activities/table-tennis.png",
            "imgMobile": "/images/mobile/home/activities/table-tennis.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Шашки",
            "desc": "Замечательная возможность проявить себя и помериться силами в умственной дуэли на нашем турнире по шашкам. Продумай свои лучшие ходы, выбери стратегию и покажи всем, что ты настоящий мастер шашек!",
            "img": "/images/desktop/home/activities/checkers.png",
            "imgMobile": "/images/mobile/home/activities/checkers.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Городки",
            "desc": "Давай сыграем в городки! Старинная русско-народная спортивная игра, которая переместит тебя в мир веселья и радости. Приглашаем каждого желающего испытать свои силы на поле, где ловкость играет ключевую роль.",
            "img": "/images/desktop/home/activities/city.png",
            "imgMobile": "/images/mobile/home/activities/city.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Мастерская пряников",
            "desc": "Готовы создать собственные произведения искусства из теста и глазури? Тогда присоединяйтесь к нашей мастерской, чтобы вместе познать искусство выпечки и научиться украшать её по последним трендам.",
            "img": "/images/desktop/home/activities/cookies.png",
            "imgMobile": "/images/mobile/home/activities/cookies.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Мастер-класс по рисованию",
            "desc": "Готовы раскрыть свой творческий потенциал и окунуться в мир искусства? Приглашаем вас на мастер-класс по рисованию. Вместе с опытными художниками вы научитесь тонкостям рисования, откроете новые техники и вдохновитесь для создания собственных произведений искусства.",
            "img": "/images/desktop/home/activities/painting.png",
            "imgMobile": "/images/mobile/home/activities/painting.png",
            "date": "1 ИЮНЯ"
        },
        {
            "title": "Беговелы",
            "desc": "Приглашаем самых маленьких любителей активного отдыха принять участие в захватывающих соревнованиях на беговелах! Будет весело, энергично и незабываемо. Ждем все на старте!",
            "img": "/images/desktop/home/activities/balance-bike.png",
            "imgMobile": "/images/mobile/home/activities/balance-bike.png",
            "date": "1 ИЮНЯ"
        },
    ];

    return (
        <div className={"relative"}>
            <div className={"flex flex-col gap-8 md:gap-16 my-20 overflow-visible"}>
                <Header isMobile={isMobile} text={"Активности фестиваля"} color='green' />

                <div className={"relative"}>
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
                                <Card isMobile={isMobile} title={activity.title} desc={activity.desc} img={isMobile && activity.imgMobile ? activity.imgMobile : activity.img} date={activity.date} />
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
            </div>
            {/* <div className={
                "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[700px] absolute bottom-[-45%] left-0 -z-10"
            } /> */}
        </div>
    )
}

export default Activities