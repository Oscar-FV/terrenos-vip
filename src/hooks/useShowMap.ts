import { useEffect, useState } from "react";

export function useShowMap() {
  const [isMapVisible, setIsMapVisible] = useState<boolean>(
    window.matchMedia("(min-width: 640px)").matches,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMapVisible(window.matchMedia("(min-width: 640px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return{
    isMapVisible
  }
}
