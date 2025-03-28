import React from 'react';
import SectionLayout from '../SectionLayout/SectionLayout';
import s from './Programs.module.css';

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
  return (
    <SectionLayout id="Programs">
      <ul className={s.programsWrapper}>
        <li className={s.programsHead}>
          <div className={s.fadingLine}></div>
          <h2 className={`title ${s.programsHeadTitle}`}>
            Технології та програми
          </h2>
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
            Веб-розробка: <br />
            <span className={s.programsTitleBottom}>
              від дизайну до запуску
            </span>
          </h3>
        </li>
      </ul>
    </SectionLayout>
  );
};

export default Programs;
