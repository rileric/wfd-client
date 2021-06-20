import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MenuButton from '../MenuButton/MenuButton';
import ApiContext from '../ApiContext';

const myDebug = console.log;

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const loginContext = useContext(ApiContext);

    loginContext.user_id = '1';


    return (
        <MenuButton
            tag='button'
            className='MenuButton login-btn'
            onClick={() => loginWithRedirect()}
        >
            Log In
        </MenuButton>
    );
};

export default LoginButton;