import React from 'react'
import Header from '../ui/header'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface TournamentProps {
    isMobile?: boolean
}

const Tournament = ({ isMobile }: TournamentProps) => {
    const images = [
        "/images/desktop/basketball-day/tournament/1.png",
        "/images/desktop/basketball-day/tournament/2.png",
        "/images/desktop/basketball-day/tournament/3.png",
    ]

    const mobileImages = [
        "/images/mobile/basketball-day/tournament/1.png",
        "/images/mobile/basketball-day/tournament/2.png",
        "/images/mobile/basketball-day/tournament/3.png",
    ]

    return (
        <div className={"relative mt-8 md:mt-16 pb-24 sm:px-20 md:px-64"}>
            <div className={"flex flex-col gap-8 md:gap-16"}>
                <Header isMobile={isMobile} text={"турнир по баскетболу 3х3"} />
                <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
                    {`В спортивном сердце Столицы состоится турнир по баскетболу 3×3 среди школьников 15 — 16 лет.

                    Баскетбол 3×3 — считается более динамичной и быстрой игрой, в которой требуется постоянный контроль за ситуацией в условиях ограниченного времени. Команды школьных спортивных клубов сыграют в формате «групповой этап + плей-офф» и определят сильнейших.`}
                </p>
                <div className={"flex flex-row justify-center items-center gap-3 md:gap-7"}>
                    {isMobile
                        ?
                        mobileImages.map((image, index) => (
                            <LazyLoadImage effect="blur" key={index} src={image} alt={"tounament-" + index} />
                        ))
                        :
                        images.map((image, index) => (
                            <LazyLoadImage effect="blur" key={index} src={image} alt={"tounament-" + index} />
                        ))
                    }
                </div>
            </div>
            <div className={
                "bg-[url('/images/desktop/home/desc/festival-color.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[380px] md:h-[700px] absolute bottom-0 md:bottom-[-25%] right-[0%] -z-10"
            } />
        </div>
    )
}

export default Tournament