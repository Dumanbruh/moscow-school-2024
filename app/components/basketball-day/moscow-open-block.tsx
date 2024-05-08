import React from 'react'
import Header from '../ui/header';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../ui/button';
import { handleOpenNewTab } from '@/app/common/openNewTab';

interface MoscowOpenProps {
    isMobile?: boolean
}

const MoscowOpen = ({ isMobile }: MoscowOpenProps) => {
    const images = [
        "/images/desktop/basketball-day/moscow-open/1.png",
        "/images/desktop/basketball-day/moscow-open/2.png",
        "/images/desktop/basketball-day/moscow-open/3.png",
    ];

    const mobileImages = [
        "/images/mobile/basketball-day/moscow-open/1.png",
        "/images/mobile/basketball-day/moscow-open/2.png",
        "/images/mobile/basketball-day/moscow-open/3.png",
    ];


    return (
        <div className={"relative mb-16 pt-4 md:pt-16 pb-4 md:pb-24 bg-[#69C5D7]"}>
            <div className={"flex flex-col justify-center items-center gap-8 md:gap-16"}>
                <Header height='90px' isMobile={isMobile} color='yellow' text={`
                Турнир Мoscow Open
                
                `} />
                <div className={"flex flex-col justify-center items-center gap-8 md:gap-16 sm:px-20 md:px-64"}>
                    <p className={`${isMobile ? 'font-regular' : 'font-medium'} text-blue ${isMobile ? 'text-xl leading-5' : 'text-2xl'} ${isMobile ? 'px-5' : 'px-0'} whitespace-pre-line`}>
                        {`Визитная карточка российского баскетбола 3×3 на международной арене. Один из самых престижных мировых турниров проводится с 2007 года, с 2012 по 2022 год — этап Мирового тура ФИБА 3×3. 
                        Мoscow Open — это не только турнир для 12 топ-команд, но и грандиозный праздник баскетбола для жителей Москвы. В обязательную программу Мoscow Open входит массовый турнир (более 500 команд разных возрастов) и конкурс по броскам сверху. 12 мая откроется регистрация для участников не старше 2011 года рождения, 14 мая — для участников 2010 года рождения и старше. Подать заявку и ознакомится с подробной информацией можно на сайте организаторов турнира.`}
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
                    <Button title={"РЕГИСТРАЦИЯ"} onClick={() => { handleOpenNewTab("https://streetbasket.ru") }} />
                </div>
            </div>
        </div>
    )
}

export default MoscowOpen