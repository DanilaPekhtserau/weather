import React, {useState} from 'react';
import AInput from "../../../Atoms/AInput";
import AButton from "../../../Atoms/AButton";
import {sign_in_user} from "../../../../APIs/RESTAPI/BackendAPI";
import LogOutButton from "../LogOutButton";

const LogInForm = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const log_in_user = () => {
        const data = {
            user: {
                email: email,
                password: password
            }
        }
        sign_in_user(data).then(r=>
        {
            localStorage.setItem('token', r.data.token);
            return
        })
    }
    return (
        <form onSubmit={e => {
            e.preventDefault()
        }}>
            <AInput placeholder={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <AInput placeholder={"password"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <AButton text={"Log In"}
                     func={() => log_in_user()}/>
            <LogOutButton/>
        </form>
    );
};

export default LogInForm;