import React from "react";
import { Link } from "react-router-dom";
const RoleTitle = () => {

    const titleData = [
        {
            id: 1,
            number: "01.",
            title: "Senior Graphic Designer",
            description: "Transforming ideas into stunning visual identities with high-impact graphic designs tailored for branding, marketing, and advertising.",
            icon: ``,
            link: "/"
        },
        {
            id: 2,
            number: "02.",
            title: "Dynamic Video Producer",
            description: "Crafting compelling video content with seamless editing, motion graphics, and storytelling to captivate audiences and boost engagement.",
            icon: ``,
            link: "/"
        },
        {
            id: 3,
            number: "03.",
            title: "Full-Stack Web Developer",
            description: "Building custom, user-focused websites that blend modern aesthetics with robust functionality to drive business growth and online presence.",
            icon: ``,
            link: "/"
        }
    ];

    return (
        <section className="services-crev section-padding" data-scroll-index="1">
            <div className="container desktop:px-40">
                <div className="sec-head mb-4">
                    <h6 className="sub-title text-color-primary-green mb-25 font-bold text-xl">My Specialize</h6>
                    <div className="pt-25 bord-thin-top d-flex align-items-center">
                        <h2 className="fw-600 text-u ls1 font-bold text-3xl wide:text-5xl">
                        The Complete Digital Solutions <span className="fw-200"> Specialist</span>
                        </h2>
                        {/* <div className="ml-auto">
                            <Link to="/" className="go-more">
                                <span className="text">View all Services</span>
                                <span className="icon ti-arrow-top-right"></span>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {titleData.map((role) => (
                        <div key={role.id} className="h-full flex">
                            <div className="relative item-box shadow-md rounded-lg p-6 flex flex-col justify-between w-full">
                                <span className="text-2xl font-bold text-color-primary-green w-fit absolute right-10 hidden phone:block">{role.number}</span>
                                <div className="flex flex-col">
                                    
                                    <div className="px-2 text-color-primary-green">
                                        <h5 className="text-2xl wide:text-4xl font-bold">{role.title}</h5>
                                    </div>
                                </div>
                                <div className="mt-4 flex-grow">
                                    <p className="text-white">{role.description}</p>
                                </div>
                               
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default RoleTitle