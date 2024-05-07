import { handleOpenNewTab } from '@/app/common/openNewTab';
import React from 'react'

interface CardProps {
    date: string;
    title: string;
    desc: string;
    img: string;
    url?: string;
    priduUrl?: string;
    isMobile?: boolean;
}

const Card = ({
    date,
    title,
    desc,
    img,
    url,
    priduUrl,
    isMobile
}: CardProps) => {
    return (
        <div className={`w-full h-[806px] md:h-[576px] flex flex-col md:flex-row gap-8 md:gap-11`} style={{
            background: "linear-gradient(176.81deg, #4BD21C 0.75%, #FFC000 73.06%)",
            borderRadius: "32px"
        }}>
            <div className={"w-full md:w-[40%] h-[300px] md:h-[100%] relative"}>
                <div className={"absolute w-full md:hidden top-0"} >
                    <div className={"flex flex-col justify-center items-center"}>
                        <div className={"py-[10px] px-[18px]"} style={{
                            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                            borderRadius: "5px",
                        }}>
                            <p className={"font-regular text-xs text-white"} style={{
                                lineHeight: "150%",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}>{date}</p>
                        </div>
                    </div>
                </div>
                <img src={img} alt={img} className={"w-[100%] h-[100%] object-cover rounded-[32px]"} />
            </div>
            <div className={"w-full md:w-[50%] h-[50%] md:h-[100%] relative"}>
                <div className={"flex flex-col items-center px-5 gap-6"}>
                    <div className={"hidden md:flex flex-col items-center py-[10px] px-[18px]"} style={{
                        background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                        borderRadius: "5px",
                    }}>
                        <p className={"font-medium text-xs text-black"} style={{
                            lineHeight: "150%",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}>{date}</p>
                    </div>

                    {isMobile ? <p className={"font-mossport text-4xl uppercase text-center text-white"} style={{ letterSpacing: "-1px", whiteSpace: "pre-line" }}>{title}</p> : <p className={"header"} style={{ letterSpacing: "-1px", lineHeight: "60px", whiteSpace: "pre-line" }}>{title}</p>}

                    {isMobile
                        ?
                        <div>
                            <p className={"font-medium text-base cursor-pointer"} style={{ lineHeight: "20px", whiteSpace: "pre-line" }}>{desc}</p>
                        </div>
                        :
                        <div style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
                            <p className={"font-medium text-xl cursor-pointer"} style={{ lineHeight: "120%", whiteSpace: "pre-line" }}>{desc}</p>
                        </div>
                    }
                    {isMobile && priduUrl &&
                        <div className={"w-full"}>
                            <div className={"w-full flex flex-col justify-center items-center"}>
                                <button className={`w-64 h-16 rounded-lg text-lg font-medium text-black`} style={{
                                    background: "linear-gradient(90deg, #9ADEE6 0%, #6AC0C9 100%)"
                                }}
                                    onClick={() => handleOpenNewTab(priduUrl)}
                                >
                                    Я ПРИДУ
                                </button>
                            </div>
                        </div>
                    }
                    {isMobile && url &&
                        <div className={"w-full"}>
                            <div className={"w-full flex flex-col justify-center items-center"}>
                                <button className={`w-64 h-16 rounded-lg text-lg font-medium text-white`} style={{
                                    background: "linear-gradient(90deg, #1C97AF 0%, #1E42A6 100%)"
                                }}
                                    onClick={() => handleOpenNewTab(url)}
                                >
                                    РЕГИСТРАЦИЯ
                                </button>
                            </div>
                        </div>
                    }
                </div>

                {!isMobile && url &&
                    <div className={"w-full absolute bottom-12"}>
                        <div className={"w-full flex flex-col justify-center items-center"}>
                            <button className={`w-full sm:w-64 h-16 rounded-lg text-lg font-medium text-white`} style={{
                                background: "linear-gradient(90deg, #1C97AF 0%, #1E42A6 100%)"
                            }}
                                onClick={() => handleOpenNewTab(url)}
                            >
                                РЕГИСТРАЦИЯ
                            </button>
                        </div>
                    </div>
                }
                {!isMobile && priduUrl &&
                    <div className={"w-full absolute bottom-12"}>
                        <div className={"w-full flex flex-col justify-center items-center"}>
                            <button className={`w-full sm:w-64 h-16 rounded-lg text-lg font-medium text-black`} style={{
                                background: "linear-gradient(90deg, #9ADEE6 0%, #6AC0C9 100%)"
                            }}
                                onClick={() => handleOpenNewTab(priduUrl)}
                            >
                                Я ПРИДУ
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default Card