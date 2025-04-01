import React from 'react';
import s from './About.module.css';
import {useTranslations} from 'next-intl';

const About = () => {
  const t = useTranslations('About');
  return (
    <section id="About" className={`section ${s.sectionAbout} ${s.adWrap}`}>
      <div className={`container`}>
        <ul className={s.about}>
          <li className={s.aboutMe}>
            <div className={s.aboutMeHead}>
              <h2 className={`title ${s.aboutMeTitle}`}>{t('about')}</h2>
              <div className={s.fadingLine}></div>
            </div>
            <p className={s.aboutMeText}>{t('description')}</p>
            <button className={`button ${s.downloadBtn}`}>
              {t('download')}
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
      </div>
    </section>
  );
};

export default About;
