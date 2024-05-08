"use client"

import React from 'react'

interface BtnProps {
    title: string;
    isPridu?: boolean;
    onClick?: () => void;
}


const Button = ({ title, isPridu = false, onClick }: BtnProps) => {
    return (
        <button className={`w-full sm:w-[309px] h-[70px] rounded-lg text-lg font-bold`} style={{
            background: isPridu ? "linear-gradient(90deg, #9ADEE6 0%, #6AC0C9 100%)" : "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)"
        }} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button