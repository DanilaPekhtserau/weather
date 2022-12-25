import React from 'react';
import AButton from "../../../Atoms/AButton";

const LogOutButton = () => {

    const log_out_user = () => {

    }

    return (
        <AButton text={'Log Out'} func={() => {
            localStorage.getItem('token') &&
            localStorage.removeItem('token')
        }
        }/>
    );
};

export default LogOutButton;