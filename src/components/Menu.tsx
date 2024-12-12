import Menu0ne from "../assets/menu.svg";
import MenuTwo from "../assets/menu-2.svg";
import LogoSmall from "../assets/LogoSmall.svg";

import FB from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/x.svg";
import IG from "../assets/icons/instagram.svg";
import WA from "../assets/icons/whatsapp.svg";
import LINKDIN from "../assets/icons/linkedin.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { ROUTES } from "../util/data";
import CallToActionBtn from "./callToActionBtn";

const Menu = ({
  showMenu,
  setShowMenu,
  showSideContent,
  setShowSideContent,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showSideContent: boolean;
  setShowSideContent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
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
    <article className=" bg-gray-400 ]">
      <button
        type="button"
        className={`w-[80px] lg:w-[100px] bg-white flex justify-center items-center absolute   top-0 right-0 h-[10vh] border-l-8 ${
          addborder ? " border-secondary" : "border-white"
        }`}
        style={{
          zIndex: 300,
        }}
        onClick={handleMenuClick}
      >
        <img
          src={showMenu ? MenuTwo : Menu0ne}
          alt="menu"
          className={
            showMenu ? "" : "w-[46px] lg:w-[70px] h-[26px] lg:h-[35px]"
          }
        />
      </button>
      

      <SideMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showSideContent={showSideContent}
        setShowSideContent={setShowSideContent}
      />
    </article>
  );
};

const SideMenu = ({
  showMenu,
  setShowMenu,
  showSideContent,
  setShowSideContent,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showSideContent: boolean;
  setShowSideContent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const handleMenuClick = () => {
    setShowMenu((prev) => {
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
    <article
      className={`absolute   ${
         pathname === ROUTES[0]
          ? "h-[125vh] sm:h-screen lg:h-[100vh] "
          : "h-screen lg:h-[140vh]"
      }   ${
        (pathname === ROUTES[3] || pathname === ROUTES[4])
          ? "w-[80px] lg:w-[100px]"
          : "w-full xl:w-2/3" 
      } ${
       (pathname === ROUTES[3] || pathname === ROUTES[4])
          ? "w-[80px] lg:w-[90px]"
          : "w-full xl:w-2/3"
      }  top-0 right-0  flex justify-end z-[200]`} 
    >
      {showMenu && (
        <div className="w-full bg-primary   ">
          <ul className="pt-[12vh] w-full h-full bg-gradient-to-r from-primary to-[#004F56C2] opacity-100  flex flex-col items-start justify-start gap-y-0 lg:gap-y-16 pl-[10%] text-left uppercase leading-[42px]">
            <li className="text-[22px] xl:text-[64px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[0]} onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li className="text-[22px] xl:text-[64px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[1]} onClick={handleMenuClick}>
                Who we are
              </Link>
            </li>
            <li className="text-[22px] xl:text-[64px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[2]} onClick={handleMenuClick}>
                Services
              </Link>
            </li>
            <li className="text-[22px] xl:text-[64px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[3]} onClick={handleMenuClick}>
                COntact us
              </Link>
            </li>
            <li className="text-[22px] xl:text-[64px] flex justify-between items-center text-secondary-light hover:text-secondary font-semibold cursor-pointer">
              <Link to={ROUTES[4]} onClick={handleMenuClick}>
                Order Now
              </Link>
              <CallToActionBtn
                title=""
                containerClass={"flex items-center justify-center gap-12"}
                titleClass={"font-bold text-[22px] text-secondary pt-1"}
                btnClass={
                  "bg-secondary flex justify-center items-center rounded-lg lg:rounded-2xl w-[41px] h-[40px] lg:w-[72px] lg:h-[70px] cursor-pointer hover:opacity-90"
                }
                onClick={() => {
                  handleMenuClick();
                  navigate(ROUTES[4]);
                }}
              />
            </li>

            <div className="absolute px-[6%] left-0 bottom-8 w-full flex flex-col gap-3 justify-start text-white">
              <img
                src={LogoSmall}
                alt="Logo"
                className={"w-[47px] h-[36px] "}
              />
              <p className="font-semibold text-xs lg:text-xl">
                SAVOR THE DELIGHT OF ETHIOPIAN COFFEE
              </p>
            </div>
          </ul>
        </div>
      )}
      {showSideContent && (
        <section
          className={`${
            showMenu ? "w-[80px] lg:w-[100px]" : "w-[80px] lg:w-[100px]"
          } bg-white flex flex-col items-center justify-center sm:justify-end gap-y-[5%] pb-[7%] pr-3 lg:pr-8 pl-2`}
        >
          {pathname !== ROUTES[3] && pathname !== ROUTES[4] && (
            <>
              <ul className="flex flex-col items-end w-full gap-y-3">
                <li className="text-[96px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
                  <Link to={ROUTES[0]}>
                    <img src={FB} alt="Logo" className={"w-[24px] h-[24px] "} />
                  </Link>
                </li>
                <li className="text-[96px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
                  <Link to={ROUTES[3]}>
                    <img
                      src={LINKDIN}
                      alt="Logo"
                      className={"w-[24px] h-[24px] "}
                    />
                  </Link>
                </li>
                <li className="text-[96px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
                  <Link to={ROUTES[1]}>
                    <img
                      src={Twitter}
                      alt="Logo"
                      className={"w-[24px] h-[24px] "}
                    />
                  </Link>
                </li>
                <li className="text-[96px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
                  <Link to={ROUTES[2]}>
                    <img src={IG} alt="Logo" className={"w-[24px] h-[24px] "} />
                  </Link>
                </li>
                <li className="text-[96px] text-secondary-light hover:text-secondary font-semibold cursor-pointer">
                  <Link to={ROUTES[2]}>
                    <img src={WA} alt="Logo" className={"w-[24px] h-[24px] "} />
                  </Link>
                </li>
              </ul>

              <LanguageBtns />

              <Address />
            </>
          )}
        </section>
      )} 
    </article>
  );
};

export const LanguageBtns = () => {
  return (
    <section className="upperclass flex justify-end w-[100px] gap-2 font-bold text-xs lg:text-lg">
      <button
        type="button"
        className={`text-secondary border-b-4 border-secondary`}
      >
        EN
      </button>
      <p>/</p>
      <button type="button" className={`text-[#717171] `}>
        DE
      </button>
    </section>
  );
};

export const Address = () => {
  return (
    <section className="flex flex-col gap-y-2 items-end text-right pl-5">
      <GrLocation className="w-6  h-6 text-secondary" />

      <div className="font-bold text-[7px] lg:text-xs text-secondary">
        <p>Subbelrather </p>
        <p>Strasse 15a </p>
        <p>50823 Cologne</p>
        <p>Germany</p>
      </div>

      <div className="font-bold text-[7px] lg:text-sm text-primary">
        <p>Cologne </p>
        <p>District Court </p>
        <p>HRB 101987</p>
      </div>
    </section>
  );
};

export default Menu;
