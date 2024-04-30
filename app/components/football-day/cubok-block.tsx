import React from 'react'
import Header from '../ui/header'

const Cubok = () => {
    const images = [
        "/images/desktop/gto-games/register/1.png",
        "/images/desktop/gto-games/register/2.png",
        "/images/desktop/gto-games/register/3.png",
    ]

    return (
        <div className={"relative pt-20 pb-24 md:px-40"}>
            <div className={"flex flex-col justify-center items-center gap-16"}>
                <Header color={"red"} text={`Кубок Московского спорта 
                «Кожаный мяч»`} />
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
            </div>
            <div className={
                "bg-[url('/images/desktop/home/schedule/bg.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[900px] absolute bottom-0 right-0 -z-10"
            } />
        </div>
    )
}

export default Cubok