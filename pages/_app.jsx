import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import React from "react";
import NavBar from "@/components/shared/NavBar";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";


const MyApp = ({Component, pageProps}) => {
    const isHomePage = Component.name === 'Home'

    return (
        <div className="portfolio-app">
            <NavBar />
            { isHomePage && <Hero /> }
            <div className="container">
                <Component {...pageProps} />
            </div>
            { isHomePage && <Footer /> }
        </div>
    );
}

export default MyApp;
