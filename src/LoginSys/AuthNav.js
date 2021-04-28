import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button';
import GetUserId from "./GetUserId";


const AuthNav = () => {

    const {isAuthenticated } = useAuth0();

    return (
        <div className='login-out-btns'>
            {isAuthenticated ? <GetUserId /> : <LoginButton /> }
        </div>
    );
};

export default AuthNav;

