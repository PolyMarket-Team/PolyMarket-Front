import styled from "@emotion/styled";

export const Button = ({ onClick, disabled, type, children }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} type={type}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
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
    &:disabled,
    :disabled:hover,
    :disabled:active {
        background-color: #f7f8fa;
        color: #c2c8cc;
        border-color: #dadce0;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #80b2da;

        border: none;
    }
`;
