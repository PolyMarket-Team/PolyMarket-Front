import styled from "@emotion/styled";

export const Button = ({ onClick, disabled, type, children }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} type={type}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    min-width: 9.6rem;
    min-height: 4rem;
    padding: 0.4rem 1.6rem;
    font-size: 1.8rem;
    color: #4d5159;
    background-color: #80b2da;
    border-radius: 4px;
    border: 1px solid #d1d3d8;
    cursor: pointer;
    transition: all 80ms linear;
    &:hover {
        box-shadow: 0 0 0 1px #80c0da;
    }

    &:disabled,
    :disabled:hover,
    :disabled:active {
        background-color: #f7f8fa;
        color: #c2c8cc;
        border-color: #dadce0;
        cursor: default;
    }
`;
