import { Navigate, Route, Routes } from "react-router-dom";
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

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideContent, setShowSideContent] = useState(false);

  return (
    <>
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showSideContent={showSideContent}
        setShowSideContent={setShowSideContent}
      />
      <Routes>
        <Route
          path={ROUTES[0]}
          element={
            <Home showMenu={showMenu} showSideContent={showSideContent} />
          }
        />
        <Route
          path={ROUTES[1]}
          element={
            <About showMenu={showMenu} showSideContent={showSideContent} />
          }
        />
        <Route
          path={ROUTES[2]}
          element={
            <Services showMenu={showMenu} showSideContent={showSideContent} />
          }
        />
        <Route path={ROUTES[3]} element={<ContactUs  />} />
        <Route path={ROUTES[4]} element={<Order  />} />
        <Route path="*" element={<Navigate to={ROUTES[0]} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
