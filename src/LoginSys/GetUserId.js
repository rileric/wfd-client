import { useContext } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ApiContext from '../ApiContext';
import MenuButton from '../MenuButton/MenuButton';

const myDebug = console.log;

const GetUserId = () => {

    // For user logging
    const {isAuthenticated, user } = useAuth0();
    const loginContext = useContext(ApiContext);

    if(isAuthenticated && (loginContext.user_id !== user.sub) ) {
        loginContext.user_id = user.sub;
        myDebug('GetUserId user = ' + JSON.stringify(user) );
        myDebug(`GetUserId context user = ${loginContext.user_id}`);
    } 
    else if (!isAuthenticated) {
        loginContext.user_id = '1'; // default user
    }
    
    const { logout } = useAuth0();

    return (
        //TODO change to the profile button
        <MenuButton
            tag={Link}
            to='/profile'
            type='button'
            className='AuthNav__profile-button'
        >
            Profile
        </MenuButton>
    );

};

export default GetUserId;