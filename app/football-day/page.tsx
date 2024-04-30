"use client"

import Cubok from "../components/football-day/cubok-block";
import Festival from "../components/football-day/festival-block";
import Football from "../components/football-day/football-block";
import Match from "../components/football-day/match-block";
import Showball from "../components/football-day/showball-block";
import Cover from "../components/ui/cover";

export default function Page() {
    return (
        <div className={"flex flex-col w-full"}>
            <Cover title={`день футбола`} />
            <Showball />
            <Match />
            <Cubok />
            <Football />
            <Festival />
        </div>
    )
}