import React from 'react'
import Header from '../ui/header'
import Button from '../ui/button'
import { handleOpenNewTab } from '@/app/common/openNewTab'
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface CortKingProps {
    isMobile?: boolean;
}

const CortKing = ({ isMobile }: CortKingProps) => {
    const images = [
        "/images/desktop/basketball-day/cort-king/1.png",
        "/images/desktop/basketball-day/cort-king/2.png",
        "/images/desktop/basketball-day/cort-king/3.png",
    ]

    const mobileImages = [
        "/images/mobile/basketball-day/cort-king/1.png",
        "/images/mobile/basketball-day/cort-king/2.png",
        "/images/mobile/basketball-day/cort-king/3.png",
    ]


    return (
        <div className={"relative pt-4 md:mt-16 pb-4 md:pb-24 bg-[#69C5D7]"}>
            <div className={"flex flex-col justify-center items-center gap-8 md:gap-16 z-20"}>
                <Header height='90px' isMobile={isMobile} color='pink' text={`
                «Царь корта» - баскетбол 1х1
                
                `} />
                <div className={"flex flex-col justify-center items-center gap-8 md:gap-16 z-20 sm:px-20 md:px-64"}>
                    <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line z-20`}>
                        {`Каждый баскетболист уникален. И его особенностью является умение играть один на один. 

                    Дриблинг, бросок, умение играть в защите, хитрость, а самое главное холодная голова – всё это поможет стать лучшим на баскетбольной площадке.

                    По шесть представителей юношей и девушек определят кто из них самым самый.`}
                    </p>
                    <div className={"flex flex-row justify-center items-center gap-3 md:gap-7 overflow-auto z-20"}>
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
                    <Button title={"РЕГИСТРАЦИЯ"} onClick={() => { handleOpenNewTab("https://mcvp.ru/city_events/festival-shkolnogo-sporta-basketbolnyj-turnir-1h1-czar-korta") }} />
                </div>
            </div>
            {!isMobile &&
                <div className={
                    "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[320px] md:h-[600px] absolute bottom-0 left-0 z-10"
                } />
            }
        </div>
    )
}

export default CortKing