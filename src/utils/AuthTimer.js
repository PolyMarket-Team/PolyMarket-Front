import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthTimer = () => {
    const { expirationTime, timerState } = useSelector((state) => state.email);
    const [emailTime, setEmailTime] = useState(300);

    useEffect(() => {
        let Counter;
        if (timerState && emailTime > 0) {
            Counter = setInterval(() => {
                const duration = Math.floor(
                    (new Date(expirationTime).getTime() -
                        new Date().getTime()) /
                        1000
                );
                setEmailTime(duration);
            }, 1000);
        } else if (!timerState) {
            clearInterval(Counter);
        }
        return () => {
            clearInterval(Counter);
        };
    }, [expirationTime, timerState, emailTime]);

    const timeFormat = (emailTime) => {
        const m = Math.floor(emailTime / 60).toString();
        let s = (emailTime % 60).toString();
        if (s.length === 1) s = `0${s}`;
        return `${m}:${s}`;
    };

    return <>{timeFormat(emailTime)}</>;
};

export default AuthTimer;
