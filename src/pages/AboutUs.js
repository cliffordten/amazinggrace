import React from "react"
import CustomHeader from '../components/header/custom-header.component'
import AboutUsSection from "../components/section/about/about-section.component";
import Footer from "../components/footer/footer.component";

const AboutUsPage = () => {
    return (
        <div>
            <CustomHeader title="About Us"/>
            <AboutUsSection/>
            <Footer/>
        </div>
    );
};
export default AboutUsPage;
