import { useEffect, useState } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0});

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener("resize", () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  }, []);
  
  return windowSize;
}

export default useWindowSize