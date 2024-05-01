"use client"
import React from 'react'

interface HeaderProps {
    text?: string;
    color?: "red" | "blue" | "green" | "pink" | "light-blue";
    isMobile?: boolean;
}

const Header = ({ text, color, isMobile = false }: HeaderProps) => {

    const changeHeader = (color?: string, isMobile?: boolean) => {
        let header = "";
        switch (color) {
            case "red":
                return header = isMobile ? "url('/images/mobile/bg/headers/header-red.svg')" : "url('/images/desktop/bg/headers/header-red.svg')"
            case "green":
                return header = isMobile ? "url('/images/mobile/bg/headers/header-green.svg')" : "url('/images/desktop/bg/headers/header-green.svg')"
            case "pink":
                return header = isMobile ? "url('/images/mobile/bg/headers/header-pink.svg')" : "url('/images/desktop/bg/headers/header-pink.svg')"
            case "light-blue":
                return header = "url('/images/desktop/bg/headers/header-light-blue.svg')"
            default:
                return header = isMobile ? "url('/images/mobile/bg/headers/header-blue.svg')" : "url('/images/desktop/bg/headers/header-blue.svg')"
        }
    }

    return (
        <div className={`h-[52px] md:h-[133px] w-full bg-no-repeat bg-center flex justify-center items-center`} style={{ backgroundImage: changeHeader(color, isMobile) }}>
            <h1 className={"header"} style={{ fontSize: isMobile ? "32px" : "64px", textAlign: "center", whiteSpace: "pre-line", lineHeight: isMobile ? "32px" : "64px" }}>{text}</h1>
        </div>
    )
}

export default Header