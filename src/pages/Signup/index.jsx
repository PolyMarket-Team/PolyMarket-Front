import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAuthCode, sendAuthCode } from "redux/modules/emailSlice";
import { showModal } from "redux/modules/msgSlice";

import { useNavigate } from "react-router-dom";
import useInput from "@hooks/useInput";
import AuthTimer from "utils/AuthTimer";

import Layout from "layouts";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer } from "react-toastify";
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
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        sendAuthCodeState,
        confirmAuthCodeState,
        isAutheticated,
        codeExpirationState,
        message,
    } = useSelector((state) => state.email);

    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

    const notInitialRender = useRef(false);
    useEffect(() => {
        if (notInitialRender.current) {
            dispatch(showModal(message));
        } else {
            notInitialRender.current = true;
        }
    }, [message]);

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

    const [authCode, setAuthCode] = useState("");
    const authCodeHandler = (e) => {
        setAuthCode(e.target.value);
    };

    // 버튼 활성화
    let emailSendBtnActive = false;
    if (emailIsValid) {
        emailSendBtnActive = true;
        if (sendAuthCodeState === "SUCCESS") {
            emailSendBtnActive = false;
        }
    }

    // 인증 코드 전송
    const emailSendHandler = (e) => {
        e.preventDefault();
        dispatch(sendAuthCode(email));
    };

    // 이메일 인증 코드 체크
    const emailVerifyHandler = (e) => {
        e.preventDefault();

        dispatch(confirmAuthCode({ authCode, email }));
    };

    // Form 유효성 체크
    let formIsValid = false;
    if (
        isAutheticated &&
        nicknameIsValid &&
        passwordIsValid &&
        passwordCheckIsValid
    ) {
        formIsValid = true;
    }

    // Form 제출
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

        // 회원가입 action 요청
        // dispatch(signup({ email, nickname, password })).then(() => {
        //     navigate("/login", { replace: true });
        // });
    };

    return (
        <Layout auth>
            <Main>
                <Section>
                    {/* <ToastContainer /> */}
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
                                        readOnly={
                                            sendAuthCodeState === "SUCCESS"
                                        }
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
                                    {sendAuthCodeState === "LOADING" ? (
                                        <CircularProgress size={20} />
                                    ) : (
                                        <p>이메일 인증하기</p>
                                    )}
                                </Button>
                                {sendAuthCodeState === "SUCCESS" && (
                                    <AuthContainer>
                                        <span className="auth-message">
                                            이메일로 전송된 인증코드를
                                            입력해주세요.
                                        </span>
                                        <div className="auth-container">
                                            <div className="auth-number-container">
                                                <input
                                                    placeholder="인증코드 6자리"
                                                    onChange={authCodeHandler}
                                                    value={authCode}
                                                />
                                                <span className="timer">
                                                    <AuthTimer />
                                                </span>
                                                <button
                                                    className="auth-button"
                                                    type="button"
                                                    onClick={emailVerifyHandler}
                                                >
                                                    {confirmAuthCodeState ===
                                                    "LOADING" ? (
                                                        <CircularProgress
                                                            size={20}
                                                        />
                                                    ) : (
                                                        <p>확인</p>
                                                    )}
                                                </button>
                                            </div>
                                            {codeExpirationState && (
                                                <div className="expiration-container">
                                                    <span className="expiration-message">
                                                        인증코드가
                                                        만료되었습니다.
                                                    </span>
                                                    <div>
                                                        <span>
                                                            이메일을 받지
                                                            못하셨나요?
                                                        </span>
                                                        <span
                                                            onClick={
                                                                emailSendHandler
                                                            }
                                                        >
                                                            이메일 재전송하기
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
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
