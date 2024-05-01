import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState(
    typeof window !== "undefined" ? window.screen.width : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDeviceWidth(window.screen.width);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return deviceWidth;
};
