import React from 'react';
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
    </footer>
  );
}

export default Footer;