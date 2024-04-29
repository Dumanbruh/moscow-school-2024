"use client"

import Activities from "../components/sports/activities-block";
import Cover from "../components/ui/cover";

export default function Page() {
    return (
        <div className={"flex flex-col w-full"}>
            <div className="relative">
                <Cover title={`спорт`} />
                <div className={"overflow-hidden"}>
                    <Activities />
                </div>
                <div className={
                    "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[700px] absolute top-[80%] left-0 -z-10"
                } />
            </div>
        </div>
    )
}