import React from 'react'
import Header from '../ui/header'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../ui/button';
import { handleOpenNewTab } from '@/app/common/openNewTab';

interface FootballProps {
    isMobile?: boolean
}

const Football = ({ isMobile }: FootballProps) => {
    const images = [
        "/images/desktop/football-day/football/1.png",
        "/images/desktop/football-day/football/2.png",
        "/images/desktop/football-day/football/3.png",
    ];

    const mobileImages = [
        "/images/mobile/football-day/football/1.png",
        "/images/mobile/football-day/football/2.png",
        "/images/mobile/football-day/football/3.png",
    ];


    return (
        <div className={"relative pt-4 md:pt-16 pb-4 md:pb-24 bg-[#69C5D7]"}>
            <div className={"flex flex-col justify-center items-center gap-8 md:gap-16"}>
                <Header height='90px' isMobile={isMobile} color='yellow' text={`Школьная спортивная лига 
                по футболу`} />
                <div className={"flex flex-col justify-center items-center gap-8 md:gap-16 sm:px-20 md:px-64"}>
                    <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
                        {`Финальный день школьной спортивной лиги по футболу среди самых маленьких любителей футбола.

                    В решающих матчах сезона школьной лиги за титул чемпиона будут бороться команды юношей и команды девушек 11-12 лет.

                    На матчах будут присутствовать игроки профессиональных футбольных клубов и тренеры детских футбольных академий.

                    У всех участников будет возможность попасть на просмотр в детскую футбольную академию.

                    Приходи поддержать любимых спортсменов, будет интересно!`}
                    </p>
                    <div className={"flex flex-row justify-center items-center gap-3 md:gap-7 overflow-auto"}>
                        {isMobile
                            ?
                            mobileImages.map((image, index) => (
                                <LazyLoadImage effect="blur" key={index} src={image} alt={"match-" + index} />
                            ))
                            :
                            images.map((image, index) => (
                                <LazyLoadImage effect="blur" key={index} src={image} alt={"match-" + index} />
                            ))
                        }
                    </div>
                    <Button title={"Я ПРИДУ"} isPridu onClick={() => { handleOpenNewTab("https://gorizonty.mos.ru/events/5053") }} />
                </div>
            </div>
        </div>
    )
}

export default Football