"use client"

import React from 'react'

interface BtnProps {
    title: string;
    onClick?: () => void;
}


const Button = ({ title, onClick }: BtnProps) => {
    return (
        <button className={`w-full sm:w-[309px] h-[70px] rounded-lg text-lg font-bold`} style={{
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)"
        }} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button