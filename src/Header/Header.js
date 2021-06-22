import React from 'react';
import AuthNav from '../LoginSys/AuthNav';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const navBar = [
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
    buttonName:'New Recipe',
    buttonRoute:'/recipes/new',
  },
  /* Removing cookbook functionality for now.
  {
      buttonName:'New Cookbook',
      buttonRoute:'/cookbooks/new',
  }, */
  {
    buttonName:'About',
    buttonRoute:'/about',
},
{
    buttonName:'Contact',
    buttonRoute:'/contact',
},
];

function Header() {
  return (
    <header className='App__header'>
      <div className='App__header_top' >
        <h1><Link to='/' className='title'>What's for Dinner</Link></h1>
        <AuthNav />
      </div>
      <NavBar menuList={navBar} />  
    </header>
  );
}

export default Header;