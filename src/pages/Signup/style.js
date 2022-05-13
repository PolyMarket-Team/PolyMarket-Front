import styled from "@emotion/styled";
export const Main = styled.main`
    height: 100%;
`;

export const Section = styled.section`
    padding-top: 40px;
    width: calc(100% - 30px);
    height: 100%;
    width: 36rem;
    margin: 0 auto;
    > div {
        padding: 10rem 0;
    }
`;

export const Header = styled.header`
    text-align: left;
    font-size: 2rem;
    font-weight: 600;
    line-height: 5rem;
    border-bottom: 1px solid #dadce0;
    margin-bottom: 3rem;
`;

export const Form = styled.form`
    margin: 0 auto;
    width: 40rem;
    max-width: 40rem;

    & > button {
        width: 100%;
    }
`;

export const Label = styled.label`
    margin-bottom: 1.6rem;
    display: flex;
    flex-direction: column;

    > button {
        margin-bottom: 1rem;
    }

    > span {
        color: ${(props) => (props.error ? `#f77` : `#111`)};
        display: block;
        text-align: left;
        padding-bottom: 0.8rem;
        font-size: 1.5rem;
        cursor: pointer;
        font-weight: 600;
    }
`;

export const Input = styled.input`
    border-radius: 4px;
    font-size: 1.5rem;

    border: 1px solid ${(props) => (props.error ? `#f77` : `#dbdbdb`)};
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    margin: 0 0 2rem;
    width: 100%;
    color: 
    background-color: 
    padding: 1.2rem;
    height: 4.2rem;
    padding: 1.3rem;

    &:focus {
        box-shadow: 0 0 0 5px ${(props) =>
            props.error
                ? `rgba(255, 199, 199, 0.5)`
                : `rgba(130, 224, 250, 0.5)`};
    }
`;

export const Error = styled.div`
    font-size: 1.4rem;
    color: #f77;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
`;

export const Success = styled.div`
    color: #2eb67d;
`;
export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 7rem;
    background: #f7f8fa;
    padding: 2rem 1.6rem;

    .auth-message {
        align-self: flex-start;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .auth-container {
        width: 100%;
        & > div {
            padding: 0 1.6rem;
            height: 4.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            border: 1px solid
                ${(props) => (props.isExpire ? "#dbdbdb" : "#e01e5a")};
            & > input {
                margin: 0;
                outline: none;
                border: none;
                font-size: 1.5rem;
            }
            .timer {
                width: 6rem;
                text-align: center;
                font-size: 14px;
                margin: 0 1rem;
                color: #e01e5a;
                padding: 3px;
            }
            .auth-button {
                height: 3rem;
                width: 4.5rem;
                background: #80b2da;
                color: #fff;
                font-size: 1.4rem;
                outline: none;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: all 80ms linear;
                &:hover {
                    background: #406481;
                }
            }
        }
    }
`;

export const LinkContainer = styled.p`
    display: flex;
    width: 40rem;
    max-width: 40rem;
    margin: 3rem auto;
    font-size: 1.3rem;

    & a {
        color: #1264a3;
        font-weight: 600;
        margin-left: 5px;

        &:hover {
            text-decoration: underline;
        }
    }
`;
