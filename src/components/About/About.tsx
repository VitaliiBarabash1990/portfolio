import React from 'react';
import s from './About.module.css';
import SectionLayout from '../SectionLayout/SectionLayout';

const About = () => {
  return (
    <SectionLayout id="About">
      <ul className={s.about}>
        <li className={s.aboutMe}>
          <div className={s.aboutMeHead}>
            <h2 className={`title ${s.aboutMeTitle}`}>Про мене</h2>
            <div className={s.fadingLine}></div>
          </div>
          <p className={s.aboutMeText}>
            Я – fullstack-розробник, який спеціалізується на створенні швидких,
            адаптивних і зручних веб-сайтів. Моя мета – не просто зробити сайт
            «робочим», а створити технологічно досконалий продукт, що
            забезпечить користувачам комфортний досвід взаємодії. Я працюю з
            сучасними технологіями, такими як Next.js, React, TypeScript, що
            дозволяє створювати продуктивні, SEO-оптимізовані сайти з гнучкою
            архітектурою. Завдяки цим технологіям ваш сайт буде швидко
            завантажуватися, коректно працювати на всіх пристроях і легко
            масштабуватися при зростанні бізнесу.
          </p>
          <button className={`button ${s.downloadBtn}`}>
            Завантажити резюме{' '}
            <svg className={s.iconFile}>
              <use href="/symbol-defs.svg#icon-filetype-pdf"></use>
            </svg>
          </button>
        </li>
        <li className={s.aboutMePhoto}>
          <div className={s.aboutMeShadow}></div>
          <picture className={s.aboutMePhotoPicture}>
            <source
              srcSet="/img/about/my_photo_x1.webp 1x, /img/about/my_photo_x2.webp 2x"
              type="image/webp"
            />
            <img src="/img/about/my_photo_x1" alt="Мое зображення" />
          </picture>
        </li>
      </ul>
    </SectionLayout>
  );
};

export default About;
