"use client"

import BasketShow from "../components/basketball-day/basket-show-block";
import CortKing from "../components/basketball-day/cort-king-block";
import Tournament from "../components/basketball-day/tournament-block";
import Cover from "../components/ui/cover";

export default function Page() {
    return (
        <div className={"flex flex-col w-full"}>
            <Cover title={`день 
            баскетбола`} />
            <Tournament />
            <CortKing />
            <BasketShow />
        </div>
    );
}