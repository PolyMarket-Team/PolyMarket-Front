import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import { useContext } from "react";
import AuthContext from "store/context/auth-context";

const Home = loadable(() => import("@pages/Home"));
const Product = loadable(() => import("@pages/Product"));
const ProductDetail = loadable(() => import("@pages/ProductDetail"));
const Chat = loadable(() => import("@pages/Chat"));
const Login = loadable(() => import("@pages/Login"));
const Signup = loadable(() => import("@pages/Signup"));

function App() {
    const authCtx = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/chat" element={<Chat />} />

            {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
            {!authCtx.isLoggedIn && (
                <Route path="/signup" element={<Signup />} />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
