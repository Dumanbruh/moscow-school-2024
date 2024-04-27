import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className={"flex flex-col w-full"}>
            <div className={"flex flex-col justify-center items-center w-full mb-14"}>
                <div className={"flex flex-col sm:flex-row gap-32"}>
                    <div className={"flex flex-col sm:gap-7 sm:min-w-[536px] sm:mt-12 relative"}>
                        <div className={
                            "bg-[url('/images/desktop/bg/footer-header.svg')] bg-cover bg-center flex justify-center items-center w-[100%] h-[74px] absolute top-0 left-[-30%] -z-10"
                        }>
                        </div>

                        <h3 className='header' style={{
                            fontSize: "48px",
                        }}>
                            Как нас найти?
                        </h3>

                        <div className={"flex flex-col gap-1"}>
                            <p className={"font-bold text-lg text-[#202020]"}>Эл. почта</p>
                            <a className={"font-light text-lg text-[#262626] underline"}>school.moscow.sport@yandex.ru</a>
                        </div>

                        <div className={"flex flex-col gap-1"}>
                            <p className={"font-bold text-lg text-[#202020]"}>Место проведения</p>
                            <p className={"font-light text-lg text-[#262626]"}>ОК Лужники</p>
                            <p className={"font-light text-lg text-[#262626]"}>г.Москва ул. Лужники, дом 24, строение 11</p>
                        </div>
                    </div>

                    <iframe
                        className="w-full h-[450px] sm:w-[390px] lg:w-[590px]"
                        src="https://yandex.com/map-widget/v1/?um=constructor%3A48d48ecdf9dac9ca29b98da2f451f4241a37973675f422de5a973a001b82195e&amp;source=constructor"
                    />
                </div>
            </div>
            <div className={"flex flex-row gap-6 border-t-2 border-[#929292] border-opacity-20 py-5 px-20"}>
                <Image width={58} height={44} src={"/images/desktop/logos/footer-education.svg"} alt={"footer-education"} />
                <Image width={150} height={44} src={"/images/desktop/logos/footer-mossport.svg"} alt={"footer-mossport"} />
            </div>
        </div>
    )
}

export default Footer