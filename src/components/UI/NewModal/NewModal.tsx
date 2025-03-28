import {useTranslations} from 'next-intl';
import s from './NewModal.module.css';

interface Props {
  toggleModalRegister: () => void;
}

const NewModal: React.FC<Props> = ({toggleModalRegister}) => {
  const t = useTranslations('ModalSignUp');

  return (
    <ul className={s.modal_sign_list}>
      <li className={s.modal_sign_item}>
        <h4 className={s.modal_sign_title}>{t('title_v1')}</h4>
        <div className={s.booksy_button}></div>
      </li>
      <li className={s.modal_sign_item}>
        <h4 className={s.modal_sign_title}>{t('title_v2')}</h4>
        <button
          className={s.gmail_button}
          type="button"
          onClick={toggleModalRegister}
        >
          <svg className={s.icon_email}>
            <use href="/symbol-defs.svg#icon-gmail"></use>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default NewModal;
