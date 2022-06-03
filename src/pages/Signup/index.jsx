import React from "react";
import Layout from "layouts";
import SignupForm from "@components/Auth/SignupForm";

const Signup = () => {
    return (
        <Layout auth>
            <SignupForm />
        </Layout>
    );
};

export default Signup;
