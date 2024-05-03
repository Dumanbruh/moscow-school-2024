"use client"

import { useEffect, useState } from "react";
import Cubok from "../components/football-day/cubok-block";
import Festival from "../components/football-day/festival-block";
import Football from "../components/football-day/football-block";
import Match from "../components/football-day/match-block";
import Showball from "../components/football-day/showball-block";
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
            <Cover title={`день футбола`} />
            <Showball isMobile={isMobile} />
            <Match isMobile={isMobile} />
            <Cubok isMobile={isMobile} />
            <Football isMobile={isMobile} />
            <Festival isMobile={isMobile} />
        </div>
    )
}