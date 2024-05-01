import React from 'react'
import Header from '../ui/header'

interface ScheduleProps {
    isMobile?: boolean;
}


const Schedule = ({ isMobile }: ScheduleProps) => {

    const schedule = [
        {
            "time": "10:00 – 12.00",
            "event": "Соревнования по финес-аэробике"
        },
        {
            "time": "12.00 – 12.02",
            "event": "Приветствие ведущих, анонс дня"
        },
        {
            "time": "12.02 – 12.10",
            "event": "Награждение знаками ВФСК ГТО"
        },
        {
            "time": "12:10 – 14:45",
            "event": "Соревнования по финес-аэробике"
        },
        {
            "time": "14:45 – 15:00",
            "event": "Флешмоб с Евой Уваровой"
        },
        {
            "time": "15:00 – 15:12",
            "event": 'Церемония награждения победителей конкурса "Лучший руководитель СК в системе московского образования"'
        },
        {
            "time": "15:12 – 16:00",
            "event": "Соревнования по финес-аэробике"
        },
        {
            "time": "16:00 – 16:15",
            "event": 'Церемония награждения победителей конкурса "Лучший спортивный клуб в системе московского образования"'
        },
        {
            "time": "16:15 – 17:00",
            "event": "Соревнования по финес-аэробике"
        },
        {
            "time": "17:00 – 17:15",
            "event": "Церемония вручения спецпризов"
        },
        {
            "time": "17:20 – 17:30",
            "event": "Церемония открытия"
        },
        {
            "time": "17:30 – 18:10",
            "event": "Выступление Звонкого"
        },
        {
            "time": "18:20 – 19:00",
            "event": "Выступление ST"
        },
        {
            "time": "19:10 – 19:50",
            "event": "Выступление Mia Boyka",
        },
        {
            "time": "19:50 – 20:00",
            "event": "Закрытие фестиваля"
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