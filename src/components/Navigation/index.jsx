import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "@components/UI/Logo";
import { Button } from "@components/UI/Button";
import { Navbar, NavbarWrap } from "./style";
import colorLogo from "@assets/colorLogo.svg";

const Navigation = () => {
    return (
        <Navbar>
            <NavbarWrap>
                <Logo logo={colorLogo} />
                <NavLink to="login">
                    <Button>로그인</Button>
                </NavLink>
            </NavbarWrap>
        </Navbar>
    );
};

export default Navigation;
