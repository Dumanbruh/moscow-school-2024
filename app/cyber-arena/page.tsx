"use client"

import { useEffect, useState } from "react";
import Information from "../components/cyber-arena/information-block";
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
            <Cover title={`киберарена`} />
            <Information isMobile={isMobile} />
        </div>
    )
}