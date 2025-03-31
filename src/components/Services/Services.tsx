'use client';
import React, {useState} from 'react';
import s from './Services.module.css';
import {useTranslations} from 'next-intl';

const Services = () => {
  const t = useTranslations('Services');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCollapse = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const services = [
    {
      id: 0,
      type: t('services.0.type'),
      price: t('services.0.price'),
      text_short: t('services.0.text_short'),
      text_long: t('services.0.text_long')
    },
    {
      id: 1,
      type: t('services.1.type'),
      price: t('services.1.price'),
      text_short: t('services.1.text_short'),
      text_long: t('services.1.text_long')
    },
    {
      id: 2,
      type: t('services.2.type'),
      price: t('services.2.price'),
      text_short: t('services.2.text_short'),
      text_long: t('services.2.text_long')
    },
    {
      id: 3,
      type: t('services.3.type'),
      price: t('services.3.price'),
      text_short: t('services.3.text_short'),
      text_long: t('services.3.text_long')
    }
  ];

  return (
    <section id="Services" className={`section ${s.sectionServices}`}>
      <div className="container">
        <div className={s.servicesWrapper}>
          <ul className={s.servicesContent}>
            <li className={s.servicesContentList}>
              <h4 className={`title ${s.servicesListTypeTitle}`}>
                {t('typeServices')}
              </h4>
              <p className={s.servicesListTypeText}>{t('description')}</p>
            </li>
            {services.map((service, index) => (
              <li key={index} className={s.servicesContentList}>
                <ul className={s.servicesList}>
                  <li className={s.servicesListItemleft}>
                    <h4 className={`title ${s.servicesType}`}>
                      {service.type}
                    </h4>
                    <p className={s.servicesPrice}>{service.price}</p>
                  </li>
                  <li className={s.servicesListItemCenter}>
                    <p className={s.servicesTextShort}>{service.text_short}</p>
                    {activeIndex === index && (
                      <>
                        <br />
                        <p className={s.servicesTextShort}>
                          {service.text_long}
                        </p>
                      </>
                    )}
                  </li>
                  <li className={s.servicesListItemRight}>
                    <button
                      className={s.servicesBtn}
                      onClick={() => handleCollapse(index)}
                    >
                      {activeIndex !== index ? (
                        <>
                          {t('button_1')}{' '}
                          <svg className={s.serviceIcon}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>
                        </>
                      ) : (
                        <>
                          <svg className={s.serviceIconReverse}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>{' '}
                          {t('button_2')}
                        </>
                      )}
                    </button>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <div className={s.servicesTitleBlock}>
            <div className={s.servicesTitleContent}>
              <h3 className={`title ${s.servicesTitle}`}>{t('title')}</h3>
              <div className={s.fadingLine}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
