import React from 'react'
import Header from '../ui/header'

const Showball = () => {
  const images = [
    "/images/desktop/gto-games/register/1.png",
    "/images/desktop/gto-games/register/2.png",
  ]

  return (
    <div className={"relative"}>
      <div className={"flex flex-col gap-16 mt-16 pb-24 md:px-40"}>
        <Header text={"шоубол"} />
        <p className={"font-medium text-blue text-2xl whitespace-pre-line"}>
          {`Шоубол - инновационный вид спорта с элементами зрелищных спортивных событий и шоу, гармонично сочетающий в себе форматы самых популярных мировых видов спорта -совокупность разнообразных форматов и элементов правил хоккея, баскетбола, футбола и гандбола.
          
          В первом сезоне московской школьной лиги шоубола примут участие 6 команд из школ г. Москвы под руководством известных наставников, представителей медиалиги и шоубизнеса Дмитрия Егорова, Ивана Пышненко, Артемия Форзы , Артема Пантеры , Эрика и Алексия Гасилина.
          
          Отборочные и финальные игры, выступление
          групп поддержки, показательные выступления профессиональных чир-команд, битва болельщиков - все это ожидает участников самой первой игры в истории спорта нашей страны.`}
        </p>
        <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={"description"} />
          ))}
        </div>
      </div>
      <div className={
        "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[600px] absolute bottom-0 left-0 -z-10"
      } />
    </div>
  )
}

export default Showball