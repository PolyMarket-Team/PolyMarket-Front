import React, { useContext } from "react";
import AuthContext from "store/context/auth-context";
import { NavLink } from "react-router-dom";

import Logo from "@components/UI/Logo";
import { Button } from "@components/UI/Button";
import { Navbar, NavbarWrap } from "./style";
import BasicMenu from "./BasicMenu";

const Navigation = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Navbar>
            <NavbarWrap>
                <Logo logo="color" />
                {authCtx.isLoggedIn ? (
                    <BasicMenu />
                ) : (
                    <NavLink to="/login">
                        <Button>로그인</Button>
                    </NavLink>
                )}
            </NavbarWrap>
        </Navbar>
    );
};

export default Navigation;
