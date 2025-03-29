'use client';

import React, {useState} from 'react';
import s from './Projects.module.css';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import Link from 'next/link';
import projects from '../CustomSwiper/projects.json';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
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
              <h3 className={`title ${s.projectTitle}`}>Проєкти</h3>
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
                <CustomSwiper setActiveProject={setActiveProject} />
              </li>
              <li className={s.projectSwiperItem}>
                <h5 className={`title ${s.swiperNameTitle}`}>
                  {activeProject.name}
                </h5>
                <p className={s.swiperText}>
                  {short ? activeProject.text_short : activeProject.text_long}
                </p>
                <div className={s.swiperTypeWraper}>
                  <h5 className={`title ${s.swiperTypeTitle}`}>Візитка</h5>
                  <button className={s.swiperBtn} onClick={handleClick}>
                    {short ? 'Переглянути' : 'Згорнути'}
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
