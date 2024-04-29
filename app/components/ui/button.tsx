"use client"

import React from 'react'

interface BtnProps {
    title: string;
    onClick?: () => void;
    w?: string;
    h: string;
}


const Button = ({ title, onClick, w, h }: BtnProps) => {
    return (
        <button className={`w-[${w}] h-[${h}] rounded-lg text-lg font-bold`} style={{
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)"
        }} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button