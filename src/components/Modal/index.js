import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "redux/modules/notiSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = () => {
    const dispatch = useDispatch();
    const { notiType, notiMessage } = useSelector((state) => state.noti);

    const options = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        onClose: () => dispatch(reset()),
    };

    if (notiType === "SUCCESS") toast.success(notiMessage, options);
    if (notiType === "ERROR") toast.error(notiMessage, options);

    return <ToastContainer />;
};

export default Modal;
