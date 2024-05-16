import React from 'react'
import Header from '../ui/header'

interface HeadlinersProps {
    isMobile?: boolean;
}

const Headliners = ({ isMobile }: HeadlinersProps) => {
    return (
        <div className={"relative my-8 md:my-32"}>
            <Header text={"хедлайнеры фестиваля"} isMobile={isMobile} color='red' />
            <div className={"flex flex-col gap-8 md:gap-16 sm:px-20 md:px-40"}>
                <div className={"flex flex-col gap-2"}>
                    <div className={"bg-[url('/images/desktop/home/headliners/headliners.png')] bg-contain relative bg-no-repeat bg-center w-[100%] h-[315px] md:h-[700px]"} />
                </div>
            </div>
            <div className={
                "bg-[url('/images/mobile/home/headliners/bg.png')] md:bg-[url('/images/desktop/home/headliners/bg.png')] bg-contain bg-no-repeat bg-center w-[100%] h-[100%] absolute bottom-0 left-0 right-[0%] -z-10"
            } />
        </div>
    )
}

export default Headliners