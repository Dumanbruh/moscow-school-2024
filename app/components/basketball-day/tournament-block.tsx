import React from 'react'
import Header from '../ui/header'

const Tournament = () => {
    const images = [
        "/images/desktop/football-day/showball/1.png",
        "/images/desktop/football-day/showball/2.png",
    ]

    return (
        <div className={"relative"}>
            <div className={"flex flex-col gap-16 mt-16 pb-24 md:px-40"}>
                <Header text={"турнир по баскетболу 3х3"} />
                <p className={"font-medium text-blue text-2xl whitespace-pre-line"}>
                    {`В спортивном сердце Столицы состоится турнир по баскетболу 3×3 среди школьников 15 — 16 лет.

                    Баскетбол 3×3 — считается более динамичной и быстрой игрой, в которой требуется постоянный контроль за ситуацией в условиях ограниченного времени. Команды школьных спортивных клубов сыграют в формате «групповой этап + плей-офф» и определят сильнейших.`}
                </p>
                <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={"description"} />
                    ))}
                </div>
            </div>
            {/* <div className={
                "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[600px] absolute bottom-0 left-0 -z-10"
            } /> */}
        </div>
    )
}

export default Tournament