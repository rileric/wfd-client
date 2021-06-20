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
];

function Header() {
  return (
    <header className='App__header'>
      <h1>
        <Link to='/' className='title'>What's for Dinner</Link>
        <AuthNav />
      </h1>
      <NavBar menuList={navBar} />  
    </header>
  );
}

export default Header;