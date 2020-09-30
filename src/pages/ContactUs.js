import React from "react"
import ContactUsSection from '../components/section/contact/contact-section.component'
import CustomHeader from '../components/header/custom-header.component'
import Footer from "../components/footer/footer.component";

const ContactUsPage = () => {
    return (
        <div>
            <CustomHeader title="Contact Us"/>
            <ContactUsSection/>
            <Footer/>
        </div>
    );
};
export default ContactUsPage;
