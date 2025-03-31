'use client';

import React, {useState} from 'react';
import SectionLayout from '../SectionLayout/SectionLayout';
import s from './FaqSection.module.css';
import {useTranslations} from 'next-intl';

const FaqSection = () => {
  const t = useTranslations('Faq');
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqquestions = [
    {
      id: 0,
      question: t('faq.0.question'),
      answer: t('faq.0.answer')
    },
    {
      id: 1,
      question: t('faq.1.question'),
      answer: t('faq.1.answer')
    },
    {
      id: 2,
      question: t('faq.2.question'),
      answer: t('faq.2.answer')
    },
    {
      id: 3,
      question: t('faq.3.question'),
      answer: t('faq.3.answer')
    },
    {
      id: 4,
      question: t('faq.4.question'),
      answer: t('faq.4.answer')
    }
  ];

  return (
    <section id="Faq" className={`section ${s.sectionFaq}`}>
      <div className="container">
        <div className={s.faqWrapper}>
          <ul className={s.faqQuestionList}>
            <li className={s.faqQuestionItemTitle}>
              <h3 className={`title ${s.faqTitle}`}>FAQ</h3>
              <div className={s.fadingLine}></div>
            </li>
            {faqquestions.map((question, index) => (
              <li
                key={index}
                className={s.faqQuestionItem}
                onClick={() => handleClick(index)}
              >
                <div className={s.faqQuestionItemBtn}>
                  <p className={s.faqAnswerText}>{question.question}</p>
                  <svg
                    className={
                      activeIndex !== index
                        ? `${s.faqIcon}`
                        : `${s.faqIcon} ${s.faqIconReverse}`
                    }
                  >
                    <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                  </svg>
                </div>
                {activeIndex === index ? (
                  <p className={s.faqAnswerText}>{question.answer}</p>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
          <div className={s.faqImage}>
            <picture className={s.aboutMePhotoPicture}>
              <source
                srcSet="/img/faq/image_hand.webp 1x, /img/faq/image_hand_x2.webp 2x"
                type="image/webp"
              />
              <img src="/img/faq/image_hand.webp" alt="Часті запитання" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
