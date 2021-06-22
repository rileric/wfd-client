import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import NavBar from '../NavBar/NavBar';

const footBar = [ // Removing Footer menu due to feedback
    /* {
        buttonName:'About',
        buttonRoute:'/about',
    },
    Removing cookbook functionality for now.
    {
        buttonName:'New Cookbook',
        buttonRoute:'/cookbooks/new',
    },
    {
        buttonName:'Contact',
        buttonRoute:'/contact',
    }, */

];

function Footer() {
  return (
    <footer className='App__footer'>
        <NavBar menuList={footBar} />
        <MenuButton
            tag={Link}
            to='/menu'
            type='button'
            className='MobileMenuButton'
        >
            Menu
        </MenuButton>  
    </footer>
  );
}

export default Footer;