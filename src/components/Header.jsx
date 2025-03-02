import React, { useState } from "react";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="header">
      {/* Mobile View: Logo on Left, Menu Button on Right */}
      <div className="mobileView header-mobile">
        <img className="mobile-logo" src={logo} alt="Logo" />
        <section className="menu-section">
          <div>EN <i className="fa fa-angle-down"></i></div>
          <div>|</div>
          <div>Sign Up</div>
          <i className="fa fa-bars menu-icon" onClick={() => setIsDrawerOpen(!isDrawerOpen)}></i>
        </section>
      </div>

      {/* Desktop View: Full Navigation */}
      <ul className="leftList bigView">
        <li><img src={logo} alt="Logo" /></li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>

      <section className="bigView menu-items me-4">
        <div>EN <i className="fa fa-angle-down"></i></div>
        <div>|</div>
        <div>Sign Up</div>
        <button className="demo-btn">Demo</button>
      </section>

      {/* Mobile Drawer Menu */}
      {isDrawerOpen && (
        <div className={`drawer-overlay ${isDrawerOpen ? "show" : ""}`} onClick={onClose}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>✖</button>
            <ul className="drawerList">
              <li><img src={logo} alt="Logo" /></li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Blogs</li>
              <li>Contact</li>
              <button className="demo-btn">Demo</button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
