import React from "react";
import MarqueeSection from "./Marquee";
import { scrollToSection } from "../utils/scrollToSection";

const Header = ({ openModal }) => {
  return (
    <header
      className="startup-header laptop:h-[100vh] relative home"
      // style={{
      //   backgroundImage: "url(/assets/imgs/map.png)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundSize: "contain",
      // }}
      data-scroll-index="0"
    >
      {/* <div
              style={{
                backgroundImage: "linear-gradient(180deg, transparent 20%, #FFFFFF03  80%)",
              }}
              className="absolute bottom-0 w-full h-[50px] z-40"
            ></div> */}
      <div className="valign bg-img">
        <div
          id="hero"
          className="container flex justify-center gap-4 items-center flex-col laptop:flex-row laptop:px-32 wide:px-40 tablet:flex-col"
        >
          <div className="mt-24 w-full grid grid-cols-1 laptop:grid-cols-3 justify-between items-center gap-4">
            {/* image */}
            <div className="flex justify-center block laptop:hidden">
              <img src="/assets/Asset_2.png" alt="" className="w-[80%]" />
            </div>
            {/* text */}
            <div className="col-span-2 flex flex-col gap-4 w-full pt-10">
              <h1 className="text-2xl tablet:text-4xl font-bold tracking-wide">
                <span className="text-color-primary-green">Hello,</span> I'm Regi Senior Graphic Designer | Web Developer | Video Editor
                Based in Philippines
              </h1>
              <p className="text-sm tablet:text-base">Hi, I’m Regi! As a Senior Graphic Designer, Web Developer, and Video Editor based in the Philippines, I specialize in crafting impactful designs, dynamic websites, and captivating videos that bring ideas to life. With a passion for creativity and innovation, I’m here to help you make your vision stand out and connect with your audience.</p>

              <div className="flex justify-start gap-2">
                <a type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact"); // Call the utility function
                  }}
                  className="bg-color-primary-green p-2 rounded-md text-base wide:text-2xl font-bold">Let's Connect
                </a>
                <a type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    openModal("/assets/resume/resume-1.pdf", "video")
                  }}
                  className="p-2 rounded-md text-xl wide:text-2xl font-bold">Download CV <span className="icon ti-arrow-top-right text-xl wide:text-xl"></span>
                </a>
              </div>


            </div>

            {/* image */}
            <div className="flex justify-end hidden laptop:block">
              <img src="/assets/Asset_2.png" alt="" className="w-full" />
            </div>
            
          </div>



          {/* Text and Links Section */}
          {/* <div className="w-full laptop:w-[60%]">
            <div className="lg-text fw-600 text-center">
              <div className="text-4xl tablet:text-6xl mb-2">
                <span className="">P</span>ersonal{" "}
                <span className="">P</span>ortfolio
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
                    className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
                  >
                    <i className="fab fa-facebook-f text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Facebook</span>
                  </a>
                </li>
                <li className="hover-this cursor-pointer">
                  <a
                    href="tel:+639289662856"
                    className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
                  >
                    <i className="fa-brands fa-whatsapp text-md text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Whatsapp</span>
                  </a>
                </li>
                <li className="hover-this cursor-pointer">
                  <a
                    href="skype:live:.cid.70e60d46c3462681?chat"
                    className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
                  >
                    <i className="fab fa-skype text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Skype</span>
                  </a>
                </li>
                <li className="hover-this cursor-pointer">
                  <a
                    href="mailto:kingbbarawid5@gmail.com"
                    className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
                  >
                    <i className="fa-regular fa-envelope text-color-primary-green"></i>{" "}
                    <span className="hidden phone:block">Email</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mb-4">
              <a type="button" 
                onClick={(e) => {
                  e.preventDefault()
                  openModal("/assets/resume/resume-1.pdf", "video")
              }}
              className="bg-color-primary-green p-2 rounded-md text-xl wide:text-2xl font-bold mt-4">Download Resume <span className="icon ti-arrow-top-right text-xl wide:text-xl"></span></a>
            </div>
          </div> */}

          {/* Image Section */}
          {/* <div className="mt-24 laptop:mt-2 w-[90%] laptop:w-[60%] tablet:order-first relative rounded-md bg-[#FFFFFF03] overflow-hidden">
            <img className="absolute" src="/assets/imgs/hero/REGI.png" alt="Reginald" />
            <svg className="" height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#1a1a1a"></path></svg> 
            
            <div 
              style={{
                // position: "absolute",
                // left: "15px",
                // right: "15px",
                // bottom: "-15px",
                padding: "15px",
                textAlign: "center",
                background: "rgba(0, 0, 0, 0.1)",
                WebkitBackdropFilter: "blur(15px)", // Correct camelCase syntax
                backdropFilter: "blur(15px)", // Correct camelCase syntax
                // borderRadius: "10px",
                // opacity: 0,
              }}
            className="absolute bottom-0 z-50 w-full text-center p-2 text-xl phone:text-4xl"><h6 className="
            ">Reginald Barawid</h6></div>
            <div
              style={{
                backgroundImage: "linear-gradient(180deg, transparent 20%, #1a1a1a  80%)",
              }}
              className="absolute bottom-0 w-full h-[50px] z-40"
            ></div>
          </div> */}
        </div>
      </div>

      <div className="mt-12 laptop:px-32 desktop:px-36">
        <ul className="grid grid-cols-4 justify-center gap-2 fz-14">
          <li className="hover-this cursor-pointer p-3 bg-[#1d1d1d] rounded-md">
            <a
              href="https://www.facebook.com/irving.barawid.9"
              className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
            >
              <i className="fab fa-facebook-f text-color-primary-green"></i>{" "}
              <span className="hidden phone:block">Facebook</span>
            </a>
          </li>
          <li className="hover-this cursor-pointer p-3 bg-[#1d1d1d] rounded-md">
            <a
              href="tel:+639289662856"
              className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
            >
              <i className="fa-brands fa-whatsapp text-md text-color-primary-green"></i>{" "}
              <span className="hidden phone:block">Whatsapp</span>
            </a>
          </li>
          <li className="hover-this cursor-pointer p-3 bg-[#1d1d1d] rounded-md">
            <a
              href="skype:live:.cid.70e60d46c3462681?chat"
              className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
            >
              <i className="fab fa-skype text-color-primary-green"></i>{" "}
              <span className="hidden phone:block">Skype</span>
            </a>
          </li>
          <li className="hover-this cursor-pointer p-3 bg-[#1d1d1d] rounded-md">
            <a
              href="mailto:kingbbarawid5@gmail.com"
              className="hover-anim flex items-center justify-center gap-2 text-4xl phone:text-xl"
            >
              <i className="fa-regular fa-envelope text-color-primary-green"></i>{" "}
              <span className="hidden phone:block">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
