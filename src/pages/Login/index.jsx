import React, { useState } from "react";
import Logo from "@components/UI/Logo";

import { Form, Label, Input, Error, LinkContainer } from "@pages/Signup/style";
import { Section, Header } from "./style";

import { Button } from "@components/UI/Button";
import useInput from "@hooks/useInput";
import Layout from "layouts";
import { Link } from "react-router-dom";

const Login = () => {
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

    const formSubmitHandler = () => {
        setLoginError(false);
        /*  TODO:
         *  로그인 API 호출

         */
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
                            이메일과 비밀번호 조합이 일치하지 않습니다.
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
