import React, { useContext, useEffect, useState } from "react";
import useInput from "@hooks/useInput";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import AuthContext from "store/context/auth-context";

import { Button } from "@components/UI/Button";
import {
    Main,
    Header,
    Form,
    Label,
    Input,
    Error,
    LinkContainer,
    AuthContainer,
    Section,
} from "./style";
import Layout from "layouts";
import axios from "axios";
import AuthTimer from "utils/AuthTimer";

const Signup = () => {
    const authCtx = useContext(AuthContext);

    const [emailIsVerified, setEmailIsVerified] = useState(false);
    const [emailIsSending, setEmailIsSending] = useState(null);
    const [emailIsSent, setEmailIsSent] = useState(false);

    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

    const {
        value: nickname,
        isValid: nicknameIsValid,
        hasError: nicknameHasError,
        valueChangeHandler: onChangeNickname,
        inputBlurHandler: onBlurNickname,
    } = useInput((value) => value.trim() !== "");
    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: onChangeEmail,
        inputBlurHandler: onBlurEmail,
    } = useInput((value) => emailRegex.test(value));
    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: onChangePassword,
        inputBlurHandler: onBlurPassword,
    } = useInput((value) => passwordRegex.test(value));
    const {
        value: passwordCheck,
        isValid: passwordCheckIsValid,
        hasError: passwordCheckHasError,
        valueChangeHandler: onChangePasswordCheck,
        inputBlurHandler: onBlurPasswordCheck,
    } = useInput((value) => value === password);

    // 버튼 활성화
    let emailSendBtnActive = false;
    if (emailIsValid) {
        emailSendBtnActive = true;
        if (emailIsSent) {
            emailSendBtnActive = false;
        }
    }

    /* 인증 코드 전송
     *
     * TODO: email 전송 API 호출
     * - Loading Spinner 추가. 🆗
     * - timer 기능 추가. 🆗
     * - setCodeIsExpire 상태 변경.
     *
     */

    const emailSendHandler = (e) => {
        e.preventDefault();
        setEmailIsSending(true);

        axios
            .post("/users/send-email", { email: email })
            .then((response) => {
                setEmailIsSending(false);
                setEmailIsSent(true);

                console.log(response.data.data.expireDateTime);
                authCtx.specifyExpirationTime(
                    response.data.data.expireDateTime
                );
                // authCtx.specifyExpirationTime("2022-05-12 23:53:00");
            })
            .catch((error) => {
                setEmailIsSending(false);
                console.log(error);
            });
    };

    if (authCtx.codeIsExpire) {
        console.log("만료");
    }

    /* 이메일 인증 코드 체크
     *
     * TODO: email 인증 API 호출
     *
     */
    const emailVerifyHandler = (e) => {
        e.preventDefault();
        setEmailIsVerified(true);
    };

    // Form 유효성 체크
    let formIsValid = false;
    if (
        emailIsVerified &&
        nicknameIsValid &&
        passwordIsValid &&
        passwordCheckIsValid
    ) {
        formIsValid = true;
    }

    /* Form 제출
     *
     * TODO: signup API 호출
     * - redux(store)로 옮기기.
     * - Loading Spinner 추가.
     */
    const navigate = useNavigate();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log("전송 완료");

        const credentials = {
            email: email,
            nickname: nickname,
            password: password,
        };

        // axios
        //     .post("users/signup", credentials)
        //     .then(() => {
        //         navigate("/login", { replace: true });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <Layout auth>
            <Main>
                <Section>
                    <div>
                        <Header>회원가입</Header>

                        <Form onSubmit={formSubmitHandler}>
                            <Label id="email-label" error={emailHasError}>
                                <span>이메일 주소</span>
                                <div>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="이메일"
                                        onChange={onChangeEmail}
                                        onBlur={onBlurEmail}
                                        error={emailHasError}
                                        readOnly={emailIsSent}
                                        required
                                    />
                                </div>
                                {emailHasError && (
                                    <Error>Email 형식으로 입력해주세요.</Error>
                                )}
                                <Button
                                    type="button"
                                    disabled={!emailSendBtnActive}
                                    onClick={emailSendHandler}
                                >
                                    {emailIsSending ? (
                                        <CircularProgress size={20} />
                                    ) : (
                                        <p>이메일 인증하기</p>
                                    )}
                                </Button>
                                {emailIsSent && (
                                    <AuthContainer isExpire={true}>
                                        <span className="auth-message">
                                            이메일로 전송된 인증코드를
                                            입력해주세요.
                                        </span>
                                        <div className="auth-container">
                                            <div>
                                                <input placeholder="인증코드 6자리" />
                                                <span className="timer">
                                                    <AuthTimer />
                                                </span>
                                                <button
                                                    className="auth-button"
                                                    type="button"
                                                    onClick={emailVerifyHandler}
                                                >
                                                    확인
                                                </button>
                                            </div>
                                        </div>
                                    </AuthContainer>
                                )}
                            </Label>

                            <Label id="nickname-label" error={nicknameHasError}>
                                <span>닉네임</span>
                                <div>
                                    <Input
                                        type="text"
                                        id="nickname"
                                        name="nickname"
                                        value={nickname}
                                        placeholder="닉네임"
                                        onChange={onChangeNickname}
                                        onBlur={onBlurNickname}
                                        error={nicknameHasError}
                                        required
                                    />
                                </div>
                                {nicknameHasError && (
                                    <Error>닉네임을 입력해주세요.</Error>
                                )}
                            </Label>
                            <Label id="password-label" error={passwordHasError}>
                                <span>비밀번호</span>
                                <div>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        placeholder="비밀번호"
                                        onChange={onChangePassword}
                                        onBlur={onBlurPassword}
                                        error={passwordHasError}
                                        required
                                    />
                                </div>
                                {passwordHasError && (
                                    <Error>
                                        비밀번호 양식에 맞게 입력해주세요.
                                    </Error>
                                )}
                            </Label>
                            <Label
                                id="password-check-label"
                                error={passwordCheckHasError}
                            >
                                <span>비밀번호 확인</span>
                                <div>
                                    <Input
                                        type="password"
                                        id="password-check"
                                        name="password-check"
                                        value={passwordCheck}
                                        placeholder="비밀번호 확인"
                                        onChange={onChangePasswordCheck}
                                        onBlur={onBlurPasswordCheck}
                                        error={passwordCheckHasError}
                                        required
                                    />
                                </div>
                                {passwordCheckHasError && (
                                    <Error>비밀번호가 일치하지 않습니다.</Error>
                                )}
                            </Label>
                            <Button type="submit">회원가입</Button>
                        </Form>
                        <LinkContainer>
                            이미 회원이신가요?&nbsp;
                            <a href="/login">로그인 하러가기</a>
                        </LinkContainer>
                    </div>
                </Section>
            </Main>
        </Layout>
    );
};

export default Signup;
