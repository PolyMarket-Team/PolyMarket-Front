import React from "react";

import Layout from "layouts";
import LoginForm from "@components/Auth/LgoinForm";

const Login = () => {
    return (
        <Layout auth>
            <LoginForm />
        </Layout>
    );
};

export default Login;
