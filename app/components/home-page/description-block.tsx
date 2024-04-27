import React from 'react'
import Header from '../ui/header'
import Image from 'next/image';

const Description = () => {
    const images = [
        "/images/desktop/home/desc-1.png",
        "/images/desktop/home/desc-2.png",
        "/images/desktop/home/desc-3.png",
    ];


    return (
        <div className={"flex flex-col gap-16"}>
            <Header text={"Фестиваль школьного спорта"} />
            <p className={"font-medium text-blue text-2xl"}>
                Приглашаем москвичей и гостей столицы на самое масштабное событием в мире школьного спорта, на котором подведут итоги спортивного сезона 2023/2024 учебного года. Пройдут встречи с легендарными спортсменами, мастер – классы от звезд, финальные матчи школьных спортивных лиг, футбольный матч с игроками медийной футбольной лиги, игры ГТО, экстрим – шоу ВМХ, турниры по видам спорта, награждение лучших спортивных клубов в системе московского образования и многое другое. Вечером всех участников мероприятия ждет концертная программа, которая будет включать в себя розыгрыши призов, выступления творческих коллективов города, а также популярных артистов: Мии Бойка, ST и Звонкого.
            </p>
            <div className={"flex flex-row gap-9"}>
                {images.map((image, index) => (
                    <Image key={index} width={330} height={178} src={image} alt={"description"} />
                ))}
            </div>
        </div>
    )
}

export default Description