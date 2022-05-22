import styled from "@emotion/styled";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Navbar = styled.nav`
    position: sticky;
    width: 100%;
    background-colr: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;
export const NavbarWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 16px 0;
`;

export const MyButton = styled(Button)({
    fontSize: "1.8rem",
    fontWeight: 500,
});

export const MyMenu = styled(Menu)({});

export const MyMenuItem = styled(MenuItem)({
    fontSize: "1.5rem",
    width: "12rem",
    height: "4rem",
});
