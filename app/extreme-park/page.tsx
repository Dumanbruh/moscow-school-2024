"use client"

import React, { useEffect, useState } from 'react'
import Cover from '../components/ui/cover';
import Information from '../components/extreme-park/information-block';
import FreeStyle from '../components/extreme-park/freestyle-block';
import Schedule from '../components/extreme-park/schedule-block';

export default function Page() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => window.innerWidth <= 1224;
        setIsMobile(checkMobile());
        window.addEventListener('resize', () => setIsMobile(checkMobile()));

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', () => setIsMobile(checkMobile()));
        };
    }, []);

    return (
        <div className={"flex flex-col w-full"}>
            <div className="relative">
                <Cover title={"экстрим парк"} />
                <Information isMobile={isMobile} />
                <div className={"overflow-hidden"}>
                    <FreeStyle isMobile={isMobile} />
                </div>
                <Schedule isMobile={isMobile} />
                <div className={
                    "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[500px] md:h-[700px] absolute top-[65%] md:top-[60%] left-0 -z-10"
                } />
            </div>
        </div>
    );
}