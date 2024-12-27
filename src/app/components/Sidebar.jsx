import React from "react";
import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
// import Logo from "../../assets/imgs/logo-light.png"
const Sidebar = () => {
    const menuItems = [
        ["Home", "home"],
        ["About", "about"],
        ["Portfolio", "work"],
        ["Contact", "contact"],
        ["Resume", "resume"],
    ];

    return (
        <div className="hamenu one-scroll">
            <div className="logo icon-img-250">
                <span className="text-color-primary-green font-bold"><i className="fa-sharp fa-regular fa-triangle rotate-90 font-bold"></i> REGINALD</span>
            </div>
            <div className="close-menu cursor-pointer ti-close"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="menu-text">
                            <div className="text" style={{ fontSize: '12px !important' }}>
                                <h2>BARAWID</h2>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <div className="col-lg-7">
                        <div className="menu-links">
                            <ul className="main-menu rest">
                                {menuItems.map((item, index) => (
                                    <li key={index} data-scroll-nav={index}>
                                        <div className="o-hidden">
                                            <a href="#"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent the default anchor behavior
                                                    scrollToSection(item[1]); // Call the utility function
                                                }}
                                                className="link cursor-pointer dmenu">
                                                <span className="fill-text" data-text={item}>
                                                    {item[0]}
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3">
                        <div className="cont-info">
                            <div className="item mb-50">
                                <h6 className="sub-title mb-15 opacity-7">Address</h6>
                                <h5>
                                    Metro Manila,
                                    <br /> Philippines
                                </h5>
                            </div>
                            <div className="item mb-50">
                                <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                                <ul className="rest social-text">
                                    {[["Facebook", "https://www.facebook.com/irving.barawid.9"], ["WhatsApp", "tel:+639289662856"], ["Skype", "skype:live:.cid.70e60d46c3462681?chat"], ["Email", "mailto:kingbbarawid5@gmail.com"]].map(
                                        (social, index) => (
                                            <li className="mb-10" key={index}>
                                                <a href={social[1]} className="hover-this">
                                                    <span className="hover-anim">{social[0]}</span>
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="item mb-40">
                                <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                                <h5>
                                    <a href="mailto:kingbbarawid5@gmail.com">kingbbarawid5@gmail.com</a>
                                </h5>
                                <h5 className="underline mt-10">
                                    {/* <a href="#0">+1 840 841 25 69</a> */}
                                    <a href="tel:+639289662856">+639289662856</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
