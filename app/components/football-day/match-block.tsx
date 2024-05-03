"use client"

import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'
import { handleOpenNewTab } from '@/app/common/openNewTab'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface MatchProps {
    isMobile?: boolean
}

const Match = ({ isMobile }: MatchProps) => {
    const images = [
        "/images/desktop/football-day/match/1.png",
        "/images/desktop/football-day/match/2.png",
        "/images/desktop/football-day/match/3.png",
    ];

    const mobileImages = [
        "/images/mobile/football-day/match/1.png",
        "/images/mobile/football-day/match/2.png",
        "/images/mobile/football-day/match/3.png",
    ];

    return (
        <div className={"relative bg-[#69C5D7] pt-8 md:pt-16 pb-24"}>
            <div className={"flex flex-col gap-8 md:gap-16"}>
                <Header height='90px' isMobile={isMobile} color='pink' text={`Матч с игроками Медийной 
                футбольной лиги`} />
                <div className={"flex flex-col gap-8 items-center md:gap-16 sm:px-20 md:px-64"}>
                    <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
                        {`Одним из центральных событий фестиваля станет футбольный матч с участием сборной команды школьников против сборной команды Медийной футбольной лиги. В состав сборной войдут лучшие игроки лиги, а также победители футбольных челленджей. Именно наша сборная покажет, что уровень школьных команд ничем не отличается от уровня Медийной футбольной лиги, а может и даже превосходит. 

                    Приходи поддержать любимых спортсменов, получить фото и автограф звезд медийной футбольной лиги, будет интересно!
                    `}
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
                    <Button title={"ПРАВИЛА УЧАСТИЯ"} onClick={() => { handleOpenNewTab("https://mcvp.ru/city_events/festival-shkolnogo-sporta-futbolnyj-chellendzh") }} />
                </div>
            </div>
        </div>
    )
}

export default Match