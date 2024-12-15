import { useEffect, useRef, useState } from "react";

import Logo from "../../assets/Logoblack.svg";
import BG from "../../assets/servicesbg.svg";

import { ROUTES, ServiceHeroScrollItems } from "../../util/data";
import { Link } from "react-router-dom";
import Scrollprogress from "../scrollprogress";

const Hero = () => {
  return (
    <article
      className="h-[100vh] sm:h-[100vh]  w-full overflow-hidden mt-[10vh] lg:mt-[14vh]"
      style={{

        top: 0,
        left: 0,
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
    
      <article className=" text-[40px] lg:text-[64px] lg:leading-[70px]  mt-16 lg:mt-[15vh] px-[5%]">
        <h6 className="font-bold uppercase text-white text-[32px] sm:text-[40px] lg:text-[64px] ">
          Service We Provide
        </h6>
        <p className="font-[600] text-base text-[15px] sm:text-xl xl:text-[20px] text-white leading-[26px] mt-4 lg:w-3/5">
          At Nigat Coffee, we’re not just about coffee; we’re about sharing
          Ethiopia’s coffee culture with the world. Whether you’re savoring a
          cup in our café or exploring unique blends through tasting, we’re here
          to make every moment extraordinary.
        </p>
      </article>

      <ScrollItems  />
    </article>
  );
};

const ScrollItems = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(5);

  const calculateProgress = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress + 5);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsMouseDown((prev) => (!prev ? true : prev));

    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    console.log(
      e.pageX - scrollRef.current.offsetLeft,
      scrollRef.current.scrollLeft
    );
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    calculateProgress();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current || !e.touches[0]) return;

    setIsMouseDown(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsMouseDown(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown || !scrollRef.current || !e.touches[0]) return;

    e.preventDefault();

    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    calculateProgress();
  };

  useEffect(() => {
    calculateProgress();
  }, []);

  return (
    <article className="">
      <div id="cursorItem" />

      <article
        className={`scroll-tab-container overflow-hidden flex flex-row gap-6 w-full pb-6 ml-[10%] lg:ml-[20%]  bottom-10 lg:bottom-20 py-8 pl-6 pr-[15%] cursor-pointer ${
         "z-[3000] "
        }`}
        ref={scrollRef}
        onMouseEnter={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {ServiceHeroScrollItems.map((item) => (
          <section
            className="bg-primary text-white w-[340px] h-[30vh] lg:h-[50vh] lg:w-full  feed max-w-[650px] pb-16 rounded-[20px] flex-shrink-0 p-6"
            key={item.id}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 50,
            }}
          />
        ))}
      </article>

      <Scrollprogress
        scrollProgress={scrollProgress}
        containerClass="w-full h-[6px] bg-[#d9d9d9] mb-10 ml-[20%] lg:ml-[22%]"
        progressClass="h-full bg-primary"
      />
    </article>
  );
};

export default Hero;
