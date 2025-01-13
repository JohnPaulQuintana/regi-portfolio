import React, {useState} from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ProgressScrollButton from "./components/ProgressScrollButton";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RoleTitle from "./components/RoleTitle";
import About from "./components/About";
import Resume from "./components/Resume";
import WorkSection from "./components/WorkSection";
import Modal from "./components/ImageViewer"
import { useLocation } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonial";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";

const HomeSection = () => {
    const location = useLocation();
    const { state } = location.state || {}; // Access the prop
    // console.log(state)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the modal with the selected image
    const openModal = (image, type) => {
        setSelectedImage({src:image, type});
        setIsModalVisible(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedImage(null);
    };

    return (
        <div className="startup-one">
            <Loader />

            {/* Cursor */}
            <div className="cursor"></div>

            {/* Progress Scroll Button */}
            <ProgressScrollButton />

            <div id="smooth-wrapper">
                <Navbar />
                <Sidebar />

                <div id="smooth-content">
                    <main className="main-bg">
                        <Header openModal={openModal}/>
                        <div className="mt-24"></div>
                        <RoleTitle/>

                        <About />

                        <Resume openModal={openModal}/>

                        <WorkSection openModal={openModal}/>

                        <Testimonials />
                        
                        <GoogleMap />
                        <ContactForm />
                    </main>
                    <Footer />
                </div>
                 {/* Modal Component */}
                <Modal isVisible={isModalVisible} imageSrc={selectedImage?.src} type={selectedImage?.type} onClose={closeModal} />
            </div>
        </div>
    )
}

export default HomeSection