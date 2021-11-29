import React from 'react';
import NavigationMenu from '../../Shared/NavigationMenu/NavigationMenu';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
  return (
    <div className='container' id='home'>
      <NavigationMenu />
      <HeaderMain />
    </div>
  );
}; 

export default Header;