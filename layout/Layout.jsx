import React, { useState } from "react";
import SidebarNav from "../components/sidebar/index";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../components/header";
import { Route } from "react-router-dom";

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="main-wrapper">
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <SidebarNav />
        <Route
          render={(props) => (
            <Header {...props} onMenuClick={() => toggleMobileMenu()} />
          )}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
