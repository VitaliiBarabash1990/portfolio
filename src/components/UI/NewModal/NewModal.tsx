import CustomLink from '@/components/CustomLink/CustomLink';
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
        <div className={s.booksy_button}>
          <CustomLink href="https://booksy.com/pl-pl/224820_kolibry-studio_salon-kosmetyczny_19380_swinoujscie?do=invite&_branch_match_id=1418567211639192818&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVd8r2LSmoKjeN8E2yrytKTUstKsrMS49PKsovL04tsnXLBIrlVwAADwPM3z0AAAA%3D">
            <svg className={s.icon_books}>
              <title>button</title>
              <image
                href="/img/register_form/Booksy_logo_black.png"
                x="0"
                y="0"
                className={s.icon_books_logo}
              />
            </svg>
          </CustomLink>
        </div>
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
