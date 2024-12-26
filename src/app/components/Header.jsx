import React from "react";
import MarqueeSection from "./Marquee";

const Header = ({ onOpenForm }) => {
  return (
    <header
      className="startup-header laptop:h-[100vh] relative flex justify-center items-center"
      style={{
        backgroundImage: "url(/assets/imgs/map.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
      data-scroll-index="0"
    >
      <div className="valign bg-img">
        <div
          id="hero"
          className="container tablet:mt-0 flex justify-center gap-4 items-center flex-col laptop:flex-row laptop:px-32 wide:px-40 tablet:flex-col"
        >
          {/* Image Section */}
          <div className="laptop:w-[60%] tablet:order-first"> 
            <img src="/assets/imgs/hero/REGI.png" alt="Reginald" />
            
            <div
              style={{
                backgroundImage: "linear-gradient(180deg, transparent 20%, #1a1a1a  80%)",
              }}
              className="absolute bottom-0 w-full h-[50px] z-50"
            ></div>
          </div>

          {/* Text and Links Section */}
          <div className="w-full laptop:w-[60%]">
            <div className="lg-text fw-600 text-center">
              <div className="text-4xl tablet:text-6xl mb-2">
                <span className="text-color-primary-green">R</span>eginald{" "}
                <span className="text-color-primary-green">B</span>arawid
              </div>
              <div className="grid grid-cols-1 p-2">
                <MarqueeSection />
              </div>
            </div>
            <div className="w-full mt-2">
              <ul className="grid grid-cols-4 gap-6 justify-center fz-14">
                <li className="hover-this cursor-pointer">
                  <a
                    href="https://www.facebook.com/irving.barawid.9"
                    className="hover-anim flex items-center justify-center gap-2 text-2xl phone:text-xl"
                  >
                    <i className="fab fa-facebook-f text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Facebook</span>
                  </a>
                </li>
                <li className="hover-this cursor-pointer">
                  <a
                    href="tel:+639289662856"
                    className="hover-anim flex items-center justify-center gap-2 text-2xl phone:text-xl"
                  >
                    <i className="fa-brands fa-whatsapp text-md text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Whatsapp</span>
                  </a>
                </li>
                <li className="hover-this cursor-pointer">
                  <a
                    href="skype:live:.cid.70e60d46c3462681?chat"
                    className="hover-anim flex items-center justify-center gap-2 text-2xl phone:text-xl"
                  >
                    <i className="fab fa-skype text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Skype</span>
                  </a>
                </li>
                <li className="hover-this cursor-pointer">
                  <a
                    href="mailto:kingbbarawid5@gmail.com"
                    className="hover-anim flex items-center justify-center gap-2 text-2xl phone:text-xl"
                  >
                    <i className="fa-regular fa-envelope text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Email</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <a type="button" className="bg-color-primary-green p-2 rounded-md text-xl wide:text-4xl font-bold mt-4">Download Resume <span className="icon ti-arrow-top-right text-xl wide:text-3xl"></span></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
