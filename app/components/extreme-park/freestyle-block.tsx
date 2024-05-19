import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../ui/card';
import Header from '../ui/header';
import { Navigation } from 'swiper/modules';

interface FreeStyleProps {
    isMobile?: boolean
}

const FreeStyle = ({ isMobile }: FreeStyleProps) => {
    const activities = [
        {
            "title": "Павел Алехин",
            "desc": `Профессиональный MTB райдер

            Основатель проекта «FreestyleShow», чемпион России, призер многих международных соревнований. Первым в мире приземлил более 10 трюков.
            Павел принял участие и продолжает выступать во всех топовых мировых шоу — Nitro Circus, Masters of Dirt, Night of the Jumps, Night of Freestyle, Finist Air Show и других.`,
            "img": "/images/desktop/extreme/freestyle/1.png",
            "imgMobile": "/images/mobile/extreme/freestyle/1.png",
            "date": "1 ИЮНЯ",
            "masterClassUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
            "lectoryUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
        },
        {
            "title": "Никита Фоминов",
            "desc": `ВМХ

            Победитель Спартакиады Сильнейших 2022 года, Серебряный призер Чемпионата России 2022 года, Серебряный призер Чемпионата России (Рампа) 2023 года, Победитель 1 этапа Кубка России (Казань) 2024 года, Победитель 2 этапа Кубка России (Москва) 2024 года`,
            "img": "/images/desktop/extreme/freestyle/2.png",
            "imgMobile": "/images/mobile/extreme/freestyle/2.png",
            "date": "1 ИЮНЯ",
            "masterClassUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
        },
        {
            "title": "Иван Соловьев",
            "desc": `Трюковой самокат 

            В 2015 году его признали открытием года в мире российского кикскутеринг. Лучший парк райдер 2015 года. Занял второе место на " WINTER SCOOTER GAMES"
            Третье место на Чемпионате России по экстремальному самокату в 2016 году.
            Первое место на соревнованиях «MOSCOW CITY GAMES» в 2016 году.
            Участник экстремального шоу Прорыв с 2016 по 2018 года.`,
            "img": "/images/desktop/extreme/freestyle/3.png",
            "imgMobile": "/images/mobile/extreme/freestyle/3.png",
            "date": "1 ИЮНЯ",
            "masterClassUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
        },
        {
            "title": "Егор Кальдиков",
            "desc": `Самый обсуждаемый Российский Скейтбордист. 

            Чемпион России и этапов Кубка Мира.
            Постоянный участник международных и российских соревнований. Многократный победитель и призер международных соревнований по скейтбордингу.
            Входит в состав сборной России по скейтбордингу.`,
            "img": "/images/desktop/extreme/freestyle/4.png",
            "imgMobile": "/images/mobile/extreme/freestyle/4.png",
            "date": "1 ИЮНЯ",
            "masterClassUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
            "lectoryUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
        },
        {
            "title": "Ирек Ризаев",
            "desc": `Профессиональный BMX-райдер 

            Постоянный участник международных и российских соревнований, многократный победитель и призер состязаний по BMX-фристайлу. Входит в состав сборной России по BMX-фристайлу. 7ми кратный Чемпион России по BMX-фристайлу 2016, 2017, 2019, 2020, 2021, 2022 и 2023 годах. Участник первой Олимпиады по ВМХ фристайлу — Токио 2020, 6е место. В финале чемпионата Европы по BMX-фристайлу в Москве в 2021 году Ирек завоевал серебряную медаль. `,
            "img": "/images/desktop/extreme/freestyle/5.png",
            "imgMobile": "/images/mobile/extreme/freestyle/5.png",
            "date": "1 ИЮНЯ",
            "lectoryUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
        },
        {
            "title": "Дмитрий Фазолов",
            "desc": `Трюковый самокат 

            Уже несколько лет является постоянным участником международных и российских соревнований по экстремальному самокату. Двукратный Чемпион России по трюковому самокату 2018 и 2021 годов. Третье место на Чемпионате по трюковому самокату в Хельсинки в 2019 г. Первое место на соревнования по экстремальному самокату Moscow Scooter Games 2019 в Москве.`,
            "img": "/images/desktop/extreme/freestyle/6.png",
            "imgMobile": "/images/mobile/extreme/freestyle/6.png",
            "date": "1 ИЮНЯ",
            "lectoryUrl": "https://mcvp.ru/city_events/gorodskie-proekty/festival-shkolnogo-sporta-igry-gto",
        },
    ];

    return (
        <div className={"relative"}>
            <div className={"flex flex-col gap-8 md:gap-16 my-20 overflow-visible"}>
                <Header isMobile={isMobile} text={"FREESTYLE SHOW"} color='green' />

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
                                <Card
                                    isMobile={isMobile}
                                    title={activity.title}
                                    desc={activity.desc}
                                    img={isMobile && activity.imgMobile ? activity.imgMobile : activity.img}
                                    date={activity.date}
                                    masterClassUrl={activity.masterClassUrl}
                                    lectoryUrl={activity.lectoryUrl}
                                />
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
            <div className={
                "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[700px] absolute bottom-[-45%] left-0 -z-10"
            } />
        </div>
    )
}

export default FreeStyle