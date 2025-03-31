import React from 'react';
import s from './Steps.module.css';
import AccordionList from '../AccordionList/AccordionList';

const Steps = () => {
  return (
    <section id="Steps" className={`section ${s.sectionSteps}`}>
      <div className="container">
        <ul className={s.steps}>
          <li className={s.stepsHead}>
            <h2 className={`title ${s.stepsHeadTitle}`}>Етапи співпраці</h2>
            <div className={s.fadingLine}></div>
          </li>
          <li className={s.stepsAccordion}>
            <AccordionList />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Steps;
