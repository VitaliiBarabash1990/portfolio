import React from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import s from './Header.module.css';
import BackgroundHero from '../UI/HidenBackground/BackgroundHero/BackgroundHero';

const Header = () => {
  return (
    <div className={s.headerSection}>
      <div className={s.headerContainer}>
        <div className={s.headerWrapper}>
          {/* <BackgroundHero /> */}
          <Navigation />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Header;
