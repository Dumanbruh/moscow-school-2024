import React from 'react'
import Header from '../ui/header';

interface ScheduleProps {
    isMobile?: boolean;
}

const Schedule = ({ isMobile }: ScheduleProps) => {
    const schedule = [
        {
            "time": "10:00 – 12:00",
            "event": "Соревнования по фитнес-аэробике"
        },
        {
            "time": "12:02 – 12:10",
            "event": "Приветствие ведущих, анонс дня"
        },
        {
            "time": "12:02 – 12:10",
            "event": "Награждение знаками ВФСК ГТО"
        },
        {
            "time": "12:10 – 13:00",
            "event": "Соревнования по фитнес-аэробике"
        },
        {
            "time": "13:00 – 13:15",
            "event": "Награждение победителей общекомандного зачета Спартакиады «Надежда» и Спартакиады Инваспорта"
        },
        {
            "time": "13:15 – 14:30",
            "event": "Соревнования по фитнес-аэробике"
        },
        {
            "time": "14:45 – 15:00",
            "event": "Флешмоб с Евой Уваровой"
        },
        {
            "time": "15:00 – 15:10",
            "event": "Открытие фестиваля"
        },
        {
            "time": "15:10 – 15:22",
            "event": "Церемония награждения победителей конкурса «Лучший СК в системе московского образования»"
        },
        {
            "time": "15:22 – 16:10",
            "event": "Соревнования по фитнес-аэробике"
        },
        {
            "time": "16:10 – 16:22",
            "event": "Церемония награждения победителей конкурса «Лучший руководитель СК в системе московского образования»"
        },
        {
            "time": "16:25 – 17:20",
            "event": "Соревнования по фитнес-аэробике"
        },
        {
            "time": "17:20 – 17:40",
            "event": "Церемония награждения 'Кожаный мяч'"
        },
        {
            "time": "17:40 – 17:55",
            "event": "Церемония вручения спецпризов"
        },
        {
            "time": "18:00 – 18:40",
            "event": "Выступление Звонкого"
        },
        {
            "time": "18:50 – 19:30",
            "event": "Выступление ST"
        },
        {
            "time": "19:40 – 20:20",
            "event": "Выступление Mia Boyka"
        },
        {
            "time": "20:20 – 20:30",
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