import React from 'react';
import s from './Programs.module.css';
import {useTranslations} from 'next-intl';

const ProgramsList = [
  {id: 0, icon: './img/programs/react.png', name: 'React.js'},
  {id: 1, icon: './img/programs/redux.png', name: 'Redux'},
  {id: 2, icon: './img/programs/nextjs.png', name: 'Next.js'},
  {id: 3, icon: './img/programs/nodejs.png', name: 'Node.js'},
  {id: 4, icon: './img/programs/express.png', name: 'Express'},
  {id: 5, icon: './img/programs/mongodb.png', name: 'MongoDB'},
  {id: 6, icon: './img/programs/vite.png', name: 'Vite'},
  {id: 7, icon: './img/programs/bootstrap.png', name: 'Bootstrap'},
  {id: 8, icon: './img/programs/tailwindcss.png', name: 'TailwindCSS'},
  {id: 9, icon: './img/programs/material-ui.png', name: 'Material UI'},
  {id: 10, icon: './img/programs/git.png', name: 'Git'},
  {id: 11, icon: './img/programs/gitHub.png', name: 'GitHub'}
];

const Programs = () => {
  const t = useTranslations('Programs');
  return (
    <section id="Programs" className={`section ${s.sectionPrograms}`}>
      <div className={`container`}>
        <ul className={s.programsWrapper}>
          <li className={s.programsHead}>
            <div className={s.fadingLine}></div>
            <h2 className={`title ${s.programsHeadTitle}`}>{t('title')}</h2>
          </li>
          <li className={s.programsTech}>
            <ul className={s.programsTechList}>
              {ProgramsList.map((list) => (
                <li key={list.id} className={s.programsTechItem}>
                  <img src={list.icon} alt={`icon-${list.id}`} />
                  <p className={s.programsTechText}>{list.name}</p>
                </li>
              ))}
            </ul>
          </li>
          <li className={s.programsDescrTitle}>
            <h3 className={`title ${s.programsTitle}`}>
              {t('bottomTitle_1')} <br />
              <span className={s.programsTitleBottom}>
                {t('bottomTitle_2')}
              </span>
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Programs;
