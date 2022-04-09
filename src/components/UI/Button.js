import styled from "@emotion/styled";

export const Button = styled.button`
    min-width: 96px;
    min-height: 40px;
    padding: 3px 16px;
    font-size: 18px;
    font-weight: 900;
    color: #4d5159;
    background-color: #fff;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #d1d3d8;
    transition: all 80ms linear;

    &:hover {
        background-color: #80b2da;

        border: none;
    }
`;
