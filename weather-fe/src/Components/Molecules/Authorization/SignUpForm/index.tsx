import React from 'react';
import AInput from "../../../Atoms/AInput";
import AButton from "../../../Atoms/AButton";

const SignUpForm = () => {
    return (
        <form>
            <AInput placeholder={"email"}/>
            <AInput placeholder={"password"} type={"password"}/>
            <AButton text={"Sign Up"}/>
        </form>
    );
};

export default SignUpForm;