import React from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import s from './Header.module.css';
import BackgroundHero from '../UI/HidenBackground/BackgroundHero/BackgroundHero';

const Header = () => {
  return (
    <div className={s.HeaderSection}>
      <div className={s.HeaderWrapper}>
        {/* <BackgroundHero /> */}
        <Navigation />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
