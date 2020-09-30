import React from "react"
import CustomHeader from '../components/header/custom-header.component'
import GallerySection from "../components/section/gallery/gallery-section.component";
import Footer from "../components/footer/footer.component";

const GalleryPage = () => {
    return (
        <div>
           <CustomHeader title="Our Gallery"/>
            <GallerySection/>
            <Footer/>
        </div>
    );
};
export default GalleryPage;
