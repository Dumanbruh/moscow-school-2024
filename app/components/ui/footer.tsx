"use client"

import { handleOpenNewTab } from '@/app/common/openNewTab'
import React from 'react'

const Footer = () => {
    const logos = [
        {
            "logo": "/images/desktop/logos/footer/education.svg",
            "url": "https://shkolamoskva.ru/"
        },
        {
            "logo": "/images/desktop/logos/footer/mossport.svg",
            "url": "https://moscow.sport"
        },
        {
            "logo": "/images/desktop/logos/footer/msvp.svg",
            "url": ""
        },
        {
            "logo": "/images/desktop/logos/footer/mgpu.svg",
            "url": ""
        },
        {
            "logo": "/images/desktop/logos/footer/asb.svg",
            "url": ""
        },
        {
            "logo": "/images/desktop/logos/footer/fshr.svg",
            "url": ""
        },
        {
            "logo": "/images/desktop/logos/footer/rfs.svg",
            "url": ""
        },
        {
            "logo": "/images/desktop/logos/footer/vk.svg",
            "url": ""
        },
        {
            "logo": "/images/desktop/logos/footer/delo.svg",
            "url": ""
        },
    ]


    return (
        <footer className={"flex flex-col w-full"}>
            <div className={"flex flex-col justify-center items-center w-full mb-14"}>
                <div className={"flex flex-col items-center md:flex-row gap-32"}>
                    <div className={"flex flex-col items-center md:items-start sm:text-left sm:gap-7 md:min-w-[536px] sm:mt-12 relative"}>
                        <div className={
                            "bg-[url('/images/desktop/bg/footer-header.svg')] bg-cover bg-center flex justify-center items-center w-[100%] h-[52px] md:h-[74px] absolute top-[-3%] md:top-[-6%] md:left-[-30%] -z-10"
                        }>
                        </div>

                        <h3 className={"font-mossport uppercase text-white text-4xl md:text-[64px]"}>
                            Как нас найти?
                        </h3>

                        <div className={"flex flex-col pt-5 gap-7"}>
                            <div className={"flex flex-col gap-1"}>
                                <p className={"font-bold text-lg text-[#202020]"}>Эл. почта</p>
                                <a href={"mailto:school.moscow.sport@yandex.ru"} className={"font-light text-lg text-[#262626] underline"}>school.moscow.sport@yandex.ru</a>
                            </div>

                            <div className={"flex flex-col gap-1"}>
                                <p className={"font-bold text-lg text-[#202020]"}>Место проведения</p>
                                <p className={"font-light text-lg text-[#262626]"}>ОК Лужники</p>
                                <p className={"font-light text-lg text-[#262626]"}>г.Москва ул. Лужники, дом 24, строение 7</p>
                            </div>
                        </div>
                    </div>
                    <iframe
                        className="w-full h-[320px] md:h-[450px] md:w-[590px]"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A48d48ecdf9dac9ca29b98da2f451f4241a37973675f422de5a973a001b82195e&amp;source=constructor"
                    />
                </div>
            </div>
            <div className={"flex flex-row flex-wrap gap-6 border-t-2 border-[#929292] border-opacity-20 py-[23px] px-20"}>
                {logos.map((logo, index) => (
                    <img key={index} src={logo.logo} alt={logo.logo} onClick={() => logo.url && handleOpenNewTab(logo.url)} />
                ))}
            </div>
        </footer>
    )
}

export default Footer