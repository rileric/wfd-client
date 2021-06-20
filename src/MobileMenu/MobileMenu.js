import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';

const menuList = [
    {
        buttonName:'Category',
        buttonRoute:'/categories',
    },
    {
        buttonName:'Cuisine',
        buttonRoute:'/cuisines',
    },
    {
        buttonName:'Random',
        buttonRoute:'/random',
    },
    {
        buttonName:'Ingredients',
        buttonRoute:'/recipes/search',
    },
    {
        buttonName:'Contact',
        buttonRoute:'/contact',
    },
    {
        buttonName:'About',
        buttonRoute:'/about',
    },
    {
        buttonName:'New Cookbook',
        buttonRoute:'/cookbooks/new',
    },
    {
        buttonName:'New Recipe',
        buttonRoute:'/recipes/new',
    },
    {
        buttonName: 'Profile',
        buttonRoute: '/profile'
    }
];

function MobileMenu() {
  return (
    <section className='App__mobileMenu'>
    <ul className='MobileMenu__menu'>
        {menuList.map( menuButton => (
            <li key={menuButton.buttonName}>
                <MenuButton
                    tag={Link}
                    to={menuButton.buttonRoute}
                    type='button'
                    className='MobileMenu__linkButton'
                >
                    {menuButton.buttonName}
                </MenuButton>
            </li>
        )
        )}
    </ul>  
    </section>
  );
}

export default MobileMenu;