import React, {useState} from 'react';
import AInput from "../../../Atoms/AInput";
import AButton from "../../../Atoms/AButton";
import {sign_up_user} from "../../../../APIs/RESTAPI/BackendAPI";
import {User} from "../../../../Models/User";

const SignUpForm = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const create_user = () => {
        const data = {
            user: {
                email: email,
                password: password
            }
        }
        sign_up_user(data).then(r=>
        {
                alert(r)
                return
        })
    }
    return (
        <form onSubmit={e => {
            e.preventDefault()
        }}>
            <AInput placeholder={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <AInput placeholder={"password"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <AButton text={"Sign Up"}
                     func={() => create_user()}/>
        </form>
    );
};

export default SignUpForm;