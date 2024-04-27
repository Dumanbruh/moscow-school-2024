import React from 'react'
import Header from '../ui/header'

const Headliners = () => {
    return (
        <div className={"relative my-32"}>
            <div className={"flex flex-col gap-16 px-40"}>
                <Header text={"хедлайнеры фестиваля"} color='red' />
                <div className={"flex flex-col gap-2"}>
                    <div className={"bg-[url('/images/desktop/home/headliners/headliners.png')] bg-contain relative bg-no-repeat bg-center w-[100%] md:h-[300px] lg:h-[700px]"} >
                        <div className={"absolute w-full bottom-[-8%]"}>
                            <div className={"flex flex-row"}>
                                <p className="font-mossport text-center text-4xl w-[33%] text-blue">
                                    ST
                                </p>
                                <p className="font-mossport text-center text-4xl w-[33%] text-blue">
                                    MIA BOYKA
                                </p>
                                <p className="font-mossport text-center text-4xl w-[33%] text-blue">
                                    ЗВОНКИЙ
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={
                "bg-[url('/images/desktop/home/headliners/bg.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[100%] absolute bottom-[10%] right-[0%] -z-10"
            } />
        </div>
    )
}

export default Headliners