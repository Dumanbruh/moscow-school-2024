import React from 'react'
import Header from '../ui/header'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface CubokProps {
    isMobile?: boolean
}

const Cubok = ({ isMobile }: CubokProps) => {
    const images = [
        "/images/desktop/football-day/cubok/1.png",
        "/images/desktop/football-day/cubok/2.png",
        "/images/desktop/football-day/cubok/3.png",
    ]

    const mobileImages = [
        "/images/mobile/football-day/cubok/1.png",
        "/images/mobile/football-day/cubok/2.png",
        "/images/mobile/football-day/cubok/3.png",
    ];

    return (
        <div className={"relative pt-4 md:pt-20 pb-4 md:pb-24 sm:px-20 md:px-40"}>
            <div className={"flex flex-col justify-center items-center gap-8 md:gap-16"}>
                <Header isMobile={isMobile} height='90px' color={"red"} text={`Кубок Московского спорта 
                «Кожаный мяч»`} />
                <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
                    {`Одним из центральных событий фестиваля станет футбольный матч с участием сборной команды школьников против сборной команды Медийной футбольной лиги. В состав сборной войдут лучшие игроки лиги, а также победители футбольных челленджей. Именно наша сборная покажет, что уровень школьных команд ничем не отличается от уровня Медийной футбольной лиги, а может и даже превосходит. 

                    Приходи поддержать любимых спортсменов, получить фото и автограф звезд медийной футбольной лиги, будет интересно!
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
            </div>
            {!isMobile &&
                <div className={
                    "bg-[url('/images/desktop/home/schedule/bg.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[900px] absolute bottom-0 right-0 -z-10"
                } />
            }
            <div className={
                "bg-[url('/images/mobile/bg/cubok-bg.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[300px] absolute md:hidden bottom-[10%] right-0 -z-10"
            } />
        </div>
    )
}

export default Cubok