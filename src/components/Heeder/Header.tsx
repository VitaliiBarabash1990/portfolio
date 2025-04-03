'use client';

import React, {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import s from './Header.module.css';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);
  return (
    <div
      className={`${s.headerSection} ${s.adWrap} ${isLoaded ? s.lazyLoaded : ''}`}
    >
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
