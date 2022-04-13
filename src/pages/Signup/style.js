import styled from "@emotion/styled";

export const Main = styled.main`
    width: 36rem;
    margin: 0 auto;
`;

export const Header = styled.header`
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 46px;
    letter-spacing: -0.75px;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const Form = styled.form`
    margin: 0 auto;
    width: 400px;
    max-width: 400px;

    & > button {
        width: 100%;
    }
`;

export const Label = styled.label`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;

    > button {
        margin-bottom: 1rem;
    }

    & > span {
        display: block;
        text-align: left;
        padding-bottom: 8px;
        font-size: 15px;
        cursor: pointer;
        line-height: 1.46666667;
        font-weight: 700;
    }
`;

export const Input = styled.input`
    border-radius: 4px;
    --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
    border: 1px solid var(--saf-0);
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    margin: 0 0 20px;
    width: 100%;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    padding: 12px;
    height: 44px;
    padding-top: 11px;
    padding-bottom: 13px;
    font-size: 18px;
    line-height: 1.33333333;

    &:focus {
        --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
        box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
    }
`;

export const Error = styled.div`
    color: #e01e5a;
    margin: 8px 0 16px;
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
    padding: 20px 16px;

    .auth-message {
        align-self: flex-start;
        font-size: 13px;
        margin-bottom: 1rem;
    }

    .auth-container {
        width: 100%;
        & > div {
            padding: 0 16px;
            height: 45px;
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
                font-size: 15px;
            }
            .timer {
                margin: 0 1rem;
                color: #e01e5a;
            }
            .auth-button {
                height: 31px;
                width: 45px;
                background: #80b2da;
                color: #fff;
                font-size: 14px;
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
    font-size: 13px;

    margin: 3rem auto;

    width: 400px;
    max-width: 400px;

    & a {
        color: #1264a3;
        text-decoration: none;
        font-weight: 700;
        margin-left: 5px;

        &:hover {
            text-decoration: underline;
        }
    }
`;
