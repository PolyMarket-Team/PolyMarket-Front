import React from "react";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import styled from "@emotion/styled";

const Layout = (props) => {
    return props.auth ? (
        <>
            <Main>{props.children}</Main>
            <Footer />
        </>
    ) : (
        <>
            <Navigation />
            <Main>{props.children}</Main>
            <Footer />
        </>
    );
};

export default Layout;

const Main = styled.main`
    width: 90vw;
    margin: 0 auto;
    padding: 3rem 2rem;
`;
