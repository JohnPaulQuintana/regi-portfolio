import React from "react";
import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
const Footer = () => {
  return (
    <footer className="min-footer sub-bg pt-30 pb-30">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-4 col-md-6">
            <div className="logo">
              <Link className="logo w-[150px] desktop:w-[150px]" to="/">
                {/* <img src="/assets/imgs/logo-light.png" alt="logo" /> */}
                <span className="text-color-primary-green font-bold"><i className="fa-sharp fa-regular fa-triangle rotate-90 font-bold"></i> REGINALD</span>
              </Link>
            </div>
          </div>

          {/* Center Text */}
          <div className="col-lg-4 order-md-3">
            <div className="text-center">
              <p className="text-xl tablet:text-2xl">
                © {new Date().getFullYear()} Reginald Barawid {" "}
                <span className="underline main-color">
                  {/* <a
                    href="https://themeforest.net/user/ui-themez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UI-ThemeZ
                  </a> */}
                </span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-4 col-md-6 order-md-2 md-mb15">
            <div className="links d-flex justify-content-end">
              <ul className="rest d-flex align-items-center">
                <li>
                  <a href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default anchor behavior
                      scrollToSection("about"); // Call the utility function
                    }}
                    className="text-xl">About</a>
                </li>
                <li className="ml-30">
                  <a href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default anchor behavior
                      scrollToSection("work"); // Call the utility function
                    }}
                    className="text-xl">Portfolio</a>
                </li>
                <li className="ml-30">
                  <a href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default anchor behavior
                      scrollToSection("contact"); // Call the utility function
                    }}
                    className="text-xl">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
