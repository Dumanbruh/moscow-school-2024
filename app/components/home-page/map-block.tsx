import React, { useState } from 'react'
import Header from '../ui/header'

interface MapProps {
    isMobile?: boolean;
}

const Map = ({ isMobile }: MapProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    const handleImageClick = (src: string) => {
        setImgSrc(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={"flex flex-col gap-8 md:gap-16 sm:px-3 md:px-40"}>
            <Header text={"карта фестиваля"} isMobile={isMobile} color='pink' />
            {/* <ModalImage
                small={"/images/desktop/home/map/1.jpg"}
                large={"/images/desktop/home/map/1.jpg"}
            />
            <ModalImage
                small={"/images/desktop/home/map/2.jpg"}
                large={"/images/desktop/home/map/2.jpg"}
            />; */}

            <img src="/images/desktop/home/map/1.jpg" onClick={() => handleImageClick("/images/desktop/home/map/1.jpg")} alt="map" />
            <img src="/images/desktop/home/map/2.jpg" onClick={() => handleImageClick("/images/desktop/home/map/2.jpg")} alt="map" />

            {isOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={imgSrc} alt="map" />
                </div>
            )}
        </div>
    )
}

export default Map