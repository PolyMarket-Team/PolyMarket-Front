import React from "react";

import Logo from "@components/UI/Logo";
import { FooterContainer, FooterWrap } from "./style";
import whiteLogo from "@assets/whiteLogo.svg";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <Logo logo={whiteLogo} />
                <span>
                    ©<a href="https://github.com/PolyMarket-Team">ㅍㄹㅁㅋ</a>,
                    Built by
                    <a href="https://github.com/PolyMarket-Team">
                        PolyMarket-Team
                    </a>
                </span>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
