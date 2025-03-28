import React from 'react';
import SectionLayout from '../SectionLayout/SectionLayout';
import s from './Steps.module.css';
import AccordionList from '../AccordionList/AccordionList';

const Steps = () => {
  return (
    <SectionLayout id="Steps">
      <ul className={s.steps}>
        <li className={s.stepsHead}>
          <h2 className={`title ${s.stepsHeadTitle}`}>Етапи співпраці</h2>
          <div className={s.fadingLine}></div>
        </li>
        <li className={s.stepsAccordion}>
          <AccordionList />
        </li>
      </ul>
    </SectionLayout>
  );
};

export default Steps;
