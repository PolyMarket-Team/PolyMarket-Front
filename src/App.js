import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import { useEffect } from "react";

const Home = loadable(() => import("@pages/Home"));
const Product = loadable(() => import("@pages/Product"));
const ProductDetail = loadable(() => import("@pages/ProductDetail"));
const Chat = loadable(() => import("@pages/Chat"));
const Login = loadable(() => import("@pages/Login"));
const Signup = loadable(() => import("@pages/Signup"));

function App() {
    const { user: currentUser } = useSelector((state) => state.auth);

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }
    }, [currentUser]);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
