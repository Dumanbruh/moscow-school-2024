import React, { ReactNode } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperProps } from "swiper/react";
import Arrow from "@/public/images/desktop/slider/arrow.svg";
import { SwiperOptions } from 'swiper/types';

type SwiperParams = {
    breakpoints?: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    };
    children: ReactNode | ReactNode[];
    isLoading: boolean;
    turnOnNavigation?: boolean;
    id: string;
    isMobile?: boolean;
};

const Slider = ({
    breakpoints,
    children,
    isLoading,
    isMobile,
    turnOnNavigation = true,
    id
}: SwiperParams) => {
    const [showLeftArrow, setShowLeftArrow] = React.useState(false);
    const [showRightArrow, setShowRightArrow] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isLastIndex, setIsLastIndex] = React.useState(false);

    const navigation = {
        nextEl: `.next-btn-${id}`,
        prevEl: `.prev-btn-${id}`,
    };

    const handleOnMouse = (state: any) => {
        if (activeIndex > 0) {
            setShowLeftArrow(state);
        } else {
            setShowLeftArrow(false);
        }
        if (isLastIndex) {
            setShowRightArrow(false);
        } else {
            setShowRightArrow(state);
        }
    };

    const handleChangeIndex = (index: number, lastIndex: number) => {
        setActiveIndex(index);
        if (index === 0) {
            setShowLeftArrow(false);
        } else {
            setShowLeftArrow(true);
        }
        if (lastIndex === 1) {
            setIsLastIndex(true);
            setShowRightArrow(false);
        } else {
            setIsLastIndex(false);
            setShowRightArrow(true);
        }
    };

    const swiperParams: SwiperProps = {
        modules: [Navigation],
        spaceBetween: isMobile ? "16px" : "48px",
        speed: 1000,
        navigation: navigation,
        style: {
            overflow: "visible",
            width: isMobile ? "100%" : "1100px",
            display: "relative",
            height: "100%",
        },
        slidesPerView: isMobile ? 1 : "auto",
        resistance: false,
        onInit: (e: any) => setShowRightArrow(e.allowSlideNext),
        onActiveIndexChange: (e: any) =>
            handleChangeIndex(e.activeIndex, e.progress),
        onReachBeginning: () => setShowLeftArrow(false),
        onReachEnd: () => setShowRightArrow(false),
    }

    return (
        <div className='w-full flex flex-col gap-5 mt-5'>
            <div className={`w-full flex flex-row justify-between relative`}>
                <div className={`next-btn-${id} absolute z-10 right-[15%]`}
                    style={{
                        display: turnOnNavigation && showRightArrow ? "block" : "none",
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}>
                    <img src={"/images/desktop/slider/right-arrow.png"} />
                </div>
                <Swiper {...swiperParams}>
                    {children}
                </Swiper>
                <div className={`prev-btn-${id} absolute z-10 left-[15%]`}
                    style={{
                        display: turnOnNavigation && showLeftArrow ? "block" : "none",
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}>
                    <img src={"/images/desktop/slider/left-arrow.png"} />
                </div>
            </div>
        </div>
    )
}

export default Slider