import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@actions/auth";

import { NavLink } from "react-router-dom";

import Logo from "@components/UI/Logo";
import { Button } from "@components/UI/Button";
import { Navbar, NavbarWrap, MyButton, MyMenu, MyMenuItem } from "./style";

const Navigation = () => {
    // context
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { user: currentUser } = useSelector((state) => state.auth);

    const logOut = () => {
        dispatch(logout());
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Navbar>
            <NavbarWrap>
                <Logo logo="color" />
                {isLoggedIn ? (
                    <div>
                        <MyButton
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            Test 님
                        </MyButton>
                        <MyMenu
                            sx={{ width: "auto" }}
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MyMenuItem onClick={handleClose}>
                                프로필
                            </MyMenuItem>
                            <MyMenuItem onClick={logOut}>로그아웃</MyMenuItem>
                        </MyMenu>
                    </div>
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
