import React from 'react'
import Header from '../ui/header';

interface ScheduleProps {
    isMobile?: boolean;
}

const Schedule = ({ isMobile }: ScheduleProps) => {
    const schedule = [
        {
            "time": "10:00 – 11:00",
            "event": "Свободные заезды"
        },
        {
            "time": "11:00 – 11:15",
            "event": "Фристайл шоу"
        },
        {
            "time": "11:15 – 12:00",
            "event": "Свободные заезды"
        },
        {
            "time": "11:15 – 11:45",
            "event": "Мастер-класс (Мини рампа) MTB Павел Алёхин"
        },
        {
            "time": "12:00 – 12:15",
            "event": "Фристайл шоу"
        },
        {
            "time": "12:15 – 12:45",
            "event": "Мастер-класс (Мини рампа) Скейт Егор Кальдиков"
        },
        {
            "time": "12:15 – 13:00",
            "event": "Свободные заезды"
        },
        {
            "time": "13:00 – 13:15",
            "event": "Фристайл шоу"
        },
        {
            "time": "13:15 – 13:45",
            "event": "Мастер-класс (Мини рампа) ВМХ Фоминов Никита"
        },
        {
            "time": "13:15 – 14:00",
            "event": "Квалификация МТВ"
        },
        {
            "time": "14:00 – 15:15",
            "event": "Лекторий. (Алёхин, Ризаев, Фазолов, Кальдиков)"
        },
        {
            "time": "15:15 – 15:45",
            "event": "Мастер-класс (Мини рампа) Самокат Соловьев Иван"
        },
        {
            "time": "15:15 – 16:00",
            "event": "Квалификация ВМХ"
        },
        {
            "time": "16:00 – 16:15",
            "event": "Фристайл шоу"
        },
        {
            "time": "16:15 – 16:30",
            "event": "Свободные заезды финалистов соревнований"
        },
        {
            "time": "16:30 – 17:30",
            "event": "Финалы МТВ и ВМХ"
        }
    ];

    return (
        <div className={"relative mt-20 pb-32 md:pb-48"}>
            <div className={"flex flex-col gap-16"}>
                <Header isMobile={isMobile} text={"расписание сцены"} />
                <div className={"flex flex-col w-full px-3 sm:px-14 items-center gap-2"}>
                    {schedule.map((event, index) => (
                        <div key={index} className={"flex flex-row items-center w-full md:w-[800px] py-2 px-2 sm:px-4 bg-[#DA1C5C]"}>
                            <div className={"w-1/4 text-center"}>
                                <p className={"text-white font-light text-xs sm:text-base md:text-2xl"}>{event.time}</p>
                            </div>
                            <div className={"w-3/4 text-justify"}>
                                <p className={"text-white font-light text-xs sm:text-base md:text-2xl"} style={{
                                    lineHeight: "120%"
                                }}>{event.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={
                "bg-[url('/images/desktop/home/schedule/bg.png')] bg-contain bg-no-repeat bg-right w-[100%] h-[900px] absolute bottom-0 right-0 -z-10"
            } />
        </div >
    )
}

export default Schedule