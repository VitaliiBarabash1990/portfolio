import React from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={`${s.headerSection} ${s.adWrap}`}>
      <div className={s.headerContainer}>
        <div className={s.headerWrapper}>
          <Navigation />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Header;
