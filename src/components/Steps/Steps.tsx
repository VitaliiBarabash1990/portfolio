'use client';

import React, {useEffect, useState} from 'react';
import s from './Steps.module.css';
import AccordionList from '../AccordionList/AccordionList';
import {useTranslations} from 'next-intl';

const Steps = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations('Steps');

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);

  return (
    <section
      id="Steps"
      className={`section ${s.sectionSteps} ${s.adWrap} ${isLoaded ? s.lazyLoaded : ''}`}
    >
      <div className="container">
        <ul className={s.steps}>
          <li className={s.stepsHead}>
            <h2 className={`title ${s.stepsHeadTitle}`}>{t('title')}</h2>
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
