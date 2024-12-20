import { useState } from "react";
import ABOUTBG from "../../assets/about3.svg";
import ABOUTBG2 from "../../assets/about2.svg";
import ABOUTBG4 from "../../assets/About4.svg";
import ABOUTBG5 from "../../assets/About5.svg";
import ABOUTBG6 from "../../assets/About6.svg";
import ABOUTBG7 from "../../assets/About7.svg";
import ABOUTBG8 from "../../assets/About8.svg";
import Logo from "../../assets/Logo.svg";

import { Link } from "react-router-dom";
import { ROUTES } from "../../util/data";

export default function Images() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className="py-[5vh]  pb-20 relative font-trap-Regular transition-all duration-300 ease-in-out "
      style={{
        minHeight: "100px",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ABOUTBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <section className="">
        <section className="px-[8%] flex md:hidden ">
          <div
            className="rounded-[30px] mt-12 h-[30vh] sm:h-[60vh] md:h-[75vh] lg:h-[80vh] "
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* <p className= " xs: hidden md:flex text-white w-[80%] mt-12 font-bold text-[16px] font-Trap ">
              Ethiopian coffee experiences that delight the senses while promoting
              sustainable farming practices and community engagement. To be the
              leading coffee brand in Germany, celebrated for our unique Ethiopian
              blends and commitment to ethical sourcing and sustainability.
            </p> */}
        </section>
        <section className="flex sm:hidden justify-between px-[9%]">
          <div
            className="rounded-[30px] mt-4 h-[15vh] flex sm:hidden "
            style={{
              width: "45%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="rounded-[30px] mt-4 h-[15vh]"
            style={{
              width: "50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>
        <section className="flex md:hidden justify-between px-[9%]">
          <div
            className="rounded-[30px] mt-4 h-[15vh] "
            style={{
              width: "45%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="rounded-[30px] mt-4 h-[15vh]"
            style={{
              width: "50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>
        <section className="flex md:hidden justify-end px-[9%]">
          <div
            className="rounded-[30px] mt-4 h-[15vh]"
            style={{
              width: "50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG8})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>
        <section className="font-trap-Regular font-[600] w-full flex md:hidden md:px-[9%] items-end justify-start sm:justify-between absolute bottom-4 lg:bottom-10 left-[8px] lg:right-[60px] lg:relative md:pt-5">
          <p className="text-white w-[45%] md:w-[50%] mt-12 font-bold text-[10px] sm:text-[8px] lg:text-[15px]">
            Ethiopian coffee experiences that delight the senses while promoting
            sustainable farming practices and community engagement. To be the
            leading coffee brand in Germany, celebrated for our unique Ethiopian
            blends and commitment to ethical sourcing and sustainability.
          </p>
          <Link to={ROUTES[0]}>
            <img
              src={Logo}
              alt="logo"
              className="w-[120px] h-[66px] lg:w-[252px] lg:h-[82px] mt-[107px] ml-10"
            />
          </Link>
        </section>
      </section>

      <section className={`hidden md:flex relative`}>
        <div className={`grid grid-cols-3 gap-4 p-10 w-full ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 `}>
          <div className="flex  gap-4 col-span-2 flex-col w-full h-auto ">
            <div className="w-full  flex items-end gap-4">
              <div className="w-[40%] ">
                <img
                  src={ABOUTBG4}
                  className="w-[100%]"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "50vh",
                    borderRadius: 30,
                  }}
                />
              </div>
              <div className=" w-[60%]">
                <img
                  src={ABOUTBG2}
                  className="w-[100%]"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "60vh",
                    borderRadius: 30,
                  }}
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-4">
              <div className="w-[50%] text-white">
                <p>
                  {" "}
                  Ethiopian coffee experiences that delight the senses while
                  promoting sustainable farming practices and community
                  engagement. To be the leading coffee brand in Germany,
                  celebrated for our unique Ethiopian blends and commitment to
                  ethical sourcing and sustainability.
                </p>
              </div>
              <div className="w-[50%]">
                <img
                  src={ABOUTBG6}
                  className="col-span-3"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "40vh",
                    borderRadius: 30,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-end gap-32 flex-col w-full h-auto ">
            <div className="w-full col-span-4 ">
              <img
                className="col-span-4"
                src={ABOUTBG8}
                style={{
                  objectFit: "cover",
                  width: "90%",
                  height: "60vh",
                  borderRadius: 30,
                  marginTop: 10,
                }}
              />
            </div>
            <div className="w-full flex justify-end">
              <Link to={ROUTES[0]}>
                <img
                  src={Logo}
                  alt="logo"
                  className=" mr-[108px] w-[120px] h-[66px] lg:w-[252px] lg:h-[82px] ml-10 transition-opacity duration-300 group-hover:opacity-0"
                />
              </Link>
            </div>
          </div>
        </div>
        <section
          className={`absolute ${
            isHovered ? "opacity-0" : "opacity-100"
          } transition-opacity duration-700`}
        >
          <section className="relative">
            <section className="px-[8%] ">
              <div
                className="rounded-[30px] mt-12 h-[30vh] sm:h-[60vh] md:h-[75vh] lg:h-[80vh] "
                style={{
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${ABOUTBG2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* <p className= " xs: hidden md:flex text-white w-[80%] mt-12 font-bold text-[16px] font-Trap ">
              Ethiopian coffee experiences that delight the senses while promoting
              sustainable farming practices and community engagement. To be the
              leading coffee brand in Germany, celebrated for our unique Ethiopian
              blends and commitment to ethical sourcing and sustainability.
            </p> */}
            </section>
            <section className="flex sm:hidden justify-between px-[9%]">
              <div
                className="rounded-[30px] mt-4 h-[15vh] transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  width: "45%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${ABOUTBG4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="rounded-[30px] mt-4 h-[15vh] transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  width: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${ABOUTBG5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </section>
            <section className="flex sm:hidden justify-between px-[9%]">
              <div
                className="rounded-[30px] mt-4 h-[15vh] transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  width: "45%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${ABOUTBG6})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="rounded-[30px] mt-4 h-[15vh] transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  width: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${ABOUTBG7})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </section>
            <section className="flex sm:hidden justify-end px-[9%]">
              <div
                className="rounded-[30px] mt-4 h-[15vh] transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  width: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${ABOUTBG8})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </section>
            <section className="font-trap-Regular font-[600] w-full flex md: px-[9%] items-end justify-start sm:justify-between absolute bottom-4 lg:bottom-10 left-[8px] lg:right-[60px] lg:relative md:pt-5">
              <p className="text-white w-[45%] md:w-[50%] mt-12 font-bold text-[10px] sm:text-[8px] lg:text-[15px] transition-opacity duration-300 group-hover:opacity-0">
                Ethiopian coffee experiences that delight the senses while
                promoting sustainable farming practices and community
                engagement. To be the leading coffee brand in Germany,
                celebrated for our unique Ethiopian blends and commitment to
                ethical sourcing and sustainability.
              </p>
              <Link to={ROUTES[0]}>
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[120px] h-[66px] lg:w-[252px] lg:h-[82px] mt-[107px] ml-10 transition-opacity duration-300 group-hover:opacity-0"
                />
              </Link>
            </section>
          </section>
        </section>
      </section>
    </article>
  );
}
