import React from "react";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

const Layout = (props) => {
    return (
        <>
            <Navigation />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
