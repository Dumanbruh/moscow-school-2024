"use client";

import { handleOpenNewTab } from '@/app/common/openNewTab';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

interface NavbarItem {
    name: string;
    url: string;
}

const Navbar = () => {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const NavItem = ({ name, url }: NavbarItem) => {
        const isCurrentPage = pathname === url;

        return (
            <Link href={url} passHref>
                <div className={`flex flex-col sm:gap-12 font-mossport uppercase text-2xl text-blue ${isCurrentPage ? 'underline underline-offset-3 decoration-[#8FC47D] decoration-3' : ''}`}>
                    {name}
                </div>
            </Link>
        );
    }


    return (
        <div className={"w-full flex"}>
            <div className={"w-full flex flex-col gap-8"}>
                <div className={"flex flex-row justify-between items-center py-7 md:py-8 mx-2 sm:mx-8 md:mx-40"}>
                    <div className={"flex flex-row gap-4 sm:gap-8"}>
                        <Image
                            width={58} height={48}
                            src={"/images/desktop/logos/education.svg"}
                            className='cursor-pointer'
                            onClick={() => {
                                handleOpenNewTab("https://shkolamoskva.ru/")
                            }}
                            alt={"education"}
                        />
                        <Image
                            width={160} height={48}
                            src={"/images/desktop/logos/mossport.svg"}
                            className='cursor-pointer'
                            onClick={() => {
                                handleOpenNewTab("https://moscow.sport")
                            }}
                            alt={"mossport"}
                        />
                    </div>
                    <Image
                        width={49} height={48}
                        src={"/images/mobile/nav-icon.png"}
                        className='cursor-pointer'
                        onClick={toggleNav}
                        alt={"nav-icon"}
                    />
                </div>
                {isNavOpen && (
                    <nav className={"w-full flex flex-col gap-2 md:hidden"}>
                        <NavItem name="Главная" url="/" />
                        <NavItem name="Семейные активности" url="/family-activities" />
                        <NavItem name="День футбола" url="/football-day" />
                        <NavItem name="Игры Гто" url="/gto-games" />
                        <NavItem name="Киберарена" url="/cyber-arena" />
                        <NavItem name="Спорт" url="/sports" />
                        <NavItem name="День баскетбола" url="/basketball-day" />
                    </nav>
                )}
                <nav className={"w-full hidden md:flex justify-center flex-col md:flex-row gap-2 md:gap-12"}>
                    <NavItem name="Главная" url="/" />
                    <NavItem name="Семейные активности" url="/family-activities" />
                    <NavItem name="День футбола" url="/football-day" />
                    <NavItem name="Игры Гто" url="/gto-games" />
                    <NavItem name="Киберарена" url="/cyber-arena" />
                    <NavItem name="Спорт" url="/sports" />
                    <NavItem name="День баскетбола" url="/basketball-day" />
                </nav>
            </div>
        </div>
    )
}

export default Navbar