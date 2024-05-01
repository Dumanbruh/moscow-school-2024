"use client"

import Activities from "./components/home-page/activities-block";
import Description from "./components/home-page/description-block";
import Headliners from "./components/home-page/headliners-block";
import Map from "./components/home-page/map-block";
import Schedule from "./components/home-page/schedule-block";
import Cover from "./components/ui/cover";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 1224;
    setIsMobile(checkMobile());
    window.addEventListener('resize', () => setIsMobile(checkMobile()));

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', () => setIsMobile(checkMobile()));
    };
  }, []);

  return (
    <div className={"flex flex-col w-full"}>
      <div className="relative">
        <Cover />
        <Description isMobile={isMobile} />
        <Headliners isMobile={isMobile} />
        <Map isMobile={isMobile} />
        <div className={"overflow-hidden"}>
          <Activities isMobile={isMobile} />
        </div>
        <Schedule isMobile={isMobile} />
        <div className={
          "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[500px] md:h-[700px] absolute top-[65%] md:top-[68%] left-0 -z-10"
        } />
      </div>
    </div>
  );
}
