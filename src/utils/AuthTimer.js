import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AuthTimer = () => {
    const { expirationTime } = useSelector((state) => state.email);
    const [emailTime, setEmailTime] = useState(300);
    const dispatch = useDispatch();
    const { isEmailVerified } = useSelector((state) => state.email);

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

        dispatch({ type: "SET_CODE_IS_EXPIRE" });
    }, [emailTime, expirationTime, dispatch, isEmailVerified]);

    const timeFormat = (emailTime) => {
        const m = Math.floor(emailTime / 60).toString();
        let s = (emailTime % 60).toString();
        if (s.length === 1) s = `0${s}`;
        return `${m}:${s}`;
    };

    return <>{timeFormat(emailTime)}</>;
};

export default AuthTimer;
