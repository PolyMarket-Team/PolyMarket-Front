import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
    background-color: #495057;
    color: #fff;
    padding: 5rem 0;
`;

export const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1024px;
    margin: 0 auto;

    > span {
        color: #c4c4c4;
        margin-left: 3rem;

        > a,
        a:visited,
        a:active {
            margin: 0 0.3rem;
            text-decoration: none;
            color: #818080;
        }
    }
`;
