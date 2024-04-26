"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavbarItem {
    name: string;
    url: string;
}

const Navbar = () => {
    const pathname = usePathname();

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
                <div className={"flex flex-row mt-8 gap-2 ml-40"}>
                    <Image width={58} height={48} src={"/images/desktop/logos/education.svg"} alt={"education"} />
                    <Image width={160} height={48} src={"/images/desktop/logos/mossport.svg"} alt={"mossport"} />
                </div>
                <div className={"w-full hidden sm:flex justify-center flex-row sm:gap-12"}>
                    <NavItem name="Главная" url="/" />
                    <NavItem name="Семейные активности" url="/family-activities" />
                    <NavItem name="День футбола" url="/football-day" />
                    <NavItem name="Игры Гто" url="/gto-games" />
                    <NavItem name="Киберарена" url="/cyber-arena" />
                    <NavItem name="Спорт" url="/sports" />
                    <NavItem name="День баскетбола" url="/basketball-day" />
                </div>
            </div>
        </div>
    )
}

export default Navbar