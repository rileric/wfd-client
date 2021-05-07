import React from 'react';
import AuthNav from '../LoginSys/AuthNav';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const navBar = [
  {
      buttonName:'Category',
      buttonRoute:'/category',
  },
  {
      buttonName:'Cuisine',
      buttonRoute:'/cuisine',
  },
  {
      buttonName:'Random',
      buttonRoute:'/random',
  },
  {
      buttonName:'Ingredients',
      buttonRoute:'/recipe/search',
  },
  {
      buttonName:'Contact',
      buttonRoute:'/contact',
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