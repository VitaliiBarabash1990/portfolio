import React from 'react';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <div className={s.heroLeftSide}>
      <div className={s.heroDescription}>
        <p className={s.heroTextBig}>Привіт, мене звати Віталій і я</p>
        <h1 className={`title ${s.heroTitle}`}>FULLSTACK DEVELOPER</h1>
        <p className={s.heroTextSmall}>
          Розробляю швидкі та надійні вебзастосунки, які вирішують реальні
          завдання. Чистий код, оптимізована продуктивність та бездоганний
          користувацький досвід – це мої головні пріоритети.
        </p>
      </div>
      <button className={`button ${s.heroBtn}`}>
        Обговорити проєкт
        <svg className={s.btn_icon}>
          <use href="/symbol-defs.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Hero;
