import React, { ReactNode } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperProps } from "swiper/react";
import { SwiperOptions } from 'swiper/types';

type SwiperParams = {
    children: ReactNode | ReactNode[];
    isLoading: boolean;
    turnOnNavigation?: boolean;
    id: string;
    isMobile?: boolean;
};

const Slider = ({
    children,
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
        spaceBetween: 48,
        speed: 1000,
        navigation: navigation,
        style: {
            overflow: "visible",
        },
        slidesPerView: "auto",
        onInit: (e: any) => setShowRightArrow(e.allowSlideNext),
        onActiveIndexChange: (e: any) =>
            handleChangeIndex(e.activeIndex, e.progress),
        onReachBeginning: () => setShowLeftArrow(false),
        onReachEnd: () => setShowRightArrow(false),
    }

    return (
        <div className='w-full flex flex-col gap-5 mt-5'>
            <div className={`w-full flex flex-row justify-between relative`}>
                <div className={`next-btn-${id} hidden sm:absolute z-10 right-[15%]`}
                    style={{
                        display: turnOnNavigation && showRightArrow ? "block" : "none",
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}>
                    <img alt={"right-arrow"} src={"/images/desktop/slider/right-arrow.png"} />
                </div>
                <Swiper {...swiperParams}>
                    {children}
                </Swiper>
                <div className={`prev-btn-${id} hidden sm:absolute z-10 left-[15%]`}
                    style={{
                        display: turnOnNavigation && showLeftArrow ? "block" : "none",
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}>
                    <img alt={"right-left"} src={"/images/desktop/slider/left-arrow.png"} />
                </div>
            </div>
        </div>
    )
}

export default Slider