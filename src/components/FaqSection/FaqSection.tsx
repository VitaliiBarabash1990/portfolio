'use client';

import React, {useState} from 'react';
import SectionLayout from '../SectionLayout/SectionLayout';
import s from './FaqSection.module.css';
import faqquestions from './faqquestion.json';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
