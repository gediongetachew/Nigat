import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import ABOUTBG from "../assets/about3.svg";
import ABOUTBG2 from "../assets/about2.svg";
import ABOUTBG4 from "../assets/About4.svg";
import ABOUTBG5 from "../assets/About5.svg";
import ABOUTBG6 from "../assets/About6.svg";
import ABOUTBG7 from "../assets/About7.svg";
import ABOUTBG8 from "../assets/About8.svg";
import Logo from "../assets/Logo.svg";

import CallToActionBtn from "../components/callToActionBtn";
import { Link, useNavigate } from "react-router-dom";
import Services from "../components/Home/Services";
import Order from "../components/Home/Order";
import { ROUTES } from "../util/data";

const Home = ({
  showMenu,
  showSideContent,
}: {
  showMenu: boolean;
  showSideContent: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="h-[90vh] md:h-[80vh] lg:h-[70vh] " />
      <Hero />

      <About />
      <article
        className="py-[5vh]  pb-20 relative"
        style={{
          height: "110vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ABOUTBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      

        <section className="px-[8%] ">
          <div
            className="rounded-[30px] mt-12 h-[30vh] sm:h-[60vh] md:h-[75vh] lg:h-[80vh]"
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
        <section className=" flex sm:hidden justify-between px-[9%] ">
          
        <div
            className="rounded-[30px] mt-4 h-[15vh] "
            style={{
              width: "45%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="rounded-[30px] mt-4 h-[15vh] "
            style={{
              width: "50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ABOUTBG5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>
        <section className=" flex sm:hidden justify-between px-[9%]">
          
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
              className="rounded-[30px] mt-4 h-[15vh] "
              style={{
                width: "50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${ABOUTBG7})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </section>
          <section className=" flex sm:hidden justify-end px-[9%]">
          
         
            <div
              className="rounded-[30px] mt-4 h-[15vh] "
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
         
        <p className="text-white w-[45%] md:w-[50%] mt-12 font-bold text-[12px] sm:text-[18px] md:text-lg lg:text-[15px] ">
            Ethiopian coffee experiences that delight the senses while promoting
            sustainable farming practices and community engagement. To be the
            leading coffee brand in Germany, celebrated for our unique Ethiopian
            blends and commitment to ethical sourcing and sustainability.
          </p>
          <Link to={ROUTES[0]}>
            <img
              src={Logo}
              alt="logo"
              className="w-[120px] h-[66px] lg:w-[252px] lg:h-[82px] ml-10 "
            />
          </Link>
        </section>
      </article>

      <Services />

      <Order />
    </main>
  );
};

export default Home;
