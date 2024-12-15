import { Link, useNavigate } from "react-router-dom";
import FB from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/x.svg";
import IG from "../assets/icons/instagram.svg";
import WA from "../assets/icons/whatsapp.svg";
import LINKDIN from "../assets/icons/linkedin.svg";
import arrow from "../assets/icons/arrowblue.svg";
import Logo from "../assets/negatLogo.svg";

import { GrLocation } from "react-icons/gr";
import { ROUTES } from "../util/data";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <article className=" w-full bg-primary flex flex-col lg:flex-row relative font-trap-Regular font-[700] z-[1000]">
      <section className="w-full h-full flex flex-col gap-y-[4%]">
        <div className=" pb-10 lg:pb-0 border-b mx-[5%] md:mt-2">
          <FooterMain />
        </div>
        <div className="mt-20  relative flex justify-between items-end opacity-30 text-white ml-[5%] pb-2">
          <h6 className="text-[60px] lg:text-[80px] xl:text-[96px] font-bold leading-[4rem]">
            NIGAT KAFFEE{" "}
            <span className="text-[32px] lg:text-[46px] lg:ml-5 hidden lg:inline">
              GET IN TOUCH
            </span>
          </h6>
          <button
            className={
              "bg-white mr-8  opacity-90 hover:opacity-95  justify-center items-center rounded-2xl w-[72px] h-[70px] mb-2 cursor-pointer hover:opacity-9 hidden lg:flex"
            }
            onClick={() => {
              window.scroll(0, 0);
              navigate(ROUTES[3]);
            }}
          >
            <img src={arrow} alt="arrow" className="" />
          </button>
        </div>

        <div className="flex gap-8 items-center lg:mt-0 lg:h-[25%] relative opacity-30 text-white ml-[5%] pb-20 uppercase font-bold  lg:hidden ">
          <h6 className="text-[32px] lg:text-[46px] lg:ml-5">GET IN TOUCh</h6>
          <button
            className={
              "bg-white mr-8  opacity-90 hover:opacity-95 flex justify-center items-center rounded-2xl w-[72px] h-[70px] mb-2 cursor-pointer hover:opacity-9"
            }
            onClick={() => {
              window.scroll(0, 0);
              navigate(ROUTES[3]);
            }}
          >
            <img src={arrow} alt="arrow" className="" />
          </button>
        </div>
      </section>
      <section
        className={`w-full lg:w-[80px] xl:w-[100px] bg-white flex flex-row lg:flex-col justify-start lg:justify-end gap-y-[5%] lg:py-[3%] pr-6 pl-2  pb-6 pt-2 lg:pb-6 lg:pt-2  z-[300]`}
      >
        <ul className="flex lg:flex-col items-end w-full gap-y-3 gap-x-2">
          <li className="text-[96px] text-secondary-light hover:text-secondary cursor-pointer">
            <Link to={ROUTES[0]}>
              <img src={FB} alt="Logo" className={"w-[22.5px] h-[22px] lg:w-[33px] lg:h-[33px] "} />
            </Link>
          </li>
          <li className="text-[96px] text-secondary-light hover:text-secondary cursor-pointer">
            <Link to={ROUTES[3]}>
              <img src={LINKDIN} alt="Logo" className={"w-[22.5px] h-[22px] lg:w-[33px] lg:h-[33px] "} />
            </Link>
          </li>
          <li className="text-[96px] text-secondary-light hover:text-secondary cursor-pointer">
            <Link to="">
              <img src={Twitter} alt="Logo" className={"w-[22.5px] h-[22px] lg:w-[33px] lg:h-[33px] "} />
            </Link>
          </li>
          <li className="text-[96px] text-secondary-light hover:text-secondary cursor-pointer">
            <Link to={ROUTES[3]}>
              <img src={IG} alt="Logo" className={"w-[22.5px] h-[22px] lg:w-[33px] lg:h-[33px] "} />
            </Link>
          </li>
          <li className="text-[96px] text-secondary-light hover:text-secondary cursor-pointer">
            <Link to={ROUTES[3]}>
              <img src={WA} alt="Logo" className={"w-[22.5px] h-[22px] lg:w-[33px] lg:h-[33px] "} />
            </Link>
          </li>
        </ul>

        <div className="lg:mt-[6vh] w-3/5  lg:w-auto flex justify-end items-end">
          <Copyright />
        </div>
      </section>
    </article>
  );
};

