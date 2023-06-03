import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const LocomotiveScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smoothMobile: true,
      smooth: true, // Enable smooth scrolling
      // Add any additional options as needed
    });

    return () => {
      scroll.destroy(); // Clean up the scroll instance on component unmount
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default LocomotiveScrollWrapper;
