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
                <FreeStyle isMobile={isMobile} />
                <Schedule isMobile={isMobile} />
            </div>
        </div>
    );
}