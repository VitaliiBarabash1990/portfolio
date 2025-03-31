'use client';

import React, {useState} from 'react';
import s from './Projects.module.css';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Project} from '@/types/types';

const Projects = () => {
  const t = useTranslations('Projects');
  const projectText = [
    {
      id: 1,
      name: 'Kolibry Studio',
      text_short: t('text_short.0'),
      text_long: t('text_long.0'),
      type: t('type.0'),
      image: '/img/projects/project_1_x1.webp',
      image_x2:
        '/img/projects/project_1_x1.webp 1x, /img/projects/project_1_x2.webp 2x',
      href: 'https://kolibry-studio-product-version.vercel.app/ua',
      technology: ['Next.js', 'Redux', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 2,
      name: 'Ventiliation System',
      text_short: t('text_short.1'),
      text_long: t('text_long.1'),
      type: t('type.0'),
      image: '/img/projects/project_2_x1.webp',
      image_x2:
        '/img/projects/project_2_x1.webp 1x, /img/projects/project_2_x2.webp 2x',
      href: 'https://ventilation-system.vercel.app/',
      technology: ['Next.js', 'Redux', 'JavaScript', 'HTML', 'CSS']
    }
  ];

  const [activeProject, setActiveProject] = useState<Project>(projectText[0]);
  const [short, setShort] = useState(true);

  const handleClick = () => {
    setShort((prev) => !prev);
  };

  return (
    <section id="Projects" className={`section ${s.projectSection}`}>
      <div className={`container ${s.projectContainer}`}>
        <ul className={s.projectWraper}>
          <li className={s.projectleftTitle}>
            <div className={s.projectleftTitleRotate}>
              <div className={s.fadingLine}></div>
              <h3 className={`title ${s.projectTitle}`}>{t('title')}</h3>
            </div>
          </li>
          <li className={s.projectRightSwiper}>
            <ul className={s.projectSwiperList}>
              <li className={s.projectSwiperItem}>
                <h4 className={`title ${s.swiperNumberTitle}`}>
                  {`0` + `${activeProject.id}`}
                </h4>
              </li>
              <li className={s.projectSwiperItem}>
                <CustomSwiper
                  setActiveProject={setActiveProject}
                  projects={projectText}
                />
              </li>
              <li className={s.projectSwiperItem}>
                <h5 className={`title ${s.swiperNameTitle}`}>
                  {activeProject.name}
                </h5>
                <p className={s.swiperText}>
                  {short
                    ? activeProject.text_short
                    : activeProject.text_long.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                </p>
                <div className={s.swiperTypeWraper}>
                  <h5 className={`title ${s.swiperTypeTitle}`}>
                    {activeProject.type}
                  </h5>
                  <button className={s.swiperBtn} onClick={handleClick}>
                    {short ? t('button_1') : t('button_2')}
                    <svg
                      className={
                        short
                          ? `${s.swiperIcon}`
                          : `${s.swiperIcon} ${s.swiperIconTop}`
                      }
                    >
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
                  {activeProject.technology.map((tech, index) => (
                    <li key={index} className={s.swiperSkilsItem}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  className={s.swiperLink}
                  href={activeProject.href}
                  target="_blank"
                >
                  {t('button_3')}
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
