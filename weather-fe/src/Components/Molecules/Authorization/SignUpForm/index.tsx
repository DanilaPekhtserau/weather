import React, {useState} from 'react';
import AInput from "../../../Atoms/AInput";
import AButton from "../../../Atoms/AButton";
import {sign_up_user} from "../../../RESTAPI/BackendAPI";
import {User} from "../../../../Models/User";

const SignUpForm = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const create_user = () => {
        const user = {
            email: email,
            password: password
        }
        console.log(user)
        console.log(email)
        console.log(password)

    }
    return (
        <form>
            <AInput placeholder={"email"} onChange={() => setEmail}/>
            <AInput placeholder={"password"} type={"password"} onChange={() => setPassword}/>
            <AButton text={"Sign Up"}
                     func={() => create_user()}/>
        </form>
    );
};

export default SignUpForm;