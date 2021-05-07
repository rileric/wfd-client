import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import NavBar from '../NavBar/NavBar';

const footBar = [
    {
        buttonName:'About',
        buttonRoute:'/about',
    },
    {
        buttonName:'New Cookbook',
        buttonRoute:'/cookbook/new',
    },
    {
        buttonName:'New Recipe',
        buttonRoute:'/recipe/new',
    },

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