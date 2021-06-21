import { useContext } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ApiContext from '../ApiContext';
import MenuButton from '../MenuButton/MenuButton';

const GetUserId = () => {

    // For user logging
    const {isAuthenticated, user } = useAuth0();
    const loginContext = useContext(ApiContext);

    if(isAuthenticated && (loginContext.user_id !== user.sub) ) {
        let splitUserSub = user.sub.split('|');
        let formattedUserSub = splitUserSub[0] + '_' + splitUserSub[1];
        loginContext.user_id = formattedUserSub;
    } 
    

    return (
        isAuthenticated && (
            <MenuButton
                tag={Link}
                to='/profile'
                type='button'
                className='AuthNav__profile-button'
            >
                Profile
            </MenuButton>
        )
    );

};

export default GetUserId;