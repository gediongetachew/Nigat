import BG from "../../assets/Nigat1.svg";
import BGTWO from "../../assets/Nigat2.svg";

import Logo from "../../assets/Logo.svg";
import HOMEONE from "../../assets/home1.svg";
import HOMETWO from "../../assets/home2.svg";
import HOMETHREE from "../../assets/home3.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../util/data";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Scrollprogress from "../scrollprogress";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [background, setBackground] = useState(BG);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const percentage = (100 * progress) / 6;
    return percentage;
  };

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();

    img1.src = BG;
    img2.src = BGTWO;

    img1.onload = img2.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

  useEffect(() => {
    let interval: any;

    if (imagesLoaded && inView) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 6.5) {
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
        setBackground((prevBackground) => (prevBackground === BG ? BGTWO : BG));
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [inView, imagesLoaded]);

  return (
    <>
    
    <article
        ref={ref}
        className="px-x-axis pr-[80px]  py-6 bg-primary justify-center  lg:hidden h-[100vph "
      
      >
        <div className="w-full ">
          <section className="w-full">
            <Link to={ROUTES[0]}>
              <img
                src={Logo}
                alt="logo"
                className="w-[81px] lg:w-[203px] h-[40px] lg:h-[65px]"
              />
            </Link>
          </section>

          <section className="px-[2%] w-full font-trap-Regular  flex flex-col mt-[10vh] lg:mt-[7vh] uppercase text-[36px]  lg:text-[54px] text-white font-bold leading-[52px] lg:leading-[6.5rem]">
            <p>
              SAVOR THE DELIGHT<span className="lg:hidden"> OF</span>{" "   }
            </p>
            <p>
              <span className="hidden lg:block "> OF </span>
              <span className="lg:ml-10 text-[45px] lg:text-[96px] text-secondary ">
                ETHIOPIAN{" "}
              </span>
            </p>
            <p className="text-[48px] lg:text-[96px] text-secondary">COFFEE</p>

            <p className=" text-white max-w-[636px] font-light text-4xl lg:text-2xl normal-case mt-8">
            Wake up to the essence of Ethiopia. Wake up to Nigat.
            </p>
          </section>

          <section
            className="px-[2%] flex flex-col gap-12 justify-end pb-[20vh] items-center text-white pr-[12px]   w-full  "
            style={{
              backgroundImage: `url(${BGTWO})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background-image 1s ease-in-out",
            }}
          >
            <div className="border w-full rounded-3xl px-4 lg:px-8 py-4 flex justify-end items-center gap-4 bg-primary mt-[15vh]  ">
              <img
                src={HOMETWO}
                alt="logo"
                className="w-[30px] h-[36px] mt-2"
              />
              <h6 className="capitalize text-[16px] lg:text-2xl font-bold   w-full">
              coffee brand in Germany
              </h6>
            </div>
          </section>
        </div>
      </article>

      <article
        ref={ref}
        className="px-x-axis pr-[0px] py-6 bg-primary justify-center h-screen hidden lg:flex overflow-hidden w-full"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          zIndex: -1,
        }}
      >
        <div className="w-full h-full flex flex-col">
          <section className="flex-1 h-[50dvp] lg:h-[20%] flex flex-col mt-[15vh] lg:mt-[20vh] uppercase text-[32px] lg:text-[64px] text-white font-trap-Regular leading-[52px] lg:leading-[5rem]">
            <p className="font-[700]">
              SAVOR THE DELIGHT<span className="lg:hidden"> OF</span>{" "}
            </p>
            <p className="text-nowrap w-full">
              <span className="inline lg:inline font-[700] "> OF </span>
              <span className="lg:ml-2 text-[48px] lg:text-[66px] text-secondary font-[700]">
                ETHIOPIAN{" "}
              </span>
            </p>  
            <p className="text-[48px] lg:text-[66px] text-secondary font-[700]  ">COFFEE</p>

            <p className="text-white max-w-[636px] text-base lg:text-2xl normal-case mt-2 font-[400]">
            Wake up to the essence of Ethiopia. Wake up to Nigat.
            </p>
          </section>

          <section className="font-trap-Regular  gap-10 justify-start items-end text-white flex pr-52 w-full">
            <div className="border rounded-3xl px-8 py-4 justify-start items-start lg:col-span-1 gap-4 hidden lg:flex w-full">
              <img
                src={HOMEONE}
                alt="logo"
                className="w-[40px] h-[46px] mt-2"
              />
              <div className="">
                <h6 className="capitalize text-[40px]  font-[700] leading-[2rem]">
                  Deliver Ethiopian Excellence
                </h6>
                <p className="pt-4 font-[400]">
                  Ethiopian coffee experiences that delight the senses while
                  promoting{" "}
                </p>
              </div>
            </div>

            <div className="border rounded-3xl px-4 lg:px-8 py-4 flex justify-start items-start col-span-3 lg:col-span-1 gap-4 bg-primary w-full">
              <img
                src={HOMETWO}
                alt="logo"
                className="w-[30px] h-[36px]"
              />
              <div className="">
                <h6 className="capitalize text-[14px] lg:text-2xl font-[700] leading-[3rem]">
                  coffee brand in Germany
                </h6>
              </div>
            </div>

            <div className="border rounded-3xl px-4 lg:px-8 py-4 flex justify-start items-start col-span-3 lg:col-span-1 gap-4 bg-primary w-full">
              <img
                src={HOMETHREE}
                alt="logo"
                className="w-[30px] h-[36px]"
              />
              <div className="">
                <h6 className="capitalize text-[14px] lg:text-2xl font-[700] leading-[3rem]">
                  reflecting the joy of coffee
                </h6>
              </div>
            </div>
          </section>
        </div>

       {imagesLoaded && <section className={"absolute right-[92.4px] z-[1000] w-2 h-[705px]  "}>
          <div
            className={"bg-secondary"}
            style={{
              height: calculateProgress() + "%",
            }}
          />
        </section>}
      </article>
    </>
  );
};

export default Hero;
