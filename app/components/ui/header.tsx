import React from 'react'

interface HeaderProps {
    text?: string;
    color?: "red" | "blue" | "green" | "pink" | "light-blue";
}

const Header = ({ text, color }: HeaderProps) => {

    const changeHeader = (color?: string) => {
        let header = "";
        switch (color) {
            case "red":
                return header = "url('/images/desktop/bg/headers/header-red.svg')"
            case "blue":
                return header = "url('/images/desktop/bg/headers/header-blue.svg')"
            case "green":
                return header = "url('/images/desktop/bg/headers/header-green.svg')"
            case "pink":
                return header = "url('/images/desktop/bg/headers/header-pink.svg')"
            case "light-blue":
                return header = "url('/images/desktop/bg/headers/header-light-blue.svg')"
            default:
                return header = "url('/images/desktop/bg/headers/header-blue.svg')"
        }
    }

    return (
        <div className={`h-[133px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center`} style={{ backgroundImage: changeHeader(color) }}>
            <h1 className={"header"} style={{ fontSize: "64px", textAlign: "center", whiteSpace: "pre-line", lineHeight: "64px" }}>{text}</h1>
        </div>
    )
}

export default Header