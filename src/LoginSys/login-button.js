import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MenuButton from '../MenuButton/MenuButton';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <MenuButton
            tag='button'
            className='login-btn'
            onClick={() => loginWithRedirect()}
        >
            Log In
        </MenuButton>
    );
};

export default LoginButton;