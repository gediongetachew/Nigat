import { useEffect, useRef, useState } from "react";
import { ROUTES, ServiceScrollItemsSecondary } from "../../util/data";
import CallToActionBtn from "../callToActionBtn";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrowblue.svg"
import arrowwhite from "../../assets/icons/arrowright.svg"
import Scrollprogress from "../scrollprogress";



const ServicesComp = ({
  showMenu,
  showSideContent,
}: {
  showMenu: boolean;
  showSideContent: boolean;
}) => {


  return (
    <article className="pos px-x-axis relative h-[90vh] xl:h-[100vh]" > 
      <article className="lg:w-3/5 leading-[70px]  px-[2%]">
        <h6 className="uppercase text-[48px] lg:text-[96px] text-primary font-bold">Services</h6>
        <p className="font-[600] text-base lg:text-xl text-primary lg:pr-[24%] leading-[26px] mt-4">
          Ethiopian coffee experiences that delight the senses while promoting
          sustainable farming practices and community engagement.
        </p>
      </article>

      <ScrollItems showMenu={showMenu} showSideContent={showSideContent} />
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

  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(ServiceScrollItemsSecondary[0].id)

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

    setIsMouseDown(prev => !prev ? true : prev);

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
    <article className="w-full overflow-hidden">
      <div id="cursorItem" className="hidden lg:customCursor" />

      <article
        className={`scroll-tab-container overflow-hidden flex items-end  gap-10 w-[100vw] pb-6 ml-[4%] mt-10 py-8 pl-x-axis  pr-[12%] cursor-pointer ${showMenu ? "" : "z-[3000] "} `}
        ref={scrollRef}
        onMouseEnter={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {ServiceScrollItemsSecondary.map((item) => (
          <section
            key={item.id}
            className={`box-shadow relative px-12 transition-all duration-[400ms]  ${selectedCard === item.id ? "text-white bg-primary h-[50vh] lg:h-[60vh]" : "text-primary bg-white h-[46vh] lg:h-[58vh]"}  w-[340px] lg:w-full max-w-[450px] feed rounded-[30px] flex-shrink-0 flex flex-col `}
            onMouseOverCapture={() => setSelectedCard(item.id)}
          >
            <div className="flex justify-start items-center gap-8 mt-10  lg:mb-0 w-full">
              <img
                src={selectedCard === item.id ? item.icon : item.iconmobile}
                alt={item.id}
                className="w-[40px] h-[40px] lg:w-[65px] lg:h-[75px] "
              />
              <h6 className="text-[24px] lg:text-[32px] font-bold capitalize">{item.title}</h6>
            </div>
            <p className=" font-[500] py-2 lg:py-10 text-xl mt-4 lg:text-2xl leading-[26.5px]">{item.text}</p>

            <div className="flex justify-center items-center w-full absolute left-0 bottom-10 lg:bottom-10">
              <CallToActionBtn
                title="Order Now"
                containerClass={"flex items-center justify-center gap-8"}
                titleClass={"font-bold text-[24px] lg:text-[26px]  pt-1 uppercase " + ` ${selectedCard === item.id ? "text-white" : "text-primary" }`}
                btnClass={
                  "flex justify-center items-center  rounded-lg lg:rounded-xl w-[38px] h-[40px]  lg:w-[72px] lg:h-[70px] cursor-pointer hover:opacity-90" + ` ${selectedCard === item.id ? "bg-white" : "bg-primary" }`
                }
                onClick={() => navigate(ROUTES[4])}
                img={selectedCard === item.id ? arrow : arrowwhite}
              />
            </div>
          </section>
        ))}
      </article>

      <div className="pl-[8%]">
      <Scrollprogress
        scrollProgress={scrollProgress}
        containerClass="bg-[#d9d9d9] mt-8 lg:mt-16 "
        progressClass="bg-secondary"
      />
      </div>
     
    </article>
  );
};

export default ServicesComp;
