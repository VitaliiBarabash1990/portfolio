'use client';

import {useTranslations} from 'next-intl';
import s from './Footer.module.css';
import SectionLayout from '../SectionLayout/SectionLayout';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import toast, {Toaster} from 'react-hot-toast';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function Footer() {
  const t = useTranslations('footer');

  const initialValues: FormValues = {
    name: '',
    email: '',
    message: ''
  };

  const onlyWords = /^[a-zA-Zа-яА-ЯіІєЄїЇ]+$/;

  const req = [
    {p0: 'ТІЛЬКИ СЛОВА!'},
    {p1: 'Мінімум 3 символа!'},
    {p2: 'Максимум 30 символів!'},
    {p3: "Це поле обов'язкове!"},
    {p4: 'Не коректрий email!'},
    {p5: 'Ведіть валідний email!'},
    {p6: 'Повідомлення повинно містити від 10 до 500 символів!'}
  ];

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyWords, `${req[0].p0}`)
      .min(3, `${req[1].p1}`)
      .max(30, `${req[2].p2}`)
      .required(`${req[3].p3}`),
    email: Yup.string().email(`${req[4].p4}`).required(`${req[5].p5}`),
    message: Yup.string()
      .min(10, `${req[6].p6}`)
      .max(500, `${req[6].p6}`)
      .required(`${req[3].p3}`)
  });

  const handleAdd = async (
    values: FormValues,
    {resetForm}: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      });

      if (response.ok) {
        toast.success('Повідомлення успішно відправлено!');
        resetForm();
      } else {
        toast.error('Помилка при відправці повідомлення.');
      }
    } catch (error) {
      console.error('Помилка відправки:', error);
      toast.error('Помилка при відправці повідомлення.');
    }
  };
  return (
    <SectionLayout id="Footer">
      <div className={s.footerWrapper}>
        <div className={s.footerTitleBlock}>
          <h3 className={`title ${s.footerTitle}`}>Обговоримо проєкт?</h3>
          <div className={s.fadingLine}></div>
        </div>
        <ul className={s.footerTop}>
          <li className={s.footerDescrItem}>
            <p className={s.footerText}>
              Напишіть мені в одному з месенджерів або залиште свої контакти, і
              я зв'яжусь із вами найближчим часом для надання консультації та
              узгодження деталей співпраці! Я відкритий до обговорення вашого
              проєкту, готовий вислухати ваші ідеї та запропонувати найкращі
              рішення для їх реалізації. Разом ми зможемо створити ефективний,
              стильний та функціональний веб-продукт, який відповідатиме вашим
              бізнес-цілям. Зі мною легко працювати, я завжди на зв'язку та
              готовий надати підтримку на всіх етапах розробки.
            </p>
            <ul className={s.footerContact}>
              <li className={s.footerContactItem}>
                <a href="tel:+380639124311" className={s.footerText}>
                  +38 (063) 912 43 11
                </a>
              </li>
              <li className={s.footerContactItem}>
                <a
                  href="mailto:vitalij.barabash007@gmail.com"
                  className={s.footerText}
                >
                  vitalij.barabash007@gmail.com
                </a>
              </li>
              <li className={s.footerSocial}>
                <ul className={s.footerSocialList}>
                  <li className={s.footerSocialItem}>
                    <a href="">
                      <svg className={s.footerSocIcon}>
                        <use href="/symbol-defs.svg#icon-telegram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.footerSocialItem}>
                    <a href="">
                      <svg className={s.footerSocIcon}>
                        <use href="/symbol-defs.svg#icon-watsapp"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.footerSocialItem}>
                    <a href="">
                      <svg className={s.footerSocIcon}>
                        <use href="/symbol-defs.svg#icon-instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={s.footerSocialItem}>
                    <a href="">
                      <svg className={s.footerSocIcon}>
                        <use href="/symbol-defs.svg#icon-linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={s.footerFormItem}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleAdd}
              validationSchema={orderSchema}
            >
              <Form className={s.form}>
                <label className={s.label}>
                  <p className={s.nameLabel}>Ім’я</p>
                  <Field
                    className={s.input}
                    type="text"
                    name="name"
                    placeholder="Введіть ім’я"
                  />
                  <ErrorMessage name="name" component="p" className={s.error} />
                </label>
                <label className={s.label}>
                  <p className={s.nameLabel}>Email</p>
                  <Field
                    className={s.input}
                    type="email"
                    name="email"
                    placeholder="Введіть свій Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className={s.error}
                  />
                </label>
                <label className={s.label}>
                  <p className={s.nameLabel}>Ваше питання</p>
                  <Field
                    className={`${s.input} ${s.textArea}`}
                    as="textarea"
                    name="message"
                    row={3}
                    placeholder="Напишіть сюди ваше питання ....."
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className={s.error}
                  />
                </label>
                <button className={s.formBtn}>Замовити консультацію</button>
              </Form>
            </Formik>
          </li>
        </ul>

        <div className={s.footerBootom}>
          <p className={s.footerBootomText}>Created by Vitalii Barabash</p>
          <p className={s.footerBootomText}>All rights reserved</p>
        </div>
      </div>
    </SectionLayout>
  );
}
