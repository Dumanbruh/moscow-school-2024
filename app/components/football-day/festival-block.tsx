import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'

const Festival = () => {
  const images = [
    "/images/desktop/gto-games/register/1.png",
    "/images/desktop/gto-games/register/2.png",
    "/images/desktop/gto-games/register/3.png",
  ]

  return (
    <div className={"relative pt-20 pb-24 md:px-40"}>
      <div className={"flex flex-col justify-center items-center gap-16"}>
        <Header color='green' text={`Фестиваль РФС для участников 
        проекта “Футбол в школе”`} />
        <p className={"font-medium text-blue text-2xl whitespace-pre-line"}>
          {`Одно из самых масштабным и зрелищных мероприятий в этот день станет турнир по футболу в рамках проекта “Футбол в школе”.

          Турнир пройдет на 20 мини-футбольных полях одновременно среди 40 команд в котором примут участие самые маленькие любители футбола 7-10 лет.

          У каждой команды будет свой наставник из звезд Российского футбола и футбольных блогеров.
          `}
        </p>
        <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={"description"} />
          ))}
        </div>
        <Button title={"РЕГИСТРАЦИЯ"} onClick={() => { }} />
      </div>
      <div className={
        "bg-[url('/images/desktop/home/desc/festival-color.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[700px] absolute bottom-[0] right-[0%] -z-10"
      } />
    </div>
  )
}

export default Festival