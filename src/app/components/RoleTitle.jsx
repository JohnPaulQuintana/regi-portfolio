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

    const skills = [
        {
            icon: "/assets/imgs/ps.png",
            title: "Adobe Photoshop",
            experience: "8 Years",
            description: "Expertise in photo editing, graphic design, and creating stunning visuals.",
        },
        {
            icon: "/assets/imgs/illus.png",
            title: "Adobe Illustrator",
            experience: "8 Years",
            description: "Specialized in vector design, logos, and creative branding assets to bring ideas to life.",
        },
        {
            icon: "/assets/imgs/ind.png",
            title: "Adobe InDesign",
            experience: "4 Years",
            description: "Experienced in creating professional layouts for magazines, brochures, and eBooks.",
        },
        {
            icon: "/assets/imgs/prem.png",
            title: "Adobe Premiere",
            experience: "2 Years",
            description: "Proficient in video editing and post-production, crafting high-quality visual stories.",
        },
        {
            icon: "/assets/imgs/fig.png",
            title: "Figma",
            experience: "2 Years",
            description: "Skilled in UI/UX design, prototyping, and collaborative workflows for web and app design.",
        },
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
                <div className="flex flex-col laptop:flex-row gap-4">

                    <div className="grid grid-cols-1 gap-2">
                        {titleData.map((role) => (
                            <div key={role.id} className="h-fit flex">
                                <div className="relative item-box shadow-md rounded-lg flex flex-col w-full">
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
                    <div className="border w-1 bg-white relative hidden laptop:block">
                        <i class="fa-solid fa-circle absolute top-16 -left-2"></i>
                        <i class="fa-solid fa-circle absolute top-28 -left-2"></i>
                        <i class="fa-solid fa-circle absolute top-[28%] -left-2"></i>
                        <i class="fa-solid fa-circle absolute top-[38%] -left-2"></i>
                        <i class="fa-solid fa-circle absolute top-[48%] -left-2"></i>
                        <i class="fa-solid fa-circle absolute top-[68%] -left-2"></i>
                        <i class="fa-solid fa-circle absolute top-[73%] -left-2"></i>
                        <i class="fa-solid fa-circle absolute top-[90%] -left-2"></i>
                    </div>
                    <div className="flex flex-col gap-4 border-gray-900">
                    {skills.map((skill, index) => (
                        
                        <div key={index} className="item-box shadow-md rounded-lg p-4 flex flex-col mobile:flex-row gap-2 w-full">
                            <div className="flex justify-between items-center">
                                <img src={skill.icon} className="w-16 h-16 object-contain" alt="Photoshop" />
                                <span className="text-color-primary-green font-bold text-2xl">0{index+1}</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-color-primary-green text-2xl wide:text-4xl">{skill.title}</h3>
                                <span className="text-sm mb-2 text-white">Experience: {skill.experience}</span>
                                <p className="text-gray-200 text-sm mt-1">
                                   {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}

                       

                    </div>
                </div>

            </div>
        </section>
    )
}

export default RoleTitle