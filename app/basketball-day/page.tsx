"use client"

import { useEffect, useState } from "react";
import BasketShow from "../components/basketball-day/basket-show-block";
import CortKing from "../components/basketball-day/cort-king-block";
import Tournament from "../components/basketball-day/tournament-block";
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
            <Cover title={`день баскетбола`} />
            <Tournament isMobile={isMobile} />
            <CortKing isMobile={isMobile} />
            <BasketShow isMobile={isMobile} />
        </div>
    );
}