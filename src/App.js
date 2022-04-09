import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("@pages/Home"));
const Product = loadable(() => import("@pages/Product"));
const Chat = loadable(() => import("@pages/Chat"));
const Login = loadable(() => import("@pages/Login"));
const Signup = loadable(() => import("@pages/Signup"));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default App;
