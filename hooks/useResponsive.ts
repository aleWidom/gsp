import { useState, useEffect } from "react";
const useResponsive = () => {
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const isDesktop = width !== null && width > 768;
  
  return {
    isDesktop,
  };
};
export default useResponsive;
