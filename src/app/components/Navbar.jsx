import React from "react";
import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
const Navbar = () => {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "work" },
    // { name: "Portfolio", link: "#portfolio" },
    // { name: "Pricing", link: "/" },
    { name: "Contact", id: "contact" },
    { name: "Resume", id: "resume" },
    // { name: "Career", link: "/" },
  ];

  return (
    <nav className="navbar navbar-expand-lg nav-crev">
      <div className="container">
        {/* Logo */}
        <Link className="logo w-[150px] desktop:w-[150px]" to="/">
          {/* <img src="/assets/imgs/logo-light.png" alt="logo" /> */}
          <span className="text-color-primary-green font-bold"><i className="fa-sharp fa-regular fa-triangle rotate-90 font-bold"></i> REGINALD</span>
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* Navbar Links */}
        <div
          className="hidden laptop:block justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li className="nav-item " key={index}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor behavior
                    scrollToSection(item.id); // Call the utility function
                  }}
                  data-scroll-nav={index}
                >
                  <span className="rolling-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Toggle */}
        <div className="topnav">
          <div className="menu-icon cursor-pointer">
            <span className="icon ti-align-right"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
