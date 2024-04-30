import { handleOpenNewTab } from '@/app/common/openNewTab';
import React from 'react'

interface CardProps {
    date: string;
    title: string;
    desc: string;
    img: string;
    url?: string;
}

const Card = ({
    date,
    title,
    desc,
    img,
    url
}: CardProps) => {
    return (
        <div className={"h-[576px] w-full flex flex-row gap-11"} style={{
            background: "linear-gradient(176.81deg, #4BD21C 0.75%, #FFC000 73.06%)",
            borderRadius: "32px"
        }}>
            <div className={"w-[40%] h-[100%] relative"}>
                <img src={img} alt={img} className={"w-[100%] h-[100%] object-cover rounded-[32px]"} />
            </div>
            <div className={"w-[50%] h-[100%] relative"}>
                <div className={"flex flex-col gap-6"}>
                    <div className={"flex flex-col items-center py-2 px-4 max-w-[90px]"} style={{
                        background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                        borderRadius: "5px",
                    }}>
                        <p className={"font-medium text-xs text-black"} style={{
                            lineHeight: "150%",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}>{date}</p>
                    </div>

                    <p className={"header"} style={{ letterSpacing: "-1px", lineHeight: "60px", whiteSpace: "pre-line" }}>{title}</p>

                    <div>
                        <p className={"font-medium text-xl cursor-pointer"} style={{ lineHeight: "120%", whiteSpace: "pre-line" }}>{desc}</p>
                    </div>
                </div>

                {url &&
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
            </div>
        </div>
    )
}

export default Card