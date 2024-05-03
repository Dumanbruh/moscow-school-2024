import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'
import { handleOpenNewTab } from '@/app/common/openNewTab'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface FestivalProps {
  isMobile?: boolean
}

const Festival = ({ isMobile }: FestivalProps) => {

  const images = [
    "/images/desktop/football-day/festival/1.png",
    "/images/desktop/football-day/festival/2.png",
  ];

  const mobileImages = [
    "/images/mobile/football-day/festival/1.png",
    "/images/mobile/football-day/festival/2.png",
  ]

  return (
    <div className={"relative pt-4 md:pt-20 pb-9 md:pb-24 sm:px-20 md:px-40"}>
      <div className={"flex flex-col justify-center items-center gap-8 md:gap-16"}>
        <Header isMobile={isMobile} height='90px' color='green' text={`Фестиваль РФС для участников 
        проекта “Футбол в школе”`} />
        <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
          {`Одно из самых масштабным и зрелищных мероприятий в этот день станет турнир по футболу в рамках проекта “Футбол в школе”.

          Турнир пройдет на 20 мини-футбольных полях одновременно среди 40 команд в котором примут участие самые маленькие любители футбола 7-10 лет.

          У каждой команды будет свой наставник из звезд Российского футбола и футбольных блогеров.
          `}
        </p>
        <div className={"flex flex-row justify-center items-center gap-3 md:gap-7 overflow-auto"}>
          {isMobile
            ?
            mobileImages.map((image, index) => (
              <LazyLoadImage effect="blur" key={index} src={image} alt={"cubok-" + index} />
            ))
            :
            images.map((image, index) => (
              <LazyLoadImage effect="blur" key={index} src={image} alt={"cubok-" + index} />
            ))
          }
        </div>
        <Button title={"РЕГИСТРАЦИЯ"} onClick={() => { handleOpenNewTab("https://mcvp.ru/city_events/festival-shkolnogo-sporta-futbolnyj-chellendzh") }} />
      </div>
      <div className={
        "bg-[url('/images/desktop/bg/festival-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[700px] hidden md:absolute bottom-[0] left-[0%] -z-10"
      } />
    </div>
  )
}

export default Festival