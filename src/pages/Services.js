import React from "react"
import ServicesSection from "../components/section/servicess/services-section.component";
import CustomHeader from "../components/header/custom-header.component";
import Footer from "../components/footer/footer.component";

const ServicesPage = () => {
    return (
        <div>
            <CustomHeader title="Our Services"/>
            <ServicesSection/>
            <Footer/>
        </div>
    );
};
export default ServicesPage;
