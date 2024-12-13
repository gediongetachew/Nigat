import { useNavigate } from "react-router-dom";
import BG from "../../assets/Services.svg";
import BGtwo from "../../assets/Services.svg";

import CallToActionBtn from "../callToActionBtn";
import { ROUTES, ServiceScrollItems } from "../../util/data";
import { useEffect, useRef, useState } from "react";
import Scrollprogress from "../scrollprogress";

const Services = () => {
  const navigate = useNavigate();

  return (
    <article
      className="px-x-axis relative overflow-hidden py-[10rem] lg:pt-0  bg-orange-400"
      style={{
        backgroundImage: `url(${BG})`,
        width: "100%",
        height:"100%"
      }}
    >
    

      <section className="font-trap-Regular  text-white w-full lg:w-1/2 ml-[5%] lg:ml-[5%] mb-[5vh] md:mb-[15vh] lg:mt-[10vh] lg:mb-0 pr-[80px] lg:pr-0">
        <h2 className="font-[700] text-[40px] lg:text-[90px] leading-[52px] lg:leading-[6rem] uppercase ">
          Service We Provide
        </h2>
        <p className="mt-7 text-justify lg:w-[70%] lg:text-[16px] font-[600]">
          At Nigat Coffee, we’re not just about coffee; we’re about sharing
          Ethiopia’s coffee culture with the world. Whether you’re savoring a
          cup in our café or exploring unique blends through tasting, we’re here
          to make every moment extraordinary.
        </p>
      </section>

      <ScrollItems />
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
    <article>
      <div id="cursorItem" className=" " />
      <article
        className="scroll-tab-container overflow-hidden flex flex-row gap-6  lg:bottom-24 w-full pb-6 lg:ml-[18%] py-8 pl-6 pr-10 lg:pr-[25%] cursor-pointer"
        ref={scrollRef}
        onMouseEnter={handleMouseDown}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {ServiceScrollItems.map((item) => (
          <section
            className="font-trap-Regular bg-primary text-white w-[800px] lg:w-[45%]  feed max-w-[450px] pb-6 lg:pb-16 rounded-[20px] flex-shrink-0 p-4 lg:p-6"
            key={item.id}
          >
            <div className="flex justify-start items-center gap-4 mb-6">
              <img src={item.icon} alt={item.id} className="" />

              <h6 className="font-[700] text-2xl capitalize">{item.title}</h6>
            </div>
            <p className="font-[400]">{item.text}</p>
          </section>
        ))}
      </article>

      <Scrollprogress
        scrollProgress={scrollProgress}
        containerClass="bg-[#d9d9d9]  bottom-6 lg:bottom-16 ml-4 lg:ml-[17%]"
        progressClass="bg-primary"
      />
    </article>
  );
};

export default Services;
