import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'
import { handleOpenNewTab } from '@/app/common/openNewTab'
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface BasketShowProps {
    isMobile?: boolean;
}

const BasketShow = ({ isMobile }: BasketShowProps) => {
    const images = [
        "/images/desktop/basketball-day/basket-show/1.png",
        "/images/desktop/basketball-day/basket-show/2.png",
        "/images/desktop/basketball-day/basket-show/3.png",
    ]

    const mobileImages = [
        "/images/mobile/basketball-day/basket-show/1.png",
        "/images/mobile/basketball-day/basket-show/2.png",
    ]

    return (
        <div className={"relative pt-4 md:mt-16 pb-4 md:pb-24 sm:px-20 md:px-64"}>
            <div className={"flex flex-col justify-center items-center gap-8 md:gap-16"}>
                <Header height='90px' isMobile={isMobile} color='green' text={`
                «Баскет-шоу»

                `} />

                <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
                    {`На наших баскетбольных кортах тебя ждет захватывающий шоу-матч, который станет настоящим ярким моментом фестиваля.

                    Представители студенческих спортивных клубов встретятся с командой Медийной лиги. Они продемонстрируют свои навыки и силу в баскетболе 3х3. Хочешь стать частью команды, участвуй в челленже!`}
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
                <Button title={"ПРАВИЛА УЧАСТИЯ"} onClick={() => { handleOpenNewTab("https://mcvp.ru/city_events/festival-shkolnogo-sporta-basketbolnyj-chellendzh") }} />
            </div>
            {!isMobile && <div className={
                "bg-[url('/images/desktop/home/schedule/bg.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[900px] absolute bottom-0 right-0 -z-10"
            } />}
        </div>
    );
}

export default BasketShow