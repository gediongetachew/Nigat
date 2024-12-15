import { useEffect, useState } from "react";

import Menu from "./Menu";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../util/data";

const Header = ({
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

  useEffect(() => {
    if (
      pathname === ROUTES[0] ||
      pathname === ROUTES[3] ||
      pathname === ROUTES[4]
    )
      setShowSideContent(true);
    else {
      setShowSideContent(false);
    }
  }, [pathname]);

  return (
    <article
      className={`font-trap-Regular px-x-axis py-6 h-full  absolute right-0`}
    >
    
     
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showSideContent={showSideContent}
        setShowSideContent={setShowSideContent}
      />
    </article>
  );
};

export default Header;
