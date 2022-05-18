import React, { useContext } from "react";
import AuthContext from "store/context/auth-context";
import { MyButton, MyMenu, MyMenuItem } from "./style";

const BasicMenu = () => {
    const authCtx = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
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
                <MyMenuItem onClick={handleClose}>프로필</MyMenuItem>
                <MyMenuItem onClick={authCtx.logout}>로그아웃</MyMenuItem>
            </MyMenu>
        </div>
    );
};

export default BasicMenu;
