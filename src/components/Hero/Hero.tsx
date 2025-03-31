import React from 'react';
import s from './Hero.module.css';
import {useTranslations} from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <div className={s.heroLeftSide}>
      <div className={s.heroDescription}>
        <p className={s.heroTextBig}>{t('description_1')}</p>
        <h1 className={`title ${s.heroTitle}`}>{t('title')}</h1>
        <p className={s.heroTextSmall}>{t('description_2')}</p>
      </div>
      <button className={`button ${s.heroBtn}`}>
        {t('button')}
        <svg className={s.btn_icon}>
          <use href="/symbol-defs.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Hero;
