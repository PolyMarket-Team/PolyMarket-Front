import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import colorLogo from "@assets/colorLogo.svg";
import whiteLogo from "@assets/whiteLogo.svg";

const Logo = (props) => {
    return (
        <Link to="/">
            <LogoContainer logo={props.logo} />
        </Link>
    );
};

export default Logo;

// Style
const LogoContainer = styled.div`
    width: 200px;
    height: 50px;
    margin: 0 auto;
    background-image: ${(props) =>
        props.logo === "color" ? `url(${colorLogo})` : `url(${whiteLogo})`};
    background-size: cover;
`;
