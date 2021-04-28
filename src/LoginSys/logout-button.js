import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import MenuButton from '../MenuButton/MenuButton';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <MenuButton
            tag='button'
            className='logout-btn'
            onClick={() => logout()}
        >
            Log Out
        </MenuButton>
    );
};

export default LogoutButton;