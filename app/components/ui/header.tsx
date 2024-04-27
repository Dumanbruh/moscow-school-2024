import React from 'react'

interface HeaderProps {
    text?: string;
    color?: string;
}

const Header = ({ text, color }: HeaderProps) => {
    return (
        <div className={"h-[107px] w-full bg-[url('/images/desktop/bg/header.svg')] bg-no-repeat bg-center flex justify-center items-center"}>
            <h1 className={"header"} style={{fontSize: "4.5vw"}}>{text}</h1>
        </div>
    )
}

export default Header