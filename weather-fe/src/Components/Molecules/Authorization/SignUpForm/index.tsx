import React from 'react';
import AInput from "../../../Atoms/AInput";
import AButton from "../../../Atoms/AButton";
import {sign_up_user} from "../../../RESTAPI/BackendAPI";

const SignUpForm = () => {
    return (
        <form>
            <AInput placeholder={"email"}/>
            <AInput placeholder={"password"} type={"password"}/>
            <AButton text={"Sign Up"}
                     func={() => sign_up_user([])}/>
        </form>
    );
};

export default SignUpForm;