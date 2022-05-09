import styled from "@emotion/styled";

export const Card = styled.div`
    display: flex;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    background-color: white;
    transition: all 0.25s ease-in-out;

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    }
`;
