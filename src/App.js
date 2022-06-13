import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCheck } from "redux/modules/authSlice";

const Home = loadable(() => import("@pages/Home"));
const Product = loadable(() => import("@pages/Product"));
const ProductDetail = loadable(() => import("@pages/ProductDetail"));
const Chat = loadable(() => import("@pages/Chat"));
const Profile = loadable(() => import("@pages/Profile"));
const Login = loadable(() => import("@pages/Login"));
const Signup = loadable(() => import("@pages/Signup"));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginCheck());
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
};

export default App;
