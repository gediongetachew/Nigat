import ABOUTBG from "../../assets/about3.svg";
import img1 from "../../assets/services2.svg";
import img2 from "../../assets/services3.svg";
import img3 from "../../assets/services4.svg";
import img4 from "../../assets/services5.svg";
import img5 from "../../assets/services6.svg";

import img12 from "../../assets/s1.svg";
import img13 from "../../assets/s2.svg";
import img14 from "../../assets/s3.svg";
import img15 from "../../assets/s4.svg";
import img16 from "../../assets/s5.svg";


import img6 from "../../assets/services7.svg";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../util/data";

const More = () => {
  return (
    <article
      className="py-[5vh] px-x-axis lg:px-0 lg:pl-[4%]  pb-20 overflow-hidden lg:h-screen"
      style={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ABOUTBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="gap-10 h-[69vh] w-full hidden lg:flex">
        <section className="flex flex-col gap-3 w-1/3">
          <img
            src={img4}
            alt=""
            className="h-[40%] w-full object-cover rounded-[20px] opacity-90 "
          />
          <img
            src={img5}
            alt=""
            className="h-[60%]  w-full object-cover rounded-[20px] opacity-90 "
          />
        </section>
        <section className="w-1/3">
          <img
            src={img6}
            alt=""
            className="h-[90%] w-full object-cover rounded-[20px] opacity-90"
          />
        </section>
        <section className="grid grid-rows-2 flex-col gap-10 w-1/3">
          <div className="flex gap-10 items-stretch">
            <img
              src={img3}
              alt=""
              className="h-full w-full object-cover rounded-[20px] opacity-90"
            />
            <img
              src={img1}
              alt=""
              className="h-full w-full object-cover rounded-[20px] opacity-90"
            />
          </div>

          <img
            src={img2}
            alt=""
            className="h-full w-full object-cover rounded-[20px] opacity-90"
          />
        </section>
      </section>

      <section className="gap-4  w-full grid grid-cols-2 lg:hidden">
      <img
            src={img6}
            alt=""
            className="w-full  rounded-[20px] opacity-90 col-span-2"
          />
           <img
            src={img12}
            alt=""
            className="w-full  rounded-[20px] opacity-90 col-span-1"
          />
          <img
            src={img13}
            alt=""
            className="w-full  rounded-[20px] opacity-90 col-span-1"
          />
           <img
            src={img14}
            alt=""
            className="w-full  rounded-[20px] opacity-90 col-span-1"
          />
          <img
            src={img15}
            alt=""
            className="w-full  rounded-[20px] opacity-90 col-span-1"
          />
            <div
            className=" col-span-1"
          />
           <img
            src={img16}
            alt=""
            className="w-full  rounded-[20px] opacity-90 col-span-1"
          />
        
      </section>

      <div className="flex flex-col gap-3 lg:gap-6 justify-end lg:mt-[10vh]">
        <Link to={ROUTES[0]}>
          <img src={Logo} alt="logo" className="w-[150px] h-[45px] lg:w-[203px] lg:h-[65px]" />
        </Link>
        <p className="text-base lg:text-[32px] leading-[35px] text-white font-bold">
          SAVOR <span className="lg:ml-2">THE DELIGHT OF</span>{" "}
          <span className="text-secondary-light">ETHIOPIAN COFFEE</span>
        </p>
      </div>
    </article>
  );
};

export default More;
