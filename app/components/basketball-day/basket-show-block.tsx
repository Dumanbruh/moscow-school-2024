import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'

const BasketShow = () => {
    const images = [
        "/images/desktop/football-day/festival/1.png",
        "/images/desktop/football-day/festival/2.png",
    ]

    return (
        <div className={"relative pt-20 pb-24 md:px-40"}>
            <div className={"flex flex-col justify-center items-center gap-16"}>
                <Header color='green' text={`Фестиваль РФС для участников 
            проекта “Футбол в школе”`} />
                <p className={"font-medium text-blue text-2xl whitespace-pre-line"}>
                    {`На наших баскетбольных кортах тебя ждет захватывающий шоу-матч, который станет настоящим ярким моментом фестиваля.

                    Представители студенческих спортивных клубов встретятся с командой Медийной лиги. Они продемонстрируют свои навыки и силу в баскетболе 3х3. Хочешь стать частью команды, участвуй в челленже!`}
                </p>
                <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={"description"} />
                    ))}
                </div>
                <Button title={"ПРАВИЛА УЧАСТИЯ"} onClick={() => { }} />
            </div>
            <div className={
                "bg-[url('/images/desktop/home/desc/festival-color.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[700px] absolute bottom-[0] right-[0%] -z-10"
            } />
        </div>
    )
}

export default BasketShow