import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
    background-image: ${(props) => `url(${props.logo})`};
    background-size: cover;
`;
