import { useContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import ApiContext from '../ApiContext';
import MenuButton from '../MenuButton/MenuButton';

const myDebug = console.log;

const GetUserId = () => {

    // For user logging
    const {isAuthenticated, user } = useAuth0();
    const loginContext = useContext(ApiContext);
    let userId = '1'; // default user

    if(isAuthenticated && (loginContext.user_id !== user.sub) ) {
        loginContext.user_id = user.sub;
        userId = loginContext.user_id;
        myDebug(`AuthNav context user = ${loginContext.user_id}`);
        loginContext.userLogin(isAuthenticated, userId);
    }
    
    const { logout } = useAuth0();

    return (
        //TODO change to the profile button
        <MenuButton
            tag='button'
            className='logout-btn'
            onClick={() => logout()}
        >
            Log Out
        </MenuButton>
    );

};

export default GetUserId;