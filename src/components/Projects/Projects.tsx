import React from 'react';
import s from './Projects.module.css';
import CustomSwiper from '../CustomSwiper/CustomSwiper';

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
            <CustomSwiper />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
