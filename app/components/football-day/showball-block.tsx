import React from 'react'
import Header from '../ui/header'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface ShowballProps {
  isMobile?: boolean
}

const Showball = ({ isMobile }: ShowballProps) => {
  const images = [
    "/images/desktop/football-day/showball/1.png",
    "/images/desktop/football-day/showball/2.png",
  ]

  const mobileImages = [
    "/images/mobile/football-day/showball/1.png",
    "/images/mobile/football-day/showball/2.png",
  ]

  return (
    <div className={"relative mt-8 md:mt-16 pb-24"}>
      <div className={"flex flex-col gap-8 md:gap-16"}>
        <Header isMobile={isMobile} text={"шоубол"} />
        <div className={"flex flex-col gap-8 md:gap-16 sm:px-20 md:px-64"}>
          <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
            {`Шоубол - инновационный вид спорта с элементами зрелищных спортивных событий и шоу, гармонично сочетающий в себе форматы самых популярных мировых видов спорта -совокупность разнообразных форматов и элементов правил хоккея, баскетбола, футбола и гандбола.
          
          В первом сезоне московской школьной лиги шоубола примут участие 6 команд из школ г. Москвы под руководством известных наставников, представителей медиалиги и шоубизнеса Дмитрия Егорова, Ивана Пышненко, Артемия Форзы , Артема Пантеры , Эрика и Алексея Гасилина.
          
          Отборочные и финальные игры, выступление
          групп поддержки, показательные выступления профессиональных чир-команд, битва болельщиков - все это ожидает участников самой первой игры в истории спорта нашей страны.`}
          </p>
          <div className={"flex flex-row justify-center items-center gap-3 md:gap-7"}>
            {isMobile
              ?
              mobileImages.map((image, index) => (
                <LazyLoadImage effect="blur" key={index} src={image} alt={"register-" + index} />
              ))
              :
              images.map((image, index) => (
                <LazyLoadImage effect="blur" key={index} src={image} alt={"register-" + index} />
              ))
            }
          </div>
        </div>
      </div>
      <div className={
        "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[320px] md:h-[600px] absolute bottom-[-12%] left-0 -z-10"
      } />
      <div className={
        "bg-[url('/images/desktop/home/desc/festival-color.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[380px] md:h-[700px] absolute md:hidden bottom-[35%] right-[0%] -z-10"
      } />
    </div>
  )
}

export default Showball