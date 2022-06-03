import React from "react";
import Navigation from "@components/Navigation";
import Modal from "@components/Modal";
import Footer from "@components/Footer";
import { useSelector } from "react-redux";

const Layout = (props) => {
    const notiState = useSelector((state) => state.noti);
    return props.auth ? (
        <>
            {notiState && <Modal />}
            <>{props.children}</>
        </>
    ) : (
        <>
            <Navigation />
            {notiState && <Modal />}
            <>{props.children}</>
            <Footer />
        </>
    );
};

export default Layout;
