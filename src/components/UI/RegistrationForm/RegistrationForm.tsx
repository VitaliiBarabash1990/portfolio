import s from './RegistrationForm.module.css';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import toast, {Toaster} from 'react-hot-toast';
import {useTranslations} from 'next-intl';

interface FormValues {
  name: string;
  email: string;
  number: string;
}

interface Props {
  onClose: () => void;
}

export default function RegistrationForm({onClose}: Props) {
  const t = useTranslations('formik');

  const initialValues: FormValues = {
    name: '',
    email: '',
    number: ''
  };

  const onlyWords = /^[a-zA-Z]+$/;
  const phoneNumberRules =
    // /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    // /^(\+48|\+380|\+49|\+44)?[-\s]?\(?\d{2,4}\)?[-\s]?\d{3}[-\s]?\d{2,4}[-\s]?\d{0,4}$/;
    // /^(\+48\d{9}|\+380\d{9}|\+49\d{10}|\+44\d{10})$/;
    /^(\+48\d{9}|\+380\d{9})$/;

  const req = [
    {p0: t('yup.name.0')},
    {p1: t('yup.name.1')},
    {p2: t('yup.name.2')},
    {p3: t('yup.name.3')},
    {p4: t('yup.email.0')},
    {p5: t('yup.email.1')},
    {p6: t('yup.number.0')},
    {p7: t('yup.number.1')}
  ];

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyWords, `${req[0].p0}`)
      .min(3, `${req[1].p1}`)
      .max(30, `${req[2].p2}`)
      .required(`${req[3].p3}`),
    email: Yup.string().email(`${req[4].p4}`).required(`${req[5].p5}`),
    number: Yup.string()
      .matches(phoneNumberRules, {message: `${req[6].p6}`})
      .required(`${req[7].p7}`)
  });

  const succsessContact = () => toast.success('Contact successfully added!');

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
        toast.success('Сообщение успешно отправлено!');
        resetForm();
      } else {
        toast.error('Ошибка при отправке сообщения.');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      toast.error('Ошибка при отправке сообщения.');
    }
    onClose();
  };

  return (
    <div className={s.container__form}>
      <div className={s.container__title_lashes}>
        <h2 className={s.formik__title}>{t('title')}</h2>
        <div className={s.formik__img_container}>
          <img
            className={s.formik__lashes_right}
            src="/img/register_form/lashes.png"
            alt="lashes-right"
          />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
        validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <p className={s.formik__name_label}>{t('name')}</p>
            <Field
              className={s.formik__input}
              type="text"
              name="name"
              placeholder={t('placeholder.0')}
            />
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <p className={s.formik__name_label}>{t('email')}</p>
            <Field
              className={s.formik__input}
              type="email"
              name="email"
              placeholder={t('placeholder.1')}
            />
            <ErrorMessage name="email" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <p className={s.formik__name_label}>{t('number')}</p>
            <Field
              className={s.formik__input}
              type="tel"
              name="number"
              placeholder={t('placeholder.2')}
            />
            <ErrorMessage name="number" component="p" className={s.error} />
          </label>
          <button className={s.formik__btn} type="submit">
            {t('button')}
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}
