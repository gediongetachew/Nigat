import { useEffect, useRef, useState } from "react";

import Logo from "../../assets/Logoblack.svg";
import BG from "../../assets/aboutbg.svg";

import { ROUTES, ServiceHeroScrollItems } from "../../util/data";
import { Link } from "react-router-dom";
import Scrollprogress from "../scrollprogress";

const Hero = ({
  showMenu,
  showSideContent,
}: {
  showMenu: boolean;
  showSideContent: boolean;
}) => {
  return (
    <article
      className="pl-x-axis py-6 h-[100vh] w-full overflow-hidden"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full">
        <Link to={ROUTES[0]}>
          <img src={Logo} alt="logo" className="w-[203px] h-[65px]" />
        </Link>
      </section>

      <article className="lg:w-full text-[32px] lg:text-[64px] leading-[52px] lg:leading-[70px] font-bold mt-16  lg:mt-[12vh] px-[5%]">
        <h6 className="text-primary">
          SAVOR <span className="lg:hidden">THE DELIGHT</span>
          <span className="pl-14 hidden lg:inline">THE DELIGHT OF</span>
        </h6>
        <h6 className="text-secondary text-[48px] lg:text-[64px]">
          <span className="lg:hidden text-primary text-[32px] lg:text-[64px] mr-4">
            OF
          </span>
          ETHIOPIAN COFFEE
        </h6>
        <p className="font-[400] text-[25px] text-primary mt-6 lg:w-1/2 leading-[22px]">
        At Nigat Coffee, we are more than a coffee company – we are ambassadors of Ethiopia’s rich coffee heritage.
        </p>
      </article>

      <article>
        <ScrollItems showMenu={showMenu} showSideContent={showSideContent} />
      </article>
    </article>
  );
};

const ScrollItems = ({
  showMenu,
  showSideContent,
}: {
  showMenu: boolean;
  showSideContent: boolean;
}) => {
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

    setIsMouseDown((prev) => {
      if (scrollRef.current && scrollRef.current.offsetLeft && !prev) {
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
      }

      return !prev ? true : prev;
    });
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

    // e.preventDefault();

    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    calculateProgress();
  };

  useEffect(() => {
    calculateProgress();
  }, []);

  return (
    <article className="w-full overflow-hidden">
      <div id="cursorItem" className="hidden lg:customCursor" />

      <article
        className={`scroll-tab-container overflow-hidden flex flex-row gap-6 w-full pb-6 lg:ml-[15%] absolute bottom-10 lg:bottom-20 py-8 pl-2 lg:pl-6 pr-[20%] cursor-pointer ${
          showMenu ? "" : "z-[3000] "
        } `}
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
            className=" text-white w-[340px] h-[27vh] lg:h-[35vh] lg:w-full feed max-w-[550px] pb-16 rounded-[20px] flex-shrink-0 p-6"
            key={item.id}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </article>

      <Scrollprogress
        scrollProgress={scrollProgress}
        containerClass="bg-[#d9d9d9] absolute bottom-6 lg:bottom-2 lg:bottom-10 ml-3 lg:ml-[16%]"
        progressClass="bg-secondary"
      />
    </article>
  );
};

export default Hero;
