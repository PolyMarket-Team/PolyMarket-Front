import React, { useContext, useState } from "react";
import useInput from "@hooks/useInput";
import AuthContext from "store/context/auth-context";
import * as actions from "@actions/auth";
import { Link, useNavigate } from "react-router-dom";

import Logo from "@components/UI/Logo";
import { Button } from "@components/UI/Button";
import Layout from "layouts";
import { Form, Label, Input, Error, LinkContainer } from "@pages/Signup/style";
import { Section, Header } from "./style";

const Login = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);

    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/;

    const {
        value: email,
        hasError: emailHasError,
        valueChangeHandler: onChangeEmail,
        inputBlurHandler: onBlurEmail,
    } = useInput((value) => emailRegex.test(value));
    const {
        value: password,
        hasError: passwordHasError,
        valueChangeHandler: onChangePassword,
        inputBlurHandler: onBlurPassword,
    } = useInput((value) => passwordRegex.test(value));

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const credentials = {
            email: email,
            password: password,
        };

        try {
            const response = actions.signin(credentials, navigate);
            response.then((res) => {
                authCtx.login(res.data.data.accessToken);
                navigate("/", { replace: true });
            });
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    };
    return (
        <Layout auth>
            <Section>
                <Header>
                    <Logo logo="color" />
                </Header>
                <Form onSubmit={formSubmitHandler}>
                    <Label id="email-label">
                        <span>이메일 주소</span>
                        <div>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                onBlur={onBlurEmail}
                            />
                        </div>
                        {emailHasError && (
                            <Error>이메일 형식을 확인해주세요.</Error>
                        )}
                    </Label>
                    <Label id="password-label">
                        <span>비밀번호</span>
                        <div>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                onBlur={onBlurPassword}
                            />
                        </div>
                        {passwordHasError && (
                            <Error>비밀번호 형식을 확인해주세요.</Error>
                        )}
                    </Label>
                    <Button type="submit">로그인</Button>
                    {loginError && (
                        <Error>
                            등록된 계정이 없습니다. 이메일과 비밀번호를
                            확인해주세요
                        </Error>
                    )}
                </Form>
                <LinkContainer>
                    아직 회원이 아니신가요?&nbsp;
                    <Link to="/signup">회원가입 하러가기</Link>
                </LinkContainer>
            </Section>
        </Layout>
    );
};

export default Login;
