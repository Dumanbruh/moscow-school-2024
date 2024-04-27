import React from 'react'

interface HeaderProps {
    title?: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div className={"flex h-[107px] w-full bg-[url('/images/desktop/bg/footer-header.svg')] bg-no-repeat"}>{title}</div>
    )
}

export default Header