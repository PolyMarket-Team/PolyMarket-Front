import styled from "@emotion/styled";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    background: #f8f9fa;
`;

export const Section = styled.section`
    background: #f8f9fa;
    padding: 3rem 0 4rem 0;
    height: calc(100vh - 15rem);
`;

export const ProductContainer = styled.div`
    width: 80rem;
    height: 100%;
    border-radius: 8px;
    border: 1px solid #e9ecef;
    margin: 0 auto;
    margin-bottom: 20px;
    background: #fff;
    & > div {
        padding: 0 4rem;
        & > p {
            margin: 2rem 0;
            color: #212529;
            font-size: 1.8rem;
            font-weight: 600;
        }
    }
`;
