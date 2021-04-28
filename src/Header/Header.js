import React from 'react';
import AuthNav from '../LoginSys/AuthNav';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <header className='App__header'>
      <NavBar />
      <AuthNav />
    </header>
  );
}

export default Header;