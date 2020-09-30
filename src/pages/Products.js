import React from "react"
import CustomHeader from '../components/header/custom-header.component'
import ProductSection from "../components/section/products/product-section.component";
import Footer from "../components/footer/footer.component";

const ProductsPage = () => {
    return (
        <div>
            <CustomHeader title="Our Products"/>
            <ProductSection/>
            <Footer/>
        </div>
    );
};
export default ProductsPage;
