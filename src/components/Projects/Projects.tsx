import React from 'react';
import s from './Projects.module.css';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="Projects" className={`section ${s.projectSection}`}>
      <div className={`container ${s.projectContainer}`}>
        <ul className={s.projectWraper}>
          <li className={s.projectleftTitle}>
            <div className={s.projectleftTitleRotate}>
              <div className={s.fadingLine}></div>
              <h3 className={`title ${s.projectTitle}`}>Проєкти</h3>
            </div>
          </li>
          <li className={s.projectRightSwiper}>
            <ul className={s.projectSwiperList}>
              <li className={s.projectSwiperItem}>
                <h4 className={`title ${s.swiperNumberTitle}`}>{`0` + 1}</h4>
              </li>
              <li className={s.projectSwiperItem}>
                <CustomSwiper />
              </li>
              <li className={s.projectSwiperItem}>
                <h5 className={`title ${s.swiperNameTitle}`}>Kolibry Studio</h5>
                <p className={s.swiperText}>
                  Сайт-візитка для лашмейкера є сайтом студії краси Kolibry
                  Studio, що спеціалізується на нарощуванні вій та навчанні для
                  професіоналів. Є можливість запису через форму на сайті, або
                  сервіс букси. Основна мета веб-сайту - продемонструвати
                  студію, її послуги та професійний підхід.
                </p>
                <div className={s.swiperTypeWraper}>
                  <h5 className={`title ${s.swiperTypeTitle}`}>Візитка</h5>
                  <button className={s.swiperBtn}>
                    Переглянути
                    <svg className={s.swiperIcon}>
                      <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
                    </svg>
                  </button>
                </div>
              </li>
              <li
                className={`${s.projectSwiperItem} ${s.projectSwiperItemSeparator}`}
              ></li>
              <li className={`${s.projectSwiperItem} ${s.projectSwiperSkils}`}>
                <ul className={s.swiperSkilsList}>
                  <li className={s.swiperSkilsItem}>Next.js</li>
                  <li className={s.swiperSkilsItem}>Redux</li>
                  <li className={s.swiperSkilsItem}>JavaScript</li>
                  <li className={s.swiperSkilsItem}>HTML</li>
                  <li className={s.swiperSkilsItem}>CSS</li>
                </ul>
                <Link
                  className={s.swiperLink}
                  href="https://kolibry-studio-product-version.vercel.app/ua"
                  target="_blank"
                >
                  Перейти на сайт
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
