"use client"

import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'
import { handleOpenNewTab } from '@/app/common/openNewTab'

const Match = () => {
    const images = [
        "/images/desktop/football-day/match/1.png",
        "/images/desktop/football-day/match/2.png",
        "/images/desktop/football-day/match/3.png",
    ]

    return (
        <div className={"relative pt-20 pb-24 bg-[#69C5D7] md:px-40"}>
            <div className={"flex flex-col justify-center items-center gap-16"}>
                <Header color='pink' text={`Матч с игроками Медийной 
                футбольной лиги`} />
                <p className={"font-medium text-blue text-2xl whitespace-pre-line"}>
                    {`Одним из центральных событий фестиваля станет футбольный матч с участием сборной команды школьников против сборной команды Медийной футбольной лиги. В состав сборной войдут лучшие игроки лиги, а также победители футбольных челленджей. Именно наша сборная покажет, что уровень школьных команд ничем не отличается от уровня Медийной футбольной лиги, а может и даже превосходит. 

                    Приходи поддержать любимых спортсменов, получить фото и автограф звезд медийной футбольной лиги, будет интересно!
                    `}
                </p>
                <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={"description"} />
                    ))}
                </div>
                <Button title={"ПРАВИЛА УЧАСТИЯ"} onClick={() => {handleOpenNewTab("https://gto.patriotsport.moscow/gorodskie-meropriyatiya-gto/festival-vfsk-gto-po-otboru-uchastnikov-na-vserossijskie-etapy-sredi-obuchayushhihsya-obrazovatelnyh-organizatsij/")}} />
            </div>
        </div>
    )
}

export default Match