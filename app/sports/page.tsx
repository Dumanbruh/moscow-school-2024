"use client"

import { useEffect, useState } from "react";
import Activities from "../components/sports/activities-block";
import Cover from "../components/ui/cover";

export default function Page() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => window.innerWidth <= 1224;
        setIsMobile(checkMobile());
        window.addEventListener('resize', () => setIsMobile(checkMobile()));

        return () => {
            window.removeEventListener('resize', () => setIsMobile(checkMobile()));
        };
    }, []);


    return (
        <div className={"flex flex-col w-full"}>
            <div className="relative">
                <Cover title={`спорт`} />
                <div className={"overflow-hidden"}>
                    <Activities isMobile={isMobile} />
                </div>
                <div className={
                    "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[436px] md:h-[700px] absolute top-[70%] md:top-[80%] left-0 -z-10"
                } />
            </div>
        </div>
    )
}