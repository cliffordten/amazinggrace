
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUser,
    faLock,
    faEnvelope,
    faKey,
    faMapMarkerAlt,
    faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

import HomePage from './pages/HomePage';
import $ from 'jquery'
import "./App.css"
import ProductsPage from './pages/Products';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/OurGallery';
import ContactUsPage from './pages/ContactUs';
import AboutUsPage from './pages/AboutUs';
$()

library.add(faUser, faLock, faEnvelope, faKey, faMapMarkerAlt, faPhoneAlt);

const App = () => (
  <React.Fragment>
        <Switch>
            
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route exact path="/our-gallery" component={GalleryPage} />
            <Route exact path="/contact-us" component={ContactUsPage} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/">
                <Redirect to="/home"/>
            </Route>
        </Switch>
    </React.Fragment>
);

export default App;
