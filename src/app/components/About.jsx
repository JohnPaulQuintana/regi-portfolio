import React from "react";

const About = () => {
 

  return (
    <section
      className="about-crev section-padding sub-bg position-re ontop desktop:px-40 about"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="row lg-marg">
          {/* Left Block */}
          <div className="col-lg-6">
            <div className="left-block mt-100 md-mb50">
              <div className="d-flex align-items-center">
                <div>
                  <div className="info">
                    <h6 className="font-bold text-xl tracking-wider">Reginald <br /> Barawid</h6>
                    {/* <p className="nowrap text-base mt-1 tracking-wider">Director</p> */}
                  </div>
                </div>
                <div>
                  <div className="img fit-img radius-30 bg-[#FFFFFF05]">
                    <img src="assets/imgs/hero/REGI.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="mz-shap">
                <svg
                  height="100%"
                  viewBox="0 0 610 547"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="col-lg-6 valign">
            <div className="content full-width">
              <div className="sec-head mb-3">
                <h6 className="sub-title mb-2 text-color-primary-green font-bold wide:text-xl">About Me</h6>
                <h2 className="text-3xl wide:text-5xl font-bold">Your Partner in Creativity and Innovation.</h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text">
                    <p>
                    Hi! I’m a <span className="text-color-primary-green">Reginald</span> Senior Graphic Designer, Web Developer and Video Editor from the Philippines with 8 years of experience. I specialize in creating impactful designs and videos that bring your ideas to life. Let’s create something amazing together!.
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="skills-box">
                      <div className="skill-item mb-3">
                        <h5 className="sub-title mb-2">Graphics Design</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="100%"></div>
                        </div>
                      </div>
                      <div className="skill-item mb-3">
                        <h5 className="sub-title mb-2">Web Development</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="98%"></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <h5 className="sub-title mb-3">Video Production</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="95%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="team section-padding pb-0">
          <div className="row">
            <h2 className="text-3xl wide:text-5xl font-thin mb-4 mt-4">Behind the <span className="font-bold">Sofreg Solutions</span></h2>
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 laptop:mb-12" key={index}>
                <div className="item md-mb50">
                  <div className="img bg-[#FFFFFF03]">
                    <img className="" src={member.img} alt={member.name} />
                    <div className="info">
                      <span className="fz-18">{member.role}</span>
                      <h6 className="fz-24 font-bold">{member.name}</h6>
                    </div>
                  </div>
                  <div className="social">
                  <svg height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#1a1a1a"></path></svg>
                    <div className="links">
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
