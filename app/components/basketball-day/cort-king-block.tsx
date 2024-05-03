import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'
import { handleOpenNewTab } from '@/app/common/openNewTab'

const CortKing = () => {
    const images = [
        "/images/desktop/football-day/match/1.png",
        "/images/desktop/football-day/match/2.png",
        "/images/desktop/football-day/match/3.png",
    ]

    return (
        <div className={"relative pt-20 pb-24 bg-[#69C5D7] md:px-40"}>
            <div className={"flex flex-col justify-center items-center gap-16"}>
                <Header color='pink' text={`«Царь корта» - баскетбол 1х1`} />
                <p className={"font-medium text-blue text-2xl whitespace-pre-line"}>
                    {`Каждый баскетболист уникален. И его особенностью является умение играть один на один. 

                    Дриблинг, бросок, умение играть в защите, хитрость, а самое главное холодная голова – всё это поможет стать лучшим на баскетбольной площадке.

                    По шесть представителей юношей и девушек определят кто из них самым самый.`}
                </p>
                <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={"description"} />
                    ))}
                </div>
                <Button title={"РЕГИСТРАЦИЯ"} onClick={() => { handleOpenNewTab("https://mcvp.ru/city_events/festival-shkolnogo-sporta-basketbolnyj-turnir-1h1-czar-korta") }} />
            </div>
            <div className={
                "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[600px] absolute bottom-0 left-0 -z-10"
            } />
        </div>
    )
}

export default CortKing