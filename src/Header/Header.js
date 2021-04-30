import React from 'react';
import AuthNav from '../LoginSys/AuthNav';
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
      <h1>What's for Dinner</h1>
      <NavBar menuList={navBar} />
      <AuthNav />
    </header>
  );
}

export default Header;