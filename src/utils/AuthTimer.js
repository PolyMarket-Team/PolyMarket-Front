import { useContext, useEffect, useState } from "react";
import AuthContext from "store/context/auth-context";

const AuthTimer = () => {
    const {
        expirationTime,
        emailTime,
        setEmailTime,
        codeIsExpire,
        setCodeIsExpire,
    } = useContext(AuthContext);

    useEffect(() => {
        if (emailTime > 0) {
            const Counter = setInterval(() => {
                const duration = Math.floor(
                    (new Date(expirationTime).getTime() -
                        new Date().getTime()) /
                        1000
                );
                setEmailTime(duration);
            }, 1000);
            return () => {
                clearInterval(Counter);
            };
        }
        setCodeIsExpire(true);
    }, [emailTime, expirationTime]);

    const timeFormat = (emailTime) => {
        const m = Math.floor(emailTime / 60).toString();
        let s = (emailTime % 60).toString();
        if (s.length === 1) s = `0${s}`;
        return `${m}:${s}`;
    };

    return <>{timeFormat(emailTime)}</>;
};

export default AuthTimer;