export const FooterMain = () => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-4 items-center ">
      <div className="w-full flex flex-col justify-start gap-4 lg:pr-[30%]">
        <GrLocation className="w-12  h-12 text-secondary opacity-70" />
        <h6 className="text-2xl sm:text-5xl lg:text-2xl font-bold text-secondary uppercase">Address</h6>
        <p className="text-secondary font-bold text-xl sm:text-2xl lg:text-xl">
          Subbelrather Strasse 15a 50823 Cologne, Germany
        </p>

        <p className="text-white mt-3 lg:mt-8 font-bold text-xl sm:text-2xl lg:text-xl ">
          Cologne District Court HRB 101987
        </p>
      </div>
      <div className="w-full h-full flex justify-start lg:justify-center mt-28 lg:mt-0">
        <Link to={ROUTES[0]}>
          <img
            src={Logo}
            alt="logo"
            className="w-[180px] h-[138px] lg:w-[207px] lg:h-[162px]"
          />
        </Link>
      </div>
      <div className="w-full h-full mt-4 lg:mt-0">
        <Links />
      </div>
      <div className="w-full h-full">
        <Contact />
      </div>
    </article>
  );
};

export const Copyright = () => {
  return (
    <section className="flex flex-col gap-y-2 items-end text-right w-full">
      <div className="font-bold text-secondary">
        <p> &copy;. 2024</p>
        <p className="lg:pt-2 leading-5">Nigat <span className="lg:hidden">Kaffee</span></p>
        <p className=" pb-10 leading-5 hidden lg:bloack">Kaffee</p>
      </div>

      <div className="font-bold text-[#717171] leading-4 w-full">
        <p>All Right Reserved</p>
      </div>
    </section>
  );
};

export const Links = () => {
  return (
    <ul className="flex flex-col gap-y-3 text-secondary hover:text-secondary lg:pl-[30%] pr-[20%]">
      <h6 className="font-bold text-3xl md:text-2xl uppercase">Links</h6>
      <li
        onClick={() => window.scroll(0, 0)}
        className="text-secondary-light  cursor-pointer capitalize font-bold"
      >
        <Link
          to={ROUTES[1]}
          className="flex justify-between items-center cursor-pointer"
        >
          <p className="text-white text-xl md:text-[16px]">About us</p>
          <button
            className={
              "bg-white mr-8  opacity-50 hover:opacity-95 flex justify-center items-center rounded-lg w-[34px] h-[34px]"
            }
          >
            <img src={arrow} alt="arrow" className="" />
          </button>
        </Link>
      </li>
      <li
        onClick={() => window.scroll(0, 0)}
        className="text-secondary-light  cursor-pointer capitalize font-bold"
      >
        <Link
          to={ROUTES[2]}
          className="flex justify-between items-center cursor-pointer"
        >
          <p className="text-white text-xl md:text-[16px]">Services</p>
          <button
            className={
              "bg-white mr-8  opacity-50 hover:opacity-95 flex justify-center items-center rounded-lg w-[34px] h-[34px]"
            }
          >
            <img src={arrow} alt="arrow" className="" />
          </button>
        </Link>
      </li>
      <li
        onClick={() => window.scroll(0, 0)}
        className="text-secondary-light  cursor-pointer capitalize font-bold"
      >
        <Link
          to={ROUTES[4]}
          className="flex justify-between items-center cursor-pointer"
        >
          <p className="text-white text-xl md:text-[16px]">Order Now</p>
          <button
            className={
              "bg-white mr-8  opacity-50 hover:opacity-95 flex justify-center items-center rounded-lg w-[34px] h-[34px]"
            }
          >
            <img src={arrow} alt="arrow" className="" />
          </button>
        </Link>
      </li>
      <li
        onClick={() => window.scroll(0, 0)}
        className="text-secondary-light  cursor-pointer capitalize font-bold"
      >
        <Link
          to={ROUTES[3]}
          className="flex justify-between items-center cursor-pointer"
        >
          <p className="text-white text-xl md:text-[16px]">Contact us</p>
          <button
            className={
              "bg-white mr-8  opacity-50 hover:opacity-95 flex justify-center items-center rounded-lg w-[34px] h-[34px]"
            }
          >
            <img src={arrow} alt="arrow" className="" />
          </button>
        </Link>
      </li>
    </ul>
  );
};

const Contact = () => {
  return (
    <article className="text-justify lg:mx-[20%]  mt-8 lg:mt-0">
      <h6 className="font-bold text-3xl md:text-2xl uppercase text-secondary">
        Contact Us
      </h6>
      <p className="text-secondary mt-4 font-bold text-xl md:text-[16px]">+(111)-098765433</p>
      <p className="text-secondary mt-4 font-bold text-xl md:text-[16px] ">+(111)-098765433</p>
    </article>
  );
};

export default Footer;
