import React from "react";
import { Link } from "react-router-dom";
const Resume = () => {
    const timelineData = [
        {
          icon: "fas fa-user-tie", // Font Awesome icon class
          title: "Senior Graphic Designer & Web Developer",
          company: "Tactics Sign | United Kingdom",
          date: "2023 - Mar. 2, 2024",
          description:
            "Develop innovative and visually appealing vehicle wrap designs that align with client specifications and brand guidelines. Stay abreast of industry trends and incorporate cutting-edge design elements into projects.",
        },
        {
            icon: "fas fa-user-tie",
            title: "Head Graphic Designer & Video Editor",
            company: "Bluesky Education | Singapore",
            date: "2021 - Mar. 2003",
            description:
              "Lead a dynamic team to create standout visual content. Passionate about innovation and brand consistency, I excel in developing compelling designs and videos.",
          },
          {
            icon: "fas fa-user-tie",
            title: "Graphic Designer, Web Developer & Video Editor",
            company: "Remote Freelancer | UK, Australia, Singapore, New York",
            date: "2019 - May 2021",
            description:
              "A versatile freelance graphic designer, video editor, and web developer passionate about bringing creative visions to life through compelling designs, engaging videos, and seamless websites.",
          },
    ]
    return (
        <section className="services-crev section-padding" data-scroll-index="1">
            <div className="container desktop:px-40">
                <div className="sec-head mb-4">
                    <h6 className="sub-title text-color-primary-green mb-25 font-bold text-xl">Work Experience</h6>
                    <div className="pt-25 bord-thin-top d-flex align-items-center">
                        <h2 className="fw-600 text-u ls1 font-bold text-3xl wide:text-5xl">
                            My Experience <span className="fw-200"></span>
                        </h2>
                        <div className="ml-auto">
                            <Link to="/" className="go-more text-color-primary-green">
                                <span className="text">Download Resume</span>
                                <span className="icon ti-arrow-top-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">

                    <div className="rounded-md overflow-hidden">
                        <img
                            src="/assets/imgs/exp/exp-1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="timeline">
                    {timelineData.map((item, index) => (

                        <div key={index} className="p-2 border-l-2 flex gap-3 relative">
                            <span className="absolute -left-2 top-4"><i className="fa-solid fa-circle"></i></span>
                            <span className="ps-2">
                                <i className={`${item.icon} text-2xl border p-1 rounded-md`}></i>
                            </span>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-2xl text-color-primary-green">{item.title}</span>
                                <span className="text-xl">{item.company}</span>
                                <span className="text-sm">{item.date}</span>
                                <span className="text-sm">{item.description}</span>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume