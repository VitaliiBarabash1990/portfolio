'use client';
import React, {useState} from 'react';
import s from './Services.module.css';
import services from './services.json';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCollapse = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="Services" className={`section ${s.sectionServices}`}>
      <div className="container">
        <div className={s.servicesWrapper}>
          <ul className={s.servicesContent}>
            <li className={s.servicesContentList}>
              <h4 className={`title ${s.servicesListTypeTitle}`}>
                Верстка сайтів
              </h4>
              <p className={s.servicesListTypeText}>
                Комплексне створення сайтів: від дизайну до запуску
              </p>
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
                          Детальніше{' '}
                          <svg className={s.serviceIcon}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>
                        </>
                      ) : (
                        <>
                          <svg className={s.serviceIconReverse}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>{' '}
                          Згорнути
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
              <h3 className={`title ${s.servicesTitle}`}>Послуги</h3>
              <div className={s.fadingLine}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
