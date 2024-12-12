import { useNavigate } from "react-router-dom";
import BG from "../../assets/Order.svg";
import CUP from "../../assets/cup.svg";
import SNAK from "../../assets/snak.svg";

import CallToActionBtn from "../callToActionBtn";
import { ROUTES } from "../../util/data";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Scrollprogress from "../scrollprogress";

const Order = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [background, setBackground] = useState(CUP);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const percentage = (100 * progress) / 12;
    return percentage;
  };

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();

    img1.src = CUP;
    img2.src = SNAK;

    img1.onload = img2.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

  useEffect(() => {
    let interval: any;

    if (imagesLoaded && inView) {
      interval = setInterval(() => {
        setProgress((prev) => {

          if (prev >= 12) {
            return 0.5;
          }
          return prev + 0.05;
        });
      }, 50);
    }

    return () => clearInterval(interval);
  }, [inView, imagesLoaded]);

  useEffect(() => {
    let interval: any;

    if (imagesLoaded && inView) {
      interval = setInterval(() => {
        setBackground((prevBackground) =>
          prevBackground === CUP ? SNAK : CUP
        );
      }, 12000);
    }

    return () => clearInterval(interval);
  }, [inView, imagesLoaded]);

  return (
    <article
      ref={ref}
      className=" font-trap-Regular px-[5%] py-6 relative overflow-hidden bg-white lg:h-screen"
      style={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="lg:mt-10 flex justify-start">
        <CallToActionBtn
          title="Order Now"
          containerClass={"flex items-center justify-center gap-12"}
          titleClass={"font-bold  text-[24px] md:text-[32px]  text-primary pt-1 uppercase text-nowrap"}
          btnClass={
            "bg-primary flex justify-center items-center rounded-2xl w-[60px] md:w-[72px] h-[60px] md-[70px] cursor-pointer hover:opacity-90"
          }
          onClick={() => navigate(ROUTES[4])}
        />
      </div>

      <section
        className="w-full lg:w-1/2 lg:h-[90%] absolute top-[5vh] right-0 opacity-90 hidden lg:block"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      ></section>

      <section className=" flex flex-col justify-start items-start mt-[8vh] lg:mt-[23vh] h-full">
        <section className="lg:w-1/2">
          <h6 className="text-[48px] lg:text-[96px] text-primary uppercase font-[700] leading-[53px] lg:leading-[105.5px]">
            Get youR{" "}
          </h6>
          <h6 className="text-[48px] lg:text-[96px] text-primary uppercase font-[700] leading-[53px] lg:leading-[105.5px]">
            coffee !
          </h6>
          <p className="text-primary text-lg lg:text-2xl text-justify mt-4 leading-[26.5px] font-[600]">
            Ethiopian coffee experiences that delight the senses while promoting
            sustainable farming practices and community engagement. celebrated
            for our unique Ethiopian blends and commitment to ethical sourcing
            and sustainability.
          </p>
        </section>

        <section
          className="w-full lg:w-1/2 h-[60vh] opacity-90 lg:hidden"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${background})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out",
          }}
        />
      </section>

      <Scrollprogress
        scrollProgress={calculateProgress()}
        containerClass="bg-[#d9d9d9] absolute bottom-0 left-0"
        progressClass="bg-secondary-light"
      />
    </article>
  );
};

export default Order;
