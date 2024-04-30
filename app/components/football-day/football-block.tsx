import React from 'react'
import Header from '../ui/header'

const Football = () => {
    const images = [
        "/images/desktop/football-day/football/1.png",
        "/images/desktop/football-day/football/2.png",
        "/images/desktop/football-day/football/3.png",
    ]

    return (
        <div className={"relative pt-20 pb-24 bg-[#69C5D7] md:px-40"}>
            <div className={"flex flex-col justify-center items-center gap-16"}>
                <Header color='pink' text={`Школьная спортивная лига 
                по футболу`} />
                <p className={"font-medium text-blue text-2xl whitespace-pre-line"}>
                    {`Финальный день школьной спортивной лиги по футболу среди самых маленьких любителей футбола.

                    В решающих матчах сезона школьной лиги за титул чемпиона будут бороться команды юношей и команды девушек 11-12 лет.

                    На матчах будут присутствовать игроки профессиональных футбольных клубов и тренеры детских футбольных академий.

                    У всех участников будет возможность попасть на просмотр в детскую футбольную академию.

                    Приходи поддержать любимых спортсменов, будет интересно!`}
                </p>
                <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={"description"} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Football