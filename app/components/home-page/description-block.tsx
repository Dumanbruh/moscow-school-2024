import React from 'react'
import Header from '../ui/header'
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface DescriptionProps {
    isMobile?: boolean;
}

const Description = ({ isMobile }: DescriptionProps) => {
    const images = [
        "/images/desktop/home/desc/desc-1.png",
        "/images/desktop/home/desc/desc-2.png",
        "/images/desktop/home/desc/desc-3.png",
    ];


    return (
        <div className={"relative overflow-hidden md:overflow-visible"}>
            <div className={"flex flex-col gap-2"}>
                <Header isMobile={isMobile} text={"Фестиваль школьного спорта"} />``
                <div className={"flex flex-col gap-8 md:gap-16 px-5 sm:px-20 md:px-40"}>
                    <p className={"md:font-medium text-blue text-xl md:text-2xl"}>
                        Приглашаем москвичей и гостей столицы на самое масштабное событием в мире школьного спорта, на котором подведут итоги спортивного сезона 2023/2024 учебного года. Пройдут встречи с легендарными спортсменами, мастер – классы от звезд, финальные матчи школьных спортивных лиг, футбольный матч с игроками медийной футбольной лиги, игры ГТО, экстрим – шоу ВМХ, турниры по видам спорта, награждение лучших спортивных клубов в системе московского образования и многое другое. Вечером всех участников мероприятия ждет концертная программа, которая будет включать в себя розыгрыши призов, выступления творческих коллективов города, а также популярных артистов: Мии Бойка, ST и Звонкого.
                    </p>
                    <div className={"hidden md:flex flex-row justify-center overflow-auto items-center gap-9"}>
                        {images.map((image, index) => (
                            <LazyLoadImage
                                effect="blur" 
                                key={index} 
                                src={image} 
                                alt={"description"}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 sm:ml-8 overflow-auto md:hidden">
                <div className="flex flex-row items-center gap-4 sm:gap-9 whitespace-nowrap">
                    {images.map((image, index) => (
                        <LazyLoadImage effect="blur" key={index} src={image} alt="description" />
                    ))}
                </div>
            </div>
            <div className={
                "bg-[url('/images/desktop/home/desc/festival-color.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[380px] md:h-[700px] absolute bottom-0 md:bottom-[-25%] right-[0%] -z-10"
            } />
        </div >
    )
}

export default Description