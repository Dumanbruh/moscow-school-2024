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
        <div className={`h-[107px] w-full bg-no-repeat bg-contain bg-center flex justify-center items-center`} style={{ backgroundImage: changeHeader(color) }}>
            <h1 className={"header"} style={{ fontSize: "3.7vw" }}>{text}</h1>
        </div>
    )
}

export default Header