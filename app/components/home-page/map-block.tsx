import React from 'react'
import Header from '../ui/header'

interface MapProps {
    isMobile?: boolean;
}

const Map = ({ isMobile }: MapProps) => {
    return (
        <div className={"flex flex-col gap-8 md:gap-16 sm:px-3 md:px-40"}>
            <Header text={"карта фестиваля"} isMobile={isMobile} color='pink' />
            <iframe
                className="w-full h-[320px] md:h-[565px] lg:h-[700px]"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0da589e20425482930766656c4a5e5a0f6b30809b740f3a6c7f3411f90130aae&amp;source=constructor"
            />
        </div>
    )
}

export default Map