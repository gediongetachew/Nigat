import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact";
import Order from "./pages/Order";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ROUTES } from "./util/data";
import { useState } from "react";
import Logo from "./assets/Logo.svg";
import Logo2 from "./assets/Logo2.svg"
import Menu0ne from "./assets/menuWhite.svg";
import MenuTwo from "./assets/menuPrimary.svg";
import LogoSmall from "./assets/LogoSmall.svg";
import CallToActionBtn from "./components/callToActionBtn";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideContent, setShowSideContent] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const addborder = pathname !== ROUTES[3];
  const handleMenuClick = () => {
    setShowMenu((prev) => {
      console.log(prev);
      if (
        pathname !== ROUTES[0] &&
        pathname !== ROUTES[3] &&
        pathname !== ROUTES[4]
      ) {
        if (!prev) {
          setShowSideContent(true);
        } else {
          setShowSideContent(false);
        }
      }

      return !prev;
    });
  };
  return (
    <article>
      <article className="absolute top-0 left-0 w-full bg-transparent flex items-center justify-start p-5 pr-10 font-trap-Regular font-[700]">
  
        <section className={`w-[20%] lg:w-[30%] ${(pathname === ROUTES[2] || pathname === ROUTES[4] )? "flex" : "hidden" }  lg:flex`}>
          <Link to={ROUTES[0]}>
            {pathname === ROUTES[1] || pathname === ROUTES[2] || pathname === ROUTES[4] ? (
              <img src={Logo2} alt="logo" className="w-[81px] lg:w-[203px] h-[27px] lg:h-[65px] " />
            ) : (
              <img
                src={Logo}
                alt="logo"
                className="w-[81px] lg:w-[203px] h-[450px] lg:h-[65px]"
              />
            )}
          </Link>
        </section>
        <section className="w-[80%] lg:w-[50%]  hidden lg:flex lg:justify-end ">
        <ul className="pt-[2vh] w-full h-full   flex  items-center justify-between  pl-[5%] text-left uppercase leading-[42px]">
            <li className="text-[15px] xl:text-[16px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[0]} >
                Home
              </Link>
            </li>
            <li className="text-[15px] xl:text-[16px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[1]} >
                Who we are
              </Link>
            </li>
            <li className="text-[15px] xl:text-[16px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[2]} >
                Services
              </Link>
            </li>
            <li className="text-[15px] xl:text-[16px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[3]} >
                COntact us
              </Link>
            </li>
            <li className="text-[15px] xl:text-[16px] flex justify-between text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[4]} >
                Order Now
              </Link>
             
            </li>

            
          </ul>
        </section>
 
      </article>
       <article
        className="full-height-article absolute top-0 right-0 h-full flex"
        
      >
        <Header
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          showSideContent={showSideContent}
          setShowSideContent={setShowSideContent}
        />
      </article> 
      <Routes>
        <Route
          path={ROUTES[0]}
          element={
            <Home  />
          }
        />
        <Route
          path={ROUTES[1]}
          element={
            <About  />
          }
        />
        <Route
          path={ROUTES[2]}
          element={
            <Services  />
          }
        />
        <Route path={ROUTES[3]} element={<ContactUs />} />
        <Route path={ROUTES[4]} element={<Order />} />
        <Route path="*" element={<Navigate to={ROUTES[0]} />} />
      </Routes>
      <Footer />
    </article>
  );
}

export default App;
